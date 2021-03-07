<?php
    class Counter {
        public function __construct($db){
            $this->conn = $db;
        }
        
        public function getTotal() {
            $sql = "SELECT COUNT(*) FROM counter";
            $ret = $this->conn->prepare($sql);
            $ret->execute();
            return $ret;
        }
        
        public function pushOne($guid) {
            $sql = "INSERT INTO counter(guid, timestamp) VALUES (?, ?)";
            $stmt = $this->conn->prepare($sql);
            $check = $stmt->execute([$guid, null]);

            if ($check) {
                return true;
            } else {
                return false;
            }
        }
    }
?>