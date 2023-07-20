import React from "react";
import "./About.scss";
import { Chrono } from "react-chrono";
import Arrow from "../../Assets/About/Arrow.svg";

import m1 from "../../Assets/About/Mission/m1.svg";
import m2 from "../../Assets/About/Mission/m2.svg";
import m3 from "../../Assets/About/Mission/m3.svg";
import m4 from "../../Assets/About/Mission/m4.svg";
import m5 from "../../Assets/About/Mission/m5.svg";
import m6 from "../../Assets/About/Mission/m6.svg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src = `${window.location.protocol}//www.profitabledisplaynetwork.com/4af9644a7f007fed454300478ce1e650/invoke.js`;
    adScript.async = true;
    document.body.appendChild(adScript);
  }, []);

  const items = [
    {
      title: "February 1951",
      cardTitle: "Kick-off",
      cardDetailedText:
        "The French Dental Students invited some international students to their Annual Meeting in Paris where the Danish, Dutch and Swedish representatives proposed to establish an international dental student’s organisation. This proposal was unanimously welcomed.",
    },
    {
      title: "September 1951",
      cardTitle: "First ExCo",
      cardDetailedText:
        "Representatives from Denmark, Finland, France, Germany, Holland, Norway, Sweden and the UK met in Copenhagen. A committee consisting of representatives from Denmark, Holland and the UK was formed to build the constitution of the Association. This constitution was drafted and the first Executive Committee was elected; Leslie Sorling from Sweden being the first President, with Mogens Skougaard from Denmark, Secretary and Carlo Nevejan from Holland, Treasurer. The encouragement and advice of Prof.P. O. Pedersen through his great knowledge of the affairs of the FDI, was invaluable - making him the first Honorary Life Member of IADS. ",
    },
    {
      title: "July 1952",
      cardTitle: "Constitution Established",
      cardDetailedText:
        "The IADS Council (now the General Assembly) met in Birmingham. The constitution, regulations and plans for the future were put forward by the Executive Committee and it was decided that, in the future, the Annual Session of the Council should coincide with an international dental student congress.",
    },
    {
      title: "September 1953",
      cardTitle: "First Annual Congress",
      cardDetailedText:
        "The first IADS Congress was held at the University of Marburg/Lahn in Germany; some 120 students attended and the official constitution was approved and signed at the Council meeting. The Association was officially launched.",
    },
    {
      title: "September 1954",
      cardTitle: "FDI Relationship Established",
      cardDetailedText:
        "The Dutch dental students organised the second IADS Congress at Groningen and Utrecht. At this meeting the Council worked on formulating future policy and activity plans. Cooperation with other international organisations, especially the World Health Organisation (WHO) and the Federation Dentaire Internationale (FDI), were considered and consequently the close relationship between the F.D.I. and the IADS was established.",
    },
    {
      title: "1955",
      cardTitle: "And from then on",
      cardDetailedText:
        "The 1955 Annual Congress was held in Malmo and this was followed by those in Newcastle, Oslo, Ghent, Berlin, Stockholm, London, Dusseldorf, Amsterdam and London again in 1965. Only in 1963, due to late cancellation, was there no Congress. During this time the membership increased to fifteen countries and the Association had become well established in the dental world. The Annual Congress had become a most enjoyable, although mainly social, gathering; it provided almost the only communication between members as the finances of the Association precluded circularised publications. However, the exchange program had become established and this international exchange of dental students has continued to be a most worthwhile and successful project and one of which the IADS can be justly proud.",
    },
    {
      title: "September 1966",
      cardTitle: "Stepping outside Europe",
      cardDetailedText:
        "An IADS Congress was held outside Europe for the first time in its history; in Jerusalem. Incidentally, this meeting was my first introduction to the IADS and was the first of the ten Congresses which it has been my privilege to attend said Peter Swiss (IADS Legendary Alumni).This Congress also marked the transition of the IADS from that of a young association to a mature one tackling present problems and planning for a successful future. A recruitment drive in the Middle East, Eastern Europe and North America was therefore initiated and a newsletter with commercial sponsorship was planned. The increasing volume and complexity of business to be considered by the General Assembly made it essential that this be conducted in a well-ordered and democratic manner, presided over by an independent Chairperson.",
    },
    {
      title: "August 1967",
      cardTitle: "FDI Liaison Officer",
      cardDetailedText:
        "Dr. Gerald Leatherman, the Executive Director of the FDI, in view of the increasing importance of the IADS, decided that a permanent liaison officer should be appointed,  job would be to keep the FDI informed of IADS matters and to assist the IADS when requested by its Executive Committee, thus contributing some degree of continuity.",
    },
    {
      title: "August 1969",
      cardTitle: "North America Joined",
      cardDetailedText:
        "By 1969, North America was showing interest in the Association and, at the Congress arranged jointly between Copenhagen and Malmo, both the United States of America and Canada attended as observers for the first time. The New York Dental School applied for corresponding membership and thus the door to North America was at last opening.",
    },
    {
      title: "September 1969",
      cardTitle: "Regional Connections",
      cardDetailedText:
        "By this time, also, another international dental student association was being established, albeit a regional one. The Asian Pacific Dental Students Association was formed in Southeastern Asia and liaison with this Association was established.",
    },
    {
      title: "September 1970",
      cardTitle: "Policies in Action",
      cardDetailedText:
        "Berlin was host to the IADS for the second time in 1970 and at this Congress, Mr. Mark-John Vella-Bardon urged that discussion groups should replace formal lectures as the major content of the Scientific Program. The success of these groups was noticed by the FDI. As a result, in 1973, the FDI Commissions on Dental Education, Dental Practice and Public Dental Health each invited the IADS to appoint a representative to participate in their Commission meetings at the FDI Congresses.",
    },
    {
      title: "September 1971",
      cardTitle: "ASDA joins IADS",
      cardDetailedText:
        "The congress was held in Malta under the Chairpersonship of Mark-John Vella-Bardon and at this meeting the two North American Coordinators, Jeffrey Leeds and Barry Grayson, presented the application for membership of the newly-formed American Student Dental Association (ASDA), as well as more Canadian Schools, Mexico and Nicaragua.In addition, Egypt, Greece and Italy were elected members at this meeting.",
    },
    {
      title: "September 1972 ",
      cardTitle: "Published Newsletter",
      cardDetailedText:
        "Australia joined as a corresponding member at the Congress in England. More importantly, Quintessence International took over the publication and distribution of the newsletter. This brought an immediate improvement to IADS finances; allowing for more activity organising opportunities.",
    },
    {
      title: "September 1974",
      cardTitle: "The Restructuring",
      cardDetailedText:
        "The congress was held in Holland where the delegates were informed of the offer of the Medical Protection Society, a professional insurance organisation in London, to provide a central address and some secretarial assistance to the IADS. A restructuring was set in motion.",
    },
    {
      title: "September 1979",
      cardTitle: "Importance of Sponsorship",
      cardDetailedText:
        "The Congress of 1979 was set in the beautiful city of Freiburg, West Germany. It was however a conference beset by management problems due partly to failure of the CoCo, to appreciate the importance of sponsorship in a congress of such size. Successive CoCos have realized the necessity of gaining help from commercial sources a daunting and difficult task, but one which has been tackled, is some cases, by hard-nosed business acumen. One of the main areas of difficulty, about which I felt strongly, was that of a constitution which seemed to slow down proceedings and often caused the General Assembly to come to a virtual standstill over a procedural point. Valuable debating time was often lost.",
    },
    {
      title: "August 1980",
      cardTitle: "Constitution Refinement",
      cardDetailedText:
        "In 1980, at the Utrecht Congress, a small working party, under the Chairmanship of the IADS President, Wojieck Kowalski, set about reviewing the entire constitution. This proved to be a long and arduous task, and indeed two further attempts were necessary Egypt 1981 and Puerto Rico 1983 -before the constitution we use today was finally accepted.",
    },
    {
      title: "August 1982 ",
      cardTitle: "Political Manipulation",
      cardDetailedText:
        "The period between the congress in Utrecht and the one is Helsinki 1982, was, for the Association, an unsettled time, the effects of which may still be felt today. The Association is a non-political organisation from which nobody can be excluded through reasons of race or creed. However, for a time, the Association was made to face political reality not unnaturally in view of its international composition, but in a way which left some member nations feeling that they had no alternative but to leave. I regret their decision but understand that not every student body is independent of the government and its policies. I hope that in the future these countries will feel able to rejoin the IADS and realise that their views will be respected. I also hope that the Association will always keep its non-political stance.' said Peter V. Dyer (FDI/IADS Liaison Officer)",
    },
    {
      title: "August 1986",
      cardTitle: "First time in Asia",
      cardDetailedText:
        "This was the first time that an IADS Annual Congress coincided with a meeting of the Asian Pacific Dental Students‟ Association in Singapore.",
    },
    {
      title: "August 1987",
      cardTitle: "Questionable Future",
      cardDetailedText:
        "At the annual congress in Turku, Finland many serious issues were raised like “declining membership, an uncertain future of the Central Office, the loss of the Quintessence International account and more long term decisions to make like whether there should be a voluntary work abroad scheme or how the exchange program could be improved? ",
    },
    {
      title: "February 1994",
      cardTitle: "MYM in Paris",
      cardDetailedText:
        "From February 24th to 27th, the 42nd IADS Mid Year Meeting (MYM) was held in Paris. This was the first time for MYM to be held outside London, because it was not fair to keep meeting in the same place year after year since for many delegates London is very far away.",
    },
    {
      title: "August 1995",
      cardTitle: "Enriched congress",
      cardDetailedText:
        "The IADS Congress held in Sao Paulo, Brazil had 500 delegates from 34 countries attending this meeting, which included a 5-day scientific conference with 40 lectures on topics from fluoridation to implants. There were also presentations of research by students and young dentists.",
    },
    {
      title: "January 1996",
      cardTitle: "AIDS Committee",
      cardDetailedText:
        "Formation of the AIDS committee that was to gather information about AIDS and circulate it through the Dental Students. Other tasks of the committee included organising a summer school, producing a booklet that is to be published and distributed by IADS.",
    },
    {
      title: "October 1998",
      cardTitle: "Emergency Congress",
      cardDetailedText:
        "SPECIAL SESSION OF GENERAL ASSEMBLY BARCELONA, SPAIN: A) This was the year when the annual meeting that was planned to take place in August 1998 in Belgrade was cancelled due after a long process of consultation with the organisers, the Executive Committee, the FDI, various foreign ministries, the member associations and the Honorary Life members. The Congress was cancelled because of; - low number of registrations (25), which included 3 NEOs. This would have made it impossible to hold a valid General Assembly. The deadline for registrations had been extended, twice, at the request of the CoCo to allow more time for people to register. However, this had resulted unsuccessful. - lack of sponsorship, which together with the lack of registrations, made the Congress financially enviable. - Political problems in Yugoslavia, which made people not want to attend. This contributed to the low numbers of registrations. And thus a special session was held in Barcelona in October to compensate for the meeting. B) the acceptance if the school in Bergen (Norway) as Full School Members, the two Norwegian schools had formed an International Committee, which would represent both of them as Full Country Members for Norway.",
    },
    {
      title: "January 1999",
      cardTitle: "More activities",
      cardDetailedText:
        "IADS Committee was thanked for their work and after they collected enough information, organised a summer school, made the booklet and presented a seminar, their job was done and the committee was closed. APDSA offered to help organise the 2001 Annual Meeting for IADS in Kuala Lumpur in order to celebrate the IADS 50th anniversary with the FDI.",
    },
    {
      title: "January 2000",
      cardTitle: "3-Year Plan",
      cardDetailedText:
        "A 3 year plan was set with FDI concerning promotion and fund raising for the IADS as well as enhancing the FDI-IADS communication.VCP for IADS in Tanzania and Romania were put into action.IADS as part of the UNESCO collective consultations was invited to all their meetings.",
    },
    {
      title: "October 2001",
      cardTitle: "IADS 50th anniversary",
      cardDetailedText:
        "The 50th anniversary for IADS was celebrated during the joint FDI-IADS meeting taking place in Kuala lampur Malaysia in 2001.Poland, Nigeria and Estonia were accepted for IADS membership.",
    },
    {
      title: "October 2001",
      cardTitle: "Golden Jubilee",
      cardDetailedText:
        "The 50th anniversary for IADS was celebrated during the joint FDI-IADS meeting taking place in Kuala lampur Malaysia in 2001.Poland, Nigeria and Estonia were accepted for IADS membership.",
    },
    {
      title: "January 2002",
      cardTitle: "Website Launch",
      cardDetailedText:
        "Memberships of France, Lithuania, Sweden, Switzerland, Russia, Puerto Rico, Mexico and Iceland were lapsed.Georgia (GSSA) was accepted for membership. Standing Committee On Research and Education –SCORE- was formed.This month also marked the launch of the IADS website domain: www.iads-web.org",
    },
    {
      title: "January 2003",
      cardTitle: "Seen in UNESCO",
      cardDetailedText:
        "IADS president was invited to the 8th UNESCO/ NGO Consultation on Higher Education in January 2003. The Sudanese Association of Dental Students (SADS) was accepted as a full National Member. The Scientific Association of Hellenic Dental Students (EEFOE) was accepted as a National Corresponding, representing the 2 dental schools in Greece. The Maltese Association of Dental Students (MADS) was accepted as a full National Member representing the one and only dental school in Malta. The Italian Association of Dental Students (AISO) was accepted as a National Corresponding Member representing 22 local organisations. ",
    },
    {
      title: "January 2005",
      cardTitle: "New Members",
      cardDetailedText:
        "Haitian Dental Student Association applied for Full Country/National Membership. Students Union of Medical Faculty Novi Sad, Serbian & Montenegro - Full Local Membership- 350 members Georgian Dental Students Association (GeDSA)- Full Membership-300 members. Associazione Italiana Studenti di Odontoiatria (AISO)- Full Membership- 820 members ",
    },
    {
      title: "August 2006 ",
      cardTitle: "COSPIE and first IVP",
      cardDetailedText:
        "COSPIE the committee with an aim to help solve problems often occurring during exchanges was created. The “Insurance Deposit System” was created; to deal with exchanges of students and young dentists, to help NEO to arrange the exchange, to validate points related to accommodation, transportation to set rules of any changes that might be done before the exchange. First time, to connect a voluntary work project with an IADS congress around 4000 patients were treated by the congress participants in combination with the students and doctors from Khartoum University during the trip. ",
    },
    {
      title: "January 2007 ",
      cardTitle: "ABC of Exchange",
      cardDetailedText:
        "HCCM, Russian Federation- application for full country membership, 7000 members, and 12 schools represented. Palestinian Association of Dental Students (PADS) joined as well. The”ABC of Exchange”  document was compiled including:  -General duties of NEO, -Duties of NEO and LEO during exchange, -Student obligations. ",
    },
    {
      title: "August 2008",
      cardTitle: "SCORE and New Partnerships",
      cardDetailedText:
        "Muhammadiyah University of Yogyakarta – Indonesia – Corresponding Membership The League of Students in Dental Medicine Bucharest (LSMDB) - Full Local Membership - 300 members Dental Students' Society of Iasi (Societatea Studentilor Stomatologi Iasi)- Full Local Membership – 240 members More than 40 IADS members participated in the IADS Voluntary project and more than 300 students took part in IADS Exchange Programs. Partnerships were made with the European Dental Students’ Association – EDSA, as well as Dentist Network and SICOBAIR. SCORE achievements: -Reached an agreement with Institute of Dental Research –Washington university USA that the latter will host selected IADS students to conduct their own research in the premises of Washington University. -A database of students’ researches and lectures were made on the IADS website. -A database of post graduate studies in many countries was prepared. -A students' lecture contest was conducted during the 55th Annual Meeting. ",
    },
    {
      title: "January 2009",
      cardTitle: "ISO became part of ExCo",
      cardDetailedText:
        "More new member organisations joined IADS representing students from Slovakia, Armenia, UK, Taiwan, Greece, Nigeria and Kurdistan region (Iraq). The EU GARNT problem was resolved as IADS would pay the debts in 4 instalments to be fully paid by January 2010. International Scientific Officer (ISO) was added as 6th position within the Executive Committee according to the constitutional amendment. ",
    },
    {
      title: "March 2015",
      cardTitle: "Age of technology in ICEP",
      cardDetailedText:
        "The initial idea about creating a Portal to serve the exchanges in IADS goes way back to the year of 2008 but it never came to fruition. In 2015 during the Mid Year Meeting in Jordan, Omar Albairat - currently an honorary member of IADS - presented the initial proposal of the concept and it was released to public use in the first month of the following year.  Same year ICEP Rules & Regulations were introduced to IADS and even today the portal is the only legitimate way of exchanges and is commonly used by the NEOs all around the world! ",
    },
    {
      title: "February 2016",
      cardTitle: "Rules and Regulations of ICEP",
      cardDetailedText:
        "Ever since exchanges were introduced to IADS, exchange officers were dealing with emails and lots of paperwork and there was nothing to guide them but a 'NEO booklet' and word of mouth from older exchange officers. There were no documents stating the rights and the responsibilities of the Exchange Officers. The Rules & Regulations we use today were created by Omar Albairat and later accepted in the MYM of Bratislava in 2016.",
    },
    {
      title: "October 2016",
      cardTitle: "First task force",
      cardDetailedText:
        "First historic public recruitment of a task force for the organisation was initiated by the Editor to appoint an Editorial Board in order to assist different projects and fields of editorial work. After one month of receiving applications, evaluation and objective assessment interviews Mr. Abanob Yosry, decided to accept 20 members for his board out of 39 applicants.  This Editorial Board was the first of its kind to have this large variety of skills and perks from graphic design, videography, photography, video editing, web designing, web developing, mobile app developing, professional writing, content creation, social media marketing and even drawing. 'IADS Magazine '' issuance frequency has been increased from 1-2 copies per year to 4 copies per year. Rebranded content and design of 'IADS Magazine' has been implemented in order to gain further publicity and impact as No.1 publication written and read by dental students worldwide. Workflow of 'IADS Magazine' has been organised to be autopilot produced by Editorial Board members on a regular basis. A Project of a brand new website of IADS has got into action. Engagement and Reach rates of IADS social accounts had been incredibly maximised by 200-600% thanks to employed publishing and marketing strategies. Online exposure of IADS has been enhanced by having pages at Wikipedia, Google Maps, Dental Tribune International and other partner websites. Websites of 'Electoral Platform' and 'WOHD Portal' had been introduced to organise IADS work. Launching 'IADS Museum' initiative in order to preserve the history of IADS. Starting the real archiving and registry work of IADS logs and lists, through the 'IADS Certificate' project. This aims to have track-able, authentic and generic certificates (documents) of the organisation for the first time in history.",
    },
    {
      title: "February 2017",
      cardTitle: "Critical Issues",
      cardDetailedText:
        "Under the patronage of Beirut Arab University (BAU) and its dean Prof. Dr. Essam Osman (who was an active IADS member in 1970s), the 63rd MYM was organised by Lebanese Association of Dental Students (LADS) in the incredible city of Beirut. Despite the relatively small number of participants, the scientific program, social activities, food and historic places of Lebanon altogether managed to make the experience of students unique. General Assembly witnessed some critical issues like; -Report of IVP Mozambique that was organised collaboratively with Humble Smile Foundation (HSF), and claims of participants that underlying commercial purposes were obvious there from the side of the HSF President. -IADS President revealed that the legal registration of IADS requires renewal urgently. -Unpaid dues and capitation fees of exchanges of the last two meetings (MYM Bratislava and AC Poznan) were discussed. ",
    },
    {
      title: "August 2017",
      cardTitle: "External Relations",
      cardDetailedText:
        "64th Annual Congress took place in the Spanish capital, Madrid, alongside the FDI Congress. With participation of 300 delegates, the congress was one of the most attractive in the recent years due to the global fame of its venue city and its renowned soccer club Real Madrid CF. External Relations Committee (ExRelations) was approved by the General Assembly to be added as standing committee with announced scope to enhance and expand the network of IADS global health partners; e.g, IFMSA, WHSA, IPSF, IVSA, WHO, EDSA, APDSA, AfroDSA, ACFF, etc. Due to her outstanding experience and work in this field, Ms. Ave Pold was elected by the GA to be the first External Relations Chairperson of IADS. Burkina Faso (corresponding), League of Bucharest Dental Students (Full Local), Croatia (corresponding) and Argentina (Corresponding) were the newly accepted members. A new agreement had been signed with APDSA. ExCo attended the FDI General Assembly and the President conducted a speech about IADS and its activities in front of delegates of FDI NDAs.",
    },
    {
      title: "October 2017",
      cardTitle: "Committees Recruited",
      cardDetailedText:
        "Public Call was imposed on behalf of the Executive Committee for dental students worldwide to join the different task forces of IADS in order to enhance the quality and outcome of committees. Editor placed the call on October 18th, 2017 while November 18th, 2017 was remarked as the official enrollment day of all new committee members. One month had been lapsed between reviewing CVs, motivation letters and conducting Skype interviews - and the payout was worthy; the workforce of the organisation increased from 58 to 117 students!.",
    },
    {
      title: "March 2019",
      cardTitle: "New Constitution",
      cardDetailedText:
        "The 65th IADS Mid-Year Meeting was held in March 2019 in Strasbourg in France where the constitution was amended in accordance with Swiss Law so that the Executive Committee could proceed with the renewal of registration documents at the FDI Headquarters.",
    },
    {
      title: "August 2019",
      cardTitle: "External Relations",
      cardDetailedText:
        "The 66th Annual Meeting was held in August 2019 in Mahdia, Tunisia. During the General Assembly, reports of ExCo and Leadership work were presented. President Ave Pold and General Secretary Abanoub Riad represented IADS in various international partner meetings such as ADEE-ADEA joint meeting in Brescia, Italy; FDI Annual Congress, E-Learning Forum in San Francisco, USA; World Oral Health Assembly (WHA) as part of IFMSA youth delegation. During the WHA, IADS endorsed 6 policy recommendations alongside IFMSA, IPSF, IVSA and WCCS.",
    },
    {
      title: "February 2020",
      cardTitle: "New Governance Structure",
      cardDetailedText:
        "The 66th Mid-Year Meeting was held in February 2020 in Sarajevo, Bosnia & Herzegovina where amendments were accepted to IADS Vision and Mission and Governing bodies. Leadership positions such was External Relations, CREME, Fundraising were assimilated by ExCo positions of President and Treasurer and Regional Offices were dissolved; to be represented only by one position each. For ExCo positions the concept of Vice Presidents was introduced with General Secretary, Treasurer, Editor, IEO and ISO being Vice Presidents of Internal Affairs, Finances, Public Relations, Exchanges and Science & Research, respectively.",
    },
    {
      title: "June 2020",
      cardTitle: "From Congress to Quarantine",
      cardDetailedText:
        "On the 1st of June 2020, the ExCo and LOC of 67th IADS Annual Congress which was to be held in Saint Petersburg, Russia in August published the press release of their joint decision to cancel the congress; due to the emergent situation with COVID-19 pandemic and travel restrictions. This would mark the beginning of a transitional shift in IADS activity. The upcoming elections in August were held online following the new governance structure.",
    },
    {
      title: "September 2020",
      cardTitle: "New journal launch",
      cardDetailedText:
        "On the 11th of September, SCORE Committee launched the first issue of International Journal of Dental Students (IJDS) published on Dental Tribune International (DTI). This journal was a revival of DSRJ with a new concept of bringing students closer to scientific literature by presenting various topics of interest in an compact and easily comprehensible way.",
    },
    {
      title: "February 2021",
      cardTitle: "Rebranding",
      cardDetailedText:
        "Following several cancelled activities due to COVID-19 pandemic, including 67th IADS Mid-Year Meeting to have been held in Poland, the transition into fully online activities was imminent and thus the need to distinguish activities of each committee. Cohesive logos and color coding were introduced for each committee",
    },
    {
      title: "April 2021",
      cardTitle: "A Virtual Marathon",
      cardDetailedText:
        "With the Face-to-Face Exco meeting held in Istanbul, Turkey; members of the Executive Committee took the opportunity to bring to virtual life the cancelled MYM. The 67th IADS Mid-Year meeting was transformed into an online event unlike any other organized by IADS. Under the scientific leadership of VP of Science & Research, Huthaifa Abdulqader and PR campaign of VP of Public Relations, Silvi Domnori and collective effort of the appointed online organizing committee, IADS Workforce and Delegation, this virtual experience hosted 37 international speakers in a multilingual line-up including English, Spanish, Portuguese, French, Arabic, Turkish, Urdu and Thai; online General Assembly and online training sessions organized by Training Chairperson Lamis Elsheikh and several lucrative giveaways; over the course of 3 days.",
    },
    {
      title: "June 2021",
      cardTitle: "First published research article",
      cardDetailedText:
        'IADS\' first research conducted on a global level was published in an indexed journal: "Global Prevalence and Drivers of Dental Students\' COVID-19 Vaccine Hesitancy". This research aimed at providing valuable scientific data regarding dental students, young professionals and the field of dentistry and it was a joint effort of esteemed professionals Dr. Elham Kateeb, Dr. José João Mendes, Dr. Miroslav Klugar, Dr. Michal Koscik; IADS Alumni Dr. Abanoub Riad, IADS ExCo & Leadership Dr. Huthaifa Abdulqader, Dr. Mariana Morgado, Dr. Silvi Domnori, IADS Workforce and Delegates worldwide. This research was followed by another publication months later using the collected database; "Universal Predictors of Dental Students Attitudes towards COVID-19 Vaccination: Machine Learning-Based Approach".',
    },
    {
      title: "September 2021",
      cardTitle: "First Hybrid IADS Congress",
      cardDetailedText:
        "With the pandemic wave coming to a fall, vaccinations peaking and travel restrictions easing down, came the possibility to host a face-to-face IADS Annual Meeting. The 68th Annual Congress was held in Istanbul, Turkey organized under special vote of IADS delegation by the Executive Committee and ExCo-appointed local organizing committee with the help of IADS Alumni Dr. Sina Saygili. The General Assembly during this congress, including elections was held as a hybrid session; enabling the achievement of quorum by part of delegates attending online.",
    },
    {
      title: "February 2022",
      cardTitle: "Structural Updates",
      cardDetailedText:
        "During the General Assembly held at the 68th Mid-Year Meeting in Amman, Jordan, new positions were proposed and accepted by the delegates among which Regional Associates to aid Regional Ambassadors, Associate Vice President of Finances to aid the VP of Finances and Coordinator of International Cooperations (CIC) as part of Presidential Office. Other important decisions included proposal for a Code of Conduct and pertaining supervising taskforce, Triple Cs (Code of Conduct Committee), President-Elect position to be implemented from the next meeting into the upcoming year.",
    },
    {
      title: "August 2022",
      cardTitle: "First steps into the post-pandemic era",
      cardDetailedText:
        "The 69th Annual Congress was held in Almaty, Kazakhstan where during the General Assembly where elections were held and important decisions were made such as the approval of a strategic 3-year action plan to be further developed and executed by elected President Dr. Lamis Elsheikh with her leadership and governing bodies of following terms, cessation of hybrid meetings as a transition into fully face-to-face IADS congresses, the expansion of Prophylaxis Committee into Public Health Committee and nomination",
    },
    {
      title: "February 2023",
      cardTitle: "Constitutional Amendment",
      cardDetailedText:
        "The 70th Mid-Year Meeting was held in Kyrenia, Cyprus for the first time after the pandemic as a fully face-to-face congress with a rich scientific program. During the General Assembly, an important constitutional amendment was made in respect to Swiss Law; such that Executive Committee shall be composed of individual members of different nationalities each. Also for the first time, in accordance with the previously accepted proposals, elections were held for the President-Elect position and Dr. Lamis Elsheikh was elected for the position; which would translate in the extending of her tenure as President into 2023/2024 term.",
    },
    // {
    //   title: "",
    //   cardTitle: "",
    //   cardDetailedText: "",
    // },
  ];

  return (
    <div className="about-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">About Us</h1>
        </div>
      </div>
      <div className="vision">
        <div className="viz container">
          <h1 className="title-2nd" style={{ marginRight: "75px" }}>
            Our Vision
          </h1>
          <img className="arw" src={Arrow} style={{ marginRight: "85px" }} />
          <p className="desc" style={{ color: "white" }}>
            Young dental students from all over the world united under the
            auspices of the IADS to gain knowledge, skills and values that are
            necessary to become highly qualified professionals and local,
            national or international leaders in dentistry and public health
            care.{" "}
          </p>
        </div>
      </div>

      <div className="mission" style={{ paddingTop: "60px" }}>
        <h1 className="title" style={{ marginBottom: "100px" }}>
          Our Mission
        </h1>
        <div className="container mission-items">
          <div className="item">
            <img src={m1} />
            <p className="desc">
              To promote international contact and co-operation between dental
              students and dental student organisations throughout the world.
            </p>
          </div>
          <div className="item">
            <img src={m2} />
            <p className="desc">
              To establish and encourage international programs which will
              stimulate the interest of dental students in the advancement of
              the science and art of dentistry.
            </p>
          </div>
          <div className="item">
            <img src={m3} />
            <p className="desc">
              Independence, implying the non-submission of the Association to
              political parties, State or religious organisations, or any other
              organisations.
            </p>
          </div>
          <div className="item">
            <img src={m4} />
            <p className="desc">
              Democracy, implying the respect for majority decisions, taken in
              accordance with the Constitution.
            </p>
          </div>
          <div className="item">
            <img src={m5} />
            <p className="desc">To improve community dentistry globally.</p>
          </div>
          <div className="item">
            <img src={m6} />
            <p className="desc">
              To promote interprofessional and interdisciplinary collaboration
              in healthcare.
            </p>
          </div>
        </div>
      </div>

      <div id="container-ed27f781b8741972e2f09bb427cbb5a7"></div>

      <div className="constBylaws container">
        <div className="const">
          <h1 className="title" style={{ marginBottom: "20px" }}>
            Constitutions
          </h1>
          <a
            href="https://drive.google.com/file/d/1q97JsZcx5XwV-1C7rCGt3_no2TLA74ZN/view"
            className="read-btn"
          >
            Read Now
          </a>
        </div>
        <div className="bylaws">
          <div className="title" style={{ marginBottom: "20px" }}>
            ByLaws
          </div>
          <a
            href="https://drive.google.com/file/d/1CFA4Evj51Vnp_aWVclG1TdQWkw2CIiXV/view?usp=sharing"
            className="read-btn"
          >
            Read Now
          </a>
        </div>
      </div>

      <div className="container story">
        <h1 className="title">IADS Story</h1>
        <p
          className="desc"
          style={{ marginTop: "30px", marginBottom: "65px", width: "80%" }}
        >
          From Paris to the entire globe, from as few as four executive
          committee members in 1951 to more than 200,000 member students
          worldwide today and from 6 European founding countries to around 60
          countries based in all regions of world – this is the story of
          International Association of Dental Students (IADS).
        </p>
        <div className="launch-flag">LAUNCH</div>
        <div className="desktop-chrono">
          <Chrono
            items={items}
            cardHeight="27.2rem"
            mode="VERTICAL_ALTERNATING"
            fontSizes={{
              cardSubtitle: "0.85rem",
              cardText: "0.8rem",
              cardTitle: "1.25rem",
              title: "1rem",
              cardDetailedText: "0.9375rem",
            }}
            disableAutoScrollOnClick={true}
            activeItemIndex="100"
            hideControls
          />
        </div>
        <div className="mobile-chrono">
          <Chrono
            style={{ display: "none" }}
            items={items}
            cardHeight="27.2rem"
            mode="VERTICAL"
            fontSizes={{
              cardSubtitle: "0.85rem",
              cardText: "0.8rem",
              cardTitle: "1.25rem",
              title: "1rem",
              cardDetailedText: "0.9375rem",
            }}
            disableAutoScrollOnClick={true}
            activeItemIndex="100"
            hideControls
          />
        </div>
      </div>
    </div>
  );
};

export default About;
