import Image from "next/image";

export default function Hero() {
	return (
		<section className="px-6 sm:px-8 pt-[60px] pb-16 sm:pt-[100px] sm:pb-24">
			<div className="max-w-[1040px] mx-auto flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">

				<div className="w-full min-w-0 sm:flex-1">
					<span className="font-mono text-[11px] tracking-[0.13em] uppercase text-faint mb-[22px] block">
						Security Engineer
					</span>

					<h1 className="font-display text-[clamp(48px,6vw,80px)] font-extrabold leading-none tracking-[-0.04em] text-foreground mb-[10px]">
						Jeremiah Taylor
					</h1>

					<p className="font-mono text-[13px] text-muted tracking-[0.05em] mb-[24px]">
						Security Engineer — Infrastructure &amp; Platform
					</p>

					<p className="text-[16px] font-light text-muted max-w-[520px] leading-[1.7] mb-[44px]">
						I build and operate security systems in{" "}
						<strong className="text-foreground font-normal">
							large-scale enterprise environments
						</strong>{" "}
						— 20k+ endpoints, PCI-restricted networks.
					</p>

					<div className="flex gap-[10px] flex-wrap">
						<a
							href="#"
							className="inline-flex items-center gap-[7px] bg-foreground text-page text-[13px] font-medium px-5 py-[9px] rounded-[7px]"
						>
							View Resume
							<svg width="13" height="13" fill="none" viewBox="0 0 16 16">
								<path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>

						<a
							href="#work"
							className="inline-flex items-center gap-[7px] text-muted text-[13px] px-[18px] py-[8px] rounded-[7px] border border-mid-c"
						>
							View Projects
						</a>

						<a
							href="https://github.com/Jeremiahtaylor2017"
							className="inline-flex items-center gap-[7px] text-muted text-[13px] px-[18px] py-[8px] rounded-[7px] border border-mid-c"
						>
							<svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
							GitHub
						</a>
					</div>
				</div>

				<div className="relative flex-shrink-0 w-[140px] h-[140px] sm:w-[280px] sm:h-[280px] rounded-[10px] overflow-hidden border border-mid-c">
					<Image
						src="/avatar.jpg"
						alt="Jeremiah Taylor"
						fill
						className="object-cover"
					/>
				</div>

			</div>
		</section>
	);
}
