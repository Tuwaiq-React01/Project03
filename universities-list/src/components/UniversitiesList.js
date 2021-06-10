import React from 'react';
import University from './University';

const UniversitiesList = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col s12">
                    <br></br>
                    {
                        
                        props.universities.map((uni, i) => {
                            
                            return (
                                <University key={i}  uni={uni} />

                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default UniversitiesList;
