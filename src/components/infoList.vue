<template>
  <info-item
      :info="info"
      v-for="info in information"
      :key="info.id"
      @remove="$emit('remove', info)"
      @update="updateInfo"
  ></info-item>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import InfoItem from "@/components/infoItem.vue";

const store = useStore();
const information = computed(() =>
    store.state.doc.information
)
const updateInfo = (updateInfo) => {
  store.dispatch("doc/updateDoctor", updateInfo);
}
</script>

<style scoped>

</style>
