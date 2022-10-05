<template>
  <NavBar />
  <div class="d-flex">
    <SideBar />
    <div id="customer-info-container" class="d-flex">
      <div id="customer-info-tab">
        <CustomerTab />
        <div v-if="currentTab === 'customerInfo'">
          <ListIcon />
          <CustomerInfo :selectedUser="currentUser" />
        </div>
        <div v-else-if="currentTab === 'search'">
          <Suspense>
            <CustomerSearch @toggleModalSelectedSearchUser="toggleModalSelectedSearchUser" />
            <template #fallback>
              <div class="d-flex justify-content-center d-flex align-items-center">
                Loading
                <LoadingRing />
              </div>
            </template>
          </Suspense>
        </div>
      </div>
      <div id="customer-table" v-if="currentTab === 'customerInfo' && currentIcon === 'info'">
        <Suspense>
          <CustomerTable />
          <template #fallback>
            <div class="d-flex justify-content-center d-flex align-items-center">
              Loading
              <LoadingRing />
            </div>
          </template>
        </Suspense>
      </div>
      <div id="search-section" class="mx-4 d-md-block d-sm-none"
        v-else-if="currentTab === 'search' && selectedSearchUser">
        <CustomerInfo :selectedUser="selectedSearchUser" />
      </div>
    </div>
  </div>
  <teleport to='body'>
    <div id="modal-wrapper" @click="toggleModalSelectedSearchUser" class="d-md-none d-sm-block">
      <PopupModal :showModal="showSearchUserModal" @closeModal="toggleModalSelectedSearchUser">
        <template #modal-header>
          <div>
            Thông tin cá nhân
          </div>
        </template>
        <template #modal-body>
          <div>
            <CustomerInfo :selectedUser="selectedSearchUser" />
          </div>
        </template>
      </PopupModal>
    </div>
  </teleport>
</template>
<script>
import SideBar from "../components/sidebar/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import { useStore } from "vuex";
import { computed, ref, watchEffect } from "vue";
import CustomerTab from "@/components/customerInfoPage/CustomerTab.vue";
import CustomerTable from "../components/customerInfoPage/customerTable/CustomerTable.vue";
import LoadingRing from "@/components/LoadingRing.vue";
import ListIcon from "@/components/customerInfoPage/customerInfo/ListIcon.vue";
import CustomerInfo from "@/components/customerInfoPage/customerInfo/CustomerInfo.vue";
import CustomerSearch from "../components/customerInfoPage/customerSearch/CustomerSearch.vue";
import PopupModal from "@/components/PopupModal.vue";

export default {
  components: { SideBar, NavBar, CustomerTab, CustomerTable, ListIcon, LoadingRing, CustomerInfo, CustomerSearch, PopupModal },
  setup () {
    const store = useStore();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentTab = computed(() => store.state.currentTab);
    const currentIcon = computed(() => store.state.currentIcon);
    const selectedSearchUser = computed(() => store.state.selectedSearchUser);

    const showSearchUserModal = ref(false);
    const toggleModalSelectedSearchUser = () => {
      showSearchUserModal.value = !showSearchUserModal.value;
    }
    watchEffect(() => {
      showSearchUserModal.value = false;
    })
    return { currentTab, currentIcon, currentUser, selectedSearchUser, toggleModalSelectedSearchUser, showSearchUserModal };
  }
}
</script>
<style>
#customer-info-container {
  width: 90%;
  min-height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #CFCFCF;
  border-radius: 5px;
}

#customer-info-tab {
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  height: 97%;
  min-width: 33%;
}

#customer-table {
  width: 67%;
}

#search-section {
  margin-top: 70px;
  width: 67%;
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.25);
}
</style>