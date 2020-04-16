<template>
  <div class="d-flex flex-column align-items-end">
    <b-button
      class="my-3"
      variant="primary"
      @click="onSubmit"
    >送出</b-button>
    <AppMarkdownEditor v-model="content" />
    <b-alert
      v-model="showErrorAlert"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="danger"
      dismissible
    >
      <markdown-it-vue class="md-body" :content="errorMessage" />
    </b-alert>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppMarkdownEditor from '@/components/AppMarkdownEditor.vue';
import { mavonEditor } from 'mavon-editor';

export default {
  components: {
    AppMarkdownEditor,
  },
  data() {
    return {
      content: '',
      errorMessage: '',
      showErrorAlert: false,
    };
  },
  computed: {
    ...mapState(['article']),
  },
  watch: {
    article(value) {
      this.content = value.content;
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.fetchArticle(id);
  },
  methods: {
    ...mapActions(['fetchArticle', 'updateArticle']),
    async onSubmit() {
      const { content } = this;
      const mdit = mavonEditor.getMarkdownIt();
      const env = {};
      mdit.render(content, env);

      const { title, tags } = env;
      if (!title) {
        this.showErrorAlert = true;
        this.errorMessage = '請在文件開頭使用 `#` 或是 `=` 完成標題';
        return;
      }
      if (!tags || tags.length === 0) {
        this.showErrorAlert = true;
        this.errorMessage = '請在文件內使用 `###### tags: `，至少加上一個tag';
        return;
      }

      const { id } = this.$route.params;
      const submitData = {
        id,
        newArticle: {
          ...this.article,
          title,
          content,
          tags,
        },
      };
      await this.updateArticle(submitData);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
