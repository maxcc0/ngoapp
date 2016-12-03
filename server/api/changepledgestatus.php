<?php

//changepledgestatus.php

include 'database.class.php';
$DB = new database;
$Connect = $DB->connect_database();
 foreach($_POST['data'] as $key )
{
    foreach($key as $K => $V)
    {
         
 if($K === 'donation_id')
    {
        $UID = $V;
    }
    $UPDATE = "UPDATE ngo_pledge_table SET assigned_to = '".$_SESSION['USER_ACTIVE']."', assigned_on_date = '".date('Y-m-d H:i:s')."', donation_status = 'assigned' where UID = '".$UID."'";
    $Connect->query($UPDATE);  
    }
     
     
}