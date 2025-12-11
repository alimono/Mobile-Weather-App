/* THIS COMPONENT IS INCOMPLETE AND LACKS FUNCTIONALITY DUE TO SQLITE ISSUES, 
COMMENTED OUT FOR NOW TO PREVENT ERRORS */

const Favourites = () => {
    return (
        <div className="favourites-list">
        <h4>Favourites ⭐️</h4>
        {/* FAVOURITES LIST WILL GO HERE */}
        </div>
    );
}

export default Favourites;

// import { useState, useEffect } from 'react';
// import { getFavourites, deleteFavourite } from '../services/dbService';

// const Favourites = () => {
//     const [favourites, setFavourites] = useState([]);

// useEffect(() => {
//   // Fetch favourites from the database on component mount
//   const fetchFaves = async () => {
//     const favs = await getFavourites();
//     setFavourites(favs);
//   };   
//   fetchFaves();
// }, []);

// return (
//     <div className="favourites-list">
//       <h4>Favourites ⭐️</h4>
//       <ul>
//         {favourites.map((item) => (
//           <li key={item.id}>
//             {item.query}
//             <button className="delete-fave-button" 
//             onClick={() => {deleteFavourite(item.query)}}>
//             Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
// )
// };

// export default Favourites;