<template>
  <div>
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      content: '',
    };
  },
  computed: {
    ...mapState(['article']),
  },
  mounted() {
    const { id } = this.$route.params;
    this.fetchArticle(id);
  },
  watch: {
    article(value) {
      this.content = value.content;
    },
  },
  methods: {
    ...mapActions(['fetchArticle']),
  },
};
</script>
