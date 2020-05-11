import React from 'react'

const DisplayGame = ({videogame}) => {
    return (
        <div>
                                <p>{videogame.name}</p>
                                <p>{videogame.rating}</p>
                                <img 
                                    className="imgVideogame"
                                    src={videogame.background_image} 
                                    alt={videogame.name} />
                            </div>
    )

}
export default DisplayGame