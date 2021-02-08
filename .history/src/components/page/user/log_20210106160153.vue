<template>
    <div>
        <div class="Head">
            <span>筛选查询</span>
            <div>查询结果</div>
        </div>
        <div class="search">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div class="List">
            <span>用户列表</span>
        </div>
        <div class="table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="account" label="操作编号" width="240"> </el-table-column>
                <el-table-column prop="name" label="操作账号" width="240"> </el-table-column>
                <el-table-column prop="data" label="操作日期" width="240"> </el-table-column>
                <el-table-column prop="ip" label="IP地址" width="240"> </el-table-column>
                <el-table-column prop="equ" label="登录设备" width="240"> </el-table-column>

                <el-table-column fixed="right" label="操作" width="400">
                    <template slot-scope="">
                        <el-button type="text" size="small">修改密码</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="foot">
            <div>
                <el-checkbox v-model="checked">全选</el-checkbox>
                <button>清除</button>
                <button>确定</button>
            </div>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            >
            </el-pagination>
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
            ],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            checked: false
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
.table >>> .el-table th {
    text-align: center;
}
.table >>> .el-table td {
    text-align: center;
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
</style>
