const techs = [
  { skill: "Java", level: 4 },
  { skill: "Spring Boot", level: 3 },
  { skill: "React", level: 4 },
  { skill: "Next.js", level: 4 },
  { skill: "TypeScript", level: 4 },
  { skill: "Tailwind CSS", level: 5 },
  { skill: "Astro", level: 3 },
  { skill: "HTML", level: 5 },
  { skill: "CSS", level: 5 },
  { skill: "JavaScript", level: 5 },
  { skill: "PostgreSQL", level: 3 },
  { skill: "SQLite", level: 2 },
  { skill: "MySQL", level: 4 },
  { skill: "GitHub", level: 5 },
  { skill: "Linux", level: 4 },
  { skill: "Node.js", level: 3 },
];

export default function Stacks() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#8c52ff] mb-4">Stacks</h2>
      <div className="flex flex-wrap gap-4">
        {techs.map(({ skill, level }) => (
          <div
            key={skill}
            className="bg-[#2c2c2c] text-white px-4 py-2 rounded-md border border-[#444] hover:border-[#8c52ff] transition
             hover:shadow-[0_0_6px_#8c52ff,0_0_10px_#8c52ff]"
          >
            <div className="flex justify-between items-center gap-3 text-xs">
              <span>{skill}</span>
              <div className="flex gap-[1px] text-[#8c52ff] border-l border-gray-400 pl-2">
                {level} <i className="bi bi-stars"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
