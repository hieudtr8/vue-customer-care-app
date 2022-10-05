<template>
  <UserProfile :selectedUser="selectedUser" />
  <ProfileBox :selectedUser="selectedUser" />
</template>
<script>
import UserProfile from "./UserProfile.vue";
import ProfileBox from "./ProfileBox.vue";
export default {
  props: ['selectedUser'],
  components: { UserProfile, ProfileBox },
}
</script>
<style >

</style>