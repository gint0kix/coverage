function register_validation (input){
    let blackListedChars= new RegExp(/|*<*|*>*|*=*|*-*|*!*|*#*|*%*|*&*/ig);
    let errors={};
    let result={};
    if(input.publicName.isEmpty()){
        errors.publicName="Public Name is empty";
    }
    else if(!!!input.publicName.test(blackListedChars)){

    }
}
export default register_validation;