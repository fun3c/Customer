<template>
    <div class="flow-menu" ref="tool">
        <div  v-for="menu  in  menuList" :key="menu.id">
            <span v-if="menu && menu.name!=='开始节点'" class="ef-node-pmenu" @click="menu.open = !menu.open"><i :class="{'el-icon-caret-bottom': menu.open,'el-icon-caret-right': !menu.open}"></i>&nbsp;{{menu.name}}</span>
            <ul v-if="menu && menu.name!=='开始节点'" v-show="menu.open" class="ef-node-menu-ul">
                <draggable class="drag-box" @end="end" @start="move" v-model="menu.children" :options="draggableOptions">
                    <li  v-for="subMenu in menu.children" :class="'ef-node-menu-li '+ subMenu.nodeTypeID"  :key="subMenu.id" :type="subMenu.nodeTypeID">
                        <img 
                              style="width: 50px; height: 50px"
                             :src="require('@/assets/'+subMenu.image)" 
                             alt="">
                             <span> {{subMenu.caption}} </span>
                    </li>
                </draggable>
            </ul>
        </div>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import menuList from "./group"
    var mousePosition = {
        left: -1,
        top: -1
    }

    export default {
        data() {
            return {
                activeNames: '1',
              
                draggableOptions: {
                    preventOnFilter: false,
                    sort: false,
                    disabled: false,
                    ghostClass: 'tt',
                    forceFallback: true,
                    // 拖拽的时候样式
                    // fallbackClass: 'flow-node-draggable'
                },
                // 默认打开的左侧菜单的id
                defaultOpeneds: ['1', '2','3'],
                menuList: menuList,
                nodeMenu: {}
            }
        },
        components: {
            draggable
        },
        created() {
        
            if (this.isFirefox()) {
                document.body.ondrop = function (event) {
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
                        if (children[j].nodeTypeID === type) {
                            return children[j]
                        }
                    }
                }
            },
            // 拖拽开始时触发
            move(evt, a, b, c) {
                var type = evt.item.attributes.type.nodeValue
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
<style>
.ef-node-pmenu{
    width: 100%;
    padding-left: 0;
}
</style>
