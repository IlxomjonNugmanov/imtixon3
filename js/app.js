let elform = document.querySelector('#form')
let eluserName = document.querySelector('.userName')
let elusertel = document.querySelector('.usertel')
let eluserAddress = document.querySelector('.userAddress')
let elorder = document.querySelector('#order')
let elbtn = document.querySelector('.save__btn')
let elselect = document.querySelector('#select')
let elsize1 = document.querySelector('.size1')
let elsize2 = document.querySelector('.size2')
let elsize3 = document.querySelector('.size3')
let elpizaa1 = document.querySelector('#pizaa1')
let elpizaa2 = document.querySelector('#pizaa2')
let elpizaa3 = document.querySelector('#pizaa3')
let elpizaa4 = document.querySelector('#pizaa4')
let elpizaa5 = document.querySelector('#pizaa5')
let elpizaa6 = document.querySelector('#pizaa6')
let elSausage = document.querySelector('#add__Sausage')
let elPepper = document.querySelector('#add__Pepper')
let elchekBox = document.querySelector('.chek')


let order = 0

elform.addEventListener('submit', (e) => {
    e.preventDefault()
    
   let total = 0;
   let elli = document.createElement('li')
   let elsize;
   let pizzaaValue1;
   let pizzaaValue2;
   let pizzaaValue3;
   let pizzaaValue4;
   let pizzaaValue5;
   let pizzaaValue6;
    
    //  size
    if (elsize1.checked) {
        elsize = '25 sm'
        total = total + 10
    }else if (elsize2.checked) {
        elsize = '30 sm'
        total = total + 12
    }else if (elsize3.checked) {
        elsize = '35 sm'
        total = total + 15
    }else{
        elsize = ''
    }

    // pizza 
   if(elpizaa1.checked){
     pizzaaValue1 = 'Tomato'
     total = total + 5
   }else{
       pizzaaValue1 = ''
    }
    if(elpizaa2.checked){
        pizzaaValue2 ='Pickled cucumber'
        total = total + 5

    }else{
        pizzaaValue2 =''
    }
    if(elpizaa3.checked){
        pizzaaValue3 = 'Turkey meat'
        total = total + 5

    }else{
        pizzaaValue3 = ''
    }
    if(elpizaa4.checked){
        pizzaaValue4 = 'Mushroom'
        total = total + 5

    }else{
        pizzaaValue4 = ''
    }
    if(elpizaa5.checked){
        pizzaaValue5 = 'Olive'
        total = total + 5

    }else{
        pizzaaValue5 = ''
    }
    if(elpizaa6.checked){
       pizzaaValue6 = 'Horse meat'
        total = total + 5
   }else{
       pizzaaValue6 = ''
    }

    //  Add section
    let add1;
    let add2;
    
    if (elSausage.checked) {
        add1 = 'Sausage'
        total = total + 3

    }else(
        add1 = ''
        )
    if (elPepper.checked) {
        add2 = 'Pepper'
        total = total + 3
    }else(
        add2 = ''
    )

    // select total
   switch (elselect.value) {
    case 'Thin':
        total = total + 10 

        break;
    case 'Medium' :
        total = total+ 12

        break;
    case 'Thick' :
        total = total + 15

        break;
    }
    order =  order + 1;

    elli.innerHTML = `
    <p>Order :${order} </p>
    <p>Name : ${eluserName.value}</p>
    <p>Tell : ${elusertel.value}</p>
    <p>Address : ${eluserAddress.value}</p>
    <hr>
    <p>Dough thickness : ${elselect.value}</p>
    <p>Size : ${elsize}</p>
    <p class="pizza">On pizza : ${pizzaaValue1} ${pizzaaValue2} ${pizzaaValue3} ${pizzaaValue4} ${pizzaaValue5} ${pizzaaValue6}</p>
    <p>Add : ${add1} ${add2}</p>
    <hr>
    <p class="total">Total : ${total} $ </p>
    
    <button class='deleted'>Deleted</button>
    `
    elorder.append(elli)
    
    let btn = document.querySelector('.deleted')
    btn.addEventListener('click', ()=>{
        btn.parentElement.remove();
    })






    let elchek = document.createElement('li')

    // chek

    elchek.innerHTML = `
    <h2>Chek</h2>
    <p>Order :${order} </p>
    <p>Dough thickness : Thin : 10$</p>
    <p>Medium : 12$</p>
    <p>Thick : 15$</p>
    <hr>
    <p>Size : 25 sm : 10$</p>
    <p>20 sm : 12$<p>
    <p>35 sm : 15$</p>
    <hr>
    <p class="pizza">On pizza : every-5$</p>
    <p>Add : every-5$</p>
    <hr>
    <p class="total">Total : ${total} $ </p>
   
    
    <button class="dowload" onclick="downlod()">Dowload</button>
    `
    document.querySelector('.chek').append(elchek)
    
    
})

function downlod(){
    html2pdf()
    .from(elchekBox)
    .save();
}