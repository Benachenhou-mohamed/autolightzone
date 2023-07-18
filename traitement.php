<?php 
    $produit = $_POST['produit'];
    $fname = $_POST['fname'];
    $tel = $_POST['tel'];
    $wilaya = $_POST['wilaya'];
    $commune = $_POST['commune'];
    $quantity = $_POST['quantity'];
    $livraison = $_POST['livraison'];

    $con = mysqli_connect("localhost","root","","form");

    $requete = "INSERT INTO personne(produit,fname, tel, wilaya, commune, quantity, livraison) 
    VALUES('$produit','$fname','$tel','$wilaya','$commune','$quantity','$livraison')" ;

    $query = mysqli_query($con,$requete);

    if(isset($query)){
        echo "<h1>Insertion avec succes</h1>";
    }
    else{
        echo "<h1>Erreur d'insertion</h1>";
    }

    mysqli_close($con);
?>