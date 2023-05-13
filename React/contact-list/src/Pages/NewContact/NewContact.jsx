// sytyles
import "./NewContact.css";

// validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
// uuid
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const NewContact = () => {
  const initiaValues = {
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    avatar: "",
    gender: "",
    status: "",
    favorite: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!!!"),
    phone: Yup.string().required("Phone is required!!!"),
    email: Yup.string()
      .email("Invalid E-mail!!!")
      .required("E-mail is required!!!"),
    avatar: Yup.string()
      .url("Invalid URL!!!")
      .matches(
        /^(.)*.(png|jpe?g|gif)$/i,
        "Invalid file extension! (Only png, jpeg or gif is allowed)"
      )
      .required("Avatar is required!!!"),
    gender: Yup.string()
      .oneOf(["man", "woman"], "Invalid gender!")
      .required("Gender is required!!!"),
    status: Yup.string().oneOf(
      ["work", "family", "private", "friends"],
      "Invalid status!"
    ),
    favorite: Yup.boolean(),
  });

  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card add-contact-card">
        <div className="card-body">
          <h5 className="card-title">Add new contact</h5>
          <div className="card-text">
            <Formik
              initialValues={initiaValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form action="/new-contact">
                  <div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="name"
                      >
                        Full name
                      </label>
                      <Field
                        className="form-elements form-control"
                        type="text"
                        name="name"
                      />
                      <span className="input-error-message">
                        <ErrorMessage name="name" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <Field
                        className="form-elements form-control"
                        type="text"
                        name="phone"
                      />
                      <span className="input-error-message">
                        <ErrorMessage name="phone" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="email"
                      >
                        E-Mail
                      </label>
                      <Field
                        className="form-elements form-control"
                        type="text"
                        name="email"
                      />
                      <span className="input-error-message">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="email"
                      >
                        Avatar
                      </label>
                      <Field
                        className="form-elements form-control"
                        type="text"
                        name="avatar"
                      />
                      <span className="input-error-message">
                        <ErrorMessage name="avatar" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <Field
                        className="form-elements form-control"
                        as="select"
                        name="gender"
                      >
                        <option value="">Choose gender ...</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                      </Field>
                      <span className="input-error-message">
                        <ErrorMessage name="gender" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="status"
                      >
                        Status
                      </label>
                      <Field
                        className="form-elements form-control"
                        as="select"
                        name="status"
                      >
                        <option value="">Choose status ...</option>
                        <option value="family">Family</option>
                        <option value="work">Work</option>
                        <option value="private">Private</option>
                        <option value="friends">Friends</option>
                      </Field>
                      <span className="input-error-message">
                        <ErrorMessage name="status" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-elements form-label"
                        htmlFor="favorite"
                      >
                        Favorite
                      </label>
                      <Field
                        className="form-elements"
                        type="checkbox"
                        name="favorite"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    Add contact
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
