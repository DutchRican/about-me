export default function LinkSection({ links, title }) {
	return (
		<div>
			<h3 className="border-b border-white bg-gradient-to-br from-blue-200 to-purple-200 bg-clip-text text-transparent">{title}</h3>
			<ul className="pt-2">
				{links.map((link) => (
					<li key={link.url} className="text-indigo-400  transition-colors duration-200 ease-in hover:text-indigo-300">
						<a href={link.url} target="_blank">{link.name}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
