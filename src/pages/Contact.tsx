import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Gestion de l'envoi
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/mqardgav', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Une erreur s'est produite lors de l'envoi.")
      }
    } catch (error) {
      alert("Erreur de connexion.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="flex items-center border-b border-stroke p-4 sticky top-0 bg-card/80 backdrop-blur-sm z-10">
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex size-10 items-center justify-center rounded-full text-foreground hover:bg-gray-100"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold tracking-tight text-foreground">Contact</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-grow px-4 pt-8 pb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Contactez-moi</h2>
          <p className="text-subtle text-base leading-relaxed mt-2 max-w-md mx-auto">
            Ouvert à de nouvelles opportunités et collaborations. Remplissez le formulaire ci-dessous.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-stroke shadow-sm">
            {submitted ? (
              
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message envoyé !</h3>
                <p className="text-subtle">Merci de m'avoir contacté. Je vous répondrai très bientôt.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-foreground mb-6">Formulaire de contact</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="nom" className="text-sm font-medium text-foreground ml-1">Nom</label>
                      <input
                        required
                        type="text"
                        name="nom"
                        placeholder="Votre nom"
                        className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="postnom" className="text-sm font-medium text-foreground ml-1">Post-nom</label>
                      <input
                        required
                        type="text"
                        name="postnom"
                        placeholder="Votre post-nom"
                        className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="prenom" className="text-sm font-medium text-foreground ml-1">Prénom</label>
                      <input
                        required
                        type="text"
                        name="prenom"
                        placeholder="Votre prénom"
                        className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="exemple@gmail.com"
                        className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground ml-1">Numéro de téléphone</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+243 000 000 000"
                        className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Votre message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Pourquoi souhaitez-vous me contacter ?"
                      className="w-full rounded-lg border border-stroke bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center space-x-2 rounded-lg bg-primary py-3 text-white font-medium hover:bg-primary/90 transition-all disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="bg-card p-6 rounded-xl border border-stroke">
            <h3 className="text-lg font-semibold text-foreground mb-4">Suivez-moi en ligne</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/OnyxIkongo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-3 -m-3 rounded-lg transition-colors hover:bg-gray-50"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-red-50 text-primary">
                  <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.285 2.966 7.914 7.025 9.176.51.094.696-.22.696-.49v-1.72c-2.88.624-3.486-1.39-3.486-1.39-.464-1.18-1.13-1.494-1.13-1.494-.925-.632.07-.62.07-.62 1.023.072 1.562 1.05 1.562 1.05.91 1.558 2.384 1.108 2.964.846.092-.658.356-1.108.646-1.362-2.264-.256-4.64-1.132-4.64-5.04 0-1.112.398-2.02.1.05-2.658-.103-.31-.52-1.48.098-2.564 0 0 .858-.274 2.81 1.044.814-.226 1.688-.34 2.556-.344.868.004 1.742.118 2.556.344 1.95-1.318 2.808-1.044 2.808-1.044.618 1.076.2 2.254.1 2.564.652.622 1.05 1.508 1.05 2.658 0 3.918-2.38 4.78-4.65 5.032.366.316.69.932.69 1.878v2.79c0 .27.185.586.702.49A10.005 10.005 0 0 0 22 12c0-5.523-4.477-10-10-10Z" fillRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-subtle">/onyxikongho</p>
                </div>
                <span className="material-symbols-outlined text-subtle/50 ml-auto transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
              </a>

              <div className="border-t border-stroke"></div>

              <a
                href="https://www.linkedin.com/in/onyx-ikongho-144689392"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-3 -m-3 rounded-lg transition-colors hover:bg-gray-50"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-red-50 text-primary">
                  <svg aria-hidden="true" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-subtle">/in/onyxikongho</p>
                </div>
                <span className="material-symbols-outlined text-subtle/50 ml-auto transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full shrink-0 p-4 mt-auto">
        <div className="flex justify-center items-center gap-4 text-subtle">
          <a href="https://www.linkedin.com/in/onyx-ikongho-144689392" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a href="https://github.com/OnyxIkongo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p className="text-center text-xs text-subtle mt-2">© 2025 onyxikongho. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default Contact
