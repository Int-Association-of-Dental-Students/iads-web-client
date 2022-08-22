import React from "react";
import "./Membership.scss";

const Membership = () => {
  return (
    <div className="membership-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">MEMBERSHIP</h1>
        </div>
      </div>
      <div className="orgMember">
        <h1
          className="title-2nd"
          style={{
            color: "white",
            width: "50%",
            margin: "auto",
            paddingTop: "90px",
          }}
        >
          Apply for an organizational membership
        </h1>
        <a
          href="/organizational-member-form"
          className="btn"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          Submit your Application Here
        </a>
        <p className="desc" style={{ width: "70%", margin: "auto" }}>
          Upon filling in the online application form above, the applying
          organization shall receive an official reply confirming that the
          Executive Committee has successfully received their application.
        </p>
        <div className="container" style={{ marginTop: "42px" }}>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <p className="desc" style={{ textAlign: "left" }}>
                <span className="hdr">
                  The application attachments include:
                </span>{" "}
                <br /> An up to date copy of the Constitution in English
                Language. Filled in Consent letter for the Membership
                Application In the case of “Full Membership”, a bank evidence of
                payment of the required annual membership fees must be sent to
                the account of the Association at least 30 days in advance of
                the General Assembly. In case the membership is not accepted by
                the General Assembly, the membership fee shall be reimbursed.{" "}
                <br /> <br /> Within 21 calendar days the applying organization
                will receive an email from the General Secretary informing the
                applying organization about the ExCo conclusion of their
                application. The ExCo conclusion may be one of the following
                options: Forwarding to the upcoming General Assembly Postponing
                to the following General Assembly Further Assessment Deemed
                “FAD”
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul className="desc dashed" style={{ textAlign: "left" }}>
                <li>
                  In the event of “Forwarding to the upcoming General Assembly”,
                  the application has been submitted properly at least 30 days
                  in advance of the nearest General Assembly and so it will be
                  presented and resolved by direct voting of the GA delegates.
                </li>
                <li>
                  In the event of “Postponing to the following General
                  Assembly”, the application has not been submitted at least 30
                  days in advance of the nearest GA session and so it will be
                  added to the agenda of the next General Assembly following the
                  upcoming one.
                </li>
                <li>
                  In the event of “Further Assessment Deemed (FAD)”, the
                  application has not been properly submitted. The applying
                  organization may be requested to submit further documents or
                  proofs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="personalMember">
        <h1
          className="title-2nd"
          style={{
            width: "80%",
            margin: "auto",
            paddingTop: "90px",
          }}
        >
          Apply for a personal membership
        </h1>
        <div
          className="btn"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          Submit your Application Here
        </div>
        <p className="desc" style={{ width: "85%", margin: "auto" }}>
          "Personal Membership" is a type of individual membership which is
          generally offered to every undergraduate dental student who is not
          affiliated (enrolled) to any IADS national or local member
          organization. However students from states with no IADS member
          organization are welcomed to apply for this type, the students from
          states with IADS member organizations could be possibly accepted for
          this type of membership under certain conditions (approval of the
          member organization, executive committee and general assembly).
        </p>
        <div className="container" style={{ marginTop: "42px" }}>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <p className="hdr" style={{ textAlign: "left" }}>
                Application Terms & Conditions
              </p>
              <ul className="desc dashed" style={{ textAlign: "left" }}>
                <li>
                  Upon filling-in the below form properly, applicant should
                  receive an automatic email confirming that Executive Committee
                  has successfully received his/her application.
                </li>
                <li>
                  Within 14-21 calendar days applicant will receive an email
                  from the General Secretary informing him/her with the ExCo
                  Conclusion of his/her application.
                </li>
                <li>
                  ExCo Conclusion could be possibly one of three options
                  (Acceptance - Refusal - Further Consultation Deemed "FCD").
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul className="desc dashed" style={{ textAlign: "left" }}>
                <li>
                  In the event of Acceptance, applicant will be referred to
                  Treasurer to fulfill financial due of €50 (payable annually).
                </li>
                <li>
                  In the event of Refusal, applicant will receive a profound
                  justified explanation for such decision and he/she is entitled
                  to appeal against this decision for the following General
                  Assembly session.
                </li>
                <li>
                  In the event of Further Consultation Deemed "FCD", applicant
                  will be informed of reasons why his/her application couldn't
                  be concluded on standard time and may be requested to submit
                  further documents.
                </li>
                <li>Membership term is 1-year (subject for renewal).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
