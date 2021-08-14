require("./db");
const Users = require("./models/user_schema");

/*Register*/
app.post("/register", async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      await create(req.body);
      req.json({ result: "success" })  
    } catch (err) {
      res.json({ result: "error", message: err.errmsg });
    }
  });
  
/*Login*/
  app.post("/login", async (req, res) => {
    let doc = await findOne({ email: req.body.email });
    if (doc) {
      if (bcrypt.compareSync(req.body.password, doc.password)) {
          const payload = {
            id: doc._id,
            email: doc.email
          };
          let token = sign(payload);
          console.log(token);
          res.json({ result: "success", token, message: "Login successfully" });
      } else {
        // Invalid password
        res.json({ result: "error", message: "Invalid email" });
      }
    } else {
      // Invalid username
      res.json({ result: "error", message: "Invalid password" });
    }
  });
