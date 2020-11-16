<template>
  <div v-if="easyFlowVisible" style="height: calc(100vh);">
    <el-row class="panel-header">

    <div v-if="!data.jobName"> 
         <el-button class ="exit" type="text" icon="el-icon-back" circle @click="giveUp"></el-button>
       <span>ID- -</span> <span>未命名任务</span>
    </div>
      <div v-if="data.jobName">
         <el-button class ="exit"   type="text" icon="el-icon-back" circle></el-button>
        <span>{{ data.jobId }}</span> <span style="font-weight: 800">{{ data.jobName }}</span>
        <span
          >{{ dateFormat(data.startTime) }}-{{ dateFormat(data.endTime) }}</span
        >
      </div>
           <el-button style="float:right;margin-right:5px"  class ="exit fullscrenn" type="text" icon="el-icon-full-screen" @click="toggleFullScreen" circle>全屏</el-button>
    </el-row>

    <el-row>
      <!--顶部工具菜单-->
      <el-col :span="24">
        <div class="ef-tooltar">
          <div style="float: left;margin-left: 5px">
            <el-button
              type="primary"
             style="color: #fff;background: #5f72e2;border-radius:5px;font-size:14px; "
              icon="el-icon-refresh"
              size="mini"
              @click="giveUp"
              >退出编辑</el-button >
            <el-button
              type="primary"
        style="color: #fff;background: #5f72e2;border-radius:5px;font-size:14px; "
              icon="el-icon-refresh"
              size="mini"
              @click="conserve"
              >保存任务</el-button
            >
            <el-button
              type="primary"
        style="color: #fff;background: #5f72e2;border-radius:5px;font-size:14px; "
              icon="el-icon-refresh"
              size="mini"
              @click="setCurrentTask"
              >任务设置</el-button
            >
          </div>

          <div style="float: left;margin-left: 30px">
            <el-link type="primary" :underline="false">{{ data.name }}</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-button
              type="text"
              icon="el-icon-delete"
              size="large"
              @click="deleteElement"
              :disabled="!this.activeElement.type"
            ></el-button>
            <el-divider direction="vertical"></el-divider>
            <!-- <el-button type="text" icon="el-icon-download" size="large" @click="downloadData"></el-button> -->
            <el-divider direction="vertical"></el-divider>
            <el-button
              type="text"
              icon="el-icon-plus"
              size="large"
              @mousedown.native="zoomAdd"
              @mouseup.native="celZoom"
            ></el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button
              type="text"
              icon="el-icon-minus"
              size="large"
              @mousedown.native="zoomSub"
              @mouseup.native="celZoom"
            ></el-button>
      
              <el-button   @click="rebound" type="text" icon="el-icon-aim" circle>复位</el-button>
            <el-button
              type="info"
              plain
              round
              icon="el-icon-document"
              @click="dataInfo"
              size="mini"
              >流程信息</el-button
            >
            <!-- <el-button type="primary" plain round @click="dataReloadA" icon="el-icon-refresh" size="mini">切换流程A</el-button> -->
            <!-- <el-button
              type="primary"
              plain
              round
              @click="dataReloadC"
              icon="el-icon-refresh"
              size="mini"
              >默认样式</el-button
            > -->
            <!-- <el-button type="primary" plain round @click="dataReloadC" icon="el-icon-refresh" size="mini">切换流程C</el-button> -->
            <!-- <el-button type="primary" plain round @click="dataReloadD" icon="el-icon-refresh" size="mini">自定义样式</el-button> -->
            <!-- <el-button type="info" plain round icon="el-icon-document" @click="openHelp" size="mini">帮助</el-button> -->
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex;height: calc(100% - 47px);">
      <div style="width: 100px;border-right: 1px solid #dce3e8;"
      v-if="this.$route.params.value!==0"
      class ="left_Nav">
        
        <node-menu  @addNode="addNode" ref="nodeMenu"></node-menu>
      </div>
      <div class="wiper">
        <div
          id="efContainer"
          ref="efContainer"
          class="container"
          @mousewheel.prevent.ctrl="scrollFn"
          v-flowDrag
        >
          <template v-for="node in data.nodeList" @keyup.delete="keyDelete">
            <!-- 画布要展示的组件 -->

            <flow-node
              :id="node.id"
              :key="node.id"
              :node="node"
              contenteditable="true"
              ref="flowNode"
              :activeElement="activeElement"
              @changeNodeSite="changeNodeSite"
              @nodeRightMenu="nodeRightMenu"
              @click="clickNode"
            >
            </flow-node>
          </template>
          <!-- 给画布一个默认的宽度和高度 -->
          <!-- <div style="position:absolute;top: 2000px;left: 2000px;">&nbsp;</div> -->
        </div>
      </div>
      <!-- 右侧表单 -->
      <div
        class="rightForm"
        v-show="this.isShowForm"
        style="width: 360px;border-left: 1px solid #dce3e8;background-color: #FBFBFB"
      >
        <flow-node-form
          ref="nodeForm"
          @setLineLabel="setLineLabel"
          @repaintEverything="repaintEverything"
          @isHideFrom="isHideFrom"
        ></flow-node-form>
      </div>
    </div>

    <!-- 流程数据详情 -->
    <flow-info v-if="flowInfoVisible" ref="flowInfo" :data="data"></flow-info>
    <setTask
      v-if="setTaskVisible"
      @setCurrentTask="setCurrentTask"
      ref="setTask"
      :data="data"
    ></setTask>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { jsPlumb } from 'jsplumb'
