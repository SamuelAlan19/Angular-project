<?php

// var_dump($_POST());exit();
$contatos[] = array ('nome' => "Bruno", 'Telefone' => "9999-2222", 'date' => date('d/m/y'), 'operadora' => ['nome' => "Oi", 'codigo' => 14, 'categoria' => "Celular"]);
$contatos[] = array('nome' => "Sandra", 'Telefone' => "9999-3333", 'date' => date('d/m/y'), 'operadora' => ['nome' => "Vivo", 'codigo' => 15, 'categoria' => "Celular"]);
$contatos[] = array ('nome' => "Mariana", 'Telefone' => "9999-9999", 'date' => date('d/m/y'), 'operadora' => ['nome' => "Tim", 'codigo' => 41, 'categoria' => "Celular"]);
if (isset($_POST['nome'])){
    
    $contatos[] = ['nome' => $_POST["nome"], 'Telefone' => $_POST["Telefone"], 'date' => $_POST["date('d/m/y')"], 'operadora' => ['nome' => $_POST["operadora"]["nome"], 'codigo' => $_POST["operadora"]["codigo"], 'categoria' => $_POST["operadora"]["Celular"]]];

}

echo json_encode($contatos); 