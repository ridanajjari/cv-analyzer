import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV analyez AI " },
    { name: "description", content: "Trying to help each other for a better jobs opportunities " },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
  <Navbar />
  
  <section className="main-section">
  <div className="page-heading py-16">
   <h1> Track your CV and find what's missing  </h1>
   <h2>  with power IA we can help you to find your Dream Job</h2>
  </div>  
  
  {resumes.length > 0 && (
  <div className="resumes-section">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </div>
)}
  </section>



  </main>;
}
