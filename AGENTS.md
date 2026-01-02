'''
# Agent Instructions for DEVICES Curriculum Site

This document provides instructions for AI agents on how to maintain, update, and extend this project.

## Project Overview

This is a SvelteKit project that serves as a curriculum website for the DEVICES framework. It is designed to be deployed on Netlify and managed via Sveltia CMS (a Decap CMS compatible static CMS).

- **Framework**: SvelteKit
- **CMS**: Sveltia CMS
- **Deployment**: Netlify
- **Content Source**: Markdown files in the `/content` directory.

## Core Tasks

### 1. Managing Content

Content is the core of this project. There are two ways to manage it:

**A) Through the CMS (Preferred for Content Editors)**

- The CMS is located at `/admin` on the deployed site.
- It provides a user-friendly interface for creating and editing lessons, clusters, and pages.
- The configuration for the CMS is in `static/admin/config.yml`.
- **Your task**: If a user asks to add or edit content, you should guide them to use the CMS interface. If you must do it yourself, you should edit the Markdown files directly as described below.

**B) Directly Editing Markdown Files (Preferred for Agents)**

- All content is stored in the `/content` directory.
- **Lessons**: `content/lessons/`
- **Clusters**: `content/clusters/`
- **Pages**: `content/pages/`
- **Settings**: `content/settings/`

To add a new lesson:
1.  Create a new Markdown file in `content/lessons/`.
2.  The filename should be `CLUSTER_SLUG-LESSON_SLUG.md` (e.g., `mediation-architecture-social-construction-of-reality.md`).
3.  The file must contain YAML frontmatter that matches the fields defined in `static/admin/config.yml` for the `lessons` collection.
4.  The main body of the Markdown file will be rendered as the introduction to the lesson.

**Example Lesson Frontmatter:**
```yaml
title: The Social Construction of Reality
slug: social-construction-of-reality
cluster: mediation-architecture
author: Peter Berger & Thomas Luckmann
order: 1
description: The foundational text for understanding how reality is socially constructed...
objectives:
  - Understand how reality is socially constructed...
key_concepts:
  - name: The Social Construction of Reality
    explanation: "..."
assignment:
  instructions: "..."
  url: "..."
  reading_title: "..."
knowledge_check:
  - question: "..."
    hint: "..."
additional_resources:
  - title: "..."
    author: "..."
```

### 2. Updating the Curriculum Structure

The overall structure of the curriculum (the list of clusters and the lessons within them) is managed in `src/lib/data/curriculum.ts`.

- **Your task**: If you add or remove a lesson file, you **must** also update the `clusters` array in this file to reflect the change. The website navigation and structure depend on this file.
- The slugs in this file must match the slugs in the Markdown frontmatter and the filenames.

### 3. Modifying the Website's Appearance or Functionality

- **Layouts and Components**: Located in `src/routes/` and `src/lib/components/`.
- **Styling**: Global styles are in `src/app.css`. Tailwind CSS is used for styling, configured in `tailwind.config.js`.
- **Routes**: SvelteKit uses a file-based routing system. To add a new page, create a new `.svelte` file in the `src/routes/` directory.

### 4. Running the Project Locally

To test changes, you can run the development server.

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```
2.  **Run the dev server**:
    ```bash
    pnpm dev
    ```
3.  The site will be available at `http://localhost:5173`.

### 5. Deployment

- The site is configured for automatic deployment to Netlify.
- Any push to the `main` branch of the GitHub repository will trigger a new build and deployment.
- The build command is `npm run build` and the publish directory is `build`, as configured in `netlify.toml`.
- **Your task**: Do not manually deploy. Simply push your changes to the `main` branch.

## Important Files

- `svelte.config.js`: SvelteKit configuration, including `mdsvex` for Markdown processing.
- `static/admin/config.yml`: Sveltia CMS configuration. This is the schema for all content.
- `src/lib/data/curriculum.ts`: The source of truth for the curriculum structure. **Keep this file in sync with the `/content` directory.**
- `src/routes/curriculum/[cluster]/[lesson]/+page.server.ts`: The server-side load function that reads the Markdown content for each lesson.

By following these instructions, you can effectively manage and extend the DEVICES curriculum website.
'''
