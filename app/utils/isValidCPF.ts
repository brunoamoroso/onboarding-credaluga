    // Verifique se todos os dígitos são iguais (caso contrário, o CPF é inválido)

    export default function isValidCPF(cpf: string): boolean{
        cpf = cpf.replaceAll(".", "").replace("-", "");
        //Verify if all digits are equals, if they're so it's invalid
        const allDigitsEqual = /^(\d)\1+$/g.test(cpf);
        if(allDigitsEqual){
            return false;
        }

        //Calc for verifier digits
        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf[i-1]) * (11-i);
        }

        remainder = (sum * 10) % 11;

        if(remainder === 10 || remainder === 11){
            remainder = 0;
        }

        if(remainder !== parseInt(cpf[9])){
            return false;
        }

        sum = 0;

        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf[i - 1]) * (12 - i);
          }
        
          remainder = (sum * 10) % 11;
        
          if (remainder === 10 || remainder === 11) {
            remainder = 0;
          }
        
          if (remainder !== parseInt(cpf[10])) {
            return false;
          }
        
          // Se passou por todas as verificações, o CPF é válido
          return true;
    }