module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/lib',
        filename: 'index.js',
        library: 'react-image-lazy-prefetch',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };