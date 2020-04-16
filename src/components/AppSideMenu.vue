<template>
  <section class="side-nav">
    <b-card header="關於作者" class="mb-4"></b-card>
    <b-card header="最新文章">
      <b-list-group>
        <b-list-group-item
          href="#"
          v-for="(item, index) in articles"
          :key="index"
        >
          {{ item.title }}
        </b-list-group-item>
      </b-list-group>
      <div class="text-right mt-3">
        <b-button variant="outline-primary">Read More</b-button>
      </div>
    </b-card>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      listCount: 5,
    };
  },
  computed: {
    ...mapState(['articles']),
    lastArtilces() {
      return this.articles.slice(0, this.listCount);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
