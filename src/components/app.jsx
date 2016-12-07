import 'global-module';
import {Well} from 'react-bootstrap';
import socketService from 'js/socket.service.js';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.update = this.update.bind(this);
		socketService.subscribe(this.update);
	}
	componentDidMount() {
		socketService.count();
	}
	update(dataFromSocket) {
		let count = dataFromSocket.count;
		this.setState({count: count});
	}
	render() {
		return (
			<Well>
				<h1>{this.state.count}</h1>
			</Well>
		);
	}
}
