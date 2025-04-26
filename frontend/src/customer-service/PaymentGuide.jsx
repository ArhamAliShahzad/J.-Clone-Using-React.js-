import React from 'react'

const PaymentGuide = () => {
  return (
    <>
      {/* Wrap the navigation inside a header for better semantics */}
      <header>
        <nav className="text-sm py-4 px-6 bg-gray-50" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
            <li>&gt;</li>
            <li className="font-semibold text-gray-900">Payment Guide</li>
          </ol>
          {/* Kept the same heading text but moved it to a proper heading element within header */}
          <h1 className='flex justify-center items-center text-2xl font-bold'>PAYMENT GUIDELINE</h1>
        </nav>
      </header>

      {/* Main content wrapped in a main tag and enhanced with responsive classes */}
      <main className="m-3">
        <p className='my-3'>We aim to provide a safe and secure shopping experience. However, in some instances, we would be needing your payment details and CNIC to ensure that your credentials are not being misused and the details are used by the real owner.</p>
        <p>Following is the procedure:</p>
        <ul className='mx-5'>
          <li className="list-disc pl-5 my-4 space-y-2">A picture of your CNIC (Front and back)
          </li>
          <li className="list-disc pl-5 my-4 space-y-2">Picture of your Credit/Debit card with the following details only:
          </li>
          <li className="list-disc pl-5 my-4 space-y-2">Card holder's name
          </li>
          <li className="list-disc pl-5 my-4 space-y-2">First 6 digits of the card number
          </li>
          <li className="list-disc pl-5 my-4 space-y-2">Last 4 digits of the card number
          </li>
        </ul>
        <p>We at J. never compromise on the security of the personal details of customers.</p>

        {/* Enhanced image container: added alt text and extra styling without removing the original line */}
        <div className="img flex justify-center items-center my-3">
          <img
            src="https://www.junaidjamshed.com/media/logo/cc2.png"
            alt="Secure Payment Logo"
            className="w-auto h-auto rounded shadow"
          />
        </div>
      </main>
    </>
  )
}

export default PaymentGuide
