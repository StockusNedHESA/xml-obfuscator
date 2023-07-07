import {XMLParser, XMLBuilder} from "fast-xml-parser";
import formatXml from "xml-formatter";
import {ToastPluginApi, useToast} from "vue-toast-notification";
import {faker, Faker} from "@faker-js/faker";
import DataInterface from "./storage/store";
import {Ref} from "vue";

export default class Obfuscator {
    Data: Ref<typeof DataInterface>;
    Temp: any;
    Parser: XMLParser;
    Builder: XMLBuilder;
    Toast: ToastPluginApi;

    constructor(Data: Ref<typeof DataInterface>) {
        this.Data = Data;
        this.Temp = {previous: {}, values: {}};

        this.Parser = new XMLParser({
            ignoreAttributes: true,
            numberParseOptions: {
                hex: false,
                leadingZeros: false,
                skipLike: /\[0-9]/,
            },
        });
        this.Builder = new XMLBuilder();

        this.Toast = useToast();
    }

    public run(file: string): string {
        const spec = this.Parser.parse(file);

        try {
            const newObj = this.parseObject({DataFutures: spec.DataFutures});
            const output = this.Builder.build(newObj);
            return formatXml(output, {collapseContent: true});
        } catch (error: any) {
            this.Toast.error(`Error occured: ${error.message}`)
            throw error
        }
    }

    private parseObject(obj: any): any {
        let newObj: any = {};

        for (let property in obj) {
            // Handle Objects and Array, non string and numeric values
            if (typeof obj[property] == "object") {
                if (!Array.isArray(obj[property])) {
                    newObj[property] = this.parseObject(obj[property]);
                    continue;
                }

                newObj[property] = obj[property].map((item: any) =>
                    this.parseObject(item)
                );
                continue;
            }

            if (this.Data.value.config.remove.includes(property)) continue;

            try {
                newObj[property] = this.anonamise(property, String(obj[property]));
            } catch (error: any) {
                this.Toast.error(`Anonamise: Failed to obfuscate ${property}`);
                throw error;
            }
        }

        return newObj;
    }

    private anonamise(property: string, value: string): string | number {
        var keyIndex = this.Data.value.config.keys.findIndex(
            (item) => item.key == property
        );

        if (keyIndex !== -1) {
            if (this.Temp.values[value]) return this.Temp.values[value];

            const data =
                this.Temp.previous[property] || this.Data.value.config.keys[keyIndex].replace;

            let output = "";
            if (/[a-zA-Z]/g.test(value)) {
                var prefix = data.match(/^[a-zA-Z]*/gm)![0];
                output = prefix + (Number(data.match(/\d+/)![0]) + 1);
            } else output = String(Number(data) + 1);
            
            /**
             * Previous determines what was the previous value for that property - in order to generate a sequence
             * Value determines that an occurance of a repeated key should be replaced with generated
             **/
            this.Temp.previous[property] = output;
            this.Temp.values[value] = output;

            return output;
        }

        var randomizeKey = this.Data.value.config.randomize.findIndex(
            (item) => item.key == property
        );

        if (randomizeKey !== -1) {
            const data = this.Data.value.config.randomize[randomizeKey];

            const Type = faker[data.type as keyof Faker];
            const API: (params: any) => string =
                Type[data.format as keyof typeof Type];
            return API(data.parameters);
        }

        return value;
    }
}
