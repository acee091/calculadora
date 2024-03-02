const inquirer = require('inquirer')
const chalk = require('chalk')

inicio()
function inicio(){
    bill()
    function bill(){
    inquirer
        .prompt([{
            name: 'amount',
            message: 'Digite o valor total da conta',
            type: "number"
        }])
        .then((answer)=>{
            const amount = answer['amount']

            if(amount <= 0){
                console.log(chalk.bgRed.black('Este número de conta não é valido!'))
                return bill()
            }
            return numPessoas()
        })
    }

    function numPessoas(){
        inquirer
        .prompt([{
            name: 'people',
            message: 'Insira a quantidade de pessoas para pagar a conta',
            type: "number"
        }])
        .then((answer) =>{
            const people = answer['people']
            if(people <= 0){
                console.info('Este número de pessoas não é valido!')
                return numPessoas()
            }
            return valorTotal()
        })
        
    }
    function valorTotal(amount, people){
    gorjeta = amount + (amount * 0.10);
    valordividido = (amount + gorjeta) / people;
    console.log(`Cada pessoa tem que pagar: ${valordividido}`)

   }
}
    