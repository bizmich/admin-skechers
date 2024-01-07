import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

export const textVariants = cva("text-sm font-normal");
export interface ParagraphProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp ref={ref} {...props} className={cn(textVariants({ className }))} />
    );
  }
);

Text.displayName = "Text";
export default Text;
