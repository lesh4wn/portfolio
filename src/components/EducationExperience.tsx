import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Divider from "./ui/divider";

const educationData = [
  {
    degree: "Associates's Degree, Information Technology",
    institution: "Surry Community College",
    year: "2017 - 2022 (early college)",
  },
  {
    degree: "High School Diploma",
    institution: "Surry Early College High School",
    year: "2017 - 2022",
  },
];

const experienceData = [
  {
    position: "IT Software Analyst",
    company: "Leonard Truck Outfitters",
    period: "November 2022 - Present",
    responsibilities: [
      "Lead, architect, and develop full-stack applications used internally to solve business problems or improve efficiency",
      "Design and engineer data solutions to support business needs and allow for data-driven decision making",
      "Collaborate with cross-functional teams to understand business requirements and translate them into technical solutions",
      "Provide technical support and guidance to users and troubleshoot issues related to software and systems",
    ],
    tldr: "I work with leadership to develop and implement software to solve business problems, and create data solutions to support business needs and allow for data-driven decision making. The software I develop is used by over 150+ retail locations and over 500+ employees.",
  },
  {
    position: "IT Help Desk Support",
    company: "Leonard Truck Outfitters",
    period: "January 2022 - November 2022",
    responsibilities: [
      "Provided technical support and guidance to users and troubleshoot issues related to software and systems",
      "Managed and maintain computer hardware and software",
      "Troubleshooted and resolve hardware and software issues",
      "Provided training and support to users on new software and hardware",
    ],
    tldr: "I provided on-call technical support and guidance to over 150+ retail locations and over 500+ employees",
  },
  {
    position: "IT Support Technician",
    company: "AREVO Group",
    period: "January 2021 - August 2021",
    responsibilities: [
      "Provided technical support to over 80+ employees",
      "Wrote basic scripts to automate tasks and improve efficiency",
      "Managed and maintained computer hardware and software",
    ],
    tldr: "I provided technical support to over 80+ employees and wrote basic scripts to automate tasks and improve efficiency",
  },
  {
    position: "IT Intern",
    company: "Northern Regional Hospital",
    period: "September 2020 - January 2021",
    responsibilities: [
      "Shadowed a PC/LAN Engineer and learned the basics of networking, computer hardware, software, security and support",
      "Setup and installed PC's, printers, and other peripherals for new employees in the hospital",
      "Played a key role in the setup of a new practice at the hospital, Northern Urgent Care",
    ],
    tldr: "I shadowed a PC/LAN Engineer and learned the basics of networking, computer hardware, software, security and support.",
  },
];

const certifications = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    institution: "Cisco",
    year: "2022",
  },
  {
    name: "Cyber Security Essentials",
    institution: "Cisco",
    year: "2022",
  },
  {
    name: "Introduction to Cybersecurity",
    institution: "Cisco",
    year: "2022",
  },
  {
    name: "Introduction to Networks",
    institution: "Cisco",
    year: "2022",
  },
  {
    name: "10-hour General Industry Safety and Health",
    institution: "OSHA Safety Training Institute",
    year: "2020",
  },
];

export default function EducationExperience() {
  return (
    <section id="education-experience">
      <Divider />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education & Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="col-span-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <CardTitle className="mb-6">Education</CardTitle>
                  {educationData.map((edu, index) => (
                    <div key={index} className="mb-2 last:mb-0">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-gray-600">
                        {edu.institution}, {edu.year}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <CardTitle className="mb-6">Certifications</CardTitle>
                  {certifications.map((cert, index) => (
                    <div key={index} className="mb-2 last:mb-0">
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-gray-600">
                        {cert.institution}, {cert.year}
                      </p>
                    </div>
                  ))}
                  <p className="mt-4 text-sm text-gray-600">
                    & growing! I never stop learning!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-gray-700">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 font-semibold text-sm text-gray-700">
                    TLDR: {exp.tldr}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
