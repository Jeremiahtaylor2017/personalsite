export default function Footer() {
	return (
		<footer style={{
			borderTop: "1px solid var(--border)",
			padding: "28px 32px",
		}}>
			<div style={{
				maxWidth: 1040,
				margin: "0 auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "wrap",
				gap: 14,
			}}>
				<a href="#" style={{
					fontFamily: "var(--font-display)",
					fontSize: 14,
					fontWeight: 600,
					color: "var(--text-3)",
				}}>
					Jeremiah Taylor
				</a>

				<ul style={{ display: "flex", gap: 24, listStyle: "none" }}>
					{[
						{ label: "Experience", href: "#experience" },
						{ label: "Work", href: "#work" },
						{ label: "Contact", href: "#contact" },
					].map(({ label, href }) => (
						<li key={label}>
							<a href={href} style={{
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								color: "var(--text-3)",
								letterSpacing: "0.05em",
							}}>
								{label}
							</a>
						</li>
					))}
				</ul>

				<span style={{
					fontFamily: "var(--font-mono)",
					fontSize: 11,
					color: "var(--text-3)",
					letterSpacing: "0.04em",
				}}>
					&copy; 2025 Jeremiah Taylor
				</span>
			</div>
		</footer>
	)
}
