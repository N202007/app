<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">选择你的餐品</h1>
      <hr class="my-2" />
    </div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/cfood">中餐</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wfood">西餐</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dessert">糕点</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/drink">饮品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">购物车</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
</style>
