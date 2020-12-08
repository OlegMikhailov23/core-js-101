// function encodeToRot13(str) {
//   const arrFromStr = str.split('');
//   const shift = 13;
//
//   function replaceChar(char, offset) {
//     if (/[.,#!$%&;?: {}=_`~()]/g.test(char)) {
//       return char;
//     }
//     if ((char > 'M' && char <= 'Z') || ((char > 'm' && char <= 'z'))) {
//       char = String.fromCharCode(char.charCodeAt(0) - offset);
//     } else {
//       char = String.fromCharCode(char.charCodeAt(0) + offset);
//     }
//     return char;
//   }
//   const res = arrFromStr.map((it) => replaceChar(it, shift)).join('');
//   console.log(res);
// }
// encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
// //                 NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
// //                 NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
