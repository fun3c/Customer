<template>
  <div>
    <div class="ef-node-form">
      <div class="ef-node-form-header">
        编辑
      </div>
      <div class="ef-node-form-body">
        <!-- 常规控件展示内容 -->
        <el-form
          :model="node"
          ref="dataForm"
        
          v-show="type === 'node'"
        >
          <div 
          class="ef-node-form-item"
          v-for="(item, index) in node.parameters" 
          :key="index">
            <!-- //标题 -->
            <b class="form-item-title">
              {{ item.title }}
            </b>
            <!-- 描述信息 -->
            <!-- <el-divider></el-divider> -->

                <!-- 文本标签 -->
            <span class="PTYPE_TEXT" v-if="item.type === 'PTYPE_TEXT'">
              {{ item.defaultValue }}
              <br>
              <span >  {{ item.tips }}</span>
            </span>
      
            <!-- input框 -->
            <el-input
              v-if="item.type === 'PTYPE_LABEL'"
              v-model="node.parameters[index].defaultValue"
              :placeholder="item.defaultValue"
            >
            </el-input>
            <!-- 下拉框 -->
            <el-select
              v-model="value"
              v-if="item.type === 'PTYPE_SELECT'"
              filterable
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in item.values"
                :key="index"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>

                  <!-- 折叠面板 -->
            <el-collapse
              v-if="item.type === 'PTYPE_GROUP'"
              v-model="activeNames"
              @change="handleChange"
            >
              <el-collapse-item :title="item.title">
                <div v-for="(items,index) in item.children" :key="index">
                  
                     <div 
          class="ef-node-form-item"
          v-for="(items, index) in node.parameters" 
          :key="index">
            <!-- //标题 -->
            <b class="form-item-title">
              {{ items.title }}
            </b>
            <!-- 描述信息 -->
            <!-- <el-divider></el-divider> -->

                <!-- 文本标签 -->
            <span class="PTYPE_TEXT" >
              {{ items.defaultValue }}
              <br>
              <span >  {{ items.tips }}</span>
            </span>
      
            <!-- input框 -->
            <el-input
           
              v-model="node.parameters[index].defaultValue"
              :placeholder="items.defaultValue"
            >
            </el-input>

            
                </div>
          </div>
              </el-collapse-item>
            </el-collapse>

          </div>
   
          <el-form-item>
            <el-button icon="el-icon-close" @click="Deselect">关闭</el-button>
            <el-button type="primary" icon="el-icon-check" @click="save"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 线型控件展示内容 -->
        <el-form
          :model="line"
          ref="dataForm"
          label-width="80px"
          v-show="type === 'line'"
        >
          <el-form-item label="条件">
            <el-input v-model="line.label"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-close" @click="Deselect">关闭</el-button>
            <el-button type="primary" icon="el-icon-check" @click="saveLine"
              >保存</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!--            <div class="el-node-form-tag"></div>-->
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  data() {
    return {
      visible: true,
      // node 或 line
      type: "node",
      node: {},
      line: {},
      data: {},
      value:"",
      activeNames: ["1"],
      stateList: [
        {
          state: "success",
          label: "成功"
        },
        {
          state: "warning",
          label: "警告"
        },
        {
          state: "error",
          label: "错误"
        },
        {
          state: "running",
          label: "运行中"
        }
      ]
    };
  },
  created() {},
  methods: {
    /**
     * 表单修改，这里可以根据传入的ID进行业务信息获取
     * @param data
     * @param id
     */
    nodeInit(data, id) {
      this.type = "node";
      this.data = data;
      data.nodeList.filter(node => {
        if (node.id === id) {
          this.node = cloneDeep(node);
        }
      });
      console.log(this.node, "wwwwwwwwwwwwwwwww");
    },

    lineInit(line) {
      this.type = "line";
      this.line = line;
    },
    // 修改连线
    saveLine() {
      this.$emit("setLineLabel", this.line.from, this.line.to, this.line.label);
      this.$emit("isHideFrom", false);
    },
    Deselect() {
      this.$emit("isHideFrom", false);
    },

    save() {
      this.data.nodeList.filter(node => {
        if (node.id === this.node.id) {
          node.name = this.node.name;
          node.left = this.node.left;
          node.top = this.node.top;
          node.ico = this.node.ico;
          node.state = this.node.state;
          this.$emit("repaintEverything");
        }
      });
      this.$emit("isHideFrom", false);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {display:none}


.ef-node-form-body{
display: flex;
// flex-direction: column;
// justify-items: center;
// align-items: center;
padding-left: 20px;
height: 500px;
overflow-x:hidden; overflow-y:scroll;
}
.el-form{
  width: 100%;
  
}
.el-node-form-tag {
  position: absolute;
  top: 50%;
  margin-left: -15px;
  height: 40px;
  width: 15px;
  background-color: #fbfbfb;
  border: 1px solid rgb(220, 227, 232);
  border-right: none;
  z-index: 0;
}

.ef-node-form-item{
  padding-bottom: 15px;
  box-sizing: border-box;

  .form-item-title{
    display: block;
    // height: 70px;
    margin-bottom: 10px;
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px ;
    color: #6d6d6d;
    border-bottom: solid 1px #ccc;
  }
  .PTYPE_TEXT{
    font-size: 14px;
    span{
      font-size: 12px;
      color: rgb(145, 145, 145);
    }
  }
  .el-collapse-item__header {
    color: wheat;
     background-color: #009bd8 !important;
  }
 
}
</style>
