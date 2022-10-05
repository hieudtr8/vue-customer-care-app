<template>
  <div id="list-icon-container" class="d-flex justify-content-between flex-wrap mx-5 mt-4">
    <SharedSvg name='customer-info-icon' class="mb-4" :class=" {'active-icon': currentIcon =='info' } "
      @click="changeIcon('info')" />
    <SharedSvg name='message-bubble' class="mb-4" :class=" {'active-icon': currentIcon =='message-bubble' } "
      @click="changeIcon('message-bubble')" />
    <SharedSvg name='message-parcel' class="mb-4" :class=" {'active-icon': currentIcon =='message-parcel' } "
      @click="changeIcon('message-parcel')" />
    <SharedSvg name='checklist-icon' class="mb-4" :class=" {'active-icon': currentIcon =='checklist' } "
      @click="changeIcon('checklist')" />
  </div>
  <br>
</template>
<script>
import { useStore } from "vuex";
import SharedSvg from "@/components/SharedSvg.vue";
import { computed } from "vue";
export default {
  components: { SharedSvg },
  setup () {
    const store = useStore();

    const changeIcon = (icon) => {
      store.commit('setCurrentIcon', icon);
    }
    const currentIcon = computed(() => store.state.currentIcon);

    return { changeIcon, currentIcon }
  }
}
</script>
<style lang="css">
@media screen and (max-width:950px) {
  #list-icon-container {
    margin-bottom: 0 !important;
  }
}

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
  width: 50px;
  height: 50px;
  cursor: pointer;
}

#list-icon-container svg path {
  fill: rgb(24, 88, 164);
}

#list-icon-container .active-icon svg path {
  fill: rgb(221, 122, 1);
}
</style>