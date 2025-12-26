export default function Footer() {
  return (
    <footer className="relative mt-4 border-t border-slate-200 bg-white/30 backdrop-blur">

      {/* ================= BLOQUE SUPERIOR ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Dirección */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Dirección
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Medical Equipment &amp; Supplies E.I.R.L.
              <br />
              Av. Mariscal Óscar R. Benavides N.º 679, Int. 508
              <br />
              Urb. Lima Industrial – Lima, Perú
            </p>
          </div>

          {/* Horario */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Horario de atención
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Lunes a Viernes: 9:00 a.m. – 6:00 p.m.
              <br />
              Sábados: 9:00 a.m. – 1:00 p.m.
              <br />
              <span className="text-slate-500">
                Domingos y feriados: Cerrado
              </span>
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Información de contacto
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              RUC: 20608253123
              <br />
              E-mail: ventasmedicalequipmentsupplies@gmail.com
              <br />
              Celulares: 944 638 288 || 953 691 257
            </p>
          </div>

        </div>

        {/* Separador visual */}
        <div className="border-t border-slate-200 my-4"></div>

      </div>

      {/* ================= MAPA ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Ubicación MES"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.944715868472!2d-77.05293882511796!3d-12.047324841910838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8d155e661f5%3A0x806e3b4dd71079c6!2sAv.%20%C3%93scar%20R.%20Benavides%20679%2C%20Lima%2015082!5e0!3m2!1ses!2spe!4v1762201766280!5m2!1ses!2spe"
            className="w-full h-56"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-slate-200 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 text-[11px] text-slate-500 flex justify-between items-center">
          <span>
            © {new Date().getFullYear()} Medical Equipment &amp; Supplies E.I.R.L.
          </span>
          <span>Sitio web desarrollado por MES</span>
        </div>
      </div>

    </footer>
  );
}
