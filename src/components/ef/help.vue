<template>
    <el-dialog
            title="帮助"
            :visible.sync="dialogVisible"
            width="70%"
            customClass="flowHelp"
    >
        <el-tabs tab-position="left">
     
            <el-tab-pane label="如何进行后端交互存储">
                <el-divider content-position="left">如何进行后端交互存储</el-divider>
                <!-- <div>参考: https://gitee.com/xiaoka2017/easy-flow-sdk</div> -->
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        components: {},
        methods: {
            init() {
                this.dialogVisible = true
            }
        }
    }
</script>

<style>
    .flowHelp {
        height: 80%;
    }
</style>
