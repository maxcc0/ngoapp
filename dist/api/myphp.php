<?php
include 'database.class.php';
$DB = new database;
$Connect = $DB->connect_database();
date_default_timezone_set('Asia/Kolkata');

$INSERT = "INSERT INTO  ngo_pledge_table SET   ";
foreach($_POST['DATAasdasd'] as $KEY=>$VALUE)
{
    if($KEY == 'name')
    {
        $NAMES = $VALUE;
    }
    if($KEY == 'geoLocation')
    {
       foreach($VALUE['coords'] as $LAT=>$LONG)
       {
           if($LAT == 'latitude')
           {
               $LATS = $LONG;
           }
           if($LAT == 'longitude')
           {
               $LOTS = $LONG;
           }
       }
        $VALUE = $LATS.", ".$LOTS;
    }
    
    $INSERT2 .= $KEY." =  '".$VALUE."', ";
   
}
$UID = "UID = '".rand(0,99999999)."', created_on_date = '".date('Y-m-d H:i:s')."', donation_status = 'created', created_by = '".$NAMES."'";
$COM = $INSERT.$INSERT2.$UID;
if($Connect->query($COM))
{
    echo 'Thanks for donoring.';
}