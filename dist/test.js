"use strict";

var test = ['', undefined, null, ' ', '    ', ' nome '];
console.log("Valida\xE7\xE3o Required (not empty)");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isEmpty(item));
});
var test = ['3895-9090', '38959090', '76768767', '786786786786786', '1938955695', '(19) 3895-5695'];
console.log("Valida\xE7\xE3o Phone");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isPhone(item));
});
var test = ['73895-9090', '738959090', '(19) 79770-6140', '19597706140', '19997706140', '(19) 99770-6140'];
console.log("Valida\xE7\xE3o Mobile phone");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isMobile(item));
});
var test = ['mail.teste.com', 'mail@teste', '@teste.com', 'mail@teste.c', '_@teste.com', 'mail@teste.com', 'mail@teste.com.br'];
console.log("Valida\xE7\xE3o E-mail");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isEmail(item));
});
var date = new Date();
var test = ['1/2/3', '40/10/2018', '10/20/2018', '10/10/201', '122/1212/35455', '12/12/2018', '12-12-2018', date];
console.log("Valida\xE7\xE3o Data String");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isStringDate(item));
});
var test = ['1:2', '10:2', '24:00', '25:00', '22:65', '00:00', '23:59'];
console.log("Valida\xE7\xE3o Hora String");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isTime(item));
});
var test = ['aaaa', '11aaa', '10,000', '1[]%', '$123', '_86875765', '575576567', 11111];
console.log("Valida\xE7\xE3o String N\xFAmeros");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isStringNumber(item));
});
var test = ['', 'aaaa', 'aaa bbb', 'aaa bbb ccc', 'aaaa bbbb cccc dddd', 'aaaa bbbb cccc dddd eeee'];
console.log("Valida\xE7\xE3o possui o intervalo de palavras desejado");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isRangeWords(item, 2, 4));
});
var test = ['', 'aaaa', 'aaa bbb', 'aaa bbb ccc', 'aaaa bbbb cccc dddd', 'aaaa bbbb cccc dddd eeee'];
console.log("Valida\xE7\xE3o possui o m\xEDnimo de palavras desejado");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isRangeWords(item, 4));
});
var test = ['', 'aaaa', 'aaa bbb', 'aaa bbb ccc', 'aaaa bbbb cccc dddd', 'aaaa bbbb cccc dddd eeee'];
console.log("Valida\xE7\xE3o possui m\xE1ximo de palavras desejado");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isRangeWords(item, undefined, 4));
});
var test = ['https://www.example.com', 'http://www.example.com', 'www.example.com', 'example.com', 'http://blog.example.com', 'http://www.example.com/product', 'http://www.example.com/products?id=1&page=2', 'http://www.example.com#up', 'http://255.255.255.255', '255.255.255.255', 'http://www.site.com:8008', 'http://invalid.com/perl.cgi?key= | http://web-site.com/cgi-bin/perl.cgi?key1=value1&key2', 'http://invalid.com/perl.cgi?key= ', ' http://web-site.com/cgi-bin/perl.cgi?key1=value1&key2'];
console.log("Valida\xE7\xE3o url");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isUrl(item));
});
var test = ['12233', '139600000', '13.960-0000', '13-000000', '', 13960000, '13960-000'];
console.log("Valida\xE7\xE3o cep");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isZip(item));
});
var test = ['92.926.648-52', '922.26.648-52', '922.926.68-52', '922.926.648-2', '92292664852', 92292664852, '922.926.648-52'];
console.log("Valida\xE7\xE3o CPF");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isCPF(item));
});
var test = ['8.821.642/0001-00', '88.82.642/0001-00', '88.821.64/0001-00', '88.821.642/000-00', '88.821.642/0001-0', '88821642000100', 88821642000100, '88.821.642/0001-00'];
console.log("Valida\xE7\xE3o CNPJ");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isCNPJ(item));
});
var test = ['123456', '#afafah', '#123abce', 'aFaE3f', 'F00', '#afaf', '#F0h', '#1f1f1F', '#AFAFAF', '#1AFFa1', '#222fff', '#F00', '#F00'];
console.log("Valida\xE7\xE3o Cor Hexadecimal");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isHexColor(item));
});
var test = ['arquivo.jpeg', 'arquivo.webp', 'arquivo.mp4', 'arquivo.ogg', 'arquivo.doc', 'arquivo.docx', 'arquivo.pdf', 'arquivo.jpg', 'arquivo.png', 'arquivo.gif', 'jpeg', 'png', 'gif'];
console.log("Valida\xE7\xE3o string arquivo imagem");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isImage(item));
});
var test = ['arquivo.jpeg', 'arquivo.webp', 'arquivo.mp4', 'arquivo.ogg', 'arquivo.doc', 'arquivo.docx', 'arquivo.jpg', 'arquivo.png', 'arquivo.gif', 'jpeg', 'png', 'gif', 'arquivo.pdf'];
console.log("Valida\xE7\xE3o string arquivo pdf");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isPdf(item));
});
var test = ['arquivo.jpeg', 'arquivo.webp', 'arquivo.mp4', 'arquivo.ogg', 'arquivo.doc', 'arquivo.docx', 'arquivo.jpg', 'arquivo.png', 'arquivo.gif', 'jpeg', 'png', 'gif', 'arquivo.pdf'];
console.log("Valida\xE7\xE3o string arquivo pdf");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isPdf(item));
});
var test = ['arquivo.webp', 'arquivo.doc', 'arquivo.docx', 'arquivo.jpg', 'arquivo.png', 'arquivo.gif', 'arquivo.avi', 'arquivo.mov', 'arquivo.wmv', 'arquivo.mp4', 'arquivo.flv', 'arquivo.mkv', 'arquivo.rm'];
console.log("Valida\xE7\xE3o string arquivo pdf");
test.forEach(function (item, idx) {
  console.log(idx + ' ' + Validate.isVideo(item));
});
//# sourceMappingURL=test.js.map