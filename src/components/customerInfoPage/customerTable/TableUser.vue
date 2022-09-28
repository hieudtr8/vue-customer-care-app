<template>
  <div>
    <table id="table-user" class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Email</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Địa chỉ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listUser" :key="index">
          <td scope="col">{{user.fullname}}</td>
          <td class="col-email" scope="col">{{user.email}}</td>
          <td scope="col">{{user.phone_number}}</td>
          <td scope="col">{{user.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  props: ['listUser'],
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#table-user {
  width: 70%;
}

.col-email {
  font-family: 'IBM Plex Mono', monospace;
  color: #3168FF;
  text-decoration: underline;
  font-size: 13px;
  cursor: pointer;
  line-height: 16px;
}
</style>