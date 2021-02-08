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
                        <el-input v-model="ruleForm.num"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name" class="form">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="医院" prop="hospital" class="form">
                        <el-input v-model="ruleForm.hospital"></el-input>
                    </el-form-item>
                    <el-form-item label="科室" prop="department" class="form">
                        <el-input v-model="ruleForm.department"></el-input>
                    </el-form-item>
                    <el-form-item label="简介：" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="数据上传 " prop="region">
                    <el-form-item label="上传缩略图 " class="form_1">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传原始数据 ">
                        <el-upload
                            class="upload-demo"
                            :action="url"
                            accept=".zip"
                            :data="rawData"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,上传stl+3dsaas+dcm</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mini数据 ">
                        <el-upload
                            class="upload-demo"
                            :action="url"
                            accept=".zip"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,stl+3dssas+压缩dcm+贴图</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mr眼睛数据 ">
                        <el-upload
                            class="upload-demo"
                            :action="url"
                            accept=".zip"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,3d</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传裸眼3D数据 ">
                        <el-upload
                            class="upload-demo"
                            :action="url"
                            accept=".zip"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                        >
                            <el-button size="small" type="primary">上传裸眼3D数据</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传zip文件,3d+dcm</div>
                        </el-upload>
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">添加案例</el-button>
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
                name: '',
                region: '',
                hospital: '',
                department: '', //科室
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                num: [{ required: true, message: '输入数字', trigger: 'blur' }],
                name: [{ required: true, min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                hospital: [{ required: true, message: '医院名称', trigger: 'blur' }],
                department: [{ required: true, message: '医院科室', trigger: 'blur' }]
            },
            fileList: [],
            url: 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase/DataUpload',
            rawData: ''
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
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
.form {
    width: 39vw;
    float: left;
}
.form >>> .el-input--small {
    width: 25vw;
}
</style>
