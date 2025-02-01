//Poject1 - 
// import React, { useState } from 'react';

// const style = {
//   letterContainer: {
//     overflow: 'auto',
//     marginBottom: '10px',
//   },
//   letter: {
//     float: 'left',
//     padding: '10px 10px',
//     background: '#c9e4ed',
//     borderRadius: '5px',
//     marginRight: '5px',
//     cursor: 'pointer',
//   },
// };

// function Tile({ letter, onClick }) {
//   return (
//     <button style={style.letter} onClick={() => onClick(letter)}>
//       {letter}
//     </button>
//   );
// }

// function App() {
//   const [outp, setOutp] = useState('');

//   const handleClick = (letter) => {
//     const updatedOutp = outp + letter;
//     const varOn = updatedOutp.split('');
//     let finalOutp = '';

//     let consecutiveCount = 1;
//     for (let i = 1; i < varOn.length; i++) {
//       if (varOn[i] === varOn[i - 1]) {
//         consecutiveCount++;
//       } else {
//         consecutiveCount = 1;
//       }

//       if (consecutiveCount === 3) {
//         finalOutp = finalOutp.slice(0, finalOutp.length - 2) + '-';
//         consecutiveCount = 1;
//       } else {
//         finalOutp += varOn[i - 1];
//       }
//     }

//     if (consecutiveCount < 3) {
//       finalOutp += varOn[varOn.length - 1];
//     }

//     setOutp(finalOutp);
//   };

//   return (
//     <section>
//       <aside style={style.letterContainer}>
//         {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
//           <Tile key={letter} letter={letter} onClick={handleClick} />
//         ))}
//       </aside>
//       <div id="outputString">{outp}</div>
//     </section>
//   );
// }

// export default App;


// ===-------------------------------------========================================---------------------------====================
// project2 :- 
// import React, { useState } from 'react';

// function App() {
//   const mockWeatherData = {
//     'New York': { 
//       temperature: '22°C', 
//       humidity: '56%', 
//       windSpeed: '15 km/h'
//     },
//     'Los Angeles': {
//       temperature: '27°C',
//       humidity: '45%',
//       windSpeed: '10 km/h',
//     },
//     'London': { 
//       temperature: '15°C', 
//       humidity: '70%', 
//       windSpeed: '20 km/h' 
//     },
//   };

//   const [varW, setVarW] = useState('');
//   const [weatherData, setWeatherData] = useState({});
//   const [varFilterCities, setVarFilterCities] = useState([]);

//   const handleSearch = () => {
//     if (mockWeatherData[varW]) {
//       setWeatherData(mockWeatherData[varW]);
//       if (!varFilterCities.includes(varW)) {
//         setVarFilterCities([...varFilterCities, varW]);
//       }
//     } else {
//       setWeatherData({ error: 'City not found.' });
//     }
//   };

//   const handleCityClick = (city) => {
//     setVarW(city);
//     setWeatherData(mockWeatherData[city] || { error: 'City not found.' });
//   };

//   return (
//     <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
//       <input 
//         type="text" 
//         id="citySearch" 
//         placeholder="Search for a city..." 
//         value={varW} 
//         onChange={(e) => setVarW(e.target.value)} 
//         style={{ padding: '10px', fontSize: '16px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//       />
//       <button 
//         id="searchButton" 
//         onClick={handleSearch} 
//         style={{ padding: '10px 15px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
//         Search
//       </button>

//       <div id="weatherData" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '300px', margin: '20px auto', backgroundColor: '#f9f9f9' }}>
//         {weatherData.error ? (
//           <div style={{ color: 'red', fontWeight: 'bold' }}>{weatherData.error}</div>
//         ) : (
//           <>
//             <div><strong>Temperature:</strong> {weatherData.temperature}</div>
//             <div><strong>Humidity:</strong> {weatherData.humidity}</div>
//             <div><strong>Wind Speed:</strong> {weatherData.windSpeed}</div>
//           </>
//         )}
//       </div>

//       <div id="previousSearches" style={{ marginTop: '20px' }}>
//         {varFilterCities.map((city, index) => (
//           <button 
//             key={index} 
//             onClick={() => handleCityClick(city)} 
//             style={{ margin: '5px', padding: '8px 12px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }}>
//             {city}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

//--------------------------------------------------==================================--------------------

//Poject3 