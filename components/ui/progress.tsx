"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-300 ${className}`}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-full bg-blue-300 transition-all"
			style={{ width: `${value}%` }}
		/>
	</ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
