# Tasks: add-about-step-switcher

## 1. Data
- [x] 1.1 Define `steps` array in `TechnologyOverview.vue` with title, description, and imgSrc for all three steps

## 2. Interaction
- [x] 2.1 Add `activeStep` ref (default `0`) and wire step indicator clicks to update it
- [x] 2.2 Highlight active step text in cyan; dim inactive steps in `#404852`
- [x] 2.3 Animate the underline bar to slide to the correct step position using CSS transition

## 3. Content transition
- [x] 3.1 Wrap the left content block (title + description) in Vue `<Transition>` with a fade-slide-up enter/leave
- [x] 3.2 Swap the right image via `<Transition>` with a fade effect on step change
- [x] 3.3 Use a transition key derived from `activeStep` to trigger re-enter on every switch

## 4. Validation
- [x] 4.1 Verify all three steps render correct content on click
- [x] 4.2 Verify animations play on both enter and leave
- [x] 4.3 Verify no layout shift occurs during transition
