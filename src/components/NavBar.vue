<template >
  <div class="navbar-container">
    <div class="navbar">
      <SharedSvg name="house-icon" />
      <div class="nav-text">
        <span class="text-black">Home</span>
        <span class="text-gray"> <span class="arrow">></span>Application Center<span class="arrow">></span>...<span
            class="arrow">></span> Application List<span class="arrow">></span></span>
        <span class="text-black">An Application</span>
      </div>
    </div>
  </div>
</template>
<script>
import SharedSvg from "./SharedSvg.vue";

export default {
  components: { SharedSvg }
}
</script>
<style scoped>
.navbar-container {
  margin-left: 10vh;
  height: 8vh;
  position: relative;
}

@media screen and (max-width:600px) {
  .nav-text {
    display: none;
  }
}

.navbar {
  position: absolute;
  bottom: 1vh;
  box-shadow: none !important;
}

.house-icon {
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
}

.arrow {
  font-size: 1;
  margin: 0px 5px;
}

span {
  font-size: 1.5vh;
}
</style>