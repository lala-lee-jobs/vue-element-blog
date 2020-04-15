<template>
  <mavon-editor
    v-loading="loading"
    :element-loading-text="loadingText"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    ref=md language="zh-TW"
    @imgAdd="$imgAdd"
    v-model="mdValue" />
</template>
<script>
import * as firebase from 'firebase/app';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheMarkdownEditor',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loadingText: '拼命加载中',
    };
  },
  computed: {
    ...mapState(['loading']),
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
        this.startLoading();
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
            this.stopLoading();
          });
      }
    },
  },
};
</script>
