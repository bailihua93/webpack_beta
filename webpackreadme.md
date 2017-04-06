- cross-env 兼容linux和windows的NODE_ENV的差异
- npm i -D html-webpack-plugin   src目录下新建一个index.html作为template，htmlWebpackPlugins会根据这个template生成网站的index.html，同时自动写入bundle依赖
src下放一个favicon.ico作为网站的icon
- npm i -D babel-core babel-preset-latest babel-preset-stage-2 babel-runtime babel-plugin-transform-runtime babel-loader       babel相关