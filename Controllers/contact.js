import { Contact } from '../Models/Contact.js';

//create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user,
  });

  res.status(201).json({
    message: 'Contact Saved Successfully',
    saveContact,
    success: true,
  });
};

//update contact
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  res.json({
    message: 'Contact Updated Successfully',
    updatedContact,
    success: true,
  });
};

//delete contact
export const deleteContactById = async (req, res) => {
  const id = req.params.id;

  await Contact.findByIdAndDelete(id);

  res.json({
    message: 'Contact Deleted Successfully',
    success: true,
  });
};

//get all contact
export const getAllContact = async (req, res) => {
  const allContacts = await Contact.find();
  res.json({ message: 'All Contact Fetched', allContacts });
};

//get all contacts by userid
export const getContactByUserId = async (req, res) => {
  const id = req.params.id;

  const userContacts = await Contact.find({ user: id });
  res.json({ message: 'All User Contact Fetched', userContacts });
};

//get specific contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const contact = await Contact.findById(id);

  res.json({
    message: 'Contact Fetched',
    contact,
    success: true,
  });
};
