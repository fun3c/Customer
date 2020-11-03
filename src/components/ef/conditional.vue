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
              v-for="(item, index) in details"
              :key="index"
              :label="item.title"
            >
              <div v-if="item.children.length > 0">
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
              <el-form-item label="运算符">
                <el-select v-model="localOperator" placeholder="请选择">
                  <el-option
                    v-for="(item, index) in filterOperator()[0].selectList"
                    :key="index"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="值">
                <el-input v-model="labelData.value"></el-input>
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
import axios from "axios"
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
      activeName: 0,
      localOperator: "",
      tabeldata:[],
      localvalue: undefined,
      rightData: undefined, //树结构数据信息
      labelData: null, // 条件缩略图信息
      filterText: "", //搜索字段
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
    this.valueTapyList = [
      {
        valueType: "string",
        selectList: ["包含", "被包含在"]
      },
      {
        valueType: "intger",
        selectList: ["=", ">=", "<=", ">", "<"]
      },
      {
        valueType: "enum",
        selectList: ["被包含在"]
      },
      {
        valueType: "double",
        selectList: ["=", ">=", "<=", ">", "<"]
      },
      {
        valueType: "boolean",
        selectList: ["等于"]
      }
    ];
  },
  props: ["data", "details"],
  created() {
    axios.post("/test-1/list/label",{labelType:1}).then(res=>{
     
      this.tabeldata=res.data.data
             console.log( this.tabeldata,"请求的树")
      this.tabeldata.forEach((item,index)=>{
        item.childLabelList.forEach((itm,index)=>{
            console.log(itm)
        })
      })

    })
    this.expandChange();
  },
  methods: {
    filterOperator() {
      console.log(this.valueTapyList);
      let list = this.valueTapyList.filter(list => {
        return this.rightData.valueType === list.valueType;
      });
      console.log(list, "wwfwfwfwfwfwfw");
      return list;
    },

    renderContent(h, data) {
      return data.label;
    },
    onMouseout(e, data) {
      this.BasicSwich = false;
    },
    onMouseover(e, data) {
      //鼠标悬浮事件
      // this.BasicInfo = data;
      // this.BasicSwich = true;
      // var floating = document.getElementsByClassName("floating")[0];
      // floating.style.left = e.clientX+10 + "px";
      // floating.style.top = e.clientY+10 + "px";
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
      //   this.$emit("openBox2");

      //   此处进行数据修改

      this.labelData = item;
      this.localOperator = item.operator;
      this.localValue = item.value;
      this.isShowOpenBox = true;
    },
    popCancel() {
      // 此处修改缩略图数据
      console.log( this.localOperator)
       this.labelData.label = this.labelData.value.replace(",",this.localOperator)

      this.isShowOpenBox = false;
    },

    popAffirm() {
      this.isShowOpenBox = false;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    nodeClick(data) {
      this.rightData = data;
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
.myred { //禁用点击事件
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
    flex: 1;
    display: flex;
    .pop_up_min_left {
      padding: 15px;
      height: 100%;
      width: 49%;
      border-right: solid 1px #ccc;
    }
    .pop_up_min_right {
      padding: 15px;
      flex: 1;
    }
    .pop_up_right_btn{
      position: absolute;
      bottom: 15px;
      text-align:end;
    }
  }
  
}
</style>