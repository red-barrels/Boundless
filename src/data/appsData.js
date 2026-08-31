import About from '../components/About';
import ProjectTemplate from '../components/ProjectTemplate';

export const dummyBlocks = [
  { type: 'text', title: 'Phase 1: Research', text: 'Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.' },
  { type: 'text', title: 'Phase 2: Execution', text: 'Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.' },
  { type: 'text', title: 'Final delivery', text: 'Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' }
];

export const leapImages = [
  { url: '/Leap/carrousel/rain.jpg', caption: '' },
  { url: '/Leap/carrousel/setting_goals_swim_snorkel_scuba.jpg', caption: '' },
  { url: '/Leap/carrousel/sorting_information_writing_down.png', caption: '' },
  { url: '/Leap/carrousel/vampire_cartoon_weaknesses_01.png', caption: '' },
  { url: '/Leap/carrousel/vampire_cartoon_why_leave_last_job.png', caption: '' }
];

export const leapBlocks = [
  { type: 'text', title: 'Online training', text: 'Leap Learning/eLearning/Training was a Nationally Accredited online training company that created courses for unemployed people who were using the services of employment consultants (ECs) and Job Services Australia.' },
  { type: 'text', title: 'Background and leadership', text: 'I started at Leap in 2009 as an illustrator. The company went through a massive overhaul shortly after, which forced a small crew of us to step up and rebuild. Under the new name Leap eLearning, I moved into a leadership role managing a team of illustrators and designers.' },
  { type: 'carousel', description: 'A collections of illustrations made for Leap courses.', images: leapImages },
  { type: 'text', title: 'Studio development', text: 'I took over our marketing media and built our internal film and photography studio from scratch. That meant outfitting the space with the right gear and eventually directing talent and crews on set and on location.' },
  { type: 'video', src: '/Video/LF_welcome_emma.mp4', description: 'A video I directed and filmed for the Ladder Foundation in partnership with Leap Training.', poster: '/Video/Thumbnails/ladder-foundation.png' }
];

export const alffieImages = [
  { url: '/Alffie/carrousel/5-stars.jpg', caption: '' },
  { url: '/Alffie/carrousel/business_cards.png', caption: '' },
  { url: '/Alffie/carrousel/chemical.jpg', caption: '' },
  { url: '/Alffie/carrousel/community_meeting.png', caption: '' },
  { url: '/Alffie/carrousel/culture_diversity.png', caption: '' },
  { url: '/Alffie/carrousel/evolution.jpg', caption: '' },
  { url: '/Alffie/carrousel/failing_stress_management_plan_meditate.png', caption: '' },
  { url: '/Alffie/carrousel/human_rights_freedom_expression.png', caption: '' },
  { url: '/Alffie/carrousel/learning_language1.png', caption: '' },
  { url: '/Alffie/carrousel/meditation_comm.png', caption: '' },
  { url: '/Alffie/carrousel/person_difficult_communication.png', caption: '' },
  { url: '/Alffie/carrousel/talking_too_loudly_cs.png', caption: '' },
  { url: '/Alffie/carrousel/traditional_approach_comm_services.png', caption: '' }
];

export const alffieBlocks = [
  { type: 'text', text: 'Alffie is Australia’s largest nationally accredited digital education provider in employment services.' },
  { type: 'text', title: 'Bridging design and development', text: 'I joined Alffie in 2015, taking on a role that bridged design, marketing, and front-end web development. I learned UX/UI, HTML, CSS, and Bootstrap, along with enough JavaScript to handle interactive elements, eventually building a custom site using Webflow.' },
  { type: 'carousel', images: alffieImages },
  { type: 'text', title: 'Corporate client management', text: 'Working alongside corporate clients like NAB, Melbourne University and the PAN Group meant my responsibilities expanded to include client communication and ensuring all project output aligned strictly with corporate brand identities.' },
  { type: 'video', 
    src: '/Video/foundations_of_wellbeing_partnership_presentation_captions_SMALL.mp4', 
    poster: '/Video/Thumbnails/foundations_of_wellbeing.png' 
  }
];
export const ocImages = [
  { url: '/OC/carrousel/AHCPCM308_1_photosynthesis.jpg', caption: '' },
  { url: '/OC/carrousel/AHCPCM308_1_Transpiration.jpg', caption: '' },
  { url: '/OC/carrousel/leaf_anatomy_labelledv1.jpg', caption: '' }
];

