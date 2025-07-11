import { Project } from "@/types/project";

type CardProps = {
  project: Project;
};

export default function ProjectCard({ project }: CardProps) {
  const {
    name: title,
    description,
    link,
    imageUrl,
    tags,
    stack,
  } = project;

  return (
    <article className="bg-[#2c2c2c] p-4 rounded-md border border-[#444] hover:border-[#8c52ff] transition">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>

        <p className="text-xs text-gray-500 italic mb-1">
          {stack.join("  |  ")}
        </p>
        <hr className="border-[#444] mb-2" />

        <p className="text-gray-400 text-sm mb-2">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#444] text-white text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
    </article>
  );
}
