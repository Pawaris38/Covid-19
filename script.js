const covidapi = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";
const covidprovinceapi = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";

const newConfirmed = document.getElementById("NewConfirmed");
const newRecovered = document.getElementById("NewRecovered");
const confirmed = document.getElementById("Confirmed");
const newDeaths = document.getElementById("NewDeaths");
const recovered = document.getElementById("Recovered");
const hospitalized = document.getElementById("Hospitalized");
const date = document.getElementById("date"); 
const month = document.getElementById("month");
const province1 = document.getElementById("province1");
const province2 = document.getElementById("province2");
const province3 = document.getElementById("province3");
const province4 = document.getElementById("province4");
const province5 = document.getElementById("province5");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");

let day = new Date();
let Day = day.getDate();
let Month = day.getUTCMonth() + 1;
   
date.innerHTML = Day;
month.innerHTML = Months(Month)+"64";

async function covid(){
    const resp = await fetch(covidapi);
    const respData = await resp.json();
    // console.log(respData);
   
newConfirmed.innerHTML = "+"+ respData[0].new_case;
newRecovered.innerHTML = "+"+ respData[0].new_recovered;
confirmed.innerHTML = respData[0].total_case;
newDeaths.innerHTML = respData[0].new_death;
recovered.innerHTML = respData[0].total_recovered;
hospitalized.innerHTML = respData[0].total_case - respData[0].total_recovered;
}
covid();
async function covidprovince(){
    const res = await fetch(covidprovinceapi);
    const resp = await res.json();
    console.log(resp);
    let prov = [];
    const sum = [];
    const provincelengt = 78;
    let ans = "";
    let ans2 = "";
    let ans3 = "";
    let ans4 = "";
    let ans5 = "";
    
     for(let i=0;i<provincelengt;i++){
       prov = resp[i];
       sum.push(prov.total_case); 
     }  
  
        const a = nthlargest(sum, 1);
        const b = nthlargest(sum, 2);
        const c = nthlargest(sum, 3);
        const d = nthlargest(sum, 4);
        const e = nthlargest(sum, 5);

     
     for(let i=0;i<provincelengt;i++){
        prov = resp[i];
        if(prov.total_case === Number(a)){
            ans = (prov.province);
        }
    }
    for(let i=0;i<provincelengt;i++){
        prov = resp[i];
        if(prov.total_case === Number(b)){
            ans2 = (prov.province);
        }
    }
    for(let i=0;i<provincelengt;i++){
        prov = resp[i];
        if(prov.total_case === Number(c)){
            ans3 = (prov.province);
        }
    }
   
    for(let i=0;i<provincelengt;i++){
        prov = resp[i];
        if(prov.total_case === Number(d)){
            ans4 = (prov.province);
        }
    }
    for(let i=0;i<provincelengt;i++){
        prov = resp[i];
        if(prov.total_case === Number(e)){
            ans5 = (prov.province);
        }
    }
    number1.innerHTML =  (nthlargest(sum, 1)); 
    number2.innerHTML =  (nthlargest(sum, 2)); 
    number3.innerHTML =  (nthlargest(sum, 3)); 
    number4.innerHTML =  (nthlargest(sum, 4)); 
    number5.innerHTML =  (nthlargest(sum, 5)); 
    province1.innerHTML = ans; 
    province2.innerHTML = ans2;
    province3.innerHTML = ans3;
    province4.innerHTML = ans4;
    province5.innerHTML = ans5;
} 
function Months(month){
    if(month === 1){
            return "ม.ค."
    }
    else if(month === 2) {
        return "ก.พ."
    }
    else if(month === 3) {
        return "มี.ค."
    }
    else if(month === 4) {
        return "เม.ย."
    }
    else if(month === 5) {
        return "พ.ค."
    }
    else if(month === 6) {
        return "มิ.ย."
    }
    else if(month === 7) {
        return "ก.ค."
    }
    else if(month === 8) {
        return "ส.ค."
    }
    else if(month === 9) {
        return "ก.ย."
    }
    else if(month === 10) {
        return "ต.ค."
    }
    else if(month === 11) {
        return "พ.ย."
    }
    else  {
        return "ธ.ค."
    }
}
//find Maxvalue
function nthlargest(arra,highest){
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = arra.length, 
        flag = false, 
        result = false; 
    while(x < arra.length){
        y = x + 1;    
        if(y < arra.length){
            for(z = y; z < arra.length; z++){ 
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){    
                result = true;
            }	
        }
        if(result){
            break;
        }
    }
    return (arra[(highest - 1)]);	
}
covidprovince()

