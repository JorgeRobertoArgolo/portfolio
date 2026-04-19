import { ABOUT_HIGHLIGHTS } from "@/constants/data"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Conheça mais</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block Visual */}
          <div className="relative">
            <div className="bg-background rounded-xl border border-border p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground text-xs">about.ts</span>
              </div>
              <pre className="text-muted-foreground leading-relaxed">
                <code>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">desenvolvedor</span> = {"{"}
                  {"\n"}  nome: <span className="text-green-400">{'"Jorge Roberto"'}</span>,
                  {"\n"}  local: <span className="text-green-400">{'"Irecê, BA"'}</span>,
                  {"\n"}  estudante: <span className="text-green-400">{'"IFBA"'}</span>,
                  {"\n"}  disponivel: <span className="text-primary">true</span>,
                  {"\n"}  paixao: <span className="text-green-400">{'"Criar soluções impactantes"'}</span>
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 blur-xl" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Sou um desenvolvedor full stack focado em criar soluções robustas, desde APIs estruturadas até interfaces responsivas e intuitivas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalho ativamente com o ecossistema Java (Spring Boot) no backend e tecnologias modernas como TypeScript, React (e Next.js) no frontend. Além disso, tenho experiência consolidada no desenvolvimento mobile utilizando React Native e Flutter.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}