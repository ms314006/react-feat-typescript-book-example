const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './dist/'),
  },
  externals: {
    react: 'react',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
};
