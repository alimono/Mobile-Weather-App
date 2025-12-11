/* THIS COMPONENT IS INCOMPLETE AND LACKS FUNCTIONALITY DUE TO SQLITE ISSUES, 
COMMENTED OUT FOR NOW TO PREVENT ERRORS */

const RecentSearch = () => {
    return (
        <div className="recent-searches">
        <h4>Recent Searches</h4>
        {/* RECENT SEARCHES LIST WILL GO HERE */}
        </div>
    );
}

export default RecentSearch;

// import { useState, useEffect } from 'react';
// import { getRecentSearches } from '../services/dbService.js';

// const RecentSearch = ({dataTrigger}) => {
//   const [recentSearches, setRecentSearches] = useState([]);

//     useEffect(() => {
//     //fetch recent searches from DB on component mount
//     const fetchRecent = async () => {
//       const results = await getRecentSearches();
//       setRecentSearches(results);
//     };
//     fetchRecent();
//   }, [dataTrigger]); //update recent searches after each search

//     return (
//         <div className="recent-searches">
//         <h4>Recent Searches</h4>
//         {recentSearches.length > 0 && (
//             <div>
//                 <ul>
//                     {recentSearches.map((item) => (
//                         <li key={item.id}>
//                             {item.query}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )}
//         </div>
//     );
// }

// export default RecentSearch;