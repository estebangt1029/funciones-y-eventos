const boton=document.getElementById('boton')
const ratonm=document.getElementById('password')
const ratono=document.getElementById('password')

boton.addEventListener('click',e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value

    if(username==='' || password==='')
    alert('campo de usuario o contraseña vacio')

    if(username==='carlitos' && password==='carlitos123'){
        document.querySelector('#mensaje').style.display='none'
        setTimeout(()=>{
            location="./index2.html"},1000)
    }else{
        document.querySelector('#mensaje').style.display='block'
    }
})

ratonm.addEventListener('mouseenter',()=>{
    document.getElementById('password').type='text'
    console.log('aja')
})
// ratono.addEventListener('mousedown',()=>{
//     document.getElementById('password').type='password'
//     console.log('ajo')
    
// })
