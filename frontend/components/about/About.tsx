import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> { }

export const About = ({ className, ...props }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(className)}
      {...props}
    >
      <Container>
      </Container>
    </section>
  );
};
