import React, { useEffect } from 'react';
import LegalModal from './LegalModal';
import { useState }from 'react';

// 'Privacy' ya 'Terms'

const termsContent = `Terms & Conditions – DevKrafto Solutions

Effective Date: 01/05/2026

These Terms govern your use of services provided by DevKrafto Solutions.

1. Legal Entity

DevKrafto Solutions operates as an independent service provider based in India. All agreements are between the client and DevKrafto Solutions.

2. Services

We provide:

Website Development
Mobile App Development
AI Solutions

Services are delivered strictly as per agreed scope.

3. Project Scope & Changes
Any work outside agreed scope will be billed additionally
Scope changes may impact timelines and cost
4. Payments
Advance payment is mandatory
Milestone-based payments may apply
Delayed payments may result in suspension of services
5. No Refund Policy
Payments made are non-refundable once work has started
Exceptions may be granted at our discretion
6. Intellectual Property
Ownership transfers to client only after full payment
DevKrafto retains right to showcase work in portfolio
7. Client Responsibilities

Client must:

Provide accurate requirements
Give timely feedback
Ensure legality of provided content
8. Delivery & Timelines
Timelines are estimates, not guarantees
Delays due to client or third parties are not our responsibility
9. Third-Party Services

We are not responsible for:

Hosting failures
API issues
Platform outages (e.g., cloud, payment gateways)
10. AI Services Disclaimer
AI outputs may contain errors
Final decisions must be reviewed by the client
11. Limitation of Liability

Our total liability is limited to:

The total amount paid by the client for the service

We are not liable for:

Indirect damages
Business losses
Data loss
12. Termination

We may terminate services if:

Terms are violated
Payments are not made
13. Indemnification

Client agrees to indemnify DevKrafto Solutions against:

Legal claims arising from client content or misuse
14. Force Majeure

We are not liable for delays caused by:

Natural disasters
Internet outages
Government actions
15. Governing Law & Jurisdiction

These terms are governed by Indian law.

Jurisdiction: Courts of Delhi, India

16. Updates

We may update these terms anytime without notice.

17. Contact

DevKrafto Solutions
Email: devkraftosolutions@gmail.com
`;
const privacyContent = `Privacy Policy – DevKrafto Solutions

Effective Date: 1/05/2026

DevKrafto Solutions we operates as a digital services provider based in India. By using our services, you agree to this Privacy Policy.

1. Scope

This policy applies to all users, clients, and visitors interacting with our website, applications, and services.

2. Information We Collect

We may collect:

Identity Data: Name, email, phone number
Business Data: Company details, project requirements
Technical Data: IP address, device type, browser
Usage Data: Interaction logs, analytics data
Client Project Data: Files, content, credentials shared for development
3. Legal Basis (DPDP Compliance)

We process data based on:

User consent
Contractual necessity
Legal obligations
4. Purpose of Data Use
Deliver contracted services
Improve product performance
Provide support & communication
Ensure system security
Comply with applicable laws
5. AI Services & Data Protection
Client data is not used for training public AI models without explicit consent
All AI outputs are generated on a best-effort basis
Sensitive data should not be shared unless necessary
6. Data Sharing

We may share data with:

Cloud providers (hosting, storage)
Analytics tools
Payment gateways

We ensure reasonable safeguards, but third-party policies apply.

7. Data Retention
Data is retained only as long as required
Clients may request deletion via email
Backup data may persist temporarily
8. Data Security

We implement industry-standard safeguards. However:

We do not guarantee absolute security and are not liable for unauthorized access beyond reasonable control.

9. Data Breach Handling

In case of a data breach:

We will take reasonable steps to mitigate impact
Notify affected users where legally required
10. User Rights

Under applicable law, users may:

Access data
Correct data
Request deletion
Withdraw consent
11. Cookies

We use cookies for analytics and performance optimization.

12. International Transfers

Data may be processed outside India via third-party services.

13. Limitation of Liability

DevKrafto Solutions shall not be liable for:

Indirect damages
Loss of business, profits, or data
14. Updates

We may update this policy without prior notice.

15. Contact

DevKrafto Solutions
Email: devkraftosolutions@gmail.com
Location: Greater Noida, Knowledge park-2, U.P 201301, India`;

const Footer = () => {

  const [legalType, setLegalType] = useState(null); 
 
  return (
    <><footer className="bg-transparent border-t border-white/5 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-end">

        {/* Left Side: Brand & Copyright */}
        <div>
          <div className="text-white font-black text-4xl font-['Space_Grotesk'] tracking-tighter mb-8 uppercase group cursor-default">
            Dev<span className="text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-500">Krafto</span>
          </div>
          <div className="text-gray-600 font-['Space_Grotesk'] text-[10px] tracking-[0.3em] uppercase">
            © 2026 DEVKRAFTO. BEYOND THE GRID.
          </div>
        </div>

        {/* Right Side: Links & Manifesto */}
        <div className="mt-12 md:mt-0 flex flex-col md:items-end gap-6">
          {/* Footer ke andar ka section */}
          <div className="flex flex-wrap gap-8">
            {['Privacy', 'Terms', 'Instagram', 'LinkedIn'].map((link) => {
              const isLegal = link === 'Privacy' || link === 'Terms';
              const hrefs = {
                Instagram: "https://www.instagram.com/devkrafto/",
                LinkedIn: "https://www.linkedin.com/company/devkrafto-solutions/"
              };

              return (
                <button
                  key={link}
                  onClick={() => isLegal ? setLegalType(link) : window.open(hrefs[link], '_blank')}
                  className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-gray-500 hover:text-purple-400 transition-colors duration-300 outline-none"
                >
                  {link}
                </button>
              );
            })}
          </div>

          <div className="text-gray-600 text-[9px] font-['Space_Grotesk'] uppercase tracking-[0.2em] max-w-sm md:text-right leading-relaxed">
            Synthesized for performance. Engineered for dominance.
            <br />
            DevKrafto remains the architect of high-utility digital systems.
          </div>
        </div>

      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
    </footer><LegalModal
        type={legalType}
        isOpen={!!legalType}
        onClose={() => setLegalType(null)}
        content={legalType === 'Privacy' ? privacyContent : termsContent} /></>
  );
  
};

export default Footer;
