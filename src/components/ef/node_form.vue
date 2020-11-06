<template>
  <div class="form-left">
    <div class="ef-node-form">
      <!-- <div class="ef-node-form-header">
        编辑
      </div> -->
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
                  @change="node.parameters[index].selectedList = []"
                >
                  <el-option
                    v-for="(option, inx) in item.values"
                    :key="option.value"
                    :label="option.label"
                    :value="inx"
                  >
                  </el-option>
                </el-select>
                <!-- 如果是开始控件 -->
                <div v-if="node.nodeTypeID === 'NID_START'">
                  <!-- 等待一段时间 -->
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 0"
                  >
                    <el-date-picker
                      v-model="node.parameters[index].selectedList"
                      type="date"
                      placeholder="选择日期"
                    >
                    </el-date-picker>
                  </div>
                  <!-- 等待一段具体的某一时间点 -->
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 1"
                  ></div>
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 2"
                  >
                    <!-- @change="node.parameters[index].selectedList=[]" -->
                    <el-select
                      v-model="node.parameters[index].selectedList"
                      multiple
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in 31"
                        :key="item"
                        :label="item + '号'"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 3"
                  >
                    <el-select
                      v-model="node.parameters[index].selectedList"
                      multiple
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in 7"
                        :key="item"
                        :label="'周' + item"
                        :value="item"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>

                <div v-if="node.nodeTypeID === 'NID_WAIT'">
                  <!-- 等待一段时间 -->
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 0"
                  >
                    <el-time-picker
                      v-model="node.parameters[index].stretch"
                      :picker-options="{
                        selectableRange: '00:00:00 - 23:59:59'
                      }"
                      format="HH:mm:ss"
                      placeholder="任意时间点"
                    >
                    </el-time-picker>
                  </div>
                  <!-- 等待一段具体的某一时间点 -->
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 1"
                  >
                    <el-date-picker
                      v-model="node.parameters[index].stretch"
                      type="datetime"
                      placeholder="选择日期时间"
                    >
                    </el-date-picker>
                  </div>
                  <!-- 等待至 -->
                  <div
                    class="block"
                    v-if="node.parameters[index].defaultValue === 2"
                  >
                    <div style="display: flex">
                      <el-input-number
                        v-model="node.parameters[index].dayTime"
                        :min="1"
                        :max="99"
                        :controls="false"
                      ></el-input-number>
                      <div class="baifen">天</div>
                    </div>
                    <el-time-picker
                      v-model="node.parameters[index].stretch"
                      :picker-options="{
                        selectableRange: '00:00:00 - 23:59:59'
                      }"
                      format="HH:mm:ss"
                      placeholder="任意时间点"
                    >
                    </el-time-picker>
                  </div>
                </div>

                <span class="el-from-describe">
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>

              <!-- 时间选择器 -->
              <div class="PTYPE_TIMELIST" v-if="item.type === 'PTYPE_TIMELIST'">
                <el-time-select
                  v-model="node.parameters[index].defaultValue"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="选择时间"
                >
                </el-time-select>

                <span class="el-from-describe">
                  {{ node.parameters[index].defaultValue }}
                  {{ item.tips }}
                </span>
                <div class="subline"></div>
              </div>
              <!-- 多选 -->
              <div class="MultiSelect" v-if="item.type === 'PTYPE_MULTISELECT'">
                <el-select
                  v-model="item.selectedList"
                  placeholder="请选择"
                  multiple
                  collapse-tags
                  filterable
                >
                  <el-option
                    v-for="(option, inx) in item.values"
                    :key="option.value"
                    :label="option.title"
                    :value="inx"
                  >
                  </el-option>
                </el-select>
                <!-- 是否展示选中内容 -->
                <div v-if="item.showInEditor">
                  <b class="form-item-title">
                    {{ item.title }}
                  </b>
                  <div class="select_show">
                    <ul>
                      <li v-for="(til, inx) in item.selectedList" :key="inx">
                        <b>
                          {{ item.values[til].title }}
                        </b>

                        <span @click="delhavior(index, inx)"> 删除 </span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                  v-show="
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].type === 'PTYPE_BEHAVIOR'
                  "
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
            <!-- //人群定时触发 -->
                <el-select
                  v-show="
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].type === 'PTYPE_OLNYSHOW'
                  "
                  v-model="
                    node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.defaultValue
                  "
                  placeholder="请选择人群包"
                >
                  <el-option
                    v-for="(option, inx) in crowdList"
                    :key="inx"
                    :label="option.crowdName"
                    :value="option.crowdId"
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

                      <span @click="delhavior(index, inx)"> 删除 </span>
                    </li>
                  </ul>
                  <!-- //人群包展示 -->
                  <ul
                    v-if="
                      node.parameters[index].values[
                        node.parameters[index].defaultValue
                      ].type === 'PTYPE_OLNYSHOW'
                    "
                  >
                    <li
                    v-for="(Crowitem,inx) in notelist"
                   :key="inx"
                    >
                
                      <b    v-for="(value, key, inx) in crowdList.filter(item=>{return item.crowdId=== node.parameters[index].values[
                      node.parameters[index].defaultValue
                    ].children.defaultValue})"
                      :key="inx"> {{   Crowitem.tit +" ："+ value[Crowitem.key]  }} </b><br />
        
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

            <!-- //条件分支抽出类 -->

            <conditional
              v-if="item.type === 'PTYPE_CONDITION_DETAILS'"
              :data="item.data"
              :details="item.details"
              @openBox2="openBox2"
            ></conditional>
            <!-- // A/B分流抽出类 -->
            <abshunt
              v-if="node.nodeTypeID === 'NID_A/B'"
              :data="item"
              :output="node.output"
   
            ></abshunt>


                   <!-- // 短信控件抽出类 -->
            <note
              v-if="item.type === 'NOTE_TEMPLATE'"
              :data="item"
            ></note>

                             <!-- // push控件抽出类 -->
            <push
              v-if="item.type === 'PUSH_TEMPLATE'"
              :data="item"
            ></push>
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
    <!-- 弹出框 配置 -->
    <div class="pop_up" v-show="isShowOpenBox">
      <div class="pop_up_min">
        配置内容
      </div>
      <el-row>
        <el-button @click="popAffirm">取消</el-button>
        <el-button @click="popCancel" type="primary">确定</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import abshunt from "../ef/AB";
