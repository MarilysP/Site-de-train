<?php
session_start();
session_unset();
session_destroy();
header('Location: /html/index.php'); // Rediriger vers la page d'accueil après déconnexion
exit();
?>
