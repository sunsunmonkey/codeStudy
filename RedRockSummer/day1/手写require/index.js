const path = require('path');
const vm = require('vm');
const fs = require('fs');

function MyModule(id = '') {
  this.id = id;       
  this.path = path.dirname(id);    
  this.exports = {};        
  this.filename = null;     
  this.loaded = false;  
}

MyModule.prototype.require = function (id) {
  return MyModule._load(id);
}

MyModule._cache = Object.create(null);
MyModule._extensions = Object.create(null);

MyModule._load = function (request) {    // request是我们传入的路劲参数
  const filename = MyModule._resolveFilename(request);

  // 先检查缓存，如果缓存存在且已经加载，直接返回缓存
  const cachedModule = MyModule._cache[filename];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }


  const module = new MyModule(filename);

  MyModule._cache[filename] = module;

  module.load(filename);

  return module.exports;
}

MyModule._resolveFilename = function (request) {
  const filename = path.resolve(request);  
  const extname = path.extname(request);    


  if (!extname) {
    const exts = Object.keys(MyModule._extensions);
    for (let i = 0; i < exts.length; i++) {
      const currentPath = `${filename}${exts[i]}`;


      if (fs.existsSync(currentPath)) {
        return currentPath;
      }
    }
  }

  return filename;
}

MyModule.prototype.load = function (filename) {

  const extname = path.extname(filename);


  MyModule._extensions[extname](this, filename);

  this.loaded = true;
}

MyModule._extensions['.js'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8');
  module._compile(content, filename);
}

MyModule.wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
];

MyModule.wrap = function (script) {
  return MyModule.wrapper[0] + script + MyModule.wrapper[1];
};

MyModule.prototype._compile = function (content, filename) {
  const wrapper = MyModule.wrap(content);    

  const compiledWrapper = vm.runInThisContext(wrapper, {
    filename,
    lineOffset: 0,
    displayErrors: true,
  });


  const dirname = path.dirname(filename);

  compiledWrapper.call(this.exports, this.exports, this.require, this,
    filename, dirname);
}

MyModule._extensions['.json'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8');
  module.exports = JSONParse(content);
}
const mymodule =new MyModule()
const a = mymodule.require('a.js')
console.log(a)
//大致思路
//1.判断其后缀并尝试添加.js或.json
//2.向其中注入相应参数并调用
//3.注入后的字符串放入沙盒模块vm来实现
//4.处理缓存