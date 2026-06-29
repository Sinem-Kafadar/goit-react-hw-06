import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Form, Field } from 'formik';
import css from './ContactsForm.module.css'; 

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: crypto.randomUUID(), 
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} required />
        </label>
        <label className={css.label}>
          Number
          <Field type="tel" name="number" className={css.input} required />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
