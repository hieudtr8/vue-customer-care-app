<template>
  <div id="profile-box-container" class="mx-5 mt-5 d-flex flex-column">
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('email')">
      <div class="icon-container">
        <SharedSvg name="thin-message-parcel" />
      </div>
      <span class="box-text ms-4 my-auto">
        Mail <span v-if="email">: {{ email }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('id_card')">
      <div class="icon-container">
        <SharedSvg name="id-card" />
      </div>
      <span class="box-text ms-4 my-auto">
        Số CMND <span v-if="id_card">: {{ id_card }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('phone_number')">
      <div class="icon-container">
        <SharedSvg name="phone-icon" />
      </div>
      <span class="box-text ms-4 my-auto">
        Số điện thoại <span v-if="phone_number">: {{ phone_number }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('address')">
      <div class="icon-container">
        <SharedSvg name="address-book" />
      </div>
      <span class="box-text ms-4 my-auto">
        Địa chỉ <span v-if="address">: {{ address }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import SharedSvg from "@/components/SharedSvg.vue";
import { ref } from 'vue';
export default {
  components: { SharedSvg },
  setup () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let email = ref("");
    let id_card = ref("");
    let phone_number = ref("");
    let address = ref("");
    const showUserInfo = (selectedInfo) => {
      switch (selectedInfo) {
        case 'email':
          email.value = !email.value ? email.value = currentUser[selectedInfo] : "";
          break;
        case 'id_card':
          id_card.value = !id_card.value ? id_card.value = currentUser[selectedInfo] : "";
          break;
        case 'phone_number':
          phone_number.value = !phone_number.value ? phone_number.value = currentUser[selectedInfo] : "";
          break;
        case 'address':
          address.value = !address.value ? address.value = currentUser[selectedInfo] : "";
          break;
      }
    }
    return { showUserInfo, email, id_card, phone_number, address }
  }
}
</script>
<style>
.profile-box {
  cursor: pointer;
}

.icon-container svg {
  width: 36px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
}

.icon-container {
  width: 50px;
}

.box-text {
  font-weight: 400;
  font-size: 22px;
}
</style>