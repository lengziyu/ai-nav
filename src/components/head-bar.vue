<template>
  <header>
    <div class="main">
      <div class="logo">
        <h1>
          <a href="/"
            ><img src="@image/logo.png" width="40" alt="" /><span
              >AI导航</span
            ></a
          >
        </h1>
      </div>
      <nav class="nav">
        <ul>
          <li class="feed current"><a href="">首页</a></li>
          <li class="site"><a href="">网址精选</a></li>
          <li class="user">
            <a href="javascript:;" class="unlogin">前端相关</a>
          </li>
          <li class="user">
            <a href="javascript:;" class="unlogin">实用工具</a>
          </li>
        </ul>
      </nav>
      <div class="userpanel">
        <div class="usermenu">
          <a href="javascript:;" class="login-btn unlogin">登录</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@themeColor: #f60;
header {
  z-index: 1000;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #e8e8e8;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
}

header .logo {
  float: left;
  h1 {
    font-size: 24px;
  }
}

header .logo img {
  display: block;
  float: left;
  margin-right: 5px;
  margin-top: 16px;
}

header .logo a {
  display: block;
  line-height: 70px;
  color: #2b2b2b;
}

header .nav {
  float: left;
  margin-left: 25px;
}

header .nav li {
  position: relative;
  float: left;
  font-size: 16px;
  border-bottom: 1px solid transparent;
}

header .nav li a {
  display: block;
  padding: 0px 24px;
  line-height: 70px;
  opacity: 0.8;
  transition: all 0.2s ease 0s;
}
header .nav li.current {
  border-color: @themeColor;
  a {
    color: @themeColor;
    opacity: 1;
  }
}

header .userpanel {
  height: 70px;
  float: right;
}

header .userpanel .usermenu {
  position: relative;
  float: left;
  height: 30px;
  top: 50%;
  margin-top: -15px;
}

header .userpanel .usermenu a {
  display: inline-block;
  width: auto;
  padding: 0px 15px;
  line-height: 28px;
  border: 1px solid #38bef0;
  border-radius: 3px;
  color: #40a3da;
}

header .main {
  padding-left: 24px;
  padding-right: 24px;
}
</style>
