import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileDown, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Biography() {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src="/images/headshot.png"
                  alt="Leshawn Phillips"
                  width={350}
                  height={350}
                  className="rounded-full shadow-lg aspect-square object-cover"
                  priority
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Hey! Why are you touching my headshot? Send me an email first
                  at least...
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 tracking-normal">
            👋🏼 Hi, I&apos;m Leshawn
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A passionate technology professional with a knack for creating
            innovative solutions. With a background in software development,
            integrations, and data analysis, I bring a unique perspective to
            every project I work on.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            I&apos;m a natural problem solver, a quick learner, and a team
            player. I&apos;m always looking for new challenges and opportunities
            to grow.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            I enjoy watching sports, playing basketball, and video games. I also
            dabble in Fantasy Football.
          </p>
          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full"
              asChild
            >
              <a
                href="https://github.com/lesh4wn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-10 w-10" />
                GitHub
              </a>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full"
              asChild
            >
              <a
                href="https://linkedin.com/in/leshawnphillips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full"
              asChild
            >
              <a href="/files/Leshawn Phillips Resume PDF.pdf" download>
                <FileDown className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full"
              asChild
            >
              <a href="mailto:leshawn.phillips@outlook.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
