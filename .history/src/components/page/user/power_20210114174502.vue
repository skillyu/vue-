<template>
    <div>
        <div class="Head">
            <ul>
                <li>配置用户：{{ tableData.name }}</li>
                <li>当前登录：{{ username }}</li>
            </ul>
        </div>
        <div class="choose">
            <el-checkbox v-model="tableData.user_power.PassWordUpdate" label="修改密码" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.FreeCaseRead" label="浏览免费案例" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.FunctionPay" label="支付功能" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.FunctionPurchase" label="购买功能" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.DataSharing" label="分享数据" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.AccountPrePay" label="账户充值" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.CreditsView" label="查看积分" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.AppLogin" label="登录APP" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.MRLogin" label="登录MR眼镜" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.NakedEyeLogin" label="登录裸眼3D" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.LiveBroadCast" label="发起直播" border></el-checkbox>
            <el-checkbox v-model="tableData.user_power.RewardAccept" label="接受打赏" border></el-checkbox>
        </div>
        <div class="btn" @click="changePower">
            <el-row>
                <el-button type="primary">确认修改</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: true,
            checked2: false,
            tableData: []
        };
    },
    created() {
        //本地测试地址
        //this.com = 'http://192.168.1.118:8060/api/BMS/UM/ClassicCase/UpdateAccessConfig';
        //打包地址
        this.com = 'http://192.168.1.118:8060/api/BMS/UM/ClassicCase/UpdateAccessConfig';
        this.tableData = this.$route.query.tableData;
        console.log(this.tableData);
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        changePower() {
            console.log(this.tableData.user_power);
            this.$set(this.tableData.user_power, 'User_ID', this.tableData.user_id);
            this.$http.post(this.com, this.tableData.user_power).then(res => {
                if (res.data.bool) {
                    this.$message.success('修改成功');
                } else {
                    this.$message.success('修改失败');
                }
            });
            this.$router.push({ path: '/user_manage' });
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
.Head ul {
    list-style: none;
    display: flex;
}
.Head ul li {
    margin-right: 30px;
}
.choose {
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
}
.choose >>> .el-checkbox--small {
    width: 14%;
    margin-left: 0;
}
.choose >>> .el-checkbox.is-bordered + .el-checkbox.is-bordered {
    margin-left: 0;
}
.btn {
    margin-top: 20px;
}
</style>
