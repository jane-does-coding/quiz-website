import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
	return (
		<Card className={cn("w-[380px]", className)} {...props}>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>You have 3 unread messages.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<h1>hello</h1>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Check className="mr-2 h-4 w-4" /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
	);
}
