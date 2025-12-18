import type { Route } from "./+types/home"
import { Card } from "@/components/card"
import { ScreenSelector } from "@/components/screenSelector"

// 定义页面的元数据函数
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "茶幕 Cha Screen" },
    { name: "description", content: "查询影厅排片时间表" },
  ]
}

export default function Home() {
  return (
    <main className="flex-1 p-[10px] flex gap-[10px] flex-col md:flex-row">
      <Card title="选择影厅" className="min-w-[300px]" >
        <ScreenSelector />
      </Card>
      <Card title="CINITY LED 杜比全景声厅 沙发软座" className="flex-1" />
    </main >
  )
}