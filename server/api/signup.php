<?php
include 'database.class.php';

date_default_timezone_set('Asia/Kolkata');

$DB = new database;
$Connect = $DB->connect_database();
 $INSERT = "INSERT INTO  ngo_signup_table SET   ";
foreach($_POST['DATAasdasd'] as $KEY=>$VALUE)
{
    if($KEY == 'email')
    {
        $EMAIL = $VALUE;
    }
    
    if($KEY == 'password')
    {
        $VALUE = md5($VALUE);
    }
    $INSERT2 .= $KEY." =  '".$VALUE."', ";
   
}

$UID = "UID = '".rand(0,99999999)."', dateRegis = '".date('Y-m-d H:i:s')."'";

if(ChckUser($EMAIL) == true)
{
  $COM = $INSERT.$INSERT2.$UID;
if($Connect->query($COM))
{
    echo "Thanks for registering with us.";
} 
}
else
{
    echo 'User already registered.';
}

 

function ChckUser($ID)
{
    $DB = new database;
$Connect = $DB->connect_database();
    
    $SELECT = "SELECT * FROM ngo_signup_table WHERE email = '".$ID."'";
    $RESULT = $Connect->query($SELECT);
    if($RESULT->num_rows > 0)
    {
        
       return false;
    }
    else
    {
        return true;
    }
}