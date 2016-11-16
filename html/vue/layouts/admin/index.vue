<template>  
  <div class="admin-panel">
    <aside>
      <div class="logo"><router-link to="/"><i class="fa fa-windows" aria-hidden="true"></i></router-link></div>
      <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark">      
        <el-menu-item index="1"><router-link to="/admin">全部任务</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/admin/add">新建任务</router-link></el-menu-item>
      </el-menu>
    </aside>
    <div class="admin-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="sass">
  aside{position: absolute;top:0;left:0;bottom:0;width:150px;background-color: #324057;}
  .logo{height:120px;line-height:120px;color:#fff;font-size:48px;text-align:center}
  .admin-main{position: absolute;top:0;bottom:0;left:150px;right:0;overflow: auto;}
  .el-menu-item{
    a {padding:0 20px;margin:0 -20px;display: block;height: 100%}
  }
</style>
