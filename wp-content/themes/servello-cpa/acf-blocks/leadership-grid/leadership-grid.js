document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('leaderDialog')) {

        const modal = document.getElementById('leaderDialog');
        const img = document.getElementById('leaderImage');
        const name = document.getElementById('leaderName');
        const title = document.getElementById('leaderTitle');
        const bio = document.getElementById('leaderBio');
        const closeBtn = document.getElementById('closeDialog');
    
        // Function to clear previous leader data and reset scroll
        function clearModalContentAndResetScroll() {
            img.src = "";
            img.alt = "";
            name.textContent = "";
            title.textContent = "";
            bio.textContent = "";
        }
    
        // Function to disable scroll
        function disableScroll() {
            document.body.style.overflow = 'hidden';
        }
    
        // Function to enable scroll
        function enableScroll() {
            document.body.style.overflow = '';
        }
    
        // Event listener for opening the modal
        document.querySelectorAll('.leader-modal').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                // Clear any old data and reset scroll position
                clearModalContentAndResetScroll();
    
                // Populate with new data from the clicked button
                img.src = this.getAttribute('data-img');
                img.alt = `Image of ${this.getAttribute('data-name')}`;
                name.textContent = this.getAttribute('data-name');
                title.textContent = this.getAttribute('data-title');
                bio.innerHTML = this.getAttribute('data-bio'); // Ensure your bio content is safely encoded
    
                // Show the modal
                modal.showModal();
                setTimeout(() => bio.scrollTo(0, 0), 0);
                modal.focus();
    
                // Disable scroll on body
                disableScroll();
            });
        });
    
        // Event listener for closing the modal with the close button
        closeBtn.addEventListener('click', function() {
            modal.close();
            enableScroll();
        });
    
        // Close the modal when clicking outside of it
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.close();
                enableScroll();
            }
        });
    
        // Close the modal on pressing the Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                if (modal.open) {
                    modal.close();
                    enableScroll();
                }
            }
        });
    
        // Automatically open the modal for the first leadership item
        // const firstLeaderModalButton = document.querySelector('.leader-modal');
        // if (firstLeaderModalButton) {
        //     firstLeaderModalButton.click(); // Simulate click to open modal
        // }
    }
});
