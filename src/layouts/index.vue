<template>
  <div class="container l-default">
    <header>
      <AppHeader/>
    </header>
    <main>
      <article>
        <router-view></router-view>
      </article>
      <aside>
        <AppSideMenu></AppSideMenu>
      </aside>
    </main>
  </div>
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

<style lang="scss" scoped>
.l-default {
  main {
    display: flex;
    article {
      flex: 1 1 70%;
    }
    aside {
      flex: 1 1 30%;
    }
  }
}
</style>
