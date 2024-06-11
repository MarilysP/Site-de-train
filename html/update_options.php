<?php
session_start();

// Affiche l'état initial de la session pour le débogage
echo "État initial de la session : " . print_r($_SESSION, true) . "\n";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'] ?? '';
    $option = $_POST['option'] ?? '';

    if (!isset($_SESSION['trajet']['options'])) {
        $_SESSION['trajet']['options'] = [];
    }

    if ($action === 'add') {
        if (!in_array($option, $_SESSION['trajet']['options'])) {
            $_SESSION['trajet']['options'][] = $option;
            echo "Option ajoutée : $option\n";
        } else {
            echo "Option déjà présente : $option\n";
        }
    } elseif ($action === 'remove') {
        if (($key = array_search($option, $_SESSION['trajet']['options'])) !== false) {
            unset($_SESSION['trajet']['options'][$key]);
            $_SESSION['trajet']['options'] = array_values($_SESSION['trajet']['options']); // Réindexer l'array
            echo "Option supprimée : $option\n";
        } else {
            echo "Option non trouvée : $option\n";
        }
    }

    // Affiche l'état de la session après modification pour le débogage
    echo "État de la session après modification : " . print_r($_SESSION, true) . "\n";
}
?>
