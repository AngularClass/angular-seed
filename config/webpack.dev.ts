const {
  HotModuleReplacementPlugin,
  DefinePlugin,
  optimize: {
    CommonsChunkPlugin
  }
} = require('webpack');

const ProgressPlugin = require('webpack/lib/ProgressPlugin.js');

const {ForkCheckerPlugin} = require('awesome-typescript-loader');
const path = require('path');

// update WebpackConfig type definition below and send a Pull-Request
function webpackConfig(options: EnvOptions = {}): WebpackConfig {

  const CONSTANTS = {
    ENV: JSON.stringify(options.ENV),
    HMR: options.HMR,
    PORT: 3000,
    HOST: 'localhost'
  };

  return {
    cache: true,
    // devtool: 'hidden-source-map',
    // devtool: 'source-map',
    devtool: 'cheap-module-eval-source-map',


    entry: {
      polyfills: './src/polyfills',
      vendor:    './src/vendor',
      main:      './src/main.browser'
    },

    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      loaders: [
        // Support for .ts files.
        { test: /\.ts$/,   loader: 'ts-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.html/,  loader: 'raw-loader' },
        { test: /\.css$/,  loader: 'raw-loader' },
      ]
    },


    plugins: [
      new HotModuleReplacementPlugin(),
      new ForkCheckerPlugin(),
      new CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
      new DefinePlugin(CONSTANTS),
      new ProgressPlugin({})
    ],

    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },

    devServer: {
      contentBase: './src',
      port: CONSTANTS.PORT,
      hot: CONSTANTS.HMR,
      inline: CONSTANTS.HMR,
      historyApiFallback: true
    },

    node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  };
}


// Export
module.exports = logOptions(webpackConfig);






function logOptions(fn) {
  return (options: EnvOptions = {}) => {
    console.log('Env Options: ', JSON.stringify(options, null, 2));
    return fn(options);
  };
}

// Types
type Entry = Array<string> | Object;

type Output = Array<string> | {
  path: string,
  filename: string
};

type EnvOptions = any;

interface WebpackConfig {
  cache?: boolean;
  target?: string;
  devtool?: string;
  entry: Entry;
  output: any;
  module?: {
    loaders?: Array<any>
  };
  plugins?: Array<any>;
  resolve?: {
    extensions?: Array<string>;
  };
  devServer?: {
    contentBase?: string;
    port?: number;
    historyApiFallback?: boolean;
    hot?: boolean;
    inline?: boolean;
  };
  node?: {
    process?: boolean;
    global?: boolean;
    Buffer?: boolean;
    crypto?: string | boolean;
    module?: boolean;
    clearImmediate?: boolean;
    setImmediate?: boolean
    clearTimeout?: boolean;
    setTimeout?: boolean
  };
}
