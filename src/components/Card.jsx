import Container from "../UI/Container"
import "./Card.css"
function Card(props){

    return(
        <Container className="card" >
            <div className="card-img-container">
                <img src={props.src}/>
            </div>
            <div className="card-overlay"></div>
            <div className="card-text-container">
                <div className="card-title-container">
                    <p className="title">{props.title}</p>
                </div>
                <div className="card-description">
                    <p>{props.description}</p>
                </div>
            </div>

        </Container>
    )
}
export default Card