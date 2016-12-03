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
    if($K == 'donation_status')
	{
	    $donation_status= $V;
    }
 
    }
    if($donation_status === 'assigned'){
      $UPDATE = "UPDATE ngo_pledge_table SET assigned_to = NULL, donation_status = 'created', assigned_on_date=NULL where UID = '".$UID."'";  
      $Connect->query($UPDATE); 
    }
      if($donation_status === 'picked'){
          
      $UPDATE = "UPDATE ngo_pledge_table SET closed_by = '".$_SESSION['USER_ACTIVE']."', closed_on_date = '".date('Y-m-d H:i:s')."', donation_status = 'closed' where UID = '".$UID."'";  
      $Connect->query($UPDATE); 
    }
     
     
}