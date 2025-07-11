import Image from "next/image";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="flex flex-col items-center md:mt-12 gap-6 bg-[#1a1a1d] p-6 rounded-xl shadow-lg text-white max-w-[280px] h-fit w-full">
      {/* Foto + Nome + Título */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/alvimdev.jpeg"
          alt="Imagem de Bernardo Alvim"
          width={150}
          height={150}
          className="rounded-md border-2 border-[#8c52ff]"
        />
        <h1 className="font-serif font-bold text-lg text-[#8c52ff]">
          Bernardo Alvim
        </h1>
        <p className="font-sans uppercase text-sm text-gray-400">
          Engenheiro de Software
        </p>
      </div>

      {/* Redes Sociais */}
      <ul className="flex gap-4 text-2xl text-gray-400">
        <li>
          <Link href="https://github.com/alvimdev" target="_blank">
            <i className="bi bi-github hover:text-[#8c52ff] transition" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/bernardo-alvim/" target="_blank">
            <i className="bi bi-linkedin hover:text-[#8c52ff] transition" />
          </Link>
        </li>
        <li>
          <Link href="https://discordapp.com/users/alvimb_" target="_blank">
            <i className="bi bi-discord hover:text-[#8c52ff] transition" />
          </Link>
        </li>
      </ul>

      {/* Navegação de seções */}
      <nav>
        <ul className="flex flex-col gap-2 text-sm *:uppercase max-md:text-center">
          <li>
            <Link
              href="#about"
              className="text-white font-medium transition duration-300 hover:text-[#8c52ff] hover:drop-shadow-[0_0_6px_#8c52ff]"
            >
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link
              href="#stacks"
              className="text-white font-medium transition duration-300 hover:text-[#8c52ff] hover:drop-shadow-[0_0_6px_#8c52ff]"
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-white font-medium transition duration-300 hover:text-[#8c52ff] hover:drop-shadow-[0_0_6px_#8c52ff]"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
