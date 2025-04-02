<template>
  <div class="container mainContent">
    <div class="mainTitleLeft">
      <h2>Список врачей</h2>
      <div class="box-btns">
        <button
            class="btn-teal"
            @click="isOpen = true"
        >Добавить врача
        </button>
        <button
            class="btn-teal"
            @click="toggleList"
            style="margin-left: 20px;"
        >Весь список
        </button>

      </div>
      <div class="modalForm">
        <modal-form v-if="isOpen" @close="isOpen = false">
          <edit-info
              @create="createInfo"
          ></edit-info>
        </modal-form>
      </div>
      <div>
        <menu-specialists
            :array1="information"
            @selectedDoctor="handleSelectedDoctor"
        ></menu-specialists>
      </div>
    </div>

    <div class="mainTitleRight">
      <modal-doc v-if="isOpenDoc">
        <div class="modalDocPosition">
          <div class="modalDoc">
            <div class="modalDocTitle">
              <h2>Информация о враче</h2>
              <button class="btn-red" @click="isOpenDoc = false"> Закрыть</button>
            </div>
            <div class="modalDocItem">
              <p>Имя</p>
              <span>{{ informationDoctors.name }}</span>
              <p>Специальность</p>
              <span>{{ informationDoctors.speciality }}</span>
              <p>Клиника</p>
              <span> {{ informationDoctors.clinic }}</span>
              <p>Адрес</p>
              <span>{{ informationDoctors.address }}</span>
              <p>Телефон/Email</p>
              <span>{{ informationDoctors.telEmail }}</span>
              <p>Дополнительная информация</p>
              <span>{{ informationDoctors.additionalInformation }}</span>
            </div>
          </div>
        </div>
      </modal-doc>

      <modal-list v-if="isOpenInfo" @look="isOpenInfo = false">

        <info-list
            :information="information"
            @remove="removeItemInfo"
            @update="updateInfo"
        ></info-list>
      </modal-list>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {ref, computed, watch, onMounted} from "vue";
import EditInfo from "@/components/editInfo.vue";
import InfoList from "@/components/infoList.vue";
import ModalList from "@/components/UI/modalList.vue";
import ModalForm from "@/components/UI/modalForm.vue";
import MenuSpecialists from "@/components/menuSpecialists.vue";
import ModalDoc from "@/components/UI/modalDoc.vue";

const store = useStore();
const isOpen = ref(false);
const isOpenInfo = ref(false);
const isOpenDoc = ref(false);
const informationDoctors = ref(null);

const information = computed(() =>
  store.state.doc.information
)

const createInfo = (info) => {
  store.dispatch("doc/addDoctor", info);
}

const removeItemInfo = (info) => {
  store.dispatch("doc/removeDoctor", info.id);
}

const updateInfo = (updateInfo) => {
  store.dispatch("doc/updateDoctor", updateInfo);
}

const handleSelectedDoctor = (doctor) => {
  if (isOpenDoc.value && informationDoctors.value === doctor) {
    isOpenDoc.value = false;
    informationDoctors.value = null;
  } else {
    informationDoctors.value = doctor;
    isOpenDoc.value = true;
    isOpenInfo.value = false;
  }
}

const toggleList = () => {
  isOpenInfo.value = !isOpenInfo.value;
  if (isOpenInfo.value) {
    isOpenDoc.value = false;
  }
}

onMounted(() => {
  store.dispatch("doc/loadFromServer")
})

watch(information, () => {
  store.dispatch("doc/saveToServer");
}, {deep: true})


</script>

<style scoped>

.mainTitleLeft h2 {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
}

.modalDoc {
  position: fixed;
  top: 15%;
  left: 60%;
  transform: translateX(-50%);
  padding: 20px;
  min-width: 40%;
  min-height: 60%;
  height: auto;
  box-shadow: 0 0 50px #b0b0b0;
  border-radius: 10px;
}

.modalDocTitle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.modalDocItem p {
  font-size: 16px;
  color: #7a7a7a;
  font-weight: bold;
  margin: 35px 15px 0 15px;
}

.modalDocItem span {
  text-align: left;
  width: 150px;
  font-size: 16px;
  color: #7a7a7a;
  margin: 15px;
}

.box-btns {
  display: flex;
}

.btn-teal {
  color: teal;
  width: 100%;
}

.modalForm {
  padding: 30px 0;
}

</style>
