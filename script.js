document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    function showTab(tabId) {
        tabContents.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    toggleMenuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
    });

    // Inicialmente mostrar la primera pestaña
    if (menuLinks.length > 0) {
       showTab(menuLinks[0].getAttribute('data-tab'));
    }
    
});
