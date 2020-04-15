<template>
  <div class="app">
    <loading :active.sync="loading"></loading>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['loading']),
  },
};
</script>
<style>
</style>
