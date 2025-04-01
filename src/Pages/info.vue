<template>
  <div class="container mainContent">
    <div class="mainTitleLeft">
      <h2> Дополнительная информация </h2>
    </div>
    <div class="mainTitleRight">
      <span>Здесь будет что-нибудь ещё :)</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.mainTitleLeft{
  display: grid;
  grid-template-rows: 20% 1fr ;
}
.mainTitleLeft h2{
  margin: 30px 0;
  text-align: center;
}

.mainTitleRight{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
