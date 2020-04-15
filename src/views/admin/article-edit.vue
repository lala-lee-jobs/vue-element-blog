<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="文章標題:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.title"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="文章內容:"
        label-for="input-2"
      >
        <AppMarkdownEditor v-model="formData.content" />
      </b-form-group>
      <b-button
        variant="primary"
        @click="onSubmit"
      >送出</b-button>
    </b-form>
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
      formData: {
        title: '',
        content: '',
      },
    };
  },
  computed: {
    ...mapState(['article']),
  },
  watch: {
    article(value) {
      this.formData = {
        title: value.title,
        content: value.content,
      };
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.fetchArticle(id);
  },
  methods: {
    ...mapActions(['fetchArticle', 'updateArticle']),
    async onSubmit() {
      const mdit = mavonEditor.getMarkdownIt();
      const env = {};
      mdit.render(this.formData.content, env);
      this.formData.title = env.title;
      const { id } = this.$route.params;
      const submitData = {
        id,
        newArticle: { ...this.article, ...this.formData },
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
