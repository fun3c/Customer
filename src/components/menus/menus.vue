<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <el-menu-item index="/console">
      <i class="el-icon-location"></i>
      <span slot="title">审批中心</span>
    </el-menu-item>

        <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>任务管理</span>
      </template>
        <el-menu-item index="/users">
      <i class="el-icon-menu"></i>
      <span slot="title">任务列表</span>
    </el-menu-item>

    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data () {
    return {
      currentPath: location.pathname
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
