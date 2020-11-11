<template>
  <div>
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%; font-size: 12px"
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
      <el-table-column label="任务目标" min-width="10%">
        <template slot-scope="scope">
          <span v-for="(sco, i) in scope.row.taskObject" :key="i"
            >{{ taskObjectList[sco] }},</span
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
          <span>{{ jobNatures[scope.row.jobNature] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="起止时间" min-width="10%">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime }}-{{ scope.row.endTime }}</span>
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
          <el-link
            type="primary"
            v-for="(ao, i) in adminOptions"
            :key="i"
            style="margin-left: 10px"
            @click="doOptions(scope.row.jobId, i)"
            >{{ ao }}</el-link
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      background :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="lotalElements">
    </el-pagination> -->
  </div>
</template>

<script>
import conditional from "../components/ef/conditional";
export default {
  data() {
    return {
      adminOptions: ["通过", "驳回"],
      taskObjectList: ["目标一", "目标二", "目标三", "目标四", "目标五"],
      triggerWays: ["行为触发", "定时触发"],
      jobNatures: ["正式任务", "测试任务"],
      currentPage: 1, //初始页
      pageSize: 10, //    每页的数据
      state: [
        {
          sta: "编辑中",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
            { key: "编辑", value: 2 },
            { key: "发布", value: 3 }
          ]
        },
        {
          sta: "待审批",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 }
          ]
        },
        {
          sta: "审批中",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 }
          ]
        },
        {
          sta: "已驳回",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 }
          ]
        },
        {
          sta: "待执行",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 }
          ]
        },
        {
          sta: "待审批",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "审批中",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已驳回",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "待执行",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "执行中",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
            { key: "中止任务", value: 4 },
            { key: "强制中止", value: 5 }
          ]
        },
        {
          sta: "已中止",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 }
          ]
        },
        {
          sta: "已中止",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已停止",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已到期",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
        {
          sta: "已完成",
          options: [
            { key: "查看", value: 0 },
            { key: "复制", value: 1 },
          ],
        },
      ],
      lotalElements: 0,
      users: [],
    };
  },
  components: {
    // conditional
  },
  methods: {
    doOptions(jobId, index) {
      //通过
      if (index == 0) {
        this.$confirm("通过?你确定要给这小伙通过吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$http({
            method: "POST",
            url: "http://49.233.45.33:8888/approval/permit",
            data: {
              jobId: jobId,
            },
          })
            .then((res) => {
              if (res.data.code == 200) {
              this.getUsers(this.currentPage, this.pageSize);
                this.$message({
                  message: res.data.msg,
                  type: "success",
                });
              }else{
                this.$message({
                  message: "通过失败",
                  type: "error",
                });
              }
            })
            .catch((err) => {
                this.$message({
                  message: "通过失败",
                  type: "error",
                });
              
            });
        });
      }
      if (index == 1) {
        //驳回
        this.$confirm("驳回?你这样做可能会寒了小伙的心？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$http({
            method: "POST",
            url: "http://49.233.45.33:8888/approval/reject",
            data: {
              jobId: jobId,
            },
          })
            .then((res) => {
              if (res.data.code == 200) {
              this.getUsers(this.currentPage, this.pageSize);
              this.$message({
                message: "已驳回",
                type: "success",
              });}
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
    },
    getUsers(page, pageSize) {
      this.loading = true;
      axios({
        method: "POST",
        url: "http://49.233.45.33:8888/approval/selectByJobState",
        data: {
          
        },
      })
        .then((res) => {
          this.users = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleSizeChange: function (size) {
      this.pageSize = size;
      this.getUsers(this.currentPage, size);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.getUsers(currentPage, this.pageSize);
    },
    selectChange(val) {
      this.multipleSelection = val;
    },
  },
  mounted() {
    this.getUsers(this.currentPage, this.pageSize);
  },
};
</script>