import React from "react";
import { cn } from "@/app/lib/utils";

type Props = {
  className?: string;
};

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};
