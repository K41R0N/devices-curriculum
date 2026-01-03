# DEVICES Curriculum

A self-directed research curriculum exploring how devices—material, conceptual, and ritual—shape human reality. Built with SvelteKit, Sveltia CMS, and a front-end agnostic content architecture.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/devices-curriculum/deploys)

## Overview

This project contains **25 lessons** across **9 thematic clusters**, exploring the theoretical foundations of the DEVICES framework. The curriculum draws from sociology, philosophy, anthropology, media studies, and science & technology studies.

**Key Features:**
- Dynamic content loading from Markdown files
- Git-based CMS for content management
- Machine-readable APIs for programmatic access
- Front-end agnostic architecture (redesign without changing content)

## Documentation

| Document | Description |
|----------|-------------|
| [CONTENT_ARCHITECTURE.md](./CONTENT_ARCHITECTURE.md) | Content schema, types, and component contracts |
| [METHODOLOGY.md](./METHODOLOGY.md) | Guide to building your own curriculum with AI |
| [AGENTS.md](./AGENTS.md) | Instructions for AI agents working on this project |

## Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | [SvelteKit](https://kit.svelte.dev) | Web framework with SSR |
| CMS | [Sveltia CMS](https://github.com/sveltia/sveltia-cms) | Git-based headless CMS |
| Auth | [Cloudflare Workers](https://workers.cloudflare.com) | OAuth for CMS |
| Hosting | [Netlify](https://netlify.com) | Continuous deployment |
| Types | TypeScript | Type-safe content handling |

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/K41R0N/devices-curriculum.git
cd devices-curriculum

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The site will be available at `http://localhost:5173`.

### Deploying Your Own

1. **Fork this repository**

2. **Connect to Netlify**
   - Import the repository in Netlify
   - Build settings are pre-configured in `netlify.toml`

3. **Set up CMS Authentication**
   - Deploy [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) to Cloudflare Workers
   - Create a GitHub OAuth App
   - Update `static/admin/config.yml` with your auth URL and repo

4. **Configure your site**
   - Update `content/settings/site.json` with your details
   - Edit `static/admin/config.yml` to point to your repo

See [METHODOLOGY.md](./METHODOLOGY.md) for detailed setup instructions.

## Project Structure

```
devices-curriculum/
├── content/                    # All content (CMS-managed)
│   ├── clusters/              # Thematic groupings (9 files)
│   ├── lessons/               # Individual lessons (25 files)
│   ├── pages/                 # Static pages (home, about)
│   └── settings/              # Site configuration
├── src/
│   ├── lib/
│   │   ├── data/              # Content loading logic
│   │   └── types/             # TypeScript definitions
│   └── routes/                # SvelteKit pages & API endpoints
├── static/
│   ├── admin/                 # CMS configuration
│   ├── fonts/                 # Custom fonts
│   └── images/                # Static assets
├── CONTENT_ARCHITECTURE.md    # Content schema documentation
├── METHODOLOGY.md             # Curriculum building guide
└── AGENTS.md                  # AI agent instructions
```

## Content Architecture

Content is **front-end agnostic**—the same content can power any presentation layer.

### Content Types

| Type | Location | Description |
|------|----------|-------------|
| Cluster | `content/clusters/` | Thematic grouping of lessons |
| Lesson | `content/lessons/` | Individual learning unit |
| Page | `content/pages/` | Static pages |
| Settings | `content/settings/` | Site configuration |

### Machine-Readable Endpoints

| Endpoint | Format | Description |
|----------|--------|-------------|
| `/api/curriculum.json` | JSON | Full curriculum API |
| `/api/manifest.json` | JSON-LD | Schema.org structured data |
| `/feed.xml` | RSS 2.0 | Content syndication |
| `/sitemap.xml` | XML | Search engine sitemap |
| `/llms.txt` | Text | AI agent guidance |

See [CONTENT_ARCHITECTURE.md](./CONTENT_ARCHITECTURE.md) for complete schema documentation.

## Curriculum Structure

| # | Cluster | Lessons |
|---|---------|---------|
| 1 | Mediation Architecture & Reality Framing | 3 |
| 2 | Embodiment, Repetition & Internalization | 4 |
| 3 | Ritual Structures & Sacred Dimensions | 2 |
| 4 | Technology, Material Culture & Non-Neutrality | 3 |
| 5 | Adoption, Diffusion & Network Effects | 3 |
| 6 | Language, Naming & Conceptual Devices | 1 |
| 7 | Reality Construction & Media Devices | 3 |
| 8 | Ideology, Power & Device Non-Neutrality | 3 |
| 9 | Comparative Genesis & Competitive Dynamics | 3 |

## For Contributors

### Adding Content

**Via CMS (Recommended):**
- Access `/admin` on the deployed site
- Use the visual editor to create/edit content
- Changes auto-commit to GitHub

**Via Git:**
- Create Markdown files in `content/` following the schema
- See [CONTENT_ARCHITECTURE.md](./CONTENT_ARCHITECTURE.md) for field definitions

### Modifying the UI

The presentation layer is separate from content. To redesign:

1. Read the component contracts in [CONTENT_ARCHITECTURE.md](./CONTENT_ARCHITECTURE.md)
2. Create new components that consume the documented data shapes
3. Content files remain unchanged

See the "Redesigning a Page Layout" section in [METHODOLOGY.md](./METHODOLOGY.md) for AI prompts.

### For AI Agents

See [AGENTS.md](./AGENTS.md) for:
- Project architecture overview
- Common tasks and how to perform them
- Content schema reference
- Validation rules

## Building Your Own Curriculum

This project is designed to be forked and adapted. See [METHODOLOGY.md](./METHODOLOGY.md) for a complete guide covering:

1. **Domain Definition** — Defining your core research question
2. **AI-Assisted Research** — Finding seminal texts with AI
3. **Curriculum Structuring** — Organizing content in this system
4. **Content Generation** — Using AI to create lesson content
5. **Visual Identity** — Creating consistent imagery
6. **Deployment** — Going live with your curriculum

## License

- **Content & Curriculum**: © K41R0N — All rights reserved
- **Code**: MIT License — Free to use, modify, and distribute

## Links

- **Live Site**: [devices-curriculum.netlify.app](https://devices-curriculum.netlify.app)
- **Substack**: [k41r0n.substack.com](https://k41r0n.substack.com)
- **Sveltia CMS**: [github.com/sveltia/sveltia-cms](https://github.com/sveltia/sveltia-cms)

---

*Built for depth, not breadth.*
