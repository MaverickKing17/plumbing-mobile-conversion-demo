# Plumbing Mobile Conversion Demo

A mobile-first plumbing website concept designed to demonstrate how clearer service information, accessible design, faster page loading, and a streamlined service-request experience can improve a local plumbing business's online presence.

**Project status:** Pre-launch demonstration  
**Project type:** Front-end website prototype  
**Business represented:** Northstar Plumbing Demo — fictional business  
**Technology:** React, TypeScript, Vite, and CSS/Tailwind CSS, depending on the existing implementation  
**Deployment target:** Vercel  
**Repository:** `MaverickKing17/plumbing-mobile-conversion-demo`

> **Important:** This is a demonstration project, not a live plumbing company's website. The business name and any sample content are fictional. The service-request interface does not send information to a real plumbing company or create a real appointment.

---

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Problem Being Demonstrated](#problem-being-demonstrated)
- [Features](#features)
- [Service Request Experience](#service-request-experience)
- [Design Principles](#design-principles)
- [Accessibility](#accessibility)
- [Performance and SEO](#performance-and-seo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Production Build](#production-build)
- [Environment Variables](#environment-variables)
- [Testing and Quality Assurance](#testing-and-quality-assurance)
- [Deployment on Vercel](#deployment-on-vercel)
- [Performance Validation](#performance-validation)
- [Privacy and Security](#privacy-and-security)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [Commercial Demonstration Use](#commercial-demonstration-use)
- [License](#license)

---

## Overview

The Plumbing Mobile Conversion Demo is a front-end prototype for a hypothetical plumbing company serving customers in the Greater Toronto Area (GTA).

The project explores a practical question:

**How can a small plumbing business make it easier for potential customers to understand its services and request help from a mobile device?**

The prototype emphasizes:

- Clear service descriptions.
- Prominent service-request calls to action.
- A mobile-friendly layout.
- A simple, accessible request workflow.
- Lightweight page design and efficient asset delivery.
- Honest communication about what the demonstration can and cannot do.

The project can be used to demonstrate website-design concepts to independent plumbing contractors and other local service businesses.

It is not intended to represent a completed production lead-generation platform.

## Project Goals

### Primary goals

1. Create a professional website concept for a fictional local plumbing business.
2. Make essential service information easy to find on mobile devices.
3. Reduce unnecessary friction in the service-request interface.
4. Apply accessible design and semantic HTML practices.
5. Establish a maintainable React and TypeScript codebase.
6. Validate the production build and Vercel deployment process.
7. Provide a reusable foundation for future client-specific website prototypes.

### Quality targets

The following are development targets, not verified results or guarantees.

| Area | Target |
|---|---|
| Mobile usability | Responsive across common phone and desktop sizes |
| Largest Contentful Paint (LCP) | Aim for 2.5 seconds or less |
| Cumulative Layout Shift (CLS) | Aim for 0.1 or less |
| Accessibility | Aim for WCAG 2.2 AA practices |
| Build reliability | Successful clean dependency installation and production build |
| Service-request clarity | Users can understand each step and the demo's limitations |
| Privacy | No real request data is transmitted or stored by the prototype |

Actual results depend on the deployed build, hosting configuration, browser, device, network, and testing conditions.

## Problem Being Demonstrated

Some local service-business websites make it unnecessarily difficult for prospective customers to:

- Identify the right service.
- Understand the areas a business serves.
- Find the next step when they need assistance.
- Use the site comfortably on a phone.
- Navigate forms with a keyboard or assistive technology.
- Understand what happens after submitting an inquiry.

This prototype demonstrates possible improvements through clearer information architecture, accessible interactions, and a more focused service-request journey.

These are design hypotheses to test with real users. The project does not assume that a redesigned website will automatically increase calls, bookings, revenue, or search rankings.

## Features

### 1. Mobile-first homepage

The homepage is designed to present the essential information first, particularly on smaller screens.

Intended elements include:

- A clear headline explaining the fictional business's service.
- A primary service-request call to action.
- An overview of plumbing services.
- A service-area section using general GTA examples.
- Frequently asked questions.
- A clear demonstration disclaimer.
- Footer navigation and contact placeholders where appropriate.

Any sample telephone numbers, email addresses, addresses, ratings, testimonials, or business credentials must be clearly identified as placeholders or omitted. They must not be presented as verified real-world business information.

### 2. Service overview

The prototype includes example service categories:

- Drain Cleaning
- Leak Repair
- Water Heater Installation
- Other Plumbing Issue

Each service category should have concise, understandable explanatory text and a clear route into the request workflow.

Descriptions must not imply that the fictional business offers emergency coverage, specific warranties, licensing, certifications, or service guarantees unless clearly labelled as illustrative sample content.

### 3. Service-request interface

The service-request experience guides a visitor through a short sequence of steps. It should be easy to understand, keyboard accessible, and usable on mobile devices.

The interface is a simulation. It does not contact a contractor, submit a real lead, schedule a visit, or guarantee a response.

### 4. Responsive layout

The interface should adapt to:

- Small mobile screens.
- Larger smartphones.
- Tablets.
- Desktop and laptop screens.

Content should remain readable without horizontal scrolling at normal zoom levels, and important controls should be easy to operate by touch.

### 5. Reusable components

Where appropriate, common interface elements should be reusable, including:

- Buttons and links.
- Service cards.
- Form fields.
- Progress indicators.
- Validation messages.
- FAQ sections.
- Navigation.
- Demonstration notices.

Reusable components help keep behavior and visual presentation consistent as the prototype evolves.

---

## Service Request Experience

The proposed workflow is:

1. **Choose a service.** Select one of the example plumbing categories.
2. **Provide a general location.** Enter a city or general service area, rather than a full address unless genuinely necessary.
3. **Describe the issue.** Provide a short description of the plumbing problem.
4. **Choose a contact preference.** Select a hypothetical preferred contact method.
5. **Enter sample contact details.** The interface may request a name and contact information to demonstrate the form, but users should be warned not to enter sensitive or real information.
6. **Review the request.** Display a summary of the information entered.
7. **Show the demonstration result.** Explain that the workflow has been completed locally and that no service request was sent.

### Required demo behavior

The confirmation must communicate the limitation clearly. For example:

> **Demo complete — no service request was sent.**  
> This is a website demonstration. Your information has not been delivered to a plumbing company, and no appointment or callback has been arranged.

The interface must not display misleading messages such as:

- “Your plumber has been notified.”
- “Your appointment is confirmed.”
- “A technician will arrive shortly.”
- “We will call you back.”

Those statements are only appropriate in a future, properly connected production system when the corresponding action has actually succeeded.

---

## Design Principles

The project follows these design principles.

### Clarity over decoration

Prioritize readable headings, concise service descriptions, visible actions, and an obvious next step.

### Mobile-first usability

Design for narrow screens before expanding the layout for tablets and desktops. Avoid oversized hero sections that push essential service information too far down the page.

### Consistent visual hierarchy

Use a consistent spacing system, typography scale, button treatment, and color palette. Ensure text and interactive elements have sufficient contrast.

### Useful feedback

Form controls should explain required information, invalid entries, and the next step. Validation messages should identify the problem without forcing users to restart the entire workflow.

### Honest interaction

The user should always understand whether an action is a demonstration, a local interface update, or a real external submission.

---

## Accessibility

Accessibility is a core quality goal rather than a final visual polish step.

The implementation should aim to follow WCAG 2.2 AA principles where applicable.

Expected practices include:

- Semantic HTML elements.
- A logical heading hierarchy.
- Explicit labels for form fields.
- Accessible names for buttons and links.
- Keyboard-operable controls.
- Visible keyboard focus.
- Sufficient text and interface contrast.
- Appropriate alternative text for meaningful images.
- Empty alternative text for purely decorative images.
- Clear validation messages.
- Screen-reader announcements for important status changes where appropriate.
- No reliance on color alone to communicate errors or success.
- Respect for reduced-motion preferences.
- Layouts that remain usable at increased text sizes and browser zoom.

Automated accessibility scores are useful indicators, but they do not prove full accessibility. Manual keyboard and assistive-technology testing is also needed.

## Performance and SEO

The project aims to keep the experience responsive on mobile devices and slower connections.

### Performance practices

- Avoid unnecessary dependencies.
- Remove unused JavaScript and CSS where practical.
- Use appropriately sized images.
- Prefer modern image formats when supported by the build pipeline.
- Set image dimensions to reduce layout shifts.
- Avoid loading unnecessary third-party scripts.
- Use caching and compression supported by the hosting platform.
- Keep the initial page payload as small as reasonably possible.
- Avoid blocking rendering with unnecessary code.

### SEO practices

Where appropriate, include:

- A descriptive page title.
- A concise meta description.
- A mobile-friendly layout.
- Semantic page structure.
- Descriptive link text.
- Meaningful image alternative text.
- A canonical URL only when a stable production domain exists.

A good automated SEO score does not guarantee higher search rankings, local visibility, or customer acquisition.

Because this is a fictional demonstration, it must not use fabricated business reviews, real-business structured data, or misleading local-business claims.

---

## Technology Stack

The project is intended to use the following tools, subject to the actual files in the repository.

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Static typing and maintainability |
| Vite | Development server and production build |
| CSS or Tailwind CSS | Styling and responsive layout |
| npm | Dependency management and scripts |
| GitHub | Source-code version control |
| Vercel | Hosting and deployment |

The actual dependencies and versions must be taken from `package.json` and the committed lockfile. This README does not imply that every listed library is already installed.

### Dependency compatibility

The project should use a mutually compatible set of React, Vite, TypeScript, and build-tool dependencies.

Do not resolve dependency conflicts by automatically using `--force` or `--legacy-peer-deps`. Investigate the conflicting package requirements, make the smallest appropriate change, regenerate the lockfile, and verify the production build.

---

## Project Structure

The precise structure depends on the current implementation. A typical Vite application may look like this:

```text
plumbing-mobile-conversion-demo/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

This is an illustrative structure, not a claim that every directory or file already exists. Keep the README aligned with the real repository and avoid moving files solely to match this example.

## Getting Started

### Prerequisites

Install or have access to:

- A supported version of Node.js.
- npm.
- Git, if working locally.
- A GitHub account for repository management.
- A Vercel account for deployment.

The Node.js version should satisfy the requirements of the project's actual Vite version. Check the package documentation and `package.json` before selecting or upgrading Node.js.

### Clone the repository

```bash
git clone https://github.com/MaverickKing17/plumbing-mobile-conversion-demo.git
cd plumbing-mobile-conversion-demo
```

If the repository is private, you must have access to clone it.

### Install dependencies

```bash
npm install
```

Use the committed `package-lock.json` to keep dependency versions consistent.

For a clean, reproducible installation in CI or deployment environments, use:

```bash
npm ci
```

`npm ci` requires a compatible lockfile. If it fails, investigate the dependency or lockfile issue instead of bypassing dependency checks.

## Local Development

Start the development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal, commonly:

```text
http://localhost:5173
```

Open the displayed address in your browser.

The development server is intended for local testing. It is not a production hosting environment.

## Production Build

Run the production build:

```bash
npm run build
```

The build should complete without dependency-resolution, TypeScript, or bundling errors.

For a typical Vite application, the production files are written to:

```text
dist/
```

The exact output directory is determined by `vite.config.ts`.

### Preview the production build

If the project includes Vite's standard preview script, run:

```bash
npm run preview
```

Use the local URL printed by Vite to test the built application.

### Verify before deploying

- Confirm the expected scripts exist in `package.json`.
- Confirm dependencies install without peer-dependency workarounds.
- Confirm the production build succeeds.
- Check browser-console errors.
- Test the service-request workflow.
- Verify that the demo disclaimer is visible.
- Check responsive behavior and keyboard navigation.
- Confirm no real service-request endpoint is being called.

Do not claim a check has passed until it has actually been performed.

---

## Environment Variables

The front-end demonstration should not require private credentials or secrets.

If public configuration is introduced later, use the environment-variable conventions supported by Vite, such as variables prefixed with `VITE_`, only for values that are safe to expose to browser users.

**Never place the following in front-end code or `VITE_` variables:**

- Private API keys.
- Database passwords.
- Supabase service-role keys.
- Authentication secrets.
- Private third-party credentials.

Anything bundled into a browser application should be treated as publicly accessible.

If a future production implementation needs privileged credentials, keep them in a secure server-side environment and access them through an appropriately authenticated backend.

---

## Testing and Quality Assurance

Testing should cover more than whether the homepage loads.

### Functional checks

- Navigation links lead to the intended sections or pages.
- Each service card opens the appropriate workflow.
- Required fields are validated.
- Users can move through the steps.
- Users can go back and correct information.
- The review step accurately reflects the information entered.
- Restarting or resetting the workflow behaves as expected.
- The final state clearly states that no real request was sent.
- No live business is contacted by the demonstration.

### Responsive checks

Test at representative mobile, tablet, and desktop widths.

Look for:

- Horizontal overflow.
- Text that is too small.
- Overlapping buttons.
- Controls hidden behind sticky elements.
- Form fields that are difficult to operate on a touchscreen.
- Layout shifts during page loading.

### Accessibility checks

- Navigate the entire interface using only a keyboard.
- Check the focus order.
- Verify form labels and button names.
- Verify that errors and status changes are understandable.
- Test contrast and text resizing.
- Use an automated accessibility tool as a supplement to manual review.

### Build checks

Run the project's actual available scripts. For example:

```bash
npm run build
```

Only run commands such as `npm run lint` or `npm run test` if those scripts are defined in `package.json`.

A successful build proves that the project compiled. It does not prove that every interaction works correctly or that the deployed site meets every accessibility or performance goal.

---

## Deployment on Vercel

The intended hosting platform is Vercel.

### Initial deployment

1. Push the latest project code to GitHub.
2. Sign in to Vercel.
3. Choose **Add New Project**.
4. Import `MaverickKing17/plumbing-mobile-conversion-demo`.
5. Confirm that Vercel detects the Vite framework.
6. Review the build configuration.
7. Deploy the project.
8. Open the resulting deployment URL.
9. Test the deployed version on both mobile and desktop.

### Typical Vite settings

Use these settings only if they match the actual repository configuration.

| Setting | Typical value |
|---|---|
| Framework preset | Vite |
| Install command | `npm install` or Vercel's compatible default |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Repository root |

If the build fails, review the Vercel logs and address the underlying error. Do not assume that a successful GitHub push means the site has deployed successfully.

### Deployment verification

After deployment, verify:

- The homepage loads over HTTPS.
- Assets load without errors.
- The service-request interface works.
- The page is usable on a mobile screen.
- The browser console does not show unexpected errors.
- The demo disclaimer is visible.
- No real request is transmitted.
- The latest GitHub commit corresponds to the deployed build.

A deployment is considered verified only after the live URL has been checked.

---

## Performance Validation

Use Google PageSpeed Insights or Lighthouse to evaluate the deployed site.

Test mobile and desktop separately because results can differ significantly.

Review:

- Performance.
- Accessibility.
- Best Practices.
- SEO.
- Largest Contentful Paint (LCP).
- Interaction to Next Paint (INP), when real-user data is available.
- Cumulative Layout Shift (CLS).
- Total Blocking Time (TBT) in Lighthouse lab testing.
- Total page weight.
- Image delivery.
- Unused JavaScript and CSS.
- Browser console errors.

### Interpreting results

A Lighthouse score is a diagnostic snapshot, not a guarantee of real-world customer outcomes.

Lab results can vary based on network simulation, browser version, device profile, cache state, and third-party services. Field data may not exist for a new or low-traffic site.

Prioritize problems that materially affect user experience instead of chasing a perfect score at the expense of functionality, accessibility, or maintainability.

---

## Privacy and Security

This project is a front-end demonstration.

### Current privacy expectations

- Do not enter genuine customer information during demonstrations.
- Do not transmit service-request information to a contractor.
- Do not store personal details in a database or external service.
- Do not add analytics or tracking without deliberately reviewing the implications.
- Do not include private credentials in source code.
- Do not use real customer testimonials or business data without authorization.

The prototype may temporarily hold sample form values in browser memory so users can experience the workflow. That is not equivalent to secure production data handling.

### Future production requirements

Before connecting the interface to a real plumbing company, design and validate:

- An authenticated or appropriately protected server-side submission endpoint.
- Input validation on both client and server.
- Abuse prevention and rate limiting.
- Secure transport and appropriate access controls.
- A clear privacy notice.
- Data minimization and retention rules.
- Appropriate consent and communication practices.
- Error handling and reliable delivery.
- A process for notifying the user when a submission genuinely succeeds or fails.

A real booking or lead-delivery feature must not claim success until the server has confirmed the corresponding action.

---

## Known Limitations

The current prototype is not a complete commercial lead-management system.

Unless subsequently implemented and verified, the following are **not provided**:

- Live plumbing-company integration.
- Real appointment booking.
- Email or SMS delivery.
- A customer relationship management (CRM) integration.
- A persistent lead database.
- A business-owner dashboard.
- Verified service availability.
- Verified service areas or pricing.
- Real-time technician dispatch.
- Guaranteed leads, calls, bookings, or revenue.
- Production security and privacy review.

The demonstration is intended to show a possible user experience, not to suggest that these capabilities already exist.

## Future Improvements

Potential next steps, subject to testing and customer demand, include:

1. Improve the visual hierarchy based on feedback from real users.
2. Validate the workflow with a small number of independent plumbing contractors.
3. Improve image sizing and remove unnecessary dependencies.
4. Conduct manual accessibility testing.
5. Add automated tests for critical interactions.
6. Connect a secure backend for genuine inquiries.
7. Add reliable submission status and failure recovery.
8. Introduce email notifications only after delivery has been tested.
9. Add analytics only where appropriate, with transparent privacy practices.
10. Evaluate ongoing hosting, support, maintenance, and third-party service costs.

Production features should be introduced incrementally rather than adding complexity before the core experience has been validated.

---

## Commercial Demonstration Use

This project may be used as a visual example when discussing website improvements with independent plumbing businesses.

A demonstration should be presented transparently:

- Identify Northstar Plumbing Demo as fictional.
- Explain that the website is a prototype.
- Distinguish proposed features from working integrations.
- Avoid inventing performance improvements or conversion-rate results.
- Do not imply an existing contractor is a customer or partner.
- Do not publish another business's name, branding, reviews, or contact information as if it belongs to the fictional business.
- Do not promise more leads, more revenue, or specific search rankings without credible evidence.

A commercial version should be scoped around the client's actual requirements, content, domain, hosting, maintenance, privacy obligations, and integration needs.

Any service-request delivery capability should be tested end to end before it is offered as a functioning service.

## License

No license is specified by this README.

Before making the project publicly reusable, choose an appropriate license and confirm that the code, dependencies, images, icons, fonts, and other assets may legally be distributed under the intended terms.

---

## Project Status

This repository is intended to support the development and validation of a mobile-first plumbing website demonstration.

**Next milestone:** Resolve dependency compatibility, confirm a successful production build, deploy the latest version to Vercel, and test the deployed experience.

**Current limitation:** The prototype must not be represented as a live lead-delivery or appointment-booking system unless those capabilities are implemented and verified.

*Last updated: October 2026*
