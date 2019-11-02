import validate from '../validation/register_validation';
/*Tests registr_validation
*Params Input={publicName,userName,password}
*
*/
function reg_test(input){
    /*Test#1 Missing userName
     *Params: publicName="publicName"
     *        userName=null
     *        password="Password1"
     */
    const{errors,result,isValid}=validate({publicName:"PublicName",userName:null,password:"Password1"});
    if(!isValid){
        console.log("Test one successful");
    }
    //Test#2 Missing publicName
    const{errors,result,isValid}=validate({publicName:null,userName:"UserName",password:"Password1"});
    if(!isValid){
        console.log("Test two successful");
    }
    //Test#3 Missing password
    const{errors,result,isValid}=validate({publicName:"Tester",userName:"UserName",password:null});
    if(!isValid){
        console.log("Test three successful");
    }
    //Test#4 userName contains special character
    const{errors,result,isValid}=validate({publicName:"Tester",userName:"User>Name",password:"Password1"});
    if(!isValid){
        console.log("Test four successful");
    }
}