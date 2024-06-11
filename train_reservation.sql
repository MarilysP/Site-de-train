-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 09 juin 2024 à 13:24
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `train_reservation`
--

-- --------------------------------------------------------

--
-- Structure de la table `date_de_depart`
--

DROP TABLE IF EXISTS `date_de_depart`;
CREATE TABLE IF NOT EXISTS `date_de_depart` (
  `id_Date_de_depart` int NOT NULL AUTO_INCREMENT,
  `Date_depart` date NOT NULL,
  PRIMARY KEY (`id_Date_de_depart`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `gare_de_depart`
--

DROP TABLE IF EXISTS `gare_de_depart`;
CREATE TABLE IF NOT EXISTS `gare_de_depart` (
  `id_Gare_de_depart` int NOT NULL AUTO_INCREMENT,
  `Nom_de_Ville_de_depart` varchar(100) NOT NULL,
  `Nom_gare_de_depart` varchar(100) NOT NULL,
  PRIMARY KEY (`id_Gare_de_depart`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `gare_d_arrivee`
--

DROP TABLE IF EXISTS `gare_d_arrivee`;
CREATE TABLE IF NOT EXISTS `gare_d_arrivee` (
  `id_gare_d_arrivee` int NOT NULL AUTO_INCREMENT,
  `Nom_de_Ville_d_arrivee` varchar(100) NOT NULL,
  `Nom_gare_d_arrivee` varchar(100) NOT NULL,
  PRIMARY KEY (`id_gare_d_arrivee`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `heure_de_depart`
--

DROP TABLE IF EXISTS `heure_de_depart`;
CREATE TABLE IF NOT EXISTS `heure_de_depart` (
  `id_Heure_de_depart` int NOT NULL AUTO_INCREMENT,
  `Heure_depart` time NOT NULL,
  PRIMARY KEY (`id_Heure_de_depart`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `heure_d_arrivee`
--

DROP TABLE IF EXISTS `heure_d_arrivee`;
CREATE TABLE IF NOT EXISTS `heure_d_arrivee` (
  `id_Heure_d_arrivee` int NOT NULL AUTO_INCREMENT,
  `Heure_d_arrivee` time NOT NULL,
  PRIMARY KEY (`id_Heure_d_arrivee`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `options_de_depart`
--

DROP TABLE IF EXISTS `options_de_depart`;
CREATE TABLE IF NOT EXISTS `options_de_depart` (
  `id_Options_de_depart` int NOT NULL AUTO_INCREMENT,
  `Type_de_place` tinyint(1) NOT NULL,
  `Type_de_bagage` tinyint(1) NOT NULL,
  `Baggage_supplementaire` tinyint(1) NOT NULL,
  `Perturbation_trafic` tinyint(1) NOT NULL,
  `Garantie` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_Options_de_depart`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `options_de_retour`
--

DROP TABLE IF EXISTS `options_de_retour`;
CREATE TABLE IF NOT EXISTS `options_de_retour` (
  `id_Options_de_retour` int NOT NULL AUTO_INCREMENT,
  `Type_de_place` tinyint(1) NOT NULL,
  `Type_de_bagage` tinyint(1) NOT NULL,
  `Baggage_supplementaire` tinyint(1) NOT NULL,
  `Perturbation_trafic` tinyint(1) NOT NULL,
  `Garantie` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_Options_de_retour`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type_de_billet`
--

DROP TABLE IF EXISTS `type_de_billet`;
CREATE TABLE IF NOT EXISTS `type_de_billet` (
  `id_Type_de_billet` int NOT NULL AUTO_INCREMENT,
  `Type_de_billet` varchar(100) NOT NULL,
  PRIMARY KEY (`id_Type_de_billet`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prenom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mot_de_passe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=INNODB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `nom`, `prenom`, `email`, `mot_de_passe`) VALUES
(21, 'ridarch', 'ceedjy', 'marilysp@gmail.com', '$2y$12$9bj1MuV3bKghi.hAxf7ZMuVO5nyl5G9Uqu6JR1S1NFAPmvFnN8hP.'),
(20, 'test', 'Test', 'test@test.fr', '$2y$12$j.mmMB1aouTEf97gHuLvf.RVC5uT5kZtRsd/zOzknmcX9AWA1Cjt6');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_facture` int NOT NULL AUTO_INCREMENT,
  `id_utilisateur` int NOT NULL,
  `id_Type_de_billet` int NOT NULL,
  `id_gare_de_depart` int NOT NULL,
  `id_gare_d_arrivee` int NOT NULL,
  `Options_de_depart` varchar(255) NOT NULL,
  `Options_de_retour` varchar(255) NOT NULL,
  `Prix` decimal(10,2) NOT NULL,
  `Date_depart` DATETIME NOT NULL,
  `Date_de_retour` DATETIME NOT NULL,
  PRIMARY KEY (`id_facture`),
  FOREIGN KEY(`id_utilisateur`) REFERENCES `utilisateur`(`id_utilisateur`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`id_Type_de_billet`) REFERENCES `type_de_billet`(`id_Type_de_billet`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`id_gare_de_depart`) REFERENCES `gare_de_depart`(`id_gare_de_depart`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`id_gare_d_arrivee`) REFERENCES `gare_d_arrivee`(`id_gare_d_arrivee`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;