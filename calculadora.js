function calculadora(){
    const operacao = Number(prompt('Escolha a operação desejada:\n 1 - Adição: + \n 2 - Subtração: - \n 3 - Multiplicação: * \n 4 - Divisão inteira: % \n 5 - Divisão real: / \n 6 - Potenciação: ** '));
    
    if(!operacao || operacao >=7){
        alert('Operação inválida!');
    }else{
    let n1 = Number(prompt('Digite o primeiro valor'));
    let n2 = Number(prompt('Digite o segundo valor'));
    let resultado;
    
    if(!n1 || !n2){
        alert('Erro - Parametros inválidos')
        calculadora();
    }else{
        function soma(){
            resultado=n1+n2
            alert(`${n1} + ${n2} = ${resultado}` )
            novaoperacao();
         }
         function subtracao(){
            resultado=n1-n2
            alert(`${n1} - ${n2} = ${resultado}` )
            novaoperacao();
         }
         function multiplicacao(){
            resultado=n1*n2
            alert(`${n1} * ${n2} = ${resultado}` )
            novaoperacao();
         }
         function divinteira(){
            resultado=n1%n2
            alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
            novaoperacao();
         }
         function divreal(){
            resultado=n1/n2
            alert(`${n1} / ${n2} = ${resultado}` )
            novaoperacao();
         }
         function potenciacao(){
            resultado=n1**n2
            alert(`O número ${n1} elevado a ${n2} é ${resultado}`)
            novaoperacao();
        }
    }
    


 function novaoperacao(){
    let opcao= prompt('Deseja fazer uma nova operação?\n 1 - Sim \n 2 - Não');
    
    if(opcao==1){
        calculadora();
    }else if (opcao==2){
        alert('Até a próxima');
    }else{
        alert('Digite uma operação válida!');
        novaoperacao();
    }
 }




if (operacao==1){
    soma();
}else if(operacao==2){
    subtracao();
}else if(operacao==3){
    multiplicacao();
}else if(operacao==4){
    divinteira();
}else if(operacao==5){
    divreal();
}else if(operacao==6){
    potenciacao();
}


}


}   
calculadora();