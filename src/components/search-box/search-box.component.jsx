import { Component } from "react";
import './search-box.styles.css';

const SearchBox = (props) => {
    return (
        <input className={`search-box ${props.className}`}
             type='search' 
             placeholder={props.placeholder}
             onChange={props.onChangeHandler}>
        </input>
    );
}

// class SearchBox extends Component {

//     render(){
//         return (
//             <input className={`search-box ${this.props.className}`}
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}>

//             </input>
//         )
//     }
// }

export default SearchBox;