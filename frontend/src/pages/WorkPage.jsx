import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import PageHero from '../components/PageHero';

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
    width: 100%;
    margin: 0 auto;
    padding: 0 0 60px;
  }

  .work-card {
    position: relative;
    height: 450px;
    width: 80%;
    max-width: 1000px;
    margin: 100px auto;
    background-color: #ffffff;
    box-shadow: 10px 10px 60px rgba(254, 33, 33, 0.1);
    display: block; /* Removing the restrictive grid */
  }

  .work-card-thumb {
    float: left;
    position: relative;
    left: 30px;
    top: -30px;
    height: 360px;
    width: 540px;
    overflow: hidden;
    background: #fff;
    box-shadow: 10px 18px 80px 0px rgba(87, 86, 82, 0.3);
  }

  .work-card-thumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .work-card-copy {
    margin-left: 590px;
    margin-right: 20px;
    padding-top: 15px;
    box-sizing: border-box;
  }

  .work-card-copy h1 {
    margin: 0;
    padding-top: 15px;
    text-align: left; /* Original site has text-align left for titles */
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
  }

  .work-separator {
    margin-top: 10px;
    border-top: 1px solid #C3C3C3;
  }

  .work-card-copy p {
    margin: 10px 0 0;
    padding-top: 0;
    font-size: 0.95rem;
    line-height: 150%;
    font-weight: 200;
    color: #666666;
    text-align: justify;
  }

  .work-card-num {
    position: absolute;
    left: 40px;
    bottom: -110px;
    font-size: 6rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    line-height: 1;
    margin: 0;
  }

  .work-card-fab {
    position: absolute;
    right: 50px;
    bottom: -20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgb(99, 99, 99);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-decoration: none;
  }

  .work-card-fab svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 3;
  }

  .work-card-fab:hover {
    box-shadow: 2px -5px 23px rgba(0, 0, 0, 0.2);
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
      margin: 60px auto;
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

import img11 from '../assets/how/11.png';
import img12 from '../assets/how/12.png';
import img13 from '../assets/how/13.png';
import img14 from '../assets/how/14.png';

const workCards = [
  {
    id: 'bottom1',
    title: 'Chit Subscription',
    image: img11,
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
    image: img12,
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
    image: img13,
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
    image: img14,
    paragraphs: [
      'Chit fund gives the flexibility to borrow and save.',
      'You can get a chance to borrow money just by paying first monthly installment.',
      'The non-prized subscriber who is a saving member up to the last installments gets a dividend which is comparatively higher than the interest that are accrued by way of other Deposit Schemes.',
      'You need not disclose for which purpose you will be using the prize money.',
    ],
    number: '04',
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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="work-page-shell">
      <style>{workPageStyles}</style>

      <PageHero
        title="How CHITFUNDS Work"
        subtitle1="Anyone can dream up great ideas,"
        subtitle2="but an idea is nothing until it's realized."
        ctaText="Go Check That Out"
        ctaHref="#card-0"
        onCtaClick={(e) => scrollToSection(e, 'card-0')}
      />

      <section id="bottom" className="work-scheme">
        {workCards.map((card, index) => {
          const nextCardId = index < workCards.length - 1 ? `card-${index + 1}` : 'bottom';
          
          return (
            <article className="work-card" key={card.id} id={`card-${index}`}>
              <div className="work-card-thumb">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="work-card-copy">
                <h1>{card.title}</h1>
                <div className="work-separator" />
                {card.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${card.id}-${paragraphIndex}`}>
                    {paragraphIndex + 1}. &ensp; {paragraph}
                  </p>
                ))}
              </div>

              <h5 className="work-card-num">{card.number}</h5>

              <a 
                href={`#${nextCardId}`} 
                className={`work-card-fab ${card.icon === 'check' ? 'check' : ''}`}
                onClick={(e) => scrollToSection(e, nextCardId)}
              >
                {card.icon === 'check' ? <CheckIcon /> : <DownIcon />}
              </a>
            </article>
          );
        })}
      </section>

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