// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('syncForm');
    const responseMessage = document.getElementById('formResponse');

    // Menangani pengiriman form (Submit)
    form.addEventListener('submit', function(e) {
        // Mencegah halaman reload saat klik tombol submit
        e.preventDefault();

        // Mengambil data dari input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Validasi sederhana
        if (name && email) {
            // Menampilkan pesan sukses kepada pengguna
            responseMessage.innerHTML = `<p style="color: green; margin-top: 10px;">Terima kasih, ${name}! Pesan Anda telah terkirim. Kami akan menghubungi lewat email: ${email}.</p>`;
            
            // Mengosongkan form kembali
            form.reset();
        } else {
            alert("Mohon isi semua kolom!");
        }
    });

    // Efek halus saat klik link navigasi (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});