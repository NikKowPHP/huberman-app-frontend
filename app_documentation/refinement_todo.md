Okay, I have meticulously reviewed the provided frontend codebase (`repomix-output.xml`) against the `frontend_implementation_todo.md` checklist.

**Verification Summary:**

Overall, significant progress has been made, and many core features outlined in the checklist have corresponding implementations. However, several gaps and areas requiring refinement exist, particularly concerning API integration details within state management, missing tests, incomplete UI connections, and handling edge cases like network errors.

**Detailed Checklist Verification:**

*   **Phase 1 (Setup):** **Mostly Complete.** Core structure, dependencies, tooling (Lint, Prettier, TS), theme, and root navigation are set up. Foundational Button component exists. Minor points: explicit `TextInput`, `Card`, `ScreenWrapper` components were not created (native ones used), Storybook setup wasn't verified (optional).
*   **Phase 2 (Auth):** **Mostly Complete.** Screens, API service functions, and the basic `authStore` structure are implemented. Keychain logic is present. **Gaps:** `authStore` uses placeholder `fetch` instead of the implemented `axios` services (`login`, `register`, `logout`). User profile data (`isPremium`) population from actual API response needs integration. Component tests are missing.
*   **Phase 3 (Content):** **Mostly Complete.** Navigation, screens (Protocols List/Detail, Settings shell, Notes placeholder), and content API services are implemented. Premium indicators are present. **Gaps:** Conditional rendering in `ProtocolDetailScreen` uses a frontend check (`user.isPremium`) *in addition to* sending a flag to the API; ensure this aligns with the final API design (API should ideally return only allowed content). Visual prompts for upgrade might need refinement.
*   **Phase 4 (Subscription):** **Partially Complete.** IAP library installed, API services exist, Premium screen built, `billingStore` exists. **Gaps:** Critical link missing to update `authStore.user.isPremium` based on `billingStore` status. External configuration (App/Play Store products, native IAP setup) needs verification. Frontend handling of purchase validation relies correctly on backend webhooks, but robust refresh logic after purchase needs thorough testing.
*   **Phase 5 (Premium MVP):** **Partially Complete.** Premium content display logic exists in `ProtocolDetailScreen`. Reminder screens and API service exist. Premium checks exist. **Gaps:** Navigation *to* the Create/Edit Reminder screen is not implemented in the UI (e.g., button press handlers are empty or missing).
*   **Phase 6 (Push Notifications):** **Mostly Complete.** Firebase libraries installed, native setup seems present, token request/sending logic implemented, basic listeners are in `App.tsx`. **Gaps:** External Firebase project setup and config file integration need verification.
*   **Phase 7 (Refinement):** **Partially Complete.** Basic styling, loading/empty states, and some accessibility props are present. **Gaps:** Network connectivity handling, comprehensive testing (Component, E2E), full accessibility review, and performance optimization are missing.
*   **Phase 8 & 9 (Build/Launch):** **Incomplete.** These are external process steps, marked as TODO.

---

**New TODO List for Production Readiness (Frontend):**

