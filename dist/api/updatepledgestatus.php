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
    // if($K == 'donation_status')
	// {
	//     $donation_status= $V;
    // }
    $UPDATE = "UPDATE ngo_pledge_table SET picked_by = '".$_SESSION['USER_ACTIVE']."', picked_on_date = '".date('Y-m-d H:i:s')."', donation_status = 'picked' where UID = '".$UID."'";
    $Connect->query($UPDATE);  
    }
    
     
}
echo json_encode($_POST['data']); 