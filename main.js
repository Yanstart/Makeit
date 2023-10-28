function collectPerformanceData() {
    const navigationTiming = window.performance.timing; //On va récup les timing de chargement
  
    // Les différentes données mesurées pour juger la perfomance
    const loadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
    const domReadyTime = navigationTiming.domContentLoadedEventEnd - navigationTiming.navigationStart;
    const redirectTime = navigationTiming.redirectEnd - navigationTiming.redirectStart;
    const appCacheTime = navigationTiming.domainLookupStart - navigationTiming.fetchStart;
    const dnsLookupTime = navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart;
    const tcpTime = navigationTiming.connectEnd - navigationTiming.connectStart;
    const requestTime = navigationTiming.responseStart - navigationTiming.requestStart;
    const responseTime = navigationTiming.responseEnd - navigationTiming.responseStart;
  
    // Objet reprenant les données de performance
    const performanceData = {
      loadTime,
      domReadyTime,
      redirectTime,
      appCacheTime,
      dnsLookupTime,
      tcpTime,
      requestTime,
      responseTime
    };
  
    // Envoyer les données à l'extension ou à un serveur
    chrome.runtime.sendMessage({ performanceData });
  }
  
  // Exécuter la fonction lorsque la page a terminé de charger
  window.onload = function() {
    collectPerformanceData();
  };