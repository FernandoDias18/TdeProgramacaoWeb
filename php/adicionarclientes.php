<?php
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $numerocartao = $_POST["numerocartao"];
    $nomecartao = $_POST["nomecartao"];
    $validade = $_POST["datavalidade"];
    $cvc = $_POST["cvc"];
    $cpf = $_POST["cpf"];
    $senha = $_POST["senha"];
    $confirmarsenha = $_POST["confirmarsenha"];


    $con =  mysqli_connect("localhost: 8889", "root","root", "programacao_web");

    mysqli_query($con, "INSERT INTO clientes (Nome, Sobrenome, Email, Cpf, Senha, Confirmar_Senha, Nome_Cartao, Validade_Cartao, Numero_Cartao, Cvc) VALUES('$nome','$sobrenome','$email','$cpf', '$senha', '$confirmarsenha', '$nomecartao','$validade', '$numerocartao', '$cvc')");

?>



