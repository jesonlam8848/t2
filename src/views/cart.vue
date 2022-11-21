<template>
  <div>
    <div>cart page</div>
    <my-goods v-for="item in list" :key="item.cartId" :item="item"></my-goods>
    <my-footer :list="list"></my-footer>
  </div>
</template>

<script>
import { getCart } from "@/api/cart";
import MyGoods from "@/components/MyGoods.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  name: "cart",
  components: {
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    getCart().then(({ data }) => {
      // console.log("getCart", data),
      this.list = data.list;
      console.log("cart.vue", this.list);
    });
  },
  methods: {},
};
</script>
