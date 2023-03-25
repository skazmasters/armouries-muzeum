export const MobileMenu = () => {
  const $openBtn = document.querySelector('.js-header-open')
  const $closeBtn = document.querySelector('.js-header-close')
  const $menuContainer = document.querySelector('.js-header-nav')
  const $links = $menuContainer.querySelectorAll('a')

  let showMobileMenu = false

  const scrollTo = (e) => {
    e.preventDefault()
    const $el = e.target

    const targetId = $el.getAttribute('href').slice(1)
    if (targetId) {
      const target = document.getElementById(targetId)
      if (target) target.scrollIntoView({behavior: 'smooth'})
    }
  }

  const onToggle = () => {
    $menuContainer.classList.contains('translate-y-full') ? $menuContainer.classList.remove('translate-y-full') : $menuContainer.classList.add('translate-y-full')
  }

  const checkForDevice = (width) => window.innerWidth < width

  $links.forEach((link) => link.addEventListener('click', scrollTo))

  const handlePageResized = () => {
    showMobileMenu = checkForDevice(1024)

    if (showMobileMenu) {
      $openBtn.addEventListener('click', onToggle)
      $closeBtn.addEventListener('click', onToggle)
      $links.forEach((link) => link.addEventListener('click', onToggle))
    } else {
      $menuContainer.classList.contains('translate-y-full') && $menuContainer.classList.remove('translate-y-full')
      $openBtn.removeEventListener('click', onToggle)
      $closeBtn.removeEventListener('click', onToggle)
      $links.forEach((link) => link.removeEventListener('click', onToggle))
    }
  }

  handlePageResized()

  window.addEventListener('resize', handlePageResized)
  window.addEventListener('orientationchange', handlePageResized)
}
