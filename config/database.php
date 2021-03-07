<?php
    class Database {    
        private $db;
        public function __construct(){

            $host = "localhost";
            $username = "moetshertape";
            $password = "";

            try { 
                $this->db = new PDO("mysql:host=$host;dbname=my_moetshertape", $username, $password);
            } catch(PDOException $e) {
                echo $e->getMessage();
            }    
        }
        
        public function getConnection() {
            if ($this->db instanceof PDO) {
                return $this->db;
            }
        }
    }
?>