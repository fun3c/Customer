<template>
  <div v-if="easyFlowVisible" style="height: calc(100vh);">
    <el-row>
      <!--顶部工具菜单-->
      <el-col :span="24">
        <div class="ef-tooltar">
          <div style="float: left;margin-left: 5px">
            <el-button
              type="primary"
              plain
              round
              icon="el-icon-refresh"
              size="mini"
              @click="giveUp"
              >退出编辑</el-button
            >
            <el-button
              type="primary"
              plain
              round
              icon="el-icon-refresh"
              size="mini"
              @click="conserve"
              >保存任务</el-button
            >
            <el-button
              type="primary"
              plain
              round
              icon="el-icon-refresh"
              size="mini"
              @click="setTask"
              >任务设置</el-button
            >
            <el-button
              type="primary"
              plain
              round
              icon="el-icon-refresh"
              size="mini"
              >自定义变量</el-button
            >
            <el-button
              type="primary"
              plain
              round
              icon="el-icon-refresh"
              size="mini"
              @click="Operation"
              >执行流程</el-button
            >
          </div>

          <div style="float: right;margin-right: 5px">
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
              @click="zoomAdd"
            ></el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button
              type="text"
              icon="el-icon-minus"
              size="large"
              @click="zoomSub"
            ></el-button>
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
            <el-button
              type="primary"
              plain
              round
              @click="dataReloadC"
              icon="el-icon-refresh"
              size="mini"
              >默认样式</el-button
            >
            <!-- <el-button type="primary" plain round @click="dataReloadC" icon="el-icon-refresh" size="mini">切换流程C</el-button> -->
            <!-- <el-button type="primary" plain round @click="dataReloadD" icon="el-icon-refresh" size="mini">自定义样式</el-button> -->
            <!-- <el-button type="info" plain round icon="el-icon-document" @click="openHelp" size="mini">帮助</el-button> -->
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex;height: calc(100% - 47px);">
      <div style="width: 230px;border-right: 1px solid #dce3e8;">
        <node-menu @addNode="addNode" ref="nodeMenu"></node-menu>
      </div>
 <div  class="wiper">
        <div id="efContainer" ref="efContainer" class="container" v-flowDrag>
        <template v-for="node in data.nodeList">
          <!-- 画布要展示的组件 -->
      
          <flow-node
            :id="node.id"
            :key="node.id"
            :node="node"
            :activeElement="activeElement"
            @changeNodeSite="changeNodeSite"
            @nodeRightMenu="nodeRightMenu"
            @clickNode="clickNode"
          >
          </flow-node>
        </template>
        <!-- 给画布一个默认的宽度和高度 -->
        <!-- <div style="position:absolute;top: 2000px;left: 2000px;">&nbsp;</div> -->
      </div>
 </div>
      <!-- 右侧表单 -->
      <div
        v-show="this.isShowForm"
        style="width: 300px;border-left: 1px solid #dce3e8;background-color: #FBFBFB"
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
    <flow-help v-if="flowHelpVisible" ref="flowHelp"></flow-help>

  </div>
</template>

<script>
import draggable from "vuedraggable";
// import { jsPlumb } from 'jsplumb'
// 使用修改后的jsplumb
import "./jsplumb";
import { easyFlowMixin } from "@/components/ef/mixins";
import flowNode from "@/components/ef/node";
import nodeMenu from "@/components/ef/node_menu";
import FlowInfo from "@/components/ef/info";
import FlowHelp from "@/components/ef/help";
import FlowNodeForm from "./node_form";
import lodash from "lodash";

import { getDataC } from "./data_C";


