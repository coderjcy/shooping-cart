<template>
  <div class="good-item-v2">
    <img class="good-img" :src="goodInfo.img" alt="" />
    <div class="info">
      <div class="title">{{ goodInfo.title }}</div>
      <div class="price">
        <span class="icon">¥</span>
        <span>{{ goodInfo.price }}</span>
      </div>
    </div>
    <div class="operator">
      <span @click="handleReduceClick" class="btn reduce"></span>
      <span style="font-size: 3.7333vw; display: inline-block; margin: 0 2vw">
        {{ goodInfo.count }}
      </span>
      <span @click="handleAddClick" class="btn add"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useShoppingCart from "@/store/modules/shopping-cart";
interface IProps {
  goodInfo: {
    id: number;
    img: string;
    title: string;
    price: string;
    count: number;
  };
}
const props = defineProps<IProps>();

const shoppingCart = useShoppingCart();
const handleAddClick = () => {
  shoppingCart.addGoods(props.goodInfo);
};
const handleReduceClick = () => {
  shoppingCart.reduceGoods(props.goodInfo);
};
</script>

<style scoped lang="less">
.good-item-v2 {
  display: flex;
  align-items: center;
  height: 20vw;
  width: 100%;
  border-bottom: 0.2667vw solid #ddd;
  padding: 12px 0;
  .good-img {
    height: 100%;
  }
  .info {
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 6px;
    .title {
      padding-top: 5px;
    }

    .price {
      color: var(--color-price);
      font-size: 18px;
      font-weight: 600;
      .icon {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
  .operator {
    align-self: end;

    .btn {
      display: inline-block;
      background-size: contain;
      width: 5.3333vw;
      height: 5.3333vw;
      cursor: pointer;
      vertical-align: middle;
    }
    .add {
      background-image: url("@/assets/imgs/add.png");
    }
    .reduce {
      background-image: url("@/assets/imgs/reduce.png");
    }
  }
}
</style>
