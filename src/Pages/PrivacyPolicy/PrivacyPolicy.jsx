import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-policy-container"
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "left",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <h1>Privacy Policy</h1>
      <p>
        Thank you for visiting the website of the International Association of
        Dental Students (IADS). This Privacy Policy explains how we collect,
        use, and disclose your personal information when you interact with our
        website. We are committed to protecting your privacy and ensuring the
        security of your personal information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of personal information when you
        interact with our website:
      </p>
      <ul>
        <li>
          Contact Information: When you contact us or subscribe to our
          newsletter, we may collect your name, email address, and other contact
          details.
        </li>
        <li>
          Usage Information: We may collect information about how you use our
          website, including your IP address, browser type, operating system,
          and browsing behavior.
        </li>
      </ul>
      <h2>Use of Personal Information</h2>
      <p>
        We use the personal information we collect for the following purposes:
      </p>
      <ul>
        <li>
          To provide and improve our services: We use your personal information
          to respond to your inquiries, send you relevant information, and
          improve our website's functionality.
        </li>
        <li>
          To communicate with you: We may use your contact information to send
          you newsletters, updates, and other promotional materials. You can
          opt-out of receiving these communications at any time.
        </li>
        <li>
          To analyze and enhance user experience: We may use your usage
          information to analyze trends, track website usage, and make
          improvements to our website and services.
        </li>
      </ul>
      <h2>Disclosure of Personal Information</h2>
      <p>
        We may share your personal information with third parties in the
        following circumstances:
      </p>
      <ul>
        <li>
          Service Providers: We may share your personal information with trusted
          third-party service providers who assist us in operating our website
          and delivering our services. These service providers are obligated to
          maintain the confidentiality and security of your personal
          information.
        </li>
        {/* <li>
          Legal Requirements: We may disclose your personal information if
          required to do so by law or in response to a valid legal request.
        </li> */}
      </ul>
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. However,
        please note that no method of transmission over the internet or
        electronic storage is 100% secure.
      </p>
      <h2>Links to Third-Party Websites</h2>
      <p>
        Our website may contain links to third-party websites. This Privacy
        Policy applies only to our website, and we are not responsible for the
        privacy practices of third-party websites. We encourage you to read the
        privacy policies of those websites.
      </p>
      <h2>Children's Privacy</h2>
      {/* <p>
        Our website is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under the age of
        13. If you believe we have inadvertently collected personal information
        from a child under 13, please contact us, and we will promptly delete
        the information.
      </p> */}
      <h2>Changes to the Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the revised policy on our website. It is your
        responsibility to review the Privacy Policy periodically.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        privacy practices, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
