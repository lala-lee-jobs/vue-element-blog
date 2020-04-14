<template>
  <div>
    <h3>Admin Home</h3>
    <div v-if="user">
      <el-button @click="confirmSignOut">登出</el-button>
      <el-table
        :data="articles"
        style="width: 100%"
      >
        <el-table-column
          prop="title"
          label="標題"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="content"
          label="文章內容"
          width="300"
        >
        </el-table-column>
        <el-table-column
          label="標籤分類"
          width="300"
        >
          <template slot-scope="scope">
            <el-tag
              type="info"
              style="margin: 1px;"
              v-for="(tag, index) in scope.row.tags"
              :key="index"
            >{{ tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminHome',
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
      this.$confirm('確定登出？', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(() => {
        this.signOut();
      }).catch(() => {});
    },
    handleEdit(index, row) {
      this.$router.push(`/admin/article-edit/${row.id}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
