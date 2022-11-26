const db = require('../db')


class UserController{
    async createUser(req, res){
        const {name, surname} = req.body
        console.log(name, surname)
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson)

    }

    async getUser(req, res){

    }

    async getOneUser(req, res){

    }

    async updateUser(req, res){

    }


    async deleteUser(req, res){

    }
}


module.exports = new UserController()