<template>
  <div>
    <el-form
      label-position="top"
      label-width="100px"
      :model="formData"
    >
      <el-form-item label="Title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <AppMarkdownEditor v-model="formData.content" />
      </el-form-item>
    </el-form>
    <pre>{{foundArticle}}</pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppMarkdownEditor from '@/components/AppMarkdownEditor.vue';

export default {
  components: {
    AppMarkdownEditor,
  },
  data() {
    return {
      formData: {
        titile: '',
        content: '# your markdown content',
      },
    };
  },
  computed: {
    ...mapGetters(['foundArticle']),
  },
  watch: {
    foundArticle() {
      this.formData.title = this.foundArticle.title;
      this.formData.content = this.foundArticle.content;
      console.log('formData', this.formData);
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.changeArticleID(id);
  },
  methods: {
    ...mapActions(['changeArticleID']),
  },
};
</script>
