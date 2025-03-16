// 从 Next.js 导入 Metadata 类型定义，用于设置页面元数据
import type { Metadata } from "next";
// 从 Google Fonts 导入 Geist 和 Geist_Mono 字体
import { Geist } from 'next/font/google'
// 导入全局样式文件
import "./globals.css";
import { ThemeProvider } from '@/providers/theme-provider'
import Nav from '@/components/Nav'

// 配置 Geist Sans 字体
const geist = Geist({ subsets: ['latin'] })

// 定义网站的元数据
export const metadata: Metadata = {
  title: "我的测试程序", // 网站标题
  description: "Generated by create next app", // 网站描述
};

// 根布局组件，所有页面都会被包裹在这个组件中
export default function RootLayout({
  children, // 子组件参数
}: {
  children: React.ReactNode
}) {
  return (
    // 定义 HTML 文档
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="font-sans antialiased relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
