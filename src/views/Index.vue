<template>
  <el-container class="index-box">
    <el-aside width="asideWidth" class="left-nav">
      <menus :isCollapse="isCollapse" />
    </el-aside>

    <el-container>
      <el-header style="height: 70px;">
        <headers />
      </el-header>
      <el-main>
        <router-view v-if="isRouterAlive" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menus from "@/components/menus/menus";
import Headers from "@/components/header/header";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  components: {
    Menus,
    Headers,
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asideWidth() {
      return this.$store.state.isCollapse ? "auto" : "200px";
    },
  },
};
</script>

<style lang="scss">
.index-box {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      height: 100%;
    }
    .left-nav {
      height: 100% !important;
    }
  }

  .el-aside {
    background-color: #20222A;
    height: 100vh;
    min-height: 100%;
    .logo {
      background-color: #20222A;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      height: 60px;
      padding-top: 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid gray;
    }
  }
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 60px;
  }
}
</style>
