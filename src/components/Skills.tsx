import Divider from "./ui/divider";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Linux",
    "Azure",
    "APIs",
    "Power BI",
    "Power Automate",
    "Workflow Automation",
    "Microsoft 365",
    "Google Workspaces",
    "ETL",
    "Data Visualization",
    "Data Analysis",
    "Data Warehousing",
    "Expense Management",
    "Reporting",
    "Service Management",
    "Project Management",
    "Problem Solving",
  ];

  return (
    <section id="skills">
      <Divider />
      <h2 className="text-3xl font-bold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="cursor-default bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
