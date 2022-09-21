<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-modal">
        <div class="detail-modal">
          <h2>Customer Care</h2>
          <form @submit.prevent="handleSubmit">
            <div class="input-container">
              <label for="email">Tên đăng nhập</label>
              <input type="email" name="email" placeholder="example@gmail.com" v-model="email">
            </div>
            <div class="input-container">
              <label for="password">Mật khẩu</label>
              <input class="password" type="password" v-model="password" placeholder="********" name="password">
            </div>
            <div class="input-container-checkbox">
              <input type="checkbox" name="remember-me" id="remember-me">
              <label for="remember-me">Ghi Nhớ ?</label>
            </div>
            <button @click="handleSubmit" class="btn btn-login">Đăng nhập</button>
          </form>
        </div>
      </div>
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
  font-size: 43px;
  font-weight: normal;
  margin-bottom: 40px;
}

.container {
  margin-top: 5%;
  position: relative;
  height: 800px; 
}

.login-wrapper {
  background-image: url('../../public/login-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 100%;
}

.login-modal {
  position: absolute;
  background-color: #FFFCFC;
  height: 100%;
  width: 48%;
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
  margin-top: 18px;
}

.input-container-checkbox label {
  font-size: 20px;
}

.input-container-checkbox label,
.input-container label {
  color: #0070D2;
}

.input-container label {
  font-size: 28px;
  display: block;
}

.input-container input::placeholder {
  color: #CECDCD;
}

.input-container input[type=email],
.input-container input[type=password] {
  width: 100%;
  font-size: 28px;
  border: 1px solid #CECDCD;
  height: 72px;
  border-radius: 15px;
  margin-top: 18px;
  padding-left: 23px;
  box-sizing: border-box;
}

.input-container-checkbox input[type="checkbox"] {
  display: none;
}

.input-container-checkbox input[type="checkbox"]+*::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 30px;
  height: 30px;
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
  margin-top: 40px;
  font-size: 28px;
  width: 100%;
  border-radius: 15px;
  background-color: #0070D2;
  color: #F6F6F6;
  border: 1px solid #FFFCFC;
  height: 72px;
  cursor: pointer;
}
</style>