import { motion } from 'framer-motion';

export const aboutData = {
  id: 'about',
  title: 'About Me',
  themeColor: '#ff6eb4',
  width: 800,
  height: 750,
  content: () => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      
      {/* 1. Header Section with constrained text width and safe container height */}
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '40px' }}>
          
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '780px' }}>
            <span className="text-kicker">Introduction</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Hi, I'm
              <span className="text-highlight flush-left">Tom</span> Cheesman.
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-illustration"
            style={{ position: 'absolute', pointerEvents: 'none', zIndex: 1, maxWidth: '750px' }}
          >
            <img 
              src="/Hero/Hero_02.png" 
              alt="Tom Cheesman Hero" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        </div>
      </div>

      {/* 2. Body Section */}
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', zIndex: 2 }}>
          
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            I’m an experienced multidisciplinary designer and digital creator based in Melbourne. For over 15 years, I’ve been working at the intersection of design, education, and technology. I started out as an illustrator back in 2008, and over the years, my role has evolved to cover everything from team leadership and video production to UX/UI and front-end development. The recent explosion of AI in media production has changed the way I work. It’s been a massive industry shift to navigate, but it allowed me to build this website in ways I wouldn't have been able to otherwise.
          </p>
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            I’ve technically been at a version of the same company since 2009, though it hasn’t exactly been a straight line. I was first employed by Leap Learning as an illustrator. By early 2010, most of the company was made redundant and we became Leap eLearning. Over those intervening years, we became Leap Training and actually grew to become the biggest, most successful company in our sector. But in 2015, following major government policy changes and some ill-fated side investments from leadership, the business hit another wall and was bought by PAN Group. We rebranded as Alffie, which eventually merged with Open Colleges and School of Health in 2022. Surviving two bankruptcies, four rounds of redundancies, and a handful of mergers taught me how to roll with the punches. I've worked under ten different managers, absorbed whatever responsibilities were thrown my way, and learned how to get things done no matter how chaotic the background noise got.
          </p>
          
          <h3>Education</h3>
          <ul style={{ margin: '0 0 24px 0', opacity: 0.8, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}><b>Bachelor of Design in Multimedia:</b> Swinburne University of Technology (2004 to 2006)</li>
            <li style={{ marginBottom: '8px' }}><b>Diploma of Music (Sound Production):</b> RMIT University (2007)</li>
            <li style={{ marginBottom: '8px' }}><b>Web Development:</b> PHP & JavaScript (Pluralsight), Web Design (Treehouse)</li>
            <li><b>Brighton Bay Art Design & Photography Program:</b> (2003) - Art history, Industrial design, graphic design, ceramics, printing, drawing, life drawing, photography, developing film in a dark room.</li>
          </ul>
          
          <h3>Personal life</h3>
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            I live with my wife, Eleanor, our two kids, Florence (11) and Wilbur (9), and our scruffy little dog, Bootsacatsa (Boots). I spend my downtime tinkering with my PC, playing immersive video games, playing Sunday soccer with a bunch of local dads (I’m not very good but I love it), pilates and yoga, or reading/listening to whatever we're reading in the Tough Guy Book Club. I enjoy nerding-out on science-fiction, fantasy, animals, birds, insects, technology, computer hardware and software, space, prehistoric life, language and audio-visual equipment.
          </p>
          
          <h3>Contact</h3>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            <b>Phone: </b>0431 480 866
          </p>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            <b>Email: </b>
            <a href="mailto:thomas.j.cheesman@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>thomas.j.cheesman@gmail.com</a>
          </p>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            <b>LinkedIn: </b>
            <a href="https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3Br14bbX0VSbGPMsh5Hnwu4Q%3D%3D" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
              View Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  )
};