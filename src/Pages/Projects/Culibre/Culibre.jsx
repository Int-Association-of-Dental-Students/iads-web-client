import React from "react";
import "./Culibre.scss";
import { Button } from "react-bootstrap";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Accordion } from "react-bootstrap";

import {
  logo,
  logo2,
  logoVert,
  epic,
  footer,
  comp,
  tl1,
  Deco,
  DecoAward,
  DecoRegister,
  DecoCourse,
  DecoComp,
  DecoFAQ,
  cash,
  a1,
  a2,
  a3,
  a4,
  a5,
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  tab,
} from "../../../Assets/Projects/Culibre";
import TeamContent from "./TeamContent";

import Phase from "./Phase";

SwiperCore.use([Navigation]);

const AwardCard = ({ img, title, desc }) => {
  return (
    <div className="award-card">
      <img src={img} alt="" className="num" />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const CompetitorCard = ({ img, title, desc }) => {
  return (
    <div className="competitor-card">
      <img src={img} alt="" className="num" />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const TeamCard = ({ img, position, name }) => {
  return (
    <div className="team-card">
      <img src={img} alt="" />
      <h4 className="position">{position}</h4>
      <p className="name">{name}</p>
    </div>
  );
};

const Culibre = () => {
  return (
    <div className="culibre-page">
      <div className="hero">
        <div className="overlay">
          <div className="landing container">
            <img
              className="bullets"
              style={{ marginRight: "24px" }}
              src={tab}
              alt=""
            />
            <div className="row icons">
              <div className="col">
                <img
                  className="logo1"
                  style={{ marginTop: "-40px" }}
                  src={logo}
                />
                <p className="subtitle">An Initiative by Dentsply Sirona</p>
                <h1 className="title">Cultivate, Deliberate, Inspire...</h1>
                <div className="btns">
                  <Button>
                    Register Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.2829 5L20.9999 12L14.2829 19M19.7331 12.0317H4"
                        stroke="#FCFCFC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                  <Button className="bttn2">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-section">
        <img src={logo2} alt="" />
        <p className="sec-desc">
          IADS and Dentsply Sirona have joined forces in this unique
          challenge-based project which aims to engage with the youth in
          dentistry and connect them with sustainability principles and action
          tools. By enabling IADS members to produce and debate their innovative
          ideas, the aim is not only to empower dental students and young
          professionals but to also to inspire a shift towards a dental
          community that finds sustainability in all aspects of their day-to-day
          lives.
        </p>
      </div>
      <div className="ww">
        <div className="what">
          <img src={Deco} alt="" />
          <div className="content">
            <h1>What</h1>
            <p>
              Crafted in four different phases, each with its own mission
              towards the bigger goal - going beyond for sustainability -  the
              primary objective of this project is to scout for and educate
              enthusiastic IADS members in 62 countries located in all 5 regions
              globally.
              <br /> <br />
              Upon receiving the foundation through Dentsply Sirona’s
              Sustainability in Dentistry curriculum, dental students will have
              the chance to go head-to-head in a debate competition with their
              peers, thus enhancing their critical thinking, communication
              skills and gaining a more informed perspective. 
              <br /> <br />
              The secondary objective of this project will be to inspire young
              minds to advocate for what they have learned from the curricula
              and raise awareness within their local communities through
              advocacy campaigns all culminating in one big campaign competition
              for cash prizes.
              <br /> <br />
              <div className="btns">
                <Button>Debate Competition</Button>
                <Button>Campaign Competition</Button>
              </div>
            </p>
          </div>
        </div>
        <div className="who">
          <img src={Deco} alt="" />
          <div className="content">
            <h1>Who</h1>
            <p>
              Culibre is a challenge that targets creative and outspoken
              individuals who - just like the Culibra succulent that inspired
              the name of this challenge - haven't had a fertile environment to
              thrive in, yet they still harness their talents, and think
              independently. Participation in The Culibre Challenge is widely
              extended to all IADS members through their respective
              associations. While all our dental community is invited to the
              Sustainability curricula, participants in the competition must be
              dental students or young professionals of no more than two years
              after graduation.
              <br />
              Planting the seeds for change is a process and that is exactly
              what The Culibre Challenge is about - as we plant our first seed
              for these engaging conversations in Prague, Czech Republic and one
              seed at a time we bring the competition to each region.
              <br />
              To find out the status of your national associations or more
              details about your membership in IADS, contact our VP of Internal
              Affairs:
              <br />
              <br />
              <div className="btns">
                <Button>Get in Touch</Button>
                <Button>Culibre Challenge Roadmap</Button>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div
        className="filler-green"
        style={{
          height: "161px",
          backgroundColor: "#415c51",
          marginTop: "-1px",
        }}
      ></div>

      <div className="whysus">
        <h1>
          Why <br />
          Sustainable <br />
          Dentistry
        </h1>
        <p>
          There’s an urgent need to integrate sustainability concepts into
          educational models at the formative stage of education as{" "}
          <span className="accent"> the first step towards change </span> before
          dealing with their practical implementation in the workplace. Once we
          provide the means for students realize that their individual actions,
          however small, act as a seed and catalyst for engagement, we can
          achieve a{" "}
          <span className="accent"> net positive environmental impact.</span>
        </p>
      </div>
      <div
        className="filler-yellow"
        style={{
          height: "188px",
          backgroundColor: "#C19A36",
          marginTop: "-140px",
          zIndex: "-1",
        }}
      ></div>

      <Phase />

      <div className="awards-section">
        <div className="title-block">
          <img src={DecoAward} alt="" style={{ marginRight: "26px" }} />
          <h1 className="title">Awards</h1>
        </div>
        {/* <Swiper
          style={{ marginTop: "54px" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={4}
          spaceBetween={0}
        >
          <SwiperSlide>
            <AwardCard
              img={a1}
              title="CE Creditation"
              desc="Enrich your CV with the Continued Education (CE) creditation awarded
          to you upon successful completion of the DS Academy – Sustainability
          in dentistry 5-module course."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardCard
              img={a2}
              title="CE CreditationGolden Ticket"
              desc="Certified? … for a free pass (flight and accommodation expenses covered) to the rooftop of Europe, Prague where you get to engage with peers and compete in a debate challenge for the next award."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardCard
              img={a3}
              title="FDI Training Scholarship"
              desc="Race to the top!! Two lucky finalist teams will be selected to hold their final debate at FDI Headquarters in Geneva, Switzerland upon completion of an exclusive FDI Training on Advocacy and Sustainability campaigning during the WHA event."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardCard
              img={a4}
              title="Sustainability Toolkit Certification"
              desc="You say certificates and we raise you double! If you’ve come this far into the Culibre Challenge, you get your sustainability toolkit certification from the FDI Advocacy & Sustainability training."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AwardCard
              img={a5}
              title="Cash Prizes"
              desc={`You’ve reached the ultimate goal: INSPIRE! Show us what you’ve learned through a campaign in your community and compete for cash prizes. 
              (5 winners 1000$ - 800$ - 600$ - 400$ - 200$)`}
            />
          </SwiperSlide>
        
        </Swiper> */}
        {/* <div className="swiper-button-next"></div>{" "}
        <div className="swiper-button-prev"></div> */}
        <div className="award-cards">
          <AwardCard
            img={a1}
            title="CE Creditation"
            desc="Enrich your CV with the Continued Education (CE) creditation awarded
          to you upon successful completion of the DS Academy – Sustainability
          in dentistry 5-module course."
          />

          <AwardCard
            img={a2}
            title="CE CreditationGolden Ticket"
            desc="Certified? … for a free pass (flight and accommodation expenses covered) to the rooftop of Europe, Prague where you get to engage with peers and compete in a debate challenge for the next award."
          />

          <AwardCard
            img={a3}
            title="FDI Training Scholarship"
            desc="Race to the top!! Two lucky finalist teams will be selected to hold their final debate at FDI Headquarters in Geneva, Switzerland upon completion of an exclusive FDI Training on Advocacy and Sustainability campaigning during the WHA event."
          />

          <AwardCard
            img={a4}
            title="Sustainability Toolkit Certification"
            desc="You say certificates and we raise you double! If you’ve come this far into the Culibre Challenge, you get your sustainability toolkit certification from the FDI Advocacy & Sustainability training."
          />
        </div>

        <div className="cash-div">
          <div className="title-block">
            <img src={DecoAward} alt="" style={{ marginRight: "26px" }} />

            <h1 className="title cash">Cash Prizes</h1>
          </div>
          <div className="circles">
            <p>
              You’ve reached the ultimate goal: INSPIRE! Show us what you’ve
              learned through a campaign in your community and compete for cash
              prizes.
            </p>
            <img src={cash} alt="" />
          </div>
        </div>
      </div>

      <div className="register-section">
        <img src={logoVert} alt="" />
        <div className="register-card">
          <div className="content">
            <div className="left">
              <img src={DecoRegister} alt="" style={{ marginRight: "26px" }} />
              <div className="inner">
                <h2>Register</h2>
                <h4>
                  DS Academy: Sustainability in dentistry – Let’s Go Beyond
                </h4>
                <p>
                  Led by experienced dentistry and sustainability experts with a
                  passion for bringing about change, this curriculum aims to
                  help close that gap. During five inspiring, interactive
                  courses, you will learn what sustainability means for the
                  dental industry and why it is so important.
                </p>
              </div>
            </div>
            <div className="right">
              <img src={DecoCourse} alt="" style={{ marginRight: "26px" }} />
              <div className="inner">
                <h3>Course Outcomes</h3>
                <ul>
                  <li>Study key sustainability concepts and initiatives </li>
                  <li>Learn about FDI’s Pledge for Sustainable dentistry </li>
                  <li>
                    Master practical steps to take towards sustainability at
                    work
                  </li>
                  <li>
                    Discover how to make oral care accessible to underserved
                    communities
                  </li>
                  <li>
                    Obtain effective resources for your sustainable dentistry
                    journey
                  </li>
                </ul>
              </div>
            </div>
            <img className="epic" src={epic} alt="" />
          </div>
          <Button>
            Register Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.2829 5L20.9999 12L14.2829 19M19.7331 12.0317H4"
                stroke="#14142B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="comp-section">
        <img src={logo2} alt="" />
        <p className="sec-desc">
          This competition seeks to foster profound conversations that empower
          dental students to drive transformative change within their field. By
          participating in debates, dental students gain exposure to a diverse
          range of topics that  mirror the real-world challenges they will
          face. 
          <br />
          Having completed the first Phase, you have done your part in preparing
          for this challenge. Now for phase two it’s our turn to bring the
          competition to you, in each of the regions you are located in our
          global IADS community.
          <br />
          <br />
          Our first stop for the debate competition will be within the European
          region, in Prague, Czech Republic where after a rigorous selection, 4
          teams will be competing for two lucky team passes to the FDI
          Headquarters for an exclusive training on Advocacy & Sustainability
          Campaigning.
          <div className="btns">
            <Button>
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2829 5L20.9999 12L14.2829 19M19.7331 12.0317H4"
                  stroke="#FCFCFC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button>Eligibility Criteria</Button>
            <Button className="closed">Apply For Debate Competition</Button>
          </div>
        </p>
        <br />
      </div>

      <div className="competitor-section">
        <div className="title-block">
          <img src={DecoComp} alt="" style={{ marginRight: "26px" }} />
          <h1 className="title" style={{ color: "#fff" }}>
            Competitors
          </h1>
        </div>
        <Swiper
          style={{ marginTop: "54px" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={6}
          spaceBetween={0}
        >
          <SwiperSlide>
            <CompetitorCard
              img={b1}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b2}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b3}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b4}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b5}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b6}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b7}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CompetitorCard
              img={b8}
              title="Team Name"
              desc="Full Name here
              Insert Name here
              Write your name"
            />
          </SwiperSlide>

          {/* Add more SwiperSlide components for additional AwardCards */}
        </Swiper>
        <div className="swiper-button-next"></div>{" "}
        {/* Add these divs for navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="phone-awards">
          <CompetitorCard
            img={b1}
            title="Team Namen"
            desc="Full Name here Insert Name here Write your name"
          />

          <CompetitorCard
            img={b2}
            title="Team Name"
            desc="Full Name here Insert Name here Write your name"
          />

          <CompetitorCard
            img={b3}
            title="Team Name"
            desc="Full Name here Insert Name here Write your name"
          />

          <CompetitorCard
            img={b4}
            title="Team Name"
            desc="Full Name here Insert Name here Write your name"
          />

          <CompetitorCard
            img={b5}
            title="Team Name"
            desc={`Full Name here Insert Name here Write your name`}
          />
          <CompetitorCard
            img={b6}
            title="Team Name"
            desc={`Full Name here Insert Name here Write your name`}
          />
          <CompetitorCard
            img={b7}
            title="Team Name"
            desc={`Full Name here Insert Name here Write your name`}
          />
          <CompetitorCard
            img={b8}
            title="Team Name"
            desc={`Full Name here Insert Name here Write your name`}
          />
        </div>
      </div>

      <div className="meet-team">
        <div className="title-block">
          <img src={DecoAward} alt="" style={{ marginRight: "26px" }} />
          <h1 className="title">Meet The Team</h1>
        </div>

        <div className="team-cards">
          <div className="swiper-button-container">
            <div className="swiper-button-next"></div>{" "}
            <div className="swiper-button-prev"></div>
          </div>
          <br />
          <br />
          <Swiper
            style={{ marginTop: "54px" }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={4}
            spaceBetween={0}
          >
            {TeamContent.map((t) => {
              return (
                <SwiperSlide>
                  <TeamCard img={t.img} position={t.position} name={t.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="phone-cards">
            {TeamContent.map((t) => {
              return (
                <TeamCard img={t.img} position={t.position} name={t.name} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="faqs">
        <div className="title-block">
          <img src={DecoFAQ} alt="" />
          <div className="content">
            <h1>FAQs</h1>
            <p>We are here to answer your questions! </p>
          </div>
        </div>
        <div className="acc">
          <Accordion className="accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why Culibre?</Accordion.Header>
              <Accordion.Body>
                Culibre  is an acrostic of the three main phases of this
                project: Cultivate - Deliberate - Inspire which is inspired by
                ‘Culibra’ - a type of Echeveria succulent; known for their
                striking appearance bringing drama to where they are placed
                while being forgiving in their ability to thrive independently
                in different planting arrangements. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do I participate in the debate competition?
              </Accordion.Header>
              <Accordion.Body>
                To be eligible to participate in the debate competition, you
                must first successfully complete the Sustainability in Dentistry
                course by Dentsply Sirona. At the end of the course material you
                will enter a quiz and obtain your certificate upon achieving a
                passing result.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do I have to pay any registration fee?
              </Accordion.Header>
              <Accordion.Body>
                No. The course is brought to you free of charge, courtesy of
                Dentsply Sirona.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is the Golden Ticket?</Accordion.Header>
              <Accordion.Body>
                The teams selected for the Debate Competition will be funded for
                their event and accommodation expenses to participate at the
                event in Prague, Czech Republic.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                If it starts in Europe, does it mean only Europeans can
                participate?
              </Accordion.Header>
              <Accordion.Body>
                Registrations to the sustainability curricula are open to all
                IADS members of all regions. The debate competition starting in
                Europe means that the competition will be between teams from
                Europe; due to the fact debates will tackle imminent problems.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Do I apply individually or as a team for the debate competition?
              </Accordion.Header>
              <Accordion.Body>
                Applications will be managed through the member associations and
                submitted as teams; with individual documents being uploaded
                respectively.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>How many teams can apply?</Accordion.Header>
              <Accordion.Body>
                There is no limit to the number of team applications within the
                region, however only 4 teams will be selected for the debate
                competition.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                What is the reward for debate winners?
              </Accordion.Header>
              <Accordion.Body>
                The two finalists will be hosted at FDI Headquarters for the
                grand finale. The winning team will receive an exclusive
                training from FDI on Advocacy and Sustainability Campaigning.
                Both teams will be able to attend WHA side events during their
                stay in Geneva, Switzerland.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Do we have to use the cash prize for the campaign?
              </Accordion.Header>
              <Accordion.Body>
                No. Cash prizes will be awarded to the 5 top entries of the
                campaign competition in Phase 3 Stage 2 and are intended only as
                rewards for their work and impact on their community, with no
                follow-up obligation on the winners’ part towards the
                association.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                How will I know if or when I can get from one phase to the next?
              </Accordion.Header>
              <Accordion.Body>
                We will accompany you through the curriculum and throughout each
                phase, by follow-up emails with more details and internally
                shared resources to ensure your smooth transition from one phase
                to the next. So, once you register, make sure you regularly
                check your Inbox and Spam folder as well.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                Can I still participate in the campaign competition if I wasn’t
                part of the debate competition?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you won’t need to wait for the debate competition to catch
                up with your region! If you have successfully accomplished the
                Sustainability in Dentistry curricula, you will still be
                eligible to participate in the Campaign Competition.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="culibre-footer">
        <img src={footer} alt="" />
        <div className="touch">
          <h1>Get In Touch</h1>
          <h4>vpia@iads-web.org</h4>
          <p>
            Couldn’t find the answer to your questions on the FAQs? Contact us
            for all your concerns regarding your project submission, the
            competition process and any other inquiries.
          </p>
          <Button>Email The VPIA</Button>
        </div>
        <div className="press">
          <h1>Press</h1>
          <h4>vppr@iads-web.org</h4>
          <p>
            Contact our Vice President of Public Relations for any press or
            social media inquiries, concerns regarding any visuals or any
            necessary media resources.
          </p>
          <Button>Email The VPPR</Button>
        </div>
      </div>
    </div>
  );
};

export default Culibre;
