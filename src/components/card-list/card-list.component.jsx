import { Component } from "react";
import Card from './../card/card.component'
import './card-list.styles.css';

const CardList = (props) => {
    const {monsters} = props;
    return (
        <div className="card-list">
            {monsters.map((monster)=>{
                return <Card monster={monster}></Card>
            })}
        </div>
    );
}


// class CardList extends Component {

//     render(){
//         console.log(this.props);
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {monsters.map((monster)=>{
//                     return <Card monster={monster}></Card>
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;