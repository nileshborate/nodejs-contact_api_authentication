import express from 'express';
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from '../Controllers/contact.js';
import { isAuthenticated } from '../Middlewares/Auth.js';

const router = express.Router();

router.post('/new', isAuthenticated, newContact);
router.get('/', getAllContact);
router.put('/:id', isAuthenticated, updateContactById);
router.delete('/:id', isAuthenticated, deleteContactById);
router.get('/:id', getContactById);
router.get('/user/:id', getContactByUserId);

export default router;
