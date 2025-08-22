const amount_1 = document.querySelector("#amount1");
const currency_1 = document.querySelector("#currency1");
const amount_2 = document.querySelector("#amount2");
const currency_2 = document.querySelector("#currency2");
const button = document.querySelector(".convert-button");

const Api_base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";   

const Apicall = async (url) => {  // its a asyn funtion cause it will stop the flow of exectution to wait for the call and reponse 
      
  
    try {

        const response = await fetch(url);  // this is a api call method the fetch method is used it has diffrent diffrent methods like POST GET and other read mdn 
        if (response.status != 200) {
            throw new Error("Error occured");
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Something went Wrong : ",error);
    }
    
}

async function currency_converter() {
    let cur1 =(currency_1.value).toLowerCase();  
    // let url = Api_base_url + cur1 + ".json";  //  -- > nood logic 
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur1}.json`;  // --> pro logic 
    const exchange  =  await Apicall(url);  
    const exchange_rate = exchange[cur1];
    let cur2 = (currency_2.value).toLowerCase();
    const result = exchange_rate[cur2] * amount_1.value;
    amount_2.value = result.toFixed(2);
}

button.addEventListener("click" , () => {
    currency_converter();
})
