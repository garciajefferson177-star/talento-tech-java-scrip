const v1 = "tio ben";
const  v2 ="recuerda lo siguiente";
const v3 ="un gran poder requiere una gran responsabilidad";
const v4 = "ten cuidado con el duende verde";

const spiderman =(peligro)=>{
if (peligro == true){
        
        return 'como decia el ${v1} ${v2} ${v3} ';
    }else{
        return 'como decia el ${v1 ${v4';
    }
}
//etiqueta de titulos 
const titulo = document.createElement("h1");
titulo. textContent ="hola me llamo spiderman";
document.body.appendChild(titulo);

//crear un boton desde javascript.

const boton= document.createElement("button");
const boton2= document.createElement("button");

boton.innerText="peligro";
boton2.innerText="no peligro";

document.body.appendChild(boton);
document.body.appendChild(boton2);