import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "min-h-[160px] w-full bg-white/5 border border-white/10 rounded-md resize-none p-4 text-base md:text-sm placeholder:text-white/50 selection:bg-accent focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />)
  );
}

export { Textarea }
