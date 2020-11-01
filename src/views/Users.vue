<template>
  <div class="user-box">
    <el-form
      class="el-find-from"
      ref="taskquerylist"
      :model="taskquerylist"
      :inline="true"
      label-width="auto"
    >
      <div class="one">
        <el-form-item label="任务ID或任务名称">
          <el-input
            v-model="taskquerylist.name"
            placeholder="请输入任务名称"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input
            v-model="taskquerylist.createBy"
            placeholder="请输入任务名称"
            size="small"
          ></el-input>
        </el-form-item>
      </div>
      <div class="one">
        <el-form-item label="任务类别">
          <el-select
            v-model="taskquerylist.category"
            placeholder="所有类别"
            size="small"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务状态">
          <el-select
            v-model="taskquerylist.jobType"
            placeholder="所有状态"
            size="small"
          >
            <el-option :label="option" :value="option" v-for="option in options" :key="option"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="one">
        <el-form-item label="任务起止时间">
          <el-col :span="11">
            <el-date-picker
              v-model="taskquerylist.time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
            >
            </el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="任务性质" class="el-tasknature">
          <el-select
            v-model="taskquerylist.type"
            placeholder="显示全部"
            size="small"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-row>
      <el-col :span="20">
        <div class="tool-box">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            size="small"
            @click="handleAdd"
            >新增</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="mulDelete"
            >批量删除</el-button
          >
        </div>
      </el-col>
      <el-col :span="4">
        <div class="tool-box">
          <el-button type="primary" size="small" @click="defaultList"
            >默认列表</el-button
          >
          <el-button type="primary" size="small" @click="queryList"
            >查询</el-button
          >
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%"
    >

      <el-table-column  :width= "120" sortable prop="ID" label="ID" >
      </el-table-column>
      <el-table-column prop="name" label="任务名称" >
      </el-table-column>
      <el-table-column prop="category" label="任务类别" >
      </el-table-column>
      <el-table-column  prop="jobType" label="状态">
      </el-table-column>
      <el-table-column prop="startTime"  label="起止时间">
      </el-table-column>
      <el-table-column prop="createBy"  label="创建人">
      </el-table-column>
      <el-table-column prop="endTime"  label="创建时间">
      </el-table-column>
      <el-table-column label="操作" fixed="right" >
        <template slot-scope="scope">

          <el-dropdown size="medium" split-button type="primary" @command="handleCommand" @click="skipoptions(optioncommand)">
            {{optioncommand}}
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="查看">查看</el-dropdown-item>
              <el-dropdown-item command="复制">复制</el-dropdown-item>
              <el-dropdown-item command="编辑">编辑</el-dropdown-item>
              <el-dropdown-item command="发布">发布</el-dropdown-item>
              <el-dropdown-item command="终止任务">终止任务</el-dropdown-item>
              <el-dropdown-item command="强制终止">强制终止</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optioncommand:'默认',
      options: ["编辑", "发布", "查看", "复制", "终止任务", "强制终止"],
      value: "",
      users: [],
      user: {
        id: "",
        date: "",
        name: "",
        phone: "",
        address: "",
        status: 0,
      },
      taskquerylist: {
        name: "",
        jobType: "",
        time: "",
        createBy: "",
        category: "",
        property: "",
      },
      userBackup: Object.assign({}, this.user),
      multipleSelection: [],
      userFormVisible: false,
      dialogTitle: "",
      rowIndex: 9999,
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    skipoptions(pops){
      this.$message(pops);
    },
    handleCommand(command){
      this.optioncommand=command
    },
    defaultList() {
      this.getUsers();
    },
    queryList() {
      this.$http({
        method: "POST",
        url: "/api/queryList",
        data: this.taskquerylist,
      })
        .then((res) => {
          console.log(res.data)
          this.users = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    dianji() {
      this.$message("这是一条消息提示");
    },
    getUsers() {
      this.loading = true;
      this.$http("/api/taskList")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    //任务状态对应的可执行操作
    dooptions() {},
    handleEdit(index, row) {
      this.dialogTitle = "编辑";
      this.user = Object.assign({}, row);
      this.userFormVisible = true;
      this.rowIndex = index;
    },
    handleDelete(index, row) {
      this.$confirm(`确定删除用户 【${row.name}】 吗?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.users.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          console.log("取消删除");
        });
    },
    resetForm(formName) {
      this.$refs[formName].clearValidate();
    },
    mulDelete() {
      let len = this.multipleSelection.length;
      if (len === 0) {
        this.$message({
          type: "warning",
          message: "请至少选择一项！",
        });
      } else {
        this.$confirm(`确定删除选中的 ${len} 个用户吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: `成功删除了${len}条数据！`,
            });
          })
          .catch(() => {
            console.log("取消删除");
          });
      }
    },
    selectChange(val) {
      this.multipleSelection = val;
    },
    handleAdd() {
      this.dialogTitle = "新增";
      this.user = Object.assign({}, this.userBackup);
      this.userFormVisible = true;
       this.$router.push({ path: "/Panel", query: { id: "待测试" } });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-box {
  width: 100%;

  .tool-box {
    padding: 10px 10px;
    border-bottom: 1px solid #eee;
  }

  .el-pagination {
    margin-top: 20px;
  }
  .el-find-from {
    display: flex;
    justify-content: space-between;
    flex: wrap;
    flex-wrap: wrap;
    height: 110px;
    .one {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: last baseline;
      align-items: flex-end;
    }
    .el-tasknature {
      position: relative;
      right: 140px;
    }
  }
}
</style>
