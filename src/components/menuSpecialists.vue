<template>
  <div
      class="menu"
      v-for="(spec, index) in specialties"
      :key="spec.speciality"
      @click="openIndex = index"
      @mouseleave="openIndex = null"
  >
    <button class="menu-button">
      <p>{{ spec.speciality }}</p>
      <span>{{ matchCounts[spec.speciality] || 0 }}</span>
    </button>
    <transition name="fade">
      <div class="dropdown" v-if="openIndex === index">
        <button
            v-for="(item, idx) in matches[spec.speciality]"
            :key="idx"
            @click.stop="lookInfo(item)"
        >
          {{ item.name }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';

const props = defineProps({
  array1: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['selectedDoctor']);
const openIndex = ref(null);

const specialties = ref([
  'Акушерство', 'Анестезиология', 'Гастроэнтерология', 'Гематология', 'Гинекология', 'Госпитальная медицина',
  'Интервенционная радиология', 'Кардиохирургия', 'Колопроктология', 'Комбустиология', 'Медицина неотложных состояний',
  'Нейрохирургия', 'Неонатология', 'Нефрология', 'Общая хирургия', 'Онкогинекология', 'Онкология',
  'Ортопедическая хирургия', 'Отоларингология — хирургия головы и шеи', 'Пульмонология', 'Реаниматология/Интенсивная терапия',
  'Сосудистая хирургия', 'Терапия', 'Торакальная хирургия', 'Травматология', 'Трансплантология', 'Урология',
  'Челюстно-лицевая хирургия', 'Другое'
].map(speciality => ({ speciality })));

const matches = computed(() => {
  return props.array1.reduce((acc, item) => {
    if (!acc[item.speciality]) acc[item.speciality] = [];
    acc[item.speciality].push(item);
    return acc;
  }, {});
});

const matchCounts = computed(() => {
  return Object.fromEntries(
      Object.entries(matches.value).map(([key, value]) => [key, value.length])
  );
});

const lookInfo = (doctor) => {
  emit('selectedDoctor', doctor);
};
</script>

<style scoped>
.menu {
  display: block;
}

.menu-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: #d2d2d2;
  color: #000000;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  margin: 5px 0;
  border-left: 5px solid transparent;
  border-right: 5px solid lightgrey;
}

.menu-button:hover {
  border-left-color: teal;
}

.dropdown {
  background: lightgrey;
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 10;
  box-shadow: 0px 20px 20px #808080;
  box-sizing: border-box;
}

.dropdown button {
  all: unset;
  cursor: pointer;
  padding: 15px;
  text-decoration: none;
  border-left: transparent 5px solid;
  border-right: 6px solid transparent;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.dropdown button:hover {
  border-left-color: teal;
  border-radius: 5px;
  background: #c4c4c4;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
