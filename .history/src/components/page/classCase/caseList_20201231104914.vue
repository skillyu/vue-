<template>
    <div>
        <div class="Header">
            <p>全部案例({{ num1 }})</p>
            <p>已上传({{ num2 }})</p>
            <p>未上传({{ num3 }})</p>
        </div>
        <div class="search">
            输入搜索：
            <div><el-input label="登录名称" v-model="input" placeholder="请输入内容"> </el-input></div>
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
                <el-table-column fixed prop="date" label="ID" width="150"> </el-table-column>
                <el-table-column prop="img" label="案例图片" width="120"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
                <el-table-column prop="province" label="省份" width="120"> </el-table-column>
                <el-table-column prop="city" label="市区" width="120"> </el-table-column>
                <el-table-column prop="address" label="地址" width="300"> </el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
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
            num1: 1000,
            num2: 800,
            num3: 200,
            input: '',
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '肝胆外科',
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
            ]
        };
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
