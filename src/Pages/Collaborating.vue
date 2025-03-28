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
          <add-info
              @create="createInfo"
          ></add-info>
        </modal-form>
      </div>
      <div>
        <specialists
            :array1="information"
            @selectedDoctor="handleSelectedDoctor"
        ></specialists>
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

<script>
import AddInfo from "@/components/AddInfo.vue";
import InfoList from "@/components/infoList.vue";
import ModalList from "@/components/UI/modalList.vue";
import ModalForm from "@/components/UI/modalForm.vue";
import axios from "axios";
import Specialists from "@/components/specialists.vue";
import ModalDoc from "@/components/UI/modalDoc.vue";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  data() {
    return {
      isOpen: false,
      isOpenInfo: false,
      isOpenDoc: false,
      informationDoctors: '',
    };
  },
  components: {ModalDoc, Specialists, InfoList, AddInfo, ModalList, ModalForm,},
  computed: {
    ...mapState(["information"]),
    ...mapGetters(["getInformation"]),
  },
  methods: {
    ...mapActions(["addDoctor", "removeDoctor", "updateDoctor" ]),
    ...mapActions(["loadFromJSON", "saveToJSON"]),
    createInfo(info) {
      this.addDoctor(info);
    },
    removeItemInfo(info) {
      this.removeDoctor(info.id);
    },
    updateInfo(updateInfo) {
      this.updateDoctor(updateInfo);
    },
    handleSelectedDoctor(doctor) {
      if (this.isOpenDoc && this.informationDoctors === doctor) {
        this.isOpenDoc = false;
        this.informationDoctors = null;
      } else {
        this.informationDoctors = doctor;
        this.isOpenDoc = true;
        this.isOpenInfo = false;
      }
    },
    toggleList() {
      this.isOpenInfo = !this.isOpenInfo;
      if (this.isOpenInfo) {
        this.isOpenDoc = false;
      }
    }
  },
  mounted() {
    this.loadFromJSON();
  },
  watch: {
    information: {
      handler() {
        this.saveToJSON();
      },
      deep: true
    }
  }
}
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














