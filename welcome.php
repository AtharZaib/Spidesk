<html>
<body>


<?php

$Name=$_POST['cn'];
	$Email=$_POST['em'];
	$PhoneNumner=$_POST['pn'];
	 $Message=$_POST['message'];

$to      = 'iatharzaib@gmail.com';
$subject = 'Query';
$message = 'You have a new Query, 


Name: '.$Name.'
Email: '.$Email.'
Phone Number: '.$PhoneNumner.'
Message: '.$Message.'

';

$headers = "From:" .$Email . "\r\n" .
"Reply-To:" .$Email . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>

</body>
</html>
