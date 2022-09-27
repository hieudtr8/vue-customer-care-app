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
            <div class="error-display">
              {{ errorLogin }}
            </div>
            <button class="btn btn-login">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup () {
    const store = useStore();
    const router = useRouter();
    let email = ref('');
    let password = ref('');
    let errorLogin = ref("");

    onMounted(() => {
      try {
        store.dispatch('getListUser');
      } catch (error) {
        console.log(`error`, error);
      }
    })

    const handleSubmit = () => {
      store.dispatch('login', { email: email.value, password: password.value })
      errorLogin.value = store.state.error
      router.push('/customer-info')
    };

    return {
      email,
      password,
      errorLogin,
      handleSubmit
    }
  },
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
  height: 80vh;
}

.login-wrapper {
  background-image: url('../../public/login-image.png');
  background-position: center center;
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
  left: -2%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #FFFCFC;
  height: inherit;
  width: 48%;
  box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
  border-radius: 30px;
}

.detail-modal {
  margin: 0px auto;
  margin-top: 5vh;
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

.input-container input {
  width: 100%;
  font-size: 28px;
  border: 1px solid #CECDCD;
  color: #949494;
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

.error-display {
  color: red;
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
}

/* ______ Responsive _____ */
@media screen and (min-width: 1920px) {
  .detail-modal {
    margin-top: 80px;
  }
}

@media screen and (max-width: 821px) {
  .login-wrapper {
    background-image: none;
  }

  .login-modal {
    width: 100%;
  }
}

@media screen and (max-width: 430px) {
  h2 {
    font-size: 20px;
  }

  .login-modal {
    height: auto;
  }

  .input-container {
    margin-top: 5px !important;
  }

  .input-container input {
    margin-top: 5px !important;
    font-size: 14px !important;
    height: 40px !important;
  }

  .input-container input::placeholder {
    font-size: 14px !important;
  }

  .input-container label {
    font-size: 20px !important;
  }

  .input-container-checkbox label {
    font-size: 14px !important;
  }

  .input-container-checkbox input[type="checkbox"]+*::before {
    width: 20px !important;
    height: 20px !important;
  }

  .btn-login {
    height: 40px !important;
    font-size: 18px !important;
    margin-bottom: 20px;
  }
}

@media screen and (max-height: 800px) {
  h2 {
    margin-bottom: 20px;
  }

  .input-container {
    margin-top: 5px !important;
  }

  .input-container input {
    margin-top: 5px !important;
    font-size: 14px !important;
    height: 40px !important;
  }

  .input-container input::placeholder {
    font-size: 14px !important;
  }

  .input-container label {
    font-size: 20px !important;
  }

  .input-container-checkbox label {
    font-size: 14px !important;
  }

  .input-container-checkbox input[type="checkbox"]+*::before {
    width: 20px !important;
    height: 20px !important;
  }

  .btn-login {
    height: 40px !important;
    font-size: 18px !important;
  }
}

@media screen and (max-height: 360px) {
  h2 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  .btn-login {
    margin-top: 5px;
  }
}
</style>