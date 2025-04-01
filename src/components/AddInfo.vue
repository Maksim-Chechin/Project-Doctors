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

import {defineEmits, ref} from 'vue'

const emits = defineEmits(["closeDelete"])
const specialtiesList = [
  'Акушерство',
  'Анестезиология',
  'Гастроэнтерология',
  'Гематология',
  'Гинекология',
  'Госпитальная медицина',
  'Госпитальная медицина',
  'Интервенционная радиология',
  'Кардиохирургия',
  'Колопроктология',
  'Комбустиология',
  'Медицина неотложных состояний',
  'Нейрохирургия',
  'Неонатология',
  'Нефрология',
  'Общая хирургия',
  'Онкогинекология',
  'Онкология',
  'Ортопедическая хирургия',
  'Отоларингология — хирургия головы и шеи',
  'Пульмонология',
  'Реаниматология/Интенсивная терапия',
  'Сосудистая хирургия',
  'Терапия',
  'Торакальная хирургия',
  'Травматология',
  'Трансплантология',
  'Урология',
  'Челюстно-лицевая хирургия',
  'Другое',
];
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
