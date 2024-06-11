<?php
        if (isset($_POST['formlogin'])) {
            extract($_POST);
            if (!empty($emaillog) && !empty($mot_de_passelog)) {
                
                $q = $db->prepare("SELECT * FROM utilisateur WHERE email = :email");
                $q->execute(['email' => htmlspecialchars($emaillog)]);
                $result = $q->fetch();
                if ($result==true) {
                    if (password_verify($mot_de_passelog, $result['mot_de_passe'])) {
                        //echo "Le mot de passe est bon, connexion en cours";
                        $_SESSION['prenom']= $result['prenom'];
                        $_SESSION['id_utilisateur']= $result['id_utilisateur'];
                        header('Location: /html/index.php'); // Rediriger vers la page d'accueil après déconnexion
                    } else {
                        echo "le mot de passe n'est pas correcte";
                    }
                    
                } else {
                    echo "Le compte portant l'email " . htmlspecialchars($emaillog) . " n'existe pas.";
                }
            } else {
                echo "Veuillez compléter l'ensemble des champs."; 
            }
        }
        ?>