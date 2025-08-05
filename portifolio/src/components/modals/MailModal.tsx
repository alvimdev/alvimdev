import { useEffect, useRef, useState } from "react";
import "@/app/loader.css";

interface MailModalProps {
  onClose: () => void;
}

export default function MailModal({ onClose }: MailModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  /* ―― Esc para fechar ―― */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  /* ―― Clique fora para fechar ―― */
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ―― Envio do formulário ―― */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Erro desconhecido");

      setResult("E-mail enviado com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setResult(`Erro ao enviar e-mail: ${err}`);
      console.error("Erro ao enviar e-mail", err);
    } finally {
      setLoading(false);
    }
  };

  /* ―― Limpa o resultado ao fechar o modal ―― */
  useEffect(() => {
    return () => setResult("");
  }, []);

  return (
    <article
      role="dialog"
      aria-modal="true"
      ref={backdropRef}
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="relative bg-[#2c2c2c] rounded-md border border-[#444] w-[95%] max-w-2xl p-0 overflow-hidden">
        {/* X de fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-2 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          {/* Formulário */}
          <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-300">
                Nome
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 bg-[#444] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#8c52ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 bg-[#444] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#8c52ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-sm text-gray-300">
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-2 bg-[#444] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#8c52ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm text-gray-300">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="p-2 bg-[#444] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#8c52ff]"
                required
              />
            </div>

            <button
              type={loading ? "button" : "submit"}
              disabled={loading}
              className={`mt-2 flex justify-center text-base items-center text-white py-2 rounded transition ${
                loading
                  ? "bg-[#7a3edb] cursor-not-allowed"
                  : "bg-[#8c52ff] hover:bg-[#7a3edb]"
              }`}
            >
              {loading ? (
                <div className="loader" aria-label="Enviando...">
                  <span className="loader-dot" />
                  <span className="loader-dot" />
                  <span className="loader-dot" />
                </div>
              ) : (
                "Enviar"
              )}
            </button>

            {result && (
              <p
                className={`text-sm mt-2 ${
                  result.includes("sucesso") ? "text-green-400" : "text-red-400"
                }`}
              >
                {result}
              </p>
            )}
          </form>

          {/* Painel informativo */}
          <div className="flex flex-col justify-center gap-4 bg-[#1f1f23] p-6 text-gray-300 text-center">
            <h3 className="text-2xl font-bold text-white italic font-serif">
              Get in touch!
            </h3>
            <p>
              Entre em contato para trocar ideias, propor projetos ou apenas
              dizer um “oi!”. Prometo <em>tentar</em> responder rápido 😅
            </p>
            <div className="[&_p]:flex [&_p]:items-center [&_p]:justify-between gap-2">
              <p>
                <a
                  href="mailto:alvim.dev4@gmail.com"
                  target="_blank"
                  className="hover:drop-shadow-[0_0_6px_#8c52ff]"
                >
                  alvim.dev4@gmail.com
                </a>
                <i className="bi bi-mailbox-flag text-xl"></i>
              </p>
              <p>
                Aparecida, Belo Horizonte - MG
                <i className="bi bi-geo-alt text-xl"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
