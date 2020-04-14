<template>
  <el-container v-loading="loading">
    <el-header height="80px">
      <Header />
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside>
        <SideMenu />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header.vue';
import SideMenu from '@/components/SideMenu.vue';
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  components: {
    Header,
    SideMenu,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>
