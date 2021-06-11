import React from 'react'

export default function Article(props) {
    let date = new Date(props.date)

    return (
        <div dir='ltr' class="card bg-light mb-3" >
            <div class="row">
                <div class="card-body col-sm-8">
                    <h4 class="px-2 card-header card-title">{props.title}</h4>
                    <h6 class="m-2 card-subtitle mb-2 text-muted">{date.toUTCString("yyyy-MM-dd")}</h6>
                    <h6 class="m-2 card-subtitle mb-2 text-muted">Source: {props.source}</h6>
                    <p class="card-text">{props.content}</p>
                    <a href={props.url} class="btn btn-secondary card-link">Link</a>
                </div>
                <div class="m-1 col-sm-3">
                    <img class="card-img-top" src={props.img} width='200px' height='200px' alt='thumbnail'></img>
                </div>

            </div>
        </div>
    )
}
