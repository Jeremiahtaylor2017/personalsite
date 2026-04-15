export default function Home() {
	return (
		<main className="flex-1">
			<section id="hero" aria-labelledby="hero-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="max-w-3xl space-y-8">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
							Security Engineer
						</p>
						<div className="space-y-3">
							<h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
								Jeremiah Taylor
							</h1>
							<p className="text-lg text-foreground/80 sm:text-xl">
								Security Engineer - Infrastructure &amp; Platform
							</p>
						</div>
					</div>

					<p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
						I build and operate security systems in large-scale enterprise environments (20k+ endpoints, PCI-restricted networks).
					</p>

					<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<a href="#contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:border-foreground hover:bg-transparent hover:text-foreground">
							View Resume
						</a>
						<a href="#featured-project" className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
							View Projects
						</a>
						<a href="https://github.com/Jeremiahtaylor2017" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
							GitHub
						</a>
					</div>
				</div>
			</section>

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
										Infrastructure | Platform | Enterprise Scale
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
										Security Operations | Risk Reduction
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
					<h2 id="featured-project-heading">Featured Project</h2>
				</div>
			</section>

			<section id="additional-work" aria-labelledby="additional-work-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<h2 id="additional-work-heading">Additional Work</h2>
				</div>
			</section>

			<section id="how-i-think" aria-labelledby="how-i-think-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<h2 id="how-i-think-heading">How I Think</h2>
				</div>
			</section>

			<section id="contact" aria-labelledby="contact-heading">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<h2 id="contact-heading">Contact</h2>
				</div>
			</section>
		</main>
	);
}
