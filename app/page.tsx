import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="flex-1">
			<Hero />
			<div style={{ height: 1, background: "var(--border)" }} />
			<section id="experience" aria-labelledby="experience-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-4xl space-y-12">
						<div className="space-y-3">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
								Experience
							</p>
							<h2 id="experience-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Enterprise security work across infrastructure, operations, and platform systems.
							</h2>
						</div>

						<div className="space-y-8">
							<article className="space-y-4">
								<div className="space-y-2">
									<div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
										<h3 className="text-xl font-semibold text-foreground">
											Security Engineer - Williams-Sonoma
										</h3>
										<p className="text-sm text-muted">July 2024 - Present</p>
									</div>
									<p className="text-sm uppercase tracking-[0.14em] text-muted">
										Infrastructure &middot; Platform &middot; Enterprise Scale
									</p>
								</div>

								<ul className="space-y-3 text-base leading-8 text-muted">
									<li>Own and maintain enterprise security platforms at scale.</li>
									<li>Support 20,000+ endpoints and approximately 6,500 servers.</li>
									<li>Focus on infrastructure reliability, systems design, and operational resilience.</li>
								</ul>
							</article>

							<article className="space-y-4">
								<div className="space-y-2">
									<div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
										<h3 className="text-xl font-semibold text-forground">
											Security Analyst - Five Star Bank
										</h3>
										<p className="text-sm text-muted">May 2022 - July 2024</p>
									</div>
									<p className="text-sm uppercase tracking-[0.14em] text-muted">
										Security Operations &middot; Risk Reduction
									</p>
								</div>

								<ul className="space-y-3 text-base leading-8 text-muted">
									<li>Worked across security operations and day-to-day defensive workflows.</li>
									<li>Led vulnerability management efforts and supported audit readiness.</li>
									<li>Focused on practical risk reduction across the environment.</li>
								</ul>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section id="featured-project" aria-labelledby="featured-project-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-4xl space-y-12">
						<div className="space-y-3">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
								Featured Project
							</p>
							<h2 id="featured-project-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								PCI-Oriented Orchestration Platform
							</h2>
							<p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
								A controller and agent system designed for restricted PCI environments where inbound access is not an option.
							</p>
						</div>

						<div className="grid gap-6">
							<article className="space-y-3">
								<h3 className="text-lg font-semibold text-foreground">Problem</h3>
								<p className="text-base leading-8 text-muted">
									PCI environments commonly restrict inbound connectivity, which makes traditional remote orchestration and operational access patterns difficult or impossible to use safely.
								</p>
							</article>

							<article className="space-y-3">
								<h3 className="text-lg font-semibold text-foreground">Solution</h3>
								<p className="text-base leading-8 text-muted">
									Built an outbound-only orchestraion model using a controller and agent architecture, allowing centralized job coordination without requiring inbound exposure into restricted network segments.
								</p>
							</article>

							<article className="space-y-3">
								<h3 className="text-lg font-semibold text-foreground">Key Features</h3>
								<ul className="space-y-3 text-base leading-8 text-muted">
									<li>CLI + controller + agent architecture.</li>
									<li>SSH-based execution for operational workflows.</li>
									<li>Centralized job management across constrained environments.</li>
								</ul>
							</article>

							<article className="space-y-4">
								<h3 className="text-lg font-semibold text-foreground">Architecture</h3>
								<div className="rounded-xl border border-border bg-white/3 px-5 py-6">
									<p className="text-sm uppercase tracking-[0.18em] text-muted">
										CLI {"->"} Controller {"->"} Engine (PCI) {"->"} Targets
									</p>
								</div>
							</article>

							<div>
								<a
									href="https://github.com/Jeremiahtaylor2017/orchestration_engine"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
								>
									View Project on GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="additional-work" aria-labelledby="additional-work-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-4xl space-y-12">
						<div className="space-y-3">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
								Additional Work
							</p>
							<h2 id="additional-work-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Supporting systems and implementation work across enterprise security tooling.
							</h2>
						</div>

						<div className="space-y-6">
							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										DNS Forwarding Proxy (Infoblox)
									</h3>
									<p className="text-base leading-8 text-muted">
										Built and supported forwarding workflows around Infoblox-connected DNS infrastructure to fit operational and network contrstraints.
									</p>
								</div>
							</article>

							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Bindplane telemetry pipeline
									</h3>
									<p className="text-base leading-8 text-muted">
										Implemented telemetry collection and routing patterns to improve visibility and operational signal handling.
									</p>
								</div>
							</article>

							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Delinea RDP implementation
									</h3>
									<p className="text-base leading-8 text-muted">
										Worked on controlled remote access implementaion using Delinea to align acces patterns with enterprise security requirements.
									</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section id="how-i-think" aria-labelledby="how-i-think-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-4xl space-y-12">
						<div className="space-y-3">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
								How I Think
							</p>
							<h2 id="how-i-think-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								I prefer secure, practical systems that hold up under real operational constraints.
							</h2>
						</div>

						<div className="grid gap-6 sm:grid-cols-2">
							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Secure design in constrained environments
									</h3>
									<p className="text-base leading-8 text-muted">
										I design around the actual operating environment, especially when access is limited, networks are segmented, or security controls are non-negotiable.
									</p>
								</div>
							</article>

							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Reduce attack surface first
									</h3>
									<p className="text-base leading-8 text-muted">
										I prefer designs that remove exposure, reduce moving parts, and make failure modes easier to reason about.
									</p>
								</div>
							</article>

							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Build simple, reliable systems
									</h3>
									<p className="text-base leading-8 text-muted">
										The best systems are usually the ones operators can understand, support, and trust under pressure.
									</p>
								</div>
							</article>

							<article className="rounded-xl border border-border bg-white/3 px-5 py-6">
								<div className="space-y-2">
									<h3 className="text-lg font-semibold text-foreground">
										Choose practical solutions over unnecessary complexity
									</h3>
									<p className="text-base leading-8 text-muted">
										I value systems that solve the problem cleanly and hold up in production more than solutions that are clever but expensive to maintain.
									</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" aria-labelledby="contact-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-4xl space-y-10">
						<div className="space-y-3">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
								Contact
							</p>
							<h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
								Get in touch.
							</h2>
							<p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
								If you want to talk about security engineering, infrastructure, or platform work, the easiest way to reach me is through the links below.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-3">
							<a href="malto:jeremiahtaylor2021@gmail.com" className="rounded-xl border border-border bg-white/3 px-5 py-6 transition-colors hover:border-foreground"
							>
								<div className="space-y-2">
									<p className="text-sm uppercase tracking-[0.14em] text-muted">Email</p>
									<p className="text-base font-medium text-foreground">jeremiahtaylor2021@gmail.com</p>
								</div>
							</a>

							<a
								href="https://www.linkedin.com/in/jeremiahtaylor2017"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl border border-border bg-white/3 px-5 py-6 transition-colors hover:border-foreground"
							>
								<div className="space-y-2">
									<p className="text-sm uppercase tracking-[0.14em] text-muted">LinkedIn</p>
									<p className="text-base font-medium text-foreground">View profile</p>
								</div>
							</a>

							<a
								href="https://github.com/jeremiahtaylor2017"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl border border-border bg-white/3 px-5 py-6 transition-colors hover:border-foreground"
							>
								<div className="space-y-2">
									<p className="text-sm uppercase tracking-[0.14em] text-muted">GitHub</p>
									<p className="text-base font-medium text-foreground">Jeremiahtaylor2017</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
