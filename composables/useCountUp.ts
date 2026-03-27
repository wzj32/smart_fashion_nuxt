export function useCountUp(targetValue: number, duration = 2000, suffix = '') {
  const displayValue = ref('0' + suffix)
  const elementRef = ref<HTMLElement | null>(null)
  let hasAnimated = false

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true
            animateCount()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(elementRef.value)
  })

  function animateCount() {
    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * targetValue)

      displayValue.value = current + suffix

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return { displayValue, elementRef }
}
