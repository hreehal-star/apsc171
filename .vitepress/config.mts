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
      { text: 'home', link: '/' },
      { text: 'notes', link: '/notes/' },
      { text: 'tutorials', link: '/solutions/' },
      { text: 'course resources', link: '/resources/' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: 'notes',
          items: [
            { text: 'Week 1 - Derivatives and Vectors', link: '/notes/week-01.md' },
            { text: 'Week 2 - Vector-Valued Functions / Parametric Curves', link: '/notes/week-02.md' },
            { text: 'Week 3 - Parametric TEST: Velocity and Acceleration', link: '/notes/week-03.md' },
          ],
        },
      ],

      '/tutorials/': [
        {
          text: 'tutorials',
          items: [
            { text: 'Week 1 Tutorial', link: '/solutions/unit-01-limits-solutions' },
            { text: 'Week 2 Tutorial', link: '/solutions/unit-02-derivatives-solutions' },
          ],
        },
      ],

      '/resources/': [
        {
          // text: Course Resources, 
          items: [
          ],
        },
      ],
    },

    socialLinks: [],
  },
})
