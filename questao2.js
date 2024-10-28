
const sequenciaFibonacci = (n) => {
    let fibonacci = [0, 1];
    let value1 = 0;
    let value2 = 1;

    
    for (let index = 0; index < 15; index++) {
        sum = value1 + value2
        value1 = value2
        value2 = sum        
        fibonacci.push(sum)
        
        
    }
    
    if(fibonacci.includes(n)) {
        console.log(`O numero ${n} está na sequência de Fibonacci`); 
    } else {
        console.log(`O numero ${n} não está na sequência de Fibonacci`); 

    }
    

    
    
}

sequenciaFibonacci(16)