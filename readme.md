# self annotation plugin

![webpack](https://img.shields.io/badge/webpack-3.x.x-brightgreen.svg)

> This is a plugin of webpack 3.x.x, add self annotation to every file from output files of webpack.

## install 

```
npm i self-annotation-plugin -D
```

## use 

```
new SelfPlugin({
    selfTags: 'Author: palmerye'
})
```

## result

```
/**
* Author: palmerye
* Size: 2.888 KB
* Date: Wed Aug 15 2018 16:30:51 GMT+0800 (中国标准时间)
**/
```
