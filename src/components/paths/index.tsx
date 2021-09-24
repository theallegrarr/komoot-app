import Container from './index.style'
import downloadGpx from './utils/download'

const Paths = () => {
	const handleClick = () => {
		downloadGpx()
	}

	return(
		<Container>
			<div>
				<h3>Route Builder</h3>
				<ul>
					
				</ul>
			</div>
			<button onClick={handleClick} >Download Your Route</button>
		</Container>)
}

export default Paths