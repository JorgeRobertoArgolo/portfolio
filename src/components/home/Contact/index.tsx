import { CONTACT_INFO } from "@/constants/data"

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Vamos conversar</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer apenas bater um papo? 
            Estou sempre aberto a discutir novas oportunidades. Entre em contato através dos canais abaixo.
          </p>
        </div>

        {/* Contact Container */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info List */}
          <div className="space-y-8">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability Card */}
          <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground font-medium text-lg">Disponível para projetos</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente aceitando novos projetos freelance e oportunidades de trabalho remoto. 
              Sinta-se à vontade para me enviar um e-mail com os detalhes da sua ideia!
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}