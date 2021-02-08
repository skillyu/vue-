<template>
    <div>
        <div class="Head">
            <span>删选查询</span>
            <div>查询结果></div>
        </div>
        <div class="search">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input v-model="keyword" @blur="queryData" @input="queryData" placeholder="搜索"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="List">
            <span>用户列表</span>
        </div>
        <div class="tables">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="user_id" label="用户账户" width="180"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
                <el-table-column prop="type" label="类型" width="200"> </el-table-column>
                <el-table-column prop="user_source" label="绑定设备" width="200"> </el-table-column>
                <el-table-column prop="user_credit" label="积分" width="180"> </el-table-column>
                <el-table-column prop="register_time" label="最后登录" width="200"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="280">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.$index, tableData)" type="text" size="small">查看详情</el-button>
                        <el-button @click="detailClick(scope.$index, tableData)" type="text" size="small">权限配置</el-button>
                        <el-button type="text" size="small">冻结终端</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="foot">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :page-size="10"
                    :page-count="tableData.length / 10"
                    layout="total,  prev, pager, next, jumper"
                    :total="tableData.length"
                >
                </el-pagination>
            </div>
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
            tableData: [],
            currentPage1: 1,
            checked: false,
            keyword: ''
        };
    },
    created() {
        this.com = 'http://192.168.1.118:8060/api/BMS/UM/ClassicCase/UserList';
        //this.com = 'https://122.51.121.122/api/BMS/UM/ClassicCase/UserList';
    },
    mounted() {
        this.$http
            .post(this.com, {
                jsonp: 'onBack'
            })
            .then(res => {
                console.log(res);
                this.tableData = res.data.data;
                console.log(this.tableData);
            });
    },
    methods: {
        detailClick(index) {
            this.$router.push({ path: '/power', query: { tableData: this.tableData[index] } });
        },
        handleClick(index) {
            console.log(this.tableData[index]);
            this.$router.push({ name: 'detail', params: { user_id: this.tableData[index].user_id } });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        queryData() {
            var search = this.input;
            if (this.keyword === '' || this.keyword == null) {
                console.log(this.keyword);
                return this.tableData;
            } else {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                console.log(this.tableData);

                this.timer = setTimeout(() => {
                    const result = [];
                    this.tableData.forEach(value => {
                        console.log(value);
                        if (value.user_id.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value);
                        }
                    });
                    this.tableData = result;
                }, 1000);
            }
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
.foot {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.foot button {
    padding: 3px 15px;
    margin-left: 10px;
}
.foot >>> .el-pagination {
    margin-right: -400px;
}
</style>
