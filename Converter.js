let sel=document.querySelector("#selectTab");
let sel2=document.querySelector("#selectTab2");
let currInput=document.querySelector("#curr-input")
let arr1=CurrArray();
for(let i=0;i<arr1.length;i++)
{
    let opt=document.createElement("option");
    opt.value=arr1[i];
    opt.textContent=arr1[i];
    sel.appendChild(opt);
   
}
for(let i=0;i<arr1.length;i++)
    {
        let opt=document.createElement("option");
        opt.value=arr1[i];
        opt.textContent=arr1[i];
        sel2.appendChild(opt);
    }
let url="https://open.er-api.com/v6/latest/";
async function clickButton()
{
    if(currInput.value==0 ||currInput.value=="")
    {
        alert("Enter the Amount!");
        return;
    }
    let promise=await fetch(url+sel.value)
    let response=await promise.json();

    let targetAmount=response.rates[sel2.value];
    
    
    document.querySelector("#result-amount").textContent=targetAmount*currInput.value;  
}
function swap()
{
    let temp=sel.value;
    sel.value=sel2.value;
    sel2.value=temp;
    clickButton();
}