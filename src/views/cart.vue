<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>餐品名称</th>
          <th>餐品图片</th>
          <th>餐品价格</th>
          <th>餐品数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-primary" role="alert">
      总价格:1231231
      <a style="float: right;margin-top:-3px" class="btn btn-danger btn-sm" href="/order" role="button">去结算</a
      >
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
