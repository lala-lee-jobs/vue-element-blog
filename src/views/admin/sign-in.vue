<template>
  <div class="sign-in">
      <AppLogin />
  </div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue';

export default {
  name: 'SignIn',
  components: {
    AppLogin,
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
