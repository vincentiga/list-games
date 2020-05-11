import React from 'react'
import './GameList.css'
import DisplayGame from './Game'

class GameList extends React.Component {
    state = {
        videogames: []
    }

   
    getVideoGames = () => {
        fetch("https://wild-games.herokuapp.com/api/v1")
        .then(res => res.json())
        .then(res => this.setState({videogames:res}))
    }
    componentDidMount() {
        this.getVideoGames()
    }
    render(){
        return(
            <div>
                Checkpont 2
                    <div>
                        {this.state.videogames.map(videogame => (
                            <DisplayGame videogame={videogame} key={videogame.id} />
                            ))}
                            {/*<button type="button" onClick={this.removeVideogame}>Delete</button>*/}
                    </div>         
            </div>  
        )
    }
}
export default GameList

  {/*removeVideoGame = (event) => { 
        this.setState({videogames:this.state.videogames.filter = () => {
            return videogames !== event.target.value
        }
        })
    
    }  */}  