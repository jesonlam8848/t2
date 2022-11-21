<template>
  <div class="my-count">
    <button type="button" class="light-btn" @click="item.buyNum--">-</button>
    <input type="number" class="input" v-model.number="item.buyNum">
    <button type="button" class="light-btn" @click="item.buyNum++">+</button>
  </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    watch: {
        item: {
            deep: true,
            handler(newVal, oldVal) {
                if (newVal.buyNum<0) {
                    newVal.buyNum=0
                }
            }
        }
    }
}
</script>

<style scoped>

</style>