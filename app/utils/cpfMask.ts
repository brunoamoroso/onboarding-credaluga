export default function cpfMask(cpf: string): string{
    cpf = cpf.replace(/[^\d]/, ""); //guarantee that only numbers are accepted

    if(cpf.length <= 6){
        cpf = cpf.replace(/(\d{3})(\d{1,3})/g, "$1.$2");
      }else if(cpf.length <= 9){
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/g, "$1.$2.$3");  
      }else{
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");  
      }
    
    return cpf;
}