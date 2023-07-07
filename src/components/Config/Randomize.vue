<script setup lang="ts">
import { faker, Faker } from "@faker-js/faker";
import { getCurrentInstance } from "vue";

const { Data } = defineProps(["Data"])
const instance = getCurrentInstance()

const filter = (key: string) => !key.startsWith("_")
const fakerKeys = Object.keys(faker).filter(filter)

function typeKeys(type: string) {
    return Object.keys(faker[type as keyof Faker]).filter(filter)
}

function update(index: number) {
    Data.value.config.randomize[index].format = ""

    instance?.proxy?.$forceUpdate()
}

function insert() {
    Data.value.config.randomize.push({
        key: 'Template',
        type: 'word',
        format: 'adjective',
        parameters: 10,
    })

    instance?.proxy?.$forceUpdate()
}
</script>

<template>
    <div id="randomize" class="tabcontent">
        <p>Key - Element name</p>
        <p>Type - Module type in <a target="_blank" href="https://next.fakerjs.dev/api/">Faker.js</a></p>
        <p>Format - What type method inside of Module type -
            <a target="_blank" href="https://next.fakerjs.dev/api/word.html#adjective">Example</a>
        </p>
        <p style="margin-bottom: 0.5rem;">Parameters - What options/parameters should be passed into Format</p>
        <div class="flex options" v-for="(option, index) in Data.value.config.randomize" :key="index">
            <div class="option">

                <div class="content">
                    <label for="key">Key</label>
                    <input name="key" type="text" placeholder="Key" v-model="option.key" />
                </div>
                <div>
                    <label for="type">Type</label>
                    <v-select name="type" :options="fakerKeys" v-model="option.type" @option:selected="() => update(index)" />
                </div>
                <div>
                    <label for="format">Format</label>
                    <v-select name="format" :options="typeKeys(option.type)" v-model="option.format" />
                </div>
                <div>
                    <label for="parameter">Parameter</label>
                    <input name="parameter" type="text" placeholder="Parameter" v-model="option.parameters" />
                </div>
            </div>
            <button @click="() => Data.value.config.randomize.splice(index, 1)">X</button>
        </div>
        <div class="absolute left">
            <div class="insert">
                <h3>Insert Randomizer</h3>
                <button @click="insert">Insert</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
*>>> {
    --vs-controls-color: #171717;
    --vs-border-color: #242424;

    --vs-dropdown-bg: #242424;
    --vs-dropdown-color: white;
    --vs-controls-color: white;

    --vs-selected-color: #eeeeee;
    --vs-search-input-color: #eeeeee;

    --vs-dropdown-option--active-bg: #171717;
    --vs-dropdown-option--active-color: white;
}

.options {
    border-top: solid #242424 3px;
    border-bottom: solid #242424 3px;
}

.option {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
    padding-bottom: 0.5rem;
}

.option .content {
    display: grid;
}

.v-select {
    max-width: 13rem !important;
}
</style>