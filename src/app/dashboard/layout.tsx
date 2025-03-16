export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>仪表盘导航栏</h2>
      <div>{children}</div>
    </div>
  )
}