# iconfont-json
生成iconfont.json文件，用于react-native的图标字体配置

# Get Start
Install 
```sh
npm i iconfont-json
# or
yarn add iconfont-json
```


生成json文件

```sh
iconfont [ iconfont.ttf ] [ jsonfile.json ]
```

或者配置到 **package.json** 文件的 scripts 命令中

```javascript
  "scripts": {
    "iconfont": "iconfont src/assets/fonts/iconfont.ttf src/Components/IconFont/iconfont.json",
    ...
  }
```

如果需要再代码中使用,也可以直接引入

```javascript
var Iconfont = require("iconfont-json");

var iconfont = new Iconfont()
// 导出json
iconfont.export_json("iconfont.ttf","iconfont.json")
```


# License
MIT License