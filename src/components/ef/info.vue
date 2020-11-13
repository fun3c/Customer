<template>
    <el-dialog
            title="流程数据信息"
            :visible.sync="dialogVisible"
            width="70%"
    >

        <br/>
        <!--一个高亮显示的插件-->
        <codemirror
                :value="flowJsonData"
                :options="options"
                class="code"
        ></codemirror>
    </el-dialog>
</template>

<script>
    import { v4 as uuidv4 } from 'uuid';
    import 'codemirror/lib/codemirror.css'
    import { codemirror } from 'vue-codemirror' //生成数据展示演示器
    require("codemirror/mode/javascript/javascript.js")

    export default {
        props: {
            data: Object,
        },
        data() {
            return {
                dialogVisible: false,
                flowJsonData: {},
                options: {
                    mode: {name: "javascript", json: true},
                    lineNumbers: true
                }
            }
        },
        components: {
            codemirror
        },
        methods: {
            init() {
                this.data.nodeList.forEach(node => {
                    const fixedOutput = node.output.fixedOutput;
                    fixedOutput.forEach(opt => {
                        console.log('opt.pid', opt.pid)
                    })
                });
                this.dialogVisible = true
                this.flowJsonData = JSON.stringify(this.data, null, 4).toString()
            }
        }
    }
</script>
