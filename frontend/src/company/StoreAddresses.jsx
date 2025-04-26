import React from 'react';
import { ChevronRightIcon, MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const StoreAddresses = () => {
  // Domestic outlets data
  const domesticOutlets = [
    {
      region: 'Karachi',
      addresses: [
        'Lower Ground, Dolmen Mall, Tariq Road, Karachi. Tel: 0213-4321066-77, Cell: 0321-3898237',
        'Second Floor, Dolmen Mall, Tariq Road, Karachi. Tel: 0213-4321403-2, Cell: 0321-3898883',
        'Shop # F-21 & F22, 1st Floor Dolmen Mall, Clifton, Karachi. Tel: 0213-5295998, Cell: 0321-8201749',
        'Shop # F-5, First Floor, Dolmen Mall, Hyderi, Karachi. Tel: 0213-6724238, Cell: 0321-3898884',
        'Hyderi Five Star, Block H, North Nazimabad, Karachi. Tel: 0213-6643967, Cell: 0321-3898235',
        'Shop # Z-10, 4-A, Station Shopping Complex, Malir Cantt., Karachi. Tel: 0213-4902831-2, Cell: 0321-9201846',
        'Akbar Paradise, Block 10-A, Gulshan-e-Iqbal, opposite Aladdin Park, Karachi. Tel: 0213-4800236-5, Cell: 0321-3898238',
        'Kurta Gali, Shop # 615 & 616/1CC/2, Off Tariq Road, Karachi. Tel: 0213-4382887-8, Cell: 0321-3898239',
        'Ground Floor, Metro, Star Gate, Sharah-e-Faisal, Karachi. Tel: 0213-4580923-2, Cell: 0321-3898882',
        'Shop # 2F & 3F Mall Square, Adj. Zamzama Mall, Karachi. Tel: 0213-5295089-7, Cell: 0321-8201566',
        'Almas Arcade Main, Bahadurabad, Karachi, Cell: 0321-8202682',
        'Shop # 18, Second Floor, Atrium Mall, Saddar, Karachi. Tel: 0213-5643625-6, Cell: 0321-2124789',
        'Third Floor, Ocean Mall, Clifton, Karachi Tel: 0213-5140880-1, Cell: 0322-8217787',
        'First Floor Lucky One Mall, Cell: 03212929686',
        'Plot # 110 Block 3 Gulshan KDA Market near Siddiq e Akbar masjid, Cell: 0320-1811792',
        'Shop # 7 Rainbow Twin Tower Scheme 33 Gulzar e Hijri Karachi Tel: 0213-36411233 Cell: 0321-8201133',
        'Shops No. FF-05, First Floor, Square One Mall, Stadium Road, Near Askari IV, Block-10, Gulshan-E-Iqbal, Karachi, Cell: 0326-8065610'
      ]
    },
    {
      region: 'Hyderabad',
      addresses: [
        'Sadar Bazar, Cantonment, Hyderabad. Tel: 022-2781395, Cell: 0321-8210021',
        'Garrison Complex Cantt Hyderabad. Tel: 022-2787442-3, Cell: 0321-3958689',
        'Ground Floor, Boulevard Mall, Auto Bhan Road, Hyderabad. Tel:022-3413132-33, Cell: 0321-8210456'
      ]
    },
    // Add all other domestic regions similarly...
    {
      region: 'Lahore',
      addresses: [
        'Joy Land, Fortress Stadium, Lahore Cantt, Lahore. Tel: 0423-6623060, Cell: 0321-3958690',
        'Lower Ground, Fortress Square Shopping Mall, Lahore. Tel: 0423-37341525, Cell:0321-4146664',
        'Plot number 6, Gulshan Block, Allama Iqbal Town, Lahore. Tel: 0423-7809702 Cell: 0321-4146665',
        'Ground Floor, Park Lane Tower, Lahore, Cell: 0321-2470505',
        '329, Z-Block, DHA, Lahore. Cell: 0321-2077751',
        'Main MM Alam Road, Gulberg 3, Lahore. Tel: 0423-5751174, Cell: 0321-4146662',
        'Next to Central Mall, Model Town Link Road, Lahore. Tel: 042-35160229-8, Cell: 0321-4146663',
        'Shop # 2, Plot # 191, Iqbal Avenue, Lahore. Tel: 042-35229457-6, Cell:0321-8203178',
        '1st Floor, Packages Mall, Shahrah-e-Roomi, Lahore, Cell:0321-2077755',
        'First Floor, Emporium Mall Lahore, Cell: 0321 4458915'
      ]
    },
    {
      region: 'Islamabad',
      addresses: [
        '2nd Floor, Centaurus Mall, Islamabad. Tel: 051-2701142, Cell: 0321-8203477',
        'First Floor, Giga Mall, WTC, Islamabad. Cell: 0321-8201418',
        'Shalimar Plaza, Sector F-10 Markaz, Islamabad. Tel: 051-2809628, Cell: 0323-5678191',
        'Jinnah Super Market, F-7 Markaz, Islamabad. Tel: 051-2650440, Cell: 0321-5150253',
        'B-2 Alam Stores Super Market, F-6 Markaz, Islamabad. Tel: 051-2829383, Cell: 0321-5150252',
        'Madina Arcade, Main Road PWD, Islamabad. Tel: 051-5421135, Cell: 0320-1210561'
      ]
    }
  ];

  // International outlets data
  const internationalOutlets = [
    {
      country: 'UAE',
      flag: '🇦🇪',
      addresses: [
        'Shop # G/14, Al-Fahidi Street, Juman Al Majid Building, Meena Bazaar. Tel: 00971-4-351-3453',
        'Shop # 6 & 7, Al Arouba Street, Zamzam Textile Market, Sharjah. Tel: 00971-6-569-6010',
        'Shop # 151, Al Wahda Mall, Abu Dhabi Tel: 00971-2-491-3306'
      ]
    },
    {
      country: 'UK',
      flag: '🇬🇧',
      addresses: [
        'Shearbridge Road, Bradford West Yorkshire BD7 INP. Tel # 01274 505055',
        'K6A, Petergate Mall, Broadway Shopping Centre, Bradford BD11US Tel # 01274 505289',
        '117 Ladypool Road, Sparkbrook, Birmingham Tel # 01274 505065',
        '34-36 Alum Rock Road, Alum Rock Birmingham, B81JB Tel # 012474 299524',
        '199 Ilford Lane, Ilford London, 1G1 2RU Tel # 01274 505057',
        '208 Greenstreet, Upton Park, London, E7 8LE Tel # 01274-505-051',
        'The Broadway, Southhall, London, IG1 1JR Tel # 01274 087498',
        '215 Wilmslow Road, Manchester, M14 5AG Tel # 01274 505054',
        'Unit 3, Cheetham Hill Shopping Centre, 40 Bury Old Road, Cheetham Hill, Manchester, M8 5EL Tel # 01274 505288',
        '64 Darnley Street, Pollolshields, Glasgow, G41 2SE Tel # 01274 505288',
        '114 Bury Park Road, Luton, LUI 1HE Tel # 01274033077'
      ]
    },
    {
      country: 'USA',
      flag: '🇺🇸',
      addresses: [
        '3829 W. Spring Creek Piano, Suite 160 B Piano, Texas 75023, United States. Tel: (469) 966-5368',
        '18720 Pioneer Boulevard, Artesia, CA 90701 United States.Tel : 1-562-278-2920',
        '5914 Hillcroft St Ste B-1 Houston TX 77036 Tel: +1 713-781-3278',
        '2343 West Devon Ave Chicago, Illinois 60659 Tel: +1 773-381-9030',
        '2421 US Highway 1 Unit 3 North Brunswick NJ 08902 United States. Tel: 732 940 6000',
        '6050 Singleton Road, Norcross, Atlanta the Georgia United States. Tel: 770 849 0001'
      ]
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      addresses: [
        '77 Matheson Blvd East, Ontario L4Z 2Y5, Mississauga, Ontario L4Z 2Y5. Tel: 1 888 536 8414',
        'Bay1-2010 30 AVE, Calgary AB T2E 7k9, Canada. Tel: 1888 536 8414',
        '9288 120 St Surrey, British Columbia V3V 4B8, Vancouver. Tel: 1888 536 8414',
        '2060 Ellesmere Rd, Scarborough, ON M1H 2V6 Tel: 1888 536 8414'
      ]
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      addresses: [
        '2/800 Sydney Road, Brunswick 3056, Melbourne VIC Australia. Tel: 0309386 8625',
        'Shop #01, 29 Hunter Street, Parramatta 2150, Sydney, Australia. Tel: 0420 728 458'
      ]
    }
  ];

  // F&C Outlets data
  const fcOutlets = [
    {
      type: 'F&C OUTLETS',
      addresses: [
        'Ground Floor, Opp Hyperstar, Karachi, Cell: 0321-8202712',
        'Lower Ground Floor Lucky One Mall, Karachi Cell: 0321-820243'
      ]
    },
    {
      type: 'F&C KIOSK',
      addresses: [
        'Ground Floor, Opp Hyperstar, Karachi, Cell: 0321-8203035',
        'Dolmen Mall, Hyderi, Karachi. Tel: 0213-6724238, Cell: 0321-3898884',
        'Ground Floor Atrium Mall, Saddar, Karachi, Cell: 0321-8204106',
        'Ground Floor Lucky One Mall, Karachi Cell: 0321-8201602',
        'First Floor Neuplex Cinema, Phase 8 DHA, Karachi, Cell:0321-3898234',
        'Ground Floor, The Forum Mall, Karachi, Cell:0321-8204107',
        'Ground Floor, Boulevard Mall, Auto Bhan Road, Hyderabad, Cell: 0321-8210456',
        'Ground, Floor, Fortress Square Shopping Mall, Lahore, Cell:0321-8200356',
        'Ground Floor, Amanah Mall, Model Town, Lahore, Cell:0321-8201073',
        '2nd Floor, Packages Mall, Shahrah-e-Roomi, Lahore, Cell:0321-2077755',
        'G K-7 Ground Floor, Emporium Mall, Lahore, Cell: 0321-8201507',
        'Kings Mall, Gujranwala, Cell: 0321-8210045',
        'Ground Floor, United Mall, 74 Abdali Road, Multan, Cell: 0321-5768998',
        'First Floor, Centaurus Mall, Islamabad. Tel: 051-2701142',
        'Ground Floor Safa Gold Mall, Islamabad.Tel: 051-2656805',
        'Ground Floor, Giga Mall, WTC, Islamabad. Tel: 051-2725603',
        'Ground Floor, 100 Aziz Bhatti Shaheed Road, Sialkot Cantt. Cell: 0321-8286760',
        'Ground Floor, New City Arcade Mall, Phase 2, Commercial Avenue M40 Motorway, Wah Cantt. Tel: 051-4624062, Cell: 0321 9473317'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                HOME
              </a>
            </li>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            <li className="text-sm font-medium text-gray-900">Store Locator</li>
          </ol>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Store Locations</h1>
          <p className="text-gray-600 text-lg">
            Find your nearest J. outlet across Pakistan and worldwide
          </p>
        </header>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search stores</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search by city or location"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="country" className="sr-only">Country</label>
              <select
                id="country"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              >
                <option>All Countries</option>
                <option>Pakistan</option>
                <option>UAE</option>
                <option>UK</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Find Stores
            </button>
          </div>
        </div>

        {/* Domestic Stores Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPinIcon className="h-6 w-6 text-red-500 mr-2" />
            Pakistan Stores
          </h2>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            {domesticOutlets.map((location, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">{location.region}</h3>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-4">
                    {location.addresses.map((address, addrIndex) => (
                      <li key={addrIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5">
                          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600">{address}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International Stores Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GlobeAltIcon className="h-6 w-6 text-blue-500 mr-2" />
            International Stores
          </h2>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            {internationalOutlets.map((country, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <span className="mr-2">{country.flag}</span>
                    {country.country}
                  </h3>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-4">
                    {country.addresses.map((address, addrIndex) => (
                      <li key={addrIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5">
                          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600">{address}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* F&C Stores Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fashion & Clothing Outlets</h2>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            {fcOutlets.map((outlet, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">{outlet.type}</h3>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-4">
                    {outlet.addresses.map((address, addrIndex) => (
                      <li key={addrIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5">
                          <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600">{address}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Junaid Jamshed (Pvt.) Ltd. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Store information is subject to change. Please call ahead to confirm hours and availability.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreAddresses;