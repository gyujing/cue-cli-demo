<template>
    <div id="line"   style="width: 600px;height: 400px;">
        <button class="btn2">按钮</button>
    </div>
</template>

<script>
import Button from '@/components/Button/index.vue'
    export default {
        name: "Line1",
        components:{Button}
    }
</script>

<style lang="scss">
.btn2{
  width: 100px;
  height: 60px;
  background: beige;
}

</style>
