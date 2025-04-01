<template>
  <div class="title-modal-list">
    <h2>Основная информация о врачах</h2>
    <button class="btn-red" @click="$emit('look')">Закрыть</button>
  </div>
  <div class="modalList">
    <div class="modalList-grid" @click="$emit('look')">
      <div @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineEmits} from 'vue'

const emits = defineEmits(['closeDelete'])
</script>

<style scoped>
.modalList {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.modalList-grid {
  width: 100%;
}

.title-modal-list {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

</style>
