<template>
  <div
      class="menu"
      @click="openIndex = index"
      @mouseleave="openIndex = null"
      v-for="(spec, index) in specialties"
      :key="spec.speciality"
  >
    <button
        class="menu-button"
    ><p>{{ spec.speciality }}</p> <span>{{ matchCounts[spec.speciality] || 0 }}</span>
    </button>
    <transition name="fade">
      <div
          class="dropdown"
          v-if="openIndex === index"
      >
        <button
            @click.stop="lookInfo(item)"
            v-for="(item, idx) in getMatchesForSpeciality(spec.speciality)"
            :key="idx"
        >{{ item.name }}
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
        {speciality: 'Акушерство'},
        {speciality: 'Анестезиология'},
        {speciality: 'Гастроэнтерология'},
        {speciality: 'Гематология'},
        {speciality: 'Гинекология'},
        {speciality: 'Госпитальная медицина'},
        {speciality: 'Интервенционная радиология'},
        {speciality: 'Кардиохирургия'},
        {speciality: 'Колопроктология'},
        {speciality: 'Комбустиология'},
        {speciality: 'Медицина неотложных состояний'},
        {speciality: 'Нейрохирургия'},
        {speciality: 'Неонатология'},
        {speciality: 'Нефрология'},
        {speciality: 'Общая хирургия'},
        {speciality: 'Онкогинекология'},
        {speciality: 'Онкология'},
        {speciality: 'Ортопедическая хирургия'},
        {speciality: 'Отоларингология — хирургия головы и шеи'},
        {speciality: 'Пульмонология'},
        {speciality: 'Реаниматология/Интенсивная терапия'},
        {speciality: 'Сосудистая хирургия'},
        {speciality: 'Терапия'},
        {speciality: 'Торакальная хирургия'},
        {speciality: 'Травматология'},
        {speciality: 'Трансплантология'},
        {speciality: 'Урология'},
        {speciality: 'Челюстно-лицевая хирургия'},
        {speciality: 'Другое'},
      ],
      comparisonResult: [],
      openIndex: null,
    }
  },
  methods: {
    compareArrays() {
      this.comparisonResult = this.array1
          .filter(item => this.specialties.some(spec => spec.speciality === item.speciality))
          .map(item => ({
            name: item.name,
            speciality: item.speciality,
            clinic: item.clinic,
            address: item.address,
            telEmail: item.telEmail,
            additionalInformation: item.additionalInformation,

          }));
    },
    getMatchesForSpeciality(speciality) {
      return this.comparisonResult.filter(item => item.speciality === speciality);
    },
    lookInfo(doctor) {
      this.$emit('selectedDoctor', doctor)
    }
  },
  computed: {
    matchCounts() {
      const counts = {};
      this.specialties.forEach(spec => {
        counts[spec.speciality] = this.array1.filter(item => item.speciality === spec.speciality).length;
      });
      return counts;
    }
  },
  watch: {
    array1: {
      handler() {
        this.compareArrays();
      },
      deep: true,
      immediate: true
    }
  }
}
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
