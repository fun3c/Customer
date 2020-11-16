<template>
  <div class="header-box">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" style="font-size:34px">
      </el-col>
      <el-col :span="6" :offset="14" >
      
        <!-- <button class="btn-tool" title="刷新" @click="refresh">
            <i class="el-icon-refresh"></i>
        </button>
        <button class="btn-tool" title="全屏" @click="Utils.fullScreen">
            <i class="el-icon-rank"></i>
        </button>
        <button class="btn-tool" title="便签" @click="dialogVisible = true" >
          <i class="el-icon-edit"></i>
        </button> -->
      </el-col>
      <el-col :span="4" align="right" >
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <!-- <span>{{ Utils.todayDate() }}</span> -->
        <el-dropdown trigger="click" class="user-name" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile" disabled>个人资料</el-dropdown-item>
            <el-dropdown-item command="updatepwd" disabled>修改密码</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog title="便签" width="400px"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      @closed="saveNotes">
      <el-input
        type="textarea"
        :rows="7"
        placeholder="请输入内容"
        v-model="notes">
      </el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      isCollapse: false,
      dialogVisible: false,
      notes: localStorage.getItem('notes') || '便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录'
    }
  },
  methods: {
    collapse () {
      this.$store.commit('switchCollapse')
    },
    refresh () {
      this.reload()
    },
    saveNotes () {
      localStorage.setItem('notes', this.notes)
    },
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.$router.replace({ path: '/login' })
          break
      }
    }
  },
  computed: {
    username () {
      let { username } = JSON.parse(sessionStorage.getItem('user'))
      return username.toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-tool {
    border: none;
    background: transparent;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    text-align: left;
  }
  .user-name {
    margin-left: 20px;
  }
  
</style>
<style>
.index-box .el-header{
    border-bottom: 1px solid black;
  }
  .index-box .el-aside {
    height: 100% !important;
    min-height: 100%;
    background-color: white !important;
}
.header-box{
  background-color: #5F72E2;
  z-index: 500;
}
.el-dropdown{
  color:#ffffff !important;
  margin-right: 20px;
  
}
</style>
