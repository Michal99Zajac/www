import { SkillLevel } from '@/types/global'

interface Skill {
  level?: SkillLevel
  img: {
    src: string
    alt: string
  }
  skill: string
}

export const skill: Record<string, Skill[]> = {
  programmingLanguages: [
    {
      level: 'advanced',
      skill: 'Python',
      img: {
        src: '/skill/languages/python.png',
        alt: 'python logo',
      },
    },
    {
      level: 'advanced',
      skill: 'JavaScript',
      img: {
        src: '/skill/languages/js.png',
        alt: 'javascript logo',
      },
    },
    {
      level: 'advanced',
      skill: 'TypeScript',
      img: {
        src: '/skill/languages/typescript.png',
        alt: 'typescript logo',
      },
    },
    {
      level: 'advanced',
      skill: 'HTML',
      img: {
        src: '/skill/languages/html.svg',
        alt: 'html5 logo',
      },
    },
    {
      level: 'advanced',
      skill: 'CSS',
      img: {
        src: '/skill/languages/css.svg',
        alt: 'css logo',
      },
    },
    {
      level: 'basic',
      skill: 'PHP',
      img: {
        src: '/skill/languages/php.png',
        alt: 'php logo',
      },
    },
    {
      level: 'basic',
      skill: 'C++',
      img: {
        src: '/skill/languages/cplusplus.png',
        alt: 'c++ logo',
      },
    },
  ],
  databases: [
    {
      level: 'intermediate',
      skill: 'MongoDB',
      img: {
        src: '/skill/databases/mongodb.png',
        alt: 'mongodb logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'Sqlite',
      img: {
        src: '/skill/databases/sqlite.svg',
        alt: 'sqlite logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'Postgres',
      img: {
        src: '/skill/databases/postgresql.svg',
        alt: 'postgres logo',
      },
    },
  ],
  frameworks: [
    {
      level: 'advanced',
      skill: 'Next.js',
      img: {
        src: '/skill/frameworks/nextjs.svg',
        alt: 'nextjs logo',
      },
    },
    {
      level: 'advanced',
      skill: 'React',
      img: {
        src: '/skill/frameworks/react.svg',
        alt: 'react logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'Express.js',
      img: {
        src: '/skill/frameworks/express-js.png',
        alt: 'express js logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'FastApi',
      img: {
        src: '/skill/frameworks/fastapi.svg',
        alt: 'fastapi logo',
      },
    },
    {
      level: 'basic',
      skill: 'Django',
      img: {
        src: '/skill/frameworks/django.svg',
        alt: 'django logo',
      },
    },
    {
      level: 'basic',
      skill: 'Angular',
      img: {
        src: '/skill/frameworks/angular.svg',
        alt: 'angular logo',
      },
    },
  ],
  tools: [
    {
      level: 'advanced',
      skill: 'Git',
      img: {
        src: '/skill/tools/git.png',
        alt: 'git logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'AWS',
      img: {
        src: '/skill/tools/aws.png',
        alt: 'aws logo',
      },
    },
    {
      level: 'basic',
      skill: 'Google Cloud',
      img: {
        src: '/skill/tools/google-cloud.png',
        alt: 'google cloud logo',
      },
    },
    {
      level: 'basic',
      skill: 'Travis CI',
      img: {
        src: '/skill/tools/travis-ci.png',
        alt: 'travis logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'CircleCI',
      img: {
        src: '/skill/tools/circleci.png',
        alt: 'circleci logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'GitHub Actions',
      img: {
        src: '/skill/tools/gh-actions.png',
        alt: 'github actions logo',
      },
    },
    {
      level: 'intermediate',
      skill: 'Docker',
      img: {
        src: '/skill/tools/docker.png',
        alt: 'docker logo',
      },
    },
  ],
  other: [
    {
      skill: 'Jira',
      img: {
        src: '/skill/other/jira.png',
        alt: 'jira logo',
      },
    },
    {
      skill: 'Slack',
      img: {
        src: '/skill/other/slack.png',
        alt: 'slack logo',
      },
    },
  ],
  languages: [
    {
      level: 'intermediate',
      skill: 'English',
      img: {
        src: '/skill/other/usa-flag.png',
        alt: 'usa flag',
      },
    },
    {
      skill: 'Polish',
      img: {
        src: '/skill/other/poland-flag.png',
        alt: 'poland flag',
      },
    },
  ],
}
