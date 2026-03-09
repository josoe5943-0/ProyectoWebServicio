export default function PaginaServiciosTaller() {
  const servicios = [
    {
      titulo: "SUPER optimización de Windows",
      descripcion: "Super optimización de recursos de computadora o laptop: configuración gamer, máxima fluidez y rapidez del sistema eliminando servicios innecesarios, programas ocultos y ajustes de rendimiento avanzados.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Configuración y seguridad Wi‑Fi",
      descripcion: "Cambio de contraseña del router, ocultar red, ajuste de seguridad, creación de redes adicionales y optimización de la señal.",
      tiempo: "20 min - 1 h",
    },
    {
      titulo: "Instalación / cambio de sistema operativo",
      descripcion: "Instalación de Windows o Linux, formateo, drivers completos, actualizaciones y programas esenciales.",
      tiempo: "1 - 3 h",
    },
    {
      titulo: "Reparación de computadoras y laptops",
      descripcion: "Diagnóstico de fallas de hardware, reparación de sistema, problemas de arranque, virus o lentitud.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Limpieza interna y mantenimiento",
      descripcion: "Limpieza de polvo, cambio de pasta térmica, revisión de ventilación y mejora de temperatura.",
      tiempo: "30 min - 1 h",
    },
    {
      titulo: "Instalación de programas",
      descripcion: "Instalación de Office, navegadores, antivirus, programas de estudio o trabajo.",
      tiempo: "20 min - 1 h",
    },
    {
      titulo: "Eliminación de virus",
      descripcion: "Limpieza de malware, optimización del sistema y mejora del rendimiento.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Optimización gamer",
      descripcion: "Optimización avanzada para juegos: limpieza del sistema, drivers gráficos, configuración de rendimiento y reducción de lag.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Configuración y seguridad Wi‑Fi",
      descripcion: "Cambio de contraseña del router, ocultar red, ajuste de seguridad, creación de redes adicionales y mejora de la configuración.",
      tiempo: "20 min - 1 h",
    },
    {
      titulo: "Cambio de pantalla",
      descripcion: "Reemplazo de módulos, touch y display con revisión final antes de entrega.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Cambio de batería",
      descripcion: "Instalación de batería nueva y prueba de carga, temperatura y autonomía básica.",
      tiempo: "20 min - 1 h",
    },
    {
      titulo: "Puerto de carga",
      descripcion: "Limpieza, reparación o reemplazo de conector de carga para celulares y tablets.",
      tiempo: "30 min - 2 h",
    },
    {
      titulo: "Diagnóstico técnico",
      descripcion: "Revisión completa de pantalla, audio, cámaras, sensores, batería, carga y placa.",
      tiempo: "15 min - 1 h",
    },
    {
      titulo: "Desbloqueos y software",
      descripcion: "Actualización, flasheo, restauración, respaldo y optimización del sistema.",
      tiempo: "20 min - 2 h",
    },
    {
      titulo: "Microsoldadura",
      descripcion: "Trabajo avanzado en placa: pistas, conectores, IC de carga y fallas electrónicas.",
      tiempo: "Según diagnóstico",
    },
  ];

  const ventajas = [
    "Cambio de contraseña y protección Wi‑Fi",
    "Diagnóstico rápido y claro",
    "Pruebas antes de entregar",
    "Atención para celulares y PCs",
    "Garantía según servicio",
    "Cotización previa",
    "Seguimiento del equipo",
  ];

  return (
    <>
      <div className="pointer-events-none fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:42px_42px] animate-pulse" />
        <div className="absolute left-0 top-24 h-px w-1/3 bg-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
        <div className="absolute right-0 top-1/3 h-px w-1/4 bg-fuchsia-400/40 shadow-[0_0_18px_rgba(217,70,239,0.9)]" />
        <div className="absolute bottom-32 left-1/4 h-px w-1/5 bg-cyan-300/40 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-blue-950 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)] before:pointer-events-none text-white relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Servicio técnico profesional
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                Reparación, optimización y soporte técnico para celulares, PCs y laptops
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Atención para cambios de pantalla, baterías, puertos de carga, software, microsoldadura, diagnóstico completo, optimización extrema de Windows y configuración de redes Wi‑Fi y routers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#servicios"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-pulse transition hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(34,211,238,1)]"
                >
                  Ver servicios
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl border border-fuchsia-400/40 px-5 py-3 font-semibold text-white shadow-[0_0_18px_rgba(217,70,239,0.45)] animate-pulse transition hover:bg-white/5 hover:shadow-[0_0_28px_rgba(217,70,239,0.9)]"
                >
                  Contactar
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-purple-400/40 bg-white/5 p-6 shadow-[0_0_20px_rgba(168,85,247,0.5)] backdrop-blur hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]">
                <p className="text-sm text-slate-400">Especialidad</p>
                <h3 className="mt-2 text-xl font-semibold">Celulares y placas</h3>
                <p className="mt-3 text-slate-300">
                  Reparación desde fallas comunes hasta trabajos avanzados de microsoldadura.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm text-slate-400">Revisión final</p>
                <h3 className="mt-2 text-xl font-semibold">Pruebas completas</h3>
                <p className="mt-3 text-slate-300">
                  Se revisa pantalla, audio, carga, cámaras y funciones clave antes de entregar.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:col-span-2">
                <p className="text-sm text-slate-400">Enfoque</p>
                <h3 className="mt-2 text-xl font-semibold">Trabajo limpio, claro y rápido</h3>
                <p className="mt-3 text-slate-300">
                  Cotización previa, seguimiento del estado del equipo y atención transparente para el cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Servicios</p>
            <h2 className="mt-2 text-3xl font-bold">Lo que puedes ofrecer en tu taller</h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Puedes cambiar textos, precios, tiempos y agregar WhatsApp, ubicación o fotos reales después.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.9)] hover:border-cyan-300"
            >
              <h3 className="text-xl font-semibold">{servicio.titulo}</h3>
              <p className="mt-3 text-slate-300">{servicio.descripcion}</p>
              <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                Tiempo estimado: {servicio.tiempo}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Ventajas</p>
            <h2 className="mt-2 text-3xl font-bold">Por qué te elegirían</h2>
            <p className="mt-4 text-slate-300">
              Una página clara da más confianza. Muestra orden, profesionalismo y ayuda a vender mejor tus servicios.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ventajas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contacto</p>
            <h2 className="mt-2 text-3xl font-bold">Listo para recibir más clientes</h2>
            <p className="mt-4 text-slate-300">
              Aquí puedes poner tu número, WhatsApp, dirección, horario y redes sociales.
            </p>
            <div className="mt-6 space-y-3 text-slate-200">
              <p><span className="font-semibold">WhatsApp:</span> +591 7XX XXX XX</p>
              <p><span className="font-semibold">Dirección:</span> Tu zona / tu ciudad</p>
              <p><span className="font-semibold">Horario:</span> Lun a sáb, 9:00 a 19:00</p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">Recomendación</h3>
            <p className="mt-4 text-slate-200">
              Después puedes agregar una sección de testimonios, galería de trabajos, precios orientativos y formulario de recepción de equipos.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-slate-300">
              Consejo: usa fotos reales de tus reparaciones, tu mesa de trabajo, herramientas y también capturas de configuraciones Wi‑Fi o routers cuando ofrezcas ese servicio. Eso vende bastante.
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 items-end">
      <a
        href="https://facebook.com"
        className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-[0_0_22px_rgba(59,130,246,0.9)] animate-pulse transition hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,1)]"
      >
        Facebook
      </a>

      <a
        href="https://t.me/username"
        className="rounded-full bg-sky-500 px-5 py-3 font-semibold text-white shadow-[0_0_22px_rgba(14,165,233,0.9)] animate-pulse transition hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,1)]"
      >
        Telegram
      </a>

      <a
        href="https://wa.me/591XXXXXXXX"
        className="rounded-full bg-green-500 px-6 py-4 font-semibold text-white shadow-[0_0_24px_rgba(34,197,94,0.95)] animate-pulse transition hover:scale-105 hover:shadow-[0_0_34px_rgba(34,197,94,1)]"
      >
        WhatsApp
      </a>
      </div>
    </div>
    </>
  );
}
