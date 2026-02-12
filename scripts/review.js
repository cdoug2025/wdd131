const reviewCount = document.getElementById("reviewCount")

reviewCount.textContent = JSON.parse(localStorage.getItem('reviewCount')) || 0;

localStorage.setItem('reviewCount', JSON.stringify(parseInt(reviewCount.textContent) + 1));