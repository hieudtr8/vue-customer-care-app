<template>
  <div id="profile-box-container" class="mx-5 mt-5 d-flex flex-column">
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('email')">
      <div class="icon-container">
        <SharedSvg name="thin-message-parcel" />
      </div>
      <span class="box-text ms-4 my-auto">
        Mail <span class="d-block" v-if="email"> {{ email }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('id_card')">
      <div class="icon-container">
        <SharedSvg name="id-card" />
      </div>
      <span class="box-text ms-4 my-auto">
        Số CMND <span class="d-block" v-if="id_card">{{ id_card }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('phone_number')">
      <div class="icon-container">
        <SharedSvg name="phone-icon" />
      </div>
      <span class="box-text ms-4 my-auto">
        Số điện thoại <span class="d-block" v-if="phone_number">{{ phone_number }}</span>
      </span>
    </div>
    <div class="d-flex mb-4 profile-box" @click="showUserInfo('address')">
      <div class="icon-container">
        <SharedSvg name="address-book" />
      </div>
      <span class="box-text ms-4 my-auto">
        Địa chỉ <span class="d-block" v-if="address">{{ address }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import SharedSvg from "@/components/SharedSvg.vue";
import { ref, watchEffect } from 'vue';
export default {
  components: { SharedSvg },
  props: ['selectedUser'],
  setup (props) {
    const email = ref("");
    const id_card = ref("");
    const phone_number = ref("");
    const address = ref("");
    const selectedUser = ref("");
    watchEffect(() => {
      selectedUser.value = props.selectedUser;
      email.value = "";
      id_card.value = "";
      phone_number.value = "";
      address.value = "";
    })
    const showUserInfo = (selectedInfo) => {
      switch (selectedInfo) {
        case 'email':
          email.value = !email.value ? email.value = selectedUser.value[selectedInfo] : "";
          break;
        case 'id_card':
          id_card.value = !id_card.value ? id_card.value = selectedUser.value[selectedInfo] : "";
          break;
        case 'phone_number':
          phone_number.value = !phone_number.value ? phone_number.value = selectedUser.value[selectedInfo] : "";
          break;
        case 'address':
          address.value = !address.value ? address.value = selectedUser.value[selectedInfo] : "";
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