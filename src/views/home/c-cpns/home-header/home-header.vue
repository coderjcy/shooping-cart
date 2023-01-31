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
  height: 54px;
  background: #7cfa72;
  display: flex;
  align-items: center;
  padding: 0 8px;
  user-select: none;
  :deep(.el-input__wrapper) {
    border-radius: 30px;
  }
  :deep(.el-input__wrapper:hover) {
    box-shadow: none;
  }
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
  }
  .search-wrap {
    height: 32px;
    padding: 3px 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .search {
    line-height: 26px;
    background-color: rgb(124, 250, 114);
    border-radius: 100px;
    display: flex;
    margin-right: -5px;
    padding: 0 12px;
    font-size: 13px;
    color: #000;
  }
}
</style>
