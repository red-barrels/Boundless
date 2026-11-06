import { motion } from 'framer-motion';
import ProjectTemplate from '../../components/ProjectTemplate';
import { chepHandoverHtml, chepQualityHtml } from '../iframeData';

const chepBlocks = [
  { type: 'text', text: 'CHEP is a massive global supply chain company. They needed training material that felt authentic to the day-to-day software their teams actually use.' },
  { type: 'text', title: 'Interactive simulation', text: 'They needed training material that felt authentic to the day-to-day software their teams actually use. To pull this off, I developed custom Claude skills to generate interactive HTML and CSS code blocks. These blocks accurately mimicked the interface of their proprietary supply chain software and documentation, giving staff a realistic, hands-on training experience directly within the course without needing to access the live system.' },
  { 
    type: 'iframe', 
    description: 'CHEP interactive handover documentation',
    title: 'CHEP Handover Practice',
    srcDoc: chepHandoverHtml 
  },
  { 
    type: 'iframe', 
    description: 'An interactive breakdown of a Quality Inspection and Variation Report',
    title: 'CHEP Quality Inspection Simulation',
    srcDoc: chepQualityHtml 
  }
];

export const chepData = { 
  id: 'chep', 
  title: 'CHEP',
  themeColor: '#0077c8',
  width: 850, 
  height: 750, 
  content: (props) => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          <div style={{ position: 'relative', zIndex: 2}}>
            <span className="text-kicker">Case Study</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Smart
              <span className="text-highlight flush-left">supply</span> <br />
              chains.
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1 }}
          >
            <img src="/Hero/Hero_CHEP.png" alt="CHEP Hero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <ProjectTemplate blocks={chepBlocks} {...props} /> 
      </div>
    </div>
  ) 
};