import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme">
      <Sun className="h-5 w-5 dark:hidden transition-transform duration-500 hover:rotate-90 motion-reduce:transition-none motion-reduce:hover:rotate-0" />
      <Moon className="hidden h-5 w-5 dark:block transition-transform duration-500 hover:-rotate-12 motion-reduce:transition-none motion-reduce:hover:rotate-0" />
    </Button>
  );
};
