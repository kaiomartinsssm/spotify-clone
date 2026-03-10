export default function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-neutral-800 border-t border-neutral-700 flex items-center px-4 gap-4">
      <div className="flex items-center gap-3 w-72">
        <div className="w-14 h-14 bg-white/5 rounded" />
        <div>
          <div className="text-sm font-semibold">Título da Faixa</div>
          <div className="text-xs text-neutral-400">Artista • Álbum</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-4">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-white/6">Prev</button>
          <button className="p-3 rounded-full bg-white/10">Play</button>
          <button className="p-2 rounded-full bg-white/6">Next</button>
        </div>
        <div className="w-full max-w-2xl mt-2">
          <div className="h-1 bg-white/10 rounded">
            <div className="h-1 bg-white rounded w-1/3" />
          </div>
        </div>
      </div>

      <div className="w-48 flex items-center justify-end text-sm text-neutral-400">
        <button className="p-2 rounded hover:bg-white/5">Vol</button>
      </div>
    </div>
  );
}
