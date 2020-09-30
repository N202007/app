<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">支付方式</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="alert alert-primary" style="cursor: pointer" role="alert">
          <a href="/success">微信支付</a>
        </div>
        <div class="alert alert-secondary" style="cursor: pointer" role="alert">
          <a href="/success">支付宝（支持花呗）</a>
        </div>
        <div class="alert alert-success" style="cursor: pointer" role="alert">
          <a href="/success">中国银行</a>
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