export default {
  data() {
    return {
      // jsPlumb 实例
      jsPlumb: null,
      // 控制画布销毁
      easyFlowVisible: true,
      // 控制流程数据显示与隐藏
      flowInfoVisible: false,
      // 是否加载完毕标志位
      loadEasyFlowFinish: false,
      flowHelpVisible: false,
      // 数据
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
      zoom: 0.5,
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
    FlowHelp
  },
  directives: {
    flowDrag: {
      bind(el, binding, vnode, oldNode) {
        if (!binding) {
          return;
        }
        el.onmousedown = e => {
          if (e.button == 2) {
            // 右键不管
            return;
          }
          //  鼠标按下，计算当前原始距离可视区的高度
          let disX = e.clientX;
          let disY = e.clientY;
          el.style.cursor = "move";

          document.onmousemove = function(e) {
            // 移动时禁止默认事件
            e.preventDefault();
            const left = e.clientX - disX;
            disX = e.clientX;
            el.scrollLeft += -left;

            const top = e.clientY - disY;
            disY = e.clientY;
            el.scrollTop += -top;
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
  mounted() {
    this.jsPlumb = jsPlumb.getInstance();
    this.$nextTick(() => {
      // 默认加载流程A的数据、在这里可以根据具体的业务返回符合流程数据格式的数据即可
      this.dataReload(getDataC());
    });
  },
  methods: {
    // 返回唯一标识
    getUUID() {
      return Math.random()
        .toString(36)
        .substr(3, 10);
    },
    jsPlumbInit() {
      this.jsPlumb.ready(() => {
        // 导入默认配置
        this.jsPlumb.importDefaults(this.jsplumbSetting);
        // 会使整个jsPlumb立即重绘。
        this.jsPlumb.setSuspendDrawing(false, true);
        // 初始化节点
        this.loadEasyFlow();
        // 单点击了连接线, https://www.cnblogs.com/ysx215/p/7615677.html
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
        this.jsPlumb.bind("connection", evt => {
          let from = evt.source.id;
          let to = evt.target.id;
          if (this.loadEasyFlowFinish) {
            this.data.lineList.push({ from: from, to: to });
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
          return true;
        });

        // beforeDetach
        this.jsPlumb.bind("beforeDetach", evt => {
          console.log("beforeDetach", evt);
        });
        this.jsPlumb.setContainer(this.$refs.efContainer);
      });
    },
    // 加载流程图
    loadEasyFlow() {
      // 初始化节点
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i];
        // 设置源点，可以拖出线连接其他节点

        this.jsPlumb.makeSource(
          node.id,
          lodash.merge(this.jsplumbSourceOptions, {})
        );
        // // 设置目标点，其他源点拖出的线可以连接该节点
        this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions);
        
        if (!node.viewOnly) {
          this.jsPlumb.draggable(node.id, { //可拖动元素
            grid:[15,15],//网格设置
             Anchors: [ 'TopCenter',  'Bottom','BottomRight', 'BottomLeft'],
            containment: "parent",
            stop: function(el) {
              // 拖拽节点结束后的对调
              console.log("拖拽结束: ", el);
            }
          });
        }
      }
      // 初始化连线
      for (var i = 0; i < this.data.lineList.length; i++) {
        let line = this.data.lineList[i];
        var connParam = {
          source: line.from,
          target: line.to,
          label: line.label ? line.label : "",
          connector: line.connector ? line.connector : "Flowchart",
          anchors: line.anchors ? line.anchors : undefined,
          paintStyle: line.paintStyle ? line.paintStyle : undefined
        };
        this.jsPlumb.connect(connParam, this.jsplumbConnectOptions);
      }
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
        grid:[15,15],
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
      if (this.activeElement.type === "node") {
        console.log(this.activeElement)
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
        console.log(nodeMenu,"nodeMenu数据")
      var screenX = evt.originalEvent.clientX,
        screenY = evt.originalEvent.clientY;
      let efContainer = this.$refs.efContainer;
      var containerRect = efContainer.getBoundingClientRect();
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
      var nodeId = this.getUUID();
      // 动态生成名字

      var origName = nodeMenu.name;

      console.log(origName);
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
//传递给画布控件的属性
      var node = {
        id: nodeId,
        name: nodeName,
        type: nodeMenu.type,
        left: left + "px",
        top: top + "px",
        ico: nodeMenu.ico,
        controlState: "success",
        controlDescription: "", //控件描述
        controlCondition: "", //条件判断
        url: "",
        createBy: "", //创建人
        createTime: "", //创建时间
        controlVersion: "",
        img:nodeMenu.img
      };
  
        // 判断节点类型，如果是开始的话，就有且只能有一个
        if(node.type ==="start"){
         
           let startArr= this.data.nodeList.filter((item,index)=>{
               console.log(item.type)
              return item.type=="start"
            })
                
          if( startArr.length==1){
             console.log(startArr.length)
            this.$message.error("画布中只允许存在一个开始控件");
            return;
          }
        }



      this.data.nodeList.push(node);
      this.$nextTick(function() {
        this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions);
        this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions);
        this.jsPlumb.draggable(nodeId, {//可拖动元素
          containment: "parent",
     grid:[15,15],
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
          if(nodeId==this.data.nodeList[0].id){
            this.$message.warning("开始节点不可删除")
            return
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
      console.log(is);
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
      this.jsPlumb.repaint();
    },
    // 流程数据信息
    dataInfo() {
      this.flowInfoVisible = true;
      this.$nextTick(function() {
        this.$refs.flowInfo.init();
      });
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

    zoomAdd() {
      if (this.zoom >= 1) {
        return;
      }
      this.zoom = this.zoom + 0.1;
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      this.jsPlumb.setZoom(this.zoom);
    },
    zoomSub() {
      if (this.zoom <= 0) {
        return;
      }
      this.zoom = this.zoom - 0.1;
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      this.jsPlumb.setZoom(this.zoom);
    },
    // -------------------------------------------------------------------顶部按键
    //提交流程  保存流程
    conserve() {
      this.$confirm("确定要保执行流程数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      })
        .then(() => {
          var datastr = JSON.stringify(this.data, null, "\t");
          console.log(datastr);
          this.$message.success("正在提交中,请稍后...");
          this.$message.success("保存成功");
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
          console.log(this.data.id);
          this.$message.success("正在执行中,请稍后...");
          this.$message.success("执行完毕");
        })
        .catch(() => {});
    },
    // 放弃编辑
    giveUp(){
        this.$confirm("您编辑的内容尚未保存，退出后信息可能丢失，是否确认继续退出？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      })
        .then(() => {
        //   console.log(this.data.id);
        //   this.$message.success("正在执行中,请稍后...");
        //   this.$message.success("执行完毕");
        })
        .catch(() => {});
    },
    //设置任务
     setTask() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        })
      },
    
    // // 下载数据
    // downloadData() {
    //     this.$confirm('确定要下载该流程数据吗？', '提示', {
    //         confirmButtonText: '确定',
    //         cancelButtonText: '取消',
    //         type: 'warning',
    //         closeOnClickModal: false
    //     }).then(() => {
    //         var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, '\t'));
    //         var downloadAnchorNode = document.createElement('a')
    //         downloadAnchorNode.setAttribute("href", datastr);
    //         downloadAnchorNode.setAttribute("download", 'data.json')
    //         downloadAnchorNode.click();
    //         downloadAnchorNode.remove();
    //         this.$message.success("正在下载中,请稍后...")
    //     }).catch(() => {
    //     })
    // },
    openHelp() {
      this.flowHelpVisible = true;
      this.$nextTick(function() {
        this.$refs.flowHelp.init();
      });
    }
  }
};
</script>
