# Capability: about-step-switcher

## ADDED Requirements

### Requirement: Step Navigation
The step indicators (STEP 1, STEP 2, STEP 3) in the AI Development Process section SHALL be interactive; clicking any indicator SHALL set it as the active step and update the displayed content.

#### Scenario: Click inactive step
- **WHEN** the user clicks a step indicator that is not currently active
- **THEN** that step becomes active, its label turns cyan, and the content area updates to show the corresponding title and description

#### Scenario: Click already-active step
- **WHEN** the user clicks the currently active step indicator
- **THEN** no change occurs and no animation plays

#### Scenario: Default active step on load
- **WHEN** the page first renders
- **THEN** STEP 1 is active, showing title "01-自動化測試" and its description

---

### Requirement: Step Content Per Step
The section SHALL display distinct content for each of the three steps as follows:

- **STEP 1** — Title: `01-自動化測試` · Description: `AI 自動生成測試案例與腳本，覆蓋極端邊界情境。每一次更新都經過數千次自動驗證，確保系統穩如泰山。`
- **STEP 2** — Title: `02-智能代碼審查` · Description: `AI 即時分析程式碼品質與潛在風險，提供精準的優化建議。每一行程式碼都通過嚴格審視，確保可維護性與效能兼顧。`
- **STEP 3** — Title: `03-自動化部署` · Description: `AI 驅動的 CI/CD 流水線，智能監控部署狀態並即時修復異常。從提交到上線，全程零人工干預，交付效率提升十倍。`

#### Scenario: Render STEP 2 content
- **WHEN** STEP 2 is active
- **THEN** title "02-智能代碼審查" and its corresponding description are displayed

#### Scenario: Render STEP 3 content
- **WHEN** STEP 3 is active
- **THEN** title "03-自動化部署" and its corresponding description are displayed

---

### Requirement: Content Transition Animation
The left content block (title + description) SHALL animate on step change using a fade + slide-up effect; the outgoing content SHALL fade and slide down out while the incoming content SHALL fade and slide up in.

#### Scenario: Enter animation
- **WHEN** a new step becomes active
- **THEN** the new title and description fade in while translating upward from a slight offset (e.g., `translateY(12px)` → `translateY(0)`)

#### Scenario: Leave animation
- **WHEN** the active step changes away from a step
- **THEN** the outgoing title and description fade out while translating downward

---

### Requirement: Underline Bar Transition
The cyan active-underline bar below the step indicators SHALL slide horizontally to the position of the newly active step using a CSS transition rather than an instant jump.

#### Scenario: Underline slides to new step
- **WHEN** the user clicks a different step
- **THEN** the underline bar animates (e.g., 300ms ease) from its current position to the x-position of the new active step

#### Scenario: Underline stays put on active click
- **WHEN** the user clicks the already-active step
- **THEN** the underline bar does not move
