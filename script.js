function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.add('active');
    overlay.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay')

    sidebar.classList.remove('active');
    overlay.classList.remove('active');

    document.body.style.overflow = ''; 
}