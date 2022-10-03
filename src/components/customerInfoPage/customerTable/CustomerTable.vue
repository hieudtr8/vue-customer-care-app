<template>
  <div class="mx-4">
    <div id="create-user-container" class="mb-3">
      <button id="create-user" @click="toggleModalCreateNewUser">Tạo người dùng mới</button>
    </div>
    <div id="table-list">
      <div id="table-tabs-container" class="d-flex">
        <div @click="changeTableTab('listUser')" class="table-tab" :class="{active: currentTab === 'listUser'}">
          Danh sách người dùng
        </div>
        <div @click="changeTableTab('listNotes')" class="table-tab" :class="{active: currentTab === 'listNotes'}">
          Ghi chú
        </div>
      </div>
      <div id="main-table">
        <div v-if="currentTab === 'listUser'">
          <TableUser :listUser="listUser" />
        </div>
        <div v-else-if="currentTab === 'listNotes'">
        </div>
      </div>
    </div>
  </div>
  <teleport to='body'>
    <div id="modal-wrapper" @click="toggleModalCreateNewUser">
      <PopupModal :showModal="showModalCreateUser" :haveSave="true" @saveModal="handleSaveUser"
        @closeModal="toggleModalCreateNewUser">
        <template #modal-header>
          <div>
            Thông tin cá nhân
          </div>
        </template>
        <template #modal-body>
          <div>
            <UserRegisterForm />
          </div>
        </template>
      </PopupModal>
    </div>
  </teleport>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import TableUser from "./TableUser.vue";
import PopupModal from "@/components/PopupModal.vue";
import UserRegisterForm from "@/components/UserRegisterForm.vue";


export default {
  async setup () {
    const currentTab = ref("listUser");
    const showModalCreateUser = ref(false);
    const changeTableTab = (tab) => {
      currentTab.value = tab;
    };
    const store = useStore();
    let loading = true;
    let listUser = ref([]);
    await store.dispatch('getListUser');
    if (store.state.listUser) {
      listUser = store.state.listUser;
      loading = false;
    }
    // const createNewUser = () => {
    //   const postData = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       "tags": [
    //         "Active",
    //         "Vip"
    //       ],
    //       "email": "test@gmail.com",
    //       "address": "Số nhà 170, xx, xx, xx",
    //       "id_card": "02221321342323",
    //       "fullname": "Test hehe",
    //       "password": "c4ca4238a0b923820dcc509a6f75849b",
    //       "username": "test123",
    //       "phone_number": "0366954281",
    //       "profile_picture": "https://www.shareicon.net/data/512x512/2016/08/18/810266_man_512x512.png"
    //     },),
    //   };
    //   fetch(
    //     'https://api.npoint.io/fdc481fbd7f82fc24f4d/',
    //     postData
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(`🌊 | file: CustomerTable.vue | line 73 | data`, data);
    //     });

    // }
    const toggleModalCreateNewUser = () => {
      showModalCreateUser.value = !showModalCreateUser.value;
    }

    const handleSaveUser = () => {
      console.log('save user')
    }
    return { currentTab, changeTableTab, listUser, loading, showModalCreateUser, toggleModalCreateNewUser, handleSaveUser };
  },
  components: { TableUser, PopupModal, UserRegisterForm }
}
</script>
<style scoped>
#create-user-container {
  width: 100%;
  height: 15vh;
  position: relative;
}

#create-user {
  position: absolute;
  color: #FFFF;
  bottom: 0;
  right: 0;
  font-size: 22px;
  background-color: #0070D2;
  border-radius: 6px;
  padding: 8px 20px;
  border: none;
}

#table-tabs-container {
  width: 100%;
  border-bottom: 4px solid #DD7A01;
}

.table-tab {
  text-align: center;
  font-size: 22px;
  border-top: 3px solid #CFCFCF;
  border-left: 1px solid #A4A4A4;
  border-right: 1px solid #CFCFCF;
  border-bottom: none;
  padding: 5px 10px;
  width: 250px;
}

.table-tab.active {
  border-top: 4px solid #DD7A01;
  color: #DD7A01;
}
</style>