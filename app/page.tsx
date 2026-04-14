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
					<h2 id="experience-heading">Experience</h2>
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
