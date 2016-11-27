
<?php
session_start();

if($_SESSION['USER_NAME'])
{
	echo $_SESSION['USER_ACTIVE'];
	
}