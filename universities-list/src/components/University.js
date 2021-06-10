
export default function University(props) {
    return (
        <div>
             <div class="col s12 m6 13">
             <div class="card">
             <div class="card-content">   
                <div><strong>University name: </strong>{props.uni.name}</div>
                <div><strong>Country: </strong>{props.uni.country}</div>
            </div>
                <center><a href={`${props.uni.web_pages[0]}`} class="waves-effect waves-light btn" style={{marginBottom: "33px"}}>Visit</a></center>
            </div>
            </div>
        </div>
       
    )
}
