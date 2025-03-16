export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>博客文章：{params.slug}</h1>
}