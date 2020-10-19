var menuList=[  //数据覆盖,定义的数据类型  包含操作修改 节点出口分支
    {
        id: '1',
        type: 'group',
        name: '开始节点',
        ico: 'el-icon-video-play',
        img: "start",
        open: true,
        children: [
            {
                'id': '2',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_START', //每种控件类型的唯一ID
                "caption": '开始', //控件图标旁边展示的控件名称
                "image": "start.png", //控件图标
                "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_START",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            }
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
                'id': '2',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_CONDITION', //每种控件类型的唯一ID
                "caption": '条件分支', //控件图标旁边展示的控件名称
                "image": "条件分支.png", //控件图标
                "info": "用来判断是否满足某个或者某一组条件", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                   
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "条件",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            }, {
                'id': '3',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_NOTE', //每种控件类型的唯一ID
                "caption": '短信', //控件图标旁边展示的控件名称
                "image": "短信.png", //控件图标
                "info": "向目标发送短信", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                   
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            },
            {
                'id': '4',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_A/B', //每种控件类型的唯一ID
                "caption": 'A/B', //控件图标旁边展示的控件名称
                "image": "AB测试.png", //控件图标
                "info": "按照不同百分比分流", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            },   {
                'id': '5',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_WAIT', //每种控件类型的唯一ID
                "caption": '等待', //控件图标旁边展示的控件名称
                "image": "wait.png", //控件图标
                "info": "执行挂起，等待一定时间后执行", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            },
            {
                'id': '6',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_RECOMMENT', //每种控件类型的唯一ID
                "caption": '推荐', //控件图标旁边展示的控件名称
                "image": "推荐.png", //控件图标
                "info": "推荐任务", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            }, {
                'id': '7',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_PUSH', //每种控件类型的唯一ID
                "caption": 'Push', //控件图标旁边展示的控件名称
                "image": "push.png", //控件图标
                "info": "添加", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
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
                'id': '7',
                // 自定义覆盖样式
                "nodeTypeID": 'NID_END', //每种控件类型的唯一ID
                "caption": '结束', //控件图标旁边展示的控件名称
                "image": "stop.png", //控件图标
                "info": "结束流程", //描述控件的作用
                "parameters": [ //该控件属性栏的属性列表
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_TASKID",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能"
                    },
                    {
                        "title": "任务触发设置", //属性的标题
                        "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "tips": "",
                        "children":[
                            {
                                "title": "任务名称", //属性的标题
                                "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "条件",
                                "tips": "任务名称用于描述任务主要功能"
                            },
                            {
                                "title": "任务ID", //属性的标题
                                "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "CONSTANT_TASKID",
                                "tips": "任务ID用来唯一标识此任务"
                            },
                            {
                                "title": "任务触发条件", //属性的标题
                                "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                                "defaultValue": "0",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "………………",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "0",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "………………",
                        "showInEditor": true
                    }
                ]
            },
        ]
    }
]
export default menuList