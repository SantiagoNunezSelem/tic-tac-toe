import "../stylesheets/Square.css";

function Square( {state} ){
    return(
        <div className="square-container">
            {state}
        </div>
    );
}

export default Square;