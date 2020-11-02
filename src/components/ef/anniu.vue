<template>
  <div style="width: 89px; height: 186px" >
    <el-button 
      >查看<i class="el-icon-arrow-down el-icon--right"></i
    ></el-button>
    <div class="optiondiv" @mouseover="optiondivover" @mouseout="optiondivout">
      <el-table
        :data="tableData"
        :show-header="false"
        style="
          width: 100%;
          border: 1px solid rgb(184, 178, 178);
          border-radius: 5px;
        "
        @row-click="xx"
      >
        <el-table-column prop="name" width="auto" class="el-pointer">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: null,
      optiondivstated: false,
      optiondivstate: false,
      tableData: [
        {
          name: "王小虎",
          value: 0,
        },
        {
          name: "王小虎",
          value: 1,
        },
        {
          name: "王小虎",
          value: 2,
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  watch: {},
  methods: {
    xx(row) {
      console.log(row);
    },
    optiondivover() {
      clearTimeout(this.timer);
      this.optiondivstate = true;
    },
    optiondivout() {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.optiondivstate = false;
        },200);
      }
    },
  },
};
</script>
<style>
.optiondiv {
  width: 89px;
  height: auto;
}
.el-pointer:hover {
  cursor: pointer;
}
</style>