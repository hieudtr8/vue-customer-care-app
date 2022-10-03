<template>
  <div class="form-register">
    <div class="input-profile-picture" @click="file.click()">
      <input type="file" class="d-none" ref="file" :change="handleInputFile">
      <img class="insert-image" src="../assets/images/insert-image.png" alt="">
      <div class="camera-icon-container">
        <img class="camera-icon" src="../assets/images/camera-icon.png" alt="">
      </div>
    </div>
    <div class="mt-4 d-flex flex-wrap justify-content-between">
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="username">Tên người dùng</label>
        <input type="text" name="username" id="username">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="fullname">Họ và tên</label>
        <input type="text" name="fullname" id="fullname">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="email">Email</label>
        <input type="text" name="email" id="email">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="pasword">Mật khẩu</label>
        <input type="password" name="pasword" id="pasword">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="phone_number">Số điện thoại</label>
        <input type="text" name="phone_number" id="phone_number">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="address">Địa chỉ</label>
        <input type="text" name="address" id="address">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="id_card">Số CMND</label>
        <input type="text" name="id_card" id="id_card">
      </div>
      <div class="input-text-container">
        <label class="d-block mb-2 text-secondary" for="tags">Thẻ</label>
        <MultiSelectInput :options="listTags" @changeOptionSelect="changeOptionSelect"/>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MultiSelectInput from './MultiSelectInput.vue'

export default {
  components: {
    MultiSelectInput
},
  setup () {
    const file = ref("");
    const tagValue = ref("");
    const listTags = ['Vip', 'Admin'];
    const handleInputFile = (e) => {
      console.log(`🌊 | file: UserRegisterForm.vue | line 14 | e`, e);
    }
    const changeOptionSelect = (value) => {
      tagValue.value = value;
    }
    return { handleInputFile, file, tagValue, listTags, changeOptionSelect };
  }
}
</script>
<style scoped>
.form-register {
  margin-top: 3vh;
  width: 100%;
}

.input-profile-picture {
  cursor: pointer;
  margin: 0px auto;
  background-color: #DBDADB;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  position: relative;
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