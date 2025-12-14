import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function Card({ title, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[5px] border",
        className
      )}
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