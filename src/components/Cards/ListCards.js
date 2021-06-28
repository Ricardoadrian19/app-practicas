import Cards from "./Cards"
import React, {useEffect, useState} from "react"
import usuarios from '../helpers/usuarios.js'
const ListCards = () => {
    //console .log(usuarios[0].name.title)
    return (
        <div>        
            <div className="container">
                <div className="row"> 

                        {usuarios.map(user => (
                             <div className="col-md-4" key = {user.login.uuid}>
                             {console.log(user)}
                             <Cards user={user}/>
                             </div>
                         ))} 
                     </div>
                 </div>
             </div>
         )
     }
     
     export default ListCards

