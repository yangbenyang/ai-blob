'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, AlignLeft } from 'lucide-react'

export default function Nav() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center pl-10 pr-10 mr-auto ml-auto">
        {/* 移动端菜单按钮 */}
        <button 
          type="button"
          aria-haspopup="dialog"
          aria-expanded={mobileMenuOpen}
          className="md:hidden mr-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AlignLeft className="w-[25px] h-[25px]" />
        </button>

        {/* 桌面端导航 */}
        <div className="hidden md:flex gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-6">
            <span className="font-bold">
              <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
                <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                炒鸡大反派
              </div>
            </span>
          </Link>

          {/* 导航链接 */}
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about" className="transition-colors hover:text-foreground/80" aria-label="About">
              About 关于
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground/80" aria-label="Projects">
              Projects 项目
            </Link>
            <Link href="/#testimonials" className="transition-colors hover:text-foreground/80" aria-label="Testimonials">
              Testimonials 评价
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80" aria-label="Blog">
              Blog 博客
            </Link>
          </div>
        </div>

        {/* Contact 按钮 */}
        <button 
          className="relative px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] hidden md:block ml-auto rounded-full border"
          style={{ "--x": "35.75532%" } as any}
        >
          <span className="relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]">
            Contact
          </span>
          <span className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px" style={{ mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))", maskComposite: "exclude" }}></span>
        </button>

        {/* 主题切换按钮 */}
        <div className="ml-auto md:ml-2">
          <div className="border rounded-full">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 w-9 hover:bg-transparent"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="h-[24px] w-[24px]" />
                ) : (
                  <Moon className="h-[24px] w-[24px]" />
                )
              ) : (
                <span className="h-[24px] w-[24px]" /> // 保持占位避免布局偏移
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <Link href="/#about" className="block text-sm hover:text-foreground/80">
              About 关于
            </Link>
            <Link href="/projects" className="block text-sm hover:text-foreground/80">
              Projects 项目
            </Link>
            <Link href="/#testimonials" className="block text-sm hover:text-foreground/80">
              Testimonials 评价
            </Link>
            <Link href="/blog" className="block text-sm hover:text-foreground/80">
              Blog 博客
            </Link>
            <Link href="/contact" className="block text-sm hover:text-foreground/80">
              Contact 联系
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}