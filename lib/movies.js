import clientPromise from "./mongodb";

let client;
let db;
let movies;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db;
    movies = await db.collection("movies");
  } catch (error) {
    throw new Error("Couldn't connect to Mongo");
  }
}

(async () => {
  await init();
})();

//////////////////////

export async function getMovies() {
  try {
    if (!movies) await init();
    const result = await movies
      .find({})
      .limit(20)
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (error) {
    throw new Error(error, "Couldn't get movies");
  }
}
