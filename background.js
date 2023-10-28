let performanceData;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.requestPerformanceData) {
    // Répondre au popup avec les données de performance
    sendResponse({ received: true, performanceData });
  } else {
    // Traiter les autres messages comme précédemment
    performanceData = request.performanceData;
    console.log("Données de performance reçues :", performanceData);
    sendResponse({ received: true });
  }
});