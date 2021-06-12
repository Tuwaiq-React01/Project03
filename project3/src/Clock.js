import { useState, useEffect } from 'react';

// Make the class as function 
export default function Clock(props) {
  const [date, setDate] = useState(new Date());

 //Change componentDidMount and componentWillUnmount to useEffect
 useEffect(() => {
  var timer = setInterval( () => setDate(new Date()), 1000 );

  return function cleanup() {
      clearInterval(timer);
    };
 });

   return (
      <div>
        

        <h2>   <img className="Clock" src="https://img.icons8.com/android/24/000000/clock.png"/>Time: {date.toLocaleTimeString()}.</h2>
      </div>
    );
}
