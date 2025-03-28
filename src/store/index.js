import {createStore} from 'vuex'
import axios from "axios";


export default createStore({
    state() {
        return {
            information: [],
        }
    },
    getters: {
        information(state) {
            return state.information
        }
    },
    mutations: {
        setInformation(state, data) {
            state.information = data
        },
        addDoctor(state, data) {
            state.information.push({...doctor, id: Date.now()})
        },
        removeDoctor(state, doctorId) {
            state.information = state.information.filter(doctor => doctor.id !== doctorId)
        },
        updateDoctor(state, updateDoctor) {
            const index = state.information.findIndex(doctor => doctor.id === updateDoctor.id)
            if (index !== -1) {
                state.information[index] = updateDoctor
            }
        }
    },
    actions: {
        async loadFromJSON({commit}) {
            try {
                const response = await axios.get("http://localhost:3000/data.json");
                commit("setInformation", response.data);
                console.log("Данные загружены", error);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            }
        },
        async saveToJSON({state}) {
            try {
                await axios.post("http://localhost:3000/data.json", state.information);
            console.log("Данные сохранены")
            } catch (error) {
                console.error("Ошибка сохранения")
            }
        }
    }
})
