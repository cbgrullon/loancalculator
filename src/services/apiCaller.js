function getConfig(method,body){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let config = {
        method,
        headers,
        body:JSON.stringify(body),
        mode:'cors',
        cache:'default'
    };
    return config
}
function manageResponse(result,resolve,reject){
    try {
        result.json().then(data=>{
            if(result.status!==200){
                return reject({statusCode:result.status,message:data.message});
            }
            return resolve(data);
        })
    } catch (error) {
        return reject({statusCode:0,message:"Can't connect with server"})
    }
}
class ApiCaller{
    Url;
    constructor(Url){
        this.Url=Url;
    }
    postLoanRequest(loanRequest){
        return new Promise((resolve,reject)=>{
            if(!loanRequest){
                return reject({statusCode:-1,message:'Invalid Parameters'});
            }
            if(!loanRequest.amount||!loanRequest.interest|!loanRequest.term){
                return reject({statusCode:-2,message:'Invalid Parameters'});
            }
            fetch(`${this.Url}/api/Prestamos/GeneraAmortizacion`,getConfig('POST',{
                interesAnual:loanRequest.interest,
                montoTotal:loanRequest.amount,
                plazo:loanRequest.term
            }))
            .then(result=>manageResponse(result,resolve,reject))
            .catch(err=>{
                return reject({statusCode:-3,message:'Unkown error',innerException:err})
            });
            
        })
        
    }
}
export default ApiCaller;