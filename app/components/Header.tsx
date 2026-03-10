"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black border-b border-neutral-800 z-40 flex items-center px-6">
      <nav className="hidden sm:flex gap-2 text-sm items-center">
        <FontAwesomeIcon icon={faSpotify} className="text-3xl" />

        <div className="ml-157 w-10 h-10 rounded-full bg-white/6 border border-white/10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faHouse}
            className="text-xl text-white"
            aria-hidden="true"
          />
        </div>
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <input
          aria-label="Pesquisar"
          placeholder="Pesquisar"
          className="hidden md:block bg-neutral-900 px-3 py-2 rounded text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
        />
        <button
          aria-label="Abrir menu do perfil"
          className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-xs"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="w-5 h-5 text-neutral-200"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
