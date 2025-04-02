import axios from "axios";

export const ArrayInformation = {

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
        addDoctor(state, doctor) {
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
        async addDoctor({commit, dispatch}, doctor) {
            commit("addDoctor", doctor);
            await dispatch("saveToServer");
        },
        async removeDoctor({commit, dispatch}, doctorId) {
            commit("removeDoctor", doctorId);
            await dispatch("saveToServer");
        },
        async updateDoctor({commit, dispatch}, doctor) {
            commit("updateDoctor", doctor);
            await dispatch("saveToServer");
        },
        async loadFromServer({commit}) {
            try {
                const response = await axios.get(
                    "https://projecrdoctors-default-rtdb.firebaseio.com/doctors.json");
                commit("setInformation", response.data?.doctors || []);
                console.log("Данные загружены", response.data);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            }
        },
        async saveToServer({state}) {
            try {
                await axios.put(
                    "https://projecrdoctors-default-rtdb.firebaseio.com/doctors.json",
                    {doctors: state.information}
                );
                console.log("Данные сохранены");
            } catch (error) {
                console.error("Ошибка сохранения", error);
            }
        }
    },
    namespaced: true,
}
