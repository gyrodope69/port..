// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Project = {
  id: string;
  title: string;
  tagline: string;
  role: string;
  impact: string;
  stack: string[];
  image?: string;
};

const projects: Project[] = [
  {
    id: "rag-agent",
    title: "Agentic RAG Knowledge Copilot",
    tagline:
      "Multi-step RAG agent built with LangChain & LangGraph for domain-specific Q&A with source-aware responses.",
    role: "End-to-end design, backend, orchestration, frontend UI",
    impact:
      "Turned scattered docs into a single conversational interface; improved answer discovery time for users.",
    stack: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Vector DB",
      "React",
    ],
    image: "/rag-arch.png",
  },
  {
    id: "voice-assistant",
    title: "Real-time AI Voice Assistant (Fire Safety)",
    tagline:
      "Low-latency voice agent for compliance & inbound calls with ~350ms average latency.",
    role: "System design, FastAPI backend, WebRTC, LLM integration",
    impact:
      "50% latency reduction vs initial implementation; 85% conversation completion across multi-turn dialogs.",
    stack: ["FastAPI", "WebRTC", "Gemini", "Deepgram", "ElevenLabs", "React"],
    image: "/voice-agent.png",
  },
  {
    id: "b2b-automation",
    title: "B2B Lead Automation & Intelligence",
    tagline:
      "Automation workflows for lead sourcing, enrichment, and scoring across multiple data providers.",
    role: "Workflow design, API integrations, data pipelines",
    impact:
      "40% reduction in manual sourcing effort; enriched CRM data to ~80% accuracy; boosted conversion efficiency.",
    stack: ["n8n", "Telegram Bot", "Apollo API", "Lusha API", "Python"],
    image: "/b2b.png",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* background graphic */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-6rem] h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_55%)] opacity-70" />
      </div>

      <Header />
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-fuchsia-500/20 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="#hero"
          className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-sm font-semibold tracking-[0.25em] uppercase text-transparent"
        >
          ROHIT • AI
        </Link>

        <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
          {[
            ["projects", "Projects"],
            ["services", "Services"],
            ["about", "About"],
            ["skills", "Skills"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-fuchsia-500 after:to-cyan-400 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30 hover:brightness-110 sm:inline-flex"
        >
          Book a 20‑min consult
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/60"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:grid md:grid-cols-[1.1fr_minmax(0,1.1fr)] md:items-center md:gap-10 md:py-20">
        {/* Left copy */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-fuchsia-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI • Agents • RAG
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            I build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-400 bg-clip-text text-transparent">
              production AI agents
            </span>{" "}
            and automation that actually ship.
          </h1>

          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            From real-time voice assistants to RAG copilots and B2B automation,
            I design, build, and deploy AI systems that reduce latency, cut
            manual work, and move core business metrics.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/30 hover:brightness-110"
            >
              Tell me about your project
            </a>
            <a
              href="#projects"
              className="rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-200"
            >
              View AI projects
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
            <Metric badge="350ms" label="Voice agent latency" />
            <Metric badge="85%" label="Conversation completion" />
            <Metric badge="40%" label="Less manual lead sourcing" />
          </div>
        </div>

        {/* Right: hero illustration + overlay UI */}
        <div className="relative mt-4 md:mt-0">
          {/* main illustration card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/70 shadow-2xl shadow-cyan-500/25">
            <Image
              src="/hero-ai.png"
              alt="AI command center illustration"
              width={720}
              height={440}
              className="h-64 w-full object-cover md:h-72"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-slate-950/50" />
          </div>

          {/* floating chips */}
          <div className="pointer-events-none absolute -left-3 top-3 flex gap-3 text-[11px]">
            <div className="pointer-events-auto rounded-2xl border border-slate-700 bg-slate-950/90 px-3 py-2 text-slate-200 shadow-md shadow-slate-900/80 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Now working on
              </p>
              <p className="mt-1 font-medium">
                RAG copilot for internal knowledge
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 right-3 flex flex-col gap-2 text-[11px] md:right-6">
            <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-200 shadow shadow-emerald-500/30 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span>Latency tuned to ~350ms</span>
            </div>
            <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-cyan-100 shadow shadow-cyan-500/30 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Agentic flows with LangGraph</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ badge, label }: { badge: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1">
      <span className="text-xs font-semibold text-cyan-400">{badge}</span>
      <span className="text-[11px] text-slate-400">{label}</span>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-slate-800/80 bg-slate-950/90"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Flagship projects
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Agents, RAG systems, and automation built end to end.
            </p>
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-400">
            Built for production, not demos
          </span>
        </div>

        {/* horizontal rail */}
        <div className="mt-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex min-w-full gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isSpotlight = project.id === "rag-agent";

  return (
    <article
      className={`group flex w-80 flex-shrink-0 flex-col overflow-hidden rounded-3xl border bg-slate-900/70 p-0 shadow-lg shadow-slate-950/70 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-cyan-500/30 md:w-96 ${
        isSpotlight
          ? "border-cyan-500/60"
          : "border-slate-700/70 hover:border-cyan-400/70"
      }`}
    >
      {project.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={320}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          {isSpotlight && (
            <span className="absolute left-3 top-3 rounded-full bg-indigo-500/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-50">
              RAG Spotlight
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-slate-50 group-hover:text-cyan-300">
          {project.title}
        </h3>
        <p className="text-xs text-slate-300">{project.tagline}</p>
        <p className="text-[11px] text-slate-400">
          <span className="font-semibold text-slate-200">Role: </span>
          {project.role}
        </p>
        <p className="text-[11px] text-emerald-300/90">
          Impact: <span className="font-medium">{project.impact}</span>
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/70 bg-slate-950/80 px-2.5 py-0.5 text-[10px] text-slate-200 group-hover:border-cyan-500/70 group-hover:text-cyan-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-slate-800 bg-slate-950/90"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">How I help</h2>
        <p className="mt-1 text-sm text-slate-400">
          Outcome-focused freelance offerings for founders and product teams.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="AI Agent from spec to prod"
            body="Design and implement voice/chat agents backed by LLMs, with metrics like latency, completion rate, and user satisfaction."
          />
          <ServiceCard
            title="RAG knowledge copilots"
            body="Ingest your docs, design retrieval, and build source-aware copilots that reduce support load and internal query time."
          />
          <ServiceCard
            title="Data automation & lead engines"
            body="Automate sourcing, enrichment, and scoring pipelines so your team spends time closing, not copying data."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-sm shadow-slate-900/70 backdrop-blur-md">
      <div>
        <h3 className="text-base font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{body}</p>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Typical engagement: 2–6 weeks · Remote · Async-friendly
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <p>
            I&apos;m an AI engineer and full‑stack developer with experience
            shipping real-time voice agents, RAG chatbots, and data automation
            systems for B2B products.
          </p>
          <p>
            Recent work includes a production-grade voice assistant for fire
            safety compliance, web AI chatbots for self‑serve customer support,
            and lead pipelines that cut manual work while improving data
            quality.
          </p>
          <p>
            My background combines strong problem-solving fundamentals
            (competitive programming, CS degree) with hands-on experience in LLM
            integration, async backends, and modern frontend stacks.
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-950/90">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Skills & stack
        </h2>
        <div className="mt-6 grid gap-6 text-sm md:grid-cols-3">
          <SkillGroup
            title="Languages"
            items={["Python", "JavaScript", "TypeScript", "SQL", "C++"]}
          />
          <SkillGroup
            title="Backend & infra"
            items={[
              "FastAPI",
              "Node.js / Express",
              "WebRTC",
              "WebSocket",
              "Async IO",
              "PostgreSQL",
              "MongoDB",
            ]}
          />
          <SkillGroup
            title="AI / ML"
            items={[
              "LLM integration (Gemini, OpenAI, etc.)",
              "RAG systems",
              "LangChain / LangGraph",
              "STT/TTS (Deepgram, ElevenLabs)",
            ]}
          />
          <SkillGroup
            title="Frontend"
            items={["React", "Next.js", "Tailwind CSS", "Material UI"]}
          />
          <SkillGroup
            title="Automation & tools"
            items={["n8n", "Selenium", "Apify", "Git/GitHub", "GCP", "Render"]}
          />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 shadow-sm shadow-slate-900/70 backdrop-blur-md">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <ul className="mt-2 space-y-1 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b border-slate-800 bg-gradient-to-t from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Work with me</h2>
        <p className="mt-2 text-sm text-slate-300">
          Founders, product teams, and agencies: share a bit about what you want
          to build and I&apos;ll respond with concrete next steps.
        </p>

        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 text-sm shadow-lg shadow-slate-950/80 backdrop-blur-md">
          <p className="text-sm text-slate-300">
            For now, the fastest way to reach me is email. Click the button
            below and your mail client (Gmail) will open with a pre-filled
            subject.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=royr91430@gmail.com&su=AI%20Project%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:brightness-110"
          >
            Email me (opens Gmail)
          </a>

          <p className="text-[11px] text-slate-500">
            Prefer forms? I can wire a full contact API later (Resend /
            Nodemailer).
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Rohit Mohan Roy</span>
        <div className="flex gap-4">
          <a href="mailto:royr91430@gmail.com" className="hover:text-cyan-400">
            Email
          </a>
          <a
            href="https://github.com/gyrodope69"
            target="_blank"
            className="hover:text-cyan-400"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rohitroy33/"
            target="_blank"
            className="hover:text-cyan-400"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
