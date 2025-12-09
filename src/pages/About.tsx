import { useNavigate } from 'react-router-dom'
import { 
  Mail, 
  Database, 
  Code2, 
  Layers, 
  Palette, 
  Users, 
  Monitor 
} from 'lucide-react'
import onyxPhoto from '../assets/onyx.jpg' 

export default function About() {
  const navigate = useNavigate()

  const skillCategories = [
    {
      title: "Système de Gestion de BDD",
      icon: <Database className="w-6 h-6 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
      skills: ["Postgres", ]
    },
    {
      title: "Langages de Programmation",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      bgIcon: "bg-blue-50",
      skills: ["JavaScript", "TypeScript", "Python"] 
    },
    {
      title: "Frameworks & Library",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      bgIcon: "bg-indigo-50",
      skills: ["Tailwind CSS", "React", "Vue.js", "AdonisJS"] 
    },
    {
      title: "Conception UI/UX",
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      bgIcon: "bg-pink-50",
      skills: ["Figma"]
    },
    {
      title: "Gestion de Projets",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      bgIcon: "bg-orange-50",
      skills: ["Asana", "Slack", "Trello", "Notion"]
    },
    {
      title: "Environnements Dev",
      icon: <Monitor className="w-6 h-6 text-slate-600" />,
      bgIcon: "bg-slate-50",
      skills: ["Visual Studio Code",]
    }
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50/50">
      <header className="sticky top-0 z-20 flex items-center justify-center border-b border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <span className="material-symbols-outlined text-gray-700">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold tracking-tight text-gray-900">À propos</h1>
      </header>

      <main className="flex-1 flex flex-col gap-10 p-6 pb-24 max-w-6xl mx-auto w-full">
        {/* --- SECTION D'INTRODUCTION --- */}
        <section className="flex flex-col items-center gap-5 text-center mt-4">
          <div
            className="h-36 w-36 rounded-full bg-cover bg-center ring-4 ring-white shadow-xl"
            style={{ backgroundImage: `url("${onyxPhoto}")` }}
          />
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Onyx Ikongho</h2>
            <p className="text-lg font-medium text-red-600 mt-1">Fullstack Developer</p>
          </div>
        </section>
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-full sm:w-auto gap-4 sm:flex-row sm:gap-6">
            <a
  href="/cv/CV_2025-12-04_Onyx_Ikongho.pdf"
  download="CV_Onyx_Ikongho.pdf"
  className="w-full sm:w-64 h-12 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
>
  <span className="material-symbols-outlined text-[20px]">download</span>
  <span>Télécharger CV</span>
</a>

            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-64 h-12 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              <span>Me Contacter</span>
            </button>
          </div>
        </div>
        <section className="max-w-3xl mx-auto text-center">
             <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Expert en développement web, je combine maîtrise technique et sensibilité design pour créer des applications performantes. Voici ma stack technique détaillée.
             </p>
        </section>

        {/* --- GRILLE DES COMPÉTENCES --- */}
        <section>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <h3 className="text-2xl font-bold text-gray-900">Compétences & Stack</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {skillCategories.map((cat, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-red-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl ${cat.bgIcon} transition-colors`}>
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg leading-tight">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 group-hover:border-red-50 group-hover:bg-red-50/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full shrink-0 p-6 border-t border-gray-200 bg-white mt-auto">
        <div className="flex justify-center items-center gap-6 text-gray-400">
          <a href="https://www.linkedin.com/in/onyx-ikongho-144689392" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
          <a href="https://github.com/OnyxIkongo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">© 2025 Onyx Ikongho. Tous droits réservés.</p>
      </footer>
    </div>
  )
}