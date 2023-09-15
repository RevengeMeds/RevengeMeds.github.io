<?php
$logfile = "visits.log";

$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'No referrer';
$timestamp = date("Y-m-d H:i:s");
$log_entry = "IP: $ip | Browser: $userAgent | Referer: $referer | Time: $timestamp" . PHP_EOL;

file_put_contents($logfile, $log_entry, FILE_APPEND);

echo "IP address, browser, and referer logged.";
?>
