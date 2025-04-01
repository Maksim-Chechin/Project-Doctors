<template>
  <input class="input"
         type="text"
         :value="modelValue"
         @input="upDateInput">
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  modelValue: {String, Number},
})
const emit = defineEmits(["update:modelValue"])
const upDateInput = (event) => {
  emit("update:modelValue", event.target.value)
}
</script>

<style scoped>

</style>

