import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // 生成独立部署文件
  typescript: {
    ignoreBuildErrors: true, // 临时允许类型错误
  }
};

export default nextConfig;
