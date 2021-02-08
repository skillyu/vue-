<template>
    <div>
        <div class="Header">
            <p>全部案例({{ tableData.length }})</p>
            <p>已上传({{ num2 }})</p>
            <p>未上传({{ num3 }})</p>
        </div>
        <div class="search">
            输入搜索：
            <div><el-input label="登录名称" v-model="input" placeholder="案例名称/ID"> </el-input></div>
            <div>
                案例分类：<el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </div>
        </div>
        <div class="List">
            <span>数据列表</span>
            <div>
                <button>修改基本信息</button>
                <button>修改数据</button>
            </div>
        </div>
        <div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="case_id" label="ID" width="140"> </el-table-column>
                <el-table-column prop="img" label="案例图片" width="160"> </el-table-column>
                <el-table-column prop="case_name" label="姓名" width="160"> </el-table-column>
                <el-table-column prop="price" label="价格" width="140"> </el-table-column>
                <el-table-column prop="label" label="标签" width="160"> </el-table-column>
                <el-table-column prop="sort" label="排序" width="140"> </el-table-column>
                <el-table-column prop="download_count" label="下载数" width="140"> </el-table-column>
                <el-table-column prop="sales" label="销量" width="140"> </el-table-column>
                <template slot-scope="scope">
                    <el-table-column prop="review_status" label="审核状态" width="120"> </el-table-column>
                </template>
                <el-table-column fixed="right" label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click.native.prevent="editRow(scope.$index, tableData)" type="text" size="small">编辑</el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">日志</el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
        return {
            num2: 800,
            num3: 200,
            input: '',
            options: [
                {
                    value: '选项1',
                    label: '肝胆外科'
                },
                {
                    value: '选项2',
                    label: '泌尿'
                },
                {
                    value: '选项3',
                    label: '心胸'
                },
                {
                    value: '选项4',
                    label: '头颈'
                },
                {
                    value: '选项5',
                    label: '神经外科'
                }
            ],
            value: '肝胆外科',
            tableData: []
        };
    },
    created() {
        this.com = 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/CasesList';
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
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        editRow(index) {
            this.$router.push({ path: '/changeCase', query: { tableData: this.tableData[index] } });
        }
    }
};
</script>

<style scoped>
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
    height: 40px;
    width: 100%;
    background: rgba(228, 228, 228, 1);
    line-height: 40px;
    margin-top: 20px;
}
.List div {
    float: right;
}
.List div button {
    margin-right: 20px;
    padding: 2px 8px;
}
</style>
