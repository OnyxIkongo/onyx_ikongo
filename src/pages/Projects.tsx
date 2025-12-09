import { useNavigate } from 'react-router-dom'
import { 
  Code2, 
  Layout, 
  Server,
  Sparkles 
} from 'lucide-react'
import imgPortfolioV2 from '../assets/onyx.jpg' 
import imgPortfolioV1 from '../assets/onyx.jpg'
import imgCloneXBack from '../assets/téléchargement.png'
import imgCloneXFront from '../assets/téléchargement.png'

export default function Projects() {
  const navigate = useNavigate()

  // DONNÉES DES PROJETS
  const projects = [
    {
      title: "Portfolio Personnel 2025 (React)",
      category: "Modern Frontend Arch.",
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      image: imgPortfolioV2,
      description: "Conception d'une plateforme d'identité numérique nouvelle génération. Architecture SPA (Single Page Application) haute performance basée sur React et TypeScript. Implémentation d'un Design System atomique via Tailwind CSS, garantissant une expérience utilisateur fluide, interactive et une maintenabilité optimale du code.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "SPA"]
    },
    {
      title: "Portfolio Vitrine V1",
      category: "Intégration Web",
      icon: <Layout className="w-5 h-5 text-purple-600" />,
      image: imgPortfolioV1,
      description: "Conception d'une vitrine professionnelle interactive. Focus sur la sémantique HTML5 et la maîtrise du flux CSS pour un rendu responsive robuste sans dépendance à des frameworks lourds.",
      stack: ["HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Clone X (Core Back-End)",
      category: "Back-End Architecture",
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      image: imgCloneXBack,
      description: "Développement de l'architecture serveur d'un réseau social. Implémentation du pattern MVC avec AdonisJS, gestion complexe de base de données relationnelle SQL et sécurisation des sessions utilisateurs.",
      stack: ["AdonisJS", "Node.js", "PostgreSQL", "MVC", "Auth"]
    },
    {
      title: "Clone X (Interface UI)",
      category: "Vanilla JS Engineering",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      image: imgCloneXFront,
      description: "Reproduction fidèle (Pixel Perfect) de l'interface utilisateur de X. Manipulation avancée du DOM en JavaScript natif pour gérer la dynamique des interactions en temps réel sans rechargement.",
      stack: ["JavaScript (ES6+)", "DOM Manipulation", "CSS3 Grid/Flex"]
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
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Projets & Réalisations</h1>
      </header>

      <main className="flex-1 flex flex-col gap-10 p-6 pb-24 max-w-6xl mx-auto w-full">
        {/* --- INTRODUCTION --- */}
        <section className="text-center max-w-3xl mx-auto mt-4">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
            Mes Réalisations
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Une sélection de projets techniques démontrant mon expertise en architecture backend, ingénierie frontend et conception d'interfaces modernes.
          </p>
        </section>

        {/* --- GRILLE DES PROJETS --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-2">
                  {project.icon}
                  {project.category}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-200 group-hover:border-indigo-100 group-hover:bg-indigo-50/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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