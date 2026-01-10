export default function LinkSection({ links, title }) {
	return (
		<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
			<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{title}</h3>
			<ul className="space-y-3">
				{links.map((link) => (
					<li key={link.url} className="group">
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/20"
						>
							<span className="text-white group-hover:text-blue-300 transition-colors duration-200">
								{link.name}
							</span>
							<svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
