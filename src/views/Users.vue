<template>
  <div class="user-box">
    <el-form
      class="el-find-from"
      ref="taskquerylist"
      :model="taskquerylist"
      :inline="true"
      label-width="auto"
    >
        <el-form-item label="ID或名称" size="mini">
          <el-input
            v-model="idOrName"
            placeholder="请输入任务ID或名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="创建人" size="mini">
          <el-input
            v-model="taskquerylist.createBy"
            placeholder="请输入创建人"
          ></el-input>
        </el-form-item>
        <el-form-item label="触发方式" size="mini">
          <el-select
            v-model="taskquerylist.triggerWay"
            placeholder="所有方式"
            clearable
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
            multiple
            collapse-tags
          >
            <el-option label="目标1" value="0"></el-option>
            <el-option label="目标2" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务性质" size="mini">
          <el-select
            v-model="taskquerylist.jobNature"
            placeholder="所有性质"
            clearable
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
          >
            <el-option
              :label="option"
              :value="i"
              v-for="(option, i) in options"
              :key="option"
            ></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="起止时间" size="mini">
          <el-col :span="11">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-col>
        </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="20">
        <div class="tool-box">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="handleAdd"
            size="small"
            >新增</el-button
          >
        </div>
      </el-col>
      <el-col :span="4">
        <div class="tool-box">
          <el-button type="primary" size="small" @click="defaultList"
            >重置</el-button
          >
          <el-button type="primary" size="small" @click="queryList"
            >查询</el-button
          >
        </div>
      </el-col>
    </el-row>
    <!-- :data="users.slice((currentPage-1)*pageSize,currentPage*pageSize)" -->
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%;font-size:12px"
    >
      <el-table-column label="ID" min-width="5%">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
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
          <span v-for="(sco,i) in scope.row.taskObject" :key="i">{{taskObjectList[sco]}},</span>
        </template>
      </el-table-column>
      <el-table-column label="触发方式" min-width="10%">
        <template slot-scope="scope">
          <span>{{ triggerWays[scope.row.triggerWay] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务性质" min-width="10%">
        <template slot-scope="scope">
          <span>{{ jobNatures[scope.row.jobNature] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="起止时间" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}-{{scope.row.endTime}}</span>
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
          <el-link type="primary" v-for="(sco, i) in state[scope.row.jobState].options" :key="i" style="margin-left:10px" @click="doOptions(scope.row.jobId,sco.value)">{{sco.key}}</el-link >
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
import axios from "axios"
export default {
  data() {
    return {
      taskObjectList:["目标一","目标二","目标三","目标四","目标五"],
      triggerWays:["行为触发","定时触发"],
      jobNatures:["正式任务","测试任务"],
      idOrName: "",
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
            { key: "复制", value: 1 },
            { key: "编辑", value: 2 },
            { key: "发布", value: 3 },
          ],
        },
        { sta: "待审批", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "审批中", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "已驳回", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "待执行", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        {
          sta: "执行中",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
            { key: "中止任务", value: 4 },
            { key: "强制中止", value: 5 },
          ],
        },
        { sta: "已中止", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "已停止", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "已到期", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "已完成", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
      ],
      lotalElements: 0,
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
        jobName: "",
        jobType: "",
        endTime: "",
        startTime: "",
        createBy: "",
        jobState: "",
        property: "",
        page: "1",
        pageSize: "10",
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
    this.getUsers(1, 10);
  },
  methods: {
    // 初始页currentPage、初始每页数据数pageSize和数据data
    handleSizeChange: function (size) {
      this.pageSize = size;
      this.getUsers(1, size);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.getUsers(currentPage, 10);
    },
    handleCommand(command) {
      this.$message(command);
    },
    defaultList() {
      this.taskquerylist = {
        jobName: "",
        jobType: "",
        endTime: "",
        startTime: "",
        createBy: "",
        jobState: "",
        property: "",
      }
        this.idOrName=""
        this.time = ""
        this.getUsers(1, 10);
        this.currentPage=1
    },
    queryList() {
      // JSON.stringify(this.taskquerylist.taskObject)
      // this.taskquerylist.taskObject={}
      console.log( this.taskquerylist.taskObject)
      this.taskquerylist.taskObject=""
      if(this.taskquerylist.jobName!=""){
        this.taskquerylist.jobName=""
      }
      if(this.taskquerylist.id!=""){
        this.taskquerylist.id=""
      }
      if(isNaN(this.idOrName)){
        this.taskquerylist.jobName=this.idOrName
      }else{
        this.taskquerylist.id=this.idOrName
      }
      if (this.time !== "") {
        this.taskquerylist.startTime = this.time[0];
        this.taskquerylist.endTime = this.time[1];
      }
      console.log(this.taskquerylist)
      axios({
        method: "POST",
        url: "/test-1/listPage",
        data: this.taskquerylist,
      })
        .then((res) => {
          console.log(res.data.content)
          this.users = res.data.content;
          this.lotalElements=this.users.length
        })
        .catch((err) => {
          console.error(err);
        });
    },
    dianji() {
      this.$message("这是一条消息提示");
    },
    doOptions(jobId,value) {
      if(value===0){
        this.$message('查看');
      }
      if(value===1){
        this.$message('复制');
      }
      if(value===2){
        this.$message('编辑');
      }
      //发布
      if(value===3){
        axios({
        method: "POST",
        url: "/test-1/approval/issueTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.getUsers(1,10)
        })
        .catch((err) => {
          console.error(err);
        });
      }
      //中止任务
      if(value===4){
        axios({
        method: "POST",
        url: "/test-1/taskExecute/discontinueTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.getUsers(1,10)
        })
        .catch((err) => {
          console.error(err);
        });
      }
      //强制中止
      if(value===5){
        axios({
        method: "POST",
        url: "/test-1/taskExecute/terminationTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.getUsers(1,10)
        })
        .catch((err) => {
          console.error(err);
        });
      }
      // 为2表示编辑
      // if(value===2){
      //   axios({
      //   method: "POST",
      //   url: "/test-1/selectById",
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
    getUsers(page, pageSize) {
      this.loading = true;
      axios({
        method: "POST",
        url: "/test-1/listPage",
        data: {
          page: page,
          pageSize: pageSize,
        },
      })
        .then((res) => {
          this.users = res.data.content;
          console.log(typeof this.users[0].taskObject)
          this.lotalElements = res.data.lotalElements;
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
    height: 160px;
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
.cell{
  text-align: center;
}
</style>