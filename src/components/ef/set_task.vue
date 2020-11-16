<template>
  <el-dialog
    title="任务设置"
    :visible.sync="dialogVisible"
    width="30%"
    customClass="flowHelp"
  >
    <el-form
      :visible.sync="dialogVisible"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="任务名称" prop="name" >
        <el-input v-model="ruleForm.name" ></el-input>
      </el-form-item>
      <el-form-item label="任务分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择任务分类" @change="selectClassfy()">
          <el-option
            v-for="(item, index) in taskClassifyList"
            :key="index"
            :label="item.taskclassifyidname"
            :value="item.taskclassifyid"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="任务目标" prop="taskObject">
        <el-select
          v-model="ruleForm.taskObject"
          multiple
       
          
          default-first-option
          placeholder="请选择任务目标"

        >
        <el-option
                  v-for="(item,index) in taskTargetList"
          :key="index"
          :label="item.tasktargetname"
          :value="item.tasktargetid"
        ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="起止时间" required  prop="date1">
        <el-col>
          <el-form-item>
            <el-date-picker
              width="30%"
              v-model="ruleForm.date1"
              :picker-options="pickerOptions"
              type="datetimerange"
              range-separator="至"
              
               :default-time="[getNowTime()]"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
            <!-- <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%;"
          ></el-date-picker> -->
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="是否测试任务" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <!-- <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item> -->
      <!-- <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item> -->
      <!-- <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确定</el-button
        >
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
          var checkAge = (rule, value, callback) => {
            console.log(value.length,"22222222222222222222222")
        if (value.length!==2) {
          return callback(new Error('请选择任务起止时间'));
        }else{
            callback();
        }

      };
    return {
      ruleForm: {
        name: "", // 任务名称
        region: "", //任务分类
        date1: "", //起止时间
        // date2: "",
        delivery: false, //是否测试
        type: [], //任务目标
        taskObject: [],
        resource: "",
        desc: ""
      },
      taskClassifyList: "",
      taskTargetList: "",
      rules: {
        name: [
          { required: true, message: "请输入任务名称", trigger: "change" },
          { min: 0, max: 40, message: "长度在 0 到 40 个字符", trigger: "change" }
        ],
        region: [
          { required: true, message: "请选择任务分类", trigger: "change" }
        ],
    date1:  { type: 'array', required: true, message: '请选择日期', trigger: 'blur' },
        taskObject: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个任务目标",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请选择任务起止时间",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      dialogVisible: false,
      pickerOptions: {
        //禁用当前日期之前的日期
        disabledDate(time) {
          //   let currentTime = this.getNowMonthDay() 
          // return time.getTime() > new Date(currentTime).getTime()
          //Date.now()是javascript中的内置函数，它返回自1970年1月1日00:00:00 UTC以来经过的毫秒数。
          return time.getTime() < Date.now()- 8.64e7 ;
          
          //  return time.getTime() > this.formSearch.end_time ;
        }
        
      }
    };
  },
  props: {
    data: Object
  },
  mounted() {
    axios.get("http://49.233.45.33:8081/v1/get/job/classify").then(res => {
      this.taskClassifyList = res.data.data;
      // console.log(this.taskClassifyList, "请求的任务分类");
    });
  },
  methods: {
      getNowTime: function () {
      let Time

      let hh = new Date().getHours()
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes()
        :
        new Date().getMinutes()
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds()
        :
        new Date().getSeconds()
      Time = hh + ':' + mf + ':' + ss

      return Time
    },
    selectClassfy() {
      if (this.ruleForm.region) {
         this.ruleForm.taskObject=[]
        axios
          .post("http://49.233.45.33:8081/v1/get/job/target", {
            taskClassifyId: this.ruleForm.region
          })
          .then(res => {
            this.taskTargetList = res.data.data;
            console.log(this.taskTargetList, "请求的任务目标");
          });
      }
    },
    init() {
      this.dialogVisible = true;
    },
    dateFormat(dateData) {
      var date = new Date(dateData);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var M = date.getMinutes();
      M = M < 10 ? "0" + M : M;
      var s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      const time = y + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;
      return time;
    },
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //保存数据
          let data = this.data;
          this.data.jobName = this.ruleForm.name; //任务名称
          this.data.jobType = this.ruleForm.region; //任务分类
          this.data.startTime = this.dateFormat(this.ruleForm.date1[0]); //开始时间
          this.data.endTime = this.dateFormat(this.ruleForm.date1[1]); //结束时间
          this.data.taskObject = this.ruleForm.taskObject; //结束时间
          this.data.delivery = this.ruleForm.delivery; //结束时间

          this.$message.success("保存成功");
          this.dialogVisible = false;
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      // console.log(    this.$emit("setCurrentTask"))
      // this.$refs[formName].resetFields();
      this.dialogVisible = false;
    }
  },
  closeDialog() {}
};
</script>

<style scoped>
.flowHelp {
  /* height: 80%; */
  width: 50%;
}

.el-input__inner {
  width: 100% !important;
}
</style>
