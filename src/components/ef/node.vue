<template>
  <div
    ref="node"
    :style="nodeContainerStyle"
    @click="clickNode"
    contenteditable="true"
    @mouseup="changeNodeSite"
    :class="nodeContainerClass"
  >
    <!-- 节点类型的图标 -->
    <div class="el-node-top ">
      <img
        :class="nodeClass"
        style="width: 50px; height: 50px"
        :src="require('@/assets/' + node.image)"
        alt=""
      />

      <div class="ef-node-text" :show-overflow-tooltip="true">
        {{ node.caption }}
      </div>
    </div>
    <div v-if="node.nodeTypeID !== 'NID_END'" class="el-node-bottom">
      <!-- 最中间的那条竖线 -->
      <div>
        <div class="ef-node-center"></div>
        <div
          v-if="isShowBottomLine !== true"
          class="flow-node-drag start-endpoint"
        ></div>
      </div>
      <!-- 最下边的横线 -->
      <div v-if="isShowBottomLine" class="ef-bottom-line ">
         <span class="ef-bottom-label" v-for="(item,index) in node.output.fixedOutput" :key="index">{{item.label}}</span>
        <!-- 这里根据后端给的节点出口信息来渲染 -->
        <!-- <div class="flow-node-drag endpoint" v-for="(item) in endpointSum" :key="item" ></div> -->
      </div>
    </div>
    <!-- <div class="ef-node-left-ico flow-node-drag">
            <i :class="nodeIcoClass"></i>
        </div> -->
    <!-- 节点名称 -->
    <!-- 查看任务重现画布需要 -->
    <!-- 节点状态图标 -->
    <!-- <div class="ef-node-right-ico">
            <i class="el-icon-circle-check el-node-state-success" v-show="node.state === 'success'"></i>
            <i class="el-icon-circle-close el-node-state-error" v-show="node.state === 'error'"></i>
            <i class="el-icon-warning-outline el-node-state-warning" v-show="node.state === 'warning'"></i>
            <i class="el-icon-loading el-node-state-running" v-show="node.state === 'running'"></i>
        </div> -->
  </div>
</template>

<script>
export default {
  props: {
    node: Object,
    activeElement: Object
  },

  data() {
    return {};
  },
  created() {
  //  document.body.addEventListener("mousedown",(event)=>{
  //       console.log(event,"当前点击元素")
  //   })
  },
  computed: {
    nodeContainerClass() {
      return {
        "ef-node-container": true,
        //是否选中
        [this.node.type]: true
      };
    },
    clssss() {
    },
    nodeClass() {
      return {
        //是否选中
        "el-node-img": true,
        "ef-node-active":
          this.activeElement.type == "node"
            ? this.activeElement.nodeId === this.node.id
            : false
      };
    },
    //节点是否展示横线
    isShowBottomLine() {
      if (this.node.output && this.node.output.fixedOutput.length >= 2) {
        return true;
      } else {
        return false;
      }
    },
    // 节点容器样式
    nodeContainerStyle() {
      return {
        top: this.node.top,
        left: this.node.left
      };
    },
    nodeIcoClass() {
      var nodeIcoClass = {};
      nodeIcoClass[this.node.ico] = true;
      // 添加该class可以推拽连线出来，viewOnly 可以控制节点是否运行编辑
      nodeIcoClass["flow-node-drag"] = this.node.viewOnly ? false : true;
      return nodeIcoClass;
    }
  },
  methods: {
    // 点击节点
    clickNode() {
      this.$emit("click", this.node.id);
    },
    // 鼠标移动后抬起
    changeNodeSite() {
      // 避免抖动
      if (
        this.node.left == this.$refs.node.style.left &&
        this.node.top == this.$refs.node.style.top
      ) {
        return;
      }
      this.$emit("changeNodeSite", {
        nodeId: this.node.id,
        left: this.$refs.node.style.left,
        top: this.$refs.node.style.top
      });
    }
  }
};
</script>
