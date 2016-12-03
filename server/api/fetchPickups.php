<?php

function calculate_distance($lat1, $lon1, $lat2, $lon2, $unit='N') 
{ 
  $theta = $lon1 - $lon2; 
  $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta)); 
  $dist = acos($dist); 
  $dist = rad2deg($dist); 
  $miles = $dist * 60 * 1.1515;
  $unit = strtoupper($unit);

  if ($unit == "K") {
    return ($miles * 1.609344); 
  } else if ($unit == "N") {
      return ($miles * 0.8684);
    } else {
        return $miles;
      }
}

include 'database.class.php';
$DB = new database;
$Connect = $DB->connect_database();
 foreach($_POST['origin'] as $KEY=>$VALUE)
{
   
    
       foreach($VALUE as $LAT=>$LONG)
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
    
      $VALUESSS .= $LATS.", ".$LOTS." | ";
       
    
     
}
$EXPO = explode(' | ',$VALUESSS);
$NEW = explode(', ',$EXPO[0]);
$ARRAY = array();


$SELECT = "SELECT * FROM ngo_pledge_table where donation_status = 'created' OR donation_status = 'assigned' OR donation_status = 'picked'";

$RESULT1 = $Connect->query($SELECT);
if($RESULT1->num_rows > 0)
{
    while($ROW = $RESULT1->fetch_assoc())
    {
        $PLEDGESTATUS = $ROW['donation_status'];
        $ASSIGNEDONDATE = $ROW['assigned_on_date'];
        $UID = $ROW['UID'];

        if( $PLEDGESTATUS === 'assigned' && $ASSIGNEDONDATE !== NULL && 
        strtotime("now") > strtotime("+4 hours", strtotime($ASSIGNEDONDATE))){
            $UPDATE = "UPDATE ngo_pledge_table SET assigned_to = NULL, donation_status = 'created', assigned_on_date=NULL where UID = '".$UID."'";
              $Connect->query($UPDATE); 
            }    
    };
}

$RESULT = $Connect->query($SELECT);
$ARRAY = array();
if($RESULT->num_rows > 0)
{
    while($ROW = $RESULT->fetch_assoc())
    {
            
        if ($ROW['donation_status'] === 'created' || ($ROW['donation_status'] ==='assigned' && $ROW['assigned_to'] === $_SESSION['USER_ACTIVE'])
        || ($ROW['donation_status'] === 'picked' && $ROW['picked_by'] === $_SESSION['USER_ACTIVE'])){

           $LATS = explode(', ',$ROW['geoLocation']);
        if(calculate_distance($NEW[0],$NEW[1],$LATS[0],$LATS[1],'K') <= '1')
        {
           $ARRAY[]  = array('donation_id'=>$ROW['UID'], 'donor_name'=>$ROW['name'], 'donor_address'=>$ROW['address'], 'donor_contact'=>$ROW['contact'], 'donation_status'=>$ROW['donation_status'], 'donation_type'=>$ROW['donation_type'], 'donor_location'=>$ROW['geoLocation']);
        }  
        }
                
    }
    echo json_encode($ARRAY)    ;
}