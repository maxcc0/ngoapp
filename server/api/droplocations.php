<?php

include 'database.class.php';

$DB = new database;

$Connect = $DB->connect_database();

$SELECT = "SELECT * FROM ngo_droplocations_table";
$Result = $Connect->query($SELECT);

$ARRAY = array();

if($Result->num_rows > 0)
{
while($Row = $Result->fetch_assoc())
{
$ARRAY[] = array('addressid'=>$Row['addressid'],'address'=>$Row['address'],'geolocation'=>$Row['geolocation']);
}

echo json_encode($ARRAY);

}