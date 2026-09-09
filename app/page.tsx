import Countdown from "@/components/Countdown";
import { BotanicalCorner, BotanicalBranch, BotanicalSprig } from "@/components/Botanical";

const WEDDING_DATE = "2026-11-21T16:00:00-03:00";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]">
        <div className="absolute inset-y-0 left-0 w-1/3"><BotanicalBranch className="h-full w-full text-olive-pale" /></div>
        <div className="absolute inset-y-0 right-0 w-1/3"><BotanicalBranch className="h-full w-full text-olive-pale -scale-x-100" /></div>
      </div>

      <div className="relative z-10">
        <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-4">
          <p className="text-sm tracking-[0.3em] text-olive-light uppercase mb-6">Con mucha alegría te invitamos a compartir</p>
          <h1 className="font-script text-7xl sm:text-8xl text-olive leading-none">Isabella y Luciano</h1>
          <p className="mt-6 text-lg tracking-[0.25em] text-gold uppercase">21 de Noviembre de 2026</p>
        </section>

        <div className="flex justify-center gap-10 pb-10"><Countdown targetDate={WEDDING_DATE} /></div>
        <BotanicalSprig className="mx-auto w-40 text-olive-pale" />

        <section className="relative px-6 py-20 text-center overflow-hidden">
          <BotanicalCorner className="pointer-events-none absolute -top-2 -left-6 w-40 h-40 text-olive-pale/50" />
          <BotanicalCorner className="pointer-events-none absolute -top-2 -right-6 w-40 h-40 text-olive-pale/50 -scale-x-100" />
          <p className="text-xs tracking-[0.4em] text-olive-light uppercase mb-2">Ese día</p>
          <h2 className="font-script text-5xl text-olive">Programa</h2>
          <div className="mx-auto mt-12 max-w-xs space-y-10">
            <div><p className="text-xs tracking-[0.4em] text-gold uppercase">16:00 hs</p><p className="mt-2 text-lg text-ink">Ceremonia</p><p className="mt-1 text-sm text-olive-light">Iglesia Evangélica Bautista de Haedo</p><p className="text-sm text-olive-light">Chacabuco 289, Haedo</p></div>
            <div className="w-px h-10 bg-olive/20 mx-auto" />
            <div><p className="text-xs tracking-[0.4em] text-gold uppercase">18:00 hs</p><p className="mt-2 text-lg text-ink">Celebración · Brindis</p><p className="mt-1 text-sm text-olive-light">Agrelo 1013, Francisco Álvarez</p></div>
          </div>
        </section>

        <BotanicalSprig className="mx-auto w-40 text-olive-pale" />

        <section className="px-6 py-20 text-center">
          <p className="text-xs tracking-[0.4em] text-olive-light uppercase mb-2">El código de vestimenta es</p>
          <p className="font-script text-6xl text-olive mt-2">Elegante</p>
        </section>

        <BotanicalSprig className="mx-auto w-40 text-olive-pale" />

        <section className="relative px-6 py-20 text-center overflow-hidden">
          <BotanicalBranch className="pointer-events-none absolute top-8 -left-8 w-20 h-[26rem] text-olive-pale/25" />
          <BotanicalBranch className="pointer-events-none absolute top-8 -right-8 w-20 h-[26rem] text-olive-pale/25 -scale-x-100" />
          <p className="text-xs tracking-[0.4em] text-olive-light uppercase mb-2">Nos encontramos para celebrar</p>
          <h2 className="font-script text-5xl text-olive">Nuestro día</h2>
          <p className="mt-6 max-w-sm mx-auto text-base text-ink leading-relaxed">Queremos compartir este momento tan especial con vos. Te esperamos para disfrutar juntos de una tarde llena de amor, alegría y brindis.</p>
        </section>

        <footer className="pt-12 pb-10 text-center text-sm text-olive-light">Isabella &amp; Luciano · 21/11/2026</footer>
      </div>
    </main>
  );
}
