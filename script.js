    // Handle URL parameters for recipient name
    const urlParams = new URLSearchParams(window.location.search);
    const recipientName = urlParams.get('kepada');
    if (recipientName) {
      document.getElementById('recipient-name').textContent = recipientName.replace(/\+/g, ' ');
    }
  
    // Countdown function
    function countdown() {
      const countDate = new Date("September 29, 2024 19:00:00").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;
  
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
  
      document.getElementById('countdown').innerHTML =
        `<div>${textDay} <br/><p style="font-size:10px";>Hari</p></div>
         <div>${textHour} <br/><p style="font-size:10px";>Jam</p></div>
         <div>${textMinute} <br/><p style="font-size:10px";>Mnt</p></div>
         <div>${textSecond} <br/><p style="font-size:10px";>Dtk</p></div>`;
    }
  
    setInterval(countdown, 1000);
  
    // Copy to clipboard function
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening berhasil disalin!');
      }).catch(err => {
        alert('Gagal menyalin nomor rekening.');
      });
    }

// play music & scroll function

document.addEventListener('DOMContentLoaded', () => {
  const openMusicBtn = document.getElementById('open-music-btn');
  const frameCover = document.getElementById('frame-cover');
  const frame1 = document.getElementById('frame-1');
  const frame2 = document.getElementById('frame-2');
  const frame3 = document.getElementById('frame-3');
  const frame4 = document.getElementById('frame-4');
  const frame5 = document.getElementById('frame-5');
  const frame6 = document.getElementById('frame-6');
  const frame7 = document.getElementById('frame-7');
  const musicControl = document.getElementById('music-control');
  const backgroundMusic = document.getElementById('background-music');

  openMusicBtn.addEventListener('click', () => {
    // Menambahkan class untuk mengaktifkan transisi pada frame-cover
    frameCover.classList.add('out-frame');
      frame1.style.display = 'flex';
      frame2.style.display = 'flex';
      frame3.style.display = 'flex';
      frame4.style.display = 'flex';
      frame7.style.display = 'flex';

      document.body.style.overflow = 'auto';
      
      backgroundMusic.play();
      musicControl.classList.remove('hidden');
  });

  musicControl.addEventListener('click', () => {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          musicControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>';
        } else {
          backgroundMusic.pause();
          musicControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/></svg>';
      }
  });
});

document.getElementById('open-music-btn').addEventListener('click', function() {
  var frame1 = document.getElementById('frame-cover');
  var frame2 = document.getElementById('frame-1');

  frame1.classList.add('hiddentrans');
  frame2.classList.remove('hiddentrans');
  frame2.classList.add('visible');
});

        // Fungsi untuk menghapus UCAPAN / DOA / KOMENTAR
      //  function hapusSemuaItem() {
      //    localStorage.clear();
      //    alert('Semua item di localStorage telah dihapus.');
      //  }


      // EFEK TRANSISI TEKS ATAS BAWAH KANAN KIRI
      document.addEventListener('DOMContentLoaded', function () {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elements = document.querySelectorAll('.transisi');
        elements.forEach(el => observer.observe(el));
    });


    function showFrame1() {
    document.querySelector('.container').classList.add('show-frame1');
  }


  function besar() {
    document.getElementById('gambar').classList.add('transisi-besar');
}

function kecil() {
    document.getElementById('gambar').classList.remove('transisi-besar');
}


//AWAL UCAPAN//

document.addEventListener('DOMContentLoaded', function() {
  fetchUcapan(); // Memanggil fungsi untuk mengambil semua data ucapan saat halaman dimuat
});

// Fungsi untuk mengambil semua data ucapan dari Google Sheets
function fetchUcapan() {

  var url = 'https://script.google.com/macros/s/AKfycbxG8lADguQ9oUeckmkaLcHraGKvhBFf2jnyXry3o-_fvwzwGgjxNY_q9RWR2jZ0b18N/exec'; // Ganti dengan URL Web App Google Apps Script Anda

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayAllUcapan(data); // Tampilkan semua ucapan yang diterima di halaman
      document.getElementById('spinner').style.display = 'none'; // Sembunyikan spinner setelah data dimuat
    })
    .catch(error => {
      console.error('Error fetching ucapan:', error);
      document.getElementById('spinner').style.display = 'none'; // Sembunyikan spinner jika terjadi error
    });
}

// Fungsi untuk menampilkan semua ucapan di halaman
function displayAllUcapan(ucapanData) {
  window.ucapanData = ucapanData; // Simpan data ucapan untuk pemeriksaan nama
  var ucapanContainer = document.getElementById('ucapan');
  ucapanContainer.innerHTML = ''; // Kosongkan isi sebelumnya

  ucapanData.forEach(function(ucapan) {
    var ucapanItem = document.createElement('div');
    ucapanItem.classList.add('ucapan-item');
    ucapanItem.innerHTML = `<strong>${ucapan.nama} (${ucapan.kehadiran}):</strong><p>${ucapan.pesan}</p>`;
    ucapanContainer.appendChild(ucapanItem);
  });
}

