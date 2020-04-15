<template>
  <div style="position: relative">
    <loading
      :active.sync="isLoading"
      :is-full-page="false"
    >
      <template slot="default">
        <font-awesome-icon icon="spinner" pulse />
      </template>
      <template slot="after">
        <span style="margin-left:1rem">{{ loadingText }}</span>
      </template>
    </loading>
    <mavon-editor
      ref=md
      language="zh-TW"
      @imgAdd="$imgAdd"
      v-model="mdValue"
    ></mavon-editor>
  </div>
</template>
<script>
import * as firebase from 'firebase/app';
import { mapActions } from 'vuex';

export default {
  name: 'AppMarkdownEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      loadingText: '拼命加载中',
    };
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
  methods: {
    ...mapActions(['startLoading', 'stopLoading']),
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      const storageRef = firebase.storage().ref();
      if ($file) {
        this.isLoading = true;
        const uploadTask = storageRef.child(`images/${new Date().getTime()}.jpg`).put($file);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.loadingText = `圖片上傳進度：${progress}%`;
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log('error', error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL()
              .then((downloadURL) => {
                console.log('File available at', downloadURL);
                this.$refs.md.$img2Url(pos, downloadURL);
              });
            this.isLoading = false;
          });
      }
    },
  },
};
</script>
