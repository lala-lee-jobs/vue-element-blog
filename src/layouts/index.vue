<template>
  <div class="container l-default">
    <header>
      <AppHeader/>
    </header>
    <div class="l-default__main">
      <main>
        <router-view></router-view>
      </main>
      <aside>
        <AppSideMenu></AppSideMenu>
      </aside>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSideMenu from '@/components/AppSideMenu.vue';

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppSideMenu,
  },
  mounted() {
    this.$store.dispatch('fetchArticles');
  },
};
</script>

<style lang="scss" scoped>
.l-default {
  &__main {
    display: flex;
    >main {
      flex: 1 1 70%;
      padding-right: 20px;
    }
    >aside {
      flex: 1 1 30%;
    }
  }
}
</style>
