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

<script>
export default {
  emits: ['selectedDoctor'],
  props: {
    array1: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      specialties: [
        { speciality: 'Акушерство' }, { speciality: 'Анестезиология' }, { speciality: 'Гастроэнтерология' },
        { speciality: 'Гематология' }, { speciality: 'Гинекология' }, { speciality: 'Госпитальная медицина' },
        { speciality: 'Интервенционная радиология' }, { speciality: 'Кардиохирургия' }, { speciality: 'Колопроктология' },
        { speciality: 'Комбустиология' }, { speciality: 'Медицина неотложных состояний' }, { speciality: 'Нейрохирургия' },
        { speciality: 'Неонатология' }, { speciality: 'Нефрология' }, { speciality: 'Общая хирургия' },
        { speciality: 'Онкогинекология' }, { speciality: 'Онкология' }, { speciality: 'Ортопедическая хирургия' },
        { speciality: 'Отоларингология — хирургия головы и шеи' }, { speciality: 'Пульмонология' },
        { speciality: 'Реаниматология/Интенсивная терапия' }, { speciality: 'Сосудистая хирургия' }, { speciality: 'Терапия' },
        { speciality: 'Торакальная хирургия' }, { speciality: 'Травматология' }, { speciality: 'Трансплантология' },
        { speciality: 'Урология' }, { speciality: 'Челюстно-лицевая хирургия' }, { speciality: 'Другое' }
      ],
      openIndex: null,
    };
  },
  computed: {
    matches() {
      return this.array1.reduce((acc, item) => {
        if (!acc[item.speciality]) acc[item.speciality] = [];
        acc[item.speciality].push(item);
        return acc;
      }, {});
    },
    matchCounts() {
      return Object.fromEntries(
          Object.entries(this.matches).map(([key, value]) => [key, value.length])
      );
    }
  },
  methods: {
    lookInfo(doctor) {
      this.$emit('selectedDoctor', doctor);
    }
  }
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
  transform: translateY(-10px); /* Исчезает снизу */
}

</style>
