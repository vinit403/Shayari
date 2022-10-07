<?php  

$con = mysqli_connect("localhost","root","","category");
if(isset($_GET['cat_id'])){
	$cat_id = $_GET['cat_id'];
	$sql = "delete from category where cat_id = $cat_id";
	mysqli_query($con,$sql);
}
$sql = 'select * from category';
$res =	mysqli_query($con,$sql);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body >
<table border="1" align="center">
	<tr >
		<th colspan="2">Category Name:</th>
	</tr>
	<?php 
		while($row = mysqli_fetch_assoc($res)){
	?>
	<tr>
		<td><?php echo $row['cat_name']; ?></td>
		<td><a href="cat_view.php?cat_id=<?php echo $row['cat_id']; ?>">Delete</a></td>

	</tr>

	<?php } ?>	
</table>
</body>
</html>