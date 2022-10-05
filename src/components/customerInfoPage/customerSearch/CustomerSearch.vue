<template>
  <div id="search-input-container" class="mx-2 mt-3">
    <div class="input-search mb-4">
      <input type="text" placeholder="Enter phone number to search.." v-model="searchText">
      <SharedSvg name="search-icon" />
    </div>
    <div>
      <h5>Kết quả tìm kiếm danh bạ</h5>
      <div class="search-result-container mt-4">
        <div v-for="user in filteredUser()" :key="user" class="search-result-item">
          <div class="search-user-fullname-container d-flex justify-content-between align-items-center mt-3 mb-3">
            <div class="search-user-fullname">
              {{ user.fullname }}
            </div>
            <div class="search-user-box">
              <input type="radio" name="user-fullname" id="" @change="setSelectedSearchUser(user)">
            </div>
          </div>
          <div class="search-user-phone-number d-flex justify-content-between mb-2">
            <div>
              {{ user.phone_number }}
            </div>
            <SharedSvg name="search-icon" />
          </div>
        </div>
      </div>
      <div class="item error" v-if="searchText && !filteredUser().length">
        <p>No results found!</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import SharedSvg from "@/components/SharedSvg.vue";
import { useStore } from "vuex";

export default {
  emits: ['toggleModalSelectedSearchUser'],
  async setup (props,{emit}) {
    const searchText = ref("");
    const store = useStore();
    let listUser = [];
    await store.dispatch('getListUser');
    if (store.state.listUser) {
      listUser = store.state.listUser;
    }
    const setSelectedSearchUser = (user) => {
      store.commit('setSelectedSearchUser', user);
      emit('toggleModalSelectedSearchUser');
    }
    const filteredUser = () => {
      if (searchText.value) {
        return listUser.filter((user) =>
          user.phone_number.includes(searchText.value)
        )
      } else {
        return [];
      }
    }

    return { searchText, filteredUser, setSelectedSearchUser };
  },
  components: { SharedSvg }
}
</script>
<style>
.input-search {
  width: 100%;
  position: relative;
}

.input-search input {
  height: 54px;
  border: 2px solid #A4A4A4;
  border-radius: 10px;
  width: 100%;
  padding-left: 50px;
  font-size: 20px;
  color: black;
}


.input-search .search-icon {
  display: inline-block;
  left: 0;
  position: absolute;
  margin-left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.input-search .search-icon svg {
  width: 30px;
  height: 30px;
}

.search-result-container {
  box-sizing: border-box;

}

.search-result-item {
  box-sizing: border-box;
  margin-left: 35px;
  margin-bottom: 5px;
  border-bottom: 1px solid #A4A4A4;
}

.search-user-box input[type=radio] {
  margin-right: 22px;
  transform: scale(1.5);
}

.search-user-fullname {
  font-size: 24px;
  font-weight: 500;
  color: #DD7A01;
}

.search-user-phone-number {
  color: #1858A4;
  font-size: 20px;
  font-weight: 500;
}

.search-user-phone-number .search-icon svg {
  margin-right: 17px;
  width: 20px;
  height: 20px;
}
</style>