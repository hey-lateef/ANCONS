import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="bg-gray-50 pt-10 pb-10 mt-10">
      <h2 className="text-center text-purple-500 text-4xl font-bold mb-4">FREE ADMISSION PROCESSING & VISA COUNSELING</h2>
      <h3 className="text-center text-purple-500 text-2xl mb-8">JAN '25</h3>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* University Card */}
          {[
            {
              name: "Florida Institute of Technology",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/FIT.jpeg/:/cr=t:12.42%25,l:0%25,w:100%25,h:75.16%25/rs=w:600,h:300,cg=true/qt=q:35",
              programs: "Aerospace Engineering, Biochemistry, Biomedical Engineering, Biotechnology, Cell & Molecular Biology, Chemical Engineering, Chemistry, Civil Engineering, Computer Engineering, Computer Information Systems, Computer Science, Conservation Technology, Cybersecurity, Electrical Engineering, Engineering Management, Environmental Science, Information Technology, Management Information Systems, Marine Biology, Mechanical Engineering, Ocean Engineering, Software Engineering, Systems Engineering."
            },
            {
              name: "Florida International University",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/FIU.jpeg/:/cr=t:14.91%25,l:0%25,w:100%25,h:70.18%25/rs=w:600,h:300,cg=true",
              programs: "MBA in Business Analytics, MBA Healthcare, MBA Cybersecurity, Master of Accounting, Master of International Business, MS in Finance, MS Health Informatics & Analytics, MS in HRM, MS in Information Systems, MS in International Real Estate, MS in Logistics & Supply Chain Management, MS in Marketing."
            },
            {
              name: "Fairleigh Dickinson University",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/FDU.jpeg/:/rs=w:600,h:300,cg=true,m/cr=w:600,h:300/qt=q:35",
              programs: "Masters in: Administrative Science, Animation, Biology, Business & Accounting, Chemistry, Computer Science, Criminology and Criminal Justice, Cybersecurity, Engineering and Technology, Film, Health Sciences, Hospitality and Tourism, Nursing, Occupational Therapy, Pharmacy, Physician Assistant, Sports Management."
            },
            {
              name: "University of Bridgeport",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/UBP.jpeg/:/cr=t:0%25,l:13.14%25,w:73.71%25,h:100%25/rs=w:600,h:300,cg=true",
              programs: "Masters in: Acupuncture, Analytics and Systems, Artificial Intelligence, Biology, Biomedical Engineering, Business Administration, Chiropractic, Computer Science & Engineering, Criminal Justice, Dental Hygiene, Education Leadership, Electrical Engineering, Finance, Health Sciences, Medical Engineering, Nursing MSN, Nutrition, Physician Assistant, Public Health, Technology Management."
            },
            {
              name: "University of New Haven",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/UNH.jpeg/:/cr=t:0%25,l:20.94%25,w:58.12%25,h:100%25/rs=w:600,h:300,cg=true/qt=q:35",
              programs: "MS Cellular & Molecular Biology, Chemistry, Environmental Science, Industrial Psychology, Information Science, Marine Policy and Management, Accounting, Business Analytics, Financial Analytics, Human Resources, Information Science, MBA, Sports Management, Healthcare Administration, Health Sciences, Medical Laboratory Science, Public Health, Biomedical Engineering, Chemistry, Civil Engineering, Computer Science, Construction Management, Cybersecurity & Networks, Data Science, Electrical Engineering, Environmental Engineering, Industrial Engineering, Information Science, Mechanical Engineering."
            },
            {
              name: "William Paterson University",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/WPU.jpeg/:/cr=t:0%25,l:19.29%25,w:61.43%25,h:100%25/rs=w:600,h:300,cg=true/qt=q:35",
              programs: "MS Athletic Training, Biotechnology, Clinical and Counseling Psychology, Doctor of Nursing Practice (DNP), Materials Chemistry, MBA, Nursing Administration (MSN), Nursing - Adult Gerontology (MSN), Nursing - Family Nurse Practitioner (MSN), MEd School Counseling, MEd Special Education, MFA."
            },
            {
              name: "Nova Southeastern University",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/NSU.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg=true",
              programs: "MS Anesthesia, Biological Sciences, Biomedical Sciences, Clinical Vision Research, Computer Science, Counseling, Criminal Justice, Cyber Defense, Cybersecurity Management, Data Analytics and Artificial Intelligence, Dental Medicine, Digital Marketing, Environmental Sciences, Finance, Forensic Psychology, Integrated Medical Sciences, Health Informatics, Health Science, Information Systems, Information Technology, Marine Science, Medical Education, Medicinal Chemistry, Nursing (MSN), Nutrition, Pharmaceutical Affairs, Pharmaceutical Sciences, Physician Assistant, Public Administration, Public Health, Sports Science, Technology Management."
            },
            {
              name: "Wichita State University",
              img: "https://img1.wsimg.com/isteam/ip/e5844ea6-50c0-4b93-96e3-48d60057591b/Findlay.jpeg/:/cr=t:0%25,l:11.99%25,w:76.02%25,h:100%25/rs=w:600,h:300,cg=true/qt=q:35",
              programs: "Masters in: Aerospace Engineering, Biomedical Engineering, Computer Science, Computing, Data Science, Electrical and Computer Engineering, Engineering Management, Industrial Engineering, Materials Engineering, Mechanical Engineering."
            },
          ].map((university, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-purple-100"
            >
              <img
                src={university.img}
                alt={`${university.name} building`}
                className="mb-4 w-full h-48 object-cover rounded-md shadow"
              />
              <h3 className="text-lg font-bold text-purple-500 mb-2">{university.name}</h3>
              <p className="text-sm text-gray-600">
                <strong>Academic Programs:</strong> {university.programs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
