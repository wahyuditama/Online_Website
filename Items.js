document.querySelectorAll('a.nav-link').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // Hapus kelas 'active' dari semua section
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
    });
    // Tambahkan kelas 'active' ke section yang dituju
    document.querySelector(this.getAttribute('href')).classList.add('active');
  });
});
