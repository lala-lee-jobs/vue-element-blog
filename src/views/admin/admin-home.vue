<template>
  <div v-if="user">
    <b-button @click="confirmSignOut">登出</b-button>
    <b-table
      responsive
      :fields="fields"
      :items="articles"
    >
      <template v-slot:cell(tags)="data">
        <b-form-tag
          v-for="(tag, index) in data.value"
          :key="index"
          class="mr-1"
        >
          {{ tag }}
        </b-form-tag>
      </template>
      <template v-slot:cell(id)="data">
        <b-button
          class="mr-1"
          size="sm"
          variant="primary"
          @click="handleEdit(data.value)"
        >編輯</b-button>
        <b-button
          class="mr-1"
          size="sm"
          variant="danger" @click="
          handleDelete(data.value)"
        >刪除</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminHome',
  data() {
    return {
      fields: ['title', 'datetime', 'tags', 'content', 'id'],
    };
  },
  computed: {
    ...mapState(['user', 'articles']),
  },
  watch: {
    user(value) {
      console.log('user', value);
      if (!value) {
        this.$router.replace('/admin/sign-in');
      }
    },
  },
  methods: {
    ...mapActions(['signOut']),
    confirmSignOut() {
      this.$bvModal
        .msgBoxConfirm('Are you sure?')
        .then((confirm) => {
          if (confirm) {
            this.signOut();
          }
        });
    },
    handleEdit(id) {
      this.$router.push(`/admin/article-edit/${id}`);
    },
    handleDelete(id) {
      console.log(id);
    },
  },
};
</script>
