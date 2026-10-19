# LARAIB STUDIO — Independent Brand & Digital Designer Portfolio

A launch-ready, responsive personal portfolio website for **Laraib**, an independent brand identity and digital designer based in Melbourne, Australia. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## 1. Quick Start

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Run production build
npm run build
```

The production output will be generated inside the `dist/` directory.

---

## 2. Contact Form Implementation

The website implements a friction-free, client-side inquiry workflow with instant validation:

- **Validation:** Enforces valid name, email address, and project details with live error messages.
- **Direct Mailto Link:** Automatically formats the client brief into a pre-filled `mailto:` link pointing to `hello@laraibstudio.example` with complete inquiry parameters.
- **One-Click Copy:** Allows the visitor to copy the full project brief to their clipboard.
- **Zero Silent Failures:** Transparently confirms preparation without fabricating simulated server delivery.
- **Backend Service Setup (Optional):** To wire this form to a live email service such as Formspree, Resend, or Web3Forms, point the `handleSubmit` event in `src/components/ContactSection.tsx` to your endpoint.

---

## 3. Customizing Studio Content

All designer information, copy, projects, testimonials, and contact details are centrally organized in:

```
src/data/siteConfig.ts
```

Edit this single file to update:
- Designer name, titles, bio, and location
- Project titles, descriptions, and case study metrics
- Contact email address (`contact.email`)
- Booking status & calendar notes
- Social profile links

### Generated Assets
Images are stored locally in `/src/assets/images/`:
- `mira_portrait_*.jpg`: Main circular hero portrait
- `aurelle_botanics_*.jpg`: Skincare branding & packaging case study
- `northline_digital_*.jpg`: Digital web design case study
- `form_field_shop_*.jpg`: E-commerce & mobile experience case study
- `client_jordan_*.jpg`: Client testimonial avatar

---

## 4. Hostinger Deployment

1. Run `npm run build` locally or in CI.
2. Log in to your Hostinger hPanel and navigate to **File Manager** (or connect via FTP).
3. Open your domain's `public_html/` directory.
4. Upload all files from the generated `dist/` directory directly into `public_html/`.
5. Ensure `index.html` is located directly in `public_html/`.
