
<?php

// created by ravi

require('common/connection.php');

$restaurant = $_REQUEST['product_id'];

$query = "SELECT * FROM `restaurants` WHERE `restaurant_id`='$restaurant'";

$result = mysqli_query($connection, $query);
$data = null;

if ($result && mysqli_num_rows($result) > 0) {
    if ($row = mysqli_fetch_assoc($result)) {
       $data = [];

        while($row){
            $restaurant_id = $row['restaurant_id'];
            $food_query = "SELECT * FROM `products` WHERE `restaurant_id`";
            $food_result = mysqli_query($connection,$food_query);
            if( $food_row= mysqli_fetch_assoc($food_result)){
                $data[] = array_merge($row,$food_row);
            }
            
        }
    
        $output = array("status" => "success", "data" => $data);
       
    }

    

} else {
    
    $output = array("status" => "something went wrong");
}


echo json_encode($output);

?>