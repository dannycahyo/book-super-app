// import clientPromise from "@lib/mongodb";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

const handler = async (req, res) => {
  if (req.method !== "GET")
    return res
      .status(404)
      .json({ message: "The api you requested not found !!" });
  const { id } = req.query;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB).collection("users");

  let data;
  try {
    data = await db.findOne({ _id: ObjectId("618b1cc1fc14fc1dd461aca5") });
  } catch (error) {
    return res.status(401).json({ message: "You are unauthorized !!" });
  }

  res.status(200).json(data);
};

export default handler;
