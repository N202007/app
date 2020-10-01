<template>
  <div class="container">
    <div class="jumbotron">
      <a href="/foot" type="button" class="btn btn-outline-primary">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-90deg-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
          />
        </svg>
      </a>
      <div class="container">
        <h1 class="display-3">我的订单</h1>
        <p class="lead">
          我在猿猩看海烹总下单次数：{{ this.$store.state.orders.length }}
        </p>
        <hr class="my-2" />
        <p>感谢您对猿猩看海烹一直以来的信任</p>
      </div>
    </div>
    <div class="card-columns">
      <div class="card" v-for="(item, i) in this.$store.state.orders" :key="i">
        <h5 class="card-header">猿猩看海烹</h5>
        <div class="card-body">
          <p class="card-title">下单时间：{{ item.time }}</p>
          <table class="table">
            <thead>
              <tr>
                <th>菜品</th>
                <th>数量</th>
                <th>小计</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in item.good" :key="index">
                <td scope="row">{{ item.good.name }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.good.money * item.count }}￥</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer text-muted">总计：{{ total(i) }}￥</div>
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
  computed: {
    total() {
      return function (i) {
        let re = 0;
        for (const g of this.$store.state.orders[i].good) {
          re += g.good.money * g.count;
        }
        return re;
      };
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
</style>