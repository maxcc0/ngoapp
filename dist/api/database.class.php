<?php
session_start();
class Database
			{
				function connect_database()
							{
									$DB_host = "localhost";
									$DB_user = "domutthiapp";
									$DB_pass = "domutthiapp";
									$DB_name = "domutthiapp";
									$conn = mysqli_connect($DB_host,$DB_user,$DB_pass,$DB_name);
									
									return $conn;
							}
			} 