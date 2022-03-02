// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cats } from "../../../data";

export default function handler(req, res) {
  res.status(200).json(cats);
}

//main
//localhost:3000/api/hello
//http://localhost:3000/api/cats/4
