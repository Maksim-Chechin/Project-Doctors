<template>
  <div class="modal-overlay" @click="$emit('closeDelete')">
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {defineEmits} from 'vue'

const emits = defineEmits(['closeDelete'])
</script>

<style scoped>
.modal-content {
  position: relative;
  background: white;
  width: auto;
  height: auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
