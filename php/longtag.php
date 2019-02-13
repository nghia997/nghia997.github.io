<!--Use long tag-->
<?php
	$ngay="2/5/1997 ";
	list($name,$age)=["Pham Huu Nghia",21];
	define("GET", "Hello!");
?>
<!--Use short tag-->
<?=
	'Ngày sinh '.$ngay .'<br>Ten và tuoi :'.$name .'--'.$age . '<br>'.constant('GET')
?>