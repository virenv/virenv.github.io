document.addEventListener('DOMContentLoaded', function () {

    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(function (slider) {

        const sliderContainer = slider.querySelector('.slider__container');

        const navigatorContainer = slider.querySelector('.slider__navigator');
        const navigatorAvailable = !!navigatorContainer;
        let navigators = [];

        if(navigatorAvailable) {
            navigators = navigatorContainer.querySelectorAll('li');
        }

        const navigatorControlsContainer = slider.querySelector('.slider__controls');
        const navigatorControlsAvailable = !!navigatorControlsContainer;

        const slides = sliderContainer.querySelectorAll('li');

        const slidesCount = slides.length;

        function moveSlide(moveForward){
            const activeSlide = sliderContainer.querySelector('.active');
            const activeSlideIndex = activeSlide.getAttribute("data-index");

            let nextSlideIndex = (+activeSlideIndex + 1) % slidesCount;
            if(!moveForward) {
                nextSlideIndex = (+activeSlideIndex + slidesCount - 1) % slidesCount;
            }

            if (nextSlideIndex === 0) {
                sliderContainer.style.transform = 'translateX(0)';
            } else {
                const nextMovement = (100 / slidesCount) * nextSlideIndex;
                sliderContainer.style.transform = `translateX(-${nextMovement}%`;
            }

            activeSlide.className = activeSlide.className.replace("active", "").trim();

            const nextActiveSlide = slides.item(nextSlideIndex);
            nextActiveSlide.className = `${nextActiveSlide.className} active`;

            if(navigatorAvailable) {
                const activeNavigator = navigatorContainer.querySelector('.active');
                activeNavigator.className = activeNavigator.className.replace("active", "").trim();
                const nextActiveNavigator = navigators.item(nextSlideIndex);
                nextActiveNavigator.className = `${nextActiveNavigator.className} active`;
            }
        }

        function nextSlide() {
            moveSlide(true);
        }

        function previousSlide() {
            moveSlide(false);
        }

        if(navigatorControlsAvailable) {
            const moveToNextSlideControl = navigatorControlsContainer.querySelector('li.next');
            const moveToPreviousSlideControl = navigatorControlsContainer.querySelector('li.previous');

            moveToNextSlideControl.addEventListener('click', nextSlide);
            moveToPreviousSlideControl.addEventListener('click', previousSlide);
        }

        setInterval(function () {
            nextSlide();
        }, 5000);

    });

}); //end onload