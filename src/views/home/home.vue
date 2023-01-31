<template>
  <div class="home">
    <HomeHeader />
    <div class="content">
      <div class="categorys">
        <el-menu
          active-text-color="#7cfa72"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#000"
        >
          <el-menu-item v-for="i in categorys" :index="i">{{ i }}</el-menu-item>
        </el-menu>
      </div>
      <div class="goods">
        <template v-for="info in infos">
          <GoodItem :goodInfo="info" />
        </template>
      </div>
    </div>
    <div class="footer">
      <div class="fs" ref="badgeRef">
        <el-badge
          :value="count"
          :style="{ '--show-badge': count ? '1' : '0' }"
          :max="99"
          @click="drawer = !drawer && !!count"
        >
          <div class="shopping-cart"></div>
        </el-badge>
        <div class="price" @click="drawer = !!count && !drawer">
          <span class="price-i">¥</span>
          <span class="sum">{{ shoppingCart.sum }}</span>
        </div>
        <div class="sub-btn" @click="handleCalc">提交订单</div>
      </div>
      <!-- <Tabs></Tabs> -->
    </div>
    <div class="my-drawer">
      <el-drawer
        v-model="drawer"
        direction="btt"
        :show-close="false"
        :with-header="false"
        size="65%"
        modal-class="cart-modal"
      >
        <div class="drawer-header">
          <div class="left">
            <span>购物车</span>
            <span class="total-info">（共{{ count }}件商品）</span>
          </div>
          <div class="right" @click="onClearClick">
            <el-icon class="icon"><Delete /></el-icon>
            清空购物车
          </div>
        </div>
      </el-drawer>
    </div>
    <el-dialog
      v-model="dialog"
      width="80%"
      align-center
      :show-close="false"
      :with-header="false"
      custom-class="clear-dialog"
    >
      <div class="text">确认清空购物车内所有商品吗？</div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="info" @click="dialog = false">取消</el-button>
          <el-button type="primary" @click="handleClearCart"> 清空 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tabs from "./c-cpns/tabs/tabs.vue";
import { Delete } from "@element-plus/icons-vue";
import HomeHeader from "./c-cpns/home-header/home-header.vue";
import useShoppingCart from "@/store/modules/shopping-cart";
import { infos, categorys } from "@/assets/js/data.json";
import GoodItem from "@/components/good-item/good-item.vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const badgeRef = ref(null);
const shoppingCart = useShoppingCart();

const { count } = storeToRefs(shoppingCart);
const drawer = ref(false);
const dialog = ref(false);
onMounted(() => {
  const badgeEl = (badgeRef.value as unknown as HTMLDivElement)
    .querySelector(".el-badge")!
    .querySelector(".el-badge__content")!;
  const { left, top } = badgeEl.getBoundingClientRect();
  shoppingCart.badgePos = {
    left,
    top: top - 16,
  };
});
const router = useRouter();
const handleCalc = () => {
  router.push("/confirm");
};
const onClearClick = () => {
  dialog.value = true;
};
const handleClearCart = () => {
  dialog.value = false;
  drawer.value = false;
  shoppingCart.goods = [];
  shoppingCart.count = 0;
};
</script>

<style scoped lang="less">
.home {
  width: 100vw;
  height: 100vh;
  background: #fff;

  .content {
    background: #fff;
    height: calc(100% - 103px);
    display: flex;
    .categorys {
      width: 23.7333vw;
      height: 100%;
      border-right: 2px solid #dcdfe6;
      overflow-y: scroll;
      .el-menu {
        border-right: none;
      }
    }
    .goods {
      flex: 1;
      height: 100%;
      overflow-y: scroll;
      padding: 0 12px;
      background-color: #fff;
    }
  }
  .footer {
    position: relative;
    z-index: 99;
    height: 49px;
    background-color: rgb(124, 250, 114);
    .fs {
      margin: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .shopping-cart {
        background: url("@/assets/imgs/empty.png") no-repeat;
        background-size: contain;
        background-position: center;
        width: 36px;
        height: 45px;
      }
      .price {
        margin-left: 10px;

        font-weight: 600;
        .price-i {
          font-size: 3.4667vw;
          margin-right: 2px;
        }
        .sum {
          font-size: 5.0667vw;
        }
      }
      .sub-btn {
        position: absolute;
        right: 0px;
        width: 19.2vw;
        border-radius: 30px;
        background: #fff;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3.7333vw;
      }
    }
  }
  .my-drawer {
    font-size: 3.7333vw;
    :deep(.el-drawer__body) {
      padding: 0;
    }
    .drawer-header {
      display: flex;
      height: 9.6vw;
      line-height: 9.6vw;
      padding: 0 12px;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;

      .left {
        .total-info {
          font-size: 3.2vw;
          color: #858687;
        }
      }
      .right {
        display: flex;
        align-items: center;

        .icon {
          margin-right: 1.6vw;
        }
      }
    }
  }
  .dialog-footer {
    display: flex;
    color: #333;

    .el-button {
      flex: 1;
    }
  }
  :deep(.el-badge__content) {
    opacity: var(--show-badge);
  }
}
</style>
<style lang="less">
.cart-modal {
  z-index: 33 !important;
  height: auto;
  bottom: 49px;
}
.clear-dialog {
  .el-dialog__header {
    display: none;
  }
  .text {
    text-align: center;
    font-size: 4.2667vw;
  }
}
</style>
