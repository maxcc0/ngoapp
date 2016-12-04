<?php
include 'database.class.php';
$DB = new database;
$Connect = $DB->connect_database();
$ARRAY = array();
$SELECT = "SELECT * FROM ngo_pledge_table ";
$RESULT = $Connect->query($SELECT);
if($RESULT->num_rows > 0)
{
    while($ROWS = $RESULT->fetch_assoc())
    {
        $ARRAY[]  = array('donation_id'=>$ROWS['UID'], 'donor_name'=>$ROWS['name'], 'donor_address'=>$ROWS['address'], 'donor_contact'=>$ROWS['contact'], 'donor_location'=>$ROWS['geoLocation'], 'contact_alternate'=>$ROWS['contact_alternate'], 'created_by'=>$ROWS['created_by'], 'assigned_to'=>$ROWS['assigned_to'], 'assigned_on_date'=>$ROWS['assigned_on_date'], 'picked_by'=>$ROWS['picked_by'], 'closed_by'=>$ROWS['closed_by'], 'status'=>$ROWS['donation_status'],
         'donation_type'=>$ROWS['donation_type'], 'created_on_date'=>$ROWS['created_on_date']);
    }
    echo json_encode($ARRAY);
}