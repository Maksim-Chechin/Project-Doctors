<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <h2>Добавить врача</h2>
      <hr>
      <br>
      <slot></slot>
      <div class="btn-win-position">
        <button class="btn-red" @click="$emit('close')">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-form',
  emits: (['close'])
}
</script>

<style scoped>
.modal-content {
  position: relative;
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
.modal-content {
  background: white;
  min-width: 500px;
  width: auto;
  height: auto;
  padding: 30px 30px 100px 30px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-win-position {
  position: absolute;
  top: 10px;
  right: 20px;
}


</style>
