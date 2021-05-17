(function () {
	const testimonialsCarousel = document.querySelector('#testimonials-carousel');
	const testimonialsCarouselItems = document.querySelectorAll('.testimonials-carousel__item');
	const testimonialsCarouselNext = document.querySelector('.testimonials-carousel-nav__buttons--next');
	const testimonialsCarouselPrev = document.querySelector('.testimonials-carousel-nav__buttons--previous');
	const testimonialsCarouselCurrentItem = document.querySelector('#testimonials-carousel-nav-pagination-count-current');
	const testimonialsCarouselTotalItem = document.querySelector('#testimonials-carousel-nav-pagination-count-total');
	let index = 0;

	testimonialsCarouselTotalItem.innerHTML = testimonialsCarouselItems.length.toString().padStart(2, '0');
	testimonialsCarouselCurrentItem.innerHTML = (index + 1).toString().padStart(2, '0');
	testimonialsCarouselItems[0].classList.add('activeElement');
	

	testimonialsCarouselNext.addEventListener('click',function() {
		for( let i = 0; i < testimonialsCarouselItems.length; i++ ) {
			testimonialsCarouselItems[i].classList.remove('activeElement');
		}
		if(index < testimonialsCarouselItems.length - 1) {
			let distance = testimonialsCarouselItems[index + 1].offsetLeft - 35;
			testimonialsCarouselItems[index + 1].classList.add('activeElement');
			testimonialsCarousel.scrollTo(distance,0);
			index = index + 1;
			testimonialsCarouselCurrentItem.innerHTML = (index + 1).toString().padStart(2, '0');
		} else {
			testimonialsCarouselItems[index].classList.add('activeElement');
			return false;
		}
		
	});

	testimonialsCarouselPrev.addEventListener('click',function() {
		for( let i = 0; i < testimonialsCarouselItems.length; i++ ) {
			testimonialsCarouselItems[i].classList.remove('activeElement');
		}
		if(index > 0) {
			let distance = testimonialsCarouselItems[index - 1].offsetLeft - 35;
			testimonialsCarouselItems[index - 1].classList.add('activeElement');
			testimonialsCarousel.scrollTo(distance,0);
			testimonialsCarouselCurrentItem.innerHTML = index.toString().padStart(2, '0');
			index = index -1;
		} else {
			testimonialsCarouselItems[0].classList.add('activeElement');
			return false;
		}
		
	})
	
	

	// 	if (document.documentElement.clientWidth < 1023) {
	// }

})();


