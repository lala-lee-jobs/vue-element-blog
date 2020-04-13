<template>
  <div class="header">
    <h1 class="logo">
      <img
        src="../assets/logo.png"
        alt="lala-code-blog"
      />
    </h1>
    <nav>
      <div class="search">
        <el-input
          prefix-icon="el-icon-search"
          placeholder="Search"
          v-model="keyword"
          clearable
        ></el-input>
      </div>
      <el-menu
        mode="horizontal"
        :router="true"
        :default-active="$route.name"
      >
        <el-menu-item
          :route="{name: 'Home'}"
          index="/"
        >首頁</el-menu-item>
        <el-menu-item
          :route="{name: 'About'}"
          index="/about"
        >關於</el-menu-item>
        <el-submenu index="3">
          <template slot="title">學習參考</template>
          <el-menu-item index="3-1">
            <a
              href="https://vuejs.org/index.html"
              target="_blank"
            ><i class="el-icon-menu"></i>Vue學習</a>
          </el-menu-item>
          <el-menu-item index="3-2">
            <a
              href="https://vuejs.org/index.html"
              target="_blank"
            ><i class="el-icon-menu"></i>空間部署</a>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="">
          <i class="el-icon-user"></i>管理
        </el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },
};
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;;
}

h1.logo {
  margin-right: 20px;
  height: 80px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}

nav {
  display: flex;
  align-items: center;
}

.el-menu-item {
  a {
    white-space: nowrap;
    padding: 0;
    text-decoration: none;
    color: #000;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: 0;;
}

</style>
