<template>
  <div id="customer-info-display" class="d-block mt-5">
    <div id="information" class="d-block mx-4">
      <div class="d-flex">
        <div id="profile-picture-container" v-if="profile_picture">
          <img :src="profile_picture" alt="" class="avatar">
        </div>
        <div class="ms-3 mt-3">
          <h4 class="user-fullname mb-3" v-if="fullname"> {{fullname}} </h4>
          <div id="tag-container" class="d-flex" v-if="tags">
            <div v-for="(tag, index) in tags" :key="index" class="tag bg-primary border border-round"
              :class="{vip: tag =='Vip',active: tag === 'Active' }">
              {{tag.toUpperCase()}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";

export default {
  props: ['selectedUser'],
  setup (props) {
    let selectedUser = ref(null);
    let profile_picture = ref("");
    let fullname = ref("");
    let tags = ref("");
    watchEffect(() => {
      selectedUser.value = props.selectedUser;
      profile_picture.value = selectedUser.value.profile_picture;
      fullname.value = selectedUser.value.fullname;
      tags.value = selectedUser.value.tags;
    })

    return { profile_picture, fullname, tags }
  }
}
</script>
<style scoped>
@media screen and (max-width:1000px) {
  #tag-container {
    display: none !important;
  }
}

img.avatar {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
}

.user-fullname {
  font-weight: 28px;
}

.tag {
  font-family: 'Poppins', sans-serif;
  border-radius: 18px;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 600;
  padding: 2px 20px;
  margin-right: 15px;
}

.vip {
  background-color: #DD7A01 !important;
}

.active {
  background-color: #0B8E11 !important;
}
</style>