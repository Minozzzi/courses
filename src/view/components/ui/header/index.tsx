import { forwardRef } from "react";

import { getInitials } from "@/app/lib/get-initials/";
import { cn } from "@/app/lib/cn";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  displayName: string;
  imageUrl: string;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, displayName, imageUrl, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "flex items-center justify-between p-5 shadow-sm",
        className
      )}
      {...props}
    >
      <h1>Logo Cursos</h1>

      <div>
        <Avatar>
          <AvatarImage src={imageUrl} alt="Imagem de perfil do usuário atual" />
          <AvatarFallback className="text-primary bg-blue-200">
            {getInitials(displayName)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
);

Header.displayName = "Header";
