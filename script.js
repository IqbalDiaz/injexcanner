// Show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active state in sidebar (optional)
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Switch between login and signup tabs
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Activate clicked button
    event.target.classList.add('active');
}

// Start scan button functionality
document.getElementById('start-scan')?.addEventListener('click', function() {
    const url = document.getElementById('target-url').value;
    const scanType = document.querySelector('input[name="scan-type"]:checked').value;
    
    if (!url) {
        alert('Please enter a target URL');
        return;
    }
    
    if (scanType === 'full') {
        // Check if user is logged in (in a real app)
        showSection('login');
        alert('Please login to perform a full scan');
    } else {
        // Simulate scan in progress
        alert(`Quick scan started for ${url}`);
        // In a real app, you would initiate the scan here
    }
});

// Initialize the page with home section active
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});