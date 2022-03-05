const User = require('../models').user;
const express = require("express");


module.exports={
    all(req,res){
        return User.findAll()
            .then(data => {
                res.status(200).json({
                    status:'success',
                    data:{
                        users: data
                    }
                })
            })
            .catch(err => {
                res.status(400).json({
                    status:'fail!',
                    error: [err.message]
                })
            })
    }
}

