<template>
  <el-container v-loading="loading">
    <el-header height="80px">
      <AppHeader />
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside>
        <AppSideMenu />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSideMenu from '@/components/AppSideMenu.vue';
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppSideMenu,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>
