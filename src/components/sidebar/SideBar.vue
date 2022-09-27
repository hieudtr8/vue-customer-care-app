<template>
  <div class="sidebar-container">
    <router-link to="/customer-info" class="sidebar-link">
      <SharedSvg name="sidebar-customer-list" />
    </router-link>
    <router-link to="/edit" class="sidebar-link">
      <SharedSvg name="sidebar-edit" />
    </router-link>
    <router-link to="/inbox" class="sidebar-link">
      <SharedSvg name="sidebar-inbox" />
    </router-link>
    <router-link to="/statistic" class="sidebar-link">
      <SharedSvg name="sidebar-statistic" />
    </router-link>
    <div style="cursor:pointer;">
      <SharedSvg @click="signOut" name="sidebar-sign-out" />
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import SharedSvg from "../SharedSvg.vue";

export default {
  components: {
    SharedSvg,
  },
  setup () {
    const store = useStore();
    const signOut = () => {
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
  width: 10vh;
  height: 92vh;
  background-color: rgba(0, 112, 210, 0.8);
  text-align: center;
  position: relative;
}

.sidebar-container a.sidebar-link {
  display: inline-block;
  box-sizing: border-box;
  max-width: 10vh;
  height: 8vh;
  background-color: rgba(0, 112, 210, 1);
  position: relative;
}

.sidebar-container a.router-link-active {
  border-left: 10px solid #FF9E2C;
}

.sidebar-container svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
}

.sidebar-sign-out {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8vh;
}
</style>