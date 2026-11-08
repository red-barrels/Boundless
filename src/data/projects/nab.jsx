import { motion } from 'framer-motion';
import ProjectTemplate from '../../components/ProjectTemplate';
import GracefulImage from '../../components/GracefulImage';

const publicUrl = process.env.PUBLIC_URL || '';

const NABImages = [
  { url: `${publicUrl}/NAB/NAB_02_growingindustry_edit_2100px.gif`, caption: '' },
  { url: `${publicUrl}/NAB/NAB_3.jpg`, caption: '' },
  { url: `${publicUrl}/NAB/NAB_2.jpg`, caption: '' },
  { url: `${publicUrl}/NAB/NAB_1.jpg`, caption: '' }
];

const nabBlocks = [
  { type: 'text', title: 'Accredited broker course', text: 'NAB needed an accredited course for brokers wishing to partner with the bank. The course was designed to get brokers up to speed on how to navigate and use NAB’s available tools and services.' },
  { type: 'text', title: 'Custom LMS development', text: 'Working closely with our contact at the bank, I customised Alffie’s LMS using HTML and CSS to build out the course environment. The main focus was ensuring the interface and user experience strictly adhered to NAB’s rigid corporate branding guidelines, delivering a seamless, professional product that felt native to the bank.' },
  { type: 'carousel', images: NABImages, description: 'A collection of images I created for the NAB, the Bank Behind the Broker: Accreditation Course ' },
  { type: 'video', src: `${publicUrl}/Video/committedtotheindustry_update.mp4`,
  description: 'A video that I recorded audio for, created images, and ensured met the strict NAB branding guidelines.',
  poster: `${publicUrl}/Video/Thumbnails/NAB_Thumbnail.png` }
];

export const nabData = { 
  id: 'nab', 
  title: 'NAB',
  icon: <GracefulImage src="/Icons/NAB_icon.png" alt="NAB" className="app-icon" />,
  themeColor: '#ed0000',
  width: 850, 
  height: 750, 
  content: (props) => (
    <div className="project-page-wrapper" style={{ padding: '90px 0 32px 0', position: 'relative' }}>
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="text-kicker">Case Study</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Corporate <br />
              <span className="text-highlight">banking.</span>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1 }}
          >
            <GracefulImage  src="/Hero/Hero_08.png" alt="NAB Hero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <ProjectTemplate blocks={nabBlocks} {...props} /> 
      </div>
    </div>
  )
};