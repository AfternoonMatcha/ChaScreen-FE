import React from "react";
import { cn } from "@/lib/utils";

// 在 React 19 中，ref 变成一个普通的 prop
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  ref?: React.Ref<HTMLDivElement>; // 手动添加 ref prop
}

export default function Card({ title, children, className, ref, ...props }: CardProps) {
  return (
    <div
      ref={ref} // 直接使用解构出的 ref prop
      className={cn(
        "rounded-[5px] border",
        className
      )}
      {...props}
    >
      <div className="flex flex-col p-[20px] pt-[30px]">
        <div className="text-[23px]">
          {title}
        </div>
      </div>
      {children && (
        <div className="p-[20px]">
          {children}
        </div>
      )}
    </div>
  );
};

Card.displayName = "Card";