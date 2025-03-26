<template>
  <div class="fixBlock">
    <div class="container titleBlock">
      <div>
        <div class="logo">КСБ</div>
      </div>
      <div class="search">
        <my-input
            placeholder="Введите для поиска"
        ></my-input>
        <button class="btn-teal">Поиск</button>
      </div>
    </div>
    <div class="navbar">
      <div class="container">
        <button class="btn-width btn" @click="$router.push('/')">Главная страница</button>
        <button class="btn-width btn" @click="$router.push('/collaborating')">Список Врачей</button>
        <button class="btn-width btn" @click="$router.push('/hospitals')">Список Больниц</button>
        <button class="btn-width btn" @click="$router.push('/info')">Дополнительная информация</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.btn {
  font-size: 15px;
  border: none;
  padding: 17px 5px;
  color: #343434;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
}
.btn:hover{
  background-color: #545454;
  color: #e8e8e8;
}

.navbar {
  background-color: #b6b6b6;
  position: relative;
}

.btn-width {
  margin-right: 50px
}

.logo {
  font-size: 35px;
  color: teal;
  border-left: teal 5px solid;
  padding-left: 12px;
  border-radius: 5px 0 0 5px;
  font-weight: bold;
}

.search button {
  margin-left: 20px;
  height: 100%;
}

.search input {
  height: 100%;
}


</style>
