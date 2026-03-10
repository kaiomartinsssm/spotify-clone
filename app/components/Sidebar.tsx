export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-72 bg-gradient-to-b from-neutral-950 to-neutral-900 p-4 gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-sm font-bold">
          S
        </div>
        <span className="text-lg font-semibold">Kaio Martins</span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 text-sm">
          <li className="py-2 px-3 rounded hover:bg-white/5 cursor-pointer">
            Início
          </li>
          <li className="py-2 px-3 rounded hover:bg-white/5 cursor-pointer">
            Procurar
          </li>
          <li className="py-2 px-3 rounded hover:bg-white/5 cursor-pointer">
            Sua Biblioteca
          </li>
        </ul>

        <div className="mt-6">
          <h4 className="text-xs text-neutral-400 mb-2">Playlists</h4>
          <ul className="space-y-1 text-sm">
            <li className="py-1 px-2 rounded hover:bg-white/5 cursor-pointer">
              Playlist 1
            </li>
            <li className="py-1 px-2 rounded hover:bg-white/5 cursor-pointer">
              Playlist 2
            </li>
          </ul>
        </div>
      </nav>

      <div className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Spotify Clone
      </div>
    </aside>
  );
}
