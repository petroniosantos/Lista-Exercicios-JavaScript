deposito = parseFloat(prompt("Insira o valor do deposito: ")) 
juros = parseInt(prompt("Insira o valor da taxa de juros:")) 
valorrendimento = deposito * (juros/100) 
valorfinal = (deposito + valorrendimento) 
document.write("O valor do rendimento é de: ",valorrendimento," O valor final é: ", valorfinal) 