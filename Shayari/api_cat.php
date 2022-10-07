<?php  

$con = mysqli_connect("localhost","root","","category");
$sql = "select * from category";
$res = mysqli_query($con,$sql);

$arr = array();
while($row = mysqli_fetch_assoc($res)) {
	// code...
	$arr[] = $row;
}

echo json_encode($arr);

?>