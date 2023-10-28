document.addEventListener('DOMContentLoaded', function() {


    console.log("La DOM est chargé ! ");

    function changeIcon(data_score){

        const iconTransp = "iconTransp.png"

        switch (data_score) {
            case 1:
                const iconA = "iconA.png"; 
                addIconInExtension(iconA)
                break; 
        
            case 2:
                const iconB = "iconB.png"; 
                clignoterIcons(iconTransp, iconB, 6)
                break;
        
            case 3:
                const iconC = "iconC.png"; 
                clignoterIcons(iconTransp,iconC,8)
                break;
        
            case 4:
                const iconD = "iconD.png"; 
                clignoterIcons(iconTransp,iconD,10)
                break;
        
            case 5:
                const iconE = "iconE.png"; 
                clignoterIcons(iconTransp,iconE,12)
                break; 

            default:
                console.log("pas de data")
        }

    }

    document.getElementById('change-logo').addEventListener('click', function () {
        
        changeIcon(5)
        
    });

    function addIconInExtension(iconId) {
        chrome.action.setIcon({ path: { 128: iconId } });
    }


    function clignoterIcons(iconT, iconColor, nbreClignoMax) {
        let clignotements = 0;
        let etat = true;

        function changerIcone() {
            if (clignotements < nbreClignoMax) {
                if (etat) {
                    console.log("Changement vers iconTransp");
                    addIconInExtension(iconT);
                } else {
                    console.log("Changement vers iconB");
                    addIconInExtension(iconColor);
                }
                etat = !etat;
                clignotements++;
                setTimeout(changerIcone, 600); // Attendre 1 seconde avant de changer à nouveau
            } else {
                console.log("Clignotement terminé.");
            }
        }

        changerIcone(); // Démarre le clignotement
    }

});

