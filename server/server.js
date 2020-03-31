const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config');
const compiler = webpack(config);
const Port = process.env.NODE_PORT || 4000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}))

app.listen(Port, function(){
    console.log(`App running on port ${Port}`);
})