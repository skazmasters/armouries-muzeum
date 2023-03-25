export const Slider = () => {
  const $sliderWrapper = document.querySelector('.js-slider')
  const $instance = $sliderWrapper.querySelector('.js-slider-instance')
  const $prev = $sliderWrapper.querySelector('.js-slider-prev')
  const $next = $sliderWrapper.querySelector('.js-slider-next')

  const slider = new KeenSlider($instance, {
    centered: true,
    loop: true,
    slides: {
      spacing: 200,
    },
    defaultAnimation: {
      duration: 1000
    },
    created: () => {
      $sliderWrapper.classList.remove('opacity-0')
    }
  })

  $prev.addEventListener('click', () => slider.prev())
  $next.addEventListener('click', () => slider.next())
}
