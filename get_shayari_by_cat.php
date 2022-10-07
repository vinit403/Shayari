<?php  

$con = mysqli_connect("localhost","root","","category");
$c_id = $_GET['c_id'];
$sql = "select * from shayari where cat_id=$c_id";
$res = mysqli_query($con,$sql);

$arr = array();
while($row = mysqli_fetch_assoc($res)) {
	$arr[] = $row;
}
echo json_encode($arr);
?>