<template>
  <el-container>
    <el-header height="80px">
      <blog-header />
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="200px">
        <blog-aside />
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import BlogHeader from '@/components/blog-header.vue';
import BlogAside from '@/components/blog-aside.vue';

export default {
  name: 'App',
  components: {
    BlogHeader,
    BlogAside,
  },
};
</script>
<style>
</style>
