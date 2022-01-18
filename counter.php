// https://hibbard.eu/how-to-make-a-simple-visitor-counter-using-php/

<?php
  session_start();
  $counter_name = "counter.txt";

  if (!file_exists($counter_name)) {
    $f = fopen($counter_name, "w");
    fwrite($f,"0");
    fclose($f);
  }

  $f = fopen($counter_name,"r");
  $counterVal = fread($f, filesize($counter_name));
  fclose($f);

  if(!isset($_SESSION['hasVisited'])){
    $_SESSION['hasVisited']="yes";
    $counterVal++;
    $f = fopen($counter_name, "w");
    fwrite($f, $counterVal);
    fclose($f);
  }

  $counterVal = str_pad($counterVal, 5, "0", STR_PAD_LEFT);
?>
