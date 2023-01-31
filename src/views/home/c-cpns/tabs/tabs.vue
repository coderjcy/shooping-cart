<template>
  <div class="tabs">
    <span class="tab-item">首页</span>
    <span class="tab-item">订单</span>
    <span class="tab-item">我的</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.tabs {
  display: flex;
  height: 100%;

  .tab-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
