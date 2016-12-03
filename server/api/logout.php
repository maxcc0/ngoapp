<?php

session_start();
unset($_SESSION['USER_ACTIVE']);
session_destroy();