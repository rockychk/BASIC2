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
      frame5.style.display = 'flex';
      frame6.style.display = 'flex';
      frame7.style.display = 'flex';

      document.body.style.overflow = 'auto';
      
      backgroundMusic.play();
      musicControl.classList.remove('hidden');
  });

  musicControl.addEventListener('click', () => {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          musicControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#915f3e" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/></svg>';
        } else {
          backgroundMusic.pause();
          musicControl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#915f3e" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/></svg>';
      }
  });
});

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



// AWAL UCAPAN //

document.addEventListener('DOMContentLoaded', function() {
  fetchUcapan(); // Memanggil fungsi untuk mengambil semua data ucapan saat halaman dimuat
});

// Fungsi untuk mengambil semua data ucapan dari Google Sheets
function fetchUcapan() {
  var url = 'https://script.google.com/macros/s/AKfycbxG8lADguQ9oUeckmkaLcHraGKvhBFf2jnyXry3o-_fvwzwGgjxNY_q9RWR2jZ0b18N/exec'; // Ganti dengan URL Web App Google Apps Script Anda
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Urutkan data berdasarkan waktu (misalnya kolom waktu ada di data[i][0])
      data.sort((a, b) => new Date(b.waktu) - new Date(a.waktu)); // Mengurutkan berdasarkan waktu, terbaru di atas
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
  const ucapanContainer = document.getElementById('ucapan');
  ucapanContainer.innerHTML = '';

  ucapanData.forEach(ucapan => {
    const ucapanItem = document.createElement('div');
    ucapanItem.classList.add('ucapan-item');

      // Format tanggal dan waktu
      const waktu = new Date(ucapan.waktu);
      const tanggal = waktu.toLocaleDateString(); // Menampilkan tanggal
      const jam = waktu.toLocaleTimeString(); // Menampilkan waktu

      ucapanItem.innerHTML = `
      <small><em>${tanggal} : ${jam}</em></small><br/> <!-- Menampilkan waktu -->
      <strong>${ucapan.nama} (${ucapan.kehadiran}):<br/></strong>
      <p>${ucapan.pesan}</p>
      <hr>
      `;
    ucapanContainer.appendChild(ucapanItem);
  });
}

// Fungsi untuk mengirim data ke Google Apps Script
document.getElementById('formPernikahan').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit biasa

  // Tampilkan Spinner saat form sedang diproses
  document.getElementById('spinner').style.display = 'block';

  const nama = document.getElementById('nama').value;
  const kehadiran = document.getElementById('kehadiran').value;
  const pesan = document.getElementById('pesan').value;

  fetch('https://script.google.com/macros/s/AKfycbxG8lADguQ9oUeckmkaLcHraGKvhBFf2jnyXry3o-_fvwzwGgjxNY_q9RWR2jZ0b18N/exec', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({ 'nama': nama, 'kehadiran': kehadiran, 'pesan': pesan })
  })
  .then(response => response.text())
  .then(() => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('formPernikahan').reset();
    displayAlert("Ucapan terkirim!");

    fetchUcapan();
  })
  .catch(() => {
    document.getElementById('respon').innerHTML = 'Terjadi kesalahan, coba lagi nanti.';
    document.getElementById('spinner').style.display = 'none';
  });
});

function displayAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.classList.add('alert-box');
  alertBox.innerHTML = message;
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 3000);
}

// AKHIR UCAPAN //


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