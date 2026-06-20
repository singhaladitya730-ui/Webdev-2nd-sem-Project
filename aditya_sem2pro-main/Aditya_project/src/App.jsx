import React from 'react';

function App() {
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <nav className="flex justify-between items-center py-8 sticky top-0 bg-white z-[1000]">
          <div className="text-[28px] font-bold flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor">
              <path d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5" />
            </svg>
            WizardZ
          </div>
          <div className="flex items-center gap-[30px]">
            <a href="#about" className="text-[18px] text-black-custom">About us</a>
            <a href="#services" className="text-[18px] text-black-custom">Services</a>
            <a href="#use-cases" className="text-[18px] text-black-custom">Use Cases</a>
            <a href="#pricing" className="text-[18px] text-black-custom">Pricing</a>
            <a href="#blog" className="text-[18px] text-black-custom">Blog</a>
            <a href="#contact" className="btn-quote">Request a quote</a>
          </div>
        </nav>

        <section id="about" className="flex items-center py-10 pb-20">
          <div className="flex-[1.2]">
            <h1 className="text-[56px] mb-6 font-bold leading-[1.1]">Navigating the digital landscape for success</h1>
            <p className="mb-9 text-[19px] text-[#333] max-w-[90%]">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <a href="#contact" className="btn-consult">Book a consultation</a>
          </div>
          <div className="flex-1 flex justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300">
              <circle cx="200" cy="150" r="100" fill="#B9FF66" opacity="0.2" />
              <path d="M150,150 L250,100 L250,200 Z" fill="#191A23" />
              <rect x="250" y="120" width="50" height="60" fill="#B9FF66" />
              <circle cx="275" cy="150" r="10" fill="#191A23" />
            </svg>
          </div>
        </section>

        <div className="flex justify-between py-10 grayscale opacity-70">
          <span>amazon</span>
          <span>Dribbble</span>
          <span>HubSpot</span>
          <span>Notion</span>
          <span>NETFLIX</span>
          <span>zoom</span>
        </div>

        <section id="services" className="py-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="title-bg">Services</div>
            <p className="max-w-[600px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-[60px]">
            <div className="border border-black-custom border-b-[6px] rounded-[40px] p-[50px] flex justify-between items-center bg-gray-custom">
              <div>
                <span className="card-title-bg">Search engine</span><br />
                <span className="card-title-bg">optimization</span>
                <a href="#" className="flex items-center gap-[15px] mt-[30px] text-[20px] no-underline">
                  <div className="w-[30px] h-[30px] rounded-full bg-black-custom flex items-center justify-center text-primary">→</div>
                  Learn more
                </a>
              </div>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#191A23" strokeWidth="2" />
                <line x1="30" y1="40" x2="70" y2="40" stroke="#191A23" strokeWidth="2" />
                <line x1="30" y1="50" x2="70" y2="50" stroke="#191A23" strokeWidth="2" />
                <line x1="30" y1="60" x2="50" y2="60" stroke="#191A23" strokeWidth="2" />
              </svg>
            </div>

            <div className="border border-black-custom border-b-[6px] rounded-[40px] p-[50px] flex justify-between items-center bg-primary">
              <div>
                <span className="card-title-bg bg-white">Pay per click</span><br />
                <span className="card-title-bg bg-white">advertising</span>
                <a href="#" className="flex items-center gap-[15px] mt-[30px] text-[20px] no-underline">
                  <div className="w-[30px] h-[30px] rounded-full bg-black-custom flex items-center justify-center text-primary">→</div>
                  Learn more
                </a>
              </div>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#191A23" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="#191A23" />
              </svg>
            </div>

            <div className="border border-black-custom border-b-[6px] rounded-[40px] p-[50px] flex justify-between items-center bg-black-custom text-white">
              <div>
                <span className="card-title-bg bg-white text-black-custom">Social media</span><br />
                <span className="card-title-bg bg-white text-black-custom">marketing</span>
                <a href="#" className="flex items-center gap-[15px] mt-[30px] text-[20px] no-underline text-white">
                  <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center text-black-custom">→</div>
                  Learn more
                </a>
              </div>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="25" fill="none" stroke="#fff" strokeWidth="2" />
                <rect x="40" y="40" width="20" height="20" fill="#B9FF66" />
              </svg>
            </div>

            <div className="border border-black-custom border-b-[6px] rounded-[40px] p-[50px] flex justify-between items-center bg-gray-custom">
              <div>
                <span className="card-title-bg">E-mail</span><br />
                <span className="card-title-bg">marketing</span>
                <a href="#" className="flex items-center gap-[15px] mt-[30px] text-[20px] no-underline">
                  <div className="w-[30px] h-[30px] rounded-full bg-black-custom flex items-center justify-center text-primary">→</div>
                  Learn more
                </a>
              </div>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <rect x="20" y="30" width="60" height="40" fill="none" stroke="#191A23" strokeWidth="2" />
                <path d="M20,30 L50,55 L80,30" fill="none" stroke="#191A23" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-custom rounded-[20px] p-[40px] flex items-center mb-[60px]">
          <div className="flex-1">
            <h2 className="text-[28px] font-bold">Let's make things happen</h2>
            <p className="my-5">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <a href="#" className="btn-consult">Get your free proposal</a>
          </div>
          <div className="flex-1 text-right">
            <svg width="200" height="150" viewBox="0 0 200 150">
              <circle cx="100" cy="75" r="50" fill="#191A23" />
              <circle cx="85" cy="65" r="5" fill="#fff" />
              <circle cx="115" cy="65" r="5" fill="#fff" />
            </svg>
          </div>
        </section>

        <section id="use-cases" className="py-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="title-bg">Use Cases</div>
            <p className="max-w-[600px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
          </div>
          <div className="bg-black-custom text-white rounded-[20px] p-[40px] flex gap-10 mb-[60px]">
            <div className="flex-1 pr-5 border-r border-white">
              <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <a href="#" className="text-primary no-underline mt-5 inline-block">Learn more →</a>
            </div>
            <div className="flex-1 pr-5 border-r border-white">
              <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
              <a href="#" className="text-primary no-underline mt-5 inline-block">Learn more →</a>
            </div>
            <div className="flex-1">
              <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
              <a href="#" className="text-primary no-underline mt-5 inline-block">Learn more →</a>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="title-bg">Pricing</div>
            <p className="max-w-[600px]">Transparent and simple pricing for all your digital marketing needs.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="border border-black-custom p-8 rounded-2xl bg-gray-custom">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">$500<span className="text-lg font-normal">/mo</span></p>
              <ul className="mb-8 space-y-2">
                <li>✔ SEO optimization</li>
                <li>✔ Monthly reporting</li>
                <li>✔ Social media management</li>
              </ul>
              <a href="#" className="btn-consult w-full text-center">Get Started</a>
            </div>
            <div className="border border-black-custom p-8 rounded-2xl bg-primary">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$1500<span className="text-lg font-normal">/mo</span></p>
              <ul className="mb-8 space-y-2">
                <li>✔ All Basic features</li>
                <li>✔ PPC advertising</li>
                <li>✔ Content creation</li>
              </ul>
              <a href="#" className="bg-black-custom text-white py-4 rounded-xl block text-center">Get Started</a>
            </div>
            <div className="border border-black-custom p-8 rounded-2xl bg-gray-custom">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="mb-8 space-y-2">
                <li>✔ All Pro features</li>
                <li>✔ Dedicated manager</li>
                <li>✔ Custom strategy</li>
              </ul>
              <a href="#" className="btn-consult w-full text-center">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20">
          <div className="flex items-center gap-5 mb-10">
            <div className="title-bg">Blog</div>
            <p className="max-w-[600px]">Latest insights and trends in digital marketing.</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex gap-6 items-start">
              <div className="w-[150px] h-[100px] bg-primary rounded-xl flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-bold mb-2">10 SEO tips for 2023</h4>
                <p className="text-gray-600 mb-2">Learn the latest strategies to boost your ranking.</p>
                <a href="#" className="text-black-custom font-bold">Read more →</a>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-[150px] h-[100px] bg-black-custom rounded-xl flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-bold mb-2">The power of Social Media</h4>
                <p className="text-gray-600 mb-2">How to build a loyal community online.</p>
                <a href="#" className="text-black-custom font-bold">Read more →</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-black-custom text-white py-10 mt-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between mb-10 items-center">
            <div className="text-[28px] font-bold">WizardZ</div>
            <div className="flex gap-8">
              <a href="#about" className="text-white no-underline">About us</a>
              <a href="#services" className="text-white no-underline">Services</a>
              <a href="#use-cases" className="text-white no-underline">Use Cases</a>
              <a href="#pricing" className="text-white no-underline">Pricing</a>
              <a href="#blog" className="text-white no-underline">Blog</a>
            </div>
          </div>
          <div className="border-t border-white pt-5 text-[14px]">
            © 2023 WizardZ. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
