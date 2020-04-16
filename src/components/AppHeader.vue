<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="/">
      <h1 class="logo">
        <img
          src="@/assets/logo.png"
          alt="lala-code-blog"
        />
      </h1>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <b-nav-item :to="{name: 'AdminHome'}">管理</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },
};
</script>

<style lang="scss" scoped>

h1.logo {
  margin-right: 20px;
  height: 80px;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}

</style>
