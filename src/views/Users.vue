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
            v-model="IdOrName"
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
            v-model="taskquerylist.jobType"
            placeholder="所有类别"
            size="small"
          >
            <el-option label="任务类别1" value="类别1"></el-option>
            <el-option label="任务类别2" value="类别2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务状态">
          <el-select
            v-model="taskquerylist.jobState"
            placeholder="所有状态"
            size="small"
          >
            <el-option
              :label="option"
              :value="i"
              v-for="(option, i) in options"
              :key="option"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="one">
        <el-form-item label="任务起止时间">
          <el-col :span="11">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="任务性质" class="el-tasknature">
          <el-select
            v-model="taskquerylist.nature"
            placeholder="显示全部"
            size="small"
          >
            <el-option label="正式任务" value="shanghai"></el-option>
            <el-option label="测试任务" value="beijing"></el-option>
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
      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务名称" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.jobName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务类别" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.jobType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <span>{{ state[scope.row.jobState].sta }}</span>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建人" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.createBy }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <!-- {{state[scope.row.jobState].options}} -->
          <el-dropdown
            size="medium"
            split-button
            type="primary"
            @command="doOptions(command,scope.row.id)"
          >
            查看
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="sco.value"
                @click="test"
                v-for="(sco, i) in state[scope.row.jobState].options"
                :key="i"
                >{{ sco.key }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="users.length"
    >
    </el-pagination> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      IdOrName: "",
      page: 1, //初始页
      pageSize: 10, //    每页的数据
      options: [
        "编辑中",
        "待审批",
        "审批中",
        "待执行",
        "执行中",
        "已中止",
        "已停止",
        "已完成",
        "已到期",
      ],
      state: [
        {
          sta: "编辑中",
          options: [
            { key: "复制", value: 1 },
            { key: "编辑", value: 2 },
            { key: "发布", value: 3 },
          ],
        },
        { sta: "待审批", options: [{ key: "复制", value: 1 }] },
        { sta: "审批中", options: [{ key: "复制", value: 1 }] },
        { sta: "待执行", options: [{ key: "复制", value: 1 }] },
        {
          sta: "执行中",
          options: [
            { key: "复制", value: 1 },
            { key: "中止任务", value: 4 },
            { key: "强制中止", value: 5 },
          ],
        },
        { sta: "已中止", options: [{ key: "复制", value: 1 }] },
        { sta: "已停止", options: [{ key: "复制", value: 1 }] },
        { sta: "已完成", options: [{ key: "复制", value: 1 }] },
        { sta: "已到期", options: [{ key: "复制", value: 1 }] },
      ],
      time: "",
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
        id: 0,
        jobName: "",
        jobType: "",
        endTime: "",
        startTime: "",
        createBy: "",
        jobState: "",
        property: "",
        page: 1, 
        pageSize: 10,
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
    test(){
      console.log("xx")
    },
    // 初始页currentPage、初始每页数据数pageSize和数据data
    handleSizeChange: function (size) {
      this.pageSize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },
    skipoptions() {
      this.$message("查看");
    },
    handleCommand(command) {
      this.$message(command);
    },
    defaultList() {
      (this.taskquerylist = {
        jobName: "",
        jobType: "",
        endTime: "",
        startTime: "",
        createBy: "",
        jobState: "",
        property: "",
      }),
        (this.time = ""),
        this.getUsers();
    },
    queryList() {
      // if(2 instanceof this.IdOrName)
      this.taskquerylist.startTime = this.time[0];
      this.taskquerylist.endTime = this.time[1];
      this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/listPage",
        data: this.taskquerylist,
      })
        .then((res) => {
          this.users = res.data.content;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    dianji() {
      this.$message("这是一条消息提示");
    },
    //对应操作触发的方法,第一个参数是操作对应的value，第二个是id
    doOptions(command,va){
      console.log(command+"x"+va)
      //为2表示编辑
      // if(value===2){
      //   this.$http({
      //   method: "POST",
      //   url: "http://192.168.1.47:8888/selectById",
      //   data: {
      //     id:id,
      //   },
      // })
      //   .then((res) => {
      //     console.log(res,data);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      // }
    },
    getUsers() {
      this.loading = true;
      // this.$http({
      //   method: "POST",
      //   url: "http://192.168.1.47:8888/listPage",
      //   data: {
      //     page:"1",
      //     pageSize:"10"
      //   },
      // })
      this.$http("/api/defaultList")
        .then((res) => {
          this.users = res.data.content;
          console.log(this.users);
        })
        .catch((err) => {
          console.error(err);
        });
    },
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
      this.$router.push({ path: "/Panel", query: { id: "1" } });
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
