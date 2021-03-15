import React from 'react'
import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faCss3,
    faJava,
    faReact,
    faPython,
    faSass,
    faJsSquare,
    faGithub
} from '@fortawesome/free-brands-svg-icons'


const cursos = [
    {id: 1, icon: faHtml5 ,name: 'Html', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 60.00},
    {id: 2, icon: faCss3 ,name: 'Css', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 50.00},
    {id: 3, icon: faJava ,name: 'Java', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 70.00},
    {id: 4, icon: faReact ,name: 'React js', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 80.00},
    {id: 5, icon: faGithub ,name: 'Git', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 50.00},
    {id: 6, icon: faPython ,name: 'Python', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 50.00},
    {id: 7, icon: faSass ,name: 'Sass', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 100.00},
    {id: 8, icon: faJsSquare ,name: 'Java script', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum labore praesentium veniam ex nam, sit, maxime dignissimos accusantium at quidem consequuntur.', price: 50.00},
];

export default function Filter() {

    return (
        <div className="services">
            <div className="servicesList">
                <div className="containerList">
                {
                    cursos.map((curso, i) =>                    
                    <div className="serviceBx" key={curso.id}>
                        <div className="cardserviceItem">
                            <a href="/">
                                <FontAwesomeIcon className="icon" icon={curso.icon}/>
                                <h2>{curso.name}</h2>
                            </a>
                        </div>
                    </div>
                    )
                }
                </div>

            </div>

            <div className="containerProd">
                
                {
                cursos.map((curso, i) =>
                <div className="cardService" key={curso.id}>
                    <div className="cardItem">
                        <FontAwesomeIcon className="icon" icon={curso.icon} />
                        <h2>{curso.name}</h2>
                        <p>
                            {curso.desc}
                        </p>
                        <a className="price" href="/Details">
                            R$ {curso.price} saiba mais
                        </a>
                    </div>
                </div>
                )
                }
                
            </div>

        </div>
    )
}