// Fungsi untuk mengirim data ke Google Apps Script
document.getElementById('formPernikahan').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit biasa

  var nama = document.getElementById('nama').value;
  var kehadiran = document.getElementById('kehadiran').value;
  var pesan = document.getElementById('pesan').value;

  // Menampilkan spinner sebelum kirim data
  document.getElementById('spinner').style.display = 'block';

  // Cek apakah nama sudah ada
  var isNamaExist = window.ucapanData.some(function(ucapan) {
    return ucapan.nama.toLowerCase() === nama.toLowerCase(); // Membandingkan nama tanpa memperhatikan huruf besar/kecil
  });

  if (isNamaExist) {
    showAlert("Namamu sudah ada. <br/> Coba gunakan nama lain");
    document.getElementById('spinner').style.display = 'none'; // Sembunyikan spinner jika nama sudah ada
    return; // Hentikan pengiriman data jika nama sudah ada
  }

  var url = 'https://script.google.com/macros/s/AKfycbxG8lADguQ9oUeckmkaLcHraGKvhBFf2jnyXry3o-_fvwzwGgjxNY_q9RWR2jZ0b18N/exec'; // Ganti dengan URL Web App

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'nama': nama,
      'kehadiran': kehadiran,
      'pesan': pesan
    })
  })
  .then(response => response.text())
  .then(text => {
    document.getElementById('respon').innerHTML = 'Terima kasih atas doa dan ucapannya. <br/> Halaman akan refresh otomatis';

    // Menambahkan style agar tampil seperti alert melayang
    var responElement = document.getElementById('respon');

    responElement.style.position = 'fixed';
    responElement.style.bottom = '50%';
    responElement.style.left = '50%';
    responElement.style.transform = 'translateX(-50%)';
    responElement.style.padding = '10px 10px';
    responElement.style.backgroundColor = 'rgba(0, 138, 140, 0.8)';
    responElement.style.color = 'rgba(255, 255, 255, 1)';
    responElement.style.borderRadius = '15px';
    responElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    responElement.style.fontSize = '16px';
    responElement.style.textAlign = 'center';
    responElement.style.zIndex = '1000';
    // Mengatur lebar responsif
    responElement.style.width = '60%';         // Lebar otomatis
    responElement.style.maxWidth = '60%';     // Maksimal lebar 600px
    responElement.style.minWidth = '200px';     // Lebar minimal 200px
 
    // Hapus respon setelah 3 detik
    setTimeout(function() {
      respon.remove();
    }, 5000);
    
    document.getElementById('spinner').style.display = 'none';

    // Tambahkan ucapan baru ke tampilan
    var ucapanContainer = document.getElementById('ucapan');
    var ucapanItem = document.createElement('div');
    ucapanItem.classList.add('ucapan-item');
    ucapanItem.innerHTML = `<strong>${nama} (${kehadiran}):</strong><p>${pesan}</p>`;
    ucapanContainer.prepend(ucapanItem); // Menambahkan ke atas daftar

    document.getElementById('formPernikahan').reset(); // Reset form setelah kirim

    // Memberikan delay 2 detik dan refresh halaman
    setTimeout(function() {
      window.location.reload(); // Halaman akan direfresh setelah data terkirim
    }, 5000); // Delay 5 detik sebelum refresh

  })
  .catch(error => {
    document.getElementById('respon').innerHTML = 'Terjadi kesalahan, coba lagi nanti.';
    document.getElementById('spinner').style.display = 'none'; // Sembunyikan spinner jika terjadi error

    console.error('Error:', error);
  });
});

// Fungsi untuk menampilkan alert melayang
function showAlert(message) {
  var alertBox = document.createElement('div');
  alertBox.innerHTML = message; // Gunakan innerHTML agar HTML ditampilkan

  alertBox.style.position = 'fixed';
  alertBox.style.bottom = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translateX(-50%)';
  alertBox.style.padding = '10px 10px';
  alertBox.style.backgroundColor = 'rgba(0, 138, 140, 0.8)';
  alertBox.style.color = 'rgba(255, 255, 255, 1)';
  alertBox.style.borderRadius = '15px';
  alertBox.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  alertBox.style.fontSize = '16px';
  alertBox.style.textAlign = 'center';
  alertBox.style.zIndex = '1000';
  // Mengatur lebar responsif
  alertBox.style.width = '60%';         // Lebar otomatis
  alertBox.style.maxWidth = '60%';     // Maksimal lebar 600px
  alertBox.style.minWidth = '200px';     // Lebar minimal 200px

  // Menambahkan alert ke body
  document.body.appendChild(alertBox);

  // Hapus alert setelah 3 detik
  setTimeout(function() {
    alertBox.remove();
  }, 3000);
}

//AKHIR UCAPAN//


const images = [
  './image/pre1.jpg',
  './image/pre2.jpg',
  './image/pre3.jpg',
  './image/pre4.jpg',
  './image/pre5.jpg',
  './image/pre6.jpg',
  './image/pre7.jpg',
  './image/pre8.jpg',
  './image/pre9.jpg',
  './image/pre10.jpg',
  './image/pre11.jpg',
  './image/pre12.jpg',
  './image/pre13.jpg',
  './image/pre14.jpg',
];

let currentIndex = 0;

function showImage(index) {
currentIndex = index;
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
modalImage.src = images[currentIndex];
modal.style.display = 'flex';
}

function closeModal() {
document.getElementById('modal').style.display = 'none';
}

function changeSlide(direction) {
currentIndex += direction;
if (currentIndex < 0) currentIndex = images.length - 1;
if (currentIndex >= images.length) currentIndex = 0;
document.getElementById('modal-image').src = images[currentIndex];
}