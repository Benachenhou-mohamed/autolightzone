document.addEventListener("DOMContentLoaded", function(){
    //============responsive navbar===============================
        btnNav = document.querySelector(".menu-bare");
        nav = document.querySelector(".navigation");
        ul = document.getElementById("ul-rwd");
    
        btnNav.onclick = function() {
            nav.classList.toggle("active");
            ul.style.display = nav.classList.contains("active") ? 'block' : 'none';
          };
    //=====================prix total==========================================
          
             
    // Obtenir les références des éléments HTML nécessaires
    var numElement = document.getElementById('numero');
    var wilayaSelect = document.getElementById("wilaya");
    var domicileRadio = document.getElementById("domicile");
    var bureauRadio = document.getElementById("bureau");
    var priceElement = document.getElementById("price");
    numElement.addEventListener("input", updatePrice);
    
    // Définir les prix de livraison pour chaque wilaya et chaque choix
    var deliveryPrices = {
        "Adrar": {
            domicile: 1000,
            bureau: 500
        },
        "Chlef": {
            domicile: 400,
            bureau: 150
        },
        "Laghouat": {
            domicile: 650,
            bureau: 300
        },
        "Oum El Bouaghi": {
            domicile: 500,
            bureau: 150
        },
        "Batna": {
            domicile: 500,
            bureau: 150
        },
        "Bejaia": {
            domicile: 500,
            bureau: 150
        },
        "Biskra": {
            domicile: 600,
            bureau: 200
        },
        "Bechar": {
            domicile: 700,
            bureau: 300
        },
        "Blida": {
            domicile: 450,
            bureau: 150
        },
        "Bouira": {
            domicile: 450,
            bureau: 150
        },
        "Tamanrasset": {
            domicile: 1200,
            bureau: 750
        },
        "Tebessa": {
            domicile: 550,
            bureau: 150
        },
        "Tlemcen": {
            domicile: 500,
            bureau: 150
        },
        "Tiaret": {
            domicile: 500,
            bureau: 150
        },
        "Tizi Ouzou": {
            domicile: 500,
            bureau: 150
        },
        "Alger": {
            domicile: 300,
            bureau: 150
        },
        "Djelfa": {
            domicile: 650,
            bureau: 200
        },
        "Jijel": {
            domicile: 500,
            bureau: -1
        },
        "Setif": {
            domicile: 500,
            bureau: 150
        },
        "Saida": {
            domicile: 450,
            bureau: -1
        },
        "Skikda": {
            domicile: 500,
            bureau: 150
        },
        "Sidi Bel Abbes": {
            domicile: 500,
            bureau: 150
        },
        "Annaba": {
            domicile: 550,
            bureau: 150
        },
        "Guelma": {
            domicile: 500,
            bureau: 150
        },
        "Constantine": {
            domicile: 500,
            bureau: 150
        },
        "Medea": {
            domicile: 500,
            bureau: 150
        },
        "Mostaganem": {
            domicile: 0,
            bureau: 0
        },
        "MSila": {
            domicile: 500,
            bureau: 200
        },
        "Mascara": {
            domicile: 400,
            bureau: -1
        },
        "Ouargla": {
            domicile: 650,
            bureau: 300
        },
        "Oran": {
            domicile: 400,
            bureau: 150
        },
        "El Bayadh": {
            domicile: 700,
            bureau: 300
        },
        "Bordj Bou Arreridj": {
            domicile: 500,
            bureau: 150
        },
        "Boumerdes": {
            domicile: 450,
            bureau: 150
        },
        "El Tarf": {
            domicile: 450,
            bureau: -1
        },
        "Tissemsilt": {
            domicile: 550,
            bureau: -1
        },
        "El Oued": {
            domicile: 650,
            bureau: 300
        },
        "Khenchela": {
            domicile: 500,
            bureau: -1
        },
        "Souk Ahras": {
            domicile: 500,
            bureau: 150
        },
        "Tipaza": {
            domicile: 450,
            bureau: 150
        },
        "Mila": {
            domicile: 500,
            bureau: 150
        },
        "Ain Defla": {
            domicile: 400,
            bureau: 150
        },
        "Naama": {
            domicile: 700,
            bureau: 300
        },
        "Ain Temouchent": {
            domicile: 450,
            bureau: 150
        },
        "Ghardaia": {
            domicile: 650,
            bureau: 250
        },
        "Relizane": {
            domicile: 500,
            bureau: 150
        },
        "El M'ghair": {
            domicile: 550,
            bureau: -1
        },
        "El Menia": {
            domicile: 700,
            bureau: -1
        },
        "Ouled Djellal": {
            domicile: 650,
            bureau: 200
        },
        "Beni Abbes": {
            domicile: 700,
            bureau: -1
        },
        "Timimoun": {
            domicile: 1000,
            bureau: -1
        },
        "Touggourt": {
            domicile: 650,
            bureau: 300
        },
        "In Salah": {
            domicile: 1200,
            bureau: -1
        },
        "In Guezzam": {
            domicile: 1200,
            bureau: -1
        }
    };
    
    
    // Fonction pour mettre à jour le prix en fonction de la wilaya et du choix de livraison sélectionnés
    function updatePrice() {
      var selectedWilaya = wilayaSelect.value;
      var selectedDeliveryChoice = domicileRadio.checked ? "domicile" : "bureau";
      var selectedPrice = deliveryPrices[selectedWilaya][selectedDeliveryChoice];
    
     /*if (selectedPrice === -1) {
            // Afficher un message indiquant qu'il n'y a pas de bureau dans cette wilaya
            document.getElementById("message-bureau").style.display = "block";
        } else {
            // Cacher le message s'il est affiché
            document.getElementById("message-bureau").style.display = "none";
        }*/
      var productPrice = parseInt(document.getElementById("prixproduit").textContent)* numElement.value;
      var totalPrice = productPrice + selectedPrice ;
      priceElement.textContent = selectedPrice + " دج";
      document.getElementById("prixtotal").textContent = totalPrice + " دج"
    }
    domicileRadio.checked = true;
    
    // Ajouter des écouteurs d'événement pour détecter les changements de sélection
    wilayaSelect.addEventListener("change", updatePrice);
    domicileRadio.addEventListener("change", updatePrice);
    bureauRadio.addEventListener("change", updatePrice);
    
    // Appeler la fonction une fois au chargement de la page pour afficher le prix initial
    updatePrice();
    
    
    
    //=================================================================================================================
    /* let popup = document.getElementById('popup');
    let popupBouton = document.getElementById('popup-button');
    let closePopup = document.getElementById('close-popup');
    
    popupBouton.onclick = function(){
      popup.classList.add("open-popup");
    }
    closePopup.onclick = function(){
      popup.classList.remove("open-popup");
    }
    
    */
    
    
    //========================================================================================
    
    
       let form = document.getElementById('form');
    
       form.addEventListener('submit', function(event) {
          event.preventDefault();
    
          // Utilisation d'AJAX pour envoyer les données du formulaire au serveur
          let formData = new FormData(form);
          let xhr = new XMLHttpRequest();
          xhr.open("POST", form.action, true);
    
          xhr.onload = function() {
             if (xhr.status === 200) {
                // L'insertion a réussi, afficher le popup
                let popup = document.getElementById('popup');
                popup.classList.add("open-popup");
             } else {
                // L'insertion a échoué, afficher un message d'erreur si nécessaire
                console.error("Erreur lors de l'insertion dans la base de données.");
             }
          };
    
          xhr.onerror = function() {
             console.error("Erreur de communication avec le serveur.");
          };
    
          xhr.send(formData);
       });
        let closePopup = document.getElementById('close-popup');
        closePopup.onclick = function() {
            let popup = document.getElementById('popup');
            popup.classList.remove("open-popup");
        };
    
    
    });
    
    //====================gallery==========================
    function myImgFunction(petiteImg){
        var grandeImg = document.getElementById('grand-img');
       
        grandeImg.src = petiteImg.src ;
    }
    //===================================================
    