<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="result.css">
    <title>result Page</title>
</head>
<body>
    
<?php
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];

    $messagetxt = "";
    if(!empty($name) && !empty($email) && !empty($password) && !empty($confirmpassword)){
        if ($password == $confirmpassword) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $messagetxt = "$name خوش آمدید!<br> ورود شما با:<br> ایمیل: $email <br> رمزعبور: $password <br> با موفقیت انجام شد!";
            }
            else {
                $messagetxt = "ایمیل وارد شده صحیح نیست!";
            }
        }
        else {
            $messagetxt = "رمزعبور و تکرار آن یکسان نیست!";
        }
    }
    else {
        $messagetxt = "لطفا تمامی فیلد ها را پر کنید!";
    }


?>

<div class="container">
    <h1>نتیجه</h1>
    <br>
    <p id="result"><?php echo $messagetxt; ?></p>
</div>
</body>
</html>