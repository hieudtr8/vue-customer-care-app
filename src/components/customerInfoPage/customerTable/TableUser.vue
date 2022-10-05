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
        <tr v-for="(user, index) in displayPaginateListUser" :key="index">
          <td scope="col">{{user.fullname}}</td>
          <td @click="openSelectedModalUser(user)" class="col-email" scope="col">{{user.email}}</td>
          <td scope="col">{{user.phone_number}}</td>
          <td scope="col">{{user.address}}</td>
        </tr>
      </tbody>
    </table>
    <nav id="table-user-pagination">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="setCurrentPage(currentPage - 1 )">Previous</a></li>
        <li class="page-item" v-for="(item, index) in listPagination" :key="index" @click="setCurrentPage(item)"><a
            class="page-link">{{item}}</a></li>
        <li class="page-item"><a class="page-link" @click="setCurrentPage(currentPage + 1 )">Next</a></li>
      </ul>
    </nav>
  </div>
  <teleport to='body'>
    <div id="modal-wrapper" @click="closeModalUser">
      <PopupModal :showModal="showModal" @closeModal="closeModalUser">
        <template #modal-header>
          <div>
            Thông tin người dùng
          </div>
        </template>
        <template #modal-body>
          <div>
            <CustomerInfo :selectedUser="selectedModalUser" />
          </div>
        </template>
      </PopupModal>
    </div>
  </teleport>
</template>
<script>
import PopupModal from "@/components/PopupModal.vue";
import { ref } from "vue";
import CustomerInfo from "../customerInfo/CustomerInfo.vue";

export default {
  props: ["listUser"],
  components: { PopupModal, CustomerInfo },
  setup (props) {
    const perPage = 20;
    const currentPage = ref(1);
    const numberOfPages = Math.ceil(props.listUser.length / perPage);
    let listPagination = [];
    for (let i = 1; i <= numberOfPages; i++) {
      listPagination.push(i)
    }
    const displayPaginateListUser = ref([]);
    const setCurrentPage = (page) => {
      if (page > 0 && page <= (numberOfPages)) {
        currentPage.value = page
        displayPaginateListUser.value = props.listUser.slice((currentPage.value - 1) * perPage, currentPage.value * perPage);
      }
    }
    setCurrentPage(1);
    const showModal = ref(false);
    const selectedModalUser = ref(null);
    const openSelectedModalUser = (user) => {
      selectedModalUser.value = user;
      showModal.value = !showModal.value;
    }
    const closeModalUser = () => {
      selectedModalUser.value = null;
      showModal.value = false;
    }
    return { showModal, openSelectedModalUser, selectedModalUser, closeModalUser, listPagination, currentPage, setCurrentPage, displayPaginateListUser };
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#table-user {
  width: 100%;
}

#table-user thead {
  background: rgba(240, 242, 244, 0.5);
  box-shadow: inset -1px 0px 0px rgba(198, 209, 221, 0.5);
  color: #7B8395;
  font-weight: 500;
  font-size: 12px;
}

@media screen and (min-width: 1240px) {
  #table-user {
    width: 75% !important;
  }
}
#table-user-pagination {
  position: relative;
  top:0
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