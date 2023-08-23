<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title" @click="goToPage('Table')">表格</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>图表</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1"  @click="goToPage('Bar')">柱形图</el-menu-item>
                    <el-menu-item index="1-2"  @click="goToPage('Line')">折线图</el-menu-item>
                    <el-menu-item index="1-3" @click="goToPage('Pie')">饼图</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title" @click="goToPage('Form')">表单</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-document"></i>
                <span slot="title" @click="goToPage('es6')">ES6</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>组件</span>
                </template>
                <el-menu-item-group>
<!--                    <el-menu-item index="4-1"  @click="goToPage('tinymce')">富文本编辑框</el-menu-item>-->
                    <el-menu-item index="4-1"><router-link :to="{ name: 'tinymce', params: {}}">富文本编辑框</router-link></el-menu-item>
<!--                    <el-menu-item index="4-2"  @click="goToPage('Line')">折线图</el-menu-item>-->
<!--                    <el-menu-item index="4-3" @click="goToPage('Pie')">饼图</el-menu-item>-->
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title" @click="goToPage('aispeech')">aispeech组件</span>
            </el-menu-item>
            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>d3图表</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="7-1"  @click="goToPage('d3Bar')">d3柱形图</el-menu-item>
               
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Left",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goToPage(name){
                this.$router.push({ name });
            }
        }
    }
</script>

<style  lang="scss" scoped>
    .left>div{
        height: 100%;
    }
    .el-menu{
        height: 100%;
    }
</style>
