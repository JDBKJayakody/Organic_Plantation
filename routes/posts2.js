const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Posts2 = require('../models/posts2');
const { create } = require('../models/posts2');
const { json } = require('body-parser');

const router2 = express.Router();



    router2.post('/posts2/save', async (req, res) => {
        const { fname, lname, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
      
        
        try {

          const oldUser = await Posts2.findOne({ email });
      
          if (oldUser) {
            return res.json({ error: "User Exists" });
          }
          await Posts2.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
            isAdmin: true
          });
          res.send({ status: "ok" });
        } catch (error) {
          res.send({ status: "error" });
        }
      });

      
    
    //get a specific post
    
   

    router2.post('/login-user', async (req, res) => {
      const { email, password } = req.body;
     
      const user = await Posts2.findOne({ email });
      if (!user) {
        return res.json({ error: "User Not found" });
      }
      
      console.log(password,user.password)
      const compare= await bcrypt.compare(password, user.password);
      
     
      if (compare) {
        
        const token = jwt.sign({ email: user.email}, "JWT_SECRET");
   
        if (res.status(201) ) {
          return res.json({ status: "ok", data: token, isAdmin: user.isAdmin  });
          
         
        } else {
          return res.json({ error: "error" });
        }
      }
      res.json({ status: "error", error: "InvAlid Password" });
    });
/////////////////////////////////////////////////////////
    // router2.delete('/:id', async (req, res) => {
    //   const { id } = req.params;
    //   const user = await Posts2.findByIdAndRemove(id)
    //   res.status(200).json(user);
    // })

    // router2.get('/log', async (req, res) => {
      
    //   const user = await Posts2.find()
    //   res.status(200).json(user);
    // })
/////////////////////////////////////////////////////////
    

    // router2.post('/login-admin', async (req, res) => {
    //   const { email, password } = req.body;
    
    //   const user = await Posts2.findOne({ email });
    //   if (!user) {
    //     return res.json({ error: "User Not found" });
    //   }
    //   console.log(password,user.password)
    //   const compare= await bcrypt.compare(password, user.password);
    //   //console.log(compare);
    //   if (compare) {
        
    //     const token = jwt.sign({ email: user.email }, "JWT_SECRET");
   
    //     if (res.status(201)) {
    //       return res.json({ status: "ok", data: token });
    //     } else {
    //       return res.json({ error: "error" });
    //     }
    //   }
    //   res.json({ status: "error", error: "InvAlid Password" });
    // });

    // router2.post('/login-superadmin', async (req, res) => {
    //   const { email, password } = req.body;
    
    //   const user = await Posts2.findOne({ email });
    //   if (!user) {
    //     return res.json({ error: "User Not found" });
    //   }
    //   console.log(password,user.password)
    //   const compare= await bcrypt.compare(password, user.password);
    //   //console.log(compare);
    //   if (compare) {
        
    //     const token = jwt.sign({ email: user.email }, "JWT_SECRET");
   
    //     if (res.status(201)) {
    //       return res.json({ status: "ok", data: token });
    //     } else {
    //       return res.json({ error: "error" });
    //     }
    //   }
    //   res.json({ status: "error", error: "InvAlid Password" });
    // });
    
    

module.exports = router2;







