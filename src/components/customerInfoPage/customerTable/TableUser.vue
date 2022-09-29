<template>
  <div>
    <table id="table-user" class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Địa chỉ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listUser" :key="index">
          <td scope="col">{{user.fullname}}</td>
          <td @click="toggleModalUser()" class="col-email" scope="col">{{user.email}}</td>
          <td scope="col">{{user.phone_number}}</td>
          <td scope="col">{{user.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="modal-wrapper" @click="toggleModalUser">
    <PopupModal :showModal="showModal">
      <template #modal-header>
        <div>
          Customer Information
        </div>
      </template>
      <template #modal-body>
        <div>
          <CustomerInfo />
        </div>
      </template>
    </PopupModal>
  </div>
</template>
<script>
import PopupModal from "@/components/PopupModal.vue";
import { ref } from "vue";
import CustomerInfo from "../customerInfo/CustomerInfo.vue";

export default {
  props: ["listUser"],
  components: { PopupModal, CustomerInfo },
  setup () {
    const showModal = ref(false);
    const toggleModalUser = () => {
      showModal.value = !showModal.value;
    }
    return { showModal, toggleModalUser };
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#table-user {
  width: 70%;
}

.col-email {
  font-family: 'IBM Plex Mono', monospace;
  color: #3168FF;
  text-decoration: underline;
  font-size: 13px;
  cursor: pointer;
  line-height: 16px;
}
</style>