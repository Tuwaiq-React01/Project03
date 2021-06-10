import React from 'react';
import University from './University';

const UniversitiesList = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.universities.map((uni, i) => {
                            console.log(uni);
                            return (
                                <University key={i}  uniName={uni.uniName} uniCountry={uni.uniCountry} uniPage={uni.uniPage} />

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
