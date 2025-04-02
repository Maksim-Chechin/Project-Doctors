<template>
  <form @submit.prevent class="addInfo">
    <h4>ФИО</h4>
    <my-input placeholder="ФИО врача" v-model="info.name"></my-input>
    <div>
      <label for="selectSpeciality">Специальность</label>
      <select class="input" id="selectSpeciality" v-model="selectSpeciality">
        <option disabled value="">Выберите</option>
        <option v-for="spec in specialtiesList" :key="spec" :value="spec">
          {{ spec }}
        </option>
      </select>
    </div>
    <h4>Клиника</h4>
    <my-input placeholder="Название клиники" v-model="info.clinic"></my-input>
    <h4>Адрес</h4>
    <my-input placeholder="Адрес клиники" v-model="info.address"></my-input>
    <h4>Телефон/Email</h4>
    <my-input placeholder="Телефон/Email" v-model="info.telEmail"></my-input>
    <h4>Дополнительная информация</h4>
    <my-input placeholder="Дополнительная информация" v-model="info.additionalInformation"></my-input>
  </form>
  <button
      class="btn-teal"
      @click="createInfo"
  > Добавить
  </button>
</template>

<script setup>
import MyInput from "@/components/UI/myInput.vue";

import {computed,defineEmits, ref} from 'vue'
import store from "@/store/index.js";

const emits = defineEmits(["closeDelete"])

const specialtiesList = computed(() => store.state.spec.specialtiesList);
const selectSpeciality = ref(null);

const info = ref({
  id: 0,
  name: '',
  speciality: '',
  clinic: '',
  address: '',
  telEmail: '',
  additionalInformation: '',
});

const createInfo = () => {
  const requiredFields = {
    name: "ФИО",
    speciality: "Cпециальность",
    clinic: "Название клиники",
    address: "Адрес",
    telEmail: "Телефон/Email",
  };

  const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !info.value[key]?.trim())
      .map(([, label]) => `- ${label}`);

  if (!selectSpeciality.value || !missingFields.length) {
    alert(`Пожалуйста, заполните все обязательные поля: \n ${ missingFields.join("\n ")}`);
    return;
  }

  info.value.id = Date.now();
  info.value.speciality = selectSpeciality.value;
  emits('create', {...info.value});
  info.value = {
    name: '',
    speciality: '',
    clinic: '',
    address: '',
    telEmail: '',
    additionalInformation: ''
  }
    selectSpeciality.value = null;
}

</script>

<style scoped>
.addInfo {
  position: relative;
}

.btn-teal {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

</style>
