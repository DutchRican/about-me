export default function LinkSection({ links, title }) {
	return (
		<div>
			<h3 className="border-b border-white">{title}</h3>
			<ul className="pt-2">
				{links.map((link) => (
					<li key={link.url} className="text-blue-500">
						<a href={link.url} target="_blank">{link.name}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