// 使用修改后的jsplumb
// import "./jsplumb";
import { easyFlowMixin } from "@/components/ef/mixins";
import flowNode from "@/components/ef/node";
import nodeMenu from "@/components/ef/node_menu";
import FlowInfo from "@/components/ef/info";
import setTask from "./set_task";
import FlowNodeForm from "./node_form";
import lodash from "lodash";
import axios from "axios";
import { getDataC } from "./data_C";
import { getCheckdata } from "./check_data";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      UUID: 0,
      // jsPlumb 实例
      jsPlumb: null,
      // 控制画布销毁
      easyFlowVisible: true,
      // 控制流程数据显示与隐藏
      flowInfoVisible: false,
      // 控制任务设置栏的显示隐藏
      setTaskVisible: true,
      // 是否加载完毕标志位
      loadEasyFlowFinish: false,
      //后端返回唯一ID
      taskID: "",
      isFullscreen:true,
      localnodeID: 0,
      //  数据
      data: {},
      // 激活的元素、可能是节点、可能是连线
      activeElement: {
        // 可选值 node 、line
        type: undefined,
        // 节点ID
        nodeId: undefined,
        // 连线ID
        sourceId: undefined,
        targetId: undefined
      },
      zoom: 1,
      zoomStep: 0.035,
      zoomEnabled: false,
      isShowForm: false
    };
  },
  // 一些基础配置移动该文件中
  mixins: [easyFlowMixin],
  components: {
    // draggable,
    flowNode,
    nodeMenu,
    FlowInfo,
    FlowNodeForm,
    setTask
  },
  directives: {
    flowDrag: {
      bind(el, binding, vnode, oldNode) {
        if (!binding) {
          return;
        }
        el.onmousedown = e => {
          vnode.context.isHideFrom(false);
          if (e.button == 2) {
            // 右键不管
            return;
          }
          //  鼠标按下，计算当前原始距离可视区的高度
          let disX = e.clientX - el.offsetLeft;
          let disY = e.clientY - el.offsetTop;
          el.style.cursor = "move";
        
          document.onmousemove = function(e) {
          
            // 移动时禁止默认事件
            e.preventDefault();
            const left = e.clientX - disX;
            // disX = e.clientX;
            // el.scrollLeft += -left;

            const top = e.clientY - disY;
            // disY = e.clientY;
            // el.scrollTop += -top;
            el.style.left = `${left}px`;
            el.style.top = `${top}px`;
          };

          document.onmouseup = function(e) {
            el.style.cursor = "auto";
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  },
  created() {
    document.onkeyup = e => {
      let nodeName = e.target.nodeName;

      if (nodeName !== "INPUT" && nodeName !== "TEXTAREA") {
        let key = window.event.keyCode;
        if (key == 8 || key == 46) {
          this.deleteElement();
          return false;
        }
      }
    };
  },
  keyDelete(e) {
    console.log("删除dom");
    //  let key = window.event.keyCode;
    // if(key==8 ||key ==46){
    //     this.deleteElement()
    //     return false
  },


  mounted() {
   
    this.jsPlumb = jsPlumb.getInstance();
    
  
    let routerType = this.$route.params.value
    let routerJpbId = this.$route.params.id
    console.log(routerJpbId)
    // 进入画布，先判断是新增，编辑，查看
    if (!routerJpbId) {
      console.log("新增")
      //新增
      // 发起ID请求
      axios.get("http://49.233.45.33:8081/v1/get/job/id").then(res => {
        this.taskID = res.data.data.jobId;
        let data = (getDataC().nodeList[0].id =
          this.taskID + "_" + this.localnodeID);
  
        getDataC().jobId = this.taskID;
        this.$nextTick(() => {
          // 默认加载流程A的数据
          this.dataReload(getDataC()); // 默认流程图的数据
        });
      })  .catch(() => {
                this.$message({
            type: "error",
            message: "任务ID请求失败"
          });
      });
    } else if (routerType===0) {
      //查看
      // 请求画布数据   getCheckdata

    this.$http({
        method: "POST",
        url: "http://49.233.45.33:8888/findByTaskJson",
        data: {
   jobId:this.$route.params.id
        },
      }).then(res=>{
        console.log(res)
        let data =res.data.data
        data.nodeList.forEach(item=>{
          item.viewOnly=true
 
        })
               this.$nextTick(() => {
        // 默认加载流程A的数据
        let newData = data;
        newData.nodeList.forEach((item, index) => {
          item.output.fixedOutput.forEach(itm => {
            itm.id = uuidv4();
          });
        });

        this.dataReload(newData); // 默认流程图的数据
      });
      })
 
    } else if (this.$route.params.value===2) {
      console.log("编辑")
      //编辑
      // 请求画布数据
       this.$http({
        method: "POST",
        url: "http://49.233.45.33:8888/findByTaskJson",
        data: {
   jobId:this.$route.params.id
        },
      }).then(res=>{
        console.log(res)
        let data =res.data.data

               this.$nextTick(() => {
        // 默认加载流程A的数据
        let newData = data;
        newData.nodeList.forEach((item, index) => {
          item.output.fixedOutput.forEach(itm => {
            itm.id = uuidv4();
          });
        });

        this.dataReload(newData); // 默认流程图的数据
      });
      })
    }
    // console.log(getDataC())
//      this.data.lineList
//     setTimeout(() => {
//       this.data.nodeList.forEach(node=>{
//  this.jsPlumb.removeAllEndpoints(node.id)
//       })
//     }, 4500)
//     newLineList.forEach(lin=>{
//       console.log(lin)
//     })
//        this.data.lineList=newLineList
    // setTimeout(() => {
    //   this.data.nodeList.forEach(node => {
    //     if(node.id === '1158_3') {
    //       node.output.fixedOutput.push({
    //         "label": "NEW",
    //         "pinName": "01",
    //         "anchor": "BottomCenter",
    //         "id": "0cf00018-164c-4366-b0ef-b9a267618ba41111"
    //       })
    //     }
    //   })
    //   this.loadEasyFlow(this.data.nodeList);
    // }, 5000);
  },
  methods: {
    // 返回唯一标识
    getUUID() {
      let value = "";
      this.localnodeID = this.data.nodeList.length;
      value = this.taskID + "_" + (this.localnodeID + 1);
      this.localnodeID = this.localnodeID + 1;
      return value;
    },
    jsPlumbInit() {
      this.jsPlumb.ready(() => {
        // 导入默认配置
        this.jsPlumb.importDefaults(this.jsplumbSetting);
        // 会使整个jsPlumb立即重绘。
        this.jsPlumb.setSuspendDrawing(false, true);
        // 初始化节点
        this.loadEasyFlow(this.data.nodeList);
        this.jsPlumb.bind("click", (conn, originalEvent) => {
          this.isHideFrom(true);
          this.activeElement.type = "line";
          this.activeElement.sourceId = conn.sourceId;
          this.activeElement.targetId = conn.targetId;
          this.$refs.nodeForm.lineInit({
            from: conn.sourceId,
            to: conn.targetId,
            label: conn.getLabel()
          });
        });
        // 连线
        this.jsPlumb.bind("connection", (evt, inx) => {
          let from = evt.source.id;
          let to = evt.target.id;
          // console.log(evt.sourceEndpoint.canvas.classList[1],);
          let pinName = evt.sourceEndpoint.canvas.classList[1];

          console.log(evt);

          if (this.loadEasyFlowFinish) {
            this.data.lineList.push({
              from: from,
              to: to,
              pinName: pinName,
              from_uuid: "",
              to_uuid: "",
              lineCount: ""
            });
          }
        });

        // 删除连线回调
        this.jsPlumb.bind("connectionDetached", evt => {
          this.deleteLine(evt.sourceId, evt.targetId);
        });

        // 改变线的连接节点
        this.jsPlumb.bind("connectionMoved", evt => {
          this.changeLine(evt.originalSourceId, evt.originalTargetId);
        });

        // 连线右击
        this.jsPlumb.bind("contextmenu", evt => {
          console.log("contextmenu", evt);
        });

        // 连线
        this.jsPlumb.bind("beforeDrop", evt => {
          let from = evt.sourceId;
          let to = evt.targetId;

          let node = this.data.nodeList.filter(function(node) {
            return node.id === to;
          });
          let toArr = this.data.lineList.filter(function(line) {
            return line.to === to;
          });
          console.log(node, "连线的回环信息");
          if (toArr.length > 0) {
            this.$message.error("链接不能出现循环");
            return false;
          }
          if (node[0].nodeTypeID === "NID_START") {
            this.$message.error("开始节点不许被链接");
            return false;
          }
          if (from === to) {
            this.$message.error("节点不支持连接自己");
            return false;
          }
          if (this.hasLine(from, to)) {
            this.$message.error("该关系已存在,不允许重复创建");
            return false;
          }
          if (this.hashOppositeLine(from, to)) {
            this.$message.error("不支持两个节点之间连线回环");
            return false;
          }

          this.$message.success("连接成功");
          //连线成功后应该怎么做  删除连线节点

          // console.log(this.$refs.flowNode[0].showEndpoint(),'wwwwwwwwwwwwwwwwww');
          return true;
        });

        // beforeDetach
        this.jsPlumb.bind("beforeDetach", evt => {
          console.log("beforeDetach", evt);
        });
        this.jsPlumb.setContainer(this.$refs.efContainer);
      });
    },
    getCurrSource(item) {
      const currNode = this.data.nodeList.filter(node => {
        if (node.id === item.from) return node;
      });
      const currOutput = currNode[0].output.fixedOutput;
      const currEndpoint = currOutput.filter(op => op.pinName === item.pinName);

      return currEndpoint[0];
    },
    // 加载流程图
    loadEasyFlow(nodeList) {
      // 初始化节点
      nodeList.forEach(node => {
        const output =
          node.nodeTypeID !== "NID_START" ? node.output.fixedOutput : [];

        if (node.nodeTypeID === "NID_START") {
          this.jsPlumb.makeSource(
            node.id,
            lodash.merge(this.jsplumbStartSourceOptions)
          );
          this.jsPlumb.makeTarget(node.id, this.jsplumbStartSourceOptions);
        } else {
          this.jsPlumb.makeSource(
            node.id,
            lodash.merge(this.jsplumbSourceOptions)
          );
          this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions);
        }

        output.forEach(item => {
          this.jsPlumb.addEndpoint(node.id, {
            anchors: item.anchor,
            uuid: item.id,
            paintStyle: { fill: "#a1a1a1", radius: 5 },
            isSource: true,
            cssClass: item.pinName
          });
        });
        if (!node.viewOnly) {
          //是否是不可移动元素
          this.jsPlumb.draggable(node.id, {
            //可拖动元素
            grid: [15, 15], //网格设置
            //  Anchors: [ 'TopCenter', 'Bottom','BottomRight', 'BottomLeft'],
            containment: "parent",
            stop: function(el) {
              // 拖拽节点结束后的对调
              console.log("拖拽结束: ", el);
            }
          });
        }
      });

      this.data.lineList.forEach(line => {
        if (line.pinName === "jtk-endpoint-anchor") {
          this.jsPlumb.connect(
            {
              source: line.from,
              target: line.to
            },
            this.jsplumbConnectOptions
          );
        } else {
          const currSource = this.getCurrSource(line);
          // console.log('currSource', currSource)
          this.jsPlumb.connect(
            {
              uuids: [currSource.id, line.to],
              source: currSource.id,
              target: line.to
            },
            this.jsplumbConnectOptions
          );
        }
      });
      // for (var i = 0; i < this.data.nodeList.length; i++) {
      //   let node = this.data.nodeList[i];
      //   // 设置源点，可以拖出线连接其他节点

      //   if (node.nodeTypeID === "NID_START") {
      //     this.jsPlumb.makeSource(
      //       node.id,
      //       lodash.merge(this.jsplumbStartSourceOptions, {})
      //     );
      //   } else {
      //     this.jsPlumb.makeSource(
      //       node.id,
      //       lodash.merge(this.jsplumbSourceOptions, {})
      //     );
      //   }
      //   // // 设置目标点，其他源点拖出的线可以连接该节点,开始节点不可链接
      //   if (node.nodeTypeID !== "NID_START") {
      //     this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions);
      //   } else {
      //     this.jsPlumb.makeTarget(node.id, this.jsplumbStartSourceOptions);
      //   }

      // }
      // // 初始化连线
      // for (var i = 0; i < this.data.lineList.length; i++) {
      //   //uuid连线
      //   let line = this.data.lineList[i];
      //   var connParam = {
      //     source: line.from,
      //     target: line.to,
      //     uuids: line.uuids,
      //     label: line.label ? line.label : "",
      //     connector: line.connector ? line.connector : "Flowchart",
      //     anchors: line.anchors ? line.anchors : undefined,
      //     paintStyle: line.paintStyle ? line.paintStyle : undefined
      //   };
      //   this.jsPlumb.connect(connParam, this.jsplumbConnectOptions);
      // }
      this.$nextTick(function() {
        this.loadEasyFlowFinish = true;
      });
    },
    // 设置连线条件
    setLineLabel(from, to, label) {
      var conn = this.jsPlumb.getConnections({
        source: from,
        target: to
      })[0];
      if (!label || label === "") {
        conn.removeClass("flowLabel");
        conn.addClass("emptyFlowLabel");
      } else {
        conn.addClass("flowLabel");
      }
      conn.setLabel({
        grid: [15, 15],
        label: label
      });
      this.data.lineList.forEach(function(line) {
        if (line.from == from && line.to == to) {
          line.label = label;
        }
      });
    },
    // 删除激活的元素
    deleteElement() {
      console.log(111);
      if (this.activeElement.type === "node") {
        this.deleteNode(this.activeElement.nodeId);
      } else if (this.activeElement.type === "line") {
        this.$confirm("确定删除所点击的线吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            var conn = this.jsPlumb.getConnections({
              source: this.activeElement.sourceId,
              target: this.activeElement.targetId
            })[0];
            this.jsPlumb.deleteConnection(conn);
          })
          .catch(() => {});
      }
    },
    // 删除线
    deleteLine(from, to) {
      this.data.lineList = this.data.lineList.filter(function(line) {
        if (line.from == from && line.to == to) {
          return false;
        }
        return true;
      });
    },
    // 改变连线
    changeLine(oldFrom, oldTo) {
      this.deleteLine(oldFrom, oldTo);
    },
    // 改变节点的位置
    changeNodeSite(data) {
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i];
        if (node.id === data.nodeId) {
          node.left = data.left;
          node.top = data.top;
        }
      }
    },
    /**
     * 拖拽结束后添加新的节点
     * @param evt
     * @param nodeMenu 被添加的节点对象
     * @param mousePosition 鼠标拖拽结束的坐标
     */
    addNode(evt, nodeMenu, mousePosition) {
      console.log(nodeMenu, "nodeMenu数据");
      var screenX = evt.originalEvent.clientX,
        screenY = evt.originalEvent.clientY;
      let efContainer = this.$refs.efContainer;
      var containerRect = efContainer.getBoundingClientRect();
      console.log(containerRect, "aatttt");
      var left = screenX,
        top = screenY;
      // 计算是否拖入到容器中
      if (
        left < containerRect.x ||
        left > containerRect.width + containerRect.x ||
        top < containerRect.y ||
        containerRect.y > containerRect.y + containerRect.height
      ) {
        this.$message.error("请把节点拖入到画布中");
        return;
      }
    
      left = left - containerRect.x + efContainer.scrollLeft;
      top = top - containerRect.y + efContainer.scrollTop;

  
      // 居中
      left -= 85;
      top -= 16;

      left = left / this.zoom;
      top = top / this.zoom;

      var nodeId = this.getUUID();
      // 动态生成名字

      var origName = nodeMenu.caption;
      var nodeName = origName;
      var index = 1;
      while (index < 10000) {
        var repeat = false;
        for (var i = 0; i < this.data.nodeList.length; i++) {
          let node = this.data.nodeList[i];
          if (node.name === nodeName) {
            nodeName = origName + index;
            repeat = true;
          }
        }
        if (repeat) {
          index++;
          continue;
        }
        break;
      }
      nodeMenu.output.fixedOutput = nodeMenu.output.fixedOutput.map(
        (item, index) => {
          item.id = `${this.getUUID()}-${uuidv4()}-${index}`;
          console.log(item.id);
          return item;
        }
      );

      //传递给画布控件的属性
      var node = {
        id: nodeId,
        caption: nodeName,
        nodeTypeID: nodeMenu.nodeTypeID,
        info: nodeMenu.info,
        left: left + "px",
        top: top + "px",
        controlState: "success",
        image: nodeMenu.image,
        output: nodeMenu.output,
        parameters: nodeMenu.parameters
      };
      // 判断节点类型，如果是开始的话，就有且只能有一个
      if (node.nodeTypeID === "NID_START") {
        let startArr = this.data.nodeList.filter((item, index) => {
          return item.nodeTypeID == "NID_START";
        });
        if (startArr.length == 1) {
          this.$message.error("画布中只允许存在一个开始控件");
          return;
        }
      }

      this.data.nodeList.push(node);
      this.$nextTick(function() {
        // // 设置目标点，其他源点拖出的线可以连接该节点,开始节点不可链接
        if (node.nodeTypeID !== "NID_START") {
          this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions);
        } else {
          this.jsPlumb.makeSource(nodeId, this.jsplumbStartSourceOptions);
        }
        if (!node.flexOutput) {
          let outputs = node.output;
          //根据控件端点信息，动态添加端点
          console.log("动态添加端点");
          outputs.fixedOutput.forEach((item, index) => {
            let uuid = this.getUUID() + "-uuid";
            this.jsPlumb.addEndpoint(nodeId, {
              uuid: uuid,
              anchors: item.anchor,
              paintStyle: { fill: "#a1a1a1", radius: 5 },
              isSource: true,
              cssClass: item.pinName
            });
          });
        }

        // this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions); //元节点配置
        this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions);
        this.jsPlumb.draggable(nodeId, {
          //可拖动元素
          containment: "parent",
          grid: [15, 15],
          stop: function(el) {
            // 拖拽节点结束后的对调
            console.log("拖拽结束: ", el);
          }
        });
      });
    },
    /**
     * 删除节点
     * @param nodeId 被删除节点的ID
     */
    deleteNode(nodeId) {
      this.$confirm("确定要删除节点" + nodeId + "?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      })
        .then(() => {
          //判断节点是否可以删除
          if (nodeId == this.data.nodeList[0].id) {
            this.$message.warning("开始节点不可删除");
            return;
          }
          this.data.nodeList = this.data.nodeList.filter(function(node) {
            if (node.id === nodeId) {
              // 伪删除，将节点隐藏，否则会导致位置错位
              // node.show = false
              return false;
            }
            return true;
          });
          this.$nextTick(function() {
            this.jsPlumb.removeAllEndpoints(nodeId);
          });
        })
        .catch(() => {});
      return true;
    },
    clickNode(nodeId) {
      //点击节点  展示右侧信息栏

      this.activeElement.type = "node";
      this.activeElement.nodeId = nodeId;

      this.isHideFrom(true);
      if (this.$refs.nodeForm.nodeInit) {
        this.$refs.nodeForm.nodeInit(this.data, nodeId);
      }
    },

    isHideFrom(is) {
      // 右侧信息栏显隐控制
      this.isShowForm = is;
    },
    // 是否具有该线
    hasLine(from, to) {
      for (var i = 0; i < this.data.lineList.length; i++) {
        var line = this.data.lineList[i];
        if (line.from === from && line.to === to) {
          return true;
        }
      }
      return false;
    },
    // 是否含有相反的线
    hashOppositeLine(from, to) {
      return this.hasLine(to, from);
    },
    nodeRightMenu(nodeId, evt) {
      this.menu.show = true;
      this.menu.curNodeId = nodeId;
      this.menu.left = evt.x + "px";
      this.menu.top = evt.y + "px";
    },
    repaintEverything() {
      this.jsPlumb.repaint(); //重绘组件
    },
    // 流程数据信息
    dataInfo() {
      this.flowInfoVisible = true;
      this.$nextTick(function() {
        this.$refs.flowInfo.init();
      });
    },
    // 任务设置
    setCurrentTask() {
      this.setTaskVisible = true;
      this.$nextTick(function() {
        this.$refs.setTask.init();
      });
    },
    //画布复原
    rebound(){
      this.$refs.efContainer.style.left="0%"

     this.$refs.efContainer.style.top="0%"

    },
    // 加载流程图
    dataReload(data) {
      this.easyFlowVisible = false;
      this.data.nodeList = [];
      this.data.lineList = [];
      this.$nextTick(() => {
        data = lodash.cloneDeep(data);
        this.easyFlowVisible = true;
        this.data = data;
        this.$nextTick(() => {
          this.jsPlumb = jsPlumb.getInstance();
          this.$nextTick(() => {
            this.jsPlumbInit();
          });
        });
      });
    },
    // 模拟载入数据dataC
    dataReloadC() {
      this.dataReload(getDataC());
    },

    //时间转换

    /**

 * 将时间戳或者中国标准时间处理成 2018-05-01 00:00:00  这种格式

 * @param {时间戳或者中国标准时间} timestamp 

 * @param {一状态 } state   ture要时分秒  false不要时分秒 

 */

    // dateFormat(dateData) {

    //     var date = new Date(dateData);//时间戳为10位需*1000，时间戳为13位的话不需乘1000

    //     var Y = date.getFullYear() + '-';

    //     var M = (date.getMonth()+1).padStart(2,0) + '-';

    //     var D = date.getDate().padStart(2,0)+ ' ';

    //     var h = date.getHours().padStart(2,0)+ ':';

    //     var m = date.getMinutes.padStart(2,0)+ ':';

    //     var  s = date.getSeconds().padStart(2,0);

    //     return Y+M+D+h+m+s;

    //   },

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
    zoomAdd() {
      // if (this.zoom >= 1) {
      //   return;
      // }
      this.zoomEnabled = true;
      this.doZoom(+this.zoomStep);
      // this.zoom = this.zoom + 0.1;
      // // this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      // this.jsPlumb.setZoom(this.zoom);
    },
    zoomSub() {
      this.zoomEnabled = true;
      this.doZoom(0 - this.zoomStep);
      // if (this.zoom <= 0) {
      //   return;
      // }
      // this.zoom = this.zoom - 0.1;
      // // this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      // this.jsPlumb.setZoom(this.zoom, true);
    },
    celZoom() {
      this.zoomEnabled = false;
      clearTimeout(this.timer);
    },
    doZoom(step) {
      this.zoom += step;
      if (this.zoom <= 0.2 || this.zoom >= 2) return;
      this.setZoom(this.zoom, this.jsPlumb, null, this.$refs.efContainer);

      if (this.zoomEnabled) {
        this.zoom += step;
        this.timer = setTimeout(() => this.doZoom(step), 200);
      }
    },

    setZoom(zoom, instance, transformOrigin, el) {
      transformOrigin = transformOrigin || [0.5, 0.5];
      instance = instance || jsPlumb;
      el = el || instance.getContainer();
      var p = ["webkit", "moz", "ms", "o"],
        s = "scale(" + zoom + ")",
        oString =
          transformOrigin[0] * 100 + "% " + transformOrigin[1] * 100 + "%";

      for (var i = 0; i < p.length; i++) {
        el.style[p[i] + "Transform"] = s;
        el.style[p[i] + "TransformOrigin"] = oString;
      }

      el.style["transform"] = s;
      el.style["transformOrigin"] = oString;

      instance.setZoom(zoom);
    },

    scrollFn(event) {
      if (event.wheelDelta > 0) {
        this.doZoom(+this.zoomStep);
      }
      if (event.wheelDelta < 0) {
        this.doZoom(0 - this.zoomStep);
      }
    },
    // -------------------------------------------------------------------顶部按键
    //提交流程  保存流程
    conserve() {
      // let newData = lodash.cloneDeep(this.data);
      // this.data.nodeList.forEach((item, index) => {
      //   item.output.fixedOutput.forEach(itm => {
      //     itm.id = uuidv4();
      //   });
      // });

      // console.log(  JSON.stringify(this.data))
      this.$confirm("确定要保存该流程数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      })
        .then(() => {
          var datastr = JSON.stringify(this.data, null, "\t");

          //对数据信息完整性进行校验 ,校验成功保存任务，校验失败抛出错误
          if (
            this.data.jobName === "" ||
            this.data.taskObject.length === 0 ||
            this.data.taskObject.startTime === ""
          ) {
            this.$message.warning("任务信息不完整");
          } else {
            let data = this.data;
            // this.axios({
            //   method: "POST",
            //   url: "/save",
            //   data: data
            // })
            //   .then(res => {
            //     console.log(res, "wwwwwwwwww");
            //     if (res.status === 200) {
            //       this.$message.success("保存成功");
            //       this.$router.push({
            //         path: "/users",
            //         query: { id: "待测试" }
            //       });
            //     }
            //   })
            //   .catch(err => {
            //     console.error(err);
            //   });
            axios.post("http://49.233.45.33:8888/save", data).then(res => {
              console.log(this.data, "wwwwwwwwwwwwwwwwww");
              if (res.data.code === 200) {
                this.$message.success("保存成功");
                this.$router.push({
                  path: "/users",
        
                });
              } else {
                this.$message.warning(res.data.msg);
              }
            });
          }
        })
        .catch(() => {});
    },
    //执行流程
    Operation() {
      this.$confirm("确定要保存该流程数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      })
        .then(() => {
          this.$message.success("正在执行中,请稍后...");
          this.$message.success("执行完毕");
        })
        .catch(() => {});
    },
    // 放弃编辑
    giveUp() {
      this.$confirm(
        "您编辑的内容尚未保存，退出后信息可能丢失，是否确认继续退出？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          closeOnClickModal: false
        }
      )
        .then(() => {
          this.$router.push({
            path: "/users",
          });
          //   console.log(this.data.id);
          //   this.$message.success("正在执行中,请稍后...");
          //   this.$message.success("执行完毕");
        })
        .catch(() => {});
    },
    //设置任务
    setTask() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
 
      toggleFullScreen(e){
   let element = document.documentElement;
      if (this.fullscreen) {
        this.$message.success("退出全屏模式");
        this.fullscreenTitle = "进入全屏模式";
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
      } else {
        this.$message.success("进入全屏模式");
        this.fullscreenTitle = "退出全屏模式";
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
      },
  }
};
</script>
