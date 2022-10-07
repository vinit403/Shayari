<?php 	 
$con = mysqli_connect("localhost","root","","category");
if(isset($_POST['submit'])){
	$cat_name = $_POST['name'];

	$sql = "insert into category(cat_name) values('$cat_name')";
	mysqli_query($con,$sql);
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
	<h1 align="center">Shayari Category</h1>
<form method="post" >

	<table border="1" align="center">
		<tr>
			<th>category name</th>
			<td><input type="text" name="name" placeholder="Enter Category Name"></td>
			<td><input type="submit" name="submit"></td>
		</tr>
	</table>
</form>
</body>
</html>