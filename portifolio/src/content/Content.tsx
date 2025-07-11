import About from "./About";
import Stacks from "./Stacks";
import Projects from "./Projects";

export default function Content() {
  return (
    <main className="p-6 md:p-12 flex flex-col gap-12 max-w-4xl w-full">
      <section id="about">
        <About />
      </section>
      <section id="stacks">
        <Stacks />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
