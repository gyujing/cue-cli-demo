<template>
    <div>
        <VueTinymce v-model="content" :height="300" :setting="setting"/>
    </div>
</template>

<script>
    import tinymce from 'tinymce'
    import VueTinymce from 'vue-tinymce'
    //样式
    import 'tinymce/skins/ui/oxide/content.min.css'
    import 'tinymce/skins/ui/oxide/skin.min.css'
    //主题
    import 'tinymce/themes/silver'
    //扩展插件
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/media'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/quickbars'
    import 'tinymce/plugins/fullscreen'
    // 引入中文包，本地化
    // import '../static/tinymce/zh_CN.js'
    export default {
        name: "TinymceDemo",
        components:{
           VueTinymce
        },
        data() {
            return {
                setting: {
                    // 富文本编辑器setting配置
                    menubar: false,
                    toolbar:
                        "undo redo | bold italic underline strikethrough | formatselect alignleft 			aligncenter alignright alignjustify | link unlink | numlist bullist |   fontselect fontsizeselect forecolor backcolor  | indent outdent | superscript subscript | removeformat  ",
                    toolbar_drawer: "sliding",
                    language_url: `../static/tinymce/zh_CN.js`,
                    language: "zh_CN",
                    height: 420,
                    branding: false
                },
                content: ""
            }

        },
        mounted() {
            tinymce.init({});
        },
    }
</script>

<style scoped>
    .editor-content{
        margin-top: 20px;
    }
</style>