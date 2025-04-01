<template>
  <div class="container mainContent">
    <div class="mainTitleLeft">
      <h2>Добро пожаловать!</h2>
      <div>
        <p>«Прежде всего — не навреди»</p>
        <span>( Гиппократ )</span>
      </div>
    </div>
    <div class="mainTitleRight">
      <div>
        <span>Эта программа предназначена для работы со списком врачей разных медицинских учреждений</span>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
.mainTitleLeft {
  display: grid;
  grid-template-rows: 20% 1fr;
}

.mainTitleLeft div {
  padding: 30px;
}

.mainTitleLeft h2 {
  margin: 30px 0;
  text-align: center;
}

.mainTitleLeft span {
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 20px;
  font-weight: 300;
  margin-top: 30px;
  font-style: italic;
}

.mainTitleLeft p {
  text-align: right;
  font-size: 18px;
  color: teal;
  font-style: italic;
  border-bottom: teal 0.5px solid;
  padding-bottom: 10px;
}

.mainTitleRight {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
