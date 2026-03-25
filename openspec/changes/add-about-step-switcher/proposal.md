# Change: Add interactive step switcher with transition effects to AI Development Process section

## Why
The "AI原生開發流程" section in `AboutTechnologyOverview` currently shows a static single-step layout with STEP 1/2/3 indicators that are purely decorative. Users cannot navigate between steps, making most of the UI non-functional.

## What Changes
- Convert the static step indicators (STEP 1/2/3) into clickable interactive controls
- Display distinct title, description, and image content per step
- Animate content transitions (fade + slide) when switching steps
- Animate the active underline bar to slide between step positions
- Steps 02 and 03 are populated with generated placeholder copy consistent with the AI development theme

## Impact
- Affected specs: `about-step-switcher` (new capability)
- Affected code: `app/components/about/TechnologyOverview.vue`
