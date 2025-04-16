document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const ceremonyButton = document.getElementById('ceremony-btn');
    const ceremonyDetails = document.getElementById('ceremony-details');
    const backToHero = document.getElementById('back-to-hero');
    
    // Function to show ceremony details
    function showCeremonyDetails() {
        // First, add the visible class to make it appear with fade-in animation
        ceremonyDetails.classList.add('visible');
        
        // Prevent body scrolling when the ceremony details are shown
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide ceremony details
    function hideCeremonyDetails() {
        // Remove the visible class to trigger fade-out animation
        ceremonyDetails.classList.remove('visible');
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }
    
    // Add click event to ceremony button
    ceremonyButton.addEventListener('click', function(e) {
        e.preventDefault();
        showCeremonyDetails();
    });
    
    // Add click event to back to top button
    backToHero.addEventListener('click', function(e) {
        e.preventDefault();
        hideCeremonyDetails();
    });
    
    // Add keyboard support (Escape key to close)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && ceremonyDetails.classList.contains('visible')) {
            hideCeremonyDetails();
        }
    });
    
    // Prevent click on ceremony-details from bubbling up
    ceremonyDetails.addEventListener('click', function(e) {
        if (e.target === ceremonyDetails) {
            hideCeremonyDetails();
        }
    });
    
    // Add smooth hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.borderRadius = '4px';
            this.style.padding = '8px';
            this.style.marginLeft = '5px';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderRadius = '';
            this.style.padding = '8px 0';
            this.style.marginLeft = '0';
        });
    });
});