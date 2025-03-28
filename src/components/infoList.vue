<template>
  <info-item
      :info="info"
      v-for="info in information"
      :key="info.id"
      @remove="$emit('remove', info)"
      @update="updateInfo"
  ></info-item>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import InfoItem from "@/components/infoItem.vue";

export default {
  components: {InfoItem},
  emits: ['remove'],

  computed: {
    ...mapState(["information"]),
  },

  methods: {
    ...mapMutations(["updateDoctor"]),
    updateInfo(updatedInfo) {
    this.updateDoctor(updatedInfo);
    }
  }
}
</script>

<style scoped>

</style>
