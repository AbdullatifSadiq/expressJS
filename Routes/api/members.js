const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../Members')


// Basic REST API that saves JSON through Postman // Get all members
router.get('/',(req,res)=>{
    res.json(members)
}) 

// Get Single member using ID
router.get('/:id',(req,res) =>{
    const foundId = members.some(member => member.id === parseInt(req.params.id))

    if(foundId){
        res.json(members.filter (member => 
            member.id === parseInt(req.params.id)  ))
    }else{
        res.status(400).json({ msg : `No member with the id of ${req.params.id}`})
    }
})
    
// Create Member
router.post('/',(req,res)=>{
    // res.send(req.body)
    const newNumber = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status :'active'
    }

    if(!newNumber.name || !newNumber.email){
      return  res.status(400).json({ msg:'Please include a name and email'})
    }

    members.push(newNumber)
    res.json(members)
})


// Updating a user
router.put('/:id',(req,res)=>{
    const foundId = members.some(member => member.id === parseInt(req.params.id))

    if(foundId){
       const updateMember = req.body
       members.forEach(member => {
           if(member.id === parseInt(req.params.id)){
              member.name = updateMember.name ? updateMember.name : member.name
              member.email = updateMember.email ? updateMember.email : member.email
              res.json({ msg:"Member was updated", member })
           }
       })

    }else{
        res.status(400).json({ msg : `No member with the id of ${req.params.id}`})
    }
     
})

module.exports = router