import "./FormStyle.css";
import Button from "../Button";
import Input from "../Input";

import React from "react";

class Form extends React.Component {
    state = {
        name: " ",
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();

        const { onCreateTodo } = this.props;
        const { name } = this.state;
        onCreateTodo(name);

        this.setState({ name: " " });
    };

    render() {
        const { name } = this.state;

        return (
            <div className="formContainer">
                <label htmlFor="search"><h4>Новое задание</h4></label>
                <Input
                    name="name"
                    id="create"
                    value={name}
                    placeholder="Название"
                    onChange={this.handleChange}
                />
                <div className="divFormButtons">
                    <Button
                        onClick={this.handleSubmit}
                        outlook="contained"
                        size="large"
                        type="submit"
                        children='Создать'></Button>
                </div>
            </div>
        )
    }
}

export default Form;

// const Form = () => {
//     return (
//         <div className="formContainer">
//             <label htmlFor="search"><h4>Новое задание</h4></label>
//             <Input
//                 name="name"
//                 id="create"
//                 placeholder="Название"
//                 onChange={this.handleChange}
//             />
//             <div className="divFormButtons">
//                 <Button outlook="contained" size="large" type="button" children='Создать'></Button>
//             </div>
//         </div>
//     )
// }


