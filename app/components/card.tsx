import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ title, children, className }: CardProps) => {
  return (
    <div className={cn("rounded-[5px] border p-[20px] flex flex-col gap-[10px]", className)}>
      <div className="pt-[10px]">
        <div className="text-[23px]">
          {title}
        </div>
      </div>

      <div className="">
        {children}
      </div>
    </div>
  );
};

Card.displayName = "Card";