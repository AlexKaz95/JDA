
  const path=require("path"),HtmlWebpackPlugin=require("html-webpack-plugin"),{CleanWebpackPlugin:CleanWebpackPlugin}=require("clean-webpack-plugin"),webpack=require("webpack"),
  
  entryPoint="./src/main.ts";

  module.exports={entry: entryPoint ,output:{publicPath:"",path:path.resolve(__dirname,"./dist"),filename:"[name].bundle.js"},mode:"development",devServer:{historyApiFallback:!0,static:{directory:path.resolve(__dirname,"./dist/")},open:!0,compress:!0},plugins:[new HtmlWebpackPlugin({title:"webpack Boilerplate",template:path.resolve(__dirname,"./src/index.html"),filename:"index.html",inject:"body"}),new CleanWebpackPlugin,new webpack.HotModuleReplacementPlugin],module:{rules:[{test:/\.js$/,exclude:/node_modules/,use:["babel-loader"]},{test:/\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,use:["base64-inline-loader"]},{test:/\.tsx?$/,use:"ts-loader",exclude:/node_modules/}]},resolve:{extensions:[".tsx",".ts",".js"]}};

