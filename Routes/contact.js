import express from 'express';
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from '../Controllers/contact.js';

const router = express.Router();

router.post('/new', newContact);
router.get('/', getAllContact);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);
router.get('/:id', getContactById);
router.get('/user/:id', getContactByUserId);

export default router;
