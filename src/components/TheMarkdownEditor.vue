<template>
  <mavon-editor language="zh-TW" v-model="mdValue"></mavon-editor>
</template>
<script>
export default {
  name: 'TheMarkdownEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    mdValue: {
      get() {
        return this.value;
      },
      set(mdValue) {
        this.$emit('input', mdValue);
      },
    },
  },
};
</script>
