var menuList = [  //数据覆盖,定义的数据类型  包含操作修改 节点出口分支
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
                        "title": "任务名称", //属性的标题
                        "type": "PTYPE_INPUT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "开始",
                        "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分"
                    },
                    {
                        "title": "任务ID", //属性的标题
                        "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "CONSTANT_START",
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务触发方式", //属性的标题
                        "type": "PTYPE_SELECTGROUP", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": 0,
                        "values": [
                            {
                                "value": 0,
                                "label": "人群定时触发",
                                'type': 'PTYPE_OLNYSHOW',
                                "children": {
                                    'title': '触发人群',
                                    'type': 'PTYPE_CROWD',
                                    'defaultValue': 1,
                                    'values': [
                                        { 'title': '复购-泰康百万医疗险', 
                                        'ID': 'f4asdsa87f9daasd76',
                                         'validity': '2020-10-12 12:00:00', 
                                         'creator': 'mark',
                                          'creationTime': '2020-12-29' },
                                        { 'title': '复购-泰康二百万医疗险', 'ID': 'f4asdsa87f9daasd76', 'validity': '2020-10-12 12:00:00', 'creator': 'mark', 'creationTime': '2020-12-29' }
                                    ],
                                    //触发时间
                                    'triggeringTime': '13:00',
                                    //触发周期
                                    'triggerCycle': { 'frequency': '每月', 'time': '2020-02-02' },
                                    "selectedList":[]
                                },
                            }, {
                                "value": 1,
                                "label": "用户行为触发",
                                'type': 'PTYPE_BEHAVIOR',
                                "children": {
                                    "title": "触发行为", //属性的标题
                                    "type": "PTYPE_BEHAVIOR", //控件的类型，详细见《属性控件定义文档》
                                    "defaultValue": 0,
                                    "values": [
                                        { 'title': 'MALL_ADD_CART_BUTTON', 'rules': [{ 'r1': '是否自营', 'r2': '自营' }, { 'r1': '加购商品sku白名单', 'r2': '奶粉.txt' }, { 'r1': '加购商品价格', 'r2': '>=', 'r3': '199' }, { 'r1': '加购商品数量', 'r2': '>=', 'r3': '3' }] },
                                        { 'title': 'MALL_IOU_BLACK_GOLD', 'rules': [{ 'r1': '', 'r2': '', 'r3': '' }] },
                                        { 'title': 'MALL_COFFERS_INNER', 'rules': [{ 'r1': '', 'r2': '', 'r3': '' }] },
                                        { 'title': 'MALL_INDEX_DISCOUNT_ICON', 'rules': [{ 'r1': '', 'r2': '', 'r3': '' }] },
                                        { 'title': 'MALL_INDEX_COUPON_ICON', 'rules': [{ 'r1': '当天点击次数', 'r2': '=', 'r3': '3' }] }
                                    ],
                                    "tips": "………………",
                                    "showInEditor": true,
                                    "selectedList":[]
                                },
                            }
                        ],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                        "showInEditor": true,
                    },
        
                    {
                        "title": "触发时间", //属性的标题
                        "type": "PTYPE_INPUT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "",
                        "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分"
                    },
                    {
                        "title": "触发周期", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": 0,
                        "values": [{'value':0,'label':"每天"}, {'value':1,'label':"每月"},{'value':2,'label':"每小时"}],
                        "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分"
                    },
                    // {
                    //     "title": "任务触发设置", //属性的标题
                    //     "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                    //     "defaultValue": "0",
                    //     "tips": "",
                    //     "children":[
                    //         {
                    //             "title": "任务名称", //属性的标题
                    //             "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                    //             "defaultValue": "条件",
                    //             "tips": "任务名称用于描述任务主要功能"
                    //         },
                    //         // {
                    //         //     "title": "任务ID", //属性的标题
                    //         //     "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                    //         //     "defaultValue": "CONSTANT_TASKID",
                    //         //     "tips": "任务ID用来唯一标识此任务"
                    //         // },
                    //         // {
                    //         //     "title": "任务触发条件", //属性的标题
                    //         //     "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                    //         //     "defaultValue": "0",
                    //         //     "values": ['定时定向', '用户行为触发'],
                    //         //     "tips": "………………",
                    //         //     "showInEditor": true
                    //         // }
                    //     ]

                    // },

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
                    // {
                    //     "title": "任务触发设置", //属性的标题
                    //     "type": "PTYPE_GROUP", //控件的类型，详细见《属性控件定义文档》
                    //     "defaultValue": "0",
                    //     "tips": "",
                    //     "children":[
                    //         {
                    //             "title": "任务名称", //属性的标题
                    //             "type": "PTYPE_TEXT", //控件的类型，详细见《属性控件定义文档》
                    //             "defaultValue": "条件",
                    //             "tips": "任务名称用于描述任务主要功能"
                    //         },
                    //         {
                    //             "title": "任务ID", //属性的标题
                    //             "type": "PTYPE_LABEL", //控件的类型，详细见《属性控件定义文档》
                    //             "defaultValue": "CONSTANT_TASKID",
                    //             "tips": "任务ID用来唯一标识此任务"
                    //         },
                    //         {
                    //             "title": "任务触发条件", //属性的标题
                    //             "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                    //             "defaultValue": "0",
                    //             "values": ['定时定向', '用户行为触发'],
                    //             "tips": "………………",
                    //             "showInEditor": true
                    //         }
                    //     ]

                    // },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                        "showInEditor": true
                    },
                    {
                        "title": "任务重入", //属性的标题
                        "type": "PTYPE_SWITCH", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": false,
                        "tips": "任务ID用来唯一标识此任务"
                    },
                    {
                        "title": "任务频控", //属性的标题
                        "type": "PTYPE_SWITCH", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": false,
                        "tips": "任务ID用来唯一标识此任务"
                    },
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
                        "children": [
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
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
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
                        "children": [
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
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                        "showInEditor": true
                    }
                ]
            }, {
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
                        "children": [
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
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
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
                        "children": [
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
                                "defaultValue": "定时定向",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
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
                        "children": [
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
                                "defaultValue": "定时定向",
                                "values": ['定时定向', '用户行为触发'],
                                "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                                "showInEditor": true
                            }
                        ]

                    },
                    {
                        "title": "任务触发条件", //属性的标题
                        "type": "PTYPE_SELECT", //控件的类型，详细见《属性控件定义文档》
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
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
                        "children": [
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
                        "defaultValue": "定时定向",
                        "values": ['定时定向', '用户行为触发'],
                        "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                        "showInEditor": true
                    }
                ]
            },
        ]
    }
]
export default menuList