import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { _id, email, password, confirmpassword } = JSON.parse(req.body);

  const {
    ops: [registerData]
  } = await req.db.collection("users").insertOne({
    _id,
    email,
    password,
    confirmpassword,
  });

  res.json(registerData);
});

export default handler;