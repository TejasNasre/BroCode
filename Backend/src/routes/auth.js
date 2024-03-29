const router = require("express").Router();
const User = require("../model/user.model")
const bcrypt = require("bcryptjs");

//SignIn Router
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({ username, email, password: hashPassword });
    await user.save().then(() => res.status(200).json({ user: user }));
  } catch (error) {
    const err = res.status(400).json({ messgae: "User Already Exist !" });
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    if (!user) {
      res.status(400).json({ message: "Please Register First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid Password" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
});

module.exports = router;
