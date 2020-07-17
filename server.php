<?php 
   // initializing variables
   $username = "";
   $email    = "";
   $errors = array();

   // Create database connection
   $db = mysqli_connect('localhost', 'root', '', 'login_system');
   
   // Check connection
   if ($db->connect_error) {
   die("Connection failed: " . $db->connect_error);
   }

   // REGISTER USER
   if (isset($_POST['reg_user'])) {
      // receive all input values from the form
      $email = mysqli_real_escape_string($db, $_POST['email']);
      $password = mysqli_real_escape_string($db, $_POST['password']);
   
      // form validation: ensure that the form is correctly filled ...
      // by adding (array_push()) corresponding error unto $errors array
      if (empty($email)) { array_push($errors, "Email is required"); }
      if (empty($password)) { array_push($errors, "Password is required"); }
   
      // first check the database to make sure 
      // a user does not already exist with the same username and/or email
      $user_check_query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
      $result = mysqli_query($db, $user_check_query);
      $user = mysqli_fetch_assoc($result);
      
      if ($user) { // if user exists
         if ($user['email'] === $email) {
            array_push($errors, "email already exists");
         }
      }
   
      // Finally, register user if there are no errors in the form
      if (count($errors) == 0) {
         $password = md5($password);//encrypt the password before saving in the database
   
         $query = "INSERT INTO users (email, password) 
               VALUES('$email', '$password')";
         mysqli_query($db, $query);
         echo "Success!";
      }
   }
?>   