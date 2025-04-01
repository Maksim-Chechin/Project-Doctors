<template>
  <div class="modal-overlay" @click="$emit('closeEditor')">
    <div class="modal-content" @click.stop>
      <h2>Редактировать данные</h2>
      <hr>
      <br>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {defineEmits} from 'vue';

const emit = defineEmits(["closeEditor"]);
</script>

<style scoped>
.modal-content {
  background: white;
  min-width: 500px;
  width: auto;
  height: auto;
  padding: 30px 30px 120px 30px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: left;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
