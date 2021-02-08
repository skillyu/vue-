<template>
    <div>
        <div class="Head">
            <span>删选查询</span>
            <div>查询结果></div>
        </div>
        <div class="body_top">
            <div class="demo-image__placeholder">
                <div class="block">
                    <el-image :src="src"></el-image>
                </div>
            </div>
            <div>
                <div class="user">
                    <div></div>
                    <div>
                        <ul>
                            <li class="table_1">账号</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                    <div class="user_right">
                        <ul>
                            <li class="table_1">用户类型</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                </div>
                <div class="user">
                    <div>
                        <ul>
                            <li class="table_1">姓名</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                    <div class="user_right">
                        <ul>
                            <li class="table_1">个人说明</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                </div>
                <div class="user">
                    <div>
                        <ul>
                            <li class="table_1">电话</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                    <div class="user_right">
                        <ul>
                            <li class="table_1">注册时间</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                </div>
                <div class="user">
                    <div>
                        <ul>
                            <li class="table_1">城市</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                    <div class="user_right">
                        <ul>
                            <li class="table_1">用户来源</li>
                            <li class="table_2">{{ message.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="message">
            <span>统计信息</span>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="消费金额" width="180"> </el-table-column>
                <el-table-column prop="name" label="订单数量" width="180"> </el-table-column>
                <el-table-column prop="address" label="可用积分"> </el-table-column>
                <el-table-column prop="date" label="登录次数" width="180"> </el-table-column>
                <el-table-column prop="name" label="优惠券" width="180"> </el-table-column>
                <el-table-column prop="address" label="商品评价"> </el-table-column>
                <el-table-column prop="address" label="退货记录"> </el-table-column>
            </el-table>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="发起直播" width="180"> </el-table-column>
                <el-table-column prop="name" label="粉丝" width="180"> </el-table-column>
                <el-table-column prop="address" label="收到打赏"> </el-table-column>
                <el-table-column prop="date" label="参与话题" width="180"> </el-table-column>
                <el-table-column prop="name" label="发帖数" width="180"> </el-table-column>
                <el-table-column prop="address" label="收藏评价"> </el-table-column>
                <el-table-column prop="address" label="邀请好友"> </el-table-column>
            </el-table>
        </div>
        <div>
            <span>订单记录</span>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="date" label="订单编号" width="100"> </el-table-column>
                <el-table-column prop="data" label="提交时间" width="160"> </el-table-column>
                <el-table-column prop="name" label="用户账号" width="160"> </el-table-column>
                <el-table-column prop="price" label="订单金额" width="120"> </el-table-column>
                <el-table-column prop="label" label="支付方式" width="160"> </el-table-column>
                <el-table-column prop="sort" label="订单来源" width="80"> </el-table-column>
                <el-table-column prop="loading" label="订单状态" width="100"> </el-table-column>
                <el-table-column prop="sale" label="生效时间" width="100"> </el-table-column>
                <el-table-column prop="sale" label="失效时间" width="100"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">日志</el-button>
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
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            message: {
                name: 'wang'
            },
            tableData: []
        };
    },
    created() {
        this.com = 'http://192.168.1.118:8060/api/BMS/UM/ClassicCase/UserDetailsInfo';
        //this.tableData = this.$route.params;
        console.log(this.tableData);
    },
    mounted() {
        this.$http
            .post(this.com, {
                jsonp: 'onBack'
            })
            .then(res => {
                console.log(res);
            });
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
.block {
    width: 240px;
    height: 240px;
}
.body_top {
    display: flex;
}
.user {
    display: flex;
}
.user ul {
    width: 20vw;
    list-style: none;
    display: flex;
}
.table_1 {
    width: 40%;
    height: 40px;
    background-color: rgba(228, 228, 228, 1);
    text-align: center;
    line-height: 40px;
    border: 1px solid;
    margin: 0 -1px -1px 0;
}
.table_2 {
    width: 60%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid;
    border-collapse: collapse;
    margin: 0 -1px -1px 0;
}
.user_right {
    float: left;
}
</style>
