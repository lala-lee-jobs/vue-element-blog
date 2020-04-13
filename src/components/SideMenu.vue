<template>
  <section class="side-nav">
    <ul>
      <li
        v-for="(item, index) in articles"
        :key="index"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['articles']),
  },
  mounted() {
    this.$store.dispatch('fetchArticles');
  },
};
</script>

<style lang="scss" scoped>
  .side-nav {
    overflow: hidden;
    background: #f5f7fa;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    height: calc(100vh - 100px);
    li {
      list-style: none;
    }
  }
</style>
