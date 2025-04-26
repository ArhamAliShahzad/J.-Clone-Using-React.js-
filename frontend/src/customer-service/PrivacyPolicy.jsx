import React from 'react'

const Section = ({ title, children }) => (
  <section className="mb-8 w-full px-4">
    <h3 className="text-xl font-bold text-center my-4 text-gray-800">{title}</h3>
    <div className="text-gray-700 text-justify space-y-2">{children}</div>
  </section>
)

const PrivacyPolicy = () => {
  return (
    <>
      <nav className="text-sm py-4 px-6 bg-gray-100">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li><a href="/" className="hover:text-gray-900">HOME</a></li>
          <li>{'>'}</li>
          <li className="font-semibold text-gray-900">Privacy Policy</li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto py-10 px-4">
        <header className="mb-10 text-center">
          {/* <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1> */}
        </header>

        <Section title="Privacy Policy">
          <p>Your privacy is important to us. It is Junaid Jamshed (Pvt.) Ltd's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
        </Section>

        <Section title="The Information We May Collect">
          <p>We may collect and process the following types of personal information:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personal contact details such as name, address, email, etc.</li>
            <li>Details of purchases and transactions</li>
            <li>Information submitted via surveys</li>
            <li>Records of communication via various channels</li>
            <li>Browsing history and interaction data</li>
            <li>Device information and IP address</li>
          </ul>
        </Section>

        <Section title="How Your Data Is Collected">
          <p>We collect data when you interact with our site (register, contact support, etc.) and automatically through cookies to enhance user experience.</p>
        </Section>

        <Section title="Use of Data & Information">
          <p>We use your data to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personalize your experience</li>
            <li>Process orders, payments, refunds</li>
            <li>Improve our website and services</li>
            <li>Send promotional communications</li>
            <li>Maintain records and legal compliance</li>
          </ul>
        </Section>

        <Section title="How We Secure Your Data">
          <p>We use SSL encryption, access controls, and do not store payment details directly on our website.</p>
        </Section>

        <Section title="Who We May Share Your Data With">
          <p>We may share your data with:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Service providers (IT, hosting, payment processing, etc.)</li>
            <li>Sponsors of competitions</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </Section>

        <Section title="Your Rights in Connection with Your Data">
          <p><strong>Choice and Consent:</strong> You control what you share. Under 16s need guardian permission.</p>
          <p><strong>Restrict/Correct:</strong> You can request to limit or correct your personal data.</p>
          <p><strong>Unsubscribe:</strong> You can opt-out of marketing at any time.</p>
        </Section>

        <Section title="Changes to This Policy">
          <p>We may update our policy and notify you on the website. Significant changes will ask for your re-consent.</p>
        </Section>

        <Section title="Contact Details">
          <p>For any queries, email us at <a href="mailto:eshop@junaidjamshed.com" className="text-blue-600 hover:underline">eshop@junaidjamshed.com</a></p>
        </Section>
      </main>
    </>
  )
}

export default PrivacyPolicy
