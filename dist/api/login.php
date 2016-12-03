<?php
session_start();
include 'database.class.php';
include 'rest.php';

$DB = new database;
$Connect = $DB->connect_database();

if($_POST['data'])
	{
		foreach($_POST['data'] as $KEY=>$VALUE)
				{
					if($KEY == 'email')
						{
							$EMAIL= $VALUE;
						}
					if($KEY == 'password')
						{
							$password= $VALUE;
						}
					
				}
		$SELECT = "SELECT * FROM ngo_signup_table where email = '".$EMAIL."' and password = '".md5($password)."'";
		$RESULT = $Connect->query($SELECT);
		if($RESULT->num_rows > 0)
					{
						while($ROW = $RESULT->fetch_assoc())
								{
									$_SESSION['USER_ACTIVE'] = $ROW['UID'];
									$_SESSION['USER_NAME'] = $ROW['name'];
									$_SESSION['USER_EMAIL'] = $ROW['email'];
									echo $_SESSION['USER_ACTIVE'];
								}
					}
			else
			{
				
		$protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.1');
        header($protocol . ' ' . 412);
		header('Content-Type: application/json');
				echo json_encode('Username or password is incorrect.');
		exit;
			}
	}