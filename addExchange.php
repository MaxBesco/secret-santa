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
    $data = json_decode(stripslashes($_GET['q']));
    
    //add the entry to the exchange table
    echo "1";
    $eID = rand();
    $conn->query("INSERT INTO exchanges (exchangeID, creatorID, title, description) VALUES(".$eID.",".$data[0].",'".$data[1]."','".$data[2]."');");
    $sql = "INSERT INTO participants(exchangeID, email, buyingForEmail) VALUES ";
    for($i =0; $i < $data[3]; $i++) // for each email address
    {
        $sql = "INSERT INTO participants(exchangeID, email, buyingForEmail) VALUES (".$eID.",'". $data[4+$i]."','".$data[$data[3]+$i+4]."')";
        $conn->query($sql);
    }
    echo $sql;

}
catch(PDOException $e)
{
    echo "Error" . $e->getMessage();
}

$conn=null;
