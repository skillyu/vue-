<template>
    <div>
        <div class="Head">
            <ul>
                <li>配置用户：{{ user }}</li>
                <li>当前登录：{{ loading }}</li>
            </ul>
        </div>
        <div class="choose">
            <el-checkbox v-model="checked1" label="修改密码" border></el-checkbox>
            <el-checkbox v-model="checked2" label="浏览免费案例" border></el-checkbox>
            <el-checkbox v-model="checked2" label="支付功能" border></el-checkbox>
            <el-checkbox v-model="checked2" label="购买功能" border></el-checkbox>
            <el-checkbox v-model="checked2" label="分享数据" border></el-checkbox>
            <el-checkbox v-model="checked2" label="账户充值" border></el-checkbox>
            <el-checkbox v-model="checked2" label="查看积分" border></el-checkbox>
            <el-checkbox v-model="checked2" label="登录APP" border></el-checkbox>
            <el-checkbox v-model="checked2" label="登录MR眼镜" border></el-checkbox>
            <el-checkbox v-model="checked2" label="登录裸眼3D" border></el-checkbox>
            <el-checkbox v-model="checked2" label="发起直播" border></el-checkbox>
            <el-checkbox v-model="checked2" label="接受打赏" border></el-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: 'wang',
            loading: 'admin',
            checked1: true,
            checked2: false
        };
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
</style>