import ProjectCard from "@/components/interfaces/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    name: "Ávila Lótus",
    description:
      "Plataforma de agendamento para uma clínica de massoterapia. Backend com Spring Boot, autenticação via JWT, agenda dinâmica e frontend Astro.",
    link: "https://github.com/alvim-puc/avila-lotus",
    imageUrl: "/images/avila.png",
    tags: ["Massoterapia", "Automação", "Reserva"],
    stack: ["Astro", "Java", "Tailwind CSS", "Spring Boot", "MySQL"],
  },
  {
    name: "Gostô?",
    description:
      "Aplicação web para avaliações gastronômicas entre amigos, com sistema de notas, comentários e rankings. Frontend feito com Astro.js e backend com Java SpringBoot.",
    link: "https://github.com/alvim-puc/gosto",
    imageUrl: "/images/gosto.png",
    tags: ["Reserva", "Avaliações", "Comunidade", "Gastronomia", "Social", "Lazer"],
    stack: ["Astro", "Java", "Tailwind CSS", "Spring Boot", "MySQL"],
  },
  {
    name: "Super Shopping List",
    description:
      "Gerenciador de listas de compras que permite duplicar listas, editar produtos manualmente e organizar por data. Design minimalista e foco na experiência do usuário.",
    link: "https://github.com/alvim-puc/super-shopping-list",
    imageUrl: "/images/ssl.png",
    tags: ["Organização", "Lista de Compras", "Gerenciamento"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
  },
  {
    name: "CashCraft: Dominando suas Finanças",
    description:
      "Muitas pessoas enfrentam dificuldades para organizar suas finanças — seja por falta de planejamento, excesso de gastos ou desconhecimento das próprias metas. O CashCraft nasceu como uma forma leve e interativa de ajudar usuários a entenderem melhor sua vida financeira e começarem a se organizar de forma prática.",
    link: "https://github.com/alvimdev/cash-craft",
    imageUrl: "/images/cashcraft.png",
    tags: ["Gamification", "React", "Hooks"],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "JSON Server", "Bootstrap CSS"],
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#8c52ff] mb-4">Projetos</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
