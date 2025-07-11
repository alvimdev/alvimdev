import Aside from "@/content/Aside";
import Content from "@/content/Content";

export default function Alvim() {
  return (
    <div className="flex flex-wrap justify-center min-h-screen" role="page">
      <Aside />
      <Content/>
    </div>
  );
}

