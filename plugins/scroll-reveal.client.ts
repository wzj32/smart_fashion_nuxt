export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const options = typeof binding.value === 'object' ? binding.value : {}
      const direction = typeof binding.value === 'string' ? binding.value : options.direction || 'up'
      const delay = options.delay || 0
      const duration = options.duration || 800
      const distance = options.distance || '50px'
      const once = options.once !== false // default true (like ScrollReveal reset:false)
      const threshold = options.threshold || 0.15
      const easing = options.easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      const scale = options.scale || 1
      const stagger = options.stagger || 0
      const staggerEl = options.staggerEl || ':scope > *'

      // Set initial styles
      el.style.transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`

      if (stagger > 0) {
        // Stagger mode: animate children individually
        const children = el.querySelectorAll(staggerEl) as NodeListOf<HTMLElement>
        children.forEach((child, index) => {
          const childDelay = delay + index * stagger
          child.style.opacity = '0'
          child.style.transition = `opacity ${duration}ms ${easing} ${childDelay}ms, transform ${duration}ms ${easing} ${childDelay}ms`
          child.style.transform = getInitialTransform(direction, distance, scale)
        })
      } else {
        el.style.opacity = '0'
        el.style.transform = getInitialTransform(direction, distance, scale)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (stagger > 0) {
                const children = el.querySelectorAll(staggerEl) as NodeListOf<HTMLElement>
                children.forEach((child) => {
                  child.style.opacity = '1'
                  child.style.transform = 'translate3d(0, 0, 0) scale(1)'
                })
              } else {
                el.style.opacity = '1'
                el.style.transform = 'translate3d(0, 0, 0) scale(1)'
              }

              if (once) {
                observer.unobserve(el)
              }
            } else if (!once) {
              if (stagger > 0) {
                const children = el.querySelectorAll(staggerEl) as NodeListOf<HTMLElement>
                children.forEach((child) => {
                  child.style.opacity = '0'
                  child.style.transform = getInitialTransform(direction, distance, scale)
                })
              } else {
                el.style.opacity = '0'
                el.style.transform = getInitialTransform(direction, distance, scale)
              }
            }
          })
        },
        { threshold, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(el)
      ;(el as any).__revealObserver = observer
    },

    unmounted(el: HTMLElement) {
      const observer = (el as any).__revealObserver
      if (observer) {
        observer.unobserve(el)
        observer.disconnect()
      }
    },
  })
})

function getInitialTransform(direction: string, distance: string, scale: number): string {
  const s = scale !== 1 ? ` scale(${scale})` : ''
  switch (direction) {
    case 'up':
      return `translate3d(0, ${distance}, 0)${s}`
    case 'down':
      return `translate3d(0, -${distance}, 0)${s}`
    case 'left':
      return `translate3d(${distance}, 0, 0)${s}`
    case 'right':
      return `translate3d(-${distance}, 0, 0)${s}`
    case 'scale':
      return `translate3d(0, 0, 0) scale(${scale || 0.9})`
    case 'none':
      return `translate3d(0, 0, 0)${s}`
    default:
      return `translate3d(0, ${distance}, 0)${s}`
  }
}
