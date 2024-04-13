<?php

$pastas = ['css','html','js','assets','img','php','git'];

foreach($pastas as $arquivo){
    
mkdir($arquivo,0777,true);

switch ($arquivo) {

case 'css':
$path = "./"."$arquivo"."/style.".$arquivo;
$file1 = fopen($path,'w');

$path = "./"."$arquivo"."/reset.".$arquivo;
$file2 = fopen($path,'w');
fwrite($file2,

'@charset "UTF-8";

*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-size: 100%;
font-family: system-ui;

}');
fclose($file2);
break;

case 'html':
$path = "./"."$arquivo"."/index.".$arquivo;
$file = fopen($path,'w');
fwrite($file,

'<!DOCTYPE html>
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
</html>');
fclose($file);
break;

case 'js':
$path = "./"."$arquivo"."/script.".$arquivo;
$file = fopen($path,'w');
fclose($file);
break;

case 'php':
$path = "./"."$arquivo"."/script.".$arquivo;
$file = fopen($path,'w');
fclose($file);
break;

case 'git':
    $path = "./"."$arquivo"."/script.".$arquivo;
    $file = fopen($path,'w');
    fclose($file);
    break;
default:

break;
}

}

echo 'Arquivos e Diretorios Criados com Sucesso !';
?>
