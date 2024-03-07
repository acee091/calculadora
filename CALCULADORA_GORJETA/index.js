const inquirer = require('inquirer')
 const chalk = require('chalk')

// inicio()
// function inicio(){
//     bill()
//     function bill(){
//     inquirer
//         .prompt([{
//             name: 'amount',
//             message: 'Digite o valor total da conta',
//             type: "number"
//         }])
//         .then((answer)=>{
//             const amount = answer['amount']

//             if(amount <= 0){
//                 console.log(chalk.bgRed.black('Este número de conta não é valido!'))
//                 return bill()
//             }
//             return numPessoas()
//         })
//     }

//     function numPessoas(){
//         inquirer
//         .prompt([{
//             name: 'people',
//             message: 'Insira a quantidade de pessoas para pagar a conta',
//             type: "number"
//         }])
//         .then((answer) =>{
//             const people = answer['people']
//             if(people <= 0){
//                 console.info('Este número de pessoas não é valido!')
//                 return numPessoas()
//             }
//             return valorTotal(amount, people)
//         })
//     }
//    }
//    function valorTotal(amount, people){
//         gorjeta = amount * 0.10
//         const valor = (parseFloat(gorjeta) + parseFloat(amount))/ parseInt(people)
//         console.log(valor)
//    }
// inicio()
// function inicio(){
//     const conta = await
//     inquirer
//     .prompt([
//     {
//         name: 'people',
//         message: 'Insira a quantidade de pessoas para pagar a conta',
//         type: 'input'  
//     }
//     ,
//     {
//         name: 'amount',
//         message: 'Insira o valor da conta',
//         type: 'input'
//     }
//     ])
//     .then((answer) =>{
//         const people = answer['people']
//         const amount = answer['amount']
//         if(people <= 0 || amount <= 0){
//             console.info('Este npumero de pessoas não é valiod!')
//         }
//         valorTotal()
//     })
    
// }
// function valorTotal(amount, people){
//     const gorjeta = amount * 0.10
//     const total = (parseFloat(conta.amount) + parseFloat(conta.gorjeta)) / parseInt(conta.people)
//     console.log(total)
// }
const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
function calcularGorjeta(totalConta) {
  return totalConta * 0.1;
}
 
function calcularDivisaoConta(numPessoas, totalConta, contribuicoes) {
  const gorjeta = calcularGorjeta(totalConta);
  const totalPagar = totalConta + gorjeta;
 
  console.log("\nDivisão da conta com gorjeta:");
 
  for (const pessoa in contribuicoes) {
    const porcentagemContribuicao = contribuicoes[pessoa] / totalConta;
    const valorPagar = totalPagar * porcentagemContribuicao;
    console.log(`${pessoa} deve pagar: ${valorPagar.toFixed(2)} (incluindo gorjeta)`);
  }
 
  rl.close();
}
 
function main() {
  rl.question("Quantas pessoas estão no grupo? ", (numPessoas) => {
    const totalConta = parseFloat(prompt("Qual é o valor total da conta?"));
    const contribuicoes = {};
 
    console.log("\nDigite as contribuições individuais:");
 
    for (let i = 1; i <= numPessoas; i++) {
      rl.question(`Nome da pessoa ${i}: `, (nome) => {
        rl.question(`Contribuição de ${nome}: `, (contribuicao) => {
          contribuicoes[nome] = parseFloat(contribuicao);
 
          if (Object.keys(contribuicoes).length === numPessoas) {
            calcularDivisaoConta(numPessoas, totalConta, contribuicoes);
          }
        });
      });
    }
  });
}
 
main();