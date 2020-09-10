// Libraries
import React from "react";

export default function ImageList(props) {
	const { list, title } = props
	return (
		<div className="image-list">
			{
				list.length ? (
					<React.Fragment>
						<h1 className="image-list-title">{title} Pictures</h1>
						<ul className="image-container">
							{
								list.map(item => {
									return (<li key={item.title}><img src={item.src} alt="item.title" title={item.title} /></li>)
								})
							}
						</ul>
					</React.Fragment>)
					: (<h2 className="no-data">No Images</h2>)
			}
		</div>
	)
}

