document.getElementById("toggle").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
});

// เปิดซับเมนูในมือถือ
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', function(e) {
    const parent = this.parentElement;
    if (window.innerWidth <= 768) {
      e.preventDefault();
      parent.classList.toggle('open');
    }
  });
});


const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    const slideCount = slides.length;
    let startX = 0;
    let isDragging = false;

    function goToSlide(i) {
      index = (i + slideCount) % slideCount;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      goToSlide(index - 1);
    });

    nextBtn.addEventListener('click', () => {
      goToSlide(index + 1);
    });

    // Auto Slide
    setInterval(() => {
      goToSlide(index + 1);
    }, 4000);

    // Touch Support
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSlide(index - 1);
        } else {
          goToSlide(index + 1);
        }
        isDragging = false;
      }
    });

    track.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Responsive adjustment on resize (optional)
    window.addEventListener('resize', () => {
      goToSlide(index);
    });


