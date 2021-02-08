<template>
    <div>
        <div class="Header">
            <p>全部案例({{ num1 }})</p>
            <p>已上传({{ num2 }})</p>
            <p>未上传({{ num3 }})</p>
        </div>
        <div>输入搜索：<el-input v-model="input" placeholder="请输入内容"></el-input></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 1000,
            num2: 800,
            num3: 200
        };
    }
};
</script>

<style scoped>
.Header p {
    display: inline-block;
    width: 140px;
    height: 100xp;
    margin-left: 20px;
    border: 1px solid #999999;
    text-align: center;
    color: rgb(102, 102, 102);
}
</style>
