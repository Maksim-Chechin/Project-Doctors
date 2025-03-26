<template>
  <div @click.stop>
    <slot></slot>
  </div>

</template>

<script>
export default {
  emits: ['closeDoc']
}
</script>

<style scoped>
.title-modal-list {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

</style>
