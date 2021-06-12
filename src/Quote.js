export default function Qoute ({CharacterName,qoute ,handleClick }){

        return (
            
            <div>
                <h1> The Office API</h1>
                <div className="Container">
                <h2>Character </h2>
                
                <h4>||</h4>
                <h3> {CharacterName}</h3>
                <h4>=</h4>
                <h2> Quote</h2>
                <h4>||</h4>
                <h3> {qoute}</h3>
                </div>
                <button className="Button" onClick={handleClick}> New Quote</button>
            </div>

        )

}
