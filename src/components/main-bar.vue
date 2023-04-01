<template>
  <ul class="main-bar">
    <li v-for="(item, idx) in (props.list as any)" :key="idx">
      <div class="feed-item">
        <div class="feed-thumb">
          <a href="" target="_blank"
            ><img src="@image/thumb.jpg" alt="item.title"
          /></a>
        </div>
        <div class="feed-desc">
          <h2 class="feed-title">
            <a href="" :title="item.title" target="_blank">{{ item.title }}</a>
          </h2>
          <div class="feed-words">
            <p>
              {{ item.subtitle }}
            </p>
          </div>
          <div class="feed-controls has-user">
            <div class="feed-user">
              <a href="javascript:;" class="unlogin"
                ><img src="@image/logo.png" /></a
              >推荐
            </div>
            <div class="feed-counts">
              <div class="counter feed-fav">
                <i class="icon ai-28dianzan"></i>
                <span class="num">16</span>
              </div>
              <div class="counter feed-view">
                <i class="icon ai-chakan"></i><span class="num">19017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
let props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
console.log(props.list)
</script>

<style lang="less" scoped>
@themeColor: #f60;
@defaultBorderColor: #ccc;
@backgroundColor: #fff;

.text-hidden(@width: 100%) {
  max-width: @width;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
  word-break: break-all;
}

// inline-block
.inline-block() {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.main-bar {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-left: 233px;
  background: #f4f4f4;
  min-height: calc(100vh - 168px);
  padding-top: 76px;
  overflow: hidden;
  padding-bottom: 30px;
}
.feed-items {
  padding-top: 6px;
  padding-bottom: 10px;
}
.feed-item {
  position: relative;
  float: left;
  width: 298px;
  height: 318px;
  margin-left: 9px;
  margin-right: 9px;
  margin-top: 18px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #cfcfcf;
  -webkit-transtion: border 0.3s;
  transition: border 0.3s;
  .feed-thumb {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    overflow: hidden;
    height: 205px;
    background-color: @backgroundColor;
    // background-image: url(../images/thumb-default.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 205px;
    font-size: 0;
    a {
      display: block;
      height: 205px;
    }
    img {
      vertical-align: top;
      max-width: 100%;
      max-height: 205px;
      width: 100%;
    }
    .feed-thumb-player {
      position: absolute;
      left: 15px;
      top: 15px;
      z-index: 10;
      width: 41px;
      height: 26px;
      border: 0 none;
      outline: 0 none;
      background: url(/assets/image/icon-gif-player.png) center center no-repeat;
      &:hover,
      &.playing {
        background: url(/assets//icon-gif-playing.png) center center no-repeat;
      }
    }
  }

  .feed-delete {
    position: absolute;
    top: 15px;
    z-index: 10;
    right: 15px;
    width: 15px;
    height: 16px;
    border: 0 none;
    overflow: hidden;
    text-indent: -99em;
    background-color: transparent;
    background-image: url(/assets//icons-sprite.png);
    background-repeat: no-repeat;
    background-position: 0 -90px;
    &:hover {
      background-position: -15px -90px;
    }
  }
  .feed-access {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 24px;
    padding: 3px 8px;
    color: #ffffff;
    opacity: 0.8;
    font-size: 14px;
    &.feed-access-pending {
      background-color: #a7a8a7;
    }
    &.feed-access-approval {
      background-color: #57bf46;
    }
    &.feed-access-reject {
      background-color: #eb6d55;
    }
  }
  .feed-desc {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 112px;
    background-color: #ffffff;
    border-top: 1px solid @defaultBorderColor;
  }
  .feed-title {
    padding: 8px 15px 0;
    height: 36px;
    line-height: 36px;
    .text-hidden(100%);
    a {
      display: block;
      .text-hidden(100%);
      line-height: 36px;
      color: #222222;
    }
  }
  .feed-words {
    height: 40px;
    line-height: 40px;
    margin: 5px 0;
    padding: 0 15px;
    overflow: hidden;
    p {
      line-height: 20px;
      font-size: 12px;
      color: #989898;
    }
  }
  .feed-controls {
    overflow: hidden;
    margin: 10px 15px;
    height: 0;
    -webkit-transition: height 0.2s ease-in;
    transition: height 0.2s ease-in;
  }
  // 统计
  .feed-counts {
    float: left;
    height: 36px;
    line-height: 36px;
    .counter {
      float: left;
    }
    .feed-fav {
      margin-right: 12px;
      padding-right: 14px;
      background-repeat: no-repeat;
      background-position: right center;
    }
    .icon {
      margin-right: 3px;
    }
    .icon-fav {
      width: 14px;
      height: 13px;
      cursor: pointer;
      vertical-align: -3px;
      background-position: 0 -52px;
      &:hover {
        background-position: -14px -52px;
      }
      &.faved {
        background-position: 0 -65px;
      }
    }
    .icon-view {
      width: 18px;
      height: 12px;
      vertical-align: -2px;
      background-position: 0 -78px;
      &.viewed {
        background-position: 0 -120px;
      }
    }
  }

  .feed-user {
    float: left;
    line-height: 36px;
    a {
      float: left;
      margin-right: 8px;
    }
    img {
      width: 36px;
      height: 36px;
      vertical-align: top;
      border-radius: 100%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .has-user {
    .feed-counts {
      float: right;
    }
  }

  &:hover {
    border-color: @themeColor;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    .feed-title {
      a {
        color: @themeColor;
      }
    }
    .feed-controls {
      height: 36px;
    }
  }
}

.feed-hipster-list {
  padding-bottom: 10px;
  li {
    float: left;
    width: 250px;
    height: 60px;
    margin-top: 18px;
    margin-left: 9px;
    margin-right: 9px;
    padding: 30px 24px;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    border-bottom-color: #d4d4d4;
    border-radius: 2px;
    &:hover {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    a {
      display: block;
      height: 60px;
    }
    img {
      float: left;
      width: 60px;
      height: 60px;
      margin-right: 25px;
      vertical-align: top;
      border-radius: 100%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .name {
      display: block;
      line-height: 32px;
      font-size: 16px;
    }
    .count {
      display: block;
      line-height: 20px;
      font-size: 12px;
      color: #888888;
    }
  }
}
.feed-empty {
  margin-top: 168px;
  padding: 120px 20px 110px;
  text-align: center;
  h3 {
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    line-height: 30px;
    font-size: 16px;
  }
}

.user-locked {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 280px;
  height: 70px;
  margin-left: -140px;
  margin-top: -100px;
  padding-top: 130px;
  text-align: center;
  h2 {
    line-height: 38px;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    line-height: 32px;
    font-size: 16px;
  }
}
</style>