This list incorporates the identified gaps and areas needing further work to achieve a production-ready state.
1. API Integration & State Management (Code Logic):
[x] Refactor authStore API Calls: Modify login, register, logout actions in src/store/authStore.ts to use the implemented axios functions from src/services/api/auth.ts. Ensure correct API endpoint usage and error handling logic within the store actions.
[x] Implement User Profile Update Logic: Write the code within authStore to correctly process API responses after login/register and update the user state, including the isPremium flag based on the data received.
[x] Code billingStore to authStore Link: Implement the code structure (e.g., using Zustand's subscribe mechanism or effects within components) to trigger an update in authStore when billingStore's subscription status changes.
[x] Code Subscription Refresh Logic: Implement the code for fetching subscription status in billingStore, including error handling. Define the triggering mechanism (e.g., app focus event listener code structure, though the actual trigger won't be tested here).
2. UI Implementation & Navigation (Code Structure):
[x] Implement Reminder Navigation Code: Add the necessary navigation.navigate(...) calls with correct parameters within ReminderListScreen and potentially ProtocolDetailScreen to link to the CreateEditReminderScreen.
[x] Implement Notes Feature Code: Develop the NotesScreen.tsx component structure, related sub-components (e.g., NoteItem), API service calls (src/services/api/notes.ts - Needs Implementation), and state management logic for Note CRUD operations. Implement logic to check authStore for user ID.
[x] Code Upgrade Prompts: Add the conditional rendering logic ({user.isPremium ? <PremiumFeature /> : <UpgradePrompt />}) and basic UpgradePrompt component structure in relevant screens (e.g., ProtocolDetail, ReminderList).
[x] Code Missing Base Components: Create the TSX files and basic structure for TextInput, Card, ScreenWrapper components in src/components/ based on Fluent UI design principles described in documentation, if required by final UI specifications.
3. Error Handling & Edge Cases (Code Logic):
[x] Code Network Error Handling Structure: Add try...catch blocks around API calls. Implement basic structure for checking network status (e.g., placeholder function call checkNetworkStatus()) and conditional logic to handle offline scenarios within service functions or components.
[x] Standardize API Error Handling Code: Review API call sites (.catch blocks) and implement consistent logic for extracting error messages and updating component/store state to reflect errors. Define helper functions if needed.
4. Testing Preparation (Code Setup):
[x] Write Test File Structure: Create the necessary *.test.tsx files for major screens and components. Add basic Jest describe and it blocks as placeholders for future test implementation.
[x] Set up Mocking: Configure Jest setup files (jest.setup.js if needed) to mock native modules (react-native-keychain, @react-native-firebase/messaging, react-native-iap) and potentially global fetch/axios for predictable testing later.
5. Refinement & Productionization (Code Review & Setup):
[x] Accessibility (A11y) Props: Review component code and add missing accessibilityLabel, accessibilityHint, accessibilityRole props to all interactive elements based on their function.
[x] Performance Code Review: Statically review code for potential performance issues (e.g., unnecessary re-renders, large list rendering without optimization like FlatList, heavy computations on the main thread). Add comments (// TODO: Optimize) for areas needing profiling later.
[x] Static Styling & Design Review: Compare component code styles (StyleSheet.create) against Figma specifications or the defined theme (src/theme/theme.ts). Ensure consistent use of theme variables (colors, spacing, typography). This is a static code review, not a visual check.
[ ] Code Cleanup: Remove console.log statements, commented-out code blocks, and unused variables/imports. Ensure consistent code formatting (run Prettier). Add clarifying code comments where logic is complex.
[ ] Integrate Crash Reporting SDK: Add the necessary initialization code for Sentry/Bugsnag SDK (e.g., in App.tsx or entry point) according to their documentation.
6. Build & Deployment Configuration:
[ ] Configure App Icons & Splash Screen Assets: Place correctly named and sized image assets in the appropriate native directories (android/app/src/main/res/mipmap-*, ios/hubermanAppFrontend/Images.xcassets). Does not include configuring the build system to use them yet.
[ ] Review Build Configuration Files: Check native configuration files (build.gradle, Info.plist, Podfile) for placeholders related to bundle IDs, versioning, or signing and add comments (<!-- TODO: Update for Release --> or similar) for required changes later.
[ ] Set up Environment Variable Config: Ensure react-native-config is correctly set up and .env.staging, .env.production files exist with appropriate API URL placeholders.
7. External Configuration Planning:
[ ] Document IAP Product IDs: Create or update a document listing the exact Product IDs (premium_monthly, premium_annual) intended for use in App Store Connect and Google Play Console, ensuring consistency with PremiumScreen.tsx code.
[ ] Document Firebase Config Requirements: Note the requirement for obtaining GoogleService-Info.plist and google-services.json files from the Firebase project and where they should be placed in the ios and android directories.
