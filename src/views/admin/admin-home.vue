<template>
    <div>
        <h3>Admin Home</h3>
        <div v-if="user">
          <el-button @click="signOut">登出</el-button>
          <pre>{{user}}</pre>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminHome',
  async mounted() {
    await this.$store.dispatch('signInAuto');
    if (!this.user) {
      this.$router.replace('/admin/sign-in');
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  watch: {
    user(value) {
      console.log('user', value);
      if (!value) {
        this.$router.replace('/admin/sign-in');
      }
    },
  },
  methods: {
    ...mapActions(['signOut']),
  },
};
</script>
