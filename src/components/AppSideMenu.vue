<template>
  <section class="side-nav">
    <b-card header="關於作者" class="mb-4">
      <b-row>
        <b-col cols="4">
          <b-avatar src="https://placekitten.com/300/300" size="5rem"></b-avatar>
        </b-col>
        <b-col cols="8">
          <h4>Lala Lee</h4>
          <h6 class="text-info">Front-End Developer</h6>
          <div class="social-links">
            <a href="#" class="mr-2">
              <font-awesome-icon
                :style="{ color: 'red' }"
                size="2x"
                :icon="['fas', 'envelope-square']" />
            </a>
            <a href="#" class="mr-2">
              <font-awesome-icon
                size="2x"
                :icon="['fab', 'facebook-square']" />
            </a>
            <a href="#" class="mr-2">
              <font-awesome-icon
                :style="{ color: 'black' }"
                size="2x"
                :icon="['fab', 'github-square']" />
            </a>
          </div>
        </b-col>
      </b-row>
    </b-card>
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
