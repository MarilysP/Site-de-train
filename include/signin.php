<?php
        if (isset($_POST['formsend'])) {
            extract($_POST);
            if (!empty($mot_de_passe) && !empty($cmot_de_passe) && !empty($email) && !empty($prenom) && !empty($nom)) {
                if ($mot_de_passe == $cmot_de_passe) {
                    $options = ['cost' => 12];
                    $hashpass = password_hash($mot_de_passe, PASSWORD_BCRYPT, $options);

                    

                    // Vérifier si l'email existe déjà
                    $c = $db->prepare("SELECT email FROM utilisateur WHERE email = :email");
                    $c->execute(['email' => htmlspecialchars($email)]);
                    $result = $c->rowCount();

                    if ($result == 0) {
                        // Insérer le nouvel utilisateur
                        $q = $db->prepare("INSERT INTO utilisateur (email, mot_de_passe, prenom, nom) VALUES (:email, :mot_de_passe, :prenom, :nom)");
                        $q->execute([
                            'email' => htmlspecialchars($email),
                            'mot_de_passe' => $hashpass,
                            'prenom' => htmlspecialchars($prenom),
                            'nom' => htmlspecialchars($nom)
                        ]);
                        echo "Le compte a été créé.";
                    } else {
                        echo "Cet email est déjà utilisé.";
                    }
                } else {
                    echo "Les mots de passe ne correspondent pas.";
                }
            } else {
                echo "Tous les champs doivent être remplis.";
            }
        }
        ?>
        