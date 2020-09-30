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
        <tr
          style="line-height: 100px"
          v-for="(item, index) in this.$store.state.carts"
          :key="index"
        >
          <td scope="row">{{ item.good.name }}</td>
          <td>
            <img height="100px" width="100px" :src="item.good.imgPath" alt="" />
          </td>
          <td>{{ item.good.money }}</td>
          <td>
            <div
              class="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="subtract(item)"
              >
                -
              </button>
              <button type="button" class="btn btn-secondary">
                {{ item.count }}
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="add(item)"
              >
                +
              </button>
            </div>
          </td>
          <td>{{ item.good.money * item.count }}</td>
          <td>
            <button
              type="button"
              @click="remove(index)"
              class="btn btn-danger btn-md"
            >
              删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-primary" role="alert">
      总价格:{{ total }}
      <a
        style="float: right; margin-top: -3px"
        class="btn btn-danger btn-sm"
        href="/pay"
        role="button"
        >去结算</a
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
  computed: {
    total: function () {
      let result = 0;
      this.$store.state.carts.forEach((v) => {
        result += v.count * v.good.money;
      });
      return result;
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    subtract: function (g) {
      this.$store.state.carts.forEach((v) => {
        if (v.good.name == g.good.name) {
          if (!(v.count <= 1)) {
            v.count--;
          } else return;
        }
      });
    },
    add: function (g) {
      this.$store.state.carts.forEach((v) => {
        if (v.good.name == g.good.name) {
          v.count++;
        } else return;
      });
    },
    remove: function (i) {
      this.$store.state.carts.splice(i, 1);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
