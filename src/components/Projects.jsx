import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { t } = useLanguage();
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      id: 2,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: t.projects.project2.image,
      demoLink: t.projects.project2.demo,
      codeLink: t.projects.project2.code,
    },
    {
      id: 1,
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: t.projects.project1.image,
      demoLink: t.projects.project1.demo,
      codeLink: t.projects.project1.code,
    },
    {
      id: 3,
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      image: t.projects.project3.image,
      demoLink: t.projects.project3.demo,
      codeLink: t.projects.project3.code,
    },
  ];

  return (
    <section id="projects" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 
          ref={ref}
          className={`text-4xl font-bold text-slate-900 mb-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
