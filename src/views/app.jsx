import {Component} from 'react'
import { Input,Button } from 'antd'

function ChildInput(props) {
    return <div style={{ width: 200 }}>
        <Input onChange={props.handleChange} value={props.value} date-key={props.dkey}></Input>
    </div>
}
class Comp extends Component {
    state = {
        val: '',
    }
    handleChange = (e) => {
        console.log(e.target.getAttribute('date-key'));
        this.setState({ val: e.target.value })
    }
    render() {
        return <div>
            <ChildInput handleChange={this.handleChange} value={this.state.val} dkey="a"></ChildInput>
            <ChildInput handleChange={this.handleChange} value={this.state.val} dkey="b"></ChildInput>
        </div>
    }
}
export default Comp;