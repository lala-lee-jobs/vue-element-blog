<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label
      for="inputEmail"
      class="sr-only"
    >Email address</label>
    <input
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      v-model="formData.account"
      required
      autofocus
    >
    <label
      for="inputPassword"
      class="sr-only"
    >Password</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      v-model="formData.password"
      required
    >
    <div class="checkbox mb-3">
      <label>
        <input
          type="checkbox"
          value="remember-me"
        > Remember me
      </label>
    </div>
    <div class="text-center">
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
        @click="login"
      >Sign in</button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        account: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState(['loading']),
  },
  methods: {
    login() {
      this.$store.dispatch('signInWithEmail', this.formData)
        .then(() => {
          this.$router.push({ name: 'AdminHome' });
        }).catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    &:focus {
      z-index: 2;
    }
    input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .checkbox {
      font-weight: 400;
    }
  }
}
</style>
