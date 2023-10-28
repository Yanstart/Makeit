function formatSize(size) {
    const units = ["octets", "ko", "Mo", "Go", "To"];
    let unitIndex = 0;
  
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
  
    return size.toFixed(2) + " " + units[unitIndex];
  }

document.addEventListener('DOMContentLoaded', function () {
    const loadTimeElement = document.getElementById('loadTime');
    const responseTimeElement = document.getElementById('reponseTime');
    const pageWeightElement = document.getElementById('totalSize');
  
    // Envoyer une demande au script de fond pour obtenir les données de performance
    chrome.runtime.sendMessage({ requestPerformanceData: true }, function (response) {
      if (response && response.received && response.performanceData) {
        loadTimeElement.textContent = 'Load Time: ' + response.performanceData.loadTime + ' ms';
        responseTimeElement.textContent = 'Response Time: ' + response.performanceData.responseTime + ' ms';
        pageWeightElement.textContent = 'Page Weight: ' + formatSize(response.performanceData.totalSize);
      } else {
        loadTimeElement.textContent = 'Données de performance non disponibles';
        responseTimeElement.textContent = '';
        pageWeightElement.textContent = '';
      }
    });
  });