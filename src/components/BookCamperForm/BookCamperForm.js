import {Form, Field, ErrorMessage, Formik} from "formik"
import * as Yup from 'yup';
// import { useDispatch } from "react-redux"

const bookCamperSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email')
    .required('Email is required'),
    date: Yup.string()
    .required('Booking date is required'),
    comment: Yup.string()
    .required('Comment is required'),
})

export const BookCamperForm = () => {
    // const dispatch = useDispatch();

    return(
        <Formik initialValues={{
            name: '',
            email: '',
            date: '',
            comment: '',
        }}
        validationSchema={bookCamperSchema}
        onSubmit={(values, actions) => {}}>
            <Form noValidate>
                <div>
                    <Field type="text" name="name" placeholder="Name" required />
                    <ErrorMessage name="name" component="div"/>
                </div>
                <div>
                    <Field type="email" name="email" placeholder="Email" required />
                    <ErrorMessage name="email" component="div"/>
                </div>
                <div>
                    {/* !!!!!!!!!!!!!!!!!!!! */}
                    <Field type="text" name="date" placeholder="Booking date" required />
                    <ErrorMessage name="date" component="div"/>
                </div>
                <div>
                    <Field type="text" name="comment" placeholder="Comment" required />
                    <ErrorMessage name="comment" component="div"/>
                </div>

                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}