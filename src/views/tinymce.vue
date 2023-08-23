<template>
  <div class="components-container">
    <div class="editor-content">
      <tinymce v-model="content" :height="300" lazy/>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content: ``
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}
</style>

