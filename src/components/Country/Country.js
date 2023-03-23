import React from 'react';
import './Country.css'

const Country = (props) => {
    // const {area, population,name} = props.country
    const {area, region, name, flags} = props.country;
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.name}</h2>
            <h5>Population: {props.population}</h5>
            <p>Area: {props.area}</p> */}


            {/* <h2>Country Name: {props.country.name.common}</h2>
            <h5>Population: {props.country.population}</h5>
            <p>Area: {props.country.area}</p> */}


            {/* <h2>Country Name: {name.common}</h2>
            <h5>Population: {population}</h5>
            <p>Area: {area}</p> */}


            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;