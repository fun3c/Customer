<template>
  <div class="console">
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
      <el-table-column label="任务类别" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.jobType }}</span>
        </template>
      </el-table-column>
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
  </div>
</template>

<script>
import conditional from "../components/ef/conditional"
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
             { key: "查看", value: 0 },
            { key: "复制", value: 1 },
            { key: "编辑", value: 2 },
            { key: "发布", value: 3 },
          ],
        },
        { sta: "待审批", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "审批中", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
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
        { sta: "已完成", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
        { sta: "已到期", options: [{ key: "查看", value: 0 },{ key: "复制", value: 1 }] },
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
        property: " ",
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
      this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/listPage",
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
      if(value===3){
        this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/approval/issueTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res,data);
        })
        .catch((err) => {
          console.error(err);
        });
      }
      if(value===4){
        this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/taskExecute/discontinueTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res,data);
        })
        .catch((err) => {
          console.error(err);
        });
      }
      if(value===5){
        this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/taskExecute/terminationTask",
        data: {
          jobId:jobId,
        },
      })
        .then((res) => {
          console.log(res,data);
        })
        .catch((err) => {
          console.error(err);
        });
      }
      // 为2表示编辑
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
    getUsers(page, pageSize) {
      this.loading = true;
      this.$http({
        method: "POST",
        url: "http://192.168.1.47:8888/listPage",
        data: {
          page: page,
          pageSize: pageSize,
        },
      })
        // this.$http("/api/defaultList")
        .then((res) => {
          this.users = res.data.content;
          let str = this.users.taskObject
         str.Substring(0,1);
          str.Substring(str.length-1,1);
         this.users.taskObject.split(",")
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
  .console {
    // font-size: 30px;
    // text-align: center;
    // margin-top: 350px;
  }
</style>
