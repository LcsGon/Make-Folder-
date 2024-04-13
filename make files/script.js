const fs = require('fs');
const path = require('path');

const pastas = ['css', 'html', 'js', 'assets', 'img', 'php'];

pastas.forEach(arquivo => {
    fs.mkdirSync(arquivo, { recursive: true });

    switch (arquivo) {
        case 'css':
            const stylePath = path.join('.', arquivo, 'style.' + arquivo);
            fs.writeFileSync(stylePath, '');
            
            const resetPath = path.join('.', arquivo, 'reset.' + arquivo);
            fs.writeFileSync(resetPath, '@charset "UTF-8";\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 100%;\n    font-family: system-ui;\n}\n');
            break;
        
        case 'html':
            const htmlPath = path.join('.', arquivo, 'index.' + arquivo);
            fs.writeFileSync(htmlPath, `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <title>Document</title>
</head>
<body>
    <script src="../js/script.js"></script>
</body>
</html>\n`);
            break;
        
        case 'js':
            const jsPath = path.join('.', arquivo, 'script.' + arquivo);
            fs.writeFileSync(jsPath, '');
            break;
        
        case 'php':
            const phpPath = path.join('.', arquivo, 'script.' + arquivo);
            fs.writeFileSync(phpPath, '');
            break;
        
        default:
            break;
    }
});

console.log('Arquivos e Diretórios Criados com Sucesso !');
