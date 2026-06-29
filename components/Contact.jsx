"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { IoMdTime, IoLogoGithub } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/app/hooks/zod";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";

const EMAILJS_SERVICE_ID = "service_vxyft5j";
const EMAILJS_TEMPLATE_ID = "template_2zljcse";
const EMAILJS_PUBLIC_KEY = "ZWoaP5wxp7QxNKFoL";

// ─── Variants ─────────────────────────────────────────────────────────────────

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fieldContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const fieldItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const infoContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const infoItem = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const successVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.25 } },
};

// ─── ContactSection ───────────────────────────────────────────────────────────

export default function ContactSection() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          reply_to: data.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  const cardInfo = [
    {
      icon: <IoMailOutline />,
      iconBg: "bg-indigo-500/15 text-indigo-400",
      label: t("contact.email"),
      value: "mohamad.okba99@gmail.com",
    },
    {
      icon: <CiLocationOn />,
      iconBg: "bg-sky-500/12 text-sky-400",
      label: t("contact.location"),
      value: "Syria, Hama",
    },
    {
      icon: <IoMdTime />,
      iconBg: "bg-amber-400/12 text-amber-400",
      label: t("contact.responseTime"),
      value: t("contact.responseValue"),
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-6 py-20 text-slate-200 font-[family-name:var(--font-space-grotesk)]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* ── Header ── */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <motion.p
            variants={headerItem}
            className="mb-3 text-sm uppercase tracking-[0.4em] text-violet-400"
          >
            {t("contact.badge")}
          </motion.p>
          <motion.p
            variants={headerItem}
            className="text-base leading-relaxed text-slate-500"
          >
            {t("contact.title")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Form Card ── */}
          <motion.div
            variants={cardReveal(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.01] p-8"
          >
            {/* Mac chrome */}
            <div className="mb-7 flex items-center gap-2 border-b border-white/[0.06] pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-white/60">
                sendMessage.jsx
              </span>
            </div>

            <AnimatePresence mode="wait">
              {/* Success */}
              {status === "success" ? (
                <motion.div
                  key="success"
                  variants={successVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    className="text-4xl"
                  >
                    ✦
                  </motion.div>
                  <p className="text-lg font-semibold text-slate-200">
                    Message Sent!
                  </p>
                  <p className="font-mono text-sm leading-relaxed text-slate-500">
                    Thanks for reaching out.
                    <br />
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-mono text-xs text-slate-500 underline underline-offset-4 transition-colors hover:text-violet-400"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  variants={fieldContainer}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-sm text-red-400"
                      >
                        ⚠️ Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name */}
                  <motion.div variants={fieldItem}>
                    <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                      // {t("contact.name")}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Noor"
                      className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/30 outline-none transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/[0.06]"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1 font-mono text-xs text-red-400"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fieldItem}>
                    <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                      // {t("contact.email")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/30 outline-none transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/[0.06]"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1 font-mono text-xs text-red-400"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Subject */}
                  <motion.div variants={fieldItem}>
                    <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                      // {t("contact.subject")}
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/30 outline-none transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/[0.06]"
                    />
                    <AnimatePresence>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1 font-mono text-xs text-red-400"
                        >
                          {errors.subject.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fieldItem}>
                    <label className="mb-1 block font-mono text-[11px] tracking-wide text-violet-400">
                      // {t("contact.message")}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Hey Noor, I have a project idea..."
                      className="w-full resize-none rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-slate-200 placeholder-white/30 outline-none transition-all duration-200 focus:border-violet-500/50 focus:bg-violet-500/[0.06]"
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1 font-mono text-xs text-red-400"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fieldItem}>
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 24px rgba(139,92,246,0.3)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500/50 to-fuchsia-500/70 py-3.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <motion.span
                            className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <FiSend />
                          {t("contact.send")}
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Info Card ── */}
          <motion.div
            variants={cardReveal(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.01] p-4 sm:p-8"
          >
            <motion.div
              variants={infoContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {cardInfo.map((card) => (
                <motion.div
                  key={card.label}
                  variants={infoItem}
                  whileHover={{
                    x: 4,
                    borderColor: "rgba(139,92,246,0.35)",
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4"
                >
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      {card.label}
                    </p>
                    <p className="text-sm text-slate-300">{card.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex gap-3"
            >
              {[
                {
                  label: "GitHub",
                  icon: <IoLogoGithub />,
                  href: "https://github.com/noor1eng",
                },
                {
                  label: "LinkedIn",
                  icon: <CiLinkedin />,
                  href: "https://www.linkedin.com/in/mohammad-noor-b36420399",
                },
              ].map(({ label, icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(139,92,246,0.45)",
                    color: "#a78bfa",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 text-sm text-slate-400 transition-colors"
                >
                  {icon}
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
