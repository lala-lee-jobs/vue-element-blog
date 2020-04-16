<template>
  <div>
    <div class="d-flex my-3 align-items-end justify-content-end">
      <b-button
        variant="outline-dark"
        class="mr-3"
        @click.prevent="goBack"
      >返回</b-button>
      <b-button
        variant="primary"
        @click.prevent="onSubmit"
      >送出</b-button>
    </div>
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
    if (this.$route.name === 'ArticleEdit') {
      const { id } = this.$route.params;
      this.fetchArticle(id);
    }
  },
  methods: {
    ...mapActions(['fetchArticle', 'updateArticle', 'addArticle']),
    async onSubmit() {
      const { content } = this;
      const mdit = mavonEditor.getMarkdownIt();
      const env = {};
      mdit.render(content, env);

      const { title, tags } = env;

      this.errorMessage = '';
      if (!title) {
        this.errorMessage = '請在文件開頭使用 `#` 或是 `=` 完成標題';
      } else if (!tags) {
        this.errorMessage = '請在文件內使用 `###### tags: `，至少加上一個tag';
      } else if (!content) {
        this.errorMessage = '請輸入文件內容';
      }

      this.showErrorAlert = !!this.errorMessage.length;

      if (this.showErrorAlert) {
        return;
      }

      const submitData = {
        newArticle: {
          title,
          content,
          tags,
          datetime: new Date().getTime(),
        },
      };

      if (this.$route.name === 'ArticleEdit') {
        const { id } = this.$route.params;
        submitData.id = id;
        await this.updateArticle(submitData);
      } else {
        await this.addArticle(submitData);
      }
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
