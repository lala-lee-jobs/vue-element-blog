<template>
  <div class="home">
    <b-row
      class="mx-0"
      style="margin-bottom: 20px;"
      v-for="(item, index) in articles"
      :key="index"
    >
      <b-card
        :title="item.title"
        tag="article"
        class="w-100"
      >
        <b-card-text>
          123
        </b-card-text>
        <b-link :to="{ name:'Article', params: {id: item.id} }" class="card-link">
          <font-awesome-icon :icon="['fas', 'book']" />
          繼續閱讀
        </b-link>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['articles']),
  },
};
</script>
