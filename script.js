// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("InjeXcanner script loaded"); // Log message to confirm script is loaded
});

// Function to start the scan process
function startScan() {
    let url = document.getElementById("scan-url").value; // Get URL input value
    let resultsDiv = document.getElementById("scan-results"); // Get results display div

    // Check if the input field is empty
    if (!url) {
        resultsDiv.innerHTML = "<p style='color: red;'>Please enter a URL to scan.</p>"; // Show error message
        return;
    }

    resultsDiv.innerHTML = "<p>Scanning... Please wait.</p>"; // Display scanning message

    // Simulate scan process with a delay
    setTimeout(() => {
        let severityLevels = ["Low", "Medium", "High", "Critical"]; // Define severity levels
        let randomSeverity = severityLevels[Math.floor(Math.random() * severityLevels.length)]; // Randomly select severity

        // Display scan result with a randomly chosen severity level
        resultsDiv.innerHTML = `<p>Scan completed! Vulnerability severity: <strong>${randomSeverity}</strong></p>`;
    }, 2000); // Simulate a 2-second scan time
}
