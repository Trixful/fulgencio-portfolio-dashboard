<template>
  <!-- Main container for the login page -->
  <div class="container">
    <h2>Login</h2>
    <!-- Login form with validation -->
    <form @submit.prevent="login" class="login-form">
      <input v-model.trim="username" placeholder="Username" :class="{ invalid: usernameError }" />
      <input v-model.trim="password" placeholder="Password" type="password" :class="{ invalid: passwordError }" />
      <button type="submit" class="login-btn">Login</button>
      <p v-if="error" class="error-msg">Invalid credentials</p>
      <p v-if="usernameError" class="field-msg">Username is required</p>
      <p v-if="passwordError" class="field-msg">Password is required</p>
    </form>
  </div>
</template>

<script>
import { setAuthenticated } from '../router';

export default {
  name: 'LoginView',
  data() {
    return {
      // Form fields and error states
      username: '',
      password: '',
      error: false,
      usernameError: false,
      passwordError: false
    };
  },
  methods: {
    // Handles login logic and validation
    login() {
      this.error = false;
      this.usernameError = !this.username;
      this.passwordError = !this.password;
      if (this.usernameError || this.passwordError) return;
      if (this.username === 'admin' && this.password === '1234') {
        setAuthenticated(true);
        this.$router.push('/portfolio/profile');
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
/* Main container styling for the login page */
.container {
  max-width: 350px;
  margin: 7vh auto 0 auto;
  background: #18181c;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 #00000033;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #2196f3;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Login form layout */
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  box-sizing: border-box;
}

/* Input styling */
.login-form input {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1.5px solid #23232b;
  background: #23232b;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.login-form input:focus {
  border: 1.5px solid #2196f3;
}

.invalid {
  border: 1.5px solid #2196f3;
  background: #2a1a1a;
}

/* Login button styling */
.login-btn {
  align-self: flex-end;
  padding: 0.7rem 2.2rem;
  border-radius: 8px;
  background: linear-gradient(90deg, #2196f3 60%, #64b5f6 100%);
  color: #18181c;
  font-weight: 700;
  font-size: 1.08rem;
  border: none;
  box-shadow: 0 2px 8px 0 #2196f333;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  margin-top: 0.5rem;
}

.login-btn:hover, .login-btn:focus {
  background: linear-gradient(90deg, #64b5f6 60%, #2196f3 100%);
  transform: translateY(-2px) scale(1.04);
}

/* Error and field message styling */
.error-msg {
  color: #ff4d4f;
  font-size: 0.98rem;
  margin-top: 0.2rem;
  font-weight: 500;
}

.field-msg {
  color: #2196f3;
  font-size: 0.93rem;
  margin-top: -0.7rem;
  margin-bottom: -0.3rem;
  font-weight: 500;
}

@media (max-width: 500px) {
  .container {
    max-width: 98vw;
    padding: 1.2rem 0.7rem 1.5rem 0.7rem;
  }
  .login-form input, .login-btn {
    font-size: 0.98rem;
  }
  .login-form input {
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .login-btn {
    padding: 0.7rem 1.2rem;
  }
}
</style>
