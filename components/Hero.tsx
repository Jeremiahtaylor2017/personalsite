import Image from "next/image";

export default function Hero() {
	return (
		<section style={{ padding: "100px 32px 96px" }}>
			<div style={{
				maxWidth: 1040,
				margin: "0 auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 48,
			}}>
				<div style={{ flex: 1, minWidth: 0 }}>
					<span style={{
						fontFamily: "var(--font-mono)",
						fontSize: 11,
						letterSpacing: "0.13em",
						textTransform: "uppercase",
						color: "var(--text-3)",
						marginBottom: 22,
						display: "block",
					}}>
						Security Engineer
					</span>

					<h1 style={{
						fontFamily: "var(--font-display)",
						fontSize: "clamp(38px, 6vw, 80px)",
						fontWeight: 800,
						lineHeight: 1.0,
						letterSpacing: "-0.04em",
						color: "var(--text)",
						marginBottom: 10,
					}}>
						Jeremiah Taylor
					</h1>

					<p style={{
						fontFamily: "var(--font-mono)",
						fontSize: 13,
						color: "var(--text-2)",
						letterSpacing: "0.05em",
						marginBottom: 24,
					}}>
						Security Engineer - Infrastructure &amp; Platform
					</p>

					<p style={{
						fontSize: 16,
						fontWeight: 300,
						color: "var(--text-2)",
						maxWidth: 520,
						lineHeight: 1.7,
						marginBottom: 44,
					}}>
						I build and operate security systems in{" "}
						<strong style={{ color: "var(--text)", fontWeight: 400 }}>
							large-scale enterprise environments
						</strong>{" "}
						- 20k+ endpoints, PCI-restricted networks.
					</p>

					<div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
						<a href="#" style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 7,
							background: "var(--text)",
							color: "var(--bg)",
							fontSize: 13,
							fontWeight: 500,
							padding: "9px 20px",
							borderRadius: 7,
							border: "none",
							cursor: "pointer",
						}}>
							View Resume
							<svg width="13" height="13" fill="none" viewBox="0 0 16 16">
								<path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>

						<a href="#work" style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 7,
							background: "transparent",
							color: "var(--text-2)",
							fontSize: 13,
							padding: "8px 18px",
							borderRadius: 7,
							border: "1px solid var(--border-mid)",
							cursor: "pointer",
						}}>
							View Projects
						</a>

						<a href="https://github.com/Jeremiahtaylor2017" style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 7,
							background: "transparent",
							color: "var(--text-2)",
							fontSize: 13,
							padding: "8px 18px",
							borderRadius: 7,
							border: "1px solid var(--border-mid)",
							cursor: "pointer",
						}}>
							<svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
							GitHub
						</a>
					</div>
				</div>

				<div style={{ flexShrink: 0 }}>
					<Image
						src="/avatar.jpg"
						alt="Jeremiah Taylor"
						width={280}
						height={280}
						style={{
							borderRadius: 10,
							border: "1px solid var(--border-mid)",
							objectFit: "cover",
							display: "block",
						}}
					/>
				</div>
			</div>
		</section>
	)
}
