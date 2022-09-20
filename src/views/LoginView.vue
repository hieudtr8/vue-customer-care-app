<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-modal">
        <div class="detail-modal">
          <h2>Customer Care</h2>
          <form @submit.prevent="handleSubmit">
            <div class="input-container">
              <label for="email">Tên đăng nhập</label>
              <input type="email" name="email" v-model="email">
            </div>
            <div class="input-container">
              <label for="password">Mật khẩu</label>
              <input type="password" v-model="password" name="password">
            </div>
            <div class="input-container-checkbox">
              <input type="checkbox" name="remember-me" id="remember-me">
              <label for="remember-me">Ghi Nhớ ?</label>
            </div>
            <button @click="handleSubmit" class="btn btn-login">Đăng nhập</button>
          </form>
        </div>
      </div>
      <img src="../../public/login-image.png" alt="">
    </div>
  </div>

</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
    let email = ref('');
    let password = ref('');
    const handleSubmit = () => { console.log(email.value, password.value) };
    return {
      email,
      password,
      handleSubmit
    }
  },
  mounted() {
    fetch('https://api.npoint.io/60e614502197e5480a32')
      .then((res) => res.json())
      .then(data =>  console.log(data))
  }
}
</script>

<style scoped>
h2 {
  color: #F57212;
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 40px;
}

.container {
  position: relative;
  height: 700px;
}

.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
}

.login-wrapper img {
  max-width: 60%;
  z-index: -1;
}

.login-modal {
  position: absolute;
  z-index: 1;
  left: 10%;
  background-color: #FFFCFC;
  height: 100%;
  width: 35%;
  box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
  border-radius: 30px;
}

.detail-modal {
  margin: 0px auto;
  margin-top: 80px;
  max-width: 70%;
  text-align: left;
}

.input-container,
.input-container-checkbox {
  margin-top: 15px;
}

.input-container-checkbox label {
  font-size: 13px;
}

.input-container-checkbox label,
.input-container label {
  color: #0070D2;
}

.input-container label {
  display: block;
}

.input-container input[type=email],
.input-container input[type=password] {
  width: 100%;
  border: 1px solid #CECDCD;
  height: 45px;
  border-radius: 15px;
  margin-top: 18px;
  padding-left: 20px;
  box-sizing: border-box;
}

.input-container-checkbox input[type="checkbox"] {
  display: none;
}

.input-container-checkbox input[type="checkbox"]+*::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 1rem;
  height: 1rem;
  border-radius: 30%;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #CECDCD;
  margin-right: 10px;
}

.input-container-checkbox input[type="checkbox"]:checked+*::before {
  content: "✓";
  color: white;
  text-align: center;
  background: #0070D2;
  border-color: #0070D2;
}

.btn-login {
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
  border-radius: 15px;
  background-color: #0070D2;
  color: #F6F6F6;
  border: 1px solid #FFFCFC;
  height: 50px;
  cursor: pointer;
}
</style>