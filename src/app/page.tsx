import Biography from "@/components/Biography";
import EducationExperience from "@/components/EducationExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <div className="container mx-auto px-4 py-4">
        <Biography />
        <Skills />
        <EducationExperience />
        <Projects />
      </div>
    </main>
  );
}
