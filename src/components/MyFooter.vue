<template>
  <div class="my-footer">
    <!-- 全选 -->
    <div class="checkbox">
      <input
        type="checkbox"
        class="input"
        id="footerCheck"
        v-model="allCheck"
      />
      <label class="all-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">$ {{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="price-btn">结算</button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    allCheck: {
      get() {
        console.log('get',this.list)
        //  判断所有商品是否选中
        return this.list.every((item) => item.goods_state);
      },
      set(val) {
        console.log('set')
        this.list.forEach((item) => (item.goods_state = val));
        console.log(this.list)
      },
    },
    totalPrice() {
      //  需求: 只求选中的商品的累加和
      //  (1)先筛选出选中的商品
      const arr = this.list.filter((item) => item.goods_state);
      //  (2)选中的商品求累加和
      return arr.reduce(
        (pre, cur) => pre + cur.price * cur.buyNum,
        0
      );
    },
  },
};
</script>

<style scoped></style>
