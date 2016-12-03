<?php

include 'database.class.php';

$DB = new database;

$Connect = $DB->connect_database();

$SELECT = "SELECT * FROM ngo_signup_table";
$Result = $Connect->query($SELECT);

$ARRAY = array();

if($Result->num_rows > 0)
{
while($Row = $Result->fetch_assoc())
{
$ARRAY[] = array('name'=>$Row['name'],'email'=>$Row['email'],'contact'=>$Row['contact'], 
'role'=>$Row['user_role'], 'userid'=>$Row['UID']);
}

echo json_encode($ARRAY);

}