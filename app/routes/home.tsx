import type { Route } from "./+types/home"

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
      <article className="min-w-[300px] border rounded-[5px] p-[20px] pt-[30px]">
        <div className="text-[23px]">选择影厅</div>
      </article>
      <article className="flex-1 border rounded-[5px] p-[20px] pt-[30px]">
        <div className="text-[23px]">CINITY LED 杜比全景声厅 沙发软座</div>
      </article>
    </main>
  )
}