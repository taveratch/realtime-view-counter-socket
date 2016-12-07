import 'global-module';
import {Well} from 'react-bootstrap';
let socket = io('http://localhost:3000');
export default class App extends React.Component {
  componentDidMount() {

  }
  render () {
    return (
      <Well>
        <h1>Development</h1>
      </Well>
    );
  }
}
