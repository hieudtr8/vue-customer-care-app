<template>
  <div class="mx-sm-5 mx-md-4">
    <div id="create-user-container" class="mb-3">
      <button id="create-user" @click="toggleModalCreateNewUser">Tạo người dùng</button>
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
          <TableUser :listUser="listUser" :key="listUser" />
        </div>
        <div v-else-if="currentTab === 'listNotes'">
        </div>
      </div>
    </div>
  </div>
  <teleport to='body'>
    <div id="modal-wrapper" @click="toggleModalCreateNewUser">
      <PopupModal :showModal="showModalCreateUser" :haveCustomFooter="true" @closeModal="toggleModalCreateNewUser">
        <template #modal-header>
          <div>
            Thông tin cá nhân
          </div>
        </template>
        <template #modal-body>
          <Form class="form-register" @submit="onSubmitCreateNewUser">
            <div class="input-profile-picture" :class=" {'show-bg-insert-image': isShowInputProfileImage } "
              @click="file.click()">
              <input type="file" class="d-none" ref="file" @change="handleInputFile"
                accept="image/png, image/gif, image/jpeg" />
              <div class="insert-image-container">
                <img v-if="isShowInputProfileImage" class="insert-image" src="../../../assets/images/insert-image.png"
                  alt="">
                <div class="camera-icon-container">
                  <img class="camera-icon" src="../../../assets/images/camera-icon.png" alt="">
                </div>
              </div>
              <div v-if="!isShowInputProfileImage">
                <img class="display-insert-image" :src="profile_picture" alt="">
                <div class="camera-icon-container">
                  <img class="camera-icon" src="../../../assets/images/camera-icon.png" alt="">
                </div>
              </div>
            </div>
            <span v-if="isShowImageError" role="alert" class="text-danger d-flex justify-content-center">Không được để
              trống</span>
            <ErrorMessage class="text-danger" name="file" />
            <div class="mt-4 d-flex flex-wrap justify-content-between">
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="username">Tên đăng nhập</label>
                <Field type="text" name="username" id="username" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="username" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="fullname">Họ và tên</label>
                <Field type="text" name="fullname" id="fullname" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="fullname" />

              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="email">Email</label>
                <Field type="text" name="email" id="email" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="email" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="password">Mật khẩu</label>
                <Field type="password" name="password" id="password" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="password" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="phone_number">Số điện thoại</label>
                <Field type="text" name="phone_number" id="phone_number" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="phone_number" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="address">Địa chỉ</label>
                <Field type="text" name="address" id="address" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="address" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="id_card">Số CMND</label>
                <Field type="text" name="id_card" id="id_card" :rules="isRequired" />
                <ErrorMessage class="text-danger" name="id_card" />
              </div>
              <div class="input-text-container">
                <label class="d-block mb-2 text-secondary" for="tags">Thẻ</label>
                <MultiSelectInput :options="listTags" @changeOptionSelect="changeOptionSelect" />
                <span v-if="isShowTagsError" role="alert" class="text-danger">Không được để trống</span>
              </div>
              <MDBModalFooter class="w-100 border-0">
                <button type="submit" :disabled="loadingCreateUser" class="btn btn-primary"> <span
                    v-if="!loadingCreateUser"> Lưu </span> <span v-else>
                    <LoadingDot />
                  </span> </button>
                <div class="btn btn-secondary" @click="toggleModalCreateNewUser">Đóng</div>
              </MDBModalFooter>
            </div>
          </Form>
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
import MultiSelectInput from "@/components/MultiSelectInput.vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import { MDBModalFooter } from 'mdb-vue-ui-kit';
import { notify } from "@kyvg/vue3-notification";
import LoadingDot from "../../LoadingDot.vue";
// import LoadingRing from "@/components/LoadingRing.vue";

