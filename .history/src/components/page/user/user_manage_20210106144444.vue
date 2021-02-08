<template>
    <div>
        <div class="Head">
            <span>删选查询</span>
            <div>查询结果></div>
        </div>
        <div class="search">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input v-model="formInline.user" placeholder="搜索"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="List">
            <span>用户列表</span>
        </div>
        <div class="tables">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="account" label="用户账户" width="180"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
                <el-table-column prop="type" label="类型" width="200"> </el-table-column>
                <el-table-column prop="equ" label="绑定设备" width="200"> </el-table-column>
                <el-table-column prop="integral" label="积分" width="180"> </el-table-column>
                <el-table-column prop="last_sign" label="最后登录" width="200"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="320">
                    <template slot-scope="scope">
                        <router-link to="/detail">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                        </router-link>
                        <router-link to="/power">
                            <el-button type="text" size="small">权限配置</el-button>
                        </router-link>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">冻结终端</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            },
            value: '肝胆外科',
            tableData: [
                {
                    account: 'wang',
                    name: '王小虎',
                    type: '上海',
                    equ: '普陀区',
                    integral: '上海市普陀区金沙江路 1518 弄',
                    last_sign: 200333
                },
                {
                    account: 'wang',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                {
                    account: 'wang',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                {
                    account: 'wang',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
            ]
        };
    },
    created() {
        this.com = 'http://xxx/api/BMS/UM/ClassicCase/GetAccessConfig';
    },
    mounted() {
        this.$http
            .post(this.com, {
                jsonp: 'onBack'
            })
            .then(res => {
                this.tableData = res.data.data;
                console.log(this.tableData);
            });
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    }
};
</script>

<style scoped>
.Head {
    width: 100%;
    height: 60px;
    background-color: rgba(228, 228, 228, 1);
    line-height: 60px;
    margin-bottom: 20px;
}
.Head div {
    width: 80px;
    height: 30px;
    float: right;
    border: 1px solid rgba(204, 204, 204, 1);
    text-align: center;
    line-height: 30px;
    margin: 15px 20px;
    padding: 0 10px;
}
.Header p {
    display: inline-block;
    width: 140px;
    height: 100xp;
    margin-right: 20px;
    border: 1px solid #999999;
    text-align: center;
    color: rgb(102, 102, 102);
}
.search {
    display: flex;
    justify-content: left;
    margin-top: 20px;
}
.search div {
    margin-right: 20px;
}
.List {
    margin-top: 20px;
}
.tables >>> .el-button--small {
    padding: 10px 0;
}
</style>
