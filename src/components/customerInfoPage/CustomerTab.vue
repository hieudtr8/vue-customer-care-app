<template>
  <div class="d-flex tab-container">
    <div class="tab" @click="changeTab('customerInfo')" :class="{active: currentTab === 'customerInfo'}">
      Thông tin khách hàng
    </div>
    <div class="tab" @click="changeTab('search')" :class="{active: currentTab === 'search'}">
      Tìm kiếm
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup () {
    const store = useStore();
    const currentTab = ref("customerInfo");
    const changeTab = (tabName) => {
      store.commit('setCurrentTab', tabName);
      currentTab.value = store.state.currentTab;
    }
    return { store, changeTab, currentTab };
  }

}
</script>
<style scoped>
.tab-container {
  border-bottom: 2px solid #DF6106;
}

.tab {
  cursor: pointer;
  color: rgba(164, 164, 164, 1);
  padding: 20px 5px;
  font-size: 20px;
  width: 255px;
  text-align: center;
  border-right: 1.5px solid #CFCFCF;
  font-weight: bold;
  line-height: 30px;
}

.active {
  border-top: none;
  color: #DD7A01;
  background: linear-gradient(180deg, rgba(250, 200, 164, 0.296) 0%, rgba(255, 182, 33, 0) 100%);
}
</style>