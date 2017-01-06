<?php
$servername = "localhost";
$dbUserName = "root";
$dbPassword = "4USyLeVUJu";

header('Content-Type:text/xml');
/*echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';*/
    
try
{
    $conn = new PDO("mysql:host=$servername;dbname=SecretSanta", $dbUserName, $dbPassword);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $q = $_GET['q'];
    if (strpos(strtolower($q), 'update') === false && strpos(strtolower($q), 'drop') === false && strpos(strtolower($q), 'delete') === false && strpos(strtolower($q), 'alter') === false) //try and stop bad queries from getting in
    {
        $res = $conn->query($q);
        if ($res->errorCode() == '00000')
        {
            if (strpos(strtolower($q), 'insert') === false)
                echo json_encode($res->fetchAll(PDO::FETCH_ASSOC));
            else
                echo "OK";
        }
        else
            echo "Error";
    }
}
catch(PDOException $e)
{
    echo "Error" . $e->getMessage();
}

$conn=null;
