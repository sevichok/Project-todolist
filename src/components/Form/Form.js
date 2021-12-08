import "./FormStyle.css";
import Button from "../Button";
import Input from "../Input";

import { validateForm } from "./validationHelper/validateForm";
import React from "react";


class Form extends React.Component {
    state = {
        name: " ",
        error: validateForm(" "),
        touched: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: validateForm(e.target.value),
        });
    };

    handleBlur = () => {
        this.setState({
            touched: true,
        });
    };

    handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();

        const { onCreateTodo } = this.props;
        const { name, error, touched } = this.state;

        if (error && !touched) {
            this.setState({ touched: true });
            return;
        }

        if (!error) {
            onCreateTodo(name);
            this.setState({
                name: " ",
                error: validateForm(""),
                touched: false
            });
        }
    };

    render() {
        const { name, error, touched, } = this.state;

        return (
            <div className="formContainer">
                <Input
                    name="name"
                    id="create"
                    value={name}
                    label="Новое задание"
                    error={Boolean((touched && error))}
                    description={(touched && error)}
                    placeholder="Название"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
                <div className="divFormButtons">
                    <Button
                        onClick={this.handleSubmit}
                        outlook="contained"
                        size="large"
                        type="submit"
                    >Создать
                    </Button>
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


