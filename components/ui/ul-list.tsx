import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import React from "react";

export interface ULProps extends React.ParamHTMLAttributes<HTMLUListElement> {
  asChild?: boolean;
}

const List = React.forwardRef<HTMLUListElement, ULProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "ul";
    return <Comp ref={ref} {...props} className={cn(className)} />;
  }
);
List.displayName = "List";

export interface LiProps extends React.ParamHTMLAttributes<HTMLLIElement> {
  asChild?: boolean;
  href?: string;
}
const ListItem = React.forwardRef<HTMLLIElement, LiProps>(
  ({ className, children, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : "li";
    if (href) {
      return (
        <Comp {...props} ref={ref} className={cn(className)}>
          <Link href={href}>{children}</Link>
        </Comp>
      );
    } else {
      return (
        <Comp {...props} ref={ref} className={cn(className)}>
          {children}
        </Comp>
      );
    }
  }
);
ListItem.displayName = "ListItem";

export { List, ListItem };
