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
      <el-form-item label="任务名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="任务分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择任务分类">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="任务目标">
        <el-select
          v-model="ruleForm.taskObject"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
        </el-select>
      </el-form-item>

      <el-form-item label="起止时间" required>
        <el-col >
          <el-form-item>
            <el-date-picker
              width="30%"
              v-model="ruleForm.date1"
              type="datetimerange"
              range-separator="至"
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
        <el-button @click="resetForm('ruleForm')"
      
        >取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        name: "", // 任务名称
        region: "", //任务分类
        date1: [new Date(), new Date()], //起止时间
        date2: "",
        delivery: false, //是否测试
        type: [], //任务目标
        taskObject: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入任务名称", trigger: "blur" },
          { min: 0, max: 40, message: "长度在 0 到 40 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择任务分类", trigger: "change" }
        ],
        // date1: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择日期",
        //     trigger: "change"
        //   }
        // ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      dialogVisible: false
    };
  },
  props: {
    data: Object
  },
  components: {},
  methods: {
    init() {
      this.dialogVisible = true;
    },
    dateFormat(dateData) {
      var date = new Date(dateData)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      var h = date.getHours()
       h = h < 10 ? ('0' + h) : h
      var M = date.getMinutes()
       M = M < 10 ? ('0' + M) : M
          var s = date.getSeconds()
       s = s < 10 ? ('0' + s) : s
      const time = y + '-' + m + '-' + d +" " +h+":"+M +':'+s
      return time
},
    submitForm(formName) {


      console.log(this.ruleForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //保存数据
          let data = this.data;
          this.data.jobName = this.ruleForm.name; //任务名称
          this.data.jobType = this.ruleForm.region; //任务分类
          this.data.startTime =this.dateFormat(this.ruleForm.date1[0]) //开始时间
          this.data.endTime = this.dateFormat(this.ruleForm.date1[1]); //结束时间
          this.data.taskObject = this.ruleForm.taskObject; //结束时间
          this.data.delivery = this.ruleForm.delivery; //结束时间

          this.$message.success("保存成功");
              this.dialogVisible = false
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      // console.log(    this.$emit("setCurrentTask"))
      // this.$refs[formName].resetFields();
      this.dialogVisible = false
    }
  },
    closeDialog(){
      
    },
};
</script>

<style>
.flowHelp {
  /* height: 80%; */
  width: 50%;
}

.el-input__inner{
  width: 100%  !important;
}
</style>
