interface Post {
  slug: string
  title: string
  content: string
  date?: Date // 可选字段
}

const posts: Post[] = [
  { 
    slug: 'hello-nextjs',
    title: 'Next.js 入门指南',
    content: '学习 Next.js 的基础知识...',
    date: new Date('2024-01-01')
  },
  { 
    slug: 'dynamic-routing',
    title: '掌握动态路由',
    content: '深入了解如何创建动态页面...',
    date: new Date('2024-01-02')
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}