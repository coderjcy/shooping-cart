<template>
  <div class="search-page">
    <div class="header">
      <div class="backIcon" @click="handleBackClick">
        <el-icon :size="22"><ArrowLeft /></el-icon>
      </div>
      <el-input
        v-model="keyword"
        class="w-50 m-2"
        placeholder="Please Input"
        :prefix-icon="Search"
      >
        <!-- <template #suffix>
          <span class="search-btn">搜索</span>
        </template> -->
      </el-input>
    </div>
    <div class="reminder">
      <template v-for="reminderItem in reminderItems">
        <div style="margin-bottom: 20px">
          <div class="title">
            <span>{{ reminderItem.title }}</span>
            <el-icon v-if="reminderItem.cleat" @click="handleDelReminder"
              ><Delete
            /></el-icon>
          </div>
          <div class="items">
            <template v-for="item in reminderItem.items">
              <span class="item" @click="handleItemClick(item)">{{
                item
              }}</span>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class="search-resutl"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search, ArrowLeft, Delete } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const keyword = ref();
const router = useRouter();
const reminderItems = [
  {
    title: "历史搜索",
    items: ["方便面", "瓜子", "巧克力", "豆干", "花生", "薯片", "可乐", "雪碧"],
    cleat: true,
  },
  {
    title: "热门搜索",
    items: ["方便面", "瓜子", "巧克力", "豆干", "花生", "薯片", "可乐", "雪碧"],
    cleat: false,
  },
];
const handleBackClick = () => {
  router.back();
};
const handleItemClick = (v: string) => {
  console.log(v);
};
const handleDelReminder = () => {};
</script>

<style scoped lang="less">
.search-page {
  user-select: none;
  padding-top: 54px;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    height: 54px;
    background: #7cfa72;
    display: flex;
    align-items: center;
    padding: 0 8px;

    .backIcon {
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: -8px;
    }
    :deep(.el-input__wrapper) {
      border-radius: 30px;
    }
    :deep(.el-input__wrapper:hover) {
      box-shadow: none;
    }
    :deep(.el-input__wrapper.is-focus) {
      box-shadow: none;
    }
    // .search-btn {
    //   background-color: rgb(124, 250, 114);
    //   border-radius: 100px;
    //   display: flex;
    //   box-sizing: border-box;
    //   margin: 3px 0;
    //   margin-right: -5px;
    //   padding: 0 12px;
    //   font-size: 14px;
    //   color: #000;
    // }
  }

  .reminder {
    padding: 20px;
    padding-bottom: 0;
    margin-bottom: 2px;
    .title {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    .items {
      font-size: 12px;
      display: flex;
      color: #5e5f60;
      flex-wrap: wrap;
      .item {
        background: #f5f5f6;
        line-height: 1;
        padding: 6px 9px;
        border-radius: 20px;
        margin: 3px 5px;
      }
    }
  }
}
</style>
