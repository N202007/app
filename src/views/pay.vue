<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">支付方式</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="alert alert-primary" style="cursor: pointer" role="alert">
          <a @click="pay">微信支付</a>
        </div>
        <div class="alert alert-secondary" style="cursor: pointer" role="alert">
          <a @click="pay">支付宝（支持花呗）</a>
        </div>
        <div class="alert alert-success" style="cursor: pointer" role="alert">
          <a @click="pay">中国银行</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["orders"]),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    pay: function () {
      this.$router.push("/wait");
      setTimeout(() => {
        this.$router.push("/success");
      }, 3000);
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let week = date.getDay();
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours();
      hour = hour < 10 ? "0" + hour : hour;
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      let nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
      let order = {
        good: this.$store.state.carts,
        time: nowDate,
      };
      this.orders.push(order);
      this.$store.state.carts = [];
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
