import React from 'react';
import exerciseIMG from '../images/exercise.png';
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';

class Card extends React.Component{
    render(){
        return(

            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseIMG} className="float-right"/>
                        </div>
                        
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;