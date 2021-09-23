import Container from './index.style'
import move from '../../assets/icons8-menu.svg'
import trash from '../../assets/icons8-trash.svg'

const Paths = () => {

	return(
		<Container>
			<div>
				<h3>Route Builder</h3>
				<ul>
					<div className='path-item'>
						<div className='left'>
							<img src={move} alt='move' />
							Waypoint 1
						</div>
						<img src={trash} alt='move' />
					</div>
					<div className='path-item'>
						<div className='left'>
							<img src={move} alt='move' />
							<p>Waypoint 2</p>
						</div>
						<img src={trash} alt='move' />
					</div>
					<div className='path-item'>
						<div className='left'>
							<img src={move} alt='move' />
							Waypoint 3
						</div>
						<img src={trash} alt='move' />
					</div>
				</ul>
			</div>
			<button>Download Your Route</button>
		</Container>)
}

/**
 * @todo
 * drag and drop the paths to reorder
*/

export default Paths