<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <style>@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');</style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Loco Motiv' </title>
    <link rel="shortcut icon" href="../images/icone.png" type="image/x-icon">
</head>
<body>
   <header>
    
    <section class="title">
        <p> Loco Motiv'</p>
    </section>
    <nav>
        <ul>
            <li class="li"><a href="/html/voyagez.html">Voyagez</a></li>
            <li class="li"><a href="/html/Offres.html">Offres</a></li>

            <?php
                include '../include/database.php';
                include '../include/signin.php';
                include '../include/login.php';
                global $db;
                if (isset($_SESSION['prenom'])) {
                    ?>
                    <li class="licompte">
                        <p>Compte de : <?php echo $_SESSION['prenom']; ?></p>
                        <a href="/include/logout.php">Déconnexion</a>
                    </li>
                    <?php
                }else{
                    ?>
                        <li><a href="/html/compte.php">Compte</a></li>
                    <?php
                }
            ?>
            
            
        </ul>
        
    </nav>
   </header>
   

   <section class="mid-page">
    <section class="card">
            <h1> Toutes les destinations, au même <span>prix</span> !</h1>
            <button><a href="/html/voyagez.html">Réservez vos billets de train.</a></button>
    </section>
    <img src="/images/famille train acceuil.png" alt="Image de train">
   </section>
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
             
             <h1>Moyens de paiments</h1>
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
            <h1>Inscrivez-vous à notre newsletter et profitez des meilleurs bons plans : </h1>
            <a href="/html/Newletter.html" target="_blank"><button><i class="fa-solid fa-paper-plane"></i></button></a> 
        </div>
   </div>
</body>
</html>