<template>
    <div>
        <div class="Header">
            <p>全部案例({{ num1 }})</p>
            <p>已上传{{ num2 }}</p>
            <p>未上传{{ num3 }}</p>
        </div>
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

<style></style>
