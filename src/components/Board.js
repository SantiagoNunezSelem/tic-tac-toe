import "../stylesheets/Board.css";
import Square from "./Square.js";
import {useState,useEffect} from "react";

function Board(){
    
    const [boardState, setBoardState] = useState([[]]);
    
    function initializeBoard(){
        let newBoardState = [
            [{},{},{}],
            [{},{},{}],
            [{},{},{}]
        ];

        for(let row=0;row<3;row++){
            for(let i=0;i<3;i++){
                newBoardState[row][i]={state:"",id:`prueba${row}-${i}`}
            }
        }
        setBoardState(newBoardState);
    }
    
    useEffect(() => {
        initializeBoard();
    },[])

    return(

        <div className="board-container">
            <table>
                
                <tr className="row3">
                    {
                        boardState[0].map((square) => (
                            <td>
                                <Square state={square.state}/>
                            </td>
                        ))
                    }
                </tr>
                
                <tr className="row2">
                    {
                        boardState[1].map((square) => (
                            <td>
                                <Square state={square.state}/>
                            </td>
                        ))
                    }                  
                </tr>

                <tr className="row1">
                    {
                        boardState[2].map((square) => (
                            <td>
                                <Square state={square.state}/>
                            </td>
                        ))
                    }                
                </tr>
 
            </table>
        </div>
    );
}

export default Board;