// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// 获取所有文章
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { id: 'desc' }  // 按 ID 降序排列
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: "获取文章列表失败" },
      { status: 500 }
    )
  }
}

// 创建新文章
export async function POST(request: Request) {
  try {
    const { title, content, slug } = await request.json()
    
    // 验证必填字段
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "标题、内容和 slug 都是必填项" },
        { status: 400 }
      )
    }

    // 检查 slug 是否已存在
    const existing = await prisma.post.findUnique({
      where: { slug }
    })
    
    if (existing) {
      return NextResponse.json(
        { error: "该 slug 已被使用" },
        { status: 400 }
      )
    }

    const newPost = await prisma.post.create({
      data: { title, content, slug }
    })
    
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('创建文章失败:', error)
    return NextResponse.json(
      { error: "创建文章失败" },
      { status: 500 }
    )
  }
}