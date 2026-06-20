"use client";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const cardInfo = [
    {
      icon: <IoMailOutline />,
      iconBg: "bg-indigo-500/15 text-indigo-400",
      label: "Email",
      value: "mohamad.okba99@gmail.com",
    },
    {
      icon: <CiLocationOn />,
      iconBg: "bg-sky-500/12 text-sky-400",
      label: "Location",
      value: "Syria, Hama",
    },
    {
      icon: <IoMdTime />,
      iconBg: "bg-amber-400/12 text-amber-400",
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-slate-200 px-6 py-20 overflow-hidden font-[family-name:var(--font-space-grotesk)]"
    >
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-3 text-4xl text-center font-semibold leading-tight tracking-tight text-slate-100 md:text-5xl">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>
        <p className="mb-14 text-base leading-relaxed text-center text-slate-500">
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and let&apos;s build something great.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Form Card ── */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8">
            {/* Fake window chrome */}
            <div className="mb-7 flex items-center gap-2 border-b border-white/[0.06] pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-white/60">
                sendMessage.jsx
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                // name
              </label>
              <input
                type="text"
                placeholder="Noor"
                className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/70 outline-none transition focus:border-violet-500/50 focus:bg-violet-500/[0.06] "
              />
              <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                // email
              </label>
              <input
                type="email"
                placeholder="noor@example.com"
                className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/70 outline-none transition focus:border-violet-500/50 focus:bg-violet-500/[0.06] "
              />
              <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                // subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/70 outline-none transition focus:border-violet-500/50 focus:bg-violet-500/[0.06] "
              />
              <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                // message
              </label>
              <textarea
                placeholder="Hey Noor, I have a project idea..."
                className="w-full resize-none rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/70 outline-none transition focus:border-violet-500/50 focus:bg-violet-500/[0.06]"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500/50 to-fuchsia-500/70 py-3.5 text-sm font-medium text-white transition hover:opacity-85 active:scale-[0.98] disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    {/* <SpinnerIcon /> */}
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    {/* <CheckIcon /> */}
                    Sent!
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="rounded-xl border border-green-500/25 bg-green-500/10 py-3 text-center font-mono text-xs text-green-400">
                  ✓ Message sent! I&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </div>

          {/* ── Info Card ── */}
          <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 sm:p-8">
            {/* Info items */}

            {cardInfo.map((card) => (
              <div
                key={card.label}
                className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition hover:border-violet-500/30"
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-600">
                    {card.label}
                  </p>
                  <p className="text-sm text-slate-300">{card.value}</p>
                </div>
              </div>
            ))}

            {/* Social buttons */}
            <div className="flex gap-3">
              {[
                {
                  label: "GitHub",
                  icon: <IoLogoGithub />,
                  href: "https://github.com/",
                },
                {
                  label: "LinkedIn",
                  icon: <CiLinkedin />,
                  href: "https://linkedin.com/",
                },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 text-sm text-slate-400 transition hover:border-violet-500/40 hover:bg-violet-500/[0.07] hover:text-violet-400"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
