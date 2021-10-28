function comprar(){
    var ingresso = document.getElementById("quantidade").value;
    if (ingresso == 0){
        alert("Escolha uma Quantidade de ingresso!")
    }else{
        alert("Ingresso comprado com sucesso!")
        document.getElementById("botaocomprar").disabled = true;
        document.getElementById("botaocomprar").style.cursor = "none";
        document.getElementById("botaocomprar").style.background = "#be76e78f";
    }
}