export const openCollegesBlocks = [
  { type: 'text', text: 'Open Colleges is Australia’s oldest distance education provider, delivering nationally accredited online courses to the general public.' },
  { type: 'text', title: 'Content migration', text: 'When I joined, the immediate challenge was migrating their entire catalogue of training content from one custom learning management system to another. I led this transition, training and managing a team to rebuild the courses from the ground up using Articulate Rise 360.' },
  { type: 'text', title: 'Scaling course production', text: 'To make sure everything stayed consistent across such a massive volume of content, I developed comprehensive style guides and custom templates that allowed our team to scale the rollout efficiently while keeping the design tight.' },
  { type: 'carousel', images: ocImages, description: 'A collection of illustrations created for Certificate III in Horticulture.' },
  { 
    type: 'iframe', 
    title: 'Open Colleges Quiz',
    description: 'A custom HTML, CSS and JavaScript code block',
    srcDoc: `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Quiz</title>
</head>
<body>
<div style="padding: 1.5rem; padding-bottom: 2.5rem; background: transparent;">
  <div id="rise-quiz"
       style="font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              max-width: 800px; margin: 0 auto; background: #ffffff;
              border: 1px solid #e6e6e6; border-radius: .4rem;
              box-shadow: 0 .2rem 3rem #0000001a; overflow: visible;">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      /* ── OC purple: #a655e0  hover: #9648ca  light tint: #f5edfb ── */
      .rq-option:hover { background: #f5edfb !important; }
      #rq-prev:not(:disabled):hover, #rq-next:not(:disabled):hover, #rq-review:hover { background: #f5edfb !important; }
      #rq-check, #rq-next.primary, #rq-retry, #rq-retry-inline { background: #a655e0 !important; color: #fff !important; border-color: #a655e0 !important; }
      #rq-check:not(:disabled):hover, #rq-next.primary:hover, #rq-retry:hover, #rq-retry-inline:hover { background: #9648ca !important; }
      #rq-prev:disabled, #rq-next:disabled { opacity: 0.6; cursor: default !important; }
      #rq-check:disabled { background: #ffffff !important; color: #6b7280 !important; border-color: #e5e7eb !important; opacity: 0.6 !important; cursor: default !important; }
      #rq-review-banner { display: none; background: #f3e5fc; color: #1e293b; padding: 16px 20px; border: 1px solid #d9a8f5; border-radius: .4rem; font-size: 15px; font-weight: 600; margin-bottom: 24px; }
      input[type=radio]:disabled, input[type=checkbox]:disabled { opacity: 1 !important; }

      /* Drag-and-drop match styles */
      .rq-bank-pos { display: flex; align-items: stretch; }
      .rq-bank-tile {
        flex: 1; padding: 12px 14px; background: #f0f4f8; border: 1.5px solid #94a3b8;
        border-radius: .4rem; font-size: 17px; line-height: 1.6; cursor: grab;
        user-select: none; color: #0f172a;
        transition: border-color .15s, box-shadow .15s, opacity .15s;
        font-family: 'Inter', sans-serif; display: flex; align-items: center;
      }
      .rq-bank-tile:hover { border-color: #a655e0; box-shadow: 0 3px 10px rgba(166,85,224,.28); }
      .rq-bank-tile.rq-dragging { opacity: .4; cursor: grabbing; }
      .rq-bank-ph {
        flex: 1; border: 2px dashed #e9ecef; border-radius: .4rem; background: #fafafa;
        min-height: 40px; transition: border-color .15s, background .15s;
      }
      .rq-bank-pos.rq-drag-over .rq-bank-ph { border-color: #94a3b8; background: #f0e0fc; }
      .rq-slot-tile {
        margin-top: 10px; padding: 12px 14px; background: #eedcfb;   /* purple tint */
        border: 1.5px solid #c07de0; border-radius: .3rem; font-size: 17px;
        line-height: 1.5; cursor: grab; user-select: none; color: #0f172a;
        font-family: 'Inter', sans-serif; transition: border-color .15s, box-shadow .15s, opacity .15s;
      }
      .rq-slot-tile:hover { border-color: #a655e0; box-shadow: 0 3px 10px rgba(166,85,224,.28); }
      .rq-slot-tile.rq-dragging { opacity: .4; cursor: grabbing; }
      .rq-slot {
        padding: 14px 16px; background: #f8fafc; border: 1.5px solid #e5e7eb;
        border-radius: .4rem; transition: border-color .15s, background .15s, box-shadow .15s;
      }
      .rq-slot.rq-drag-over { border-color: #a655e0 !important; background: #f5edfb !important; box-shadow: 0 0 0 3px rgba(166,85,224,.18) !important; }
      .rq-drop-zone {
        margin-top: 10px; min-height: 46px; border: 2px dashed #cbd5e1; border-radius: .3rem;
        display: flex; align-items: center; justify-content: center; color: #94a3b8;
        font-size: 17px; padding: 10px; font-family: 'Inter', sans-serif;
        transition: border-color .15s, background .15s, color .15s;
      }
      .rq-slot.rq-drag-over .rq-drop-zone { border-color: #a655e0; background: #ede0fc; color: #a655e0; }
      .rq-slot.correct   { border-color: #86efac !important; background: #f0fdf4 !important; }
      .rq-slot.incorrect { border-color: #fecaca !important; background: #fff1f2 !important; }
      .rq-slot-tile.correct   { background: #bbf7d0 !important; border-color: #4ade80 !important; cursor: default !important; }
      .rq-slot-tile.incorrect { background: #fecaca !important; border-color: #f87171 !important; cursor: default !important; }

      /* Sort (categorise) styles */
      .rq-sort-instruction { font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.5; color: #6b7280; margin-bottom: 18px; }
      .rq-sort-bank {
        display: grid; gap: 12px; margin-bottom: 20px; padding: 16px;
        border: 2px dashed #e9ecef; border-radius: .4rem; background: #fafafa;
        min-height: 84px; transition: border-color .15s, background .15s;
      }
      .rq-sort-bank.rq-drag-over { border-color: #94a3b8; background: #f0e0fc; }
      .rq-sort-bank-empty { display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 17px; padding: 16px; font-family: 'Inter', sans-serif; }
      .rq-sort-tile {
        padding: 16px 18px; background: #f0f4f8; border: 1.5px solid #94a3b8;
        border-radius: .4rem; font-size: 17px; line-height: 1.5; cursor: grab;
        user-select: none; color: #0f172a; font-family: 'Inter', sans-serif;
        transition: border-color .15s, box-shadow .15s, opacity .15s, background .15s;
      }
      .rq-sort-tile:hover { border-color: #a655e0; box-shadow: 0 3px 10px rgba(166,85,224,.28); }
      .rq-sort-tile.rq-dragging { opacity: .4; cursor: grabbing; }
      .rq-sort-tile.rq-selected { border-color: #a655e0; background: #eedcfb; box-shadow: 0 0 0 3px rgba(166,85,224,.22); }
      .rq-sort-tile.placed { background: #eedcfb; border-color: #c07de0; }  /* purple tint */
      .rq-sort-tile.correct   { background: #bbf7d0 !important; border-color: #4ade80 !important; cursor: default !important; }
      .rq-sort-tile.incorrect { background: #fecaca !important; border-color: #f87171 !important; cursor: default !important; }
      .rq-sort-cols { display: grid; gap: 16px; align-items: stretch; }
      .rq-sort-col {
        padding: 20px 20px 24px; background: #f8fafc; border: 1.5px solid #e5e7eb;
        border-radius: .4rem; transition: border-color .15s, background .15s, box-shadow .15s;
      }
      .rq-sort-col.rq-drag-over { border-color: #a655e0 !important; background: #f5edfb !important; box-shadow: 0 0 0 3px rgba(166,85,224,.18) !important; }
      .rq-sort-head { font-size: 17px; font-weight: 700; letter-spacing: .02em; color: #334155; margin-bottom: 14px; font-family: 'Inter', sans-serif; }
      .rq-sort-drop { display: grid; gap: 12px; min-height: 200px; align-content: start; }
      .rq-sort-col .rq-drop-zone { margin-top: 0; min-height: 200px; font-size: 17px; padding: 16px; }
      .rq-sort-hint { margin-top: 10px; padding: 10px 14px; font-size: 17px; color: #15803d; font-weight: 600; background: #dcfce7; border-radius: .3rem; border: 1px solid #86efac; line-height: 1.5; }
    </style>
    <div id="rq-body" style="padding: 32px; border-radius: .4rem;">
      <div id="rq-review-banner">Reviewing answers. Click <strong>'Retry quiz'</strong> to begin again.</div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div id="rq-progress-text" style="font-size:14px; color:#6b7280;">Question 1 of N</div>
        <div id="rq-score" style="padding:6px 12px; background:#f9fafb; border:1px solid #e5e7eb; font-size:13px; font-weight:600; color:#1e293b; border-radius:.4rem;">Score: 0/0</div>
      </div>
      <div id="rq-question" style="margin-bottom:32px;"></div>
      <div id="rq-feedback" aria-live="polite"
           style="margin-top:20px; padding:18px 20px; border:1px solid #e5e7eb; background:#fbfbff; color:#111827; display:none; border-radius:.4rem; font-size:17px;"></div>
      <div style="display:flex; gap:14px; justify-content:space-between; align-items:center; margin-top:32px;">
        <div style="display:flex; gap:12px; align-items:center;">
          <button id="rq-prev" type="button"
                  style="font-family:'Inter'; display:inline-flex; align-items:center; gap:8px; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; background:#ffffff; cursor:pointer; font-weight:600; transition:background .2s;"
                  disabled>&#8592; Previous</button>
          <button id="rq-retry-inline" type="button"
                  style="display:none; font-family:'Inter'; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; cursor:pointer; font-weight:700; transition:background .2s;">Retry quiz</button>
        </div>
        <div style="display:flex; gap:12px;">
          <button id="rq-check" type="button"
                  style="font-family:'Inter'; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; cursor:pointer; font-weight:700; transition:background .2s;">Check answer</button>
          <button id="rq-next" type="button"
                  style="font-family:'Inter'; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; background:#ffffff; cursor:pointer; font-weight:700; transition:background .2s;"
                  disabled>Next &#8594;</button>
        </div>
      </div>
      <div id="rq-results" style="display:none; margin-top:32px; padding:22px; background:#f8f0fd; border-radius:.4rem;">
        <div id="rq-results-text" style="font-weight:700; font-size:17px; margin-bottom:16px;"></div>
        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <button id="rq-retry" type="button"
                  style="font-family:'Inter'; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; cursor:pointer; font-weight:700; transition:background .2s;">Retry quiz</button>
          <button id="rq-review" type="button"
                  style="font-family:'Inter'; padding:12px 24px; border-radius:9999px; border:1px solid #e5e7eb; background:#ffffff; cursor:pointer; font-weight:700; transition:background .2s;">Review answers</button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
(function () {
  /* ── EDIT ONLY THIS ARRAY ── */
  const questions = [
    {
      type: "single",
      prompt: "Which of the following best describes feedback?",
      choices: [
        "A record of every mistake you have made",
        "Information about how well you are doing something, from someone who can observe your work and understands the standard, or from your own reflection",
        "A formal warning from your supervisor",
        "A summary of your KPIs for the month"
      ],
      answerIndex: 1,
      explanations: [
        "Feedback is not only about mistakes. It covers what is working as well as what needs to change.",
        "Feedback is information that helps you understand how you are performing and where you can improve.",
        "Feedback is not always formal, and it is not the same as a warning.",
        "A summary of your KPIs is part of a performance review, but feedback is broader than that."
      ]
    },
    {
      type: "single",
      prompt: "Which of these is not one of the 4 sources of feedback?",
      choices: [
        "Peers",
        "Self-reflection",
        "Supervisor",
        "A training provider"
      ],
      answerIndex: 3,
      explanations: [
        "Peers are one of the 4 sources. They work alongside you and can offer useful observations.",
        "Self-reflection is one of the 4 sources. It involves evaluating your own performance and identifying areas to improve.",
        "Supervisors are one of the 4 sources. They oversee your work and give insights based on what they observe.",
        "Training providers deliver courses, but they are not one of the 4 sources of feedback on your performance."
      ]
    },
    {
      type: "single",
      prompt: "What is the difference between positive and constructive feedback?",
      choices: [
        "Positive feedback comes from a supervisor, constructive feedback comes from a peer",
        "There is no real difference, both mean the same thing",
        "Positive feedback confirms what is working, constructive feedback points out what needs to change",
        "Positive feedback is always written, constructive feedback is always spoken"
      ],
      answerIndex: 2,
      explanations: [
        "The difference is in what the feedback says, not who it comes from.",
        "They serve different purposes and should not be treated as the same thing.",
        "Positive feedback highlights strengths, and constructive feedback identifies areas to improve.",
        "The difference is not about how the feedback is delivered."
      ]
    },
    {
      type: "single",
      prompt: "Put the 3-step process for reviewing further learning needs in the correct order.",
      choices: [
        "Gather feedback, analyse and interpret it, identify further learning needs",
        "Analyse and interpret feedback, identify further learning needs, gather feedback",
        "Identify further learning needs, gather feedback, analyse and interpret it"
      ],
      answerIndex: 0,
      explanations: [
        "This is the correct sequence: collect the information first, then make sense of it, then decide what comes next.",
        "Gathering has to come first, because there is nothing to analyse until you have the feedback.",
        "You cannot identify a learning need before gathering and interpreting the feedback that points to it."
      ]
    },
    {
      type: "single",
      prompt: "Which piece of feedback is specific, relevant and balanced?",
      choices: [
        "\\"The course was fine.\\"",
        "\\"Keep it up.\\"",
        "\\"You did well.\\"",
        "\\"The course helped me plan extra wrapping time for fragile orders, which met my goal, but it did not cover team leadership.\\""
      ],
      answerIndex: 3,
      explanations: [
        "This does not say what worked or what did not, so it is neither specific nor balanced.",
        "This is encouraging, but there is nothing specific in it to act on.",
        "This names no specific example and mentions only what worked, so it is not balanced.",
        "This is specific, it is tied to the goal, and it is balanced — it says both what worked and what did not."
      ]
    }
  ];
  /* ── END EDITABLE SECTION ── */

  /* OC purple palette for JS-driven inline styles */
  const C = {
    primary:     "#a655e0",
    primaryHover: "#9648ca",
    lightTint:   "#f5edfb"
  };

  /* Shuffle right-side options for match questions */
  questions.forEach(q => {
    if (q.type !== "match") return;
    const r = q.pairs.map(p => p.right);
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    q.shuffledOptions = r;
  });
  /* Shuffle item order for sort questions */
  questions.forEach(q => {
    if (q.type !== "sort") return;
    q.order = q.items.map((_, i) => i);
    for (let i = q.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [q.order[i], q.order[j]] = [q.order[j], q.order[i]];
    }
  });

  let idx = 0;
  function blankAnswer(q) {
    if (q.type === "match") return q.pairs.map(() => '');
    if (q.type === "sort")  return q.items.map(() => '');
    if (q.type === "multiple") return [];
    return null;
  }
  let userAnswers = questions.map(blankAnswer);
  let reviewMode = false;
  let questionLocked = questions.map(() => false);
  let activeDrag = { tileIdx: null, fromSlot: null };
  let activeSortDrag = null;
  let selectedSortItem = null;

  const qWrap        = document.getElementById("rq-question");
  const feedbackEl   = document.getElementById("rq-feedback");
  const progressText = document.getElementById("rq-progress-text");
  const scoreEl      = document.getElementById("rq-score");
  const btnPrev      = document.getElementById("rq-prev");
  const btnNext      = document.getElementById("rq-next");
  const btnCheck     = document.getElementById("rq-check");
  const results      = document.getElementById("rq-results");
  const resultsText  = document.getElementById("rq-results-text");
  const btnRetry     = document.getElementById("rq-retry");
  const btnReview    = document.getElementById("rq-review");
  const reviewBanner = document.getElementById("rq-review-banner");
  const btnRetryInline = document.getElementById("rq-retry-inline");

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&","&amp;").replaceAll("<","&lt;")
      .replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  }
  function formatPrompt(s) {
    return escapeHtml(s).split(/\\n\\s*\\n/).map(p => '<p style="margin:0 0 14px 0;">' + p + '</p>').join('');
  }
  function arraysEqualAsSets(a, b) {
    if (!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length) return false;
    const s = new Set(a); for (const x of b) if (!s.has(x)) return false; return true;
  }
  function scoreNow() {
    let s = 0, attempted = 0;
    questions.forEach((q, i) => {
      const ua = userAnswers[i];
      if (q.type === "single") {
        if (ua !== null) { attempted++; if (ua === q.answerIndex) s++; }
      } else if (q.type === "multiple") {
        if (ua?.length) { attempted++; if (arraysEqualAsSets(ua, q.answerIndex)) s++; }
      } else if (q.type === "match") {
        if (ua?.some(v => v !== '')) { attempted++; if (q.pairs.every((p,j) => ua[j] === p.right)) s++; }
      } else if (q.type === "sort") {
        if (ua?.some(v => v !== '')) { attempted++; if (q.items.every((it,j) => ua[j] === it.category)) s++; }
      }
    });
    return { s, attempted };
  }
  function updateScoreUI() {
    const { s, attempted } = scoreNow();
    scoreEl.textContent = "Score: " + s + "/" + attempted;
  }
  function setButtonState(locked) {
    if (locked) {
      btnCheck.disabled = true;
      btnCheck.style.cssText = "font-family:'Inter';padding:12px 24px;border-radius:9999px;border:1px solid #e5e7eb;cursor:default;font-weight:700;background:#fff;color:#6b7280;opacity:0.6;";
      const hasNext = idx < questions.length - 1;
      btnNext.disabled = !hasNext;
      if (hasNext) {
        btnNext.style.background = C.primary; btnNext.classList.add("primary");
        btnNext.style.color = "#fff"; btnNext.style.borderColor = C.primary;
      } else {
        btnNext.style.background = "#fff"; btnNext.classList.remove("primary");
        btnNext.style.color = "#111827"; btnNext.style.borderColor = "#e5e7eb";
      }
    } else {
      btnCheck.disabled = false; btnCheck.style.opacity = "1";
      btnCheck.style.background = C.primary; btnCheck.style.color = "#fff"; btnCheck.style.borderColor = C.primary;
      btnNext.disabled = true; btnNext.style.background = "#fff";
      btnNext.classList.remove("primary"); btnNext.style.color = "#111827"; btnNext.style.borderColor = "#e5e7eb";
    }
  }

  /* ─────────── SORT ─────────── */
  function renderSortQuestion(q) {
    const isLocked = questionLocked[idx];
    const saved    = userAnswers[idx];
    const unplaced = q.order.filter(i => !saved[i]);
    const bankInner = unplaced.length
      ? unplaced.map(i =>
          '<div class="rq-sort-tile' + (selectedSortItem === i ? ' rq-selected' : '') + '" data-item-idx="' + i + '" draggable="' + !isLocked + '">' +
          escapeHtml(q.items[i].text) + '</div>').join('')
      : '<div class="rq-sort-bank-empty">All statements sorted.</div>';
    const colsHtml = q.categories.map((cat, ci) => {
      const placed = q.order.filter(i => saved[i] === cat);
      const tiles = placed.map(i => {
        const it = q.items[i];
        if (isLocked) {
          const ok = it.category === cat;
          return '<div class="rq-sort-tile ' + (ok ? 'correct' : 'incorrect') + '">' + escapeHtml(it.text) +
            (ok ? '' : '<div class="rq-sort-hint">&#10003; Belongs in ' + escapeHtml(it.category) + '</div>') + '</div>';
        }
        return '<div class="rq-sort-tile placed' + (selectedSortItem === i ? ' rq-selected' : '') + '" data-item-idx="' + i + '" draggable="true">' +
          escapeHtml(it.text) + '</div>';
      }).join('');
      return '<div class="rq-sort-col" data-cat-idx="' + ci + '">' +
        '<div class="rq-sort-head">' + escapeHtml(cat) + '</div>' +
        '<div class="rq-sort-drop">' + (tiles || '<div class="rq-drop-zone">Drop here</div>') + '</div>' +
      '</div>';
    }).join('');
    qWrap.innerHTML =
      '<div style="font-family:\\'Inter\\';font-weight:400;font-size:17px;line-height:1.5;margin-bottom:8px;color:#0f172a;">' + formatPrompt(q.prompt) + '</div>' +
      '<div class="rq-sort-instruction">Drag each statement into the correct column, or tap a statement then tap a column.</div>' +
      '<div class="rq-sort-bank" id="rq-sort-bank">' + bankInner + '</div>' +
      '<div class="rq-sort-cols" style="grid-template-columns:repeat(' + q.categories.length + ',1fr);">' + colsHtml + '</div>';
    if (!isLocked) setupSortInteractions(q);
  }
  function setupSortInteractions(q) {
    function placeItem(itemIdx, cat) {
      const ua = userAnswers[idx].slice();
      ua[itemIdx] = cat;
      userAnswers[idx] = ua;
      selectedSortItem = null;
      activeSortDrag = null;
      renderSortQuestion(q);
    }
    qWrap.querySelectorAll('.rq-sort-tile[data-item-idx]').forEach(tile => {
      const i = parseInt(tile.dataset.itemIdx);
      tile.addEventListener('dragstart', e => {
        activeSortDrag = i; selectedSortItem = null;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(i));
        setTimeout(() => tile.classList.add('rq-dragging'), 0);
      });
      tile.addEventListener('dragend', () => { tile.classList.remove('rq-dragging'); activeSortDrag = null; });
      tile.addEventListener('click', () => {
        selectedSortItem = (selectedSortItem === i) ? null : i;
        renderSortQuestion(q);
      });
    });
    qWrap.querySelectorAll('.rq-sort-col').forEach(col => {
      const cat = q.categories[parseInt(col.dataset.catIdx)];
      col.addEventListener('dragover', e => { if (activeSortDrag === null) return; e.preventDefault(); col.classList.add('rq-drag-over'); });
      col.addEventListener('dragleave', e => { if (!col.contains(e.relatedTarget)) col.classList.remove('rq-drag-over'); });
      col.addEventListener('drop', e => {
        e.preventDefault(); col.classList.remove('rq-drag-over');
        if (activeSortDrag !== null) placeItem(activeSortDrag, cat);
      });
      col.addEventListener('click', e => {
        if (e.target.closest('.rq-sort-tile[data-item-idx]')) return;
        if (selectedSortItem !== null) placeItem(selectedSortItem, cat);
      });
    });
    const bank = qWrap.querySelector('#rq-sort-bank');
    bank.addEventListener('dragover', e => { if (activeSortDrag === null) return; e.preventDefault(); bank.classList.add('rq-drag-over'); });
    bank.addEventListener('dragleave', e => { if (!bank.contains(e.relatedTarget)) bank.classList.remove('rq-drag-over'); });
    bank.addEventListener('drop', e => {
      e.preventDefault(); bank.classList.remove('rq-drag-over');
      if (activeSortDrag !== null) placeItem(activeSortDrag, '');
    });
    bank.addEventListener('click', e => {
      if (e.target.closest('.rq-sort-tile[data-item-idx]')) return;
      if (selectedSortItem !== null) placeItem(selectedSortItem, '');
    });
  }
  function showSortFeedback(q) {
    const ua = userAnswers[idx];
    const ok = q.items.filter((it,j) => ua[j] === it.category).length;
    const all = ok === q.items.length;
    feedbackEl.style.display = "block";
    feedbackEl.style.borderColor = all ? "#86efac" : "#fecaca";
    feedbackEl.style.background  = all ? "#f0fdf4"  : "#fff1f2";
    feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;margin-bottom:4px;">' + (all?"&#9989; Correct!":"&#10060; Not quite.") + '</div>' +
      '<div style="font-family:\\'Inter\\';font-size:17px;line-height:1.5;">' + (all ? "You sorted every statement correctly." : "You sorted " + ok + " of " + q.items.length + " statements correctly. The correct column is shown above for any you missed.") + '</div>';
  }

  /* ─────────── MATCH ─────────── */
  function renderMatchQuestion(q) {
    const isLocked = questionLocked[idx];
    const saved    = userAnswers[idx];
    const placements = q.pairs.map((_, i) => {
      const v = saved[i];
      return (v && v !== '') ? q.shuffledOptions.indexOf(v) : null;
    });
    const placedSet = new Set(placements.filter(p => p !== null));
    const hasLabels = q.leftLabel || q.rightLabel;
    const labelRow = hasLabels
      ? '<div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#6b7280;font-family:\\'Inter\\',sans-serif;padding-bottom:2px;">' + escapeHtml(q.leftLabel || '') + '</div>' +
        '<div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#6b7280;font-family:\\'Inter\\',sans-serif;padding-bottom:2px;">' + escapeHtml(q.rightLabel || '') + '</div>'
      : '';
    const rowsHtml = q.shuffledOptions.map((opt, bankPos) => {
      const isPlaced = placedSet.has(bankPos);
      const leftCell = isPlaced
        ? '<div class="rq-bank-pos" data-bank-pos="' + bankPos + '"><div class="rq-bank-ph"></div></div>'
        : '<div class="rq-bank-pos" data-bank-pos="' + bankPos + '"><div class="rq-bank-tile" data-tile-idx="' + bankPos + '" draggable="' + !isLocked + '">' + escapeHtml(opt) + '</div></div>';
      const pair     = q.pairs[bankPos];
      const pTileIdx = placements[bankPos];
      const pText    = pTileIdx !== null ? q.shuffledOptions[pTileIdx] : null;
      let slotClass  = 'rq-slot', inner = '', hint = '';
      if (isLocked && pText !== null) {
        const ok = pText === pair.right;
        slotClass += ok ? ' correct' : ' incorrect';
        inner = '<div class="rq-slot-tile ' + (ok ? 'correct' : 'incorrect') + '">' + escapeHtml(pText) + '</div>';
        if (!ok) hint = '<div style="margin-top:8px;padding:8px 12px;font-size:17px;color:#15803d;font-weight:600;background:#dcfce7;border-radius:.3rem;border:1px solid #86efac;line-height:1.5;font-family:\\'Inter\\',sans-serif;">&#10003; ' + escapeHtml(pair.right) + '</div>';
      } else if (pText !== null) {
        inner = '<div class="rq-slot-tile" data-tile-idx="' + pTileIdx + '" data-from-slot="' + bankPos + '" draggable="' + !isLocked + '">' + escapeHtml(pText) + '</div>';
      } else {
        inner = '<div class="rq-drop-zone">Drop here</div>';
      }
      const rightCell = '<div class="' + slotClass + '" data-slot-idx="' + bankPos + '"><div style="font-size:17px;line-height:1.5;color:#0f172a;font-family:\\'Inter\\',sans-serif;">' + escapeHtml(pair.left) + '</div>' + inner + hint + '</div>';
      return leftCell + rightCell;
    }).join('');
    qWrap.innerHTML =
      '<div style="font-family:\\'Inter\\';font-weight:400;font-size:17px;line-height:1.5;margin-bottom:8px;color:#0f172a;">' + formatPrompt(q.prompt) + '</div>' +
      '<div style="font-family:\\'Inter\\';font-size:17px;color:#6b7280;margin-bottom:16px;">Drag each item on the left onto its match on the right.</div>' +
      '<div id="rq-match-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;">' +
        labelRow + rowsHtml +
      '</div>';
    if (!isLocked) setupDragDrop(q, placements);
  }
  function setupDragDrop(q, placements) {
    function commitMove(toSlot) {
      const { tileIdx, fromSlot } = activeDrag;
      if (tileIdx === null) return;
      if (fromSlot !== null && fromSlot === toSlot) return;
      const cur = placements[toSlot];
      if (fromSlot !== null) placements[fromSlot] = cur;
      placements[toSlot] = tileIdx;
      userAnswers[idx] = placements.map(p => p !== null ? q.shuffledOptions[p] : '');
      activeDrag = { tileIdx: null, fromSlot: null };
      renderMatchQuestion(q);
    }
    qWrap.querySelectorAll('.rq-bank-tile').forEach(tile => {
      tile.addEventListener('dragstart', e => {
        activeDrag = { tileIdx: parseInt(tile.dataset.tileIdx), fromSlot: null };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(activeDrag.tileIdx));
        setTimeout(() => tile.classList.add('rq-dragging'), 0);
      });
      tile.addEventListener('dragend', () => { tile.classList.remove('rq-dragging'); activeDrag = { tileIdx: null, fromSlot: null }; });
    });
    qWrap.querySelectorAll('.rq-slot-tile').forEach(tile => {
      tile.addEventListener('dragstart', e => {
        activeDrag = { tileIdx: parseInt(tile.dataset.tileIdx), fromSlot: parseInt(tile.dataset.fromSlot) };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(activeDrag.tileIdx));
        setTimeout(() => tile.classList.add('rq-dragging'), 0);
      });
      tile.addEventListener('dragend', () => { tile.classList.remove('rq-dragging'); activeDrag = { tileIdx: null, fromSlot: null }; });
    });
    qWrap.querySelectorAll('.rq-slot').forEach(slot => {
      slot.addEventListener('dragover', e => { if (activeDrag.tileIdx === null) return; e.preventDefault(); slot.classList.add('rq-drag-over'); });
      slot.addEventListener('dragleave', e => { if (!slot.contains(e.relatedTarget)) slot.classList.remove('rq-drag-over'); });
      slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('rq-drag-over'); commitMove(parseInt(slot.dataset.slotIdx)); });
    });
    qWrap.querySelectorAll('.rq-bank-pos').forEach(pos => {
      pos.addEventListener('dragover', e => {
        if (activeDrag.tileIdx !== null && activeDrag.fromSlot !== null) { e.preventDefault(); pos.classList.add('rq-drag-over'); }
      });
      pos.addEventListener('dragleave', e => { if (!pos.contains(e.relatedTarget)) pos.classList.remove('rq-drag-over'); });
      pos.addEventListener('drop', e => {
        e.preventDefault(); pos.classList.remove('rq-drag-over');
        const { tileIdx, fromSlot } = activeDrag;
        if (tileIdx !== null && fromSlot !== null) {
          placements[fromSlot] = null;
          userAnswers[idx] = placements.map(p => p !== null ? q.shuffledOptions[p] : '');
          activeDrag = { tileIdx: null, fromSlot: null };
          renderMatchQuestion(q);
        }
      });
    });
  }

  /* ─────────── CHOICE ─────────── */
  function renderChoiceQuestion(q) {
    const saved = userAnswers[idx], name = "rq-q" + idx;
    const choicesHtml = q.choices.map((choice, i) => {
      const isMulti = q.type === "multiple";
      const checked = isMulti ? (Array.isArray(saved) && saved.includes(i) ? "checked" : "") : (saved === i ? "checked" : "");
      return '<label class="rq-option" style="font-family:\\'Inter\\';font-size:17px;display:flex;gap:10px;align-items:flex-start;border:1px solid #e5e7eb;background:#fff;padding:14px 16px;cursor:pointer;border-radius:.4rem;transition:background .2s;">' +
        '<input type="' + (isMulti?'checkbox':'radio') + '" name="' + name + '" value="' + i + '" ' + checked + ' style="margin-top:3px;width:16px;height:16px;accent-color:' + C.primary + ';">' +
        '<span style="line-height:1.5;">' + escapeHtml(choice) + '</span></label>';
    }).join('');
    qWrap.innerHTML =
      '<div style="font-family:\\'Inter\\';font-weight:400;font-size:17px;line-height:1.5;margin-bottom:16px;color:#0f172a;">' + formatPrompt(q.prompt) + '</div>' +
      (q.type==="multiple" ? '<div style="font-family:\\'Inter\\';font-size:17px;color:#6b7280;margin-top:20px;">Select all that apply.</div>' : '') +
      '<div style="display:grid;gap:14px;margin-top:20px;">' + choicesHtml + '</div>';
    if (questionLocked[idx]) qWrap.querySelectorAll('input').forEach(el => el.disabled = true);
  }
  function showMatchFeedback(q) {
    const ua = userAnswers[idx];
    const ok = q.pairs.filter((p,j) => ua[j] === p.right).length;
    const all = ok === q.pairs.length;
    feedbackEl.style.display = "block";
    feedbackEl.style.borderColor = all ? "#86efac" : "#fecaca";
    feedbackEl.style.background  = all ? "#f0fdf4"  : "#fff1f2";
    feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;margin-bottom:4px;">' + (all?"&#9989; Correct!":"&#10060; Not quite.") + '</div>' +
      '<div style="font-family:\\'Inter\\';font-size:17px;line-height:1.5;">' + (all ? "You matched all items correctly." : "You matched " + ok + " of " + q.pairs.length + " items correctly. Correct matches are shown above.") + '</div>';
  }
  function showChoiceFeedback(correct, selected) {
    const q = questions[idx];
    const text = q.explanations ? q.explanations[selected] : q.explanation;
    feedbackEl.style.display = "block";
    feedbackEl.style.borderColor = correct ? "#86efac" : "#fecaca";
    feedbackEl.style.background  = correct ? "#f0fdf4"  : "#fff1f2";
    feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;margin-bottom:4px;">' + (correct?"&#9989; Correct!":"&#10060; Not quite.") + '</div>' +
      '<div style="font-family:\\'Inter\\';font-size:17px;line-height:1.5;">' + escapeHtml(text) + '</div>';
  }
  function renderQuestion() {
    const q = questions[idx];
    progressText.textContent = "Question " + (idx+1) + " of " + questions.length;
    feedbackEl.style.display = "none";
    selectedSortItem = null;
    if (reviewMode) {
      btnPrev.disabled = idx === 0; btnNext.disabled = idx >= questions.length-1;
      btnCheck.style.display = "none"; reviewBanner.style.display = "block"; btnRetryInline.style.display = "inline-block";
    } else {
      btnPrev.disabled = idx === 0; btnCheck.style.display = "inline-block";
      reviewBanner.style.display = "none"; btnRetryInline.style.display = "none";
      setButtonState(questionLocked[idx]);
    }
    if (q.type === "match") renderMatchQuestion(q);
    else if (q.type === "sort") renderSortQuestion(q);
    else renderChoiceQuestion(q);
    if (reviewMode && questionLocked[idx]) {
      if (q.type === "match") showMatchFeedback(q);
      else if (q.type === "sort") showSortFeedback(q);
      else if (q.type === "single" && userAnswers[idx] !== null) showChoiceFeedback(userAnswers[idx] === q.answerIndex, userAnswers[idx]);
      else if (q.type === "multiple" && userAnswers[idx].length > 0) showChoiceFeedback(arraysEqualAsSets(userAnswers[idx], q.answerIndex), null);
    }
  }
  function finishIfLast() {
    if (idx === questions.length-1) {
      const { s } = scoreNow();
      results.style.display = "block";
      resultsText.textContent = "You scored " + s + " out of " + questions.length + ".";
      btnNext.disabled = true; btnCheck.disabled = true;
    }
  }
  function retryQuiz() {
    idx = 0; reviewMode = false;
    userAnswers = questions.map(blankAnswer);
    questionLocked = questions.map(() => false);
    activeDrag = { tileIdx: null, fromSlot: null };
    activeSortDrag = null; selectedSortItem = null;
    results.style.display = "none";
    updateScoreUI(); renderQuestion();
  }
  btnCheck.addEventListener("click", () => {
    if (reviewMode) return;
    const q = questions[idx];
    if (q.type === "sort") {
      if (!userAnswers[idx].every(v => v !== '')) {
        feedbackEl.style.display = "block"; feedbackEl.style.borderColor = "#fde68a"; feedbackEl.style.background = "#fffbeb";
        feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;">&#9888;&#65039; Sort every statement into a column before checking your answer.</div>';
        return;
      }
      questionLocked[idx] = true;
      renderSortQuestion(q); showSortFeedback(q);
      updateScoreUI(); setButtonState(true); finishIfLast();
      return;
    }
    if (q.type === "match") {
      if (!userAnswers[idx].every(v => v !== '')) {
        feedbackEl.style.display = "block"; feedbackEl.style.borderColor = "#fde68a"; feedbackEl.style.background = "#fffbeb";
        feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;">&#9888;&#65039; Match all items before checking your answer.</div>';
        return;
      }
      questionLocked[idx] = true;
      renderMatchQuestion(q); showMatchFeedback(q);
      updateScoreUI(); setButtonState(true); finishIfLast();
      return;
    }
    const inputs = qWrap.querySelectorAll('input[type="radio"],input[type="checkbox"]');
    let selected;
    if (q.type === "single") {
      selected = null;
      for (const el of inputs) if (el.checked) { selected = parseInt(el.value); break; }
      if (selected === null) {
        feedbackEl.style.display = "block"; feedbackEl.style.borderColor = "#fde68a"; feedbackEl.style.background = "#fffbeb";
        feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;">&#9888;&#65039; Choose an option to check your answer.</div>'; return;
      }
    } else {
      selected = []; inputs.forEach(el => { if (el.checked) selected.push(parseInt(el.value)); });
      if (!selected.length) {
        feedbackEl.style.display = "block"; feedbackEl.style.borderColor = "#fde68a"; feedbackEl.style.background = "#fffbeb";
        feedbackEl.innerHTML = '<div style="font-family:\\'Inter\\';font-size:17px;font-weight:700;">&#9888;&#65039; Select at least one option to check your answer.</div>'; return;
      }
    }
    userAnswers[idx] = q.type === "multiple" ? selected.slice().sort((a,b)=>a-b) : selected;
    const correct = q.type === "single" ? selected === q.answerIndex : arraysEqualAsSets(selected, q.answerIndex);
    questionLocked[idx] = true; inputs.forEach(el => el.disabled = true);
    showChoiceFeedback(correct, q.type === "single" ? selected : null);
    updateScoreUI(); setButtonState(true); finishIfLast();
  });
  btnNext.addEventListener("click", () => { if (idx < questions.length-1) { idx++; renderQuestion(); } });
  btnPrev.addEventListener("click", () => { if (idx > 0) { idx--; renderQuestion(); } });
  btnRetry.addEventListener("click", retryQuiz);
  btnRetryInline.addEventListener("click", retryQuiz);
  btnReview.addEventListener("click", () => { reviewMode = true; results.style.display = "none"; idx = 0; renderQuestion(); });
  updateScoreUI();
  renderQuestion();
})();
</script>
</body>
</html>` 
  }
];

