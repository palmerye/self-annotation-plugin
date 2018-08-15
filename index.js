class BasicPlugin {
    // 在构造函数中获取用户给该插件传入的配置
    constructor(options) {
        this.selfTags = options.selfTags
    }

    // Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象
    apply(compiler) {
        compiler.plugin('run', (compilation, callback) => {
            callback()
        })

        compiler.plugin('emit', (compilation, callback) => {
            // 修改输出资源
            Object.keys(compilation.assets).map(i => {
                const _content = compilation.assets[i].source()
                
                // 注入头部私有注释
                const _self =
                `/**\n* ${this.selfTags}\n* Size: ${Buffer.byteLength(_content, 'utf8')/1000} KB\n* Date: ${Date()}\n**/\n`

                compilation.assets[i] = {
                    // 返回文件内容
                    source: () => {
                        return _self + _content
                    },
                    size: () => {
                        return Buffer.byteLength(_content, 'utf8')
                    }
                }
            })
            callback()
        })

        compiler.plugin('done', (compilation, callback) => {
            // 成功完成一次完成的编译和输出流程
            // console.log(`本次编译花费您 ${compilation.endTime - compilation.startTime} ms`)
        })
    }
}

// 导出 Plugin
module.exports = BasicPlugin;