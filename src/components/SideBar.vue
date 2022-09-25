<template>
  <div class="sidebar-container">
    <!-- <h1>Sidebar</h1> -->
    <SharedSvg name="sidebar-customer-list" />
    <SharedSvg name="sidebar-edit" />
    <SharedSvg name="sidebar-inbox" />
    <SharedSvg name="sidebar-statistic" />
    <SharedSvg name="customer-info-icon" />
    <SharedSvg name="message-bubble" />
    <SharedSvg name="message-parcel" />
    <SharedSvg name="checklist-icon" />
    <SharedSvg name="id-card" />
    <SharedSvg name="phone-icon" />
    <SharedSvg name="address-book" />
    <SharedSvg name="help-icon" />
    <SharedSvg name="user-tie" />
    <SharedSvg @click="signOut" name="sidebar-sign-out" />
  </div>
</template>
<script>
import { useStore } from "vuex";
import SharedSvg from "./SharedSvg.vue";

export default {
  components: {
    SharedSvg
  },
  setup () {
    const store = useStore();
    console.log(store.state.user)
    const signOut = () => {
      console.log('log out')
      store.dispatch('logout')
      location.reload();
    }

    return { signOut }
  }
}
</script>
<style>
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: #0070D2;
}
</style>