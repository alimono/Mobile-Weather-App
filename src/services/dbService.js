/*
BEGAN TRYING TO IMPLEMENT SQLITE PLUGIN BUT IT IS NATIVE, TRIED TO ADAPT CODE TO USE JEEP-SQLITE FOR WEB,
KEPT GETTING ERRORS IN DEV TOOLS ABOUT JEEP-SQLLITE NOT BEING IN THE DOM, TRIED TO RESOLVE IN APP.JSX 
DIDN'T WORK, SO COMMENTED OUT THE WHOLE FILE FOR NOW TO PREVENT ERRORS.
*/

// import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

// const sqlite = new SQLiteConnection(CapacitorSQLite);

// // Initialize Jeep-SQLite Web Store (for web platform)
// export const initSQLiteWeb = async () => {
//     if (!CapacitorSQLite.isAvailable()) return;
//     try {
//         await sqlite.initWebStore();
//         console.log("Jeep-SQLite Web Store initialized");
//     } catch (error) {
//         console.error("Error initializing Jeep-SQLite Web Store:", error);
//     }
// };

// // Initialize the database and create tables if they don't exist
// export const initDB = async () => {
//   try {
//     const db = await sqlite.createConnection("weatherAppDB", false, "no-encryption", 1); //name, encrypted, mode, version

//     await db.open();

//     // Create tables if they don't exist
//     const createTableRecentSearchesQuery = `
//       CREATE TABLE IF NOT EXISTS recent_searches (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         query TEXT NOT NULL,
//         created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//       );`;

//       const createTableFavouritesQuery = `
      
//       CREATE TABLE IF NOT EXISTS favourites (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         query TEXT NOT NULL
//       );
//     `;

//     await db.execute(createTableRecentSearchesQuery);
//     await db.execute(createTableFavouritesQuery);

//     return db;

//   } catch (error) {
//     console.error("Error initializing database:", error);
//     throw error;
//   }
// };

// // Save a recent search to the database
// export const addRecentSearch = async (query) => {
//     try {   
//         const db = await sqlite.createConnection("weatherAppDB");
//         await db.open();
//         await db.run(`INSERT INTO recent_searches (query) VALUES (?);`, [query]);
//         await db.close();
//     } catch (error) {
//     console.error("Error adding recent search:", error);
//     }
// }

// // Get top 5 recent searches from the database
// export const getRecentSearches = async () => {
//     try {
//         const db = await sqlite.createConnection("weatherAppDB");
//         await db.open();
//         const res = await db.query(`SELECT query FROM recent_searches ORDER BY created_at DESC LIMIT 5;`);
//         await db.close();
//         return (res && res.values) ? res.values : [];
//     } catch (error) {
//         console.error("Error getting recent searches:", error);
//         return [];
//     }
// }

// // Add a favourite location to the database
// export const addFavourite = async (query) => {
//     try { 
//         const db = await sqlite.createConnection("weatherAppDB");
//         await db.open();
//         await db.run(`INSERT INTO favourites (query) VALUES (?);`, [query]);
//         await db.close();
//     } catch (error) {
//         console.error("Error adding favourite:", error);
//     }
// }

// // Get favourite locations from the database
// export const getFavourites = async () => {
//     try {
//         const db = await sqlite.createConnection("weatherAppDB");
//         await db.open();
//         const res = await db.query(`SELECT id, query FROM favourites ORDER BY id DESC;`);
//         await db.close();
//         return (res && res.values) ? res.values : [];
//     } catch (error) {
//         console.error("Error getting favourites:", error);
//         return [];
//     }
// }       


// // Delete a favourite location from the database
// export const deleteFavourite = async (query) => {
//     const db = await sqlite.createConnection("weatherAppDB");
//     await db.open();
//     await db.run(`DELETE FROM favourites WHERE query = ?;`, [query]);
//     await db.close();
// }

// // Function to close the database connection
// export const closeDB = async () => {
//   try {
//     await sqlite.closeConnection("weatherAppDB");
//   } catch (error) {
//     console.error("Error closing database:", error);
//   }
// }