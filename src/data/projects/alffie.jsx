import { motion } from 'framer-motion';
import ProjectTemplate from '../../components/ProjectTemplate';
import GracefulImage from '../../components/GracefulImage';

const publicUrl = process.env.PUBLIC_URL || '';

const alffieProductDesignImages = [
  { url: `${publicUrl}/Alffie/catalogue.jpg`, caption: 'Alffie course catalogue inside the student LMS' }
];

const alffieImages = [
  { url: `${publicUrl}/Alffie/5-stars.jpg` },
  { url: `${publicUrl}/Alffie/business_cards.png` },
  { url: `${publicUrl}/Alffie/chemical.jpg` },
  { url: `${publicUrl}/Alffie/evolution.jpg` },
  { url: `${publicUrl}/Alffie/eye_labelled.png` },
  { url: `${publicUrl}/Alffie/failing_stress_management_plan_meditate.png` },
  { url: `${publicUrl}/Alffie/learning_language1.png` },
  { url: `${publicUrl}/Alffie/meditation_comm.png` },
  { url: `${publicUrl}/Alffie/protest_march_megaphone.png` },
  { url: `${publicUrl}/Alffie/skin_integumentary_system.png` }
];

const alffieBlocks = [
  { type: 'text', text: 'Alffie is Australia’s largest employment services training provider.' },
  { type: 'text', title: 'Product Design & Development', text: 'I joined Alffie in 2015, taking on a role bridging design, marketing, and front-end development. I designed the UI and managed front-end development for a complex learning platform. I learned UX/UI, HTML, CSS, and Bootstrap, along with enough JavaScript to handle interactive elements, eventually building a custom site using Webflow. My role required strict data management and adherence to the corporate design systems of major partners like NAB and Melbourne University.' },
  { type: 'carousel', description: 'Product design example.', images: alffieProductDesignImages },
  { type: 'text', title: 'Design and illustration', text: 'I managed the production of visual assets, establishing style guides and creating custom templates to maintain consistency across all content. This involved organising and managing large libraries of files and illustrations for integration into the learning management system.' },
  { type: 'carousel', description: 'A selection of illustrations I created at Alffie.', images: alffieImages },
  { type: 'text', title: 'Corporate client management', text: 'Working alongside corporate clients like NAB, Melbourne University, and the PAN Group meant my responsibilities expanded to include client communication and ensuring all project output aligned strictly with corporate brand identities.' },
  { type: 'video', 
    description: 'A video I directed and filmed for the PukaUp and Melbourne University in partnership with Alffie.',
    src: `${publicUrl}/Video/foundations_of_wellbeing_partnership_presentation_captions_SMALL.mp4`, 
    poster: `${publicUrl}/Video/Thumbnails/foundations_of_wellbeing.png` 
  }
];

export const alffieData = { 
  id: 'alffie',
  title: 'Alffie',
  themeColor: '#ff6d00',
  icon: <GracefulImage src="/Icons/alffie_icon.png" alt="Alffie" className="app-icon" />,
  width: 850,
  height: 750, 
  content: (props) => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="text-kicker">Case Study</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Big<span className="text-highlight flush-left">education</span><br /> platforms.
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1 }}
          >
            <GracefulImage 
              src="/Hero/Hero_6.png" 
              alt="Alffie Hero" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <ProjectTemplate blocks={alffieBlocks} {...props} /> 
      </div>
    </div>
  ) 
};