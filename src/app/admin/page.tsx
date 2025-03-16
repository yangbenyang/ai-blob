import CreatePostForm from '@/components/CreatePostForm'

export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">创建新文章</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <CreatePostForm />
      </div>
    </div>
  )
} 