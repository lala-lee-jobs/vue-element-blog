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
</style>
