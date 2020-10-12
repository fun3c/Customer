<template>
    <div class="flow-menu" ref="tool">
        <div v-for="menu  in  menuList" :key="menu.id">
            <span class="ef-node-pmenu" @click="menu.open = !menu.open"><i :class="{'el-icon-caret-bottom': menu.open,'el-icon-caret-right': !menu.open}"></i>&nbsp;{{menu.name}}</span>
            <ul v-show="menu.open" class="ef-node-menu-ul">
                <draggable class="drag-box" @end="end" @start="move" v-model="menu.children" :options="draggableOptions">
                    <li v-for="subMenu in menu.children" :class="'ef-node-menu-li '+ subMenu.type"  :key="subMenu.id" :type="subMenu.type">
                        <img 
                              style="width: 50px; height: 50px"
                             :src="require('@/assets/'+subMenu.img+'.png')" 
                             alt="">
                             <span> {{subMenu.name}} </span>
                    </li>
                </draggable>
            </ul>
        </div>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'

    var mousePosition = {
        left: -1,
        top: -1
    }

    export default {
        data() {
            return {
                activeNames: '1',
                // draggable配置参数参考 https://www.cnblogs.com/weixin186/p/10108679.html
                draggableOptions: {
                    preventOnFilter: false,
                    sort: false,
                    disabled: false,
                    ghostClass: 'tt',
                    // 不使用H5原生的配置
                    forceFallback: true,
                    // 拖拽的时候样式
                    // fallbackClass: 'flow-node-draggable'
                },
                // 默认打开的左侧菜单的id
                defaultOpeneds: ['1', '2','3'],
                menuList: [  //数据覆盖,定义的数据类型  包含操作修改 节点出口分支
                    {
                        id: '1',
                        type: 'group',
                        name: '开始节点',
                        ico: 'el-icon-video-play',
                        img:"start",
                        open: true,
                        children: [
                            {
                                id: '0',
                                type: 'start',
                                name: '开始',
                                ico: 'el-icon-video-play',
                                 img:"start",
                                // 自定义覆盖样式
                                style: {}
                            },
                        ]
                    },
                    {
                        id: '2',
                        type: 'group',
                        name: '事件',
                        ico: 'el-icon-guide',
                        open: true,
                        children: [
                            {
                                id: '2',
                                type: 'task',
                                name: '条件分支',
                                ico: 'el-icon-guide',
                                img:"条件分支",
                                // 自定义覆盖样式
                                style: {}
                            }, {
                                id: '3',
                                type: 'aaa',
                                name: '短信',
                                ico: 'el-icon-cpu',
                                img:"短信",
                                // 自定义覆盖样式
                                style: {}
                            },
                            {
                                id: '4',
                                type: 'aaa',
                                name: 'AB测试',
                                ico: 'el-icon-cpu',
                                img:"AB测试",
                                img:"短信",
                                // 自定义覆盖样式
                                style: {}
                            },{
                                id: '5',
                                type: 'aaa',
                                name: '等待',
                                ico: 'el-icon-cpu',
                                img:"wait",
                                // 自定义覆盖样式
                                style: {}
                            },
                            {
                                id: '6',
                                type: 'aaa',
                                name: '推荐',
                                ico: 'el-icon-cpu',
                                img:"推荐",
                                // 自定义覆盖样式
                                style: {}
                            }
                        ]
                    },
                    {
                        id: '3',
                        type: 'group',
                        name: '结束节点',
                        ico: 'el-icon-video-pause',
                        open: true,
                        children: [
                            {
                                id: '5',
                                type: 'end',
                                name: '流程结束',
                                ico: 'el-icon-switch-button',
                                img:"stop",
                                // 自定义覆盖样式
                                style: {}
                            },
                        ]
                    }
                ],
                nodeMenu: {}
            }
        },
        components: {
            draggable
        },
        created() {
        
            if (this.isFirefox()) {
                document.body.ondrop = function (event) {
                    // 解决火狐浏览器无法获取鼠标拖拽结束的坐标问题
                    mousePosition.left = event.layerX
                    mousePosition.top = event.clientY - 50
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        },
        methods: {
            // 根据类型获取左侧菜单对象
            getMenuByType(type) {
                for (let i = 0; i < this.menuList.length; i++) {
                    let children = this.menuList[i].children;
                    for (let j = 0; j < children.length; j++) {
                        if (children[j].type === type) {
                            return children[j]
                        }
                    }
                }
            },
            // 拖拽开始时触发
            move(evt, a, b, c) {
                var type = evt.item.attributes.type.nodeValue
                console.log( this.getMenuByType(type),type)
                this.nodeMenu = this.getMenuByType(type)
            },
            // 拖拽结束时触发
            end(evt, e) {
                this.$emit('addNode', evt, this.nodeMenu, mousePosition)
            },
            // 是否是火狐浏览器
            isFirefox() {
                var userAgent = navigator.userAgent
                if (userAgent.indexOf("Firefox") > -1) {
                    return true
                }
                return false
            }
        }
    }
</script>
