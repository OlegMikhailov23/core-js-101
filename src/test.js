// function getIdentityMatrix(n) {
//   const tmp = [...Array(n)].map(() => [...Array(n)]);
//
//   tmp.map((item) => item.map((it, i) => {
//     if (it === undefined) {
//       if (tmp.indexOf(item) === item.indexOf(it)) {
//         item[i] = 1;
//       } else {
//         item[i] = 0;
//       }
//     }
//   }));
//   console.log(tmp);
// }
//
// getIdentityMatrix(6);
