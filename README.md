# DEVICES Curriculum

A self-directed research curriculum for understanding how devices shape reality, built with SvelteKit and Sveltia CMS.

## Overview

This curriculum contains 25 lessons across 9 thematic clusters, exploring the theoretical foundations of the DEVICES framework—a unified theory of how material and conceptual devices mediate, construct, and propagate reality.

## Tech Stack

- **Framework:** SvelteKit
- **Styling:** Tailwind CSS + Custom CSS
- **CMS:** Sveltia CMS (Git-based, Netlify CMS compatible)
- **Fonts:** Kyrios Standard (headings), Merriweather (body)
- **Hosting:** Netlify

## Project Structure

```
devices-curriculum-site/
├── content/
│   ├── lessons/          # 25 lesson markdown files
│   ├── pages/            # Static pages (home, about)
│   └── settings/         # Site configuration
├── src/
│   ├── lib/data/         # Curriculum data structure
│   └── routes/           # SvelteKit pages
├── static/
│   ├── admin/            # Sveltia CMS configuration
│   ├── fonts/            # Kyrios Standard font files
│   └── images/lessons/   # Lesson featured images
├── AGENTS.md             # Instructions for AI agents
├── netlify.toml          # Netlify build configuration
└── package.json
```

## Deployment to Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/devices-curriculum.git
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings are pre-configured in `netlify.toml`:
   - Build command: `pnpm build`
   - Publish directory: `build`

### 3. Set Up Sveltia CMS Authentication

Sveltia CMS requires GitHub OAuth for authentication. You have two options:

#### Option A: Use Sveltia CMS Authenticator (Recommended)

1. Deploy the [Sveltia CMS Auth](https://github.com/sveltia/sveltia-cms-auth) to Cloudflare Workers or your preferred platform
2. Update `static/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: YOUR_USERNAME/devices-curriculum
     branch: main
     base_url: https://your-auth-worker.workers.dev
   ```

#### Option B: Use Netlify Identity + Git Gateway

1. Enable Netlify Identity in your site settings
2. Enable Git Gateway in Identity settings
3. Update `static/admin/config.yml`:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```
4. Invite yourself as a user in Netlify Identity

### 4. Update CMS Configuration

Edit `static/admin/config.yml` and replace:
- `YOUR_GITHUB_USERNAME/devices-curriculum` with your actual repo path
- `https://sveltia-cms-auth.YOUR_DOMAIN.com` with your auth endpoint (if using Option A)

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Content Management

Once deployed, access the CMS at `https://your-site.netlify.app/admin`

The CMS allows you to:
- Edit lesson content (title, description, objectives, key concepts, etc.)
- Upload and manage featured images
- Modify site settings and pages

## Curriculum Structure

| Cluster | Theme | Lessons |
|---------|-------|---------|
| 1 | Mediation Architecture & Reality Framing | 3 |
| 2 | Embodiment, Repetition & Internalization | 4 |
| 3 | Ritual Structures & Sacred Dimensions | 2 |
| 4 | Technology, Material Culture & Non-Neutrality | 3 |
| 5 | Adoption, Diffusion & Network Effects | 3 |
| 6 | Language, Naming & Conceptual Devices | 1 |
| 7 | Reality Construction & Media Devices | 3 |
| 8 | Ideology, Power & Device Non-Neutrality | 3 |
| 9 | Comparative Genesis & Competitive Dynamics | 3 |

## Image Generation

The curriculum includes custom linocut-style illustrations. See `AGENTS.md` for instructions on generating additional images that match the visual style.

### Current Images

- `01-social-construction-reality.png` - Archway of symbols (Social Construction lesson)
- `02-framing.png` - Frame with calm ship inside, chaos outside (Framing lesson)

### Planned Images (18 remaining)

See the image outline in the project documentation for the full list of planned illustrations.

## License

Content and curriculum structure © K41R0N. Code is MIT licensed.

## Related

- [K41R0N Substack](https://k41r0n.substack.com) - The publication this curriculum supports
- [Kairon.xyz](https://kairon.xyz) - Author's personal site
# devices-curriculum
# devices-curriculum
