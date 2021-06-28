import userEvent from '@testing-library/user-event'
import foto from '../imagenes/imagen 1.jpeg'
const Cards = ({user}) => {
    const {name,login,picture}= user
    console.log(user)
    return (
         <div className = "card">
                <img src={picture.large} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name.first}</h5>
                        <a href="#" className="btn btn-primary">Folow</a>
                    </div>
        </div>
    )
}

export default Cards