export default {
  // components: { TableUser, PopupModal, MultiSelectInput, Form, Field, ErrorMessage, MDBModalFooter, LoadingRing },
  components: { TableUser, PopupModal, MultiSelectInput, Form, Field, ErrorMessage, MDBModalFooter, LoadingDot },
  async setup () {
    const currentTab = ref("listUser");
    const showModalCreateUser = ref(false);
    const changeTableTab = (tab) => {
      currentTab.value = tab;
    };
    const store = useStore();
    const listUser = ref([]);
    await store.dispatch('getListUser');

    const profile_picture = ref("");
    const isShowInputProfileImage = ref(false);
    const isShowImageError = ref(false);
    const isShowTagsError = ref(false);
    const file = ref("");
    const tagValue = ref([]);
    const listTags = ['Vip', 'Admin'];
    const loadingCreateUser = ref(false);

    if (store.state.listUser) {
      listUser.value = store.state.listUser;
    }

    const handleInputFile = (e) => {
      const reader = new FileReader();
      if (e.target.files.length) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          profile_picture.value = reader.result;
          isShowInputProfileImage.value = false;
          isShowImageError.value = false;
        }
      }
    }

    const changeOptionSelect = (value) => {
      tagValue.value = value;
      if (tagValue.value.length > 0) {
        isShowTagsError.value = false;
      }
    }

    const toggleModalCreateNewUser = () => {
      showModalCreateUser.value = !showModalCreateUser.value;
      isShowInputProfileImage.value = showModalCreateUser.value;
      profile_picture.value = null;
    }

    const isRequired = (value) => {
      if (value && value.trim()) {
        return true;
      }
      return 'Không được để trống';
    }

    const isValidImageAndTags = () => {
      let valid = true;
      if (isShowInputProfileImage.value && !profile_picture.value) {
        isShowImageError.value = true;
        valid = false
      }
      if (tagValue.value.length == 0) {
        isShowTagsError.value = true;
        valid = false
      }
      return valid;
    }

    const md5 = require('md5');
    const onSubmitCreateNewUser = (value) => {
      if (isValidImageAndTags()) {
        value.tags = tagValue.value;
        value.profile_picture = profile_picture.value;
        value.password = md5(value.password);

        const postListUserWithNew = [...listUser.value, value];

        postCreateNewUser(postListUserWithNew);
      }
    }

    const postCreateNewUser = (data) => {
      loadingCreateUser.value = true;
      const header = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetch(
        'https://api.npoint.io/4e8e26ab328c9a1d15ea',
        header
      )
        .then((response) => response.json())
        .then(async () => {
          await store.dispatch("getListUser");
          if (store.state.listUser) {
            listUser.value = store.state.listUser;
          }
          notify({
            type: "success",
            title: "Trung tâm đăng ký",
            text: "Tạo người dùng mới thành công!",
          });
          loadingCreateUser.value = false;
          toggleModalCreateNewUser();
        });

    }

    return { currentTab, changeTableTab, listUser, showModalCreateUser, toggleModalCreateNewUser, isRequired, listTags, changeOptionSelect, file, tagValue, handleInputFile, profile_picture, isShowInputProfileImage, isShowImageError, isShowTagsError, onSubmitCreateNewUser, loadingCreateUser };
  },
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

.form-register {
  margin-top: 3vh;
  width: 100%;
}

.input-profile-picture {
  cursor: pointer;
  margin: 0px auto;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  position: relative;
}

.show-bg-insert-image {
  background-color: #DBDADB;
}

img.insert-image {
  width: 60px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.camera-icon-container {
  width: 40px;
  height: 40px;
  background-color: #E2DEDF;
  border-radius: 50%;
  right: 0;
  bottom: 10%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

img.camera-icon {
  width: 30px;
  height: 30px;
}

img.display-insert-image {
  border-radius: 50%;
  width: 140px;
  height: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.input-text-container {
  width: 48%;
  display: inline-block;
  margin-bottom: 15px;
}

.input-text-container input {
  width: 100%;
  height: 35px;
  border: 1px solid #CFD4DB;
  border-radius: 5%;
}
</style>