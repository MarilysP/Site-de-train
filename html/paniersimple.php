<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $trajet = array();
    foreach ($_POST as $key => $value) {
        $trajet[$key] = $value;
    }

    $_SESSION["trajet"] = $trajet;
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/paniersimple.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Loco Motiv' - Aller Simple</title>
    <link rel="shortcut icon" href="../images/icone.png" type="image/x-icon">
    <script src="../js/allersimple.js" defer></script>

</head>

<body>
    <header>
        <section class="title">
            <p> <a href="../html/index.php">Loco Motiv'</a></p>
        </section>
        <nav>
            <ul>
                <li> <a href="../html/Offres.html">Offres</a></li>
                <li> Contacts</li>
            </ul>
        </nav>
    </header>
    <div class="pagename">
        <h1>Voyagez :</h1>
    </div>
    <div class="mid-page">
        <div class="recapitulatif">
            
            <h1>Votre panier</h1>
            <p id="depart">Départ : <?php echo htmlspecialchars($trajet['gareDepart']); ?></p>
            <p id="arrivee">Arrivée : <?php echo htmlspecialchars($trajet['gareArrive']); ?></p>
            <p id="date">Date et prix : <?php echo htmlspecialchars($trajet['date']); ?></p>
            <p id="options">Options choisies :</p>
            <ul>
                <?php
                if (isset($trajet['options'])) {
                    foreach ($trajet['options'] as $option) {
                        echo '<li>' . htmlspecialchars($option) . '</li>';
                    }
                } else {
                    echo '<li>Aucune option choisie</li>';
                }
                ?>
            </ul>
            
           
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
            <h1>Inscrivez-vous à notre newsletter et profitez des meilleurs bons plans :</h1>
            <a href="../html/Newletter.html" target="_blank"><button><i class="fa-solid fa-paper-plane"></i></button></a>
        </div>
    </div>
</body>

</html>
