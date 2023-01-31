<template>
  <div class="header">
    <el-input
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="Search"
      @focus="handleFocus"
    >
      <template #suffix>
        <div class="search-wrap">
          <div class="search">搜索</div>
        </div>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handleFocus = () => {
  router.push("/search");
};
</script>

<style scoped lang="less">
.header {
  height: 14.4vw;
  background: #7cfa72;
  display: flex;
  align-items: center;
  padding: 0 2.1333vw;
  user-select: none;
  :deep(.el-input__wrapper) {
    border-radius: 8vw;
  }
  :deep(.el-input__wrapper:hover) {
    box-shadow: none;
  }
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
  }
  .search-wrap {
    height: 8.5333vw;
    padding: 0.8vw 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .search {
    line-height: 6.9333vw;
    background-color: rgb(124, 250, 114);
    border-radius: 26.6667vw;
    display: flex;
    margin-right: -1.3333vw;
    padding: 0 3.2vw;
    font-size: 3.4667vw;
    color: #000;
  }
}
</style>
