document.querySelector('#btn').addEventListener('click', iniciarsesion);


function iniciarsesion(){
    var usr ='';
    var pass = '';
    var acces = false;
   usr = document.querySelector('#email').value;
   pass = document.querySelector('#pass').value;

  acces = autenticacion(usr,pass);
  console.log(acces);
 if (acces == true){
      ingresar();
  }else if (acces == false){
     
      
  }
 function ingresar(){
 
    window.location.href = 'index.html';
    
  }
}