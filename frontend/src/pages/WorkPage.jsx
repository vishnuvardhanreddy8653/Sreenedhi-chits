import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const workPageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap');

  .work-page-shell {
    background: #ffffff;
    color: #111111;
    font-family: 'Nunito Sans', 'Segoe UI', sans-serif;
    min-height: 100vh;
  }

  .work-nav {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 999;
    background: transparent;
  }

  .work-nav-inner {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 24px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .work-logo img {
    height: 46px;
    width: auto;
    display: block;
  }

  .work-menu ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 0;
    padding: 0;
  }

  .work-menu a {
    color: #111111;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    padding: 5px;
    display: inline-block;
  }

  .work-menu a.active {
    color: #111111;
  }

  .work-nav-cta {
    background: #fe2121;
    color: #ffffff;
    text-decoration: none;
    border-radius: 999px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 800;
    box-shadow: rgba(250, 12, 12, 0.35) 0 8px 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .work-nav-cta:hover {
    background: #d91818;
    transform: translateY(-1px);
    box-shadow: rgba(250, 12, 12, 0.45) 0 12px 28px;
  }

  .work-hero {
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 24px 50px;
    background: radial-gradient(circle at top, rgb(255, 225, 73), rgb(255, 229, 54));
    overflow: hidden;
    position: relative;
  }

  .work-hero-content {
    max-width: 900px;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .work-hero-content h1 {
    margin: 0 0 20px;
    font-size: 80px;
    line-height: 0.95;
    letter-spacing: 4px;
    font-weight: 700;
    color: #ffffff;
  }

  .work-hero-content p {
    margin: 30px 0;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 600;
    color: #111111;
    letter-spacing: 1px;
  }

  .work-cta {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    border-radius: 30px;
    background: #fe2121;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    box-shadow: rgba(250, 12, 12, 0.855) 5px 5px 18px 0px;
    text-transform: none;
  }

  .work-scheme {
    width: 868.8px;
    max-width: calc(100% - 40px);
    margin: 0 auto;
    padding: 0 0 120px;
  }

  .work-card {
    position: relative;
    margin: 200px auto;
    width: 695.037px;
    max-width: 100%;
    min-height: 450px;
    background: #ffffff;
    box-shadow: rgba(254, 33, 33, 0.1) 10px 10px 60px 0px;
    display: grid;
    grid-template-columns: 540px minmax(140px, 1fr);
    align-items: start;
    gap: 0;
    overflow: visible;
  }

  .work-card-thumb {
    position: relative;
    top: -30px;
    left: 30px;
    width: 540px;
    height: 360px;
    overflow: hidden;
  }

  .work-card-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    box-shadow: rgba(87, 86, 82, 0.3) 10px 18px 80px 0px;
  }

  .work-card-copy {
    padding: 18px 12px 0 16px;
    box-sizing: border-box;
  }

  .work-card-copy h1 {
    margin: 0;
    padding-top: 15px;
    text-align: center;
    font-size: 20.8px;
    font-weight: 700;
    color: #111111;
  }

  .work-card-copy p {
    margin: 15px 0 0;
    padding-top: 0;
    font-size: 15.2px;
    line-height: 22.8px;
    font-weight: 200;
    color: #666666;
    text-align: justify;
  }

  .work-card-num {
    position: absolute;
    top: 15px;
    left: 585.037px;
    width: 115px;
    text-align: center;
    font-size: 96px;
    line-height: 1;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .work-card-fab {
    position: absolute;
    bottom: -20px;
    left: 585.037px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #636363;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: none;
    text-decoration: none;
  }

  .work-card-fab svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 3;
  }

  .work-card-fab.check {
    background: #fe2121;
  }

  .work-footer {
    background: #000000;
    padding: 20px 24px 24px;
  }

  .work-footer-inner {
    max-width: 1080px;
    margin: 0 auto;
  }

  .work-footer-links {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 12px;
  }

  .work-footer-links a {
    color: #ffffff;
    text-decoration: none;
  }

  .work-footer-copy {
    margin-top: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
  }

  .work-footer-copy a {
    color: #ffffff;
    text-decoration: none;
  }

  .work-footer-copy strong {
    color: #fe2121;
    font-weight: 700;
  }

  .work-top-btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: #fe2121;
    color: #ffffff;
    box-shadow: rgba(250, 12, 12, 0.855) 5px 5px 18px 0px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }

  .work-top-btn.visible {
    opacity: 1;
    visibility: visible;
  }

  .work-top-btn svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 3;
  }

  @media (max-width: 680px) {
    .work-nav-inner {
      padding: 0 16px;
    }

    .work-menu {
      display: none;
    }

    .work-hero-content h1 {
      font-size: 52px;
      letter-spacing: 2px;
    }

    .work-hero-content p {
      font-size: 24px;
    }

    .work-card {
      grid-template-columns: 1fr;
      width: 100%;
      margin: 100px auto;
    }

    .work-card-thumb {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }

    .work-card-copy {
      padding: 20px;
    }

    .work-card-num {
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 64px;
    }

    .work-card-fab {
      left: auto;
      right: 24px;
    }
  }
