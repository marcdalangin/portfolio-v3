# Portfolio UI & Profile Enhancements Roadmap

## 1. Status, Goal, and Success Criteria

* **Status:** Ready for implementation
* **Goal:** Apply four visual and copy refinements to align the portfolio with the user's latest preferences and uploaded assets.
* **Success Criteria:**
  1. The label in the Tech Stack header reads `{totalCount} technologies` with `(CV Source of Truth)` completely removed.
  2. The hero avatar displays Marc's professional headshot from the uploaded photo (`media_1793282108098_22647e16.jpg`) with smooth monochrome-to-color hover transition and active availability dot.
  3. The personal project description in `ProjectsSection.tsx` is no longer truncated with ellipses (`...`), cleanly rendering the full text on all screen sizes.
  4. The project icon for **Fixture Checker** is replaced with a puzzle piece symbol (`🧩` / Lucide `Puzzle`).
  5. Next.js production build (`npm run build`) and Playwright E2E tests pass without regressions.

---

## 2. Scope

### Included
* Copy update in `src/components/TechStackSection.tsx`.
* Asset ingestion of `media_1793282108098_22647e16.jpg` into `public/assets/avatar.jpg`.
* Avatar component update in `src/components/Hero.tsx` (and optional miniature sync in `src/components/Sidebar.tsx` and `src/components/MobileBar.tsx`).
* Layout and styling fix in `src/components/ProjectsSection.tsx` to remove single-line CSS text cutoff (`truncate`) so the full multi-line description is visible.
* Icon update in `src/data/portfolioData.ts` and `src/components/ProjectsSection.tsx` to use the puzzle piece logo.
* E2E test assertion updates in `tests/e2e/projects-experience-stack.spec.ts` if needed.

### Excluded
* Structural redesign of the page shell, theme tokens, or navigation links.
* Modifying background services or database schemas.

---

## 3. Decisions and Rationale

| Requirement | Proposed Approach | Decision Basis |
| :--- | :--- | :--- |
| **Remove `(CV Source of Truth)`** | Strip `(CV Source of Truth)` from `src/components/TechStackSection.tsx`, retaining `{totalCount} technologies`. | User-confirmed: cleans up internal development terminology from public UI. |
| **Profile Headshot** | Copy uploaded JPEG to `public/assets/avatar.jpg`. Render via `<Image>` in `src/components/Hero.tsx` with `rounded-2xl`, subtle border, and `grayscale group-hover:grayscale-0 transition duration-300`. | User-confirmed: replaces placeholder emoji with user's professional headshot. |
| **Complete Project Description** | Remove `truncate` class on the project row text container in `src/components/ProjectsSection.tsx`. Replace with `text-xs leading-relaxed text-[var(--ink-muted)]`. | User-confirmed: prevents CSS ellipsis cutoff (`...`), allowing the complete text to wrap naturally across viewports. |
| **Puzzle Piece Icon** | Set `emojiIcon: "🧩"` in `src/data/portfolioData.ts`, paired with a crisp Lucide `<Puzzle />` SVG fallback in `src/components/ProjectsSection.tsx`. | User-confirmed: serves as the placeholder identity for the Chrome extension before a brand logo is chosen. |

---

## 4. Implementation Plan

### Asset Integration
* Copy `C:/Users/Marc/.gemini/antigravity/brain/5ae820c3-84a8-40c7-9d05-c4dc9145fa5c/.user_uploaded/media_1793282108098_22647e16.jpg` to `public/assets/avatar.jpg`.

### Component Modifications
1. **`src/components/TechStackSection.tsx`**:
   - Change line 20 from `{totalCount} technologies (CV Source of Truth)` to `{totalCount} technologies`.
2. **`src/components/Hero.tsx`**:
   - Import `Image` from `next/image`.
   - Replace the `👨‍💻` placeholder inside the avatar card with `<Image src="/assets/avatar.jpg" alt={profileData.name} width={80} height={80} className="h-full w-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300" />`.
3. **`src/components/ProjectsSection.tsx`**:
   - In `renderProjectRow`, update the description container: remove `truncate` from the description wrapper so the full text renders cleanly without ellipsis truncation.
   - Render the puzzle piece icon using Lucide `Puzzle` or `🧩`.
4. **`src/data/portfolioData.ts`**:
   - Update `personalProjectsData`: set `emojiIcon: "🧩"`.

---

## 5. Phase-by-Phase Roadmap

### Phase 1: Copy & Tech Stack Cleanliness
* [ ] Remove `(CV Source of Truth)` from `src/components/TechStackSection.tsx`.
* [ ] Acceptance Check: Verify header in `#stack` displays `{totalCount} technologies` without parenthetical.

### Phase 2: Profile Picture Ingestion & Hero Avatar
* [ ] Ingest `media_1793282108098_22647e16.jpg` into `public/assets/avatar.jpg`.
* [ ] Update `src/components/Hero.tsx` to render the headshot with Next.js image optimization and dual-state hover effect.
* [ ] Acceptance Check: Verify headshot renders crisply at `80x80px` with online indicator dot and grayscale-to-color transition on hover.

### Phase 3: Project Description & Puzzle Piece Icon
* [ ] Remove single-line `truncate` cutoff on project descriptions in `src/components/ProjectsSection.tsx`.
* [ ] Update Fixture Checker icon to puzzle piece (`🧩` / Lucide `Puzzle`) in `src/data/portfolioData.ts` and `src/components/ProjectsSection.tsx`.
* [ ] Acceptance Check: Confirm the entire description `"Manifest V3 Chrome extension that syncs fixtures every 30 minutes and exports CSV/HTML diff reports."` is displayed without clipping, and the puzzle icon displays properly.

### Phase 4: Validation & Quality Gates
* [ ] Run `npm run build` to verify Next.js static and dynamic routes compile cleanly.
* [ ] Run `npx playwright test` to ensure existing E2E tests continue to pass.
* [ ] Commit changes with bracketed convention `[IMP] Update profile avatar, tech stack label, and project UI`.

---

## 6. Dependencies, Remaining Uncertainties, and Next Step

* **Dependencies:** None. All assets and libraries (`lucide-react`, `next/image`) are already installed.
* **Remaining Uncertainties:** None. All four requirements have direct visual reproductions and clear specifications.
* **Next Step:** Awaiting user approval to execute Phase 1 through Phase 4.
