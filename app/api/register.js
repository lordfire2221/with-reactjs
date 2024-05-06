import db from './config/db'
import users_models from './models/users_models'
import bcrypt from 'bcryptjs';

export default async function register(req, res) {
    await db();
    if (req.method === 'POST') {
      const data = req.body;
      try {
       bcrypt.hash(data.password,10).then(
        hash =>{
         const users = new users_models({
            email: data.email,
            password:hash,
            permission: data.permission
         })
         users.save().then(
            res.send({status:201,msg:'utilisateurs créer',uid_users:users._id})
         ).catch(
            (error)=>{
             res.send({status:400,err:error})
            }
         )
        }
       ).catch(
            (error)=>{
                res.send({status:400,err:error})
               }
       )
      } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  }