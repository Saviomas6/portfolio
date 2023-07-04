import { useState } from "react";
import {
  Button,
  Container,
  Heading,
  HeadingWrapper,
  SpinnerWrapper,
} from "../../styles/globalStyles";
import {
  ContactContainerHeading,
  ContactDetailContent,
  ContactDetailHeading,
  ContactDetailIcon,
  ContactDetailWrapper,
  ContactFormButtonWrapper,
  ContactInputField,
  ContactInputLabel,
  ContactInputTextArea,
  ContactInputWrapper,
  ContactLeftContainer,
  ContactMainContainer,
  ContactMainLayout,
  ContactRightContainer,
  ErrorMessageField,
  SocialIcon,
  SocialIconWrapper,
} from "./Contact.style";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodeSandboxCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FcHome, FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";
import SuccessModal from "../../components/modal/SuccessModal";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import axios from "axios";

interface I_Contact {
  height: string;
}

interface I_FormValue {
  name: string;
  email: string;
  phoneNo: string;
  message: string;
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationScheme = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().required("Email is a required field").email(),
  phoneNo: yup
    .string()
    .required("Phone number is a required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Invalid mobile no")
    .max(10, "Invalid mobile no"),
  message: yup
    .string()
    .required("Description is a required field")
    .min(10, "To short")
    .max(50, "Too long"),
});

const Contact = ({ height }: I_Contact) => {
  const [isSuccessOpen, setSuccessModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const initialValues: I_FormValue = {
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  };

  const handleSubmitForm = async (
    values: I_FormValue,
    { resetForm, setSubmitting }: FormikHelpers<I_FormValue>
  ) => {
    setLoading(true);
    const result = await axios.post("https://formspree.io/f/xbjejyad", values);
    if (result?.status === 200) {
      setSuccessModalOpen(true);
      setLoading(false);
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <ContactMainLayout height={height}>
      <Container width="90%">
        <HeadingWrapper>
          <Heading>CONTACT</Heading>
        </HeadingWrapper>
        <ContactMainContainer>
          <ContactLeftContainer>
            <ContactContainerHeading>
              I'M ALSO ON SOCIAL NETWORKS
            </ContactContainerHeading>
            <SocialIconWrapper>
              <SocialIcon>
                <AiFillTwitterCircle size={20} />
              </SocialIcon>
              <SocialIcon>
                <AiFillLinkedin size={20} />
              </SocialIcon>
              <SocialIcon>
                <AiFillGithub size={20} />
              </SocialIcon>
              <SocialIcon>
                <AiFillCodeSandboxCircle size={20} />
              </SocialIcon>
              <SocialIcon>
                <AiFillFacebook size={20} />
              </SocialIcon>
              <SocialIcon>
                <AiFillInstagram size={20} />
              </SocialIcon>
            </SocialIconWrapper>
            <ContactDetailWrapper>
              <ContactDetailIcon>
                <FcHome size={30} />
              </ContactDetailIcon>
              <div>
                <ContactDetailHeading>Address</ContactDetailHeading>
                <ContactDetailContent>
                  Mumbai,Maharashtra,India
                </ContactDetailContent>
              </div>
            </ContactDetailWrapper>
            <ContactDetailWrapper>
              <ContactDetailIcon>
                <FcCellPhone size={30} />
              </ContactDetailIcon>
              <div>
                <ContactDetailHeading>Let's Talk</ContactDetailHeading>
                <ContactDetailContent>+918879218142</ContactDetailContent>
              </div>
            </ContactDetailWrapper>{" "}
            <ContactDetailWrapper>
              <ContactDetailIcon>
                <MdEmail size={30} color={"red"} />
              </ContactDetailIcon>
              <div>
                <ContactDetailHeading>Email</ContactDetailHeading>
                <ContactDetailContent>
                  savio.mascarenhas6@gmail.com
                </ContactDetailContent>
              </div>
            </ContactDetailWrapper>
          </ContactLeftContainer>
          <ContactRightContainer>
            <ContactContainerHeading>GET IN TOUCH</ContactContainerHeading>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmitForm}
              validationSchema={validationScheme}
            >
              {({ isValid, dirty, isSubmitting }) => (
                <Form>
                  <ContactInputWrapper>
                    <ContactInputLabel>
                      Name<span>*</span>
                    </ContactInputLabel>
                    <ContactInputField
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                    />
                    <ErrorMessageField>
                      <ErrorMessage component="div" name="name" />
                    </ErrorMessageField>
                  </ContactInputWrapper>
                  <ContactInputWrapper>
                    <ContactInputLabel>
                      Email<span>*</span>
                    </ContactInputLabel>
                    <ContactInputField
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <ErrorMessageField>
                      <ErrorMessage component="div" name="email" />
                    </ErrorMessageField>
                  </ContactInputWrapper>
                  <ContactInputWrapper>
                    <ContactInputLabel>
                      Phone No<span>*</span>
                    </ContactInputLabel>
                    <ContactInputField
                      type="text"
                      placeholder="Enter your phone no"
                      name="phoneNo"
                    />
                    <ErrorMessageField>
                      <ErrorMessage component="div" name="phoneNo" />
                    </ErrorMessageField>
                  </ContactInputWrapper>
                  <ContactInputWrapper>
                    <ContactInputLabel>
                      Message<span>*</span>
                    </ContactInputLabel>
                    <ContactInputTextArea
                      type="text"
                      component="textarea"
                      placeholder="Enter your message"
                      name="message"
                    />
                    <ErrorMessageField>
                      <ErrorMessage component="div" name="message" />
                    </ErrorMessageField>
                  </ContactInputWrapper>
                  <ContactFormButtonWrapper>
                    <Button
                      type="submit"
                      disabled={!(isValid && dirty) || isSubmitting}
                    >
                      {isLoading ? (
                        <SpinnerWrapper>
                          <CgSpinner size={30} />
                        </SpinnerWrapper>
                      ) : (
                        <>
                          Hire Me
                          <FiSend size={18} style={{ marginLeft: "5px" }} />
                        </>
                      )}
                    </Button>
                  </ContactFormButtonWrapper>
                </Form>
              )}
            </Formik>
          </ContactRightContainer>
        </ContactMainContainer>
      </Container>
      {isSuccessOpen && <SuccessModal toggleModal={setSuccessModalOpen} />}
    </ContactMainLayout>
  );
};

export default Contact;
