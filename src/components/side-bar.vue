<template>
  <div class="sidebar">
    <div class="header"><h2>订阅源</h2></div>
    <ul class="recom-list">
      <li class="feed-list-item feed-recom current">
        <i class="feed-icon"></i>
        <span class="feed-name">最新精选</span>
        <span class="feed-update">99+</span>
      </li>
      <li class="feed-list-item feed-recom">
        <i class="feed-icon"></i>
        <span class="feed-name">最火推荐</span>
        <span class="feed-update">99+</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

// const current = ref()
</script>

<style lang="less" scoped>
@themeColor: #f60;
@defaultBorderColor: #ccc;
.sidebar {
  position: fixed;
  top: 71px;
  bottom: 0;
  left: 0;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  width: 232px;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  .header {
    padding: 10px 24px;
    border-bottom: 1px solid #e8e8e8;
    h2 {
      font-size: 20px;
      line-height: 40px;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      word-wrap: normal;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
  .recom-list {
    // height: 99px;
    padding: 17px 0 15px;

    li {
      position: relative;
      height: 50px;
      margin-top: -1px;
      padding: 10px 20px 10px 24px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid #f2f2f2;
      cursor: pointer;
    }
    .user-recom {
      .feed-icon {
        background-position: 0 -28px;
      }
    }
    .feed-recom {
      .feed-icon {
        background-position: 0 0;
      }
    }
    .feed-name {
      float: left;
      margin-left: 12px;
      line-height: 28px;
      font-size: 16px;
    }
    .feed-update {
      float: right;
      height: 20px;
      line-height: 20px;
      margin-top: 3px;
      padding: 0 8px;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      color: #adadad;
      cursor: default;
    }
    .current {
      background-color: #fff5ee;
      border-color: #f8d4bc;
      z-index: 10;
      .feed-name {
        color: @themeColor;
      }
      .feed-update {
        background-color: #ffb17e;
        border-color: #ffb17e;
        color: #ffffff;
      }
    }
  }
}
</style>
