<template>
  <div v-if="user">
    <br />
    <b-button @click="confirmSignOut">登出</b-button>
    <br /><br />
    <b-list-group>
      <template v-for="(item, index) in articles">
        <b-list-group-item
          :key="index"
          class="d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <div class="mr-10">{{ item.title }}</div>
            <div>
              <b-form-tag
                v-for="tag in item.tags"
                :key="tag"
                :title="tag"
              >{{ tag }}</b-form-tag>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="mr-2">
              <font-awesome-icon :icon="['far', 'clock']" />
            </div>
            <div class="mr-2">
              {{ item.datetime | moment("YYYY-MM-DD hh:mm")}}
            </div>
            <b-button
              class="mr-2"
              size="sm"
              variant="primary"
              @click="handleEdit(item.id)"
            >編輯</b-button>
            <b-button
              class="mr-1"
              size="sm"
              variant="danger"
              @click="handleDelete(item.id)"
            >刪除</b-button>
          </div>
        </b-list-group-item>
      </template>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminHome',
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('fetchArticles');
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
