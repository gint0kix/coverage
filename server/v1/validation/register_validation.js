function register_validation (input){
    let blackListedChars= new RegExp(/|<|>|=|-|!|#|%|&/ig);
    let errors={};
    let result={};
    let isValid;
    /*Expected input to be a json with 
    * Parameters {publicName,userName,password}
    */

    //tests the publicName if its either empty or has a special character
    if(input.publicName.isEmpty()){
        errors.publicName="Public Name is empty";
    }
    else if(blackListedChars.test(body.publicName)){
        errors.publicName="Special characters not allowed";
    }
    else{
        result.publicName=input.publicName;
    }
    //tests the userName if its either empty or has a special character
    if(input.userName.isEmpty()){
        errors.userName="Username is empty";
    }
    else if(blackListedChars.test(body.userName)){
        errors.userName="Special characters not allowed";
    }
    else{
        result.userName=input.userName;
    }
    //tests the userName if its either empty or has a special character
    if(input.password.isEmpty()){
        errors.password="password is empty";
    }
    else if(blackListedChars.test(body.password)){
        errors.password="Special characters not allowed";
    }
    else{
        result.password=input.password;
    }
    //sets isValid to true only if all three error properties are empty/null
    if(!errors.publicName && !errors.userName && !errors.password)
    {
        isValid=true;
    }
    return errors,result,isValid
}   
export default register_validation;