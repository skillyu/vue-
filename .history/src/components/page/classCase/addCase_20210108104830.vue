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
                            ref="upload_1"
                            :action="url"
                            :data="uploaddata.uploaddata1"
                            multiple
                            :on-success="beforeUpload"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                            name="thumbnailImg"
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
                            :on-success="beforeUpload"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false"
                            name="rawData"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">能上传zip和rar格式文件,上传stl+3dsaas+dcm</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mini数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload_3"
                            :action="url"
                            accept=".zip,.rar"
                            :data="uploaddata.uploaddata3"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-success="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                            name="miniData"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">能上传zip和rar格式文件,stl+3dssas+压缩dcm+贴图</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传mr眼睛数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload_4"
                            :action="url"
                            :data="uploaddata.uploaddata4"
                            accept=".zip,.rar"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-success="beforeRemove"
                            multiple
                            :before-upload="beforeUpload"
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">能上传zip和rar格式文件,3d</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="上传裸眼3D数据 ">
                        <el-upload
                            class="upload-demo"
                            ref="upload_5"
                            :action="url"
                            accept=".zip,.rar"
                            :data="uploaddata.uploaddata5"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-success="beforeRemove"
                            multiple
                            :limit="3"
                            :before-upload="beforeUpload"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :auto-upload="false"
                        >
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">能上传zip和rar格式文件,3d+dcm</div>
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
            case_id: '',
            url: 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase/DataUpload',
            //url: 'https://localhost:5001/api/BMS/DM/ClassicCase/AddCase/DataUpload',
            uploaddata: {
                uploaddata1: { name: 'thumbnailImg', Case_id: this.num },
                uploaddata2: { name: 'rawData', Case_id: this.num },
                uploaddata3: { name: 'miniData', Case_id: this.num },
                uploaddata4: { name: 'mrGlassData', Case_id: this.num },
                uploaddata5: { name: 'nakedEyeData', Case_id: this.num }
            }
        };
    },
    created() {
        this.com = 'http://192.168.1.118:8060/api/BMS/DM/ClassicCase/AddCase';
        //this.com = 'https://localhost:5001/api/BMS/DM/ClassicCase/AddCase';
    },
    mounted() {},
    methods: {
        submitUpload(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$refs.upload_1.submit();
                    this.$refs.upload_2.submit();
                    this.$refs.upload_3.submit();
                    this.$refs.upload_4.submit();
                    this.$refs.upload_5.submit();
                    this.$http.post(this.com, this.ruleForm).then(res => {
                        console.log(res);
                        this.case_id = res.data.data.case_id;
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
        beforeUpload() {
            this.$http.post(this.url, this.uploaddata).then(res => {
                console.log(res);
            });
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
.form >>> .el-form-item {
    width: 39vw;
    float: left;
}
.form >>> .el-input__inner {
    width: 25vw;
}
</style>
