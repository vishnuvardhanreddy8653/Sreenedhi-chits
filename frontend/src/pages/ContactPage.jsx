import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import AnimatedTelanganaMap from '../components/AnimatedTelanganaMap';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const [activeBranch, setActiveBranch] = useState(null);
  const hoverTimeout = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const pendingBranchId = useRef(null);
  const itemRefs = useRef({});
  const [mapMousePos, setMapMousePos] = useState({ x: 0, y: 0 });
  const [hoveredMapMarker, setHoveredMapMarker] = useState(null);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('/api/cms/branches')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBranches(data);
        else setBranches([]);
      })
      .catch(err => console.error("Error fetching branches:", err));
  }, []);

  useEffect(() => {
    if (activeBranch && itemRefs.current[activeBranch.id]) {
      itemRefs.current[activeBranch.id].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeBranch]);

  const handleMouseMove = (e, branch) => {
    const dx = Math.abs(e.clientX - mousePos.current.x);
    const dy = Math.abs(e.clientY - mousePos.current.y);
    
    // Only process if it's a real physical mouse movement
    if (dx > 2 || dy > 2) {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (activeBranch?.id !== branch.id) {
        if (pendingBranchId.current !== branch.id) {
          pendingBranchId.current = branch.id;
          if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
          hoverTimeout.current = setTimeout(() => {
            setActiveBranch(branch);
          }, 150);
        }
      } else {
        pendingBranchId.current = null;
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      }
    }
  };

  const handleClick = (branch) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    pendingBranchId.current = null;
    setActiveBranch(branch);
  };

  const handleMouseLeaveList = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    pendingBranchId.current = null;
    setActiveBranch(null);
  };

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          background: linear-gradient(180deg, #fffef9 0%, #fff 100%);
          color: #111111;
          font-family: Nunito, Inter, sans-serif;
        }

        .contact-hero {
          position: relative;
          min-height: 470px;
          overflow: hidden;
          background: radial-gradient(circle at top, #ffe149 0%, #ffe536 58%, #ffd900 100%);
        }

        .contact-hero__image {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.09), rgba(255,255,255,0.09)), url('https://srinidhichits.com/assests/about%20bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.9;
        }

        .contact-hero__content {
          position: relative;
          z-index: 1;
          padding: 120px 20px 80px;
          text-align: center;
        }

        .contact-hero__title {
          margin: 0;
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 0.95;
          letter-spacing: 4px;
          color: #ffffff;
          text-shadow: 12px 22px 24px rgba(0, 0, 0, 0.32);
          font-weight: 900;
        }

        .contact-hero__subtitle {
          max-width: 760px;
          margin: 20px auto 0;
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          font-weight: 800;
          color: #111111;
          line-height: 1.1;
        }

        .contact-hero__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 28px;
          width: 260px;
          min-height: 48px;
          border: 0;
          border-radius: 999px;
          background: #fe2121;
          color: #ffffff;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          text-decoration: none;
          box-shadow: 5px 6px 20px rgba(250, 12, 12, 0.78);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-hero__button:hover {
          transform: translateY(-2px);
          box-shadow: 5px 8px 24px rgba(250, 12, 12, 0.9);
        }

        .contact-shell {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
          padding: 24px 0 60px;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          gap: 28px;
          align-items: start;
        }

        .contact-map-panel {
          position: sticky;
          top: 24px;
          padding: 24px;
          border-radius: 28px;
          background: linear-gradient(180deg, #ffffff 0%, #fffaf1 100%);
          box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);
          border: 1px solid rgba(254, 33, 33, 0.08);
        }

        .contact-map-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 18px;
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(254, 33, 33, 0.1);
          color: #fe2121;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .contact-map-header h2,
        .contact-details-header h2 {
          margin: 0;
          font-size: 1.55rem;
          line-height: 1.1;
          color: #111111;
        }

        .contact-map-header p,
        .contact-details-header p {
          margin: 0;
          color: #3f3f46;
          line-height: 1.5;
          font-size: 0.98rem;
        }

        .contact-map-stage {
          position: relative;
          border-radius: 24px;
          padding: 18px;
          background: linear-gradient(135deg, rgba(255, 217, 0, 0.25), rgba(254, 33, 33, 0.08));
          border: 1px solid rgba(254, 33, 33, 0.08);
        }

        .contact-map-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(17, 17, 17, 0.9);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .contact-map-canvas {
          width: 100%;
          min-height: 430px;
          border-radius: 20px;
          padding: 12px;
          background: linear-gradient(135deg, rgba(17, 17, 17, 0.98), rgba(33, 33, 33, 0.95));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-map-canvas svg {
          width: 100%;
          height: auto;
          max-width: 520px;
        }

        .contact-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .contact-stat {
          padding: 14px 12px;
          border-radius: 18px;
          background: #111111;
          color: #ffffff;
          text-align: center;
        }

        .contact-stat strong {
          display: block;
          font-size: 1.15rem;
          margin-bottom: 4px;
        }

        .contact-stat span {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.88);
        }

        .contact-details-panel {
          padding: 12px 0 20px;
        }

        .contact-details-header {
          margin-bottom: 16px;
        }

        .contact-scroll-stack {
          max-height: 760px;
          overflow-y: auto;
          padding-right: 6px;
          padding-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: #fe2121 rgba(255, 217, 0, 0.2);
          scrollbar-gutter: stable;
        }

        .contact-scroll-stack::-webkit-scrollbar {
          width: 10px;
        }

        .contact-scroll-stack::-webkit-scrollbar-track {
          background: rgba(255, 217, 0, 0.18);
          border-radius: 999px;
        }

        .contact-scroll-stack::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #fe2121, #ff9b1a);
          border-radius: 999px;
        }

        .contact-branch-card {
          padding: 20px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid rgba(17, 17, 17, 0.06);
          box-shadow: 0 10px 28px rgba(17, 17, 17, 0.07);
          cursor: pointer;
          transition: box-shadow 0.2s ease-out, border-color 0.2s ease-out, background 0.2s ease-out;
        }

        .contact-branch-card:hover,
        .contact-branch-card--active {
          border-color: rgba(254, 33, 33, 0.28);
          box-shadow: 0 18px 36px rgba(254, 33, 33, 0.16);
          background: linear-gradient(180deg, #fffdf8 0%, #fff8e8 100%);
        }

        .contact-card-top {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .contact-location-badge {
          width: fit-content;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255, 217, 0, 0.18);
          color: #111111;
          font-size: 0.74rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-branch-card h3 {
          margin: 0;
          font-size: 1.2rem;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .contact-branch-card:hover h3,
        .contact-branch-card--active h3 {
          color: #fe2121;
        }

        .contact-divider {
          height: 1px;
          margin: 12px 0 14px;
          background: linear-gradient(90deg, transparent, rgba(254,33,33,0.24), transparent);
        }

        .contact-branch-card p {
          margin: 0 0 12px;
          font-size: 0.95rem;
          line-height: 1.5;
          color: #27272a;
        }

        .contact-contact-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          padding-top: 8px;
          font-size: 0.92rem;
        }

        .contact-contact-row span {
          font-weight: 900;
          color: #111111;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          min-width: 62px;
        }

        .contact-contact-row a {
          color: #111111;
          text-decoration: none;
          text-align: right;
        }

        .contact-contact-row a:hover {
          color: #fe2121;
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

        .contact-footer__links a,
        .contact-footer__center a {
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
          color: #fff;
        }

        .contact-footer__social a.social-phone:hover { background: #dc2626; }
        .contact-footer__social a.social-whatsapp:hover { background: #22c55e; }
        .contact-footer__social a.social-instagram:hover { background: #db2777; }
        .contact-footer__social a.social-facebook:hover { background: #2563eb; }
        .contact-footer__social a.social-mail:hover { background: #dc2626; }

        @media (max-width: 1024px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .contact-map-panel {
            position: static;
          }
        }

        @media (max-width: 700px) {
          .contact-shell {
            width: min(100% - 20px, 1200px);
            padding-top: 24px;
          }

          .contact-hero {
            min-height: 380px;
          }

          .contact-hero__content {
            padding: 90px 18px 60px;
          }

          .contact-hero__title {
            letter-spacing: 2px;
          }

          .contact-stats {
            grid-template-columns: 1fr;
          }

          .contact-footer__top {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <PageHero
        title="OUR CONTACT"
        subtitle1="Anyone can dream up great ideas,"
        subtitle2="but an idea is nothing until it's realized."
        ctaText="Know Where We Are!"
        ctaHref="#contact-shell"
      />

      <section id="contact-shell" className="contact-shell">
        <div className="contact-layout">
          <motion.div
            className="contact-map-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="contact-map-header">
              <span className="contact-pill">Live Service Map</span>
              <h2>Telangana service coverage at a glance</h2>
              <p>Hover over the map pins to spotlight a branch and quickly review its service area.</p>
            </div>

            <div 
              className="contact-map-stage"
              onMouseMove={(e) => setMapMousePos({ x: e.clientX, y: e.clientY })}
            >
              <div className="contact-map-canvas">
                <AnimatedTelanganaMap
                  branches={branches}
                  activeId={activeBranch?.id}
                  onMarkerHover={(branch) => {
                    setActiveBranch(branch);
                    setHoveredMapMarker(branch);
                  }}
                  onMarkerLeave={() => setHoveredMapMarker(null)}
                />
              </div>
            </div>

            <div className="contact-stats">
              <div className="contact-stat">
                <strong>{branches.length}</strong>
                <span>Service Points</span>
              </div>
              <div className="contact-stat">
                <strong>{branches.length}</strong>
                <span>Locations Listed</span>
              </div>
              <div className="contact-stat">
                <strong>24/7</strong>
                <span>Support Access</span>
              </div>
            </div>
          </motion.div>

          <div className="contact-details-panel">
            <div className="contact-details-header">
              <span className="contact-pill">Contact Directory</span>
              <h2 style={{ marginTop: 10 }}>Reach the nearest branch</h2>
              <p style={{ marginTop: 8 }}>
                Scroll through the locations to compare addresses, phone numbers, and email support.
              </p>
            </div>

            <div 
              className="contact-scroll-stack"
              onMouseLeave={handleMouseLeaveList}
            >
              {branches.map((branch) => {
                const isActive = activeBranch?.id === branch.id;
                return (
                  <motion.article
                    key={branch.id}
                    layout
                    ref={(el) => (itemRefs.current[branch.id] = el)}
                    className={`contact-branch-card ${isActive ? 'contact-branch-card--active' : ''}`}
                    onMouseMove={(e) => handleMouseMove(e, branch)}
                    onClick={() => handleClick(branch)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                  >
                    <div className="contact-card-top" style={{ flexDirection: 'row', alignItems: 'center', gap: '16px', marginBottom: 0 }}>
                      <motion.div 
                        className="branch-logo"
                        layout
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(254, 33, 33, 0.15)', backgroundColor: '#f9f9f9' }}
                      >
                        <img src={branch.imageUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`${branch.name} branch`} />
                      </motion.div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <motion.span layout className="contact-location-badge">
                          {branch.headOffice ? 'Head Office' : 'Service Branch'}
                        </motion.span>
                        <motion.h3 layout style={{ margin: 0 }}>{branch.name}</motion.h3>
                      </div>
                    </div>
                    
                    <motion.div
                      layout
                      initial={false}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 16 : 0
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="contact-divider" style={{ marginTop: 0 }} />
                      <p>{branch.address}</p>
                      <div className="contact-contact-row">
                        <span>Phone</span>
                        <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                      </div>
                      <div className="contact-contact-row">
                        <span>Email</span>
                        <a href={`mailto:${branch.email}`}>{branch.email}</a>
                      </div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
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
            <a href="http://teamup.ink/">Team- <span style={{ color: '#fe2121' }}>Up!</span></a>
          </p>
        </div>

        <div className="contact-footer__social">
          <a href="tel:+916302296910" aria-label="Call Us" className="social-phone"><FaPhoneAlt size={20} /></a>
          <a href="https://wa.me/916302296910" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-whatsapp"><FaWhatsapp size={20} /></a>
          <a href="https://instagram.com/search_to_find_my_name7" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-instagram"><FaInstagram size={20} /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-facebook"><FaFacebookF size={20} /></a>
          <a href="mailto:contact@srinidhichits.com" aria-label="Email" className="social-mail"><FaEnvelope size={20} /></a>
        </div>
      </footer>

      {/* Floating Cursor-Tracking Tooltip for Map */}
      {hoveredMapMarker && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: mapMousePos.x + 16, y: mapMousePos.y + 16 }}
          animate={{ opacity: 1, scale: 1, x: mapMousePos.x + 16, y: mapMousePos.y + 16 }}
          transition={{
            opacity: { duration: 0.15 },
            scale: { type: 'spring', stiffness: 400, damping: 25 },
            x: { type: 'spring', stiffness: 500, damping: 30, mass: 0.5 },
            y: { type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            background: 'rgba(17, 17, 17, 0.95)',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '800',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fe2121', boxShadow: '0 0 8px #fe2121' }} />
          {hoveredMapMarker.name}
        </motion.div>
      )}
    </div>
  );
}
