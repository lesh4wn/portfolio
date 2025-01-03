"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "CareerLink",
    description:
      "A full-stack SaaS web application for educational institutions to manage student apprenticeships, pre-apprenticeships, and internships.",
    longDescription:
      "CareerLink is a full-stack web application designed to streamline the management of student apprenticeships, pre-apprenticeships, and internships. It provides a comprehensive platform for educational institutions to track and evaluate the progress of their students in these programs. The application includes features such as student enrollment, progress tracking, assessment management, and reporting tools.",
    images: [
      "/images/project-screenshots/careerlink/admin-quick-metrics.png",
      "/images/project-screenshots/careerlink/apprenticeships.png",
      "/images/project-screenshots/careerlink/students.png",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
    ],
  },
  {
    title: "Timeclock",
    description:
      "A full-stack web application that provided a simpler method of employees to punch in and out of work. This integrated directly with our HRIS for payroll using their API.",
    longDescription:
      "Timeclock is a full-stack web application designed to streamline the process of employee attendance tracking. It provides a user-friendly interface for employees to punch in and out of work, as well as view their attendance history. The application integrates directly with the HRIS system for payroll purposes, ensuring accurate and timely processing of employee hours.",
    images: [
      "/images/project-screenshots/timeclock/timeclock-sign-in.png",
      "/images/project-screenshots/timeclock/timeclock-employee.png",
      "/images/project-screenshots/timeclock/timeclock-admin.png",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQL Server",
    ],
  },
  {
    title: "Simple Signs",
    description:
      "A full-stack web application that replaced a legacy system for printing product signage.",
    longDescription:
      "Simple Signs is a full-stack web application designed to streamline the process of printing product signage. It utilizes product data to populate signage templates depending on the product type and location. This replaced a legacy system that was based on Microsoft Excel, originally created by a former employee of the organization.",
    images: [
      "/images/project-screenshots/simplesigns/simple-signs-dashboard.png",
      "/images/project-screenshots/simplesigns/trailer-sign.png",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    title: "Power BI - Sales Reporting (Sample)",
    description:
      "Extensive Power BI reports that provided a comprehensive view of sales data for the organization.",
    longDescription:
      "This is one example of a Power BI report that I created for the organization. The data displayed is sample data and not the actual data from the organization. This report was created to provide a comprehensive view of sales data for the organization. It includes a variety of charts and graphs to visualize the data, as well as interactive filters to allow users to explore the data in different ways.",
    images: ["/images/project-screenshots/powerbi/powerbi.png"],
    technologies: ["Power BI", "SQL Server"],
  },
];

export default function Projects() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Projects & Past Work
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="gradient"
                    onClick={() => setOpenModal(index)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {projects.map((project, index) => (
        <Dialog
          key={index}
          open={openModal === index}
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
            </DialogHeader>
            <Carousel>
              <CarouselContent>
                {project.images.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <Image
                      src={image}
                      alt={project.title}
                      width={1200}
                      height={1000}
                      className="w-full h-[400px] object-cover rounded-md"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <DialogDescription>{project.longDescription}</DialogDescription>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
