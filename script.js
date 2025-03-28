
document.addEventListener("DOMContentLoaded", function () {
    console.log("InjeXcanner script loaded");
});

function startScan() {
    let url = document.getElementById("scan-url").value;
    let resultsDiv = document.getElementById("scan-results");
    
    if (!url) {
        resultsDiv.innerHTML = "<p style='color: red;'>Please enter a URL to scan.</p>";
        return;
    }
    
    resultsDiv.innerHTML = "<p>Scanning... Please wait.</p>";
    
    // Simulate scan process
    setTimeout(() => {
        let severityLevels = ["Low", "Medium", "High", "Critical"];
        let randomSeverity = severityLevels[Math.floor(Math.random() * severityLevels.length)];
        
        resultsDiv.innerHTML = `<p>Scan completed! Vulnerability severity: <strong>${randomSeverity}</strong></p>`;
    }, 2000);
}
