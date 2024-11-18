var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');


var siteContainer =[]
if(localStorage.getItem('items') !== null){
    siteContainer = JSON.parse(localStorage.getItem('items'))
    displayItem()
}

function addSite(){
 if(validationName() && validationUrl()){
    var site ={
        siteName : siteNameInput.value,
        siteUrl : siteUrlInput.value,
    }
    siteContainer.push(site)
    localStorage.setItem('items',JSON.stringify(siteContainer))
    clearInputs()
    displayItem()
    console.log(siteContainer);
 
 } 
 else{
    window.alert(`Site Name or Url is not valid, Please follow the rules below :

Site name must contain at least 3 characters
Site URL must be a valid one`)
 }  
}

function clearInputs(){
    siteNameInput.value = ""
    siteUrlInput.value = ""
}

function displayItem(){
    cartona =''
    for(var i=0;i<siteContainer.length;i++){
        cartona+=`
            <tr>
                <td>${i+1}</td>
                <td>${siteContainer[i].siteName}</td>
                <td><button onclick="window.open('${siteContainer[i].siteUrl}','_blank')" class="btn btn-success"><i class="fa-regular fa-eye p-1"></i>Visit</button></td>
                <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can p-1"></i>Delete</button></td>
            </tr>
        `
    }
    document.getElementById('demo').innerHTML=cartona
}

function deleteItem(deletedItem){
    siteContainer.splice(deletedItem,1)
    localStorage.setItem('items',JSON.stringify(siteContainer))
    displayItem()

}

function validationName(){
    var regx = /^[a-zA-Z][a-zA-Z0-9]{2,19}$/;
    var txt = siteNameInput.value;

    if(regx.test(txt)){
        siteNameInput.classList.add('is-valid')
        siteNameInput.classList.remove('is-invalid')
        return true
    }
    else{
        siteNameInput.classList.add('is-invalid')
        siteNameInput.classList.remove('is-valid')
        return false
    }

}

function validationUrl(){
    var regx = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+\/?)*$/;
    var txt = siteUrlInput.value;

    if(regx.test(txt)){
        siteUrlInput.classList.add('is-valid')
        siteUrlInput.classList.remove('is-invalid')
        return true
    }
    else{
        siteUrlInput.classList.add('is-invalid')
        siteUrlInput.classList.remove('is-valid')
        return false
    }

}