import conditional from "../ef/conditional";
import note from "./note"
import  push   from "./push"
import axios from "axios"
export default {
  data() {
    return {
      visible: true,
      // node 或 line
      type: "node",
      crowdList:"",
      node: {},
      line: {},
      data: {},
      Daytime: "",
      blacklist: ["PTYPE_GROUP", "PTYPE_SWITCH"], //组件标题黑名单
      switchValue: "",
      activeNames: ["1"],
      isShowOpenBox: false, //弹框展示
      op: "", //node弹出框数据
      notelist: [{tit:"人群名称",key:"crowdName"},
      {tit:"人群ID",key:"crowdId"},
      {tit:"有效期至",key:"validPeriodTime"},
      {tit:"创建人",key:"createUserName"},
      {tit:"创建时间",key:"createTime"}],
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
  created() {

    axios.post("/test-4/list/crowd",{}).then(res=>{//人群包信息
    this.crowdList = res.data.data

    })
  },
  components: {
    conditional,
    abshunt,
    note,
    push
  },
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
          console.log(node.parameters);
          node.output =this.node.output
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
      console.log("d要打开弹框拉");
      //
      this.isShowOpenBox = true;
      this.op = this.node.parameters[index].values[
        this.node.parameters[index].defaultValue
      ].children.values[til];
    },
    //删除每项已选择用户行为
    delhavior(index, inx) {
      let op = this.node.parameters[index].values[
        this.node.parameters[index].defaultValue
      ].children.selectedList;
      op.splice(inx, 1);
      this.$message({
        type: "success",
        message: "删除成功"
      });
    },
    popCancel() {
      this.isShowOpenBox = false;
    },
    openBox2() {
      // 条件控件弹框修改数据方法
      // this.isShowOpenBox = true;
    },
    popAffirm() {
      this.isShowOpenBox = false;
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
    width: 100%;
    overflow: hidden; /*超出的部分隐藏起来。*/
    white-space: nowrap; /*不显示的地方用省略号...代替*/
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
    .select_show_add {
      display: flex;
      justify-content: end;
      b {
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
.pop_up {
  width: 300px;
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

  .pop_up_min {
    flex: 1;
  }
}
.block {
  width: 100%;
  div {
    width: 100%;
  }
}
</style>
