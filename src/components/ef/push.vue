<template>
  <el-form
    ref="form"
    :model="form"
    label-width="100px"
    style="width: 100%"
    label-position="top"
  >
    <el-form-item label="push模板ID">
      <el-input
        onkeyup="this.value=this.value.replace(/\D/g,'')"
        v-model="data.id"
        @blur="queryNote"
        :class="{ noteFailure: status===''?false:!status }"
      ></el-input>
      <div
        style="
          height: 20px;
          width: 100%;
          text-align: right;
          color: red;
          line-height: 20px;
        "
        v-if="status===''?false:!status"
      >
        push模板不存在
      </div>
    </el-form-item>
    <el-form-item label="push预览">
      <div class="notepreview">
        <div v-if="status">
          <div class="noteprecont">
            <span style="flex: 1; color: gray">push类型</span>
            <span style="flex: 4.5">{{form.smsType}}</span>
          </div>
          <div class="noteprecont">
            <span style="flex: 1; color: gray">push内容</span>
            <span style="flex: 4.5; font-size: 13px; line-height: 25px"
              >{{form.smsValue}}</span
            >
          </div>
          <div class="noteprecont">
            <span style="flex: 1; color: gray">有效期限</span>
            <span style="flex: 4.5">{{form.expiryDate}}</span>
          </div>
          <div class="noteprecont">
            <span style="flex: 1; color: gray">审批状态</span>
            <span style="flex: 4.5">{{form.approvalStatus}}</span>
          </div>
        </div>
        <div style="width:100%;height:20px; background-color: #e4e7e7;"></div>
      </div>
    </el-form-item>
    <el-switch v-model="data.status" inactive-text="失败重试"> </el-switch>
  </el-form>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      id: "",
      form: {},
      value1: false,
      status: '',
    };
  },
    props:["data"],
  computed: {},
  mounted() {},
  watch: {},
  methods: {
    queryNote() {
      let that=this
      if(''!==this.data.id){
        axios
          .post(
            "/api/messageTemplate/getSmsMessageTemplateInfo",
             {"id": this.data.id }
          )
          .then(res => {
            if (res.status) {
              this.form = res.data;
              this.status = true;
              this.data.appPushType=this.form.smsType
               this.data.appPushValue=this.form.smsValue
                this.data.expiryDate=this.form.expiryDate
                 this.data.isRetry=this.form.isRetry
                  this.data.appUrl=this.form.phoneNumber



      
            } else this.status = false;
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
  },
};
</script>
<style>
.notepreview {
  background-color: #e4e7e7;
  width: 100%;
  height: auto;
  line-height: 30px;
}
.noteFailure input {
  border-color: red;
}
.noteprecont {
  width: 100%;
  height: auto;
  display: flex;
}
</style>