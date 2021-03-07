<?php 
    include_once '../../config/database.php';
    include_once '../../config/counter.php';

    $method = $_SERVER['REQUEST_METHOD'];

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $id = 0;
    if (isset($_REQUEST['request'])) {
        $id = filter_var($_REQUEST['request'], FILTER_SANITIZE_NUMBER_INT);
    }

    switch ($method) {
        case 'GET':
            $dbClass = new Database();
            $dbh = $dbClass->getConnection(); 
            $counter = new Counter($dbh);
            
            $stmt = $counter->getTotal();
            $num = $stmt->fetchColumn(0);
            echo json_encode($num);
        break;
        case 'POST':
            $dbClass = new Database();
            $dbh = $dbClass->getConnection(); 
            $counter = new Counter($dbh);

            $entityBody = file_get_contents('php://input');
            $counter->pushOne($entityBody);
        break;
    }
?>