import { error } from 'console';
import db from './config/db'
import users_models from './models/users_models'
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
    await db();
  
    if (req.method === 'POST') {
      const { email, password } = req.body;
      try {
        const user = await users_models.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
          // Générez le token JWT
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
          res.send({status:200,usersId:user._id,auth_token:token});
        } else {
          res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  }