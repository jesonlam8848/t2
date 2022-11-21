<template>
  <div class="my-goods">
    <div class="left">
      <div>
        <input type="checkbox" class="left-input" v-model="item.goods_state" />
        <label class="left-label">
          <img :src="item.imgUrl" class="goodsImg">
        </label>
      </div>
    </div>

    <div class="right">
      <div class="top">{{item.masterName}}</div>
      <div class="bottom">
        <span class="price">$ {{item.price}}</span>
        <span>
          <my-count :item="item"></my-count>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from "@/components/MyCount.vue";
export default {
  name: "MyGoods",
  components:{
    MyCount
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.left-label .goodsImg{
  width: 20px;
  height: 20px;
}
</style>
