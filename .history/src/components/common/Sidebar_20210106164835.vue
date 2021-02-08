<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">{{
                                    threeItem.title
                                }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'user_manage',
                    title: '用户管理',
                    subs: [
                        {
                            index: 'user_manage',
                            title: '用户管理'
                        },
                        {
                            index: 'log',
                            title: '操作日志'
                        },
                        {
                            index: 'detail',
                            title: '用户详情'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'table',
                    title: '发布信息',
                    subs: [
                        {
                            index: 'form',
                            title: '官网',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '产品动态'
                                },
                                {
                                    index: 'markdown',
                                    title: '媒体报道'
                                },
                                {
                                    index: 'markdown',
                                    title: '招聘信息'
                                }
                            ]
                        },
                        {
                            index: '3-2',
                            title: '手机app',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '产品动态'
                                },
                                {
                                    index: 'markdown',
                                    title: '媒体报道'
                                },
                                {
                                    index: 'markdown',
                                    title: '招聘信息'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-copy',
                    index: 'tabs',
                    title: '数据管理',
                    subs: [
                        {
                            index: '3-2',
                            title: '经典案例',
                            subs: [
                                {
                                    index: 'caseList',
                                    title: '案例列表'
                                },
                                {
                                    index: 'addCase',
                                    title: '添加案例'
                                }
                            ]
                        },
                        {
                            index: 'from',
                            title: '人体模型',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '案例列表'
                                },
                                {
                                    index: 'markdown',
                                    title: '添加案例'
                                }
                            ]
                        },
                        {
                            index: '3-3',
                            title: '中医模型',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '案例列表'
                                },
                                {
                                    index: 'markdown',
                                    title: '添加案例'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: '3',
                    title: '财务中心',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单'
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-warn',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
