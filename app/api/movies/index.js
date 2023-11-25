// posts.js

import getMovies from "../../../lib/mongodb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { movies, error } = await getMovies();
      if (error) this.emit(error);

      return res.status(200).json({ movies });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not supported`);
};

export default handler;
