<template>
    <div class="admin">
        <Login />
    </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
  name: 'Admin',
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
.admin {
    min-height: 100vh;
    background: #102a43;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login {
        flex: 1;
    }
}

</style>
