import { defineCollection, z, defineCollectionSource } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
})

const commonProjectSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  release: z.string().nonempty(),
  date: z.string().nonempty(),
  featured: z.boolean().optional(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      title: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})
const hackernewsSource = defineCollectionSource({
  getKeys: () => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => data.map((key: string) => `${key}.json`))
  },
  getItem: (key: string) => {
    const id = key.split('.')[0]
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
  },
})

const hackernews = defineCollection({
  type: 'data',
  source: hackernewsSource,
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string(),
    score: z.number(),
    url: z.string(),
    by: z.string(),
  }),
})
export const collections = {
  content_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/**/*.md',
        exclude: ['en/articles/*.md'],
        prefix: '/en',
      },
      schema: commonContentSchema,
    }),
  ),
  content_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/**/*.md',
        exclude: ['fr/articles/*.md'],
        prefix: '/fr',
      },
      schema: commonContentSchema,
    }),
  ),
  articles_en: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'en/articles/*.md',
        prefix: '/en/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  articles_fr: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/articles/*.md',
        prefix: '/fr/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  projects_en: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'en/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  projects_fr: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'fr/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_en: defineCollection({
    type: 'data',
    source: 'en/faq.json',
    schema: commonFaqSchema,
  }),
  faq_fr: defineCollection({
    type: 'data',
    source: 'fr/faq.json',
    schema: commonFaqSchema,
  }),
  hackernews_en: hackernews,
  hackernews_fr: hackernews,
}
