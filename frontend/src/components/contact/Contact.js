import React from "react";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="about">
      <div className="container py-5">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4">About Us</h1>
          </div>
          <div className="col-lg-12  about-section">
            <h1>SHOPIT IS A MALL, A MARKETPLACE AND A COMMUNITY</h1>
          </div>
          {/* style={{
              backgroundImage: "url(/images/bg.jpg)",
              backgroundSize: "contain",
              width: "500",
            }} */}
          <div className="col-lg-12 privacy-policy">
            <h3>Privacy and Confidentiality</h3>
            <p>
              Welcome to the shopIT website (the "Site") operated by techdev
              (Registration Number: '0000000). We respect your privacy and want
              to protect your personal information. To learn more, please read
              this Privacy Policy.
            </p>
            <ol>
              <li>
                This Privacy Policy explains how we collect, use and (under
                certain conditions) disclose your personal information. This
                Privacy Policy also explains the steps we have taken to secure
                your personal information. Finally, this Privacy Policy explains
                your options regarding the collection, use and disclosure of
                your personal information. By visiting the Site directly or
                through another site, you accept the practices described in this
                Policy.
              </li>
              <li>
                Data protection is a matter of trust and your privacy is
                important to us. We shall therefore only use your name and other
                information which relates to you in the manner set out in this
                Privacy Policy. We will only collect information where it is
                necessary for us to do so and we will only collect information
                if it is relevant to our dealings with you.
              </li>
              <li>
                We will only keep your information for as long as we are either
                required to by law or as is relevant for the purposes for which
                it was collected.
              </li>
              <li>
                We will cease to retain your personal data, or remove the means
                by which the data can be associated with you, as soon as it is
                reasonable to assume that such retention no longer serves the
                purposes for which the personal data was collected, and is no
                longer necessary for any legal or business purpose.
              </li>
              <li>
                You can visit the Site and browse without having to provide
                personal details. During your visit to the Site you remain
                anonymous and at no time can we identify you unless you have an
                account on the Site and log on with your user name and password.
              </li>
            </ol>
          </div>
          <div className="col-lg-12 py-5 about-section1">
            <h1>
              <b>OUR MISSION</b>
            </h1>
            <div className="col-lg-6">
              <p>
                Make it easy to do business anywhere in the era of digital
                economy.
              </p>
            </div>
          </div>
          <div className="col-lg-12 term-condition">
            <h3>Terms and Conditions</h3>
            <p>
              By using shopIT (‘Site’) you agree to these terms and conditions,
              privacy policy, returns and refund policy of the Site. Please read
              the Terms and Conditions carefully before using Daraz.pk.
            </p>
            <br></br>
            <p>
              Welcome to shopIT also hereby known as “we", "us" or "shopIT". We
              are an online marketplace and these are the terms and conditions
              governing your access and use of Daraz along with its related
              sub-domains, sites, mobile app, services and tools (the "Site").
              By using the Site, you hereby accept these terms and conditions
              (including the linked information herein) and represent that you
              agree to comply with these terms and conditions (the "User
              Agreement"). This User Agreement is deemed effective upon your use
              of the Site which signifies your acceptance of these terms. If you
              do not agree to be bound by this User Agreement please do not
              access, register with or use this Site. This Site is owned and
              operated by Jade E Services Pakistan Pvt Limited (Registration
              Number: '0000000) The Site reserves the right to change, modify,
              add, or remove portions of these Terms and Conditions at any time
              without any prior notification. Changes will be effective when
              posted on the Site with no other notice provided. Please check
              these Terms and Conditions regularly for updates. Your continued
              use of the Site following the posting of changes to Terms and
              Conditions of use constitutes your acceptance of those changes.
            </p>
          </div>
          <div className="col-lg-12 py-5 about-section2">
            <h1>
              <b>We work hard to minimize mistakes,</b>
            </h1>
            <div className="col-lg-12">
              <p>But when they do happen, We make them 100% right.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 foot">
        <div className="col-lg-4 ">
          <Link to="/">
            <img
              src="/images/logo.png"
              style={{ width: "200px", marginTop: "15px" }}
            />
          </Link>
          <p style={{ color: "white", marginTop: "20px" }}>
            shopIT - The Multivendor Store
          </p>
          <p style={{ color: "white" }}>
            Make it easy to do business anywhere in the era of digital economy.
          </p>
        </div>
        <div className="col-lg-4  center-foot">
          <h2 style={{ color: "#f85706d3" }}>Email</h2>
          <p style={{ color: "white" }}>techdev45@outlook.com</p>

          <h2 style={{ color: "#f85706d3" }}>Phone</h2>
          <p style={{ color: "white" }}>+923334455666</p>
        </div>
        <div className="col-lg-4 payment-type">
          <h2 style={{ color: "#f85706d3" }}>Payment Method</h2>
          <img src="/images/visa.png" style={{ width: "55px" }} />
          <img src="/images/mastercard.png" style={{ width: "55px" }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState, useEffect } from "react";

// // const Contact = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const [loader, setLoader] = useState(false);
// import { useAlert } from "react-alert";
// import { useDispatch, useSelector } from "react-redux";
// import { contact, clearErrors } from "../../actions/userActions";

// const Contact = ({ history }) => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { name, email, password } = user;

//   const alert = useAlert();
//   const dispatch = useDispatch();

//   const { isAuthenticated, error, loading } = useSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isAuthenticated) {
//       history.push("/");
//     }

//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, alert, isAuthenticated, error, history]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.set("name", name);
//     formData.set("email", email);
//     formData.set("message", message);

//     dispatch(contact(formData));
//   };

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     setLoader(true);

//   // db.collection("contacts")
//   //   .add({
//   //     name: name,
//   //     email: email,
//   //     message: message,
//   //   })
//   //   .then(() => {
//   //     setLoader(false);
//   //     alert("Your message has been submitted👍");
//   //   })
//   //   .catch((error) => {
//   //     alert(error.message);
//   //     setLoader(false);
//   //   });

//   // setName("");
//   // setEmail("");
//   // setMessage("");
//   //   };

//   return (
//     <form className="form" onSubmit={submitHandler}>
//       <h1>Contact Us 🤳</h1>

//       <label>Name</label>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>Email</label>
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label>Message</label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>

//       <button
//         type="submit"
//         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Contact;
