import 'global-module';
import {Row, Col} from 'react-bootstrap';
import Status from './status.jsx';
import Footer from './footer.jsx';
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
			<div className="full-vh flex flex-middle flex-center">
        <div className="pull-top pull-right padding-all">
          <Status />
        </div>
        <div className="flex flex-center full-width">
          <Col xs={10} sm={10} md={8} lg={6} className="count-wrapper no-padding text-center">
            <p id="count-number">
              {this.state.count}
            </p>
            <p>people saw this page</p>
          </Col>
        </div>
        <div className="pull-bottom pull-left padding-all full-width">
          <Footer />
        </div>
      </div>
		);
	}
}
