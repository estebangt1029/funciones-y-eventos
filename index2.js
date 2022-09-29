const comprar=document.querySelector('#comprar')
const lista=document.querySelector('#lista')
const modal=document.querySelector('.modal')
const modal1=document.querySelector('.modal1')
const cancelar=document.querySelector('#cancelar')
const mp1=document.querySelector('.mp1')
const aceptar=document.querySelector('#aceptar')

comprar.addEventListener('click',()=>{
    if(lista.options[lista.selectedIndex].value==='0'){
        alert('primero elije un producto')
    }
    else if(lista.options[lista.selectedIndex].value==='1'){
        mp1.src='https://olimpica.vtexassets.com/arquivos/ids/796694/Celular-Redmi-Note-11-Gris-128Gb.jpg?v=637836650842800000'
        modal.style.top=0
        
    }
    else if(lista.options[lista.selectedIndex].value==='2'){
        modal.style.top=0
        mp1.src='https://image.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg'
    }
    else if(lista.options[lista.selectedIndex].value==='3'){
        mp1.src='https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/MT09-2022-29.jpg'
        modal.style.top=0
    }
    else{
        mp1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYbsiUJrwnpPLMgYWv3mwVePR6khg9B_9WA&usqp=CAU'
        modal.style.top=0
    }
    
})
cancelar.addEventListener('click',()=>{
    modal.style.top='-100%'
})
aceptar.addEventListener('click',()=>{
    setTimeout(()=>{
        location="./index4.html"},1000)
})