export const chepBlocks = [
  { type: 'text', text: 'CHEP is a massive global supply chain company. They needed training material that felt authentic to the day-to-day software their teams actually use.' },
  { type: 'text', title: 'Interactive simulation', text: 'They needed training material that felt authentic to the day-to-day software their teams actually use. To pull this off, I developed custom Claude skills to generate interactive HTML and CSS code blocks. These blocks accurately mimicked the interface of their proprietary supply chain software and documentation, giving staff a realistic, hands-on training experience directly within the course without needing to access the live system.' },
  { 
    type: 'iframe', 
    description: 'CHEP interactive handover documentation',
    title: 'CHEP Handover Practice',
    srcDoc: `<!DOCTYPE html>
<!-- Practice: pick up a handover and finish the delivery — CHEP blue, Rise 360 design system -->
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Practice: pick up a handover and finish the delivery</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: transparent;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 1.5;
  }

  /* ---------- Card container ---------- */
  .card {
    max-width: 740px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 2rem rgba(0,0,0,0.1);
    overflow: visible;
  }
  .card-body { padding: 32px; }

  /* ---------- Header ---------- */
  .eyebrow {
    font-size: 14px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 6px;
  }
  h1 {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  /* ---------- Context strip (blue left accent) ---------- */
  .ctx {
    font-size: 17px;
    color: #1a1a1a;
    background: #e6f3fc;
    border-left: 4px solid #0077c8;
    border-radius: 0 0.4rem 0.4rem 0;
    padding: 14px 16px;
    margin-bottom: 20px;
  }

  /* ---------- Handover note callout (orange) ---------- */
  .hnote {
    background: #FFF8E0;
    border-left: 5px solid #E97132;
    padding: 20px 24px;
    font-size: 17px;
    line-height: 1.5;
    color: #1a1a1a;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .hnote .hh {
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 10px;
  }
  .hnote ul { padding-left: 20px; }
  .hnote li { margin: 4px 0; }

  /* ---------- Step progress pips ---------- */
  .steps {
    display: flex;
    gap: 6px;
    margin-bottom: 24px;
  }
  .step-pip {
    flex: 1;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: #9ca3af;
    padding-bottom: 8px;
    border-bottom: 3px solid #e5e7eb;
    line-height: 1.35;
  }
  .step-pip.on  { color: #1a1a1a;  border-color: #0077c8; }
  .step-pip.done { color: #1F7A4D; border-color: #1F7A4D; }

  /* ---------- Step title / hint (generated by JS into #host) ---------- */
  .stepTitle {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 6px;
  }
  .stepHint {
    font-size: 17px;
    color: #4b5563;
    margin-bottom: 20px;
  }

  /* ---------- Line card (each receival line) ---------- */
  .line {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.4rem;
    padding: 16px 18px;
    margin-bottom: 12px;
  }
  .line .sku  { font-size: 17px; font-weight: 700; color: #1a1a1a; }
  .line .meta { font-size: 17px; color: #4b5563; margin-top: 4px; }
  .line .note { font-size: 17px; color: #1a1a1a; margin-top: 8px; }

  /* ---------- Pick buttons (binary choice) ---------- */
  .picks {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    flex-wrap: wrap;
  }
  .pick {
    flex: 1 1 0;
    min-width: 130px;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-weight: 700;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #111827;
    border-radius: 9999px;
    padding: 12px 10px;
    min-height: 48px;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  /* Clear blue hover — border + tint + text colour all change */
  .pick:hover {
    background: #ebf4fd;
    border-color: #0077c8;
    color: #0077c8;
  }
  .pick[aria-pressed="true"] {
    background: #0077c8;
    color: #ffffff;
    border-color: #0077c8;
  }
  .pick[aria-pressed="true"]:hover {
    background: #006ab4;
    border-color: #006ab4;
    color: #ffffff;
  }

  /* ---------- Classification sub-panel ---------- */
  .sub { margin-top: 12px; display: none; }
  .sub.show { display: block; }
  .sub .clab {
    font-size: 14px;
    font-weight: 600;
    color: #6b7280;
    margin-bottom: 8px;
  }

  /* ---------- Checkbox option rows ---------- */
  .chk {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.4rem;
    padding: 14px 16px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .chk:hover { background: #ebf4fd; border-color: #0077c8; }
  .chk input[type=checkbox] {
    margin-top: 3px;
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    accent-color: #0077c8;
    cursor: pointer;
  }
  .chk span {
    font-size: 17px;
    color: #1a1a1a;
    font-weight: 600;
  }

  /* ---------- Text fields (sign-off) ---------- */
  .field {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .field label {
    flex: 1 1 200px;
    font-size: 17px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .field input[type=text] {
    display: block;
    width: 100%;
    margin-top: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    color: #1a1a1a;
    padding: 11px 13px;
    border: 1px solid #e5e7eb;
    border-radius: 0.4rem;
    min-height: 48px;
  }
  .field input[type=text]:focus {
    outline: none;
    border-color: #0077c8;
    box-shadow: 0 0 0 2px rgba(0,119,200,0.15);
  }

  /* ---------- Feedback panel ---------- */
  .fb {
    margin-top: 20px;
    font-size: 17px;
    line-height: 1.5;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    padding: 0;
  }
  .fb.show { padding: 16px 18px; }
  .fb.ok   { border-color: #86efac; background: #f0fdf4; color: #166534; font-weight: 700; }
  .fb.bad  { border-color: #fecaca; background: #fff1f2; color: #991b1b; }
  .fb.note { border-color: #fde68a; background: #fffbeb; color: #92400e; }

  /* ---------- Action buttons ---------- */
  .actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  .btn {
    font-family: 'Inter', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 9999px;
    border: 1px solid #e5e7eb;
    font-weight: 700;
    font-size: 17px;
    cursor: pointer;
    min-height: 48px;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .btn-primary { background: #0077c8; color: #ffffff; border-color: #0077c8; }
  .btn-primary:hover { background: #006ab4; border-color: #006ab4; }
  .btn-ghost { background: #ffffff; color: #111827; border-color: #e5e7eb; }
  .btn-ghost:hover { background: #ebf4fd; border-color: #0077c8; color: #0077c8; }

  /* ---------- Done / completion panel ---------- */
  .done {
    display: none;
    max-width: 740px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-top: 4px solid #1F7A4D;
    border-radius: 0.4rem;
    box-shadow: 0 0.2rem 3rem rgba(0,0,0,0.1);
    padding: 32px;
    text-align: center;
  }
  .done.show { display: block; }
  .done .tick {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #f0fdf4;
    color: #1F7A4D;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 26px;
    font-weight: 700;
  }
  .done p { font-size: 17px; color: #1a1a1a; line-height: 1.5; }
  .done .again {
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    font-weight: 700;
    background: #ffffff;
    color: #111827;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    padding: 12px 24px;
    cursor: pointer;
    min-height: 48px;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .done .again:hover { background: #ebf4fd; border-color: #0077c8; color: #0077c8; }

  :focus-visible { outline: 3px solid #0077c8; outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
  @media (max-width: 520px) {
    .card-body { padding: 22px 18px 26px; }
    h1 { font-size: 21px; }
    .pick { flex: 1 1 100%; }
  }
</style>
</head>
<body>
<div style="padding: 1.5rem 1.5rem 2.5rem;">
  <div class="card" id="panel">
    <div class="card-body">
      <p class="eyebrow">Practice</p>
      <h1>Pick up a handover and finish the delivery</h1>
      <div class="ctx">Greenline Packaging Supplies, PO-45110, dock 1. You come on and pick up where a teammate left off. Their handover note is below.</div>
      <div class="hnote">
        <div class="hh">Handover note from Sam</div>
        <ul>
          <li>Line 1, PKG-1200: recorded, conforming.</li>
          <li>Line 2, PKG-3100: recorded, conforming.</li>
          <li>Line 3, PKG-2400: on hold and reported to Phillip (torn film).</li>
          <li>Lines 4 and 5: still to do.</li>
        </ul>
      </div>
      <div class="steps" id="steps"></div>
      <div id="host"></div>
      <div class="fb" id="fb" role="status" aria-live="polite"></div>
      <div class="actions">
        <button class="btn btn-ghost" id="back" type="button" style="display:none">← Back</button>
        <button class="btn btn-primary" id="go" type="button">Check and continue</button>
      </div>
    </div>
  </div>
  <div class="done" id="done">
    <div class="tick">✓</div>
    <p>Record complete. You picked up the handover without re-recording a finished line, asked before guessing on the unclear dangerous goods line, recorded both remaining lines as outside tolerance, and signed off the record. The delivery is finished to the procedure.</p>
    <button class="again" id="again" type="button">Start again</button>
  </div>
</div>
<script>
(function(){
  // remaining lines you pick up (lines 4 and 5)
  var REM=[
    {sku:"PKG-6002", name:"Strapping coils",            ord:40, rec:38, note:"Right count check: ordered 40, received 38. Standard line.",                     record:"varies", classify:"outside"},
    {sku:"PKG-5009", name:"Hazard labels (dangerous goods)", ord:24, rec:24, note:"Count matches. The SDS revision date is hard to read and may be out of date.", record:"varies", classify:"outside", unclear:true}
  ];
  var STEP_NAMES=["Confirm what is open","Resolve the unclear line","Record and classify","Sign off"];
  var openSel={};
  var line3=null;
  var ask=null;
  var rec={}, cls={};
  var reported=false, nm="", dt="";
  REM.forEach(function(l){ openSel[l.sku]=false; rec[l.sku]=null; cls[l.sku]=null; });
  var step=0;
  var stepsEl=document.getElementById("steps"), host=document.getElementById("host"),
      fb=document.getElementById("fb"), go=document.getElementById("go"), back=document.getElementById("back"),
      panel=document.getElementById("panel"), done=document.getElementById("done");

  function pips(){
    stepsEl.innerHTML="";
    STEP_NAMES.forEach(function(n,x){
      var d=document.createElement("div");
      d.className="step-pip"+(x<step?" done":(x===step?" on":""));
      d.textContent=(x+1)+". "+n;
      stepsEl.appendChild(d);
    });
  }
  function clearFb(){ fb.className="fb"; fb.textContent=""; }
  function render(){
    pips(); clearFb();
    back.style.display = step>0 ? "inline-block":"none";
    go.textContent = step===3 ? "Sign off and finish" : "Check and continue";
    if(step===0)      renderOpen();
    else if(step===1) renderAsk();
    else if(step===2) renderRecord();
    else              renderSignoff();
  }

  /* ── Step 1: confirm what is still open ── */
  function renderOpen(){
    host.innerHTML=
      '<p class="stepTitle">Confirm what is still open</p>'+
      '<p class="stepHint">Before you start, work out from the note what is left to do. Tick the lines you still need to work.</p>';
    [["PKG-1200","Line 1: PKG-1200"],["PKG-3100","Line 2: PKG-3100"],
     ["PKG-2400","Line 3: PKG-2400"],["PKG-6002","Line 4: PKG-6002"],["PKG-5009","Line 5: PKG-5009"]
    ].forEach(function(p){
      var row=document.createElement("label"); row.className="chk";
      var cb=document.createElement("input"); cb.type="checkbox"; cb.checked=!!openSel[p[0]];
      cb.addEventListener("change",function(){ openSel[p[0]]=cb.checked; clearFb(); });
      var sp=document.createElement("span"); sp.textContent=p[1];
      row.appendChild(cb); row.appendChild(sp); host.appendChild(row);
    });
    var q=document.createElement("div"); q.className="line";
    q.innerHTML='<div class="sku">Line 3 is on hold and reported. What do you do with it?</div>';
    var pk=document.createElement("div"); pk.className="picks";
    [["leave","Leave it — it is already handled"],["redo","Record it again to be safe"]].forEach(function(o){
      var b=document.createElement("button"); b.type="button"; b.className="pick"; b.textContent=o[1];
      b.setAttribute("aria-pressed", line3===o[0]?"true":"false");
      b.addEventListener("click",function(){ line3=o[0]; clearFb(); renderOpen(); });
      pk.appendChild(b);
    });
    q.appendChild(pk); host.appendChild(q);
  }
  function checkOpen(){
    var wrongTicks=["PKG-1200","PKG-3100","PKG-2400"].filter(function(s){return openSel[s];});
    var missed=["PKG-6002","PKG-5009"].filter(function(s){return !openSel[s];});
    if(wrongTicks.length){ return "Lines 1 to 3 are already done in the note — line 3 is on hold and reported. Only lines 4 and 5 are still open."; }
    if(missed.length){ return "Lines 4 and 5 are the ones still to do. Tick both."; }
    if(line3===null){ return "Decide what to do about line 3 before you go on."; }
    if(line3==="redo"){ return "Do not re-record line 3. It is already recorded and reported — recording it again creates a contradictory result."; }
    return null;
  }

  /* ── Step 2: resolve the unclear line ── */
  function renderAsk(){
    host.innerHTML=
      '<p class="stepTitle">Resolve the unclear line</p>'+
      '<p class="stepHint">Line 5, PKG-5009, is a dangerous goods line and its SDS revision date is hard to read. What do you do before you record it?</p>';
    var box=document.createElement("div"); box.className="line";
    box.innerHTML='<div class="sku">Line 5: PKG-5009 Hazard labels</div>'+
                  '<div class="meta">Count matches. SDS revision date unclear — possibly out of date.</div>';
    var pk=document.createElement("div"); pk.className="picks";
    [["ask","Pause and ask Phillip before recording"],["guess","Record your best guess to keep moving"]].forEach(function(o){
      var b=document.createElement("button"); b.type="button"; b.className="pick"; b.textContent=o[1];
      b.setAttribute("aria-pressed", ask===o[0]?"true":"false");
      b.addEventListener("click",function(){ ask=o[0]; clearFb(); renderAsk(); });
      pk.appendChild(b);
    });
    box.appendChild(pk); host.appendChild(box);
  }
  function checkAsk(){
    if(ask===null){ return "Choose what you do about the unclear SDS date."; }
    if(ask==="guess"){ return "Do not guess on a dangerous goods line. Pause and ask the Receivals Supervisor before you record, then record what you find."; }
    return null;
  }

  /* ── Step 3: record and classify the remaining lines ── */
  function renderRecord(){
    host.innerHTML=
      '<p class="stepTitle">Record and classify the remaining lines</p>'+
      '<p class="stepHint">Phillip confirms the PKG-5009 SDS is out of date. Now record and classify both lines you picked up.</p>';
    REM.forEach(function(l){
      var box=document.createElement("div"); box.className="line";
      box.innerHTML='<div class="sku">'+l.sku+' — '+l.name+'</div>'+
                    '<div class="meta">Ordered '+l.ord+', received '+l.rec+'</div>'+
                    '<div class="note">'+(l.unclear?"Count matches. SDS confirmed out of date.":l.note)+'</div>';
      var pk=document.createElement("div"); pk.className="picks";
      [["conforms","Conforms"],["varies","Varies"]].forEach(function(p){
        var b=document.createElement("button"); b.type="button"; b.className="pick"; b.textContent=p[1];
        b.setAttribute("aria-pressed", rec[l.sku]===p[0]?"true":"false");
        b.addEventListener("click",function(){
          rec[l.sku]=p[0];
          if(p[0]==="conforms") cls[l.sku]=null;
          clearFb(); renderRecord();
        });
        pk.appendChild(b);
      });
      box.appendChild(pk);
      var sub=document.createElement("div");
      sub.className="sub"+(rec[l.sku]==="varies"?" show":"");
      sub.innerHTML='<div class="clab">Classify the variation</div>';
      var spk=document.createElement("div"); spk.className="picks";
      [["within","Within tolerance"],["outside","Outside tolerance"]].forEach(function(p){
        var b=document.createElement("button"); b.type="button"; b.className="pick"; b.textContent=p[1];
        b.setAttribute("aria-pressed", cls[l.sku]===p[0]?"true":"false");
        b.addEventListener("click",function(){ cls[l.sku]=p[0]; clearFb(); renderRecord(); });
        spk.appendChild(b);
      });
      sub.appendChild(spk); box.appendChild(sub);
      host.appendChild(box);
    });
  }
  function checkRecord(){
    var unset=REM.filter(function(l){ return rec[l.sku]===null || (rec[l.sku]==="varies" && cls[l.sku]===null); });
    if(unset.length){ return "Set a result and a classification for both lines."; }
    var wrong=REM.filter(function(l){ return rec[l.sku]!==l.record || cls[l.sku]!==l.classify; });
    if(wrong.length){
      return "Check "+wrong.map(function(l){return l.sku;}).join(" and ")+". 2 units short on a standard line is outside tolerance, and an out-of-date SDS is a documentation variation outside tolerance.";
    }
    return null;
  }

  /* ── Step 4: sign off ── */
  function renderSignoff(){
    host.innerHTML=
      '<p class="stepTitle">Complete and sign off</p>'+
      '<p class="stepHint">Confirm the held lines are reported, then sign off the record.</p>';
    var row=document.createElement("label"); row.className="chk";
    var cb=document.createElement("input"); cb.type="checkbox"; cb.checked=reported;
    cb.addEventListener("change",function(){ reported=cb.checked; clearFb(); });
    var sp=document.createElement("span"); sp.textContent="Both lines outside tolerance are on hold and reported to Phillip.";
    row.appendChild(cb); row.appendChild(sp); host.appendChild(row);
    var f=document.createElement("div"); f.className="field";
    f.innerHTML='<label>Your name<input type="text" id="nm" autocomplete="off" value="'+nm.replace(/"/g,"&quot;")+'"></label>'+
                '<label>Date<input type="text" id="dt" autocomplete="off" placeholder="dd/mm/yyyy" value="'+dt.replace(/"/g,"&quot;")+'"></label>';
    host.appendChild(f);
    document.getElementById("nm").addEventListener("input",function(e){ nm=e.target.value; });
    document.getElementById("dt").addEventListener("input",function(e){ dt=e.target.value; });
  }
  function checkSignoff(){
    if(!reported){ return "Confirm the held lines are reported before you sign off."; }
    if(!nm.trim()||!dt.trim()){ return "Complete the record with your name and the date."; }
    return null;
  }

  /* ── Navigation ── */
  go.addEventListener("click",function(){
    var err = step===0?checkOpen():step===1?checkAsk():step===2?checkRecord():checkSignoff();
    if(err){
      var soft=/still to|both|before you|Decide|Choose|Set a|Complete the|Confirm the/.test(err);
      fb.className="fb show "+(soft?"note":"bad");
      fb.textContent=err;
      return;
    }
    if(step<3){ step++; render(); window.scrollTo(0,0); }
    else { panel.style.display="none"; done.classList.add("show"); }
  });
  back.addEventListener("click",function(){ if(step>0){ step--; render(); } });
  document.getElementById("again").addEventListener("click",function(){
    openSel={"PKG-1200":false,"PKG-3100":false,"PKG-2400":false,"PKG-6002":false,"PKG-5009":false};
    REM.forEach(function(l){ rec[l.sku]=null; cls[l.sku]=null; });
    line3=null; ask=null; reported=false; nm=""; dt=""; step=0;
    done.classList.remove("show"); panel.style.display="";
    render();
  });
  render();
})();
</script>
</body>
</html>` 
  },
  { 
    type: 'iframe', 
    description: 'An interactive breakdown of a Quality Inspection and Variation Report',
    title: 'CHEP Quality Inspection Simulation',
    srcDoc: `<!DOCTYPE html>
<!-- Guided tour of a paper quality record. Tap a part of the form, or step through with the controls. -->
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tour the Quality Inspection and Variation Report</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    [hidden] { display: none !important; }
    body {
      background: transparent;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      color: #1a1a1a;
      line-height: 1.5;
    }
    /* ---------- Card container ---------- */
    .card-panel {
      max-width: 900px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e6e6e6;
      border-radius: 0.4rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); /* Reduced shadow to prevent clipping */
      overflow: visible;
    }
    .card-body { padding: 32px; }
    /* ---------- Header ---------- */
    .eyebrow {
      font-size: 14px;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 6px;
    }
    h1 {
      font-size: 24px;
      line-height: 1.25;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 8px;
    }
    .lead {
      font-size: 16px;
      color: #4b5563;
      margin-bottom: 24px;
    }
    /* ---------- The form facsimile ---------- */
    .form {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 0.4rem;
    }
    .form-head {
      background: #0077c8;
      color: #ffffff;
      padding: 16px 18px;
      border-radius: 0.35rem 0.35rem 0 0;
    }
    .form-head .ft { font-size: 16px; font-weight: 700; }
    .form-head .fr {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 2px;
    }
    /* Each part is a clickable region of the form */
    .part {
      display: block;
      width: 100%;
      text-align: left;
      font-family: 'Inter', sans-serif;
      background: #ffffff;
      border: 0;
      border-top: 1px solid #e5e7eb;
      padding: 0;
      cursor: pointer;
      transition: background 0.2s ease;
    }
    .part:hover { background: #ebf4fd; }
    .part-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
    }
    .part-no {
      flex: 0 0 auto;
      width: 30px;
      height: 30px;
      border-radius: 9999px;
      background: #e6f3fc;
      color: #0077c8;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .part-title {
      font-size: 16px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .part-body { padding: 0 18px 18px 60px; }
    .part.active { background: #e6f3fc; }
    .part.active .part-no { background: #0077c8; color: #ffffff; }
    .part.active .part-bar { box-shadow: inset 4px 0 0 #0077c8; }
    /* Form fields — static, not editable */
    .field-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 18px;
    }
    .field { min-width: 0; }
    .field-label {
      font-size: 14px;
      font-weight: 600;
      color: #6b7280;
    }
    .field-line {
      height: 20px;
      border-bottom: 1px solid #e5e7eb;
      margin-top: 4px;
    }
    .full { grid-column: 1 / -1; }
    .mini-wrap { overflow-x: auto; }
    .mini {
      width: 100%;
      border-collapse: collapse;
      font-size: 15px;
      min-width: 520px;
    }
    .mini th {
      background: #f9fafb;
      color: #1a1a1a;
      text-align: left;
      font-weight: 600;
      padding: 8px 10px;
      border: 1px solid #e5e7eb;
    }
    .mini td {
      padding: 14px 10px;
      border: 1px solid #e5e7eb;
      color: #6b7280;
    }
    .pill-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 5px;
    }
    .pill {
      font-size: 14px;
      color: #6b7280;
      border: 1px solid #e5e7eb;
      border-radius: 9999px;
      padding: 3px 12px;
    }
    .signcol {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .signcol .who {
      font-size: 15px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 8px;
    }
    .signcol .field + .field { margin-top: 10px; }
    /* ---------- Explanation panel — lives inside .form, JS moves it ---------- */
    .explain {
      border-top: 1px solid #b3d9f5;
      border-bottom: 1px solid #b3d9f5;
      background: #e6f3fc;
      padding: 18px 20px 18px 60px;
      position: relative;
    }
    .explain::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 4px;
      background: #0077c8;
    }
    .explain .ex-tag {
      font-size: 14px;
      font-weight: 600;
      color: #0077c8;
      margin-bottom: 4px;
    }
    .explain .ex-title {
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 6px;
    }
    .explain .ex-text { font-size: 16px; color: #1a1a1a; }
    .explain .ex-step {
      font-size: 16px;
      color: #4b5563;
      margin-top: 10px;
    }
    .hint {
      margin-top: 16px;
      font-size: 16px;
      color: #6b7280;
    }
    .dots {
      display: flex;
      gap: 8px;
      margin-top: 16px;
      align-items: center;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 9999px;
      background: #e5e7eb;
      transition: background 0.2s ease, width 0.2s ease;
    }
    .dot.seen { background: #99cef0; }
    .dot.on {
      background: #0077c8;
      width: 26px;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .btn {
      font-family: 'Inter', sans-serif;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 9999px;
      border: 1px solid #e5e7eb;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      background: #ffffff;
      color: #111827;
      transition: background 0.2s ease;
    }
    .btn:not(:disabled):hover { background: #ebf4fd; }
    .btn:disabled { opacity: 0.45; cursor: default; }
    .btn-primary {
      background: #0077c8;
      color: #ffffff;
      border-color: #0077c8;
    }
    .btn-primary:not(:disabled):hover { background: #006ab4; }
    .counter {
      font-size: 15px;
      color: #6b7280;
      margin-left: auto;
    }
    :focus-visible {
      outline: 3px solid #0077c8;
      outline-offset: 2px;
    }
    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; scroll-behavior: auto !important; }
    }
    @media (max-width: 560px) {
      .card-body { padding: 22px 18px 26px; }
      h1 { font-size: 21px; }
      .field-grid { grid-template-columns: 1fr; }
      .signcol { grid-template-columns: 1fr; }
      .part-body { padding-left: 18px; }
      .explain { padding-left: 18px; }
      .counter { margin-left: 0; width: 100%; }
    }
  </style>
</head>
<body>
  <div style="padding: 1.5rem 1.5rem 2.5rem;">
    <div class="card-panel">
      <div class="card-body">
        <p class="eyebrow">The record: DD-FM-007</p>
        <h1>Tour the Quality Inspection and Variation Report</h1>
        <p class="lead">This is the quality record for a receival. It mirrors the quality result fields in the WMS. Tap each part of the form, or use next, to see what goes there and which step of the quality work it captures.</p>

        <div class="form" id="form">
          <div class="form-head">
            <div class="ft">Quality Inspection and Variation Report</div>
            <div class="fr">DD-FM-007 V1.0 &nbsp;|&nbsp; Depot Direct, Warehouse Operations</div>
          </div>
          <!-- Part 1 -->
          <button class="part" type="button" data-i="0" aria-pressed="false">
            <div class="part-bar"><span class="part-no">1</span><span class="part-title">Receival details</span></div>
            <div class="part-body">
              <div class="field-grid">
                <div class="field"><div class="field-label">Date</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Completed by (store person)</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Receival or GRN number</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Supplier</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Purchase order number</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Delivery docket number</div><div class="field-line"></div></div>
              </div>
            </div>
          </button>
          <!-- Part 2 -->
          <button class="part" type="button" data-i="1" aria-pressed="false">
            <div class="part-bar"><span class="part-no">2</span><span class="part-title">Quality results by line</span></div>
            <div class="part-body">
              <div class="mini-wrap">
                <table class="mini">
                  <tr>
                    <th>Line / SKU</th><th>Description</th><th>Quality result</th>
                    <th>Variation type</th><th>Detail and action</th>
                  </tr>
                  <tr><td></td><td></td><td>Conforms / within / outside</td><td></td><td></td></tr>
                  <tr><td></td><td></td><td>Conforms / within / outside</td><td></td><td></td></tr>
                </table>
              </div>
            </div>
          </button>
          <!-- Part 3 -->
          <button class="part" type="button" data-i="2" aria-pressed="false">
            <div class="part-bar"><span class="part-no">3</span><span class="part-title">Monitoring summary</span></div>
            <div class="part-body">
              <div class="field-grid">
                <div class="field"><div class="field-label">Lines inspected</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Lines conforming</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Conformance result</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Conformance target met</div><div class="pill-row"><span class="pill">Yes</span><span class="pill">No</span></div></div>
                <div class="field full"><div class="field-label">Repeated or worsening variation (supplier, product or process)</div><div class="pill-row"><span class="pill">Yes</span><span class="pill">No</span></div></div>
                <div class="field full"><div class="field-label">Continuous improvement entry raised (DD-FM-008)</div><div class="pill-row"><span class="pill">Yes</span><span class="pill">No</span><span class="pill">Not applicable</span></div></div>
              </div>
            </div>
          </button>
          <!-- Part 4 -->
          <button class="part" type="button" data-i="3" aria-pressed="false">
            <div class="part-bar"><span class="part-no">4</span><span class="part-title">Report and escalation</span></div>
            <div class="part-body">
              <div class="field-grid">
                <div class="field full"><div class="field-label">Variation reported to the Receivals Supervisor</div><div class="pill-row"><span class="pill">Yes</span><span class="pill">No</span><span class="pill">Not applicable</span></div></div>
                <div class="field"><div class="field-label">Receivals Supervisor notified</div><div class="field-line"></div></div>
                <div class="field"><div class="field-label">Date and time of notification</div><div class="field-line"></div></div>
              </div>
            </div>
          </button>
          <!-- Part 5 -->
          <button class="part" type="button" data-i="4" aria-pressed="false">
            <div class="part-bar"><span class="part-no">5</span><span class="part-title">Sign-off</span></div>
            <div class="part-body">
              <div class="signcol">
                <div>
                  <div class="who">Completed by: store person (receivals)</div>
                  <div class="field"><div class="field-label">Printed name</div><div class="field-line"></div></div>
                  <div class="field"><div class="field-label">Signature</div><div class="field-line"></div></div>
                  <div class="field"><div class="field-label">Date and time</div><div class="field-line"></div></div>
                </div>
                <div>
                  <div class="who">Reviewed by: Receivals Supervisor</div>
                  <div class="field"><div class="field-label">Printed name</div><div class="field-line"></div></div>
                  <div class="field"><div class="field-label">Signature</div><div class="field-line"></div></div>
                  <div class="field"><div class="field-label">Date and time</div><div class="field-line"></div></div>
                </div>
              </div>
            </div>
          </button>

          <!-- Explain panel lives here; JS moves it to after the active part -->
          <div class="explain" id="explain" role="status" aria-live="polite" hidden></div>
        </div><!-- /.form -->

        <!-- Shown only before any part is selected -->
        <p class="hint" id="hint">Tap any part of the form above, or press next, to see what goes there.</p>

        <div class="dots" id="dots" aria-hidden="true"></div>
        <div class="controls">
          <button class="btn" type="button" id="prev" disabled>← Previous</button>
          <button class="btn btn-primary" type="button" id="next">Next →</button>
          <span class="counter" id="counter"></span>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function () {
    // ---- Content ----
    var PARTS = [
      {
        tag: "Part 1 of 5",
        title: "Receival details",
        text: "Identifies the delivery this record covers: the date, who completed it, the receival or GRN number, the supplier, the purchase order and the delivery docket.",
        step: "Sets up the record and ties it to one delivery, before you record any results."
      },
      {
        tag: "Part 2 of 5",
        title: "Quality results by line",
        text: "One row for each line: the quality result, conforms, varies within tolerance or varies outside tolerance, and for a variation the type and the detail and action.",
        step: "This is where recording each line (step 3) and classifying the variation (step 4) land together."
      },
      {
        tag: "Part 3 of 5",
        title: "Monitoring summary",
        text: "Lines inspected, lines conforming, the conformance result and whether the target was met, plus whether the variation is repeated or worsening and any DD-FM-008 entry.",
        step: "Captures monitoring the shift against the 98 percent target (step 5) and the link to improvement (step 7)."
      },
      {
        tag: "Part 4 of 5",
        title: "Report and escalation",
        text: "Whether the variation was reported to the Receivals Supervisor, who was notified, and the date and time.",
        step: "The proof that an outside-tolerance line was handed to the right person (step 4)."
      },
      {
        tag: "Part 5 of 5",
        title: "Sign-off",
        text: "You sign as the store person who completed the report, and the Receivals Supervisor signs as the reviewer.",
        step: "Turns the record into a finished quality record (step 9)."
      }
    ];

    // ---- State ----
    var current = -1;
    var seen = {};

    // ---- Elements ----
    var partEls  = Array.prototype.slice.call(document.querySelectorAll(".part"));
    var explain  = document.getElementById("explain");
    var hint     = document.getElementById("hint");
    var counter  = document.getElementById("counter");
    var prevBtn  = document.getElementById("prev");
    var nextBtn  = document.getElementById("next");
    var dotsEl   = document.getElementById("dots");

    // Build progress dots
    PARTS.forEach(function (_, i) {
      var d = document.createElement("span");
      d.className = "dot";
      d.dataset.i = i;
      dotsEl.appendChild(d);
    });
    var dots = Array.prototype.slice.call(dotsEl.children);

    function render() {
      partEls.forEach(function (el, i) {
        var on = (i === current);
        el.classList.toggle("active", on);
        el.setAttribute("aria-pressed", on ? "true" : "false");
      });

      dots.forEach(function (d, i) {
        d.className = "dot" + (i === current ? " on" : (seen[i] ? " seen" : ""));
      });

      if (current >= 0) {
        var p = PARTS[current];

        // Populate explain content
        explain.innerHTML =
          '<div class="ex-tag">' + p.tag + '</div>' +
          '<div class="ex-title">' + p.title + '</div>' +
          '<div class="ex-text">' + p.text + '</div>' +
          '<div class="ex-step">' + p.step + '</div>';

        // Move explain to immediately after the active part button
        var activeEl = partEls[current];
        activeEl.insertAdjacentElement('afterend', explain);
        explain.hidden = false;

        // Hide the initial hint
        hint.hidden = true;

        counter.textContent = "Part " + (current + 1) + " of " + PARTS.length;
      } else {
        explain.hidden = true;
        hint.hidden = false;
        counter.textContent = "";
      }

      prevBtn.disabled = (current <= 0);
      nextBtn.textContent = (current >= PARTS.length - 1) ? "Start again" : "Next →";
    }

    function select(i, scroll) {
      if (i < 0 || i >= PARTS.length) return;
      current = i;
      seen[i] = true;
      render();
      // Scroll the explain panel into view (not the part itself)
      if (scroll && explain.scrollIntoView) {
        explain.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }

    partEls.forEach(function (el) {
      el.addEventListener("click", function () {
        select(parseInt(el.dataset.i, 10), true);
      });
    });

    prevBtn.addEventListener("click", function () {
      if (current > 0) select(current - 1, true);
    });

    nextBtn.addEventListener("click", function () {
      if (current < PARTS.length - 1) select(current + 1, true);
      else select(0, true);
    });

    // Initialise display
    render();
  })();
  </script>
</body>
</html>` 
  }
];

