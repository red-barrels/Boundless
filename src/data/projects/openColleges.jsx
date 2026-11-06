import { motion } from 'framer-motion';
import ProjectTemplate from '../../components/ProjectTemplate';
import { ocQuizHtml } from '../iframeData';

const publicUrl = process.env.PUBLIC_URL || '';

const ocImages = [
  { url: `${publicUrl}/OC/AHCPCM308_1_photosynthesis.jpg`, caption: '' },
  { url: `${publicUrl}/OC/AHCPCM308_1_Transpiration.jpg`, caption: '' },
  { url: `${publicUrl}/OC/leaf_anatomy_labelledv1.jpg`, caption: '' }
];

const openCollegesBlocks = [
  { type: 'text', text: 'Open Colleges is Australia’s oldest distance education provider, delivering nationally accredited online courses to the general public.' },
  { type: 'text', title: 'Enterprise System Migration', text: 'When I joined, the immediate challenge was migrating the entire training catalogue from a custom legacy system to a modern LMS. I led this transition, architecting the data structure for over 10,000 nested activities and managing complex asset libraries at an enterprise scale. I also trained and managed a production team to rebuild the courses from the ground up using Articulate Rise 360.'},
  { type: 'text', title: 'Scaling course production', text: 'To make sure everything stayed consistent across such a massive volume of content, I developed comprehensive style guides and custom templates that allowed our team to scale the rollout efficiently while keeping the design tight.' },
  { 
    type: 'iframe', 
    title: 'Open Colleges Quiz',
    description: 'A custom HTML, CSS and JavaScript code block',
    srcDoc: ocQuizHtml 
  },
  { type: 'carousel', images: ocImages, description: 'A collection of illustrations created for Certificate III in Horticulture.' }
];

export const openCollegesData = { 
  id: 'open_colleges', 
  title: 'Open Colleges', 
  themeColor: '#a655e0',
  width: 850, 
  height: 750, 
  content: (props) => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="text-kicker">Case Study</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Open <br />
              <span className="text-highlight">Colleges.</span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1 }}
          >
            <img 
              src="/Hero/Hero_04B.png" 
              alt="Open Colleges Hero" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <ProjectTemplate blocks={openCollegesBlocks} {...props} /> 
      </div>
    </div>
  ) 
};