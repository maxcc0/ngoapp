<?php
session_start();
class Database
			{
				function connect_database()
							{
									$DB_host = "localhost";
									$DB_user = "socialpixe";
									$DB_pass = "socialpixe";
									$DB_name = "socialpixe";
									$conn = mysqli_connect($DB_host,$DB_user,$DB_pass,$DB_name);
									
									return $conn;
							}
			} 