<template>
  <div class="mx-4">
    <div id="create-user-container" class="mb-3">
      <button id="create-user">Tạo người dùng mới</button>
    </div>
    <div id="table-list">
      <div id="table-tabs-container" class="d-flex">
        <div @click="changeTableTab('listUser')" class="table-tab" :class="{active: currentTab === 'listUser'}">
          Danh sách người dùng
        </div>
        <div @click="changeTableTab('listNotes')" class="table-tab" :class="{active: currentTab === 'listNotes'}">
          Ghi chú
        </div>
      </div>
      <div id="main-table">
        <div v-if="currentTab === 'listUser'">
          List User
        </div>
        <div v-else-if="currentTab === 'listNotes'">
          List Notes
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";


export default {
  setup () {
    const currentTab = ref("listUser");
    const changeTableTab = (tab) => {
      currentTab.value = tab;
    }
    return { currentTab, changeTableTab };
  }
}
</script>
<style scoped>
#create-user-container {
  width: 100%;
  height: 15vh;
  position: relative;
}

#create-user {
  position: absolute;
  color: #FFFF;
  bottom: 0;
  right: 0;
  font-size: 22px;
  background-color: #0070D2;
  border-radius: 6px;
  padding: 8px 20px;
  border: none;
}

#table-tabs-container {
  width: 100%;
  border-bottom: 4px solid #DD7A01;
}

.table-tab {
  text-align: center;
  font-size: 22px;
  border-top: 3px solid #CFCFCF;
  border-left: 1px solid #A4A4A4;
  border-right: 1px solid #CFCFCF;
  border-bottom: none;
  padding: 5px 10px;
  width: 250px;
}

.table-tab.active {
  border-top: 4px solid #DD7A01;
  color: #DD7A01;
}
</style>