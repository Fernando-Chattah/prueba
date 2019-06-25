import React from 'react';
import Pepe from './Button';
import InputText from './InputText';

class Conteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            listElements: [],
            inputValue: ""
        }
    }

    toggleShow = () => {
        const newShowState = !this.state.show;
        this.setState({show: newShowState})
    }

    addElements = () => {
        const newArray = this.state.listElements;
//        newArray.push(`Número  ${this.state.listElements.length}`);
        newArray.push(this.state.inputValue);        
        this.setState({ listElements: newArray})
    }

    onChangeInput = (InputText) => {
        this.setState({inputValue: InputText})
    }

    render() {
        const {show, listElements} = this.state;
        return (
            <div>
              <InputText value={this.state.inputValue} onChange={this.onChangeInput}/> 
              <Pepe onClick={() => this.setState(listElements = [])} label="Borrar" />  
              <Pepe onClick={this.toggleShow} label={show ? "Ocultar" : "Mostard"} />
              <Pepe onClick={() => this.addElements()} label="Sumar 1" />
              {show && listElements.map(ele => <p>{ele}</p>)}
            </div>
        )
    }
}

export default Conteiner;