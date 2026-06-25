import { site, waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(`Hola Melania! Te escribo desde la web 💌`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl group-hover:bg-emerald-400/60 transition" />
      <span className="relative flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 shadow-soft transition">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.81 11.81 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.31-1.65a11.84 11.84 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.75.98 1-3.65-.22-.37a9.36 9.36 0 0 1-1.43-4.95c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.64 2.76a9.36 9.36 0 0 1 2.75 6.65c.01 5.19-4.21 9.49-9.26 9.49Zm5.43-7.06c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.04 2.83 1.19 3.03c.15.2 2.04 3.11 4.93 4.36.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.13-.27-.2-.57-.35Z" />
        </svg>
        <span className="font-medium text-sm tracking-tight">WhatsApp</span>
      </span>
    </a>
  );
}
