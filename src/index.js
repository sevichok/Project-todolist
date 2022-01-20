import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// CLASSWORK

// class Person extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       age: 26,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   // handleClick() {
//   //   this.setState({ age: this.state.age + 1 })
//   //   this.setState({ age: this.state.age + 1 })
//   //   this.setState({ age: this.state.age + 1 })
//   // }

//   // handleClick() {
//   //   this.setState((state, props) => {
//   //     console.log(state);
//   //     console.log(props);
//   //     return { age: state.age + 1 }
//   //   })
//   // }

//   // handleClick() {
//   //   // this.setState((state) => ({ age: state.age + 1 }))
//   //   // this.setState((state) => ({ age: state.age + 1 }))
//   //   // this.setState((state) => ({ age: state.age + 1 }))
//   //   // this.setState((state) => ({ age: state.age + 1 }))
//   //   this.setState((state) => ({ age: state.age + 1 }))
//   // }

//   handleClick = () => {
//     this.setState({ age: this.state.age + 1 });
//   }

//   render() {
//     const { name, lastname } = this.props;
//     const { age } = this.state;

//     return (
//       <p>
//         <button onClick={this.handleClick}>click</button>;
//         <p>
//           name - {name},
//           lastname - {lastname},
//           age - {age}</p>
//       </p>
//     );
//   };
// }

// const PersonList = () => {
//   return (
//     <>
//       <Person name="Ivan" lastname="Ivanov"></Person>
//       <Person name="Ivan" lastname="Ivanov"></Person>
//       <Person name="Ivan" lastname="Ivanov"></Person>
//     </>
//   );
// };

// ReactDOM.render(
//   <PersonList />,
//   document.getElementById("root")
// );


