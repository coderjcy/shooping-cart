<template>
  <div class="good-item" ref="goodRef">
    <div class="img">
      <img :src="goodInfo.img" alt="" />
      <div class="hover"></div>
    </div>
    <div class="intro">
      <div class="title">{{ goodInfo.title }}</div>
      <div style="flex: 1"></div>
      <div style="display: flex; justify-content: space-between">
        <div class="price">
          <span style="font-size: 3.2vw">¥</span>
          {{ goodInfo.price }}
        </div>
        <div>
          <span
            v-if="count"
            @click="handleReduceClick"
            class="btn reduce"
          ></span>
          <span
            v-if="count"
            style="font-size: 3.7333vw; display: inline-block; margin: 0 1.6vw"
          >
            {{ count }}
          </span>
          <span @click="handleAddClick" class="btn add"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import useShoppingCart from "@/store/modules/shopping-cart";
interface IProps {
  goodInfo: {
    id: number;
    img: string;
    title: string;
    price: string;
  };
}
const props = defineProps<IProps>();
const count = computed(() => {
  let n = 0;

  shoppingCart.goods.find((i: any) => {
    if (i.id === props.goodInfo.id) {
      n = i.count;
      return true;
    }
  });
  return n;
});
const shoppingCart = useShoppingCart();
const goodRef = ref(null);
const handleAddClick = (e: Event) => {
  execAnimation(e.target as HTMLElement);
  // count.value++;
  shoppingCart.addGoods(props.goodInfo);
};
const handleReduceClick = () => {
  // count.value--;
  shoppingCart.reduceGoods(props.goodInfo);
};
const execAnimation = (target: HTMLElement) => {
  const pos = target.getBoundingClientRect();
  const l = pos.left;
  const t = pos.top;
  const divEl = document.createElement("div");
  divEl.className = "ani-o";
  divEl.innerHTML = "<span class='ani-i'>1</sapn>";

  divEl.style.cssText = `--pos-left:${l}px;--pos-top:${t}px;`;
  (goodRef.value as any).append(divEl);

  const badgePos = shoppingCart.badgePos;
  setTimeout(() => {
    divEl.style.cssText = `--pos-top:${badgePos.top}px;--pos-left:${l}px;`;
    (divEl.children[0] as any).style.cssText = `transform:translateX(${
      badgePos.left - l
    }px)`;
  });
  divEl.addEventListener("transitionend", () => {
    divEl.remove();
  });
};
</script>

<style scoped lang="less">
.good-item {
  padding-top: 2.6667vw;
  height: 20%;
  width: 100%;
  display: flex;
  position: relative;
  .img {
    width: 26.6667vw;
    height: 26.6667vw;
    background: red;
    position: relative;
    border-radius: 1.3333vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .hover {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.03);
    }
  }
  .intro {
    flex: 1;
    padding: 2.6667vw 0 2.6667vw 2.6667vw;
    display: flex;
    flex-direction: column;

    .title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #333;
      font-size: 4vw;
      letter-spacing: 0.2667vw;
      font-weight: 600;
    }
    .price {
      color: red;
      font-weight: 600;
    }
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
<style>
.ani-o {
  position: fixed;
  width: 4.2667vw;
  height: 4.2667vw;
  z-index: 999;
  top: var(--pos-top);
  left: var(--pos-left);
  transition: top 0.3s cubic-bezier(0.5, -0.5, 1, 1);
}

.ani-o .ani-i {
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 5.3333vw;
  background-color: #f56c6c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.2vw;
  transition: all 0.3s linear;
}
</style>
