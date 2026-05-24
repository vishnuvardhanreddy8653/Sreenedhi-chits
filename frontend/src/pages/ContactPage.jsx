const branches = [
  {
    name: 'KARIMNAGAR',
    img: 'https://srinidhichits.com/assests/12.jpg',
    details: [
      'E.ASHOK REDDDY',
      'K.CHANDRA REDDY',
      'H NO 2-7-384, 2nd Floor,',
      'OPP:POLICE PARADE GROUND,',
      'BUS-STAND ROAD,',
      'KARIMNAGAR-505001,',
      'Ph.no:0878-2251999',
    ],
  },
  {
    name: 'PEDDAPALLY',
    img: 'https://srinidhichits.com/assests/peddapalli.jpg',
    details: [
      'B.JAYAPAL REDDY',
      'H.SRINIVAS REDDY',
      'H NO 1-2-67/D, 1st Floor,',
      'PRAGATHI NAGAR,',
      'MAIN ROAD PEDDAPALLY,',
      'Karimnagar,',
      'Ph.no:08728-222055',
    ],
  },
  {
    name: 'HUZURABAD',
    img: 'https://srinidhichits.com/assests/HZB.jpg',
    details: [
      'G.SRINIVAS REDDY',
      'H NO 12-371, 1st Floor,',
      'WARANGAL ROAD,',
      'HUZURABAD-505468,',
      'Karimnagar,',
      'Ph.no:08727-252166',
    ],
  },
  {
    name: 'JANGOAN',
    img: 'https://srinidhichits.com/assests/janagon.jpg',
    details: [
      'N.YELLA REDDY',
      'B.RAMESH',
      'HNO 2-8-1/B,',
      'HYD ROAD,SRINAGAR COLONY,',
      'JANGOAN-506167,',
      'WARANGAL,',
      'Ph.no:08716-224225',
    ],
  },
  {
    name: 'NIRMAL',
    img: 'https://srinidhichits.com/assests/Nirmal.jpg',
    details: [
      'N.SATISH',
      'H NO 7-3-23, 1ST FLOOR,',
      'MAIN ROAD,',
      'OPP:-NIRMAL TOYS EMPORIUM,',
      'NIRMAL,',
      'ADILABAD',
      'Ph.no:08734-243222',
    ],
  },
  {
    name: 'GODAVARIKHANI',
    img: 'https://srinidhichits.com/assests/gdk.jpg',
    details: [
      'T.RAJI REDDY',
      'H NO 22-3-274/17,',
      '1ST FLOOR, F.C.I ROAD,',
      'NTPC JYOTHI NAGAR,',
      'GODAVARIKHANI,',
      'Ph.no:08728-274544',
    ],
  },
  {
    name: 'SECUNDERABAD',
    img: 'https://srinidhichits.com/assests/Secun.jpg',
    details: [
      'V.LAXMA REDDY',
      'K.SANTHOSH REDDY',
      'PLOT NO.1,',
      'SRR. ARCADE, FOURTH FLOOR,',
      'THIRIMULGHERRY,SECUNDERABAD-500015.',
      'Ph.no:040-27745699',
    ],
  },
  {
    name: 'HANMAKONDA',
    img: 'https://srinidhichits.com/assests/HNMK.jpg',
    details: [
      'M.NARSIMHA REDDY',
      'K.RAJI REDDY',
      'H.NO 2-10-796,',
      'KANAKA DURGA COLONY,',
      'SUBHEDARY ,HANMKONDA, WARANGAL (U)',
      'Ph.no:0870-2977234',
    ],
  },
  {
    name: 'MANCHERIAL',
    img: 'https://srinidhichits.com/assests/MNCH.jpg',
    details: [
      'T.THIRUPATHI',
      'H.NO.12-844/6 1ST FLOOR,',
      'BESIDE:PNB BANK,',
      'CHINTHAPANDU WADA,',
      'MANCHERIAL -504208,',
      'Ph.no:08736-252155',
    ],
  },
  {
    name: 'SIDDIPET',
    img: 'https://srinidhichits.com/assests/siddipet.jpg',
    details: [
      'K.PRABHAKAR REDDDY',
      'H NO 18-19-25/E1,',
      'BHAVANI NAGAR,',
      'BLACK OFFICE CHOWRASTA,',
      'SIDDIPET -502103,',
      'Ph.no:08457-230155',
    ],
  },
  {
    name: 'SIRCILLA',
    img: 'https://srinidhichits.com/assests/chenetha.jpg',
    details: [
      'K.SRINIVAS REDDDY',
      'M.V. RAMANA REDDDY',
      'H NO 3-1-33/1/C & D,',
      '1st Floor,',
      'KARIMNAGAR ROAD,',
      'SIRCILLA -505301,',
      'Ph.no:08723 - 297233.',
    ],
  },
  {
    name: 'KARIMNAGAR 2',
    img: 'https://srinidhichits.com/assests/12.jpg',
    details: [
      'G. KOMAL REDDDY',
      'M. VENKATESHWARLU',
      'H. PRAKASH REDDDY',
      'H NO 2-10-759,',
      'SRINIDHI HOUSE,',
      'OLD DIG BUILDING, JYOTHINAGAR,',
      'KARIMNAGAR -505001,',
      'Ph.no:0878-2245338.',
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ fontFamily: 'Nunito, Inter, sans-serif' }}>
      <style>{`
        .contact-page {
          background: #fff;
          color: #000;
        }

        .contact-hero {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          background: radial-gradient(circle at top, #ffe149 0%, #ffe536 55%, #ffd900 100%);
        }

        .contact-hero__image {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), url('https://srinidhichits.com/assests/about%20bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.9;
        }

        .contact-hero__content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 120px 20px 80px;
        }

        .contact-hero__title {
          font-size: 80px;
          line-height: 1;
          letter-spacing: 4px;
          color: #fff;
          text-shadow: 15px 30px 20px rgba(0, 0, 0, 0.35);
          margin: 0;
          font-weight: 900;
        }

        .contact-hero__subtitle {
          margin: 20px auto 0;
          font-size: 30px;
          font-weight: 700;
          color: #000;
          max-width: 760px;
          line-height: 1.1;
        }

        .contact-hero__button {
          margin-top: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          height: 48px;
          border: 0;
          border-radius: 999px;
          background: #fe2121;
          color: #fff;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 5px 5px 18px rgba(250, 12, 12, 0.856);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-hero__button:hover {
          transform: translateY(-1px);
          box-shadow: 5px 8px 24px rgba(250, 12, 12, 0.9);
        }

        .contact-locations {
          position: relative;
          padding: 0 20px 230px;
          text-align: center;
        }

        .contact-locations__grid {
          width: min(1200px, 100%);
          margin: 50px auto 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 30px;
        }

        .contact-card {
          position: relative;
          height: 400px;
          padding: 10px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }

        .contact-card:hover {
          box-shadow: 0 6px 30px rgba(254, 33, 33, 0.4);
          transform: translateY(-2px);
        }

        .contact-thumb {
          width: 150px;
          height: 150px;
          margin: 30% auto 0;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid rgba(255, 225, 73, 0.8);
          transition: width 0.6s ease, height 0.6s ease, margin 0.6s ease, border 0.6s ease, background-image 0.6s ease;
        }

        .contact-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .contact-branch {
          margin: 10px 0 0;
          font-size: 18px;
          line-height: 1;
          text-transform: uppercase;
          font-weight: 900;
          color: #000;
        }

        .contact-branch-content {
          display: none;
          padding: 20px 0 0;
          animation: fade 0.8s ease-in 1;
        }

        .contact-branch-content h2 {
          margin: 0;
          font-size: 14px;
          line-height: 1.2;
        }

        .contact-branch-content p {
          margin: 2px 0;
          font-size: 12px;
          line-height: 1.2;
        }

        .contact-card:hover .contact-thumb {
          width: 80px;
          height: 80px;
          margin: 10% auto 0;
          border: 3px solid rgba(254, 33, 33, 1);
          background-image: linear-gradient(120deg, rgba(252, 50, 47, 0.8) 50%, rgba(255, 220, 20, 0.6) 80%);
        }

        .contact-card:hover .contact-branch-content {
          display: block;
        }

        .contact-footer {
          width: 100%;
          background: #000;
          padding: 32px 20px 48px;
          color: #fff;
        }

        .contact-footer__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .contact-footer__links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-footer__links a {
          color: #fff;
          text-decoration: none;
        }

        .contact-footer__center {
          max-width: 1200px;
          margin: 24px auto 0;
          text-align: center;
        }

        .contact-footer__center p {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-footer__center a {
          color: #fff;
          text-decoration: none;
        }

        .contact-footer__social {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
        }

        .contact-footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #fff;
          color: #000;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .contact-footer__social a:hover {
          background: #fe2121;
          color: #fff;
        }

        .contact-backtop {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 0;
          background: #fe2121;
          color: #fff;
          box-shadow: 5px 5px 18px rgba(250, 12, 12, 0.856);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
        }

        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .contact-locations__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-hero__title {
            font-size: 56px;
          }

          .contact-hero__subtitle {
            font-size: 24px;
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            min-height: 360px;
          }

          .contact-hero__content {
            padding: 90px 18px 60px;
          }

          .contact-hero__title {
            font-size: 38px;
            letter-spacing: 2px;
          }

          .contact-hero__subtitle {
            font-size: 18px;
            line-height: 1.2;
          }

          .contact-locations__grid {
            grid-template-columns: 1fr;
          }

          .contact-footer__top {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero__image" />
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">OUR CONTACT</h1>
          <p className="contact-hero__subtitle">Anyone can dream up great ideas,</p>
          <p className="contact-hero__subtitle" style={{ marginTop: 6 }}>
            but an idea is nothing until it's realized.
          </p>
          <a href="#bottom" className="contact-hero__button">Know Where We Are!</a>
        </div>
      </section>

      <section id="bottom" className="contact-locations">
        <div className="contact-locations__grid">
          {branches.map((branch) => (
            <div className="contact-card" key={branch.name}>
              <div className="contact-thumb">
                <img src={branch.img} alt={branch.name} />
              </div>
              <p className="contact-branch">{branch.name}</p>
              <div className="contact-branch-content">
                {branch.details.map((line) => (
                  <p key={`${branch.name}-${line}`}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="contact-footer">
        <div className="contact-footer__top">
          <div className="contact-footer__links">
            <a href="https://srinidhichits.com/policy.html">PRIVACY POLICY</a>
            <a href="https://srinidhichits.com/terms.html">TERMS &amp; CONDITIONS</a>
            <a href="https://srinidhichits.com/faq.html">FAQ's</a>
          </div>
        </div>

        <div className="contact-footer__center">
          <p>©-2020 SRINIDHI CHITS PVT. LTD.</p>
          <p style={{ marginTop: 8 }}>
            HAND CRAFTED WITH <span style={{ color: '#fe2121' }}>❤️</span> BY{' '}
            <a href="http://teamup.ink/">Team- Up!</a>
          </p>
        </div>

        <div className="contact-footer__social">
          <a href="tel:+916302296910" aria-label="Call Us">📞</a>
          <a href="https://wa.me/916302296910" target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
          <a href="https://instagram.com/search_to_find_my_name7" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="mailto:contact@srinidhichits.com" aria-label="Email">✉</a>
        </div>
      </footer>

      <a href="#" className="contact-backtop" aria-label="Back to top">↑</a>
    </div>
  );
}
