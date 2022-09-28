<template>
  <NavBar />
  <div class="d-flex">
    <SideBar />
    <div id="customer-info-container" class="d-flex">
      <div id="customer-info-tab">
        <CustomerTab />
        <div v-if="currentTab === 'customerInfo'">
          <CustomerInfo />
        </div>
        <div v-else-if="currentTab === 'search'">
          <CustomerSearch />
        </div>
      </div>
      <div id="customer-table">
        <CustomerTable />
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../components/sidebar/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import CustomerTab from "@/components/customerInfoPage/CustomerTab.vue";
import CustomerSearch from "../components/customerInfoPage/CustomerSearch.vue";
import CustomerInfo from "@/components/customerInfoPage/customerInfo/CustomerInfo.vue";
import CustomerTable from "../components/customerInfoPage/customerTable/CustomerTable.vue";
export default {
  components: { SideBar, NavBar, CustomerTab, CustomerSearch, CustomerInfo, CustomerTable },
  setup () {
    const store = useStore();
    const currentTab = computed(() => store.state.currentTab);
    return { currentTab };
  }
}
</script>
<style>
#customer-info-container {
  width: 90%;
  height: 90vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #CFCFCF;
  border-radius: 5px;
}

#customer-info-tab {
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  height: 97%;
  width: 33%;
}
#customer-table {
  width: 67%;
}
</style>