import {ref, watch} from "vue";
import DefaultData from "./store";
import {useToast} from "vue-toast-notification";

const toast = useToast()

export default {
    data: ref(DefaultData),
    init: function () {
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", JSON.stringify(DefaultData));
        } else this.data.value = JSON.parse(localStorage.getItem("data")!);

        watch(
            () => this.data,
            (_, newValue) => {
                toast.clear()
                toast.info("Value updated")
                localStorage.setItem("data", JSON.stringify({...DefaultData, config: newValue.value.config}))
            },
            {deep: true}
        );
    },
};

export function reset() {
    localStorage.clear();
    location.reload();
}
