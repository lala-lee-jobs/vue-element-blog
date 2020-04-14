<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Admin',
  beforeCreate() {
    this.$store.dispatch('signInAuto').then((user) => {
      console.log('user', user);
      if (user) {
        this.$router.push('/admin/');
      } else {
        this.$router.replace('/admin/sign-in');
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
