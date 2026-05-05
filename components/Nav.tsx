export default function Nav() {
	return (
		<nav
			className="sticky top-0 z-[200] border-b border-subtle"
			style={{ background: "rgba(13,13,15,0.88)", backdropFilter: "blur(14px) saturate(160%)" }}
		>
			<div className="max-w-[1040px] mx-auto px-8 h-[54px] flex items-center">
				<a
					href="#"
					className="mr-auto font-display text-[15px] font-bold text-foreground tracking-[-0.02em]"
				>
					Jeremiah Taylor
				</a>

				<ul className="hidden sm:flex gap-[2px] list-none mr-[18px]">
					{[
						{ label: "Experience", href: "#experience" },
						{ label: "Work", href: "#work" },
						{ label: "Thinking", href: "#thinking" },
						{ label: "GitHub", href: "https://github.com/Jeremiahtaylor2017" },
					].map(({ label, href }) => (
						<li key={label}>
							<a
								href={href}
								className="block text-[13px] text-muted px-[11px] py-[5px] rounded-[6px]"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				<a
					href="mailto:jeremiahtaylor2021@gmail.com"
					className="text-[13px] font-medium px-4 py-[6px] rounded-[7px] bg-foreground text-page whitespace-nowrap"
				>
					Get in touch
				</a>
			</div>
		</nav>
	);
}
