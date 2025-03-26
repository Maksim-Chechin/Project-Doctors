<template>
  <div class="infoItem">
    <div class="listGrid">

      <div class="infoDoctors">
        <div class="listGrid-info">
          <span> ФИО врача </span>
          <p>{{ info.name }}</p>
        </div>
        <div class="listGrid-info">
          <span>Специальность</span>
          <p>{{ info.speciality }}</p>
        </div>
        <!--      <div class="listGrid-info">-->
        <!--        <span>Клиника</span>-->
        <!--        <p>{{ info.clinic }}</p>-->
        <!--      </div>-->
        <!--      <div class="listGrid-info">-->
        <!--        <span>Адрес</span>-->
        <!--        <p>{{ info.address }}</p>-->
        <!--      </div>-->
        <div class="listGrid-info">
          <span>Телефон/Email</span>
          <p>{{ info.telEmail }}</p>
        </div>
        <!--      <div class="listGrid-info">-->
        <!--        <span>Сотрудничающий</span>-->
        <!--        <p>{{ info.cooperation }}</p>-->
        <!--      </div>-->
      </div>

      <div class="infoItemBoxBtn">
        <button
            class="btn-teal"
            @click="editInfo"
        >Изменить
        </button>
        <button
            class="btn-red"
            @click="isOpenDelete = true"
        >Удалить
        </button>
      </div>
    </div>
    <modal-edit
        v-if="isOpenEditor"
        @closeEditor="isOpenEditor = false"
        v-model="editedInfo.speciality"
    >
      <div class="editBox">
        <h4>ФИО</h4>
        <div><input class="input" v-model="editedInfo.name" type="text"></div>
        <h4>Специальность</h4>
        <div><input class="input" v-model="editedInfo.speciality" type="text"></div>
        <h4>Клиника</h4>
        <div><input class="input" v-model="editedInfo.clinic" type="text"></div>
        <h4>Адрес</h4>
        <div><input class="input" v-model="editedInfo.address" type="text"></div>
        <h4>Телефон/Email</h4>
        <div><input class="input" v-model="editedInfo.telEmail" type="text"></div>
        <h4>Дополнительная информация</h4>
        <div><input class="input" v-model="editedInfo.additionalInformation" type="text" ></div>
      </div>
      <div class="modalEditBox">
        <button
            class="btn-teal"
            @click="saveInfo"
        >Сохранить
        </button>
        <button
            class="btn-teal"
            @click="canselEdit"
        >Отменить
        </button>
      </div>
    </modal-edit>


    <modal-delete v-if="isOpenDelete" @closeDelete="isOpenDelete = false">
      <h2>Действительно хотите удалить?</h2>
      <div class="modalDeleteBox">
        <button
            class="btn-red"
            @click="$emit('remove', info)"
        >Да
        </button>
        <button
            class="btn-teal"
            @click="canselEdit"
        >Нет
        </button>
      </div>
    </modal-delete>


  </div>
</template>

<script>
import ModalEdit from "@/components/UI/modalEdit.vue";
import MyInput from "@/components/UI/myInput.vue";
import ModalDelete from "@/components/UI/modalDelete.vue";

export default {
  components: {ModalDelete, MyInput, ModalEdit,},
  emits: ['remove', 'update',],
  props: {
    info: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      isEdited: false,
      editedInfo: {...this.info},
      isOpenEditor: false,
      isOpenDelete: false,
    }
  },
  methods: {
    editInfo() {
      this.isOpenEditor = true
      this.editedInfo = {...this.info};
    },
    saveInfo() {
      this.isEdited = false
      this.$emit('update', this.editedInfo)
      this.isOpenEditor = false
    },
    canselEdit() {
      this.editedInfo = {...this.info}
      this.isEdited = false
      this.isOpenEditor = false
      this.isOpenDelete = false
    }
  }
}
</script>

<style scoped>

.listGrid {
  display: grid;
  grid-template-columns: 1fr 100px;
}

.infoItem {
  align-items: center;
  padding: 30px 5px;
  margin: 10px 0;
  box-shadow: 0 0 10px #e7e7e7;
  border-radius: 5px;
  text-align: left;
}

.infoDoctors {
  display: flex;
  justify-content: space-around;
}

.listGrid-info {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  max-width: 120px;
}

.listGrid-info span {
  font-weight: bold;
  margin-bottom: 10px;
}


.infoItemBoxBtn {
  display: grid;
  grid-template-rows: 50% 50%;
  grid-gap: 10%;
}

.modalEditBox {
  position: absolute;
  display: grid;
  grid-gap: 10%;
  bottom: 20px;
  right: 20px;
  width: 80px;
}

.modalEditBox button {
  width: 100%;
}

.modalDeleteBox {
  display: grid;
  grid-template-columns: 20% 20%;
  justify-content: space-evenly;
}

.modalDeleteBox button {
  margin-top: 30%;
}

</style>
