import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import styles from './ContactForm.module.css';
import { addContact } from '/src/redux/contactsSlice.js';
import {useDispatch} from "react-redux";
import {setNameFilter} from "/src/redux/filtersSlice.js";


const initialValues = {
    username: "",
    phone: ""
};

const ContactForm = () => {
    const nameFieldId = nanoid();
    const phoneFieldId = nanoid();
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Required")
            .max(50, "Required")
            .required("Required"),
        phone: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Required") // Перевірка формату номера телефону
    });

    const handleSubmit = (values, actions) => {
        const { username, phone } = values;
        dispatch(addContact({ name: username, number: phone }));
        actions.resetForm();
    };
    const handleNameChange = (event) => {
        dispatch(setNameFilter(event.target.value));
    };


    return (
        <div className={styles["form-container"]}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className={styles["form-group"]}>
                        <label htmlFor={nameFieldId} className={styles["label"]}>Name</label>
                        <Field type="text" name="username" id={nameFieldId} className={styles["input"]} />
                    </div>
                    <span className={styles["errorMessage"]}>
                        <ErrorMessage name="username" as="span" className={styles["errorMessage"]} />
                    </span>
                    <div className={styles["form-group"]}>
                        <label htmlFor={phoneFieldId} className={styles["label"]}>Number</label>
                        <Field type="phone" name="phone" id={phoneFieldId} className={styles["input"]} />
                    </div>
                    <span className={styles["errorMessage"]}>
                         <ErrorMessage name="phone" as="span" />
                    </span>
                    <button type="submit" className={styles["button"]}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;