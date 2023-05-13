import "./UpdateContact.css";

// validation
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";

const UpdateContact = () => {
  let savedData = localStorage.getItem("itstep_react_contacts_list");
  if (savedData === null) {
    savedData = {};
  } else {
    savedData = JSON.parse(savedData);
  }

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const uniqueId = searchParams.get("id");
  if (
    uniqueId === undefined ||
    uniqueId === null ||
    !savedData.hasOwnProperty(uniqueId)
  ) {
    window.location.href = "/not-found";
  }

  const initiaValues = {
    id: uniqueId,
    name: savedData[uniqueId].name,
    phone: savedData[uniqueId].phone,
    email: savedData[uniqueId].email,
    avatar: savedData[uniqueId].avatar,
    gender: savedData[uniqueId].gender,
    status: savedData[uniqueId].status,
    favorite: savedData[uniqueId].favorite,
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

  const handleSubmit = (values) => {
    let data = localStorage.getItem("itstep_react_contacts_list");
    if (data === null) {
      data = {};
    } else {
      data = JSON.parse(data);
    }
    data[values.id] = values;
    localStorage.setItem("itstep_react_contacts_list", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card update-contact-card">
        <div className="card-body">
          <h5 className="card-title">Edit {initiaValues.name}</h5>
          <div className="card-text">
            <Formik
              initialValues={initiaValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
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
                    Save contact
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

export default UpdateContact;
