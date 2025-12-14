import { Link, Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import Logo from '@/assets/images/LOGO.svg';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <header className="sticky top-0 z-50 w-full h-[70px] bg-card">
        <img src={Logo} alt="Logo" />
      </header>

      <Outlet />

    </div>
  );
}