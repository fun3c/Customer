<template>
  <div>
    <vue2-org-tree
      :data="data"
      :horizontal="true"
      name="test"
      :NodeClass="NodeClass"
      :judge="judge"
      :label-class-name="labelClassName"
      @on-node-click="openBox2"
      @on-node-mouseover="onMouseover"
      @on-node-mouseout="onMouseout"
    />
    <!-- <div v-show="BasicSwich" class="floating">
            <p>ID:{{BasicInfo.id}}</p>
            <p>Name:{{BasicInfo.label}}</p>
        </div> -->

    <!-- 弹出框 配置 -->
    <div class="pop_up" v-if="isShowOpenBox">
      <div class="pop_up_min">
        <div class="pop_up_min_left">
          <h2>选择条件</h2>
          <el-tabs v-model="activeName">
            <el-tab-pane
              v-for="(item, index) in tabeldata"
              :key="index"
              :label="item.title"
            >
              <div v-if="item.childLabelList.length > 0">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText">
                </el-input>

                <el-tree
                  class="filter-tree"
                  :data="tabeldata"
                  :props="defaultProps"
                  default-expand-all
                  :filter-node-method="filterNode"
                  @node-click="nodeClick"
                  ref="tree"
                >
                </el-tree>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="pop_up_min_right">
          <h2>条件设置</h2>

          <div v-if="rightData" class="pop_up_min_right_min">
   
            <el-form
              label-position="right"
              label-width="80px"
              :model="rightData"
            >
              <el-form-item label="标签名">
                <div>
                  <span> {{ rightData.labelInfo }} </span>
                  <el-tag type="success">
                    {{ rightData.labelTypeInfo }}
                  </el-tag>
                </div>
              </el-form-item>
              <el-form-item label="运算符">
                <el-select v-model="localData.operator" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in rightData.labelOperatorList"
                    :key="index"
                    :label="item.operatorInfo"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- 动态展示输入框 -->
              <el-form-item
                v-if="rightData.labelValueType === 'INTGER'"
                label="值"
              >
                <el-input v-model="localData.dataValue"></el-input>
              </el-form-item>
              <!-- 动态展示下拉单选框 -->
              <el-form-item
                v-if="rightData.labelValueType === 'BOOLEAN'"
                label="值"
              >
                <el-select v-model="localData.dataValue" placeholder="请选择">
                  <el-option
                    v-for="item in rightData.labelDataList"
                    :key="item.value"
                    :label="item.labelInfo"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- 动态展示下拉多选 -->
              <el-form-item
                v-if="rightData.labelValueType === 'ENUM'"
                label="值"
              >
                <el-select
                  v-model="localData.selectlist"
                  multiple
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(items, index) in rightData.labelDataList"
                    :key="index"
                    :label="items.labelInfo"
                    :value="index"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <el-row class="pop_up_right_btn">
            <el-button @click="popAffirm">取消</el-button>
            <el-button @click="popCancel" type="primary">确定</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      BasicSwich: false,
      BasicInfo: { id: null, label: null },
      judge: { swtich: true },
      NodeClass: ["myred", "myger", "myblue"],
      isShowOpenBox: false,
      horizontal: false,
      collapsable: true,
      expandAll: false,
      labelName:"",
      activeName: 0,
      localOperator: "",
      tabeldata: [],
      localvalue: undefined,
      rightData: undefined, //选中的
      labelData: null, // 条件缩略图信息
      filterText: "", //搜索字段
      localData: {
        //本地数据
        selectlist: [],
        dataValue: "",
        operator: "", //运算符信息
        labelInfo: "",
        expand: true
      },
      defaultProps: {
        //树形控件的配置项
        children: "childLabelList",
        label: "labelName"
      },
      labelClassName: "org-bg-res"
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree[0].filter(val);
    }
  },

  mounted() {
    //此处应该请求数据
    // this.valueTapyList = [
    //   {
    //     valueType: "string",
    //     selectList: ["包含", "被包含在"]
    //   },
    //   {
    //     valueType: "intger",
    //     selectList: ["=", ">=", "<=", ">", "<"]
    //   },
    //   {
    //     valueType: "enum",
    //     selectList: ["被包含在"]
    //   },
    //   {
    //     valueType: "double",
    //     selectList: ["=", ">=", "<=", ">", "<"]
    //   },
    //   {
    //     valueType: "boolean",
    //     selectList: ["等于"]
    //   }
    // ];
  },
  props: ["data", "details"],
  created() {
    axios.post("/test-1/list/label", { labelType: 1 }).then(res => {
      this.tabeldata = res.data.data;
      console.log(this.tabeldata, "请求的树");
      // this.tabeldata.forEach((item, index) => {
      //   item.childLabelList.forEach((itm, index) => {
      //     itm.childLabelList = itm.labelDataList;
      //     itm.childLabelList.forEach((it, index) => {
      //       it.labelName= it.labelInfo
      //     });
      //   });
      // });
    });
    this.expandChange();
  },
  methods: {
    // filterOperator() {
    //   console.log(this.valueTapyList);
    //   let list = this.valueTapyList.filter(list => {
    //     return this.rightData.valueType === list.valueType;
    //   });
    //   console.log(list, "wwfwfwfwfwfwfw");
    //   return list;
    // },

    renderContent(h, data) {
      return data.label;
    },
    onMouseout(e, data) {
      this.BasicSwich = false;
    },
    onMouseover(e, data) {
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    NodeClick(e, data) {
      alert(data.label);
      console.log(e, data);
      //   console.log(e, data);
    },
    collapse(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    expandChange() {
      this.toggleExpand(this.data, true);
    },
    toggleExpand(data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function(item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    },
    openBox2(a, item) {
      this.localData = Object.assign(item, {});

      this.targetData = item;

      // this.labelData = item;
      // this.localOperator = item.operator;
      // this.localValue = item.value;
      this.isShowOpenBox = true;
    },
    //数据校验
    checkData() {
      if (this.localData.operator == "") {
        this.$message.error("请选则运算符数据");
        return false;
      }
      if (!this.localData.dataValue && this.localData.selectlist.length == 0) {
        this.$message.error("请选则运算值数据");
        return false;
      }
      return true;
    },
    popCancel() {
      // 此处修改缩略图数据
      console.log(this.checkData());
      if (this.checkData()) {
        if (this.localData.selectlist.length > 0) {
          let labelNo = "";
          let dataNo = "";
          let dataValue = "";
          let labelInfo = "";
          this.localData.selectlist.forEach(item => {
            labelNo =
              labelNo + this.rightData.labelDataList[item].labelNo + ",";
            dataNo = dataNo + this.rightData.labelDataList[item].dataNo + ",";
            dataValue =
              dataValue + this.rightData.labelDataList[item].dataValue + ",";
            labelInfo =
              labelInfo + this.rightData.labelDataList[item].labelInfo + ",";
          });
          this.targetData.labelNo = this.rightData.labelDataList[0].labelNo;
          this.targetData.dataNo = dataNo;
          this.targetData.dataValue = dataValue;
          this.targetData.labelInfo = labelInfo;
        } else {
          this.targetData.labelNo = this.localData.dataValue.labelNo;
          this.targetData.dataNo = this.localData.dataValue.dataNo;
          this.targetData.dataValue = this.localData.dataValue.dataValue;
          this.targetData.labelInfo = this.localData.dataValue.labelInfo;
        }

        //运算符信息
        this.targetData.operatorValue = this.localData.operator.operatorValue;
        this.targetData.operatorInfo = this.localData.operator.operatorInfo;
        this.targetData.operatorNo = this.localData.operator.operatorNo;
        this.targetData.label = this.labelName+  this.targetData.operatorInfo+ this.targetData.labelInfo;


        console.log(this.localData.dataValue)
        this.$message.success("保存成功");
        this.isShowOpenBox = false;
      }
    },

    popAffirm() {
      this.isShowOpenBox = false;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    nodeClick(data) {
      this.localData = {
        selectlist: [],
        operator: "",
        labelInfo: "",
        expand: true
      };
      this.rightData = data;
      this.labelName= this.rightData.labelName
      console.log(data);
    }
  }
};
</script>
<style lang="less">
.org-tree-container {
  width: 100%;
  background-color: #fff;
}
.org-tree-node-label-inner {
  border-radius: 50%;
}
.myblue {
  background: skyblue;
  color: #fff;
}
.myred {
  //禁用点击事件
  background-color: rgb(30, 132, 228);
  color: #fff;
  border: solid 1px #ccc;
  border-radius: 20px;
  pointer-events: none;
}
.myger {
  background: green;
  color: #fff;
}
.org-bg-err {
  background-color: tomato;
  color: #fff;
}
.org-tree-node-label {
  white-space: nowrap;
}
.bg-white {
  background-color: white;
}
.org-bg-res {
  background-color: orange;
  color: #fff;
  cursor: pointer;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}
.floating {
  background: rgba(0, 0, 0, 0.7);
  width: 160px;
  height: 100px;
  position: absolute;
  color: #fff;
  padding-top: 15px;
  border-radius: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  left: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 999;
  text-align: left;
  font-size: 12px;
}
.pop_up {
  width: 50%;
  height: 500px;
  background-color: rgb(255, 255, 255);
  box-shadow: darkgrey 10px 10px 30px 5px;
  padding: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 100;
  .pop_up_min {
    height: 100%;
    flex: 1;
    display: flex;
    .pop_up_min_left {
      padding: 15px;
      height: 100%;
      width: 49%;
      border-right: solid 1px #ccc;
      .el-tabs {
        height: 100%;
      }
    }
    .pop_up_min_right {
      padding: 15px;
      flex: 1;
    }
    .pop_up_right_btn {
      position: absolute;
      bottom: 15px;
      text-align: end;
    }
  }
}
.el-tabs__content {
  height: 75%;
}
.el-tab-pane,
.el-tab-pane > div {
  height: 100%;
}
.el-tree {
  height: 100%;
  overflow: scroll;
}
</style>