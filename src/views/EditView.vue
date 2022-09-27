<template>
  <NavBar />
  <div class="d-flex">
    <SideBar />
    <div class="w-100 justify-content-center d-flex">Không có nội dung</div>
  </div>
</template>
<script>
import SideBar from "../components/sidebar/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: { SideBar, NavBar },
  setup () {
  }
}
</script>
<style lang="">
  
</style>