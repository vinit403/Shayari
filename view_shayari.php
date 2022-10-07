<?php  
$con = mysqli_connect("localhost","root","","category");
$sql = "select * from category";
$res1 = mysqli_query($con,$sql);

if(isset($_GET['s_id'])){
	$s_id = $_GET['s_id'];
	$sql = "delete from shayari where s_id = $s_id";
	mysqli_query($con,$sql);	
}
$sql = 'select * from shayari';
$res = mysqli_query($con,$sql);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
<table border="1" align="center">
	<tr>
		<th>Category Name</th>
		<th colspan="2">Shayari</th>
	</tr>	
	<?php  
	while ($row = mysqli_fetch_assoc($res)) {
	?>
	<tr>
		
			<!-- <?php  
				while ($cat = mysqli_fetch_assoc($res1)) {
			?>
			   <td><?php echo $row['cat_id'];?><?php echo $cat['cat_name']; ?></td>
			<?php } ?> -->
		<td align="center"><?php echo $row['cat_id']; ?></td>
		<td><?php echo $row['shayari_text']; ?></td>
		<td><a href="view_shayari.php? s_id=<?php echo $row['s_id']; ?>">Delete</a></td>
	</tr>
	<?php } ?>
</table>
</body>
</html>