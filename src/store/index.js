import { createStore } from "vuex";
import { ArrayInformation } from "@/store/modules/ArrayInformation.js";
import { selectSpec } from "@/store/modules/selectSpec.js";

const store = createStore({
    modules: {
        doc: ArrayInformation,
        spec: selectSpec,
    },
});

export default store;
