const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const WorkerPlugin = require('worker-plugin');

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    [ 'yfiles']),
  },
  

});

//module.exports = {optimization: {}}
module.exports.optimization.splitChunks = {
    maxAsyncRequests: 20, // Maximum number of parallel requests when on-demand loading.
    automaticNameDelimiter: '-',
    minSize: 250000, // Minimum size, in bytes, for a chunk to be generated.
    cacheGroups: {
      default: {
        chunks: 'async',
        minChunks: 2,
        priority: 10, // Value should be less than vendor as shared application modules only should be part of default.
      },
     // vendors: false, // Turns off vendor bundles
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        maxSize: 3000000, // 3mb
        minSize: 1500000, // 1.5 mb,
        priority: 12 // Value should be between default and yfiles. As node_modules except yfiles should only be in vendor.
      },
      // yfiles: { // Breaks yfiles in multiple chunks
      //   test: /[\\/]yfiles[\\/]/,
      //   priority: 15, // Value should be more that vendor and default. This is becuase yfiles should be moved out of vendor and default chunks
      //   chunks :'async',
      //   enforce:true,
      //   maxSize: 3000000, // 3mb
      //   minSize: 1500000 // 1.5 mb
      // }
    }
};

// module.exports.module = {
//     rules: [
//       {
//         test: /\.worker\.(c|m)?ts$/i,
//         loader: "worker-loader",
//         options: {
//           chunkFilename: "[viv].[contenthash].worker.js",
//         },
//       },
//     ],
//   };


console.log(JSON.stringify(module.exports));
