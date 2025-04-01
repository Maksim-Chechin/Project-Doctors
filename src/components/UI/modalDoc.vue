<template>
  <div @click.stop>
    <slot></slot>
  </div>

</template>

<script setup>
import {defineEmits} from 'vue'

const emits = defineEmits(['closeDelete'])
</script>

<style scoped>
.title-modal-list {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

</style>
