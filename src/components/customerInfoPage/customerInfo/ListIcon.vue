<template>
  <div id="list-icon-container" class="d-flex justify-content-between mx-5 mt-4">
    <SharedSvg name='customer-info-icon' @click="changeIcon('info')" />
    <SharedSvg name='message-bubble' @click="changeIcon('message-bubble')" />
    <SharedSvg name='message-parcel' @click="changeIcon('message-parcel')" />
    <SharedSvg name='checklist-icon' @click="changeIcon('checklist')" />
  </div>
  <br>
</template>
<script>
import { useStore } from "vuex";
import SharedSvg from "@/components/SharedSvg.vue";
export default {
  components: { SharedSvg },
  setup () {
    const store = useStore();

    const changeIcon = (icon) => {
      store.commit('setCurrentIcon', icon);
    }

    return { changeIcon }
  }
}
</script>
<style lang="css">
@media screen and (min-height:800px) {
  #list-icon-container {
    margin-bottom: 8vh;
  }
}

@media screen and (min-height:1000px) {
  #list-icon-container {
    margin-bottom: 10vh;
  }
}

#list-icon-container svg {
  cursor: pointer;
}
</style>