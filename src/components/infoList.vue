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
import InfoItem from "@/components/infoItem.vue";

export default {
  components: {InfoItem},
  emits: ['remove'],
  props: {
    information: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateInfo(updatedInfo) {
      const index = this.information.findIndex(item => item.id === updatedInfo.id);
      if (index !== -1) {
        this.information[index] = updatedInfo;
      }
    }
  }
}
</script>

<style scoped>

</style>
