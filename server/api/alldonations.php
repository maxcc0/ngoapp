<?php
include 'database.class.php';
$DB = new database;
$Connect = $DB->connect_database();
$ARRAY = array();

$SELECT1 = "SELECT * FROM ngo_pledge_table where donation_status = 'assigned'";

$RESULT1 = $Connect->query($SELECT1);
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