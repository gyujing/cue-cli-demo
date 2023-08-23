const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)


const configSplit = (c) => {
  const splitOptions = c.optimization.get('splitChunks')

  splitOptions.cacheGroups = {
    ...splitOptions.cacheGroups,
    element: {
      name: 'element-ui',
      test: /[\\/]node_modules[\\/]element-ui[\\/]/,
      priority: 10,
      chunks: 'initial',
    },
  }
}

module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    // output: {
    //   filename: `js/[name].[hash].js`, // js打包文件，添加时间戳
    //   chunkFilename: `js/[name].[hash].js`,
    // }
  },
  chainWebpack(config) {
    configSplit(config)
  },
  // css: {
  //   extract: {
  //     // 修改打包后css文件名   // css打包文件，添加时间戳
  //     filename: `css/[name].[hash].css`, // 此处static/css/xxx 目录根据自己打包情况来定,我使用的就没有static一层,所以直接去掉static即可。根据自己项目决定
  //     chunkFilename: `css/[name].[hash].css`,
  //   },
  // }
}
