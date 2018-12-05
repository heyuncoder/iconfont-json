const opentype = require('opentype.js')
const fs = require('fs');

let Iconfont = function(){
}

Iconfont.prototype.export_json = function(fontpath,output){
  if(!fontpath) throw Error('font path is required.')
  output=output||'iconfont.json'
  const font = opentype.loadSync(fontpath);
  let data = {}
  for (const key in font.glyphs.glyphs) {
    const item = font.glyphs.glyphs[key];
    if(item&&item.name&&item.unicode){
      data[item.name]=item.unicode
    }
  }
  
  fs.writeFile(output, JSON.stringify(data, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + output);
    }
  });
}

module.exports = Iconfont
