<template>
  <div class="login-view">
    <div
      :class="['container', signInPage ? '' : 'right-panel-active']"
      id="container"
    >
      <div class="form-container sign-in-container">
        <form autocomplete="off">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-weixin"></i></a>
            <a href="#" class="social"><i class="fab fa-google"></i></a>
            <a href="#" class="social"><i class="fab fa-qq"></i></a>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" @click="forget">Forgot your password?</a>
          <button type="button" @click="signIn">Sign In</button>
        </form>
      </div>
      <div class="form-container sign-up-container">
        <form autocomplete="off">
          <h1>Create Account</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-weixin"></i></a>
            <a href="#" class="social"><i class="fab fa-google"></i></a>
            <a href="#" class="social"><i class="fab fa-qq"></i></a>
          </div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <button class="ghost" id="signIn" @click="goSignIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <button class="ghost" id="signUp" @click="goSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      signInPage: false,
      loginForm: {
          username: '',
          password: ''
      },
      registForm: {
          username: '',
          email: '',
          password: ''
      }
    };
  },
  methods: {
    goSignIn() {
      this.signInPage = true;
    },
    goSignUp() {
      this.signInPage = false;
    },
    forget() {
      alert("I'm sorry to hear that");
    },
    signIn() {
        // console.log(this.$store.state.isLogin)
        this.$store.commit('signIn')
        // console.log(this.$store.state.isLogin)
    }
  },
};
</script>

<style scoped>
.login-view {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 10px;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  position: absolute;
  bottom: 43px;
  border: 3px solid black;
  color: black;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 10px 0;
  width: 100%;
  border-radius: 30px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  box-shadow: -10px 5px 5px rgba(0, 0, 0, 0.22);
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.22);
}

.overlay {
  /* background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat; */
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  background-image: url("../assets/signUp.jpg");
  background-size: 90%;
  background-repeat: no-repeat;
  color: black;
  background-position: 20px 20px;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>