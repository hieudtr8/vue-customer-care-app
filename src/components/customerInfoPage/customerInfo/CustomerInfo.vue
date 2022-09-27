<template>
  <ListIcon />
  <br />
  <br />
  <UserProfile />
  <ProfileBox />
</template>
<script>
import ListIcon from "./ListIcon.vue";
import UserProfile from "./UserProfile.vue";
import ProfileBox from "./ProfileBox.vue";
export default {
  components: { ListIcon, UserProfile, ProfileBox },
}
</script>
<style >

</style>