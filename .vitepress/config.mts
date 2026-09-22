import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'APSC 171',
  description: 'Course notes, solutions, and resources',

  // Required for GitHub Pages when deploying to a project site
  // (https://<user>.github.io/<repo>/) — must match the repo name exactly.
  // Set to '/' if this becomes a user/org site (https://<user>.github.io/).
  base: '/apsc171/',

  // Enables $...$ / $$...$$ rendering via built-in KaTeX support.
  markdown: {
    math: true,
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Solutions', link: '/solutions/' },
      { text: 'Course Resources', link: '/resources/' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: 'Unit 1 — Limits', link: '/notes/unit-01-limits' },
            { text: 'Unit 2 — Derivatives', link: '/notes/unit-02-derivatives' },
            { text: 'Unit 3 — Integrals', link: '/notes/unit-03-integrals' },
            // add units here as they're written
          ],
        },
      ],

      '/solutions/': [
        {
          text: 'Solutions',
          items: [
            { text: 'Unit 1 Solutions', link: '/solutions/unit-01-limits-solutions' },
            { text: 'Unit 2 Solutions', link: '/solutions/unit-02-derivatives-solutions' },
          ],
        },
      ],

      '/resources/': [
        {
          text: 'Course Resources',
          items: [
            { text: 'Syllabus', link: '/resources/syllabus' },
            { text: 'Formula Sheet', link: '/resources/formula-sheet' },
          ],
        },
      ],
    },

    socialLinks: [],
  },
})
