<template>
  <ul>
    <li
      v-for="(item, index) in articles"
      :key="index"
    >
      <span>{{ item.title }}</span>
    </li>
  </ul>
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
