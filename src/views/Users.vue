<template>
  <div class="user-box">
    <el-form
      class="idorname"
      ref="taskquerylist"
      :model="taskquerylist"
      :inline="true"
      label-width="auto"
    >
    <el-form-item label="" size="mini">
        <el-input
          v-model="taskquerylist.idOrName"
          placeholder="请输入任务ID或名称"
          onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"
          maxlength="40"
          clearable
          @clear="chuan('idOrName')"
        ></el-input>
      </el-form-item>
      <el-button type="primary" size="mini" @click="selectIdOrName"
            >搜索</el-button
          >
    </el-form>
    
    <div style="width:99%;height:120px;background-color: white;padding:10px 10px">
      <el-form
      class="el-find-from"
      ref="taskquerylist"
      :model="taskquerylist"
      :inline="true"
      label-width="auto"
    >
      <el-form-item label="创建人" size="mini">
        <el-input
          v-model="taskquerylist.createBy"
          placeholder="请输入创建人"
          clearable
          @clear="chuan('createBy')"
        ></el-input>
      </el-form-item>
      <el-form-item label="触发方式" size="mini">
        <el-select
          v-model="taskquerylist.triggerWay"
          placeholder="所有方式"
          clearable
          @clear="chuan('triggerWay')"
        >
          <el-option label="行为触发" value="0"></el-option>
          <el-option label="定时触发" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务目标" size="mini">
        <el-select
          v-model="taskquerylist.taskObject"
          placeholder="所有目标"
          clearable
          @clear="chuan('taskObject')"
        >
          <el-option label="无任务目标" value="c00"></el-option>
          <el-option label="代售固收交易人数" value="c01"></el-option>
          <el-option label="自营固收交易人数" value="c02"></el-option>
          <el-option label="基金购买份额" value="c03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务性质" size="mini">
        <el-select
          v-model="taskquerylist.delivery"
          placeholder="所有性质"
          clearable
          @clear="chuan('delivery')"
        >
          <el-option label="正式任务" value="0"></el-option>
          <el-option label="测试任务" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务状态" size="mini">
        <el-select
          v-model="taskquerylist.jobState"
          placeholder="所有状态"
          clearable
          @clear="chuan('jobState')"
        >
          <el-option label="编辑中" value="0"></el-option>
          <el-option label="待审批" value="1"></el-option>
          <el-option label="审批中" value="2"></el-option>
          <el-option label="已驳回" value="3"></el-option>
          <el-option label="待执行" value="4"></el-option>
          <el-option label="执行中" value="5"></el-option>
          <el-option label="已中止" value="6"></el-option>
          <el-option label="已停止" value="7"></el-option>
          <el-option label="已到期" value="8"></el-option>
          <el-option label="已完成" value="9"></el-option>
          <!-- <el-option
            :label="option"
            :value="i"
            v-for="(option, i) in options"
            :key="option"
          ></el-option> -->
        </el-select>
      </el-form-item>

      <el-form-item label="起止时间" size="mini">
        <el-col :span="11">
          <el-date-picker
            v-model="taskquerylist.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="yyyy-MM-dd HH:mm:dd"
            clearable
          >
          </el-date-picker>
        </el-col>
      </el-form-item>
    </el-form>
    <el-col :span="24">
        <div class="tool-box" style="float:right">
          <el-button type="primary" size="mini" @click="defaultList" style="background-color: white;color:#949393"
            >重置</el-button
          >
          <el-button type="primary" size="mini" @click="queryList"
            >查询</el-button
          >
        </div>
      </el-col>
    </div>
    
    <el-row>
      <el-col :span="20">
        <div class="tool-box">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="handleAdd"
            size="mini"
            >新增</el-button
          >
        </div>
      </el-col>
      
    </el-row>
    <!-- :data="users.slice((currentPage-1)*pageSize,currentPage*pageSize)" -->
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%; font-size: 12px"
    >
      <el-table-column label="ID" min-width="5%">
        <template slot-scope="scope">
          <span>{{ scope.row.jobId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务名称" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.jobName }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="任务类别" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.jobType }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="任务目标" min-width="10%">
        <template slot-scope="scope">
          <span v-for="(sco, i) in scope.row.taskObject" :key="i"
            >{{ sco }},</span
          >
        </template>
      </el-table-column>
      <el-table-column label="触发方式" min-width="10%">
        <template slot-scope="scope">
          <span>{{ triggerWays[scope.row.triggerWay] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务性质" min-width="10%">
        <template slot-scope="scope">
          <span>{{ deliverys[scope.row.delivery] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="起止时间" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}<br />{{ scope.row.endTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务状态" min-width="10%">
        <template slot-scope="scope">
          <span>{{ state[scope.row.jobState].sta }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建人" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.createBy }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审批通过时间" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.approvalTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" min-width="15%">
        <template slot-scope="scope" style="position: relative">
          <!-- {{state[scope.row.jobState].options}} -->
          <!-- <el-dropdown
            size="medium"
            split-button
            type="primary"
            @command="doOptions()"
          >
            查看
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="[scope.row.id,sco.value]"
                @click="test"
                v-for="(sco, i) in state[scope.row.jobState].options"
                :key="i"
                >{{ sco.key }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-link
            type="primary"
            v-for="(sco, i) in state[scope.row.jobState].options"
            :key="i"
            style="margin-left: 10px"
            @click="doOptions(scope.row.jobId, sco.value)"
            >{{ sco.key }}</el-link
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="lotalElements"
    >
    </el-pagination>
  </div>
</template>

<script>
const qs = require('qs');
export default {
  data() {
    return {
      triggerWays: ["行为触发", "定时触发"],
      deliverys: ["正式任务", "测试任务"],
      currentPage: 1, //初始页
      pageSize: 10, //    每页的数据
      options: [
        "编辑中",
        "待审批",
        "审批中",
        "已驳回",
        "待执行",
        "执行中",
        "已中止",
        "已停止",
        "已到期",
        "已完成",
      ],
      state: [
        {
          sta: "编辑中",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
            { key: "编辑", value: 2 },
            { key: "发布", value: 3 },
          ],
        },
        {
          sta: "待审批",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "审批中",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已驳回",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "待执行",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "执行中",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
            { key: "中止任务", value: 4 },
            { key: "强制中止", value: 5 },
          ],
        },
        {
          sta: "已中止",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已停止",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已到期",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已完成",
          options: [
            { key: "查看", value: 0 },
            // { key: "复制", value: 1 },
          ],
        },
      ],
      lotalElements: 0,
      users: [],
      user: {
        id: "",
        date: "",
        name: "",
        phone: "",
        address: "",
        status: 0,
      },
      taskquerylist: {},
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
    //拿到地址参数
    this.geturlcanshu();
    this.getJobList();
  },
  methods: {
    selectIdOrName(){
      this.setcanshu();
      this.$http({
        method: "GET",
        url: "http://49.233.45.33:8888/selectPage",
        params: this.taskquerylist,
      })
        .then((res) => {
          this.users = res.data.data.list;
          this.lotalElements = res.data.data.total;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    chuan(param) {
      delete this.taskquerylist[param];
    },
    // 初始页currentPage、初始每页数据数pageSize和数据data
    handleSizeChange: function (size) {
      this.pageSize = size;
      this.queryList();
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.queryList();
    },
    defaultList() {
      this.taskquerylist = {
        page: 1,
        pageSize: 10,
      };
      this.$router.push("users");
      this.getJobList();
    },
    //解析url参数
    geturlcanshu() {
      if (Object.keys(this.$route.query).length != 0) {
        this.taskquerylist = this.$route.query;
        //判断对象中是否有time属性
        if('time' in this.taskquerylist){
          this.taskquerylist.time=this.taskquerylist.time.split(',')
        }
      } else {
        this.taskquerylist.page = this.currentPage;
        this.taskquerylist.pageSize = this.pageSize;
      }
    },
    //筛选条件时url后边接上参数
    setcanshu() {
      this.taskquerylist.page = this.currentPage;
      this.taskquerylist.pageSize = this.pageSize;
      let canshu = this.$route.path + "?";
      for (let key in this.taskquerylist) {
        canshu +=
          key.toString() + "=" + this.taskquerylist[key].toString() + "&";
      }
      window.history.pushState("", "", canshu.slice(0, canshu.length - 1));
    },
    getJobList() {
      this.loading = true;
      this.$http({
        method: "GET",
        url: "http://49.233.45.33:8888/selectPage",
        params: this.taskquerylist,
        paramsSerializer: function(params) {
        return qs.stringify(params, {arrayFormat: 'repeat'})
    }
      })
        .then((res) => {
          this.users = res.data.data.list;
          this.lotalElements = res.data.data.total;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    queryList() {
      if('time' in this.taskquerylist&&(this.taskquerylist.time==null||this.taskquerylist.time=='')){
        delete this.taskquerylist.time
      }
      this.setcanshu();
      this.$http({
        method: "GET",
        url: "http://49.233.45.33:8888/selectPage",
        params: this.taskquerylist,
        paramsSerializer: function(params) {
        return qs.stringify(params, {arrayFormat: 'repeat'})
    }
      })
        .then((res) => {
          this.users = res.data.data.list;
          this.lotalElements = res.data.data.total;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    doOptions(jobId, value) {
      if (value === 0) {
        //查看
        this.$router.push({
          name: "Panel",
          params: { id: jobId, value: value },
        });
      }
      // if (value === 1) {
      //   this.$message("复制");
      // }
      if (value === 2) {
        //编辑
        this.$router.push({
          name: "Panel",
          params: { id: jobId, value: value },
        });
      }
      //发布
      if (value === 3) {
        this.$confirm("确定要发布吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$http({
            method: "POST",
            url: "http://49.233.45.33:8888/approval/issueTask",
            data: {
              jobId: jobId,
            },
          })
            .then((res) => {
              if (res.data.code == 400) {
                this.$alert(res.data.msg, "发布失败", {
                  confirmButtonText: "确定",
                });
              }
              if (res.data.code == 200) {
                this.getJobList();
                this.$message({
                  message: "发布成功",
                  type: "success",
                });
              }
            })
            .catch((err) => {
              this.$message.error("发布失败");
            });
        });
      }
      //中止任务
      if (value === 4) {
        this.$confirm(
          "任务中止后，开始控件停止运行，已经在执行中的ID会继续执行至结束，是否中止任务？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          this.$http({
            method: "POST",
            url: "http://49.233.45.33:8888/taskExecute/discontinueTask",
            data: {
              jobId: jobId,
            },
          })
            .then((res) => {
              this.getJobList();
            })
            .catch((err) => {
              this.$message.error("中止任务失败");
            });
        });
      }
      //强制中止
      if (value === 5) {
        this.$confirm(
          "任务停止后，开始控件停止运行，已经在执行中的ID会全部停止执行，是否停止任务？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          this.$http({
            method: "POST",
            url: "http://49.233.45.33:8888/taskExecute/terminationTask",
            data: {
              jobId: jobId,
            },
          })
            .then((res) => {
              this.getJobList();
            })
            .catch((err) => {
              this.$message.error("强制中止任务失败");
            });
        });
      }
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
          this.$message({
            type: "error",
            message: "删除失败!",
          });
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
      this.$router.push({ path: "/Panel" });
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
    height: 80px;
    background-color: white;
    /* // .one {
    //   width: 29%;
    //   display: flex;
    //   flex-direction: column;
    //   height: 100%;
    //   justify-content: flex-start;
    //   // align-items: flex-end;
    // }
    // .ones {
    //   width: 42%;
    //   display: flex;
    //   flex-direction: column;
    //   height: 100%;
    //   justify-content: flex-start;
    //   align-items: flex-end;
    // } */
  }
}
</style>
<style>
.optiondiv {
  position: absolute;
  width: 89px;
  height: auto;
}

.el-pointer:hover {
  cursor: pointer;
}

.cell {
  text-align: center;
}
.idorname{
  width: 100%;
  height: 50px;
  
}
.el-form--inline .el-form-item{
  margin-right: 0px ! important;
}
.el-header{
  padding: 0 0 ! important
}
.el-button--primary{
  border-color: white ! important;
}
</style>