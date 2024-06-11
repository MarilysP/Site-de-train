<?php
session_start();
if (isset($_SESSION['prenom'])) {
    header('Location: ../html/index.php'); // Rediriger vers la page d'accueil après déconnexion
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loco Motiv' - Panier</title>
    
    <link rel="stylesheet" href="/css/compte.css">
    <link rel="shortcut icon" href="/images/icone.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');</style>
    <script src="/js/paniersimple.js" defer></script>
</head>
<body>
    <header>
        <section class="title">
            <p><a href="index.php">Loco Motiv'</a></p>
        </section>
        <nav>
            <ul>
                <li><a href="voyagez.html">Voyagez</a></li>
                <li><a href="Offres.html">Offres</a></li>
            </ul>
        </nav>
    </header>

    <?php 
        include '../include/database.php';
        global $db;
    ?>

    <div class="mid-page">
    <div class="formlog">
            <p>Me connecter :</p>
            <form method="post" action="">
                <input type="email" id="emaillog" name="emaillog" placeholder="Votre email" required><br><br>
                <input type="password" id="mot_de_passelog" name="mot_de_passelog" placeholder="Votre mot de passe" required><br><br>
                <input type="submit" name="formlogin"  id="formlogin" value="Se connecter">
            </form>
            <p><?php include '../include/login.php';?> </p>
    </div>
   
    

        <div class="form">
            <p>Formulaire d'inscription</p>
            <form method="post" action="">
                <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required><br><br>
                <input type="text" id="nom" name="nom" placeholder="Votre nom" required><br><br>
                <input type="email" id="email" name="email" placeholder="Votre email" required><br><br>
                <input type="password" id="mot_de_passe" name="mot_de_passe" placeholder="Votre mot de passe" required><br><br>
                <input type="password" id="cmot_de_passe" name="cmot_de_passe" placeholder="Confirmation du mot de passe" required><br><br>
                <input type="submit" name="formsend"  id= "formsending" value="Valider">
            </form>
            <p> <?php include '../include/signin.php';?></p>
        </div>
       
      
    </div>

    <div class="page-bottom">
        <div class="up-footer">
            <div class="row">
                <h1>Nos engagements</h1>
                <ul>
                    <li>Meilleurs prix garantis</li>
                    <li>Paiements sécurisés</li>
                    <li>Contact 7/7</li>
                </ul>
            </div>
            <div class="row2">
                <h1>Moyens de paiements</h1>
                <div class="all">
                    <div class="icon">
                        <i class="fa-brands fa-cc-paypal"></i>
                        <i class="fa-brands fa-cc-apple-pay"></i>
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-amazon-pay"></i>
                    </div>
                    <ul>
                        <li>Infos et conditions</li>
                        <li>Paiement en plusieurs fois</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <h1>Suivez-nous!</h1>
                <div class="icon">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                </div>
            </div>
        </div>
        <div class="low-footer">
            <h1>Inscrivez-vous à notre newsletter et profitez des meilleurs bons plans :</h1>
            <a href="/html/Newletter.html" target="_blank"><button><i class="fa-solid fa-paper-plane"></i></button></a>
        </div>
    </div>
</body>
</html>
