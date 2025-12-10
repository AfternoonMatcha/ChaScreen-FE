import { Button } from "~/components/ui/button"
import { useState } from "react"

import type { Route } from "./+types/home"

// 定义页面的元数据函数
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "茶幕 Cha Screen" },
    { name: "description", content: "查询影厅排片时间表" },
  ]
}

// 默认导出主页组件
export default function Home() {
  const [count, setCount] = useState(0)

  return ( // 返回 JSX 元素
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-4">{count}</div>
      <Button className="cursor-pointer" variant="outline" onClick={() => setCount(count + 1)}>点击增加计数</Button>
    </div>
  )
}