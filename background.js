// Écouter les messages envoyés par le script de contenu
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // Afficher les données dans la console (à des fins de débogage)
    console.log("Données de performance reçues :", request.performanceData);
  
    // Traiter les données ici (vous pouvez les envoyer à un serveur, les stocker, etc.)
  
    // Réponse facultative au script de contenu
    sendResponse({ received: true });
  });