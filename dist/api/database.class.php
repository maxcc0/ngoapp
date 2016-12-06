<?php
session_start();
class Database
			{
				function connect_database()
							{
									$DB_host = "localhost";
									$DB_user = "domutthi";
									$DB_pass = "domutthi";
									$DB_name = "domutthi";
									$conn = mysqli_connect($DB_host,$DB_user,$DB_pass,$DB_name);
									
									return $conn;
							}
			} 