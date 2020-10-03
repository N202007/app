import Vue from 'vue'
import Vuex from 'vuex'
import group1 from "@/modules/group1";
import slogan from "@/modules/slogan";
import group2 from "@/modules/group2";
import statement from "@/modules/statement";
import allProvince from "@/modules/allProvince";
import showStatus from "@/modules/showStatus";
import manualCustomerService from "@/modules/manualCustomerService";
import autoImage from "@/modules/aotuImage";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: [

    ],
    user: [
      {
        name: "星",
        phone: "15173923746",
        username: "cove",
        pwd: "123456",
      },
      {
        name: "唐",
        phone: "15173923746",
        username: "tang",
        pwd: "123456",
      },
    ],
    goods: [
      {
        type: "中餐",
        name: '佛跳墙',
        money: 38,
        imgPath: require('@/assets/fotiaoqiang.jpg')
      },
      {
        type: "中餐",
        name: '白切鸡',
        money: 68,
        imgPath: require('@/assets/baiqieji.jpg')
      },
      {
        type: "中餐",
        name: '阳澄湖大闸蟹',
        money: 28,
        imgPath: require('@/assets/dazhaxie.jpg')
      },
      {
        type: "中餐",
        name: '毛氏红烧肉',
        money: 58,
        imgPath: require('@/assets/hongshaorou.jpg')
      },
      {
        type: "中餐",
        name: '北京烤鸭',
        money: 48,
        imgPath: require('@/assets/kaoya.jpg')
      },
      {
        type: "中餐",
        name: '糖醋排骨',
        money: 48,
        imgPath: require('@/assets/paigu.jpg')
      },
      {
        type: "中餐",
        name: '上汤娃娃菜',
        money: 28,
        imgPath: require('@/assets/wawacai.jpg')
      },
      {
        type: "中餐",
        name: '深井烧鹅',
        money: 48,
        imgPath: require('@/assets/shaoe.jpg')
      },
      {
        type: "甜点",
        name: '雪媚娘',
        money: 27,
        imgPath: require('@/assets/xuemeiniang.jpg')
      },
      {
        type: "甜点",
        name: '舒芙蕾',
        money: 33,
        imgPath: require('@/assets/shufulei.jpg')
      },
      {
        type: "甜点",
        name: '可可慕斯',
        money: 23,
        imgPath: require('@/assets/kekemusi.jpg')
      },
      {
        type: "西餐",
        name: '华夫饼',
        money: 99,
        imgPath: require('@/assets/huafubin.jpg')
      },
      {
        type: "西餐",
        name: '罗宋汤',
        money: 75,
        imgPath: require('@/assets/luosongtang.jpg')
      },
      {
        type: "西餐",
        name: '牛排',
        money: 83,
        imgPath: require('@/assets/niupai.jpg')
      },
      {
        type: "饮品",
        name: '珍珠奶茶',
        money: 11,
        imgPath: require('@/assets/zhenzhunaicha.jpg')
      },
      {
        type: "饮品",
        name: '香草奶茶',
        money: 22,
        imgPath: require('@/assets/xiangcaonaicha.jpg')
      },
      {
        type: "饮品",
        name: '奶茶三兄弟',
        money: 14,
        imgPath: require('@/assets/naichasanxiongdi.jpg')
      },

    ],
    activeUser: '',
    orders: [

    ],
    result: 0,
    /**美食鉴赏1**/
    group1,
    /**标语**/
    slogan,
    /**美食鉴赏二**/
    group2,
    /**声明**/
    statement,
    /**全国省份**/
    allProvince,
    /**二维码显示状态**/
    showStatus,
    /***客服数据**/
    manualCustomerService,
    /***自动滚动图片**/
    autoImage,
  },
  mutations: {
    create(state, obj) {
      for (const v of state.carts) {
        if (v.good.name == obj.good.name) {
          v.count++;
          return;
        }
      }
      state.carts.push(obj);
    },
    acUser(state, user) {
      state.activeUser = user;
    }
  },
  actions: {
    createAction({ commit }, obj) {

      commit('create', obj);
    },
    activeU({ commit }, user) {
      commit('acUser', user);
    }
  },
  modules: {

  }
})
