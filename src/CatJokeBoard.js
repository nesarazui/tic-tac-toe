import React, {useState} from 'react'


const CatJokeBoard = (props) => {
    const data = props.data
    const getNextCat = props.getNextCat
    const updateScore = props.updateScore
    const catHasBeenRated = props.catHasBeenRated
    const checkForWinner = props.checkForWinner
    const winner = props.winner

    const [isClicked, setIsClicked] = useState(false)

    const [counter, setCounter] = useState(0)

    const updateCounter = () => {
        setCounter(counter + 1)
        toggle()
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const toggle = () => {
        setIsClicked(!isClicked)
    }


    return (
        <div className="contentPos">

        {
            winner.id?
        <div> 
        <div className="pageSubHeader">
            We Have A Winner!
        </div>
        <div className="featuredCatContainer">
            <img className="catPic" src={`${winner.url}`} alt="winning cat" />
        </div>
        <div className="pageSubHeader"> {winner.name} </div> 
        </div>       
        :    
        <div>
        <div className="pageSubHeader">
                    {`${data.name}'s Jokes`}
        </div>



        <div className="featuredCatContainer">
            <img className="catPic" src={`${data.url}`} alt="selected cat" />
        </div>

        <div className="pageSubHeader">{`${data.name}'s Total Rating: ${data.score}`}</div>  


        <div className="jokeContainer">
            <div className="joke">
                        {data.jokes[counter]}
            </div>

      
            {            
            !isClicked?

            <div className="ratingsContainer">
                <button type="button" className="btn btn-info customButtons ratingButtons" onClick={() => {updateScore(1, data); toggle();}}>Loved It</button>
                <button type="button" className="btn btn-info customButtons ratingButtons" onClick={() => {updateScore(-1, data); toggle() }}>Hated It</button>
                
            </div>
            : 
            counter === data.jokes.length - 1? 
            <div>
            <button type="button" className="btn btn-info" onClick={() => {getNextCat(data.id); resetCounter(); catHasBeenRated(data.id); checkForWinner(); toggle()} }>Next Cat!</button>
            </div>
            : 
            <div>
            <button type="button" className="btn btn-light" 
            onClick={() => {
                updateCounter();
                }}
                > Next Joke</button>
            </div>  
            }
            

       
        </div>

        

        </div>
        }   




        </div>
     )
}    

export default CatJokeBoard;


