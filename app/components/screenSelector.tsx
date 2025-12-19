import React from "react";
import { cn } from "@/lib/utils";


interface ScreenSelectorProps {
  className?: string;
}

export const ScreenSelector = ({ className }: ScreenSelectorProps) => {
  return (
    <div className={cn("", className)} >
      <SelectCard title="按照城市筛选" />
    </div>
  );
};

interface SelectCardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

import { MapPin } from "lucide-react"

const SelectCard = ({ title, children }: SelectCardProps) => {
  return (
    <div className="border rounded-[2px] p-[10px]">
      <div className="pt-[10px] flex gap-[10px]">
        <div className="text-[16px]">{title}</div>
        <div className="text-[12px] flex justify-center items-center gap-[3px] opacity-75">
          <MapPin size={14} /><span>定位城市：嘉兴</span>
        </div>
      </div>
      <div >{children}</div>
    </div>
  )
};