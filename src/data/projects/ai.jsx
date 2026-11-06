import { motion } from 'framer-motion';

export const aiData = { 
  id: 'ai', 
  title: 'Thoughts on AI', 
  themeColor: '#00bfff',
  width: 800, 
  height: 750, 
  content: () => (
    <div className="project-page-wrapper" style={{ padding: '48px 0 32px 0', position: 'relative' }}>
      
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', marginBottom: '24px', minHeight: '140px' }}>
          
          <div style={{ position: 'relative', zIndex: 2, marginBottom: '40px'}}>
            <span className="text-kicker">Perspective</span>
            <h1 className="text-display" style={{ margin: 0, wordBreak: 'normal' }}>
              Navigating the <br/>
              <span className="text-highlight">AI uprising.</span>
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
              src="/Hero/Hero_03.png" 
              alt="AI Wave Hero" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        </div>
      </div>
      
      <div className="project-grid">
        <div className="project-text-column" style={{ position: 'relative', zIndex: 2 }}>
          
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            AI has completely transformed how I work. My role as an educational illustrator has shifted heavily toward prompt engineering and AI management (a process I'd honestly prefer to fully automate so I can get back to actual hands-on creative work). While the images, video, audio, and code I generate are often higher quality, the real value is that I can work 10 to 20 times faster. That said, the skills I spent 15 years building before the 2022 AI boom aren't wasted. Taking raw AI output, dropping it into an editor, clipping audio, balancing volume, adding effects, and exporting the correct format for the web still requires a solid media and design background. Most people don't know how to do that.
          </p>
          
          <h3 style={{ margin: '32px 0 8px 0' }}>So, where is it all going?</h3>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            I follow tech news daily, and critics like Ed Zitron consistently point to an "AI bubble" and the circular financing keeping it afloat. AI developers like Anthropic and OpenAI are nowhere near profitable, and hyperscalers like Amazon, Microsoft, and Google aren't making their margins on AI products. Running AI at scale is massively expensive due to hardware like NVIDIA's H100 GPUs, which cost US$25,000 to $40,000 each. Right now, the only businesses making real money are the chipmakers outfitting the datacentres. NVIDIA's stock is up 900% since the 2021 crypto boom, turning it into a $5 trillion company.
          </p>
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            Where does this leave the consumers, workers, and businesses relying on AI? Prices will likely jump as these companies are forced to turn a profit. If the numbers don't add up, some of the platforms we use will fold. We might soon hit a point where relying on cloud AI just isn't financially viable. When that happens, we'll need to lean back on our traditional creative skills and shift toward running smaller, slightly slower open-source models locally on our own devices, like Google's Gemma.
          </p>
          
          <h3 style={{ margin: '32px 0 8px 0' }}>The tools I use</h3>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            For work, I rely on custom Claude skills I developed to help my team create consistent code blocks in Rise. I also use ElevenLabs to generate images, audio and video. When we burn through our ElevenLabs credits, I switch to ComfyUI, using my 16GB GPU (9070XT) to generate images offline with Z-Image. Adobe Firefly is decent for backgrounds but usually ruins faces and hands.
          </p>
          <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
            For my smart home and phone, I use Google Gemini. I also run Google Gemma locally on LLM Studio. Beyond that, I've used ChatGPT extensively and dabbled with Copilot.
          </p>
        </div>
      </div>
    </div>
  )
};