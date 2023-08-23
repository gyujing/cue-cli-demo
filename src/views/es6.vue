<template>
    <div>
        <el-button @click="btn1Click">按钮1</el-button>
    </div>
</template>

<script>
    export default {
        name: "es6",
        data() {
            return {
            }
        },
        methods:{
            btn1Click:function () {
                // let [a, b, c] = [1, 2, 3];
                // console.log(a)
                // console.log(b)
                // console.log(c)

                // let [foo = true] = [];
                // console.log(foo) // true
                //
                // let [x, y = 'b'] = ['a']; // x='a', y='b'
                // console.log(x)
                // console.log(y)
                // let [z, j = 'b'] = ['a', undefined]; // x='a', y='b'
                // console.log(z)
                // console.log(j)

                // let [x = 1] = [undefined];// x // 1
                // let [y = 1] = [null]; //y // null
                // console.log(x)
                // console.log(y)

                //x能取到值，所以函数f根本不会执行
                // function f() {
                //     console.log('aaa');
                // }
                // let [x = f()] = [1]; //1
                // let [x = f()] = [undefined];  //执行f()
                // console.log(x)

                //Unicode 码点返回对应字符
                // console.log(String.fromCodePoint(0x20BB7))
                // "𠮷"
                // console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y')

                //includes()：返回布尔值，表示是否找到了参数字符串。
                //startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
                //endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
                let s = 'Hello world!';
                s.startsWith('Hello') // true
                s.endsWith('!') // true
                s.includes('o') // true

                //这三个方法都支持第二个参数，表示开始搜索的位置。
                let ss = 'Hello world!';

                ss.startsWith('world', 6) // true
                ss.endsWith('Hello', 5) // true
                ss.includes('Hello', 6) // false


                //repeat方法返回一个新字符串，表示将原字符串重复n次。
                'x'.repeat(3) // "xxx"
                'hello'.repeat(2) // "hellohello"
                'na'.repeat(0) // ""


                //字符串补全长度的功能
                //padStart()用于头部补全，padEnd()用于尾部补全
                'x'.padStart(5, 'ab') // 'ababx'
                'x'.padStart(4, 'ab') // 'abax'

                'x'.padEnd(5, 'ab') // 'xabab'
                'x'.padEnd(4, 'ab') // 'xaba'

                'xxx'.padStart(2, 'ab') // 'xxx'
                'xxx'.padEnd(2, 'ab') // 'xxx'

                'abc'.padStart(10, '0123456789')// '0123456abc'


                //消除字符串的空格
                const s1 = '  abc  ';

                s1.trim() // "abc"
                s1.trimStart() // "abc  "
                s1.trimEnd() // "  abc"
            }
        }
    }
</script>

<style scoped>

</style>