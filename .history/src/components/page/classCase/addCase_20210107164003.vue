<template>
    <div>
        <div class="Head">
            <span>添加案例</span>
            <div>返回></div>
        </div>
        <div class="body">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <div class="body_top">
                    <el-form-item label="案例ID " prop="num" class="form">
                        <el-input v-model="ruleForm.case_id"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="case_name" class="form">
                        <el-input v-model="ruleForm.case_name"></el-input>
                    </el-form-item>
                    <el-form-item label="医院" prop="hospital" class="form">
                        <el-input v-model="ruleForm.hospital"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="department" class="form">
                        <el-input v-model="ruleForm.department"></el-input>
                    </el-form-item>
                    <el-form-item label="简介：" prop="introduction">
                        <el-input type="textarea" v-model="ruleForm.introduction"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="数据上传 " prop="region">
                    <el-form-item label="上传缩略图 " class="form_1">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            :action="url"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload1"
                                >上传到服务器</el-button
                            >
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传原始数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            :data="uploaddata2"
                            :action="url"
                            accept=".zip"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,上传stl+3dsaas+dcm</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mini数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            :action="url"
                            accept=".zip"
                            :data="uploaddata3"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,stl+3dssas+压缩dcm+贴图</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mr眼睛数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            :action="url"
                            :data="uploaddata4"
                            accept=".zip"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,3d</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传裸眼3D数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            :action="url"
                            accept=".zip"
                            :data="uploaddata5"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,3d+dcm</div>
                        </el-upload>
                    </el-form-item>
                    <el-button size="small" type="success" @click="submitUpload('ruleForm')">添加案例</el-button>
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
                num: '',
                case_name: '',
                hospital: '',
                department: '',
                introduction: ''
            },
            rules: {
                num: [],
                name: [{ required: true, min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
                hospital: [{ required: true, message: '医院名称', trigger: 'blur' }],
                department: [{ required: true, message: '医院科室', trigger: 'blur' }]
            },
            fileList: [],
            url: 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase/DataUpload',
            uploaddata1: { rawData: 'thumbnailImg', Case_id: this.num },
            uploaddata2: { rawData: 'rawData', Case_id: this.num },
            uploaddata3: { rawData: 'miniData', Case_id: this.num },
            uploaddata4: { rawData: 'mrGlassData', Case_id: this.num },
            uploaddata5: { rawData: 'nakedEyeData', Case_id: this.num }
        };
    },
    created() {
        this.com = 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase';
    },
    mounted() {},
    methods: {
        submitUpload(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$refs.upload.submit();
                    this.$http.post(this.com, this.ruleForm).then(res => {
                        console.log(res);
                    });
                    alert('submit!');
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
        },
        submitUpload1() {
            this.$refs.upload.submit();
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
.form >>> .el-form-item {
    width: 39vw;
    float: left;
}
.form >>> .el-input__inner {
    width: 25vw;
}
</style>
