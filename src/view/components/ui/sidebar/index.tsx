import { forwardRef, HTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/cn";

const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <aside
      ref={ref}
      className={cn("flex flex-col", "px-6 py-8", className)}
      {...props}
    />
  )
);
Sidebar.displayName = "Sidebar";

const SidebarList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col h-full", className)}
      {...props}
    />
  )
);
SidebarList.displayName = "SidebarList";

const sidebarItemVariants = cva(
  "flex items-center px-4 py-2 gap-2 rounded-sm text-base cursor-pointer",
  {
    variants: {
      active: {
        false: "text-blue-400",
        true: "text-primary bg-blue-100 font-semibold",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

type SidebarItemProps = React.ButtonHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sidebarItemVariants>;

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, active, ...props }, ref) => (
    <div
      role="button"
      ref={ref}
      className={cn(sidebarItemVariants({ active, className }))}
      {...props}
    />
  )
);
SidebarItem.displayName = "SidebarItem";

export { Sidebar, SidebarList, SidebarItem }
