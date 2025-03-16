// app/blog/[slug]/page.tsx
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug }
  })

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="text-gray-700">{post.content}</div>
    </article>
  )
}

// 生成静态路径（构建时）
export async function generateStaticParams() {
  const posts = await prisma.post.findMany()
  return posts.map(post => ({ slug: post.slug }))
}