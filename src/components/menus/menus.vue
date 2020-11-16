<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    :collapse="isCollapse"
  >
  
    <el-row>
      <el-col :span="24"
        ><div class="biaoqian">
          </div
      ></el-col>
    </el-row>
      <button class="btn-tool" title="折叠" @click="collapse" >
            <i class="el-icon-d-arrow-left"></i>
        </button>
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
    <el-menu-item index="/console">
      <i class="el-icon-location"></i>
      <span slot="title">审批中心</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      currentPath: location.pathname,
    };
  },
  methods:{
      collapse () {
      this.$store.commit('switchCollapse')
    },
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
.menu-nav:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.biaoqian{
  margin-left: 10px;
  width: 100%;
  height: 60px;
  background: url("../../assets/dcustomerlogo.png"   ) no-repeat;
}
  .btn-tool {
    border: none;
    background: transparent;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    text-align: right;
  }
</style>
