<template>
  <div>
    <h1>主体框架</h1>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/admin">后台管理页面</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>