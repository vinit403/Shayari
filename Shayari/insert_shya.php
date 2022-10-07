<?php  
$con = mysqli_connect("localhost","root","","category");
$sql = "select * from category";
$res = mysqli_query($con,$sql);
if(isset($_POST['submit'])){
	$cat_id = $_POST['id'];
	$shayari_text = $_POST['text'];
	
	$sql = "insert into shayari(cat_id,shayari_text) values ('$cat_id','$shayari_text')";
	mysqli_query($con,$sql);
	// code...
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
<form method="post">
	<table border="1" align="center">
		<tr>
			<th>Cat_id :-</th>
			<th>
				<select name="id" id="">
					<option value="">Select Category</option>
					<?php  
						while ($cat = mysqli_fetch_assoc($res)) {
					?>
					<option value="<?php echo $cat['cat_id']; ?>"><?php echo $cat['cat_name']; ?></option>
					<?php } ?>
				</select>
			</th>
		</tr>
		<tr>
			<th>Shayari</th>
			<td><textarea name="text" placeholder="Enter Shayari Here." rows="5" cols="30"></textarea></td>
		</tr>
		<tr align="center">
			<td colspan="5"><input type="submit" name="submit"></td>
		</tr>	
	</table>
</form>
</body>
</html>