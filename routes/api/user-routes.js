const router = require("express").Router();
const { User } = require("../../models");

const { authMiddleware, signToken } = require('../../utils/auth');
//const signToken = require('../../utils/auth');

/*
//TODO - ROUTE THAT GETS ALL THE USERS, include friends?
router.get("/", async (req, res) => {
  try {
    let users = await User.find({});
    //.populate('comments')
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
*/

//SIGN UP WITH USERNAME AND PASSWORD
router.post("/signup", async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN USING USERNAME AND PASSWORD
router.post('/signin', async (req, res) => {
  try {    
    const userData = await User.findOne({  username: req.body.username, password: req.body.password  });    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    /*
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    */

    req.session.save(() => {
      req.session.user_id = userData._id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      let token = signToken({ email: userData.email, username: userData.username, _id: userData._id });
      res.json({ token: token, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/isloggedin", async (req, res) => {

    let validToken = await authMiddleware({ req: req });
    //console.log(validToken);
    if (validToken === true) {
      res.status(200).json({success:1}); 
    }
    else
    {
      res.status(200).json({login:false}); 
    }
});

//LOGOUT
router.post('/logout',async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(async () => {
      res.status(200).json({success:true}); 
      //res.redirect('/logout');
    });
  } else {
    res.status(404).end();
  }
});

/*
//TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
router.get("/:userId", async (req, res) => {
  try {
    // console.log(req)
    User.findById(req.params.userId, function (err, user) {
      if (!err) {
        console.log(user);
        res.status(200).json(user);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO - ROUTE THAT UPDATES A SINGLE USER
router.put("/:userId", async (req, res) => {
  try {
    const filter = { _id: req.params.userId };
    const update = req.body;
    let user = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
router.delete("/:userId", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId });
    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
*/
//TODO - ROUTE THAT ADDS A FRIEND TO A USER
// router.put("/:userId/friends/:friendId", async (req, res) => {
//   try {
//     console.log(req.body, req.params.userId);

//     let updatedUser = await User.findOneAndUpdate(
//       { _id: req.params.userId },
//       {
//         $push: { friends: req.params.friendId },
//       }
//     );
//     console.log(updatedUser);
//     res.status(200).json("yay");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// //TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
// router.delete("/:userId/friends/:friendId", async (req, res) => {
//   try {
//     console.log(req.body, req.params.userId);

//     let updatedUser = await User.findOneAndUpdate(
//       { _id: req.params.userId },
//       {
//         $pullAll: {
//           friends: [{ _id: req.params.friendId }],
//         },
//       }
//     );
//     console.log(updatedUser);
//     res.status(200).json("successful delete");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
