import './linksection.css';
export default function LinkSection({ links, title }) {
	return (
		<div className='link-section-container'>
			<h3>{title}</h3>
			<ul>
				{links.map((link) => (
					<li key={link.url}>
						<a href={link.url} target="_blank">{link.name}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
