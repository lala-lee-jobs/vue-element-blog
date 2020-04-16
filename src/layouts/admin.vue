<template>
  <div class="l-admin">
    <b-container>
      <b-navbar type="dark" variant="info">
        <b-navbar-brand href="#">管理者後台</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right :to="{ name: 'Home' }">
            <font-awesome-icon icon="home" />
            <span>首頁</span>
          </b-nav-item>
          <b-nav-item right @click="confirmSignOut" v-if="user">
            <font-awesome-icon icon="sign-out-alt" />
            <span>登出</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LayoutAdmin',
  computed: {
    ...mapState(['user']),
  },
  watch: {
    user(value) {
      if (!value) {
        this.$router.replace('/admin/sign-in');
      }
    },
  },
  methods: {
    ...mapActions(['signOut']),
    confirmSignOut() {
      this.$bvModal
        .msgBoxConfirm('Are you sure?')
        .then((confirm) => {
          if (confirm) {
            this.signOut();
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
