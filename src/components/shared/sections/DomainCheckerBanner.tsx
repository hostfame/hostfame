'use client';

import { useState } from 'react';

type Popular = { tld: string; price: string };

const data = {
  title: 'Find Best Unique Domains Checker!',
  subtitle:
    'Not sure what name to choose? Start here and check instantly.',
  placeholder: 'find your domain name',
  button: 'Search',
  tlds: ['.com', '.net', '.info', '.org', '.biz'],
  popular: [
    { tld: '.com', price: '$6.99' },
    { tld: '.net', price: '$15.99' },
    { tld: '.info', price: '$3.99' },
    { tld: '.org', price: '$6.99' },
    { tld: '.biz', price: '$6.99' },
  ] as Popular[],
};

export default function DomainCheckerBanner() {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState(data.tlds[0]);

  return (
    <section className=" bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center space-y-10">
          {/* Title + Subtitle */}
          <section className=' space-y-3'>
            <h1 className="text-3xl font-bold sm:text-5xl">{data.title}</h1>
            <p className="text-white/80">{data.subtitle}</p>
          </section>

          {/* Search box */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder={data.placeholder}
              className="w-full h-12 sm:w-96 rounded-l-md rounded-r-md md:rounded-r-none bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none "
            />
            <section className=' flex justify-center items-center h-12'>
              <select
                value={tld}
                onChange={(e) => setTld(e.target.value)}
                className="w-20 h-full rounded-l-md md:rounded-l-none bg-gray-200 border border-gray-200 text-gray-900 focus:outline-none "
              >
                {data.tlds.map((ext) => (
                  <option key={ext}>{ext}</option>
                ))}
              </select>
              <button
                type="button"
                className="w-32 h-full rounded-r-md bg-gradient-to-t from-primary-extralight to-primary-dark font-semibold text-white focus:outline-none cursor-pointer"
              >
                {data.button}
              </button>
            </section>
          </div>

          {/* Popular domains */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="text-white/80 font-semibold">Popular Domain: </div>
            {data.popular.map((item) => (
              <div
                key={item.tld}
                className=" w-fit flex gap-2 justify-center items-center flex-nowrap rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur"
              >
                <div className="font-medium">{item.tld}</div>{' '}
                <div className="text-white/80">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}