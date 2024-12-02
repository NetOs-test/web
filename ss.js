<script>
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        const offset = -slideIndex * 100;
        document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    // Optional: Auto slide every 5 seconds
    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 5000);

    // Initial display
    showSlide(slideIndex);
</script>
