function usuarios() {
    var listUsuarios = JSON.parse(localStorage.getItem("list"));

if (listUsuarios == null){
    listUsuarios =
    [
        ['alejandro','alexdelacruz1888@gmail.com','estudiante123'],
        ['admin','admin@gmail.com','imadmin']
    ]
}
return listUsuarios;
}

function autenticacion(usr , pass){

    var listUsuarios = usuarios(); 
    var acces = false;

    for (var i = 0; i < listUsuarios.length; i++){
        if (usr == listUsuarios[i][1] && pass == listUsuarios[i][2])
        {
            acces = true;
            sessionStorage.setItem('usuarioactivo',listUsuarios[i][0]);
        }

    }
    return acces;
}