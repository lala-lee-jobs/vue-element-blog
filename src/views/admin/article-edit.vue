<template>
  <div>
    <b-form
      @submit="onSubmit"
    >
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
        type="submit"
        variant="primary"
      >送出</b-button>
    </b-form>
    <b-card
      class="mt-3"
      header="Form Data Result"
    >
      <pre class="m-0">{{ formData }}</pre>
    </b-card>
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
    foundArticle(value) {
      this.formData.title = value.title;
      this.formData.content = value.content;
      console.log('formData', this.formData);
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.changeArticleID(id);
  },
  methods: {
    ...mapActions(['changeArticleID']),
    onSubmit() {
      console.log('submit');
    },
  },
};
</script>
