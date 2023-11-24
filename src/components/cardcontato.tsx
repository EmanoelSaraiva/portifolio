import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function CardContact() {
  const [state, handleSubmit] = useForm("xwkdjwlb");
  if (state.succeeded) {
    return (
      <>
        <section className="flex gap-6">
          <section>
            <a
              href="https://www.linkedin.com/in/emanoel-saraiva/"
              target="_blank"
              className="flex flex-col items-center "
            >
              <FaLinkedin
                className={"hover:animate-pulse dark:invert-0"}
                size={50}
              />
              <span className="font-bold hover:border-b-purple-700 hover:border-b-2">
                Linkedin
              </span>
            </a>
          </section>
          <section>
            <a
              href="https://github.com/EmanoelSaraiva"
              target="_blank"
              className="flex flex-col items-center"
            >
              <FaGithub
                size={50}
                className={"hover:animate-pulse dark:invert-0"}
              />
              <span className="font-bold hover:border-b-purple-700 hover:border-b-2">
                GitHub
              </span>
            </a>
          </section>
        </section>
        <h1>Obrigado por entrar em contato!</h1>
      </>
    );
  }

  return (
    <>
      <section className="flex gap-6">
        <section>
          <a
            href="https://www.linkedin.com/in/emanoel-saraiva/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <FaLinkedin
              className={"dark:invert-0 hover:animate-pulse"}
              size={50}
            />
            <span className="font-bold hover:border-purple-700 hover:border-b-2">
              Linkedin
            </span>
          </a>
        </section>
        <section>
          <a
            href="https://github.com/EmanoelSaraiva"
            target="_blank"
            className="flex flex-col items-center"
          >
            <FaGithub
              size={50}
              className={"dark:invert-0 hover:animate-pulse"}
            />
            <span className="font-bold hover:border-purple-700 hover:border-b-2">
              GitHub
            </span>
          </a>
        </section>
      </section>
      {/* Form de envio de mensagem */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <section className="flex flex-col">
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            className="rounded-md p-2 placeholder:text-gray-300"
            placeholder="Seu nome"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </section>

        <section className="flex flex-col">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="rounded-md p-2 placeholder:text-gray-300"
            placeholder="exemplo@exemplo.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </section>

        <section className="flex flex-col">
          <label htmlFor="about">Assunto:</label>
          <textarea
            id="about"
            name="about"
            cols={30}
            rows={5}
            className="rounded-md p-2 text-black"
          ></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </section>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-purple-600 mt-5 p-1 rounded-md shadow-md hover:bg-purple-500"
        >
          Enviar
        </button>
      </form>
      <p className="mt-3 text-center text-gray-500">
        Se gostou do meu portfólio, ficaria feliz em conversar! Entre em contato
        pelos links acima ou preencha o formulário.
      </p>
    </>
  );
}