export const nabBlocks = [
  { type: 'text', title: 'Accredited broker course', text: 'NAB needed an accredited course for brokers wishing to partner with the bank. The course was designed to get brokers up to speed on how to navigate and use NAB’s available tools and services.' },
  { type: 'text', title: 'Custom LMS development', text: 'Working closely with our contact at the bank, I customised Alffie’s LMS using HTML and CSS to build out the course environment. The main focus was ensuring the interface and user experience strictly adhered to NAB’s rigid corporate branding guidelines, delivering a seamless, professional product that felt native to the bank.' }
];

export const APP_DATA = [
  { 
    id: 'about', 
    title: 'About Me', 
    icon: <img src="/Icons/about_icon.png" alt="About Me" className="app-icon" />, 
    width: 800, 
    height: 750, 
    content: () => (
      <div style={{ padding: '32px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>Hi, I'm Tom.</h3>
        <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
        I’m an experienced multidisciplinary designer and digital creator based in Melbourne. For over 15 years, I’ve been working at the intersection of design, education, and technology. I started out as an illustrator back in 2008, and over the years, my role has evolved to cover everything from team leadership and video production to UX/UI and front-end development. The recent explosion of AI in media production has changed the way I work. It’s been a massive industry shift to navigate, but it allowed me to build this website in ways I wouldn't have been able to otherwise.
        </p>
        <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
        I’ve technically been at a version of the same company since 2009, though it hasn’t exactly been a straight line. I was first employed by Leap Learning as an illustrator. By early 2010, most of the company was made redundant and we became Leap eLearning. Over those intervening years, we became Leap Training and actually grew to become the biggest, most successful company in our sector. But in 2015, following major government policy changes and some ill-fated side investments from leadership, the business hit another wall and was bought by PAN Group. We rebranded as Alffie, which eventually merged with Open Colleges and School of Health in 2022. Surviving two bankruptcies, four rounds of redundancies, and a handful of mergers taught me how to roll with the punches. I've worked under ten different managers, absorbed whatever responsibilities were thrown my way, and learned how to get things done no matter how chaotic the background noise got.        </p>
        
        <h3 style={{ margin: '32px 0 8px 0', fontSize: '22px' }}>Education</h3>
        <ul style={{ margin: '0 0 24px 0', opacity: 0.8, paddingLeft: '20px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><b>Bachelor of Design in Multimedia:</b> Swinburne University of Technology (2004 to 2006)</li>
          <li style={{ marginBottom: '8px' }}><b>Diploma of Music (Sound Production):</b> RMIT University (2007)</li>
          <li><b>Web Development:</b> PHP & JavaScript (Pluralsight), Web Design (Treehouse)</li>
        </ul>
        
        <h3 style={{ margin: '32px 0 8px 0', fontSize: '22px' }}>Personal life</h3>
        <p style={{ margin: '0 0 0 0', opacity: 0.8 }}>
        I live with my wife, Eleanor, our two kids, Florence and Wilbur, and our scruffy little dog, Bootsacatsa (Boots). I spend my downtime tinkering with my PC, playing immersive video games, playing Sunday soccer with a bunch of local dads (I’m not very good but I love it), exercising in my home gym, or listening to the audiobook version of whatever we're reading in the Tough Guy Book Club. I enjoy nerding-out on science-fiction, fantasy, animals, birds, insects, technology, computer hardware and software, space, prehistoric life, language and audio-visual equipment.        </p>
        
        <h3 style={{ margin: '32px 0 8px 0', fontSize: '22px' }}>Contact</h3>
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
    )
  },
  { 
    id: 'ai', 
    title: 'My thoughts on AI', 
    icon: <img src="/Icons/ai_icon.png" alt="AI Thoughts" className="app-icon" />, 
    width: 800, 
    height: 750, 
    content: () => (
    <div style={{ padding: '32px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
        AI has completely transformed how I work. My role as an educational illustrator has shifted heavily toward prompt engineering and AI management (a process I’d honestly prefer to fully automate so I can get back to actual hands-on creative work). While the images, video, audio, and code I generate are often higher quality, the real value is that I can work 10 to 20 times faster. That said, the skills I spent 15 years building before the 2022 AI boom aren't wasted. Taking raw AI output, dropping it into an editor, clipping audio, balancing volume, adding effects, and exporting the correct format for the web still requires a solid media and design background. Most people don't know how to do that.
      </p>
      
      <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>So, where is it all going?</h3>
      <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
        I follow tech news daily, and critics like Ed Zitron consistently point to an "AI bubble" and the circular financing keeping it afloat. AI developers like Anthropic and OpenAI are nowhere near profitable, and hyperscalers like Amazon, Microsoft, and Google aren't making their margins on AI products. Running AI at scale is massively expensive due to hardware like NVIDIA's H100 GPUs, which cost US$25,000 to $40,000 each. Right now, the only businesses making real money are the chipmakers outfitting the datacentres. NVIDIA's stock is up 900% since the 2021 crypto boom, turning it into a $5 trillion company.
      </p>
      <p style={{ margin: '0 0 24px 0', opacity: 0.8 }}>
        Where does this leave the consumers, workers, and businesses relying on AI? Prices will likely jump as these companies are forced to turn a profit. If the numbers don't add up, some of the platforms we use will fold. We might soon hit a point where relying on cloud AI just isn't financially viable. When that happens, we'll need to lean back on our traditional creative skills and shift toward running smaller, slightly slower open-source models locally on our own devices, like Google's Gemma.
      </p>
      
      <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>The tools I use</h3>
      <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
        For work, I rely on custom Claude skills I developed to help my team create consistent code blocks in Rise. I also use ElevenLabs to generate images, audio and video. When we burn through our ElevenLabs credits, I switch to ComfyUI, using my 16GB GPU (9070XT) to generate images offline with Z-Image. Adobe Firefly is decent for backgrounds but usually ruins faces and hands.
      </p>
      <p style={{ margin: '0 0 0 0', opacity: 0.8 }}>
        For my smart home and phone, I use Google Gemini. I also run Google Gemma locally on LLM Studio. Beyond that, I've used ChatGPT extensively and dabbled with Copilot.
      </p>
    </div>
  )},
  
  { id: 'leap', title: 'Leap Training', icon: <img src="/Icons/leap_icon.png" alt="Leap" className="app-icon" />, width: 850, height: 750, content: (props) => 
    <ProjectTemplate brandColor="#0F746F" logoUrl="/Logos/leap_logo.png" blocks={leapBlocks} {...props} /> 
  },
  { id: 'alffie', title: 'Alffie', icon: <img src="/Icons/alffie_icon.png" alt="Alffie" className="app-icon" />, width: 850, height: 750, content: (props) => 
    <ProjectTemplate brandColor="#083036" logoUrl="/Logos/alffie_logo.png" blocks={alffieBlocks} {...props} /> 
  },
  { id: 'open_colleges', title: 'Open Colleges', icon: <img src="/Icons/OC_icon.png" alt="Open Colleges" className="app-icon" />, width: 850, height: 750, content: (props) => 
    <ProjectTemplate brandColor="#9bcfd1" logoUrl="/Logos/oc_logo.png" blocks={openCollegesBlocks} {...props} /> 
  },
  { id: 'nab', title: 'NAB', icon: <img src="/Icons/NAB_icon.png" alt="NAB" className="app-icon" />, width: 850, height: 750, content: (props) => 
    <ProjectTemplate brandColor="#000000" logoUrl="/Logos/NAB_logo.png" blocks={nabBlocks} {...props} /> 
  },
  { id: 'chep', title: 'CHEP', icon: <img src="/Icons/chep_icon.png" alt="CHEP" className="app-icon" />, width: 850, height: 750, content: (props) => 
    <ProjectTemplate brandColor="#0077c8" logoUrl="/Logos/CHEP_logo.png" blocks={chepBlocks} {...props} /> 
  }
];