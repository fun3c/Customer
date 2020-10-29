<template>
  <el-form
    ref="form"
    label-width="80px"
    style="width:100%"
    label-position="top"
  >
    <el-form-item label="分流方式">
      <el-select v-model="form.defaultValue" placeholder="请选择">
        <el-option label="按首次随机分流" :value="0"></el-option>
        <el-option label="按天随机分流" :value="0"></el-option>
        <el-option label="完全随机分流" :value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="观察周期">
      <div style="display: flex">
        <el-input-number
          v-model="form.period"
          :min="1"
          :max="9"
          :controls="false"
        ></el-input-number>
        <div class="baifen">天</div>
      </div>
    </el-form-item>
    <el-form-item>
      分流比例<br />
      <div
        style="display: flex; margin-bottom: 20px"
        v-for="(group, i) in form.groups"
        :key="group.id"
      >
        <el-tag
          style="
            width: 200px;
            text-align: center;
            height: 40px;
            line-height: 40px;
          "
          type="info"
          v-if="i == 0"
          >{{ group.name }}</el-tag
        >
        <el-input
          maxlength="10"
          placeholder="可输入汉字、字母、数字"
          onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g,'')"
          v-model="group.name"
          style="width: 200px; text-align: center; height: 40px"
          color="white"
          v-if="i != 0"
          >{{ group.name }}</el-input
        >
        <el-input-number
          v-model="group.num"
          :min="0"
          :max="100"
          :controls="false"
        ></el-input-number>
        <div class="baifen">%</div>
        <div class="circle" v-if="i >1" @click="removeTest(i)">
          X
        </div>
      </div>
      <el-button size="mini" @click="add">添加实验组</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveTest">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      sum: 100,
      form: [],
    };
  },
  computed: {},
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    //实验组长度是否超过20组
    examgleng() {
      if (this.form.groups.length > 19) return false;
      else return true;
    },
    add() {
      if (this.examgleng()) {
        this.form.groups.push({ name: "", num: 0});
      } else {
        this.$message({
          message: "最多存在20组实验",
          type: "warning",
        });
      }
    },
    getData() {
      this.$http("/api/abtest")
        .then((res) => {
          this.form = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    removeTest(i) {
      this.form.groups.splice(i, 1);
    },
    //判断实验组的名称是否存在''
    nameIsNull() {
      var result = false;
      for (var item of this.form.groups) {
        if (item.name === "") result = true;
      }
      return result;
    },
    saveTest() {
      if (this.nameIsNull()) {
        this.$message({
          message: "实验组名有为空",
          type: "warning",
        });
      } else {
        this.$message({
          message: "保存成功",
          type: "success",
        });
      }
    },
  },
};
</script>
<style>
.circle {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: gray;
  color: white;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  position: relative;
  right: 10px;
  bottom: 5px;
}
.circle:hover {
  cursor: pointer;
}
.baifen {
  width: 38px;
  height: 38px;
  border: 1px solid #dcdfe6;
  text-align: center;
}
</style>