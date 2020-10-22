<template>
  <div class="form-left">
    <div class="ef-node-form">
      <div class="ef-node-form-header">
        编辑
      </div>
      <div class="ef-node-form-body">
        <!-- 常规控件展示内容 -->
        <el-form :model="node" ref="dataForm" v-show="type === 'node'">
          <div class="ef-form-title">
            <!-- from标题 -->
            <p>
              {{ `${node.caption}控件  （ID:${node.id}）` }}
            </p>
            <span>
              {{ node.info }}
            </span>
            <div class="subline"></div>
          </div>
          <div
            class="ef-node-form-item"
            v-for="(item, index) in node.parameters"
            :key="index"
          >
            <div v-if="!blacklist.includes(item.type)">
              <!-- //标题 -->
              <b class="form-item-title">
                {{ item.title }}
              </b>
              <!-- 文本标签 -->
              <span class="PTYPE_TEXT" v-if="item.type === 'PTYPE_TEXT'">
                {{ item.defaultValue }}
                <br />
                <span> {{ item.tips }}</span>
              </span>
              <!-- input -->
              <div class="PTYPE_INPUT" v-if="item.type === 'PTYPE_INPUT'">
                <el-input
                  v-model="node.parameters[index].defaultValue"
                  :placeholder="item.defaultValue"
                >
                </el-input>
                <span class="el-from-describe">
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>
              <!-- label -->
              <div class="PTYPE_LABEL" v-if="item.type === 'PTYPE_LABEL'">
                <p>{{ item.defaultValue }}</p>
                <span class="el-from-describe">
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>
              <!-- 下拉框 -->
              <div class="PTYPE_SELECT" v-if="item.type === 'PTYPE_SELECT'">
                <el-select
                  v-model="node.parameters[index].defaultValue"
                  placeholder="请选择"
                >
            
                  <el-option
                    v-for="(option, inx) in item.values"
                    :key="option.value"
                    :label="option.label"
                    :value="inx"
                  >
                  </el-option>
                </el-select>
                <span class="el-from-describe">
                  {{ node.parameters[index].defaultValue }}
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>

              <!-- 特殊下拉框 -->
              <div
                class="PTYPE_SELECTGROUP"
                v-if="item.type === 'PTYPE_SELECTGROUP'"
              >
                <el-select
                  v-model="node.parameters[index].defaultValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="option in item.values"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
                <!-- 联动的下拉框 -->
                <b class="form-item-title">
                  {{
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.title
                  }}
                </b>

                <el-select
                  v-show=" node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].type==='PTYPE_BEHAVIOR'"
                  v-model="
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.selectedList
                  "
                  placeholder="请选择"
                  multiple
                  collapse-tags
                  filterable
                >
                  <el-option
                    v-for="(option, inx) in node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.values"
                    :key="option.value"
                    :label="option.title"
                    :value="inx"
                  >
                  </el-option>
           
                </el-select>

                          <el-select
                  v-show=" node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].type==='PTYPE_OLNYSHOW'"
                  v-model="
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.defaultValue
                  "
                  placeholder="请选择"
             
                >
                  <el-option
                    v-for="(option, inx) in node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.values"
                    :key="option.value"
                    :label="option.title"
                    :value="inx"
                  >
                  </el-option>
           
                </el-select>

                <!-- 展示区 -->
                <b class="form-item-title">
                  {{
                    "已选择的" +
                      node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].children.title
                  }}
                </b>
                <!-- v-if="node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].type=='PTYPE_BEHAVIOR'" -->
                <div class="select_show">
                  <ul
                    v-if="
                      node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].type === 'PTYPE_BEHAVIOR'
                    "
                  >
                    <li
                      v-for="(til, inx) in node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].children.selectedList"
                      :key="inx"
                    >
                      <b
                        @click="
                          openBox(
                            //传入node目标属性  所选择的下标
                            node.parameters[index].values[
                              node.parameters[index].defaultValue
                            ].children.values[til],
                            index,
                            til
                          )
                        "
                      >
                        {{
                          node.parameters[index].values[
                            node.parameters[index].defaultValue
                          ].children.values[til].title
                        }}
                      </b>
                      <span href=""> 删除 </span>
                    </li>
                    <li class="select_show_add"><b>添加</b></li>
                  </ul>

                  <ul
                    v-if="
                      node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].type === 'PTYPE_OLNYSHOW'
                    "
                  >
                    <li
                      v-for="(value,key, inx) in node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].children.values[node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].children.defaultValue]"
                      :key="inx"
                    >
                      <b> {{ notelist[inx]+": "+ value }} </b><br>
                    </li>
                  </ul>                 
                </div>

                <span class="el-from-describe">
                  {{ node.parameters[index].defaultValue }}
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>
            </div>

            <!-- 折叠面板 -->
            <div class="PTYPE_GROUP" v-if="item.type === 'PTYPE_GROUP'">
              <el-collapse
                v-model="node.parameters[index].defaultValue"
                placeholder="请选择"
                type="hidden"
              >
                <el-collapse-item :title="item.title">
                  <div v-for="(items, index) in item.children" :key="index">
                    <div
                      class="ef-node-form-item"
                      v-for="(items, index) in node.parameters"
                      :key="index"
                    >
                      <!-- //标题 -->
                      <b class="form-item-title">
                        {{ items.title }}
                      </b>
                      <!-- 描述信息 -->
                      <!-- <el-divider></el-divider> -->

                      <!-- 文本标签 -->
                      <!-- <span class="PTYPE_TEXT">
                      {{ items.defaultValue }}
                      <br />
                      <span> {{ items.tips }}</span>
                    </span> -->
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
              <span class="el-from-describe">
                {{ item.tips }}
              </span>
              <div class="subline"></div>
            </div>

            <!-- 开关 -->
            <el-form-item v-if="item.type === 'PTYPE_SWITCH'">
              >
              {{ item.title }}
              <el-tooltip :content="item.tips" placement="top">
                <el-switch
                  v-model="node.parameters[index].defaultValue"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-value="100"
                  inactive-value="0"
                >
                </el-switch>
              </el-tooltip>
            </el-form-item>
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
      blacklist: ["PTYPE_GROUP", "PTYPE_SWITCH"], //组件标题黑名单
      switchValue: "",
      activeNames: ["1"],
      isShowOpenBox: false, //弹框展示
      op: "", //node弹出框数据
      notelist:['人群名称','人群ID','有效期至','创建人','创建时间'],
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
          // node.name = this.node.name;
          node.left = this.node.left;
          node.top = this.node.top;
          node.parameters = this.node.parameters;
          this.$emit("repaintEverything");
        }
      });
      this.$emit("isHideFrom", false);
    },
    handleChange(val) {
      console.log(val);
    },
    // 打开弹框
    openBox(message, index, til) {
      //
      this.isShowOpenBox = true;
      this.op = this.node.parameters[index].values[
        this.node.parameters[index].defaultValue
      ].children.values[til];
    }
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.form-left,
.ef-node-form {
  height: 100%;
}
.ef-form-title {
  padding: 20px 20px 0px 20px;

  p {
    color: rgb(52, 137, 158);
    font-weight: 700;
    font-size: 18px;
  }

  span {
    font-size: 12px;
    color: rgb(145, 145, 145);
  }
}
.subline {
  line-height: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 20px;
}
.ef-node-form-body {
  display: flex;
  // flex-direction: column;
  // justify-items: center;
  // align-items: center;
  // padding-left: 20px;
  height: 100%;
  // overflow-x: hidden;
  overflow-y: scroll;
}
.el-form {
  width: 100%;
}
.el-button {
  margin-left: 5px;
  width: 45% !important;
  // border: none;
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

.ef-node-form-item {
  padding: 20px;
  padding-bottom: 15px;
  box-sizing: border-box;

  .form-item-title {
    display: block;
    // height: 70px;
    margin-bottom: 10px;
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #54afca;
    // border-bottom: solid 1px #ccc;
  }
  .el-from-describe {
    //描述信息
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: rgb(197, 197, 197);
  }
  .PTYPE_TEXT {
    font-size: 14px;
    span {
      font-size: 12px;
      color: rgb(145, 145, 145);
    }
  }
  .PTYPE_GROUP {
    padding: 0;
  }
  .PTYPE_GROUP {
    margin-left: -20px;
    width: 124%;
    color: wheat;
    // background-color: #009bd8 !important;
  }
}
.el-collapse-item__header {
  background-color: red;
}
.el-select {
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
}
.select_show {
  margin-top: 10px;
  width: 100%;
  // height: 300px;
  padding: 15px 0px;
  background-color: #ccc;
  ul {
    margin-top: 10px;
    width: 100%;
    // height: 300px;
    background-color: #ccc;
    padding: 0;
        .select_show_add{
       display: flex;
       justify-content: end;
        b{
          width: auto;
        }
    }
    li {
      height: 30px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      
      span {
        color: rgb(95, 92, 92);
      }
      span:hover {
        font-weight: 800;
        cursor: pointer;
      }
      b {
        color: rgb(11, 145, 255);
        width: 180px;
        overflow: hidden; /*超出的部分隐藏起来。*/
        white-space: nowrap; /*不显示的地方用省略号...代替*/
      }
      b:hover {
        border-bottom: solid 2px #ccc;
        cursor: pointer;
      }
    }

  }
}
</style>
