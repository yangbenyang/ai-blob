import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 更新文章
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { title, content } = await request.json()
  
  try {
    const updatedPost = await prisma.post.update({
      where: { slug: params.slug },
      data: { title, content }
    })
    return NextResponse.json(updatedPost)
  } catch (error) {
    return NextResponse.json(
      { error: "文章更新失败" },
      { status: 400 }
    )
  }
}

// 删除文章
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.post.delete({
      where: { slug: params.slug }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "文章删除失败" },
      { status: 400 }
    )
  }
}