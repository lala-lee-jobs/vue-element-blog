<template>
  <el-container>
    <el-header height="80px">
      <Header />
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="200px">
        <SideMenu />
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    Header,
    SideMenu,
  },
};
</script>
<style>
</style>
