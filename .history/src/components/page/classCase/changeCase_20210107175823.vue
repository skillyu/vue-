<template>
    <div>
        <div class="Head">
            <span>添加案例</span>
            <div>返回></div>
        </div>
        <div class="body">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="body_top">
                    <el-form-item label="案例ID " prop="ID" class="form">
                        <el-input v-model="tableData.case_id"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name" class="form">
                        <el-input v-model="tableData.case_name"></el-input>
                    </el-form-item>
                    <el-form-item label="医院" prop="hospital" class="form">
                        <el-input v-model="tableData.hospital"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="department" class="form">
                        <el-input v-model="tableData.department"></el-input>
                    </el-form-item>
                    <el-form-item label="简介：" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="数据上传 " prop="region">
                    <el-form-item label="上传缩略图 " class="form_1">
                        <el-upload
                            class="upload-demo"
                            ref="upload_1"
                            :action="url"
                            :data="uploaddata.uploaddata1"
                            multiple
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传原始数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload_2"
                            :data="uploaddata.uploaddata2"
                            :action="url"
                            accept=".zip,.rar"
                            multiple
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">能上传zip和rar格式文件,上传stl+3dsaas+dcm</div>
                        </el-upload>
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitUpload('ruleForm')">添加案例</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                ID: '',
                num: '',
                name: '',
                region: '',
                hospital: '',
                department: '', //科室
                type: [],
                resource: '',
                desc: ''
            },
            rules: {},
            fileList: [],
            tableData: [],
            url: 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase/DataUpload',
            uploaddata: {
                uploaddata1: { rawData: 'thumbnailImg', Case_id: this.num },
                uploaddata2: { rawData: 'rawData', Case_id: this.num }
            }
        };
    },
    created() {
        this.tableData = this.$route.query.tableData;
        console.log(this.tableData);
        this.com = 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase';
    },
    methods: {
        submitUpload(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$refs.upload_1.submit();
                    this.$refs.upload_2.submit();
                    this.$http.post(this.com, this.ruleForm, this.uploaddata).then(res => {
                        console.log(res);
                        if (res.data.bool) {
                            alert('上传成功!');
                        } else {
                            alert('添加失败哦');
                            return false;
                        }
                    });
                } else {
                    alert('添加失败哦');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
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
}
/* 上传部分 */
.body >>> .el-upload--text {
    height: 30px;
}
.body_top {
    width: 100%;
}
.form >>> .el-input--small {
    width: 25vw;
}
</style>
