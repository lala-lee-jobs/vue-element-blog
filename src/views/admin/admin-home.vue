<template>
  <div>
    <div class="d-flex my-2">
      <b-button @click="handleAdd">新增</b-button>
    </div>
    <b-list-group>
      <template v-for="(item, index) in articles">
        <b-list-group-item
          :key="index"
          class="d-flex justify-content-between align-items-center"
        >
          <div>
            <div>{{ item.title }}</div>
            <h6>
              <template v-for="tag in item.tags">
                <b-badge
                  variant="dark"
                  class="mr-1"
                  :key="tag"
                >{{ tag }}</b-badge>
              </template>
            </h6>
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
    this.fetchArticles();
  },
  computed: {
    ...mapState(['articles']),
  },
  methods: {
    ...mapActions(['fetchArticles', 'deleteArticle']),
    handleAdd() {
      this.$router.push('/admin/article-add');
    },
    handleEdit(id) {
      this.$router.push(`/admin/article-edit/${id}`);
    },
    handleDelete(id) {
      this.$bvModal
        .msgBoxConfirm('Are you sure?')
        .then((confirm) => {
          if (confirm) {
            this.deleteArticle(id);
          }
        });
    },
  },
};
</script>
