<template>
  <div class="sign-in">
      <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'SignIn',
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  min-height: 100vh;
  background: #102a43;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login {
      flex: 1;
  }
}

</style>
