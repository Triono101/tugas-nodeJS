// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Input Bilangan C: `, (c) => {
    readline.question(`Input Bilangan K: `, (k) => {
      if(c > k) [c, k] = [k, c];
      var total = 0;
      for (let kelipatan = c; kelipatan <= k; kelipatan++) {
        if (kelipatan % 3 === 0) {
          total += parseInt(kelipatan);
        }
      }
      console.log(`Hasilnya: ${total}`);
      readline.close();
    });
  });