`;

const workCards = [
  {
    id: 'bottom1',
    title: 'Chit Subscription',
    image: 'https://srinidhichits.com/assests/how/11.png',
    paragraphs: [
      'A ChitGroup is formed by the chitfund company with the chit Value and No. of Subscribers. (Which doesn’t change throughout the chit completion)',
      'The amount to be saved every month by the Subscriber is equals to Chit value divided by No of person’s i.e. 10,00,000/50 = 20,000.',
      'The maximum monthly Subscription Amount to be paid by a Subscriber will be 20,000 for above example chit.',
    ],
    number: '01',
    nextHref: '#bottom1',
    icon: 'down',
  },
  {
    id: '2',
    title: 'Bid Amount',
    image: 'https://srinidhichits.com/assests/how/12.png',
    paragraphs: [
      'The Subscriber does not always pay the entire Subscription amount every month there will be some amount deducted as Divedend.',
      'The maximum bid permitted ranges from 30-40% from chit value. i.e., The maximum deduction will be around 30% - 40% of chit value.',
      'Assume that a Subscriber has bid 35% of the chit value. 35% of 10,00,000 is 3,50,000. This amount is known as chit discount.',
    ],
    number: '02',
    nextHref: '#2',
    icon: 'down',
  },
  {
    id: '3',
    title: 'Dividend',
    image: 'https://srinidhichits.com/assests/how/13.png',
    paragraphs: [
      'The Company Charges 5% of chit value as commission from example that would amount to 50,000. This amount is deducted from Chit Discount i.e. 3,50,000-50,000=3,00,000. This amount is equally distribution among the subscribers of the group.',
      'In the example, 3,00,000 would be divided equally among 50 subscribers. Each subscriber would get a discount of 3,00,000/50 = 6000. This amount is known as Dividend. In the next month, all subscribers would have to only pay 14,000 instead of 20,000. This is because they have earned a chit discount of 6000.',
    ],
    number: '03',
    nextHref: '#3',
    icon: 'down',
  },
  {
    id: 'bottom',
    title: 'Advantages of ChitFunds',
    image: 'https://srinidhichits.com/assests/how/14.png',
    paragraphs: [
      'Chit fund gives the flexibility to borrow and save.',
      'You can get a chance to borrow money just by paying first monthly installment.',
      'The non-prized subscriber who is a saving member up to the last installments gets a dividend which is comparatively higher than the interest that are accrued by way of other Deposit Schemes.',
      'You need not disclose for which purpose you will be using the prize money.',
    ],
    number: '04',
    nextHref: '#bottom',
    icon: 'check',
  },
];

const DownIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

const UpIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

export default function WorkPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 240);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="work-page-shell">
      <style>{workPageStyles}</style>

      <nav className="work-nav">
        <div className="work-nav-inner">
          <Link to="/" className="work-logo">
            <img src={logo} alt="Srinidhi Chits" />
          </Link>
          <div className="work-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/schemes">Available Chits</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/work" className="active">How it Works ?</Link></li>
              <li><Link to="/register" className="work-nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="work-hero">
        <div className="work-hero-content">
          <h1>How CHITFUNDS Work</h1>
          <p>Anyone can dream up great ideas,</p>
          <p>but an idea is nothing until it's realized.</p>
          <a href="#bottom" className="work-cta">Go Check That Out</a>
        </div>
      </section>

      <section id="bottom" className="work-scheme">
        {workCards.map((card, index) => (
          <article className="work-card" key={card.id} id={index === 0 ? 'bottom1' : card.id}>
            <div className="work-card-thumb">
              <img src={card.image} alt={card.title} />
            </div>

            <div className="work-card-copy">
              <h1>{card.title}</h1>
              {card.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${card.id}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </div>

            <div className="work-card-num">{card.number}</div>

            <a href={card.nextHref} className={`work-card-fab ${card.icon === 'check' ? 'check' : ''}`}>
              {card.icon === 'check' ? <CheckIcon /> : <DownIcon />}
            </a>
          </article>
        ))}
      </section>

      <footer className="work-footer">
        <div className="work-footer-inner">
          <div className="work-footer-links">
            <a href="https://srinidhichits.com/policy.html" target="_blank" rel="noreferrer">PRIVACY POLICY</a>
            <a href="https://srinidhichits.com/terms.html" target="_blank" rel="noreferrer">TERMS & CONDITIONS</a>
            <a href="https://srinidhichits.com/faq.html" target="_blank" rel="noreferrer">FAQ's</a>
          </div>

          <div className="work-footer-copy">
            <p>©-2020 SRINIDHI CHITS PVT. LTD.</p>
            <p>
              HAND CRAFTED WITH <strong>❤</strong> BY <a href="http://teamup.ink/" target="_blank" rel="noreferrer">Team-<strong>Up!</strong></a>
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`work-top-btn ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <UpIcon />
      </button>
    </div>
  );
}