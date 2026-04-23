export default function Nav() {
	return (
		<nav style={{
			position: "sticky",
			top: 0,
			zIndex: 200,
			background: "rgba(13,13,15,0.88)",
			backdropFilter: "blur(14px) saturate(160%)",
			borderBottom: "1px solid var(--border)",
		}}>
			<div style={{
				maxWidth: 1040,
				margin: "0 auto",
				padding: "0 32px",
				height: 54,
				display: "flex",
				alignItems: "center",
			}}>
				<a href="#" style={{
					fontFamily: "var(--font-display)",
					fontSize: 15,
					fontWeight: 700,
					color: "var(--text)",
					letterSpacing: "-0.02em",
					marginRight: "auto",
				}}>
					Jeremiah Taylor
				</a>

				<ul style={{ display: "flex", gap: 2, listStyle: "none", marginRight: 18 }}>
					{[
						{ label: "Experience", href: "#experience" },
						{ label: "Work", href: "#work" },
						{ label: "Thinking", href: "#thinking" },
						{ label: "GitHub", href: "https://github.com/Jeremiahtaylor2017" },
					].map(({ label, href }) => (
						<li key={label}>
							<a href={href} style={{
								fontSize: 13,
								color: "var(--text-2)",
								padding: "5px 11px",
								borderRadius: 6,
								display: "block",
							}}>
								{label}
							</a>
						</li>
					))}
				</ul>

				<a href="mailto:jeremiahtaylor2021@gmail.com" style={{
					fontSize: 13,
					fontWeight: 500,
					padding: "6px 16px",
					borderRadius: 7,
					background: "var(--text)",
					color: "var(--bg)",
				}}>
					Get in touch
				</a>
			</div>
		</nav>
	)
}
