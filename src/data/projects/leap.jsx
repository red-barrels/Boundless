import { motion } from 'framer-motion';
import ProjectTemplate from '../../components/ProjectTemplate';
import GracefulImage from '../../components/GracefulImage';

const publicUrl = process.env.PUBLIC_URL || '';

const leapImages = [
  { url: `${publicUrl}/Leap/carrousel/rain.jpg`, caption: '' },
  { url: `${publicUrl}/Leap/carrousel/setting_goals_swim_snorkel_scuba.jpg`, caption: '' },
  { url: `${publicUrl}/Leap/carrousel/sorting_information_writing_down.png`, caption: '' },
  { url: `${publicUrl}/Leap/carrousel/vampire_cartoon_weaknesses_01.png`, caption: '' },
  { url: `${publicUrl}/Leap/carrousel/vampire_cartoon_why_leave_last_job.png`, caption: '' }
];

const leapBlocks = [
  { type: 'text', text: 'Leap Learning/eLearning/Training was a Nationally Accredited online training company that created courses for unemployed people who were using the services of employment consultants (ECs) and Job Services Australia.' },
  { type: 'text', title: 'Background and leadership', text: 'I started at Leap in 2009 as an illustrator. The company went through a massive overhaul shortly after, which forced a small crew of us to step up and rebuild. Under the new name Leap eLearning, I moved into a leadership role managing a team of illustrators and designers.' },
  { type: 'carousel', description: 'A collections of illustrations made for Leap courses.', images: leapImages },
  { type: 'text', title: 'Studio development', text: 'I took over our marketing media and set up our internal film and photography studio. This involved researching and purchasing the equipment, managing the layout, and handling everything from lighting and backdrops to cameras, before directing talent and crews on set and on location.' },
  { type: 'video', src: `${publicUrl}/Video/LF_welcome_emma.mp4`,
  description: 'A video I directed and filmed for the Ladder Foundation in partnership with Leap Training.',
  poster: `${publicUrl}/Video/Thumbnails/ladder-foundation.png` }
];

export const leapData = { 
  id: 'leap', 
  title: 'Leap Training',
  icon: <GracefulImage src="/Icons/leap_icon.png" alt="Leap" className="app-icon" />,
  themeColor: '#55d055',
  width: 850, 
  height: 750, 
  content: (props) => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="text-kicker">Case Study</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              <span className="text-highlight">Launching</span> <br /> my career.
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1 }}
          >
            <GracefulImage  src="/Hero/Hero_05.png" alt="Leap Hero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <ProjectTemplate blocks={leapBlocks} {...props} /> 
      </div>
    </div>
  )
};