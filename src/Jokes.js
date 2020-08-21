import React, { useState } from 'react'
import CatJokeBoard  from './CatJokeBoard'

const Jokes = () => {
    const data = [
        {   id: 1,
            url: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            jokes: ['the chicken crossed the road', 'radio', 'a cat walks into a bar'],
            score: 0,
            name: "King Henry",
            rated: false
        },
       {    id: 2,
            url: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            jokes: ['the dogs crossed the road', 'penguins', 'a duck walks into a bar'],
            score: 0,
            name: "King Tut",
            rated: false
        },
        {   id: 3,
            url: "https://images.pexels.com/photos/954720/pexels-photo-954720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            jokes: ['the buffalo crossed the road', 'cats', 'a bird walks into a bar'],
            score: 0,
            name: "Dumbledore",
            rated: false
        },
    ]

    const isClicked = {
        clicked: false,
        selectedCatObj: {} 
    }
       
    const [catData, setCatData] = useState(data) 
    const [selected, setSelected] = useState(isClicked)
    const [winner, setWinner] = useState({})

    const addSelectedInfo = (catObj) => {
        setSelected({
            clicked: true,
            selectedCatObj: catObj //data
        })
    }

    const getNextCat = (id) => {
     if (id === catData.length) {
         setSelected({
             clicked: true,
             selectedCatObj: catData[0]
         })
     } else {
         setSelected({
             clicked: true,
             selectedCatObj: catData[id]
         })
     }
    }

    const updateScore = (direction, catObj) => {

        let dataClone = [...catData]
        let updatedClone = dataClone.map((obj) => {
            if (obj.id === catObj.id) {
                let currScore = catObj.score + direction
                obj.score = currScore
            }
            return obj
        })
        setCatData(updatedClone)
      }
    
      const catHasBeenRated = (id) => {     
        let dataClone = [...catData]
        let updatedClone = dataClone.map((obj) => {
            if (obj.id === id) {
                obj.rated = true
            }
            return obj
          })
          setCatData(updatedClone)
          console.log(catData, '>>??')
      }

      const checkForWinner = () => { //check each catObj's rating - if any are false, not all have been visited, keep going.
      //if all are true, show winning cat with final score
          let winning = catData.filter((obj) => {
              if (obj.rated) { 
                  return false
              } else {
                  return true
              }
          })
          if (winning.length === 0) {
            calculateWinner()
          }
      }

      const calculateWinner = () => {
        let currentHighest = -Infinity
        let id = 0

        for (let i = 0; i < catData.length; i++) {
            let obj = catData[i]
            if (obj.score > currentHighest) {
                currentHighest = obj.score
                id = obj.id
            }
        }

        let idx = id - 1
        setWinner(catData[idx])
      }

    return (
        <div className="contentPos">
            <div className="pageHeader">
                Cats Telling Jokes
            </div>


        
          {
              selected.clicked? 
              <CatJokeBoard data={selected.selectedCatObj} getNextCat={getNextCat} updateScore={updateScore} catHasBeenRated={catHasBeenRated} checkForWinner={checkForWinner} winner={winner}/> :
              <div className="catGalleryContainer">
                <div className="pageSubHeader">
                    Select Cat. Read and Rate Their Jokes. Cat With Most Points Gets a Prize.
                </div>
                <div className="catGalleryContainer">
                {
                catData.map((catObj) => {
                    return(
                        <div key={catObj.id}>
                            <img className="catPic" src={`${catObj.url}`} alt="cat-comedian-pic" onClick={() => {addSelectedInfo(catObj)}} />
                        </div>
                    )
                })
                }
                </div>
                </div>
          }
         



        </div>
        
    )
}

export default Jokes;