import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function ButtonTestPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Button>Default</Button>

      <Button variant="destructive">Destructive</Button>

      <Button variant="outline">Outline</Button>

      <Button size="sm">Small</Button>

      <Button size="lg">Large</Button>

      <Button size="icon" aria-label="icon-button">
        <Trash />
      </Button>

      <Button disabled>Disabled</Button>

      <Button asChild>
        <a href="#" data-testid="as-child-button">
          As Child
        </a>
      </Button>
    </div>
  );
}
