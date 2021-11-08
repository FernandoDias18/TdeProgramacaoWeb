$(document).ready(function(){
    fLocalEventosClick();
    

});

function fLocalEventosClick(){
    $("#salvarusuario").click(function(){
        var nome = document.getElementById("nome").value.trim();
        var cpf = document.getElementById("cpf").value.trim();
        var email= document.getElementById("email").value.trim();
        var nomecartao = document.getElementById("nomecartao").value.trim();
        var validade = document.getElementById("validade").value.trim();
        var cvc = document.getElementById("cvc").value.trim();
        var sobrenome= document.getElementById("sobrenome").value.trim();
        var senha = document.getElementById("senha").value.trim();
        var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
        var numero = document.getElementById("numero").value.trim();

        document.getElementById("tela-cadastro").style.height = "1690px"
    
        if (nome.length < 3 ){
            document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
            document.getElementById("nome").style.border = "solid 1px red"
            document.getElementById("iconerronome").style.display = "block"
           
        }
        if (sobrenome == "" ){
            document.getElementById('errosobrenome').innerHTML = `<p>ERRO! Nome inválido</p>`
            document.getElementById("sobrenome").style.border = "solid 1px red"
            document.getElementById("iconerrosobren").style.display = "block" 
        }
        if (cpf == ""){
            document.getElementById('errocpf').innerHTML = `<p>ERRO! CPF inválido</p>`
            document.getElementById("cpf").style.border = "solid 1px red"
            document.getElementById("iconerrocpf").style.display = "block"
        }
        if (numero == ""){
            document.getElementById('erronumero').innerHTML = `<p>ERRO! Nome inválido</p>`
            document.getElementById("numero").style.border = "solid 1px red"
            document.getElementById("iconerronumerocartao").style.display = "block" 
        }
        if (email == ""){
            document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
            document.getElementById("email").style.border = "solid 1px red"
            document.getElementById("iconerroemail").style.display = "block"

        }
        if (senha == "") {
            document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
            document.getElementById("senha").style.border = "solid 1px red"
            document.getElementById("iconerrosenha").style.display = "block"
        }
        if (confirmarsenha =="" || confirmarsenha != senha){
            document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
            document.getElementById("confirmarsenha").style.border = "solid 1px red"
            document.getElementById("iconerroconfsenha").style.display = "block"
        }
        if (nomecartao == ""){
            document.getElementById('erronomecartao').innerHTML = `<p>ERRO! Nome do Cartão inválido</p>`
            document.getElementById("nomecartao").style.border = "solid 1px red"
            document.getElementById("iconerronomecartao").style.display = "block"
        }
        if (validade == ""){
            document.getElementById('errovalidade').innerHTML = `<p>ERRO! Validade inválida</p>`
            document.getElementById("validade").style.border = "solid 1px red"
            document.getElementById("iconerrovalidade").style.display = "block"
        }
        if (cvc == ""){
            document.getElementById('errocvc').innerHTML = `<p>ERRO! Número do CVC inválido</p>`
            document.getElementById("cvc").style.border = "solid 1px red"
            document.getElementById("iconerrocvc").style.display = "block"
            return false;
        }
        if(nome.length >=  3 && sobrenome != "" && numero != "" && cpf != "" && confirmarsenha == senha && nomecartao != "" &&
        validade != "" && cvc != ""){
            fLocalComunicaServidor("adicionarclientes")
            alert("CADASTRO REALIZADO COM SUCESSO")
            window.location.href = "index.html"
            return false;
        }


    });
}
function fLocalComunicaServidor(arquivo){

    var valores = $("form").serialize();
    $.ajax({

        type:"POST",
        dataType: "json",
        data: valores,
        url: "../php/" + arquivo +".php",
        success: function(retorno){

        }
    });
}
function mostrarsenha(){
    var senha = document.getElementById("senha")
    var confirmarsenha = document.getElementById("confirmarsenha")
    if(senha.getAttribute("type") == "password") {
        senha.setAttribute("type", "text");
        confirmarsenha.setAttribute("type", "text");
    }else {
        senha.setAttribute("type", "password");
        confirmarsenha.setAttribute("type", "password");
    }
}
