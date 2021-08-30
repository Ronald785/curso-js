const path = require('path'); // Node usa CommonJs como sistema de módulo 

//Todo arquivo Js no Node é um módulo específico 
//Se não exportar não é possível utilizar fora desse arquivo

module.exports = {
    //mode: 'production' //Arquivo em uma linha
    mode: 'development', //Arquivo é gerado mais rápido e não é minificado(script em uma linha)
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //resolve o caminho absoluto em qualquer SO
        filename: 'bundle.js' //Arquivo que contém todos os arquivos da aplicação
    }, //Antes de retornar o bundle passar o código do webpack pelo babel
    module: {
        rules: [{
            exclude: /node_modules/, //Expressar regular para o webpack não analisar a pasta node
            test: /\.js$/, //Analisa os arquivos que terminam com .js
            use: {
                loader: 'babel-loader',
                options: { 
                    presets: ['@babel/env']
                }
            }
        }]
    }, 
    devtool: 'source-map' //Mapeia o código, porque o bundle é diferente do arquivo original
};