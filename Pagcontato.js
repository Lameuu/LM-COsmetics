function mascaraTelefone(){
    var cel = document.getElementById ('mobile');
    var celular = cel.value;

    if (celular.length == 1){
        celular = "(" + celular
        cel.value = celular;
        return true; 
    }
    if (celular.length == 3){
        celular =  celular + ")"
        cel.value = celular;
        return true; 
    }

    if (celular.length == 9){
        celular =  celular + "-"
        cel.value = celular;
        return true; 
    }

}

  