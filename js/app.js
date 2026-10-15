// =============================================
// BRAINBOOST - Main Application Logic
// =============================================

let currentTopicId = null;
let currentDetailTab = 'lessons';
let deferredInstallPrompt = null;

// ==========================================
// ROUTER / NAVIGATION
// ==========================================
function navigate(pageId, topicId = null) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById(`page-${pageId}`);
  if (page) page.classList.add('active');

  const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navItem) navItem.classList.add('active');

  // Remove floating button
  const fab = document.getElementById('mark-complete-fab');
  if (fab) fab.remove();

  if (pageId === 'home') renderHome();
  else if (pageId === 'explore') renderExplore();
  else if (pageId === 'progress') renderProgress();
  else if (pageId === 'bookmarks') renderBookmarks();
  else if (pageId === 'tables') renderTables();
  else if (pageId === 'mpsc-gk') renderMpscGK();
  else if (pageId === 'topic' && topicId) renderTopicDetail(topicId);

  window.scrollTo(0, 0);
}

// ==========================================
// HOME PAGE
// ==========================================
function renderHome() {
  const lang = STATE.lang;
  const total = APP_DATA.topics.length;
  const completed = Object.values(STATE.progress).filter(v => v >= 1).length;
  const bookmarkCount = STATE.bookmarks.length;
  const quizzesDone = Object.keys(STATE.quizScores).length;

  // Stats
  document.getElementById('stat-completed').textContent = completed;
  document.getElementById('stat-bookmarks').textContent = bookmarkCount;
  document.getElementById('stat-quizzes').textContent = quizzesDone;
  document.getElementById('stat-streak').textContent = STATE.streak + '🔥';

  // Render topic cards
  renderTopicCards('all', lang);
}

function renderTopicCards(filter = 'all', lang = 'en') {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;

  let topics = APP_DATA.topics;
  if (filter === 'reasoning') topics = topics.filter(t => t.category === 'reasoning');
  else if (filter === 'mathematics') topics = topics.filter(t => t.category === 'math');
  else if (filter === 'bookmarked') topics = topics.filter(t => isBookmarked(t.id));

  if (topics.length === 0) {
    grid.innerHTML = `<div class="bookmarks-empty" style="grid-column:1/-1">
      <div class="empty-icon">🔍</div>
      <p>No topics found</p>
    </div>`;
    return;
  }

  grid.innerHTML = topics.map(t => createTopicCard(t, lang)).join('');

  // Attach event listeners
  grid.querySelectorAll('.topic-card').forEach(card => {
    const tid = card.dataset.topicId;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.bookmark-btn')) return;
      navigate('topic', tid);
    });
  });

  grid.querySelectorAll('.bookmark-btn').forEach(btn => {
    const tid = btn.dataset.topicId;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const added = toggleBookmark(tid);
      btn.classList.toggle('active', isBookmarked(tid));
      btn.textContent = isBookmarked(tid) ? '★' : '☆';
      showToast(added ? '⭐ Added to bookmarks!' : '✅ Removed from bookmarks', 'info');
    });
    // Set initial state
    btn.classList.toggle('active', isBookmarked(tid));
    btn.textContent = isBookmarked(tid) ? '★' : '☆';
  });
}

function createTopicCard(topic, lang) {
  const progress = STATE.progress[topic.id] || 0;
  const progressPct = progress >= 1 ? 100 : 0;
  const bookmarked = isBookmarked(topic.id);
  const title = lang === 'mr' && topic.titleMr ? topic.titleMr : topic.title;
  const subtitle = lang === 'mr' && topic.subtitleMr ? topic.subtitleMr : topic.subtitle;

  return `
    <div class="topic-card" data-topic-id="${topic.id}" id="card-${topic.id}">
      <div class="topic-card-header">
        <div class="topic-icon" style="background:${hexToRgba(topic.color, 0.15)}; color:${topic.color}">
          ${topic.icon}
        </div>
        <div class="topic-info">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
            <div class="topic-title">${title}</div>
            <span class="topic-badge badge-${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
          </div>
          <div class="topic-subtitle">${subtitle}</div>
        </div>
      </div>

      <div class="topic-progress">
        <div class="topic-progress-bar" style="width:${progressPct}%;background:${topic.color}"></div>
      </div>

      <div class="topic-footer">
        <div class="topic-stats-mini">
          <span class="topic-stat">⚡ ${topic.shortcuts.length} Tricks</span>
          <span class="topic-stat">❓ ${topic.quizzes.length} Quiz</span>
          <span class="topic-stat">🃏 ${topic.flashcards.length} Cards</span>
        </div>
        <button class="bookmark-btn" data-topic-id="${topic.id}">
          ${bookmarked ? '★' : '☆'}
        </button>
      </div>
    </div>
  `;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ==========================================
// TOPIC DETAIL PAGE
// ==========================================
function renderTopicDetail(topicId) {
  currentTopicId = topicId;
  const topic = APP_DATA.topics.find(t => t.id === topicId);
  if (!topic) return;

  const lang = STATE.lang;
  const page = document.getElementById('page-topic');
  const title = lang === 'mr' && topic.titleMr ? topic.titleMr : topic.title;
  const subtitle = lang === 'mr' && topic.subtitleMr ? topic.subtitleMr : topic.subtitle;

  page.innerHTML = `
    <div class="detail-header" data-emoji="${topic.icon}">
      <button class="back-btn" onclick="navigate('home')">
        ← Back to Topics
      </button>
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:8px">
        <span style="font-size:2rem">${topic.icon}</span>
        <div>
          <div class="detail-title">${title}</div>
          <div class="detail-subtitle">${subtitle}</div>
        </div>
        <span class="topic-badge badge-${topic.difficulty.toLowerCase()}" style="margin-left:auto">${topic.difficulty}</span>
      </div>
      <div class="detail-tabs" id="detail-tabs">
        <button class="detail-tab active" data-panel="lessons" onclick="switchTab('lessons')">📚 Lessons</button>
        <button class="detail-tab" data-panel="shortcuts" onclick="switchTab('shortcuts')">⚡ Shortcuts</button>
        <button class="detail-tab" data-panel="examples" onclick="switchTab('examples')">💡 Examples</button>
        <button class="detail-tab" data-panel="quiz" onclick="switchTab('quiz')">❓ Quiz</button>
        <button class="detail-tab" data-panel="flashcards" onclick="switchTab('flashcards')">🃏 Flashcards</button>
      </div>
    </div>

    <div id="panel-lessons" class="tab-panel active">${renderLessonsPanel(topic, lang)}</div>
    <div id="panel-shortcuts" class="tab-panel">${renderShortcutsPanel(topic, lang)}</div>
    <div id="panel-examples" class="tab-panel">${renderExamplesPanel(topic, lang)}</div>
    <div id="panel-quiz" class="tab-panel">${renderQuizPanel(topic, lang)}</div>
    <div id="panel-flashcards" class="tab-panel">${renderFlashcardsPanel(topic, lang)}</div>
  `;

  // Mark complete FAB
  const isCompleted = (STATE.progress[topicId] || 0) >= 1;
  const fab = document.createElement('button');
  fab.className = `mark-complete-btn ${isCompleted ? 'completed' : ''}`;
  fab.id = 'mark-complete-fab';
  fab.innerHTML = isCompleted ? '✅ Completed' : '✓ Mark Complete';
  fab.onclick = () => {
    markTopicComplete(topicId);
    fab.className = 'mark-complete-btn completed';
    fab.innerHTML = '✅ Completed';
    showToast('🎉 Topic marked as complete!', 'success');
  };
  document.body.appendChild(fab);

  // Init quiz
  initQuiz(topic, lang);
  // Init flashcards
  initFlashcards(topic, lang);
}

function switchTab(panel) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  document.querySelector(`.detail-tab[data-panel="${panel}"]`).classList.add('active');
  document.getElementById(`panel-${panel}`).classList.add('active');

  const fab = document.getElementById('mark-complete-fab');
  if (fab) {
    fab.style.display = (panel === 'quiz') ? 'none' : 'flex';
  }

  if (panel === 'quiz') {
    const topic = APP_DATA.topics.find(t => t.id === currentTopicId);
    initQuiz(topic, STATE.lang);
  }
  if (panel === 'flashcards') {
    const topic = APP_DATA.topics.find(t => t.id === currentTopicId);
    initFlashcards(topic, STATE.lang);
  }
}

function formatMathText(str) {
  if (!str) return '';
  return str
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\left\|/g, '|')
    .replace(/\\right\|/g, '|')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\implies/g, '➔')
    .replace(/\\iff/g, '⟺')
    .replace(/\\quad/g, '   ')
    .replace(/\\times/g, '×')
    .replace(/\\pm/g, '±')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\sqrt/g, '√')
    .replace(/\\theta/g, 'θ')
    .replace(/\\pi/g, 'π')
    .replace(/\\subseteq/g, '⊆')
    .replace(/\\pmod\{([^}]+)\}/g, 'mod $1')
    .replace(/\\pmod/g, 'mod')
    .replace(/\\sum/g, 'Sum')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 ÷ $2)')
    .replace(/\$\$/g, '')
    .replace(/\\/g, '');
}

function renderLessonsPanel(topic, lang) {
  const isMr = lang === 'mr';

  // 1. Foundational Concept Lessons
  const lessonsHtml = topic.lessons.map(lesson => {
    const ltitle = isMr && lesson.titleMr ? lesson.titleMr : lesson.title;
    const lcontent = isMr && lesson.contentMr ? lesson.contentMr : lesson.content;
    return `
      <div class="lesson-card">
        <h3>${formatMathText(ltitle)}</h3>
        <div class="lesson-content">${formatMathText(lcontent)}</div>
      </div>
    `;
  }).join('');

  // 2. Exam Question Patterns & Types (MPSC & Talathi Patterns)
  const patterns = (window.EXAM_PATTERNS && window.EXAM_PATTERNS[topic.id]) || [];
  let patternsHtml = '';

  if (patterns && patterns.length > 0) {
    patternsHtml = `
      <div class="exam-patterns-container">
        <div class="patterns-main-header">
          <div class="patterns-badge">🎯 MPSC & TALATHI EXAM PATTERNS</div>
          <h2 class="patterns-title">${isMr ? 'परीक्षेत विचारले जाणारे प्रश्न प्रकार (Question Types)' : 'Types of Questions Asked in Exams (Question Patterns)'}</h2>
          <p class="patterns-subtitle">${isMr ? 'या घटकावरील सर्व प्रमुख पॅटर्न, मूलभूत सूत्रे, प्रत्यक्ष परीक्षेतील प्रश्न आणि समजेल अशी सोपी रीत:' : 'Key question patterns with Core Formulas, Typical Exam Questions, and Step-by-Step Understanding Solutions & Shortcuts:'}</p>
        </div>

        <div class="patterns-grid">
          ${patterns.map((p, idx) => {
            const pTitle = isMr && p.titleMr ? p.titleMr : p.title;
            const pQ = isMr && p.questionMr ? p.questionMr : p.question;
            const cleanFormula = formatMathText(p.formula);
            const cleanDesc = formatMathText(p.formulaDesc);
            const cleanSol = formatMathText(p.solution);
            return `
              <div class="pattern-card">
                <div class="pattern-card-header">
                  <span class="pattern-pill">Pattern ${idx + 1}</span>
                  <h3 class="pattern-card-title">${formatMathText(pTitle)}</h3>
                </div>

                <div class="pattern-formula-block">
                  <div class="pattern-label">📐 <strong>${isMr ? 'मूलभूत सूत्र (Core Formula):' : 'Core Formula & Rule:'}</strong></div>
                  <div class="pattern-formula-code">${cleanFormula}</div>
                  ${cleanDesc ? `<div class="pattern-formula-desc">${cleanDesc}</div>` : ''}
                </div>

                <div class="pattern-question-block">
                  <div class="pattern-label">📝 <strong>${isMr ? 'परीक्षेतील प्रश्न (Exam Question):' : 'Standard Exam Question:'}</strong></div>
                  <div class="pattern-q-text">${formatMathText(pQ)}</div>
                </div>

                <div class="pattern-solution-block">
                  <div class="pattern-label">💡 <strong>${isMr ? 'समजेल अशी सोपी रीत व स्पष्टीकरण (Step-by-Step Solution):' : 'Step-by-Step Understanding Solution:'}</strong></div>
                  <div class="pattern-sol-text">${cleanSol}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  return lessonsHtml + patternsHtml;
}

function renderShortcutsPanel(topic, lang) {
  return topic.shortcuts.map((s, i) => {
    const stitle = lang === 'mr' && s.titleMr ? s.titleMr : s.title;
    const scontent = lang === 'mr' && s.contentMr ? s.contentMr : s.content;
    return `
      <div class="shortcut-card">
        <div class="shortcut-title">${stitle}</div>
        <div class="shortcut-content">${scontent}</div>
      </div>
    `;
  }).join('');
}

function renderExamplesPanel(topic, lang) {
  return topic.examples.map((ex, i) => {
    const q = lang === 'mr' && ex.qMr ? ex.qMr : ex.q;
    const sol = lang === 'mr' && ex.solutionMr ? ex.solutionMr : ex.solution;
    return `
      <div class="example-card">
        <div class="example-q">❓ ${q}</div>
        <button class="reveal-btn" onclick="revealAnswer(this, 'ex-ans-${i}')">
          👁 Reveal Answer
        </button>
        <div class="example-answer" id="ex-ans-${i}">
          <div class="answer-label">✅ Answer</div>
          <div class="answer-text">${ex.answer}</div>
          <div class="answer-label" style="margin-top:10px">📖 Solution</div>
          <div class="solution-text">${sol}</div>
        </div>
      </div>
    `;
  }).join('');
}

function revealAnswer(btn, answerId) {
  const ans = document.getElementById(answerId);
  if (ans) {
    ans.classList.add('show');
    btn.style.display = 'none';
  }
}

// ==========================================
// QUIZ ENGINE
// ==========================================
let quizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  timerInterval: null,
  timeLeft: 30
};

function renderQuizPanel(topic, lang) {
  const isMr = lang === 'mr';
  return `
    <div class="quiz-intro-card">
      <div class="quiz-intro-badge">🎯 MPSC Prelims & Talathi Exam Pattern</div>
      <div class="quiz-intro-title">${isMr ? 'घटकनिहाय सराव चाचणी संच' : 'Topic Practice Quiz Set'}</div>
      <div class="quiz-intro-desc">${isMr ? 'प्रत्यक्ष परीक्षेच्या काठिण्य पातळीनुसार प्रश्न, ३० सेकंद वेळ मर्यादा व अचूक स्पष्टीकरण.' : 'Curated high-yield exam questions with timer, score tracking, and step-by-step solutions.'}</div>
    </div>
    <div id="quiz-engine"></div>
  `;
}

function initQuiz(topic, lang) {
  const container = document.getElementById('quiz-engine');
  if (!container) return;

  // Use curated exam questions first, fallback to topic.quizzes
  let qs = [];
  if (window.CURATED_QUIZ_QUESTIONS && window.CURATED_QUIZ_QUESTIONS[topic.id]) {
    qs = [...window.CURATED_QUIZ_QUESTIONS[topic.id]];
  } else if (topic.quizzes && topic.quizzes.length > 0) {
    qs = [...topic.quizzes];
  } else if (window.APP_DATA && window.APP_DATA.questions) {
    qs = window.APP_DATA.questions.filter(q => q.topicId === topic.id);
  }

  quizState.questions = qs;
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answered = false;
  clearInterval(quizState.timerInterval);

  renderQuestion(topic, lang);
}

function renderQuestion(topic, lang) {
  const container = document.getElementById('quiz-engine');
  if (!container) return;

  const { questions, currentIndex, score } = quizState;

  if (!questions || questions.length === 0) {
    container.innerHTML = `
      <div class="quiz-empty-card" style="text-align:center;padding:40px 20px">
        <div style="font-size:3rem;margin-bottom:12px">📚</div>
        <h3>${lang === 'mr' ? 'या घटकासाठी सराव प्रश्न लवकरच जोडले जातील' : 'Questions coming soon for this topic'}</h3>
        <p style="color:var(--text-muted);font-size:0.9rem">${lang === 'mr' ? 'कृपया धडे आणि प्रश्न प्रकार टॅबमधील उदाहरणे पहा.' : 'Please explore the Lessons & Question Patterns tab.'}</p>
        <button class="btn-secondary" style="margin-top:16px" onclick="switchTab('lessons')">
          📖 ${lang === 'mr' ? 'प्रश्न प्रकार पहा' : 'View Question Patterns'}
        </button>
      </div>
    `;
    return;
  }

  if (currentIndex >= questions.length) {
    showQuizResult(topic, lang);
    return;
  }

  const q = questions[currentIndex];
  const qtext = lang === 'mr' && q.questionMr ? q.questionMr : (q.question || q.q);
  const pct = Math.round((currentIndex / questions.length) * 100);
  const letters = ['A', 'B', 'C', 'D'];

  quizState.timeLeft = 30;
  quizState.answered = false;
  clearInterval(quizState.timerInterval);

  // Start timer
  quizState.timerInterval = setInterval(() => {
    quizState.timeLeft--;
    const timerEl = document.getElementById('quiz-timer-val');
    if (timerEl) timerEl.textContent = quizState.timeLeft + 's';
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timerInterval);
      if (!quizState.answered) {
        autoAnswer(q, lang);
      }
    }
  }, 1000);

  container.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-progress-text">${currentIndex + 1} / ${questions.length}</span>
      <span class="quiz-score-badge">Score: ${score}</span>
      <span class="quiz-timer">⏱ <span id="quiz-timer-val">30s</span></span>
    </div>
    <div class="quiz-progress-bar-wrap">
      <div class="quiz-progress-bar-fill" style="width:${pct}%"></div>
    </div>
    <div class="question-card">
      <div class="q-meta-row">
        <span class="q-tag-exam">${q.examTag || 'MPSC / Talathi'}</span>
        <span class="q-tag-diff ${q.difficulty ? q.difficulty.toLowerCase() : 'medium'}">${q.difficulty || 'Medium'}</span>
      </div>
      <div class="question-num">Question ${currentIndex + 1} of ${questions.length}</div>
      <div class="question-text">${qtext}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" id="opt-${i}" onclick="selectAnswer(${i}, ${q.correct}, '${topic.id}', '${lang}')">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="explanation-box"></div>
    </div>
    <button class="next-btn" id="next-q-btn" onclick="nextQuestion('${topic.id}', '${lang}')" style="display:none">
      ${currentIndex + 1 >= questions.length ? '🏁 See Results →' : 'Next Question →'}
    </button>
  `;
}

function selectAnswer(selected, correct, topicId, lang) {
  if (quizState.answered) return;
  quizState.answered = true;
  clearInterval(quizState.timerInterval);

  const topic = APP_DATA.topics.find(t => t.id === topicId);
  const q = quizState.questions[quizState.currentIndex];
  const explanationLang = lang === 'mr' && q.explanationMr ? q.explanationMr : (q.explanation || q.hint || '');

  // Disable all
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

  // Mark correct/wrong
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === correct) btn.classList.add('correct');
    else if (i === selected && selected !== correct) btn.classList.add('wrong');
  });

  if (selected === correct) {
    quizState.score++;
    showToast('🎉 Correct!', 'success');
  } else {
    showToast('❌ Incorrect!', 'warning');
  }

  // Show explanation
  const expBox = document.getElementById('explanation-box');
  if (expBox && explanationLang) {
    expBox.innerHTML = `
      <div class="explanation-card">
        <div class="explanation-label">💡 MPSC Solution & Shortcut</div>
        <div class="explanation-text">${explanationLang}</div>
      </div>
    `;
  }

  // Show next button
  const nextBtn = document.getElementById('next-q-btn');
  if (nextBtn) nextBtn.style.display = 'flex';

  // Save score
  if (q.id) {
    STATE.quizScores[q.id] = selected === correct ? 1 : 0;
    saveState();
  }
}

function autoAnswer(q, lang) {
  quizState.answered = true;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
  });

  const nextBtn = document.getElementById('next-q-btn');
  if (nextBtn) nextBtn.style.display = 'flex';

  showToast('⏰ Time up!', 'warning');
}

function nextQuestion(topicId, lang) {
  quizState.currentIndex++;
  const topic = APP_DATA.topics.find(t => t.id === topicId);
  renderQuestion(topic, lang);
}

function showQuizResult(topic, lang) {
  const container = document.getElementById('quiz-engine');
  const total = quizState.questions.length;
  const score = quizState.score;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  let emoji, msg;

  if (pct === 100) { emoji = '🏆'; msg = 'Perfect Score! Outstanding! 🎉'; }
  else if (pct >= 80) { emoji = '🌟'; msg = 'Excellent work! Keep it up!'; }
  else if (pct >= 60) { emoji = '👍'; msg = 'Good job! Review the patterns to improve!'; }
  else if (pct >= 40) { emoji = '📚'; msg = 'Keep studying! Review question patterns first!'; }
  else { emoji = '💪'; msg = 'Review lessons and question patterns, then retry!'; }

  const title = lang === 'mr' && topic.titleMr ? topic.titleMr : topic.title;

  container.innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${emoji}</div>
      <div class="result-score">${score}/${total}</div>
      <div style="font-size:2rem;font-weight:900;color:var(--accent-gold);margin-bottom:8px">${pct}%</div>
      <div class="result-text">${msg}</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:24px">${title} • MPSC / Talathi Pattern</div>
      <div class="result-actions" style="display:flex; flex-direction:column; gap:10px;">
        <button class="btn-primary" onclick="initQuiz(APP_DATA.topics.find(t=>t.id==='${topic.id}'), '${lang}')">
          🔄 Retake Quiz / पुन्हा सोडवा
        </button>
        <button class="btn-secondary" onclick="switchTab('lessons')">
          📖 Study Question Patterns / प्रश्न प्रकार पहा
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// FLASHCARD ENGINE
// ==========================================
let fcState = { index: 0, flipped: false };

function renderFlashcardsPanel(topic, lang) {
  return `<div id="flashcard-engine"></div>`;
}

function initFlashcards(topic, lang) {
  const container = document.getElementById('flashcard-engine');
  if (!container) return;
  fcState.index = 0;
  fcState.flipped = false;
  renderFlashcard(topic, lang);
}

function renderFlashcard(topic, lang) {
  const container = document.getElementById('flashcard-engine');
  if (!container) return;

  const cards = topic.flashcards;
  const { index } = fcState;
  const card = cards[index];

  const front = lang === 'mr' && card.frontMr ? card.frontMr : card.front;
  const back = lang === 'mr' && card.backMr ? card.backMr : card.back;

  container.innerHTML = `
    <div style="text-align:center;margin-bottom:16px">
      <div style="font-size:0.85rem;color:var(--text-muted)">Tap the card to flip it</div>
    </div>
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard" onclick="flipCard()">
        <div class="flashcard-front">
          <div class="card-hint">❓ Question</div>
          <div class="card-question">${front}</div>
        </div>
        <div class="flashcard-back">
          <div class="card-hint">✅ Answer</div>
          <div class="card-answer">${back}</div>
        </div>
      </div>
    </div>
    <div class="flashcard-nav">
      <button class="fc-nav-btn" onclick="prevCard('${topic.id}', '${lang}')" ${index === 0 ? 'disabled' : ''}>
        ← Previous
      </button>
      <span class="fc-counter">${index + 1} / ${cards.length}</span>
      <button class="fc-nav-btn" onclick="nextCard('${topic.id}', '${lang}')" ${index === cards.length - 1 ? 'disabled' : ''}>
        Next →
      </button>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:16px">
      <button class="btn-primary" onclick="shuffleCards('${topic.id}', '${lang}')">🔀 Shuffle</button>
    </div>
  `;
}

function flipCard() {
  const card = document.getElementById('flashcard');
  if (card) {
    fcState.flipped = !fcState.flipped;
    card.classList.toggle('flipped', fcState.flipped);
  }
}

function nextCard(topicId, lang) {
  const topic = APP_DATA.topics.find(t => t.id === topicId);
  if (fcState.index < topic.flashcards.length - 1) {
    fcState.index++;
    fcState.flipped = false;
    renderFlashcard(topic, lang);
  }
}

function prevCard(topicId, lang) {
  const topic = APP_DATA.topics.find(t => t.id === topicId);
  if (fcState.index > 0) {
    fcState.index--;
    fcState.flipped = false;
    renderFlashcard(topic, lang);
  }
}

function shuffleCards(topicId, lang) {
  const topic = APP_DATA.topics.find(t => t.id === topicId);
  // Shuffle the cards
  topic.flashcards.sort(() => Math.random() - 0.5);
  fcState.index = 0;
  fcState.flipped = false;
  renderFlashcard(topic, lang);
  showToast('🔀 Cards shuffled!', 'info');
}

// ==========================================
// EXPLORE / SEARCH PAGE
// ==========================================
function renderExplore() {
  const lang = STATE.lang;
  const page = document.getElementById('page-explore');

  page.innerHTML = `
    <div class="page-title">🔍 Explore Topics</div>
    <div class="page-desc">Search all topics, shortcuts and tricks</div>
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" id="search-input"
        placeholder="Search topics, tricks..." oninput="handleSearch(this.value)">
    </div>
    <div id="search-results">
      <div class="section-title" style="margin-bottom:16px">📚 All Topics (${APP_DATA.topics.length})</div>
      <div class="topics-grid" id="explore-grid"></div>
    </div>
  `;

  renderExploreGrid(APP_DATA.topics, lang);
}

function renderExploreGrid(topics, lang) {
  const grid = document.getElementById('explore-grid');
  if (!grid) return;
  grid.innerHTML = topics.map(t => createTopicCard(t, lang)).join('');

  grid.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.bookmark-btn')) return;
      navigate('topic', card.dataset.topicId);
    });
  });

  grid.querySelectorAll('.bookmark-btn').forEach(btn => {
    const tid = btn.dataset.topicId;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(tid);
      btn.classList.toggle('active', isBookmarked(tid));
      btn.textContent = isBookmarked(tid) ? '★' : '☆';
    });
    btn.classList.toggle('active', isBookmarked(tid));
    btn.textContent = isBookmarked(tid) ? '★' : '☆';
  });
}

function handleSearch(query) {
  const lang = STATE.lang;
  const q = query.toLowerCase().trim();
  if (!q) {
    renderExploreGrid(APP_DATA.topics, lang);
    return;
  }

  const results = APP_DATA.topics.filter(t => {
    const titleMatch = t.title.toLowerCase().includes(q) || (t.titleMr && t.titleMr.includes(q));
    const subtitleMatch = t.subtitle.toLowerCase().includes(q);
    const shortcutMatch = t.shortcuts.some(s => s.content.toLowerCase().includes(q));
    return titleMatch || subtitleMatch || shortcutMatch;
  });

  renderExploreGrid(results, lang);

  const resultLabel = document.querySelector('#search-results .section-title');
  if (resultLabel) resultLabel.textContent = `🔍 Found ${results.length} result(s) for "${query}"`;
}

// ==========================================
// PROGRESS PAGE
// ==========================================
function renderProgress() {
  const lang = STATE.lang;
  const total = APP_DATA.topics.length;
  const completed = Object.values(STATE.progress).filter(v => v >= 1).length;
  const pct = Math.round((completed / total) * 100);
  const circumference = 2 * Math.PI * 60;
  const dashOffset = circumference - (circumference * pct / 100);

  const quizTotal = APP_DATA.topics.reduce((sum, t) => sum + t.quizzes.length, 0);
  const quizDone = Object.keys(STATE.quizScores).length;
  const quizCorrect = Object.values(STATE.quizScores).filter(v => v === 1).length;

  const page = document.getElementById('page-progress');
  page.innerHTML = `
    <div class="progress-header">
      <div class="page-title">📊 Your Progress</div>
      <div class="page-desc">Track your learning journey</div>

      <div class="progress-hero-ring">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12"/>
          <circle cx="70" cy="70" r="60" fill="none" stroke="url(#grad1)" stroke-width="12"
            stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
            style="transition:stroke-dashoffset 1s ease"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#6c63ff"/>
              <stop offset="100%" style="stop-color:#a855f7"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="progress-ring-text">
          <div class="ring-pct">${pct}%</div>
          <div class="ring-label">Complete</div>
        </div>
      </div>
    </div>

    <div class="achievements-grid">
      <div class="achievement-card">
        <div class="achievement-icon">📚</div>
        <div class="achievement-val">${completed}/${total}</div>
        <div class="achievement-label">Topics Done</div>
      </div>
      <div class="achievement-card">
        <div class="achievement-icon">❓</div>
        <div class="achievement-val">${quizDone}/${quizTotal}</div>
        <div class="achievement-label">Quiz Taken</div>
      </div>
      <div class="achievement-card">
        <div class="achievement-icon">🔥</div>
        <div class="achievement-val">${STATE.streak}</div>
        <div class="achievement-label">Day Streak</div>
      </div>
      <div class="achievement-card">
        <div class="achievement-icon">⭐</div>
        <div class="achievement-val">${STATE.bookmarks.length}</div>
        <div class="achievement-label">Bookmarks</div>
      </div>
      <div class="achievement-card">
        <div class="achievement-icon">✅</div>
        <div class="achievement-val">${quizCorrect}</div>
        <div class="achievement-label">Correct Ans</div>
      </div>
      <div class="achievement-card">
        <div class="achievement-icon">🎯</div>
        <div class="achievement-val">${quizDone > 0 ? Math.round((quizCorrect/quizDone)*100) : 0}%</div>
        <div class="achievement-label">Accuracy</div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">📋 Topic Progress</div>
    </div>

    <div class="topic-progress-list">
      ${renderProgressPerCategory('reasoning', '🧩 Reasoning', lang)}
      ${renderProgressPerCategory('math', '🔢 Mathematics', lang)}
    </div>
  `;
}

function renderProgressPerCategory(cat, label, lang) {
  const topics = APP_DATA.topics.filter(t => t.category === cat || (cat === 'math' && t.category === 'mathematics'));
  const catDone = topics.filter(t => (STATE.progress[t.id] || 0) >= 1).length;

  return `
    <div style="margin-bottom:8px">
      <div class="section-title" style="margin-bottom:12px;font-size:0.95rem">
        ${label} (${catDone}/${topics.length})
      </div>
      ${topics.map(t => {
        const pct = (STATE.progress[t.id] || 0) >= 1 ? 100 : 0;
        const title = lang === 'mr' && t.titleMr ? t.titleMr : t.title;
        return `
          <div class="topic-progress-item" onclick="navigate('topic','${t.id}')" style="cursor:pointer;margin-bottom:8px">
            <div class="tpi-icon" style="background:${hexToRgba(t.color, 0.15)};color:${t.color}">
              ${t.icon}
            </div>
            <div class="tpi-info">
              <div class="tpi-name">${title}</div>
              <div class="tpi-bar-wrap">
                <div class="tpi-bar" style="width:${pct}%;background:${t.color}"></div>
              </div>
            </div>
            <div class="tpi-pct">${pct}%</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ==========================================
// BOOKMARKS PAGE
// ==========================================
function renderBookmarks() {
  const lang = STATE.lang;
  const page = document.getElementById('page-bookmarks');
  const bookmarked = APP_DATA.topics.filter(t => isBookmarked(t.id));

  if (bookmarked.length === 0) {
    page.innerHTML = `
      <div class="page-title">⭐ Bookmarks</div>
      <div class="page-desc">Your saved topics</div>
      <div class="bookmarks-empty">
        <div class="empty-icon">⭐</div>
        <p>No bookmarks yet!</p>
        <p style="margin-top:8px;font-size:0.8rem">Tap the ☆ on any topic card to bookmark it</p>
      </div>
    `;
    return;
  }

  page.innerHTML = `
    <div class="page-title">⭐ Bookmarks</div>
    <div class="page-desc">${bookmarked.length} saved topic${bookmarked.length > 1 ? 's' : ''}</div>
    <div class="topics-grid" id="bookmarks-grid">
      ${bookmarked.map(t => createTopicCard(t, lang)).join('')}
    </div>
  `;

  document.querySelectorAll('#bookmarks-grid .topic-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.bookmark-btn')) return;
      navigate('topic', card.dataset.topicId);
    });
  });

  document.querySelectorAll('#bookmarks-grid .bookmark-btn').forEach(btn => {
    const tid = btn.dataset.topicId;
    btn.classList.toggle('active', isBookmarked(tid));
    btn.textContent = isBookmarked(tid) ? '★' : '☆';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(tid);
      renderBookmarks();
    });
  });
}

// ==========================================
// LANGUAGE TOGGLE
// ==========================================
function toggleLang() {
  STATE.lang = STATE.lang === 'en' ? 'mr' : 'en';
  saveState();

  document.body.classList.toggle('lang-mr', STATE.lang === 'mr');

  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = STATE.lang === 'mr' ? 'मराठी ✓' : 'Marathi';

  // Re-render current page
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    const pid = activePage.id.replace('page-', '');
    if (pid === 'topic') renderTopicDetail(currentTopicId);
    else navigate(pid);
  }
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================
// PWA INSTALL
// ==========================================
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  setTimeout(() => {
    const banner = document.getElementById('install-banner');
    if (banner) banner.style.display = 'block';
  }, 3000);
});

function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        showToast('🎉 App installed successfully!', 'success');
        document.getElementById('install-banner').style.display = 'none';
      }
      deferredInstallPrompt = null;
    });
  }
}

function dismissInstall() {
  const banner = document.getElementById('install-banner');
  if (banner) banner.style.display = 'none';
}

// ==========================================
// TABLES & FORMULAS PAGE (MATHS & REASONING)
// ==========================================
let tablesActiveSubject = 'math';
let tablesActiveMathTab = 'squares';
let tablesActiveReasoningTab = 'alphabet';

function renderTables() {
  const page = document.getElementById('page-tables');
  page.innerHTML = `
    <div class="page-title">📋 Formula & Cheat Sheets</div>
    <div class="page-desc">High-yield reference tables, shortcuts & formulas for Maths & Reasoning</div>

    <!-- Segmented subject selector -->
    <div class="ref-subject-toggle">
      <button class="ref-sub-btn ${tablesActiveSubject === 'math' ? 'active' : ''}" data-subject="math" onclick="switchRefSubject('math')">
        <span>🧮 Quantitative Maths</span>
      </button>
      <button class="ref-sub-btn ${tablesActiveSubject === 'reasoning' ? 'active' : ''}" data-subject="reasoning" onclick="switchRefSubject('reasoning')">
        <span>🧠 Logical Reasoning</span>
      </button>
    </div>

    <!-- Math Sub-tabs strip -->
    <div class="ref-tabs ref-tabs-math" id="ref-tabs-math" style="${tablesActiveSubject === 'math' ? 'display:flex;' : 'display:none;'}">
      <button class="ref-tab ${tablesActiveMathTab === 'squares' ? 'active' : ''}" data-ref="squares" onclick="switchRefTab('squares')">🔢 Sq & Cubes</button>
      <button class="ref-tab ${tablesActiveMathTab === 'tables' ? 'active' : ''}" data-ref="tables" onclick="switchRefTab('tables')">✖️ Tables</button>
      <button class="ref-tab ${tablesActiveMathTab === 'formulas' ? 'active' : ''}" data-ref="formulas" onclick="switchRefTab('formulas')">📐 Formulas</button>
      <button class="ref-tab ${tablesActiveMathTab === 'fractions' ? 'active' : ''}" data-ref="fractions" onclick="switchRefTab('fractions')">½ Fractions</button>
    </div>

    <!-- Reasoning Sub-tabs strip -->
    <div class="ref-tabs ref-tabs-reasoning" id="ref-tabs-reasoning" style="${tablesActiveSubject === 'reasoning' ? 'display:flex;' : 'display:none;'}">
      <button class="ref-tab ${tablesActiveReasoningTab === 'alphabet' ? 'active' : ''}" data-ref="alphabet" onclick="switchRefTab('alphabet')">🔤 Alphabet & Codes</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'clocks' ? 'active' : ''}" data-ref="clocks" onclick="switchRefTab('clocks')">⏰ Clock & Calendar</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'directions' ? 'active' : ''}" data-ref="directions" onclick="switchRefTab('directions')">🧭 Directions & Shadows</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'relations' ? 'active' : ''}" data-ref="relations" onclick="switchRefTab('relations')">👥 Blood Relations</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'syllogism' ? 'active' : ''}" data-ref="syllogism" onclick="switchRefTab('syllogism')">⚖️ Syllogism & Logic</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'ranking' ? 'active' : ''}" data-ref="ranking" onclick="switchRefTab('ranking')">📊 Order & Ranking</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'dice' ? 'active' : ''}" data-ref="dice" onclick="switchRefTab('dice')">🎲 Dice & Cubes</button>
      <button class="ref-tab ${tablesActiveReasoningTab === 'counting' ? 'active' : ''}" data-ref="counting" onclick="switchRefTab('counting')">📐 Counting Figures</button>
    </div>

    <!-- Math Panels -->
    <div id="ref-panel-squares" class="ref-panel ${tablesActiveSubject === 'math' && tablesActiveMathTab === 'squares' ? 'active' : ''}">${buildSquaresCubesPanel()}</div>
    <div id="ref-panel-tables" class="ref-panel ${tablesActiveSubject === 'math' && tablesActiveMathTab === 'tables' ? 'active' : ''}">${buildTablesPanel()}</div>
    <div id="ref-panel-formulas" class="ref-panel ${tablesActiveSubject === 'math' && tablesActiveMathTab === 'formulas' ? 'active' : ''}">${buildFormulasPanel()}</div>
    <div id="ref-panel-fractions" class="ref-panel ${tablesActiveSubject === 'math' && tablesActiveMathTab === 'fractions' ? 'active' : ''}">${buildFractionsPanel()}</div>

    <!-- Reasoning Panels -->
    <div id="ref-panel-alphabet" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'alphabet' ? 'active' : ''}">${buildAlphabetPanel()}</div>
    <div id="ref-panel-clocks" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'clocks' ? 'active' : ''}">${buildClocksPanel()}</div>
    <div id="ref-panel-directions" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'directions' ? 'active' : ''}">${buildDirectionsPanel()}</div>
    <div id="ref-panel-relations" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'relations' ? 'active' : ''}">${buildRelationsPanel()}</div>
    <div id="ref-panel-syllogism" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'syllogism' ? 'active' : ''}">${buildSyllogismPanel()}</div>
    <div id="ref-panel-ranking" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'ranking' ? 'active' : ''}">${buildRankingPanel()}</div>
    <div id="ref-panel-dice" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'dice' ? 'active' : ''}">${buildDicePanel()}</div>
    <div id="ref-panel-counting" class="ref-panel ${tablesActiveSubject === 'reasoning' && tablesActiveReasoningTab === 'counting' ? 'active' : ''}">${buildCountingFiguresPanel()}</div>
  `;
}

function switchRefSubject(subj) {
  tablesActiveSubject = subj;
  document.querySelectorAll('.ref-sub-btn').forEach(b => b.classList.toggle('active', b.dataset.subject === subj));

  const mathTabs = document.getElementById('ref-tabs-math');
  const reasoningTabs = document.getElementById('ref-tabs-reasoning');
  if (subj === 'math') {
    if (mathTabs) mathTabs.style.display = 'flex';
    if (reasoningTabs) reasoningTabs.style.display = 'none';
    switchRefTab(tablesActiveMathTab);
  } else {
    if (mathTabs) mathTabs.style.display = 'none';
    if (reasoningTabs) reasoningTabs.style.display = 'flex';
    switchRefTab(tablesActiveReasoningTab);
  }
}
window.switchRefSubject = switchRefSubject;

function switchRefTab(name) {
  if (['squares', 'tables', 'formulas', 'fractions'].includes(name)) {
    tablesActiveMathTab = name;
  } else {
    tablesActiveReasoningTab = name;
  }
  document.querySelectorAll('.ref-tab').forEach(t => t.classList.toggle('active', t.dataset.ref === name));
  document.querySelectorAll('.ref-panel').forEach(p => p.classList.toggle('active', p.id === `ref-panel-${name}`));
}
window.switchRefTab = switchRefTab;

/* ── Squares & Cubes ──────────────────────────────────────────── */
function buildSquaresCubesPanel() {
  const rows = [];
  for (let n = 1; n <= 30; n++) {
    const cube = n <= 20 ? `<td class="ref-cube">${n**3}</td>` : `<td class="ref-cube ref-na">—</td>`;
    rows.push(`
      <tr class="${n % 2 === 0 ? 'ref-row-even' : ''}">
        <td class="ref-n">${n}</td>
        <td class="ref-sq">${n*n}</td>
        ${cube}
        <td class="ref-sqrt">${Number.isInteger(Math.sqrt(n)) ? '✓' : ''}</td>
      </tr>`);
  }
  return `
    <div class="ref-info-bar">💡 <strong>Perfect squares 1–30</strong> | Cubes 1–20 | ✓ = perfect square</div>
    <div class="ref-table-wrap">
      <table class="ref-table">
        <thead><tr>
          <th>n</th><th>n²</th><th>n³</th><th>√</th>
        </tr></thead>
        <tbody>${rows.join('')}</tbody>
      </table>
    </div>
    <div class="ref-tip-grid">
      <div class="ref-tip-card">
        <div class="ref-tip-title">⚡ Quick Recall: Squares ending in 5</div>
        <div class="ref-tip-body">n5² = n×(n+1) followed by 25<br>
          35² = 3×4|25 = <strong>1225</strong><br>
          65² = 6×7|25 = <strong>4225</strong><br>
          95² = 9×10|25 = <strong>9025</strong>
        </div>
      </div>
      <div class="ref-tip-card">
        <div class="ref-tip-title">⚡ Squares near 100</div>
        <div class="ref-tip-body">(100±d)² = (100±2d)×100 + d²<br>
          98² = 96×100 + 4 = <strong>9604</strong><br>
          103² = 106×100 + 9 = <strong>10609</strong><br>
          97² = 94×100 + 9 = <strong>9409</strong>
        </div>
      </div>
      <div class="ref-tip-card">
        <div class="ref-tip-title">⚡ Perfect Cubes to Know</div>
        <div class="ref-tip-body">
          1³=1 · 2³=8 · 3³=27 · 4³=64 · 5³=125<br>
          6³=216 · 7³=343 · 8³=512 · 9³=729 · 10³=1000<br>
          11³=1331 · 12³=1728 · 15³=3375 · 20³=8000
        </div>
      </div>
      <div class="ref-tip-card">
        <div class="ref-tip-title">📌 Powers of 2 & 3</div>
        <div class="ref-tip-body">
          2¹=2 · 2⁴=16 · 2⁷=128 · 2¹⁰=1024<br>
          2²=4 · 2⁵=32 · 2⁸=256<br>
          3¹=3 · 3³=27 · 3⁵=243 · 3⁷=2187
        </div>
      </div>
    </div>`;
}

/* ── Multiplication Tables ────────────────────────────────────── */
function buildTablesPanel() {
  const TABLES = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const cards = TABLES.map(n => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(`<tr class="${i % 2 === 0 ? 'ref-row-even' : ''}">
        <td>${n} × ${i}</td>
        <td class="ref-result">=&nbsp;<strong>${n*i}</strong></td>
      </tr>`);
    }
    return `
      <div class="mult-card" id="mult-${n}">
        <div class="mult-header">Table of ${n}</div>
        <table class="mult-table"><tbody>${rows.join('')}</tbody></table>
      </div>`;
  });

  // Quick-filter buttons
  const filters = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n =>
    `<button class="mult-filter-btn" onclick="filterMultTable(${n})">${n}</button>`
  ).join('');

  return `
    <div class="ref-info-bar">💡 Tap a number to jump to its table</div>
    <div class="mult-filter-wrap">${filters}
      <button class="mult-filter-btn mult-filter-all" onclick="filterMultTable(0)">All</button>
    </div>
    <div class="mult-grid" id="mult-grid">${cards.join('')}</div>`;
}
window.filterMultTable = function(n) {
  document.querySelectorAll('.mult-card').forEach(c => {
    c.style.display = (n === 0 || c.id === `mult-${n}`) ? '' : 'none';
  });
  document.querySelectorAll('.mult-filter-btn').forEach(b => b.classList.remove('active'));
  if (n === 0) {
    document.querySelector('.mult-filter-all').classList.add('active');
  } else {
    document.querySelectorAll('.mult-filter-btn').forEach(b => {
      if (b.textContent == n) b.classList.add('active');
    });
  }
  if (n !== 0) document.getElementById(`mult-${n}`)?.scrollIntoView({ behavior:'smooth', block:'start' });
};

/* ── Key Formulas ─────────────────────────────────────────────── */
function buildFormulasPanel() {
  const sections = [
    {
      icon: '📐', title: 'Geometry — 2D Shapes',
      formulas: [
        { name: 'Square',       f: 'Area = a²  |  Perimeter = 4a' },
        { name: 'Rectangle',    f: 'Area = l×b  |  Perimeter = 2(l+b)' },
        { name: 'Triangle',     f: 'Area = ½×b×h  |  Hero: √[s(s-a)(s-b)(s-c)], s=(a+b+c)/2' },
        { name: 'Circle',       f: 'Area = πr²  |  Circumference = 2πr' },
        { name: 'Trapezium',    f: 'Area = ½×(a+b)×h' },
        { name: 'Parallelogram',f: 'Area = b×h  |  Perimeter = 2(a+b)' },
        { name: 'Rhombus',      f: 'Area = ½×d₁×d₂  |  Perimeter = 4a' },
      ]
    },
    {
      icon: '📦', title: 'Geometry — 3D Shapes',
      formulas: [
        { name: 'Cube',         f: 'Volume = a³  |  Surface Area = 6a²  |  Diagonal = a√3' },
        { name: 'Cuboid',       f: 'Volume = l×b×h  |  SA = 2(lb+bh+hl)  |  Diag = √(l²+b²+h²)' },
        { name: 'Cylinder',     f: 'Volume = πr²h  |  CSA = 2πrh  |  TSA = 2πr(r+h)' },
        { name: 'Cone',         f: 'Volume = ⅓πr²h  |  CSA = πrl  |  l = √(r²+h²)' },
        { name: 'Sphere',       f: 'Volume = 4/3πr³  |  Surface Area = 4πr²' },
        { name: 'Hemisphere',   f: 'Volume = 2/3πr³  |  CSA = 2πr²  |  TSA = 3πr²' },
      ]
    },
    {
      icon: '🔣', title: 'Algebra Identities',
      formulas: [
        { name: '(a+b)²',    f: '= a² + 2ab + b²' },
        { name: '(a−b)²',    f: '= a² − 2ab + b²' },
        { name: '(a+b)(a−b)',f: '= a² − b²' },
        { name: '(a+b)³',    f: '= a³ + 3a²b + 3ab² + b³' },
        { name: '(a−b)³',    f: '= a³ − 3a²b + 3ab² − b³' },
        { name: 'a³+b³',     f: '= (a+b)(a²−ab+b²)' },
        { name: 'a³−b³',     f: '= (a−b)(a²+ab+b²)' },
        { name: '(a+b+c)²',  f: '= a²+b²+c²+2ab+2bc+2ca' },
      ]
    },
    {
      icon: '📈', title: 'Sequences & Series',
      formulas: [
        { name: 'AP nth term',   f: 'aₙ = a + (n−1)d' },
        { name: 'AP Sum',        f: 'Sₙ = n/2 × [2a + (n−1)d]' },
        { name: 'GP nth term',   f: 'aₙ = a × rⁿ⁻¹' },
        { name: 'GP Sum (r≠1)',  f: 'Sₙ = a(rⁿ−1)/(r−1)' },
        { name: 'Sum 1 to n',    f: 'n(n+1)/2' },
        { name: 'Sum of squares',f: 'n(n+1)(2n+1)/6' },
        { name: 'Sum of cubes',  f: '[n(n+1)/2]²' },
      ]
    },
    {
      icon: '💯', title: 'Percentage & Ratio',
      formulas: [
        { name: 'Percentage',        f: 'Part/Whole × 100' },
        { name: '% Change',          f: '(New−Old)/Old × 100' },
        { name: 'Successive %',      f: 'Net = a+b+(ab/100)' },
        { name: 'Profit %',          f: '(SP−CP)/CP × 100' },
        { name: 'SP from Profit%',   f: 'SP = CP × (1+P/100)' },
        { name: 'Discount',          f: 'Discount% = (MP−SP)/MP × 100' },
        { name: 'SI',                f: 'SI = P×R×T/100  |  A = P+SI' },
        { name: 'CI',                f: 'A = P(1+R/100)ⁿ  |  CI = A−P' },
        { name: 'CI−SI (2 Years)',   f: 'Diff = P × (R/100)²' },
        { name: 'CI−SI (3 Years)',   f: 'Diff = P × (R/100)² × (3 + R/100)' },
      ]
    },
    {
      icon: '🚆', title: 'Speed, Time & Work',
      formulas: [
        { name: 'Speed',             f: 'Speed = Distance / Time' },
        { name: 'km/h ↔ m/s',       f: '×(5/18) for km/h→m/s  |  ×(18/5) for m/s→km/h' },
        { name: 'Relative Speed',    f: 'Same dir: S₁−S₂  |  Opposite: S₁+S₂' },
        { name: 'Train passing Pole',f: 'Time = Length_train / Speed' },
        { name: 'Train passing Platform', f: 'Time = (Length_train + Length_plat) / Speed' },
        { name: 'Boat downstream',   f: 'Speed = B+R  |  Upstream = B−R' },
        { name: 'Work combined',     f: '1/T = 1/A + 1/B  →  T = AB/(A+B)' },
        { name: 'M1-D1-H1 Rule',     f: 'M₁×D₁×H₁/W₁ = M₂×D₂×H₂/W₂' },
        { name: 'Pipe fill+leak',    f: '1/T_fill − 1/T_leak' },
      ]
    },
    {
      icon: '🔢', title: 'Indices, Surds & Logarithms',
      formulas: [
        { name: 'Product Rule',      f: 'aᵐ × aⁿ = aᵐ⁺ⁿ' },
        { name: 'Quotient Rule',     f: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ' },
        { name: 'Power of Power',    f: '(aᵐ)ⁿ = aᵐⁿ' },
        { name: 'Negative Power',    f: 'a⁻ⁿ = 1 / aⁿ  |  a⁰ = 1' },
        { name: 'Fractional Power',  f: 'aᵐ/ⁿ = ⁿ√(aᵐ)' },
        { name: 'Log Product',       f: 'log(ab) = log a + log b' },
        { name: 'Log Quotient',      f: 'log(a/b) = log a − log b' },
        { name: 'Log Power',         f: 'log(aᵏ) = k × log a' },
        { name: 'Base Rules',        f: 'log_a(a) = 1  |  log 1 = 0' },
      ]
    },
    {
      icon: '📐', title: 'Trigonometry Ratios & Identities',
      formulas: [
        { name: 'sin θ',             f: '0°: 0 | 30°: 1/2 | 45°: 1/√2 | 60°: √3/2 | 90°: 1' },
        { name: 'cos θ',             f: '0°: 1 | 30°: √3/2 | 45°: 1/√2 | 60°: 1/2 | 90°: 0' },
        { name: 'tan θ',             f: '0°: 0 | 30°: 1/√3 | 45°: 1 | 60°: √3 | 90°: ∞ (ND)' },
        { name: 'Identity 1',        f: 'sin²θ + cos²θ = 1' },
        { name: 'Identity 2',        f: '1 + tan²θ = sec²θ' },
        { name: 'Identity 3',        f: '1 + cot²θ = cosec²θ' },
      ]
    },
    {
      icon: '🎲', title: 'Permutation & Probability',
      formulas: [
        { name: 'Permutation',    f: 'P(n,r) = n! / (n−r)!' },
        { name: 'Combination',    f: 'C(n,r) = n! / [r!×(n−r)!]' },
        { name: 'Probability',    f: 'P(E) = Favourable / Total' },
        { name: 'P(not A)',       f: '= 1 − P(A)' },
        { name: 'P(A or B)',      f: '= P(A)+P(B)−P(A∩B)' },
        { name: 'P(A and B)',     f: '= P(A)×P(B)  [if independent]' },
        { name: 'Circular Perm', f: '(n−1)!' },
      ]
    },
  ];

  return sections.map(sec => `
    <div class="formula-section">
      <div class="formula-section-title">${sec.icon} ${sec.title}</div>
      <div class="formula-table-wrap">
        <table class="formula-table">
          <tbody>
            ${sec.formulas.map((f, i) => `
              <tr class="${i%2===0?'':'ref-row-even'}">
                <td class="form-name">${f.name}</td>
                <td class="form-val">${f.f}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`).join('');
}

/* ── Fractions / Decimals / Percentages ────────────────────────── */
function buildFractionsPanel() {
  const data = [
    ['1/2','0.5','50%'], ['1/3','0.333','33.33%'], ['2/3','0.666','66.67%'],
    ['1/4','0.25','25%'], ['3/4','0.75','75%'],
    ['1/5','0.2','20%'], ['2/5','0.4','40%'], ['3/5','0.6','60%'], ['4/5','0.8','80%'],
    ['1/6','0.1667','16.67%'], ['5/6','0.8333','83.33%'],
    ['1/7','0.1429','14.29%'], ['2/7','0.2857','28.57%'], ['3/7','0.4286','42.86%'],
    ['1/8','0.125','12.5%'], ['3/8','0.375','37.5%'], ['5/8','0.625','62.5%'], ['7/8','0.875','87.5%'],
    ['1/9','0.111','11.11%'], ['2/9','0.222','22.22%'], ['4/9','0.444','44.44%'],
    ['1/10','0.1','10%'], ['1/11','0.0909','9.09%'], ['1/12','0.0833','8.33%'],
    ['1/16','0.0625','6.25%'], ['1/20','0.05','5%'], ['1/25','0.04','4%'],
    ['1/50','0.02','2%'], ['1/100','0.01','1%'],
  ];

  const rows = data.map((r, i) => `
    <tr class="${i%2===0?'':'ref-row-even'}">
      <td class="frac-frac">${r[0]}</td>
      <td class="frac-dec">${r[1]}</td>
      <td class="frac-pct">${r[2]}</td>
    </tr>`).join('');

  const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

  return `
    <div class="ref-info-bar">💡 Memorise these conversions — they solve 80% of percentage problems!</div>
    <div class="frac-grid">
      <div>
        <div class="formula-section-title" style="margin-bottom:12px">½ Fraction ↔ Decimal ↔ %</div>
        <div class="ref-table-wrap">
          <table class="ref-table">
            <thead><tr><th>Fraction</th><th>Decimal</th><th>Percent</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="formula-section-title" style="margin-bottom:12px">🔢 Prime Numbers (up to 100)</div>
        <div class="prime-grid">
          ${primes.map(p => `<div class="prime-chip">${p}</div>`).join('')}
        </div>

        <div class="formula-section-title" style="margin:20px 0 12px">📏 Unit Digit Cycles</div>
        <div class="ref-table-wrap">
          <table class="ref-table">
            <thead><tr><th>Base</th><th>Cycle (period)</th></tr></thead>
            <tbody>
              <tr><td>2ⁿ</td><td class="ref-result">2, 4, 8, 6 (period 4)</td></tr>
              <tr class="ref-row-even"><td>3ⁿ</td><td class="ref-result">3, 9, 7, 1 (period 4)</td></tr>
              <tr><td>4ⁿ</td><td class="ref-result">4, 6 (period 2)</td></tr>
              <tr class="ref-row-even"><td>7ⁿ</td><td class="ref-result">7, 9, 3, 1 (period 4)</td></tr>
              <tr><td>8ⁿ</td><td class="ref-result">8, 4, 2, 6 (period 4)</td></tr>
              <tr class="ref-row-even"><td>9ⁿ</td><td class="ref-result">9, 1 (period 2)</td></tr>
              <tr><td>0,1,5,6ⁿ</td><td class="ref-result">Always same digit (period 1)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="formula-section-title" style="margin:20px 0 12px">📌 Divisibility Rules</div>
        <div class="ref-table-wrap">
          <table class="ref-table">
            <thead><tr><th>Divisor</th><th>Rule</th></tr></thead>
            <tbody>
              <tr><td>2</td><td class="ref-result">Last digit even</td></tr>
              <tr class="ref-row-even"><td>3</td><td class="ref-result">Sum of digits ÷ 3</td></tr>
              <tr><td>4</td><td class="ref-result">Last 2 digits ÷ 4</td></tr>
              <tr class="ref-row-even"><td>5</td><td class="ref-result">Ends in 0 or 5</td></tr>
              <tr><td>6</td><td class="ref-result">Divisible by 2 AND 3</td></tr>
              <tr class="ref-row-even"><td>7</td><td class="ref-result">Double last digit, subtract from rest. Repeat.</td></tr>
              <tr><td>8</td><td class="ref-result">Last 3 digits ÷ 8</td></tr>
              <tr class="ref-row-even"><td>9</td><td class="ref-result">Sum of digits ÷ 9</td></tr>
              <tr><td>11</td><td class="ref-result">Alternating digit sum = 0 or 11k</td></tr>
              <tr class="ref-row-even"><td>12</td><td class="ref-result">Divisible by 3 AND 4</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

/* ── Reasoning: Alphabet & Codes ──────────────────────────────── */
function buildAlphabetPanel() {
  const letters = [
    { l: 'A', f: 1,  r: 26, hint: 'First letter (A1)' },
    { l: 'B', f: 2,  r: 25, hint: 'B = 2 (Second)' },
    { l: 'C', f: 3,  r: 24, hint: 'C = 3 (CFILORUX)' },
    { l: 'D', f: 4,  r: 23, hint: 'D = 4 (Four)' },
    { l: 'E', f: 5,  r: 22, hint: 'EJOTY (5)' },
    { l: 'F', f: 6,  r: 21, hint: 'Fixed is Six (6)' },
    { l: 'G', f: 7,  r: 20, hint: 'G has 7 inside (G-7 summit)' },
    { l: 'H', f: 8,  r: 19, hint: 'Close top & bottom = 8' },
    { l: 'I', f: 9,  r: 18, hint: 'I know (looks like 9)' },
    { l: 'J', f: 10, r: 17, hint: 'EJOTY (10) / Jio' },
    { l: 'K', f: 11, r: 16, hint: 'Kings XI Punjab (11)' },
    { l: 'L', f: 12, r: 15, hint: 'L = 12 (Lunch at 12)' },
    { l: 'M', f: 13, r: 14, hint: 'Mera-Tera (13) / Rotate 3' },
    { l: 'N', f: 14, r: 13, hint: 'Roman IV looks like 14' },
    { l: 'O', f: 15, r: 12, hint: 'EJOTY (15)' },
    { l: 'P', f: 16, r: 11, hint: 'Invert P looks like 6 -> 16' },
    { l: 'Q', f: 17, r: 10, hint: 'Queen brings danger (17 खतरा)' },
    { l: 'R', f: 18, r: 9,  hint: 'Right to vote at 18' },
    { l: 'S', f: 19, r: 8,  hint: 'Join curves of S -> 19' },
    { l: 'T', f: 20, r: 7,  hint: 'T20 Cricket / EJOTY (20)' },
    { l: 'U', f: 21, r: 6,  hint: 'You are 21' },
    { l: 'V', f: 22, r: 5,  hint: 'Victory sign (2 fingers) -> 22' },
    { l: 'W', f: 23, r: 4,  hint: '3 tilted left -> 23' },
    { l: 'X', f: 24, r: 3,  hint: '24 hours in a day (X)' },
    { l: 'Y', f: 25, r: 2,  hint: 'EJOTY (25)' },
    { l: 'Z', f: 26, r: 1,  hint: 'Last letter (26)' }
  ];

  const oppPairs = [
    { p: 'A - Z', m: 'AZad / Amazon', sum: '1 + 26 = 27' },
    { p: 'B - Y', m: 'BOY / Bye', sum: '2 + 25 = 27' },
    { p: 'C - X', m: 'CRuX / Crax', sum: '3 + 24 = 27' },
    { p: 'D - W', m: 'Dew / DoodhWala', sum: '4 + 23 = 27' },
    { p: 'E - V', m: 'EVening / Love (VE)', sum: '5 + 22 = 27' },
    { p: 'F - U', m: 'FUll / Father-Uncle', sum: '6 + 21 = 27' },
    { p: 'G - T', m: 'G.T. Road', sum: '7 + 20 = 27' },
    { p: 'H - S', m: 'High School', sum: '8 + 19 = 27' },
    { p: 'I - R', m: 'Indian Railway', sum: '9 + 18 = 27' },
    { p: 'J - Q', m: 'Jungle Queen / Jack', sum: '10 + 17 = 27' },
    { p: 'K - P', m: 'Kurta Pajama / P.K.', sum: '11 + 16 = 27' },
    { p: 'L - O', m: 'LOve (LO) / Light Out', sum: '12 + 15 = 27' },
    { p: 'M - N', m: 'MaN / Moon', sum: '13 + 14 = 27' }
  ];

  const tableRows = letters.map((item, i) => `
    <tr class="${i % 2 === 0 ? '' : 'ref-row-even'}">
      <td class="ref-n">${item.l}</td>
      <td class="ref-sq">${item.f}</td>
      <td class="ref-cube">${item.r}</td>
      <td class="ref-result">27</td>
      <td style="text-align:left; font-size:0.8rem; color:var(--text-secondary);">${item.hint}</td>
    </tr>
  `).join('');

  return `
    <div class="ref-info-bar">💡 <strong>Golden Rule:</strong> Forward Rank + Reverse Rank = <strong>27</strong> (Reverse = 27 − Forward)</div>
    
    <div class="formula-section-title">⚡ Speed Locator Rules</div>
    <div class="ejoty-container">
      <div>
        <div style="font-size:0.82rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">EJOTY (Multiples of 5):</div>
        <div class="ejoty-strip">
          <div class="ejoty-chip"><span class="ejoty-letter">E</span><span class="ejoty-pos">5</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">J</span><span class="ejoty-pos">10</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">O</span><span class="ejoty-pos">15</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">T</span><span class="ejoty-pos">20</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">Y</span><span class="ejoty-pos">25</span></div>
        </div>
      </div>
      <div>
        <div style="font-size:0.82rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">CFILORUX (Multiples of 3):</div>
        <div class="ejoty-strip">
          <div class="ejoty-chip"><span class="ejoty-letter">C</span><span class="ejoty-pos">3</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">F</span><span class="ejoty-pos">6</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">I</span><span class="ejoty-pos">9</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">L</span><span class="ejoty-pos">12</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">O</span><span class="ejoty-pos">15</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">R</span><span class="ejoty-pos">18</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">U</span><span class="ejoty-pos">21</span></div>
          <div class="ejoty-chip"><span class="ejoty-letter">X</span><span class="ejoty-pos">24</span></div>
        </div>
      </div>
    </div>

    <div class="formula-section-title">🔄 Opposite Letter Pairs (Sum = 27)</div>
    <div class="opp-pairs-grid">
      ${oppPairs.map(op => `
        <div class="opp-pair-card">
          <div class="opp-letters">${op.p}</div>
          <div class="opp-mnemonic">${op.m}</div>
          <div class="opp-sum">${op.sum}</div>
        </div>
      `).join('')}
    </div>

    <div class="formula-section-title">🔤 Alphabet Position & Memory Tricks (A–Z)</div>
    <div class="ref-table-wrap">
      <table class="ref-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Forward (L→R)</th>
            <th>Reverse (R→L)</th>
            <th>Sum</th>
            <th style="text-align:left;">Memory Hook</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>

    <div class="ref-tip-grid">
      <div class="ref-tip-card">
        <div class="ref-tip-title">⚡ Coding Pattern: Common Shifts</div>
        <div class="ref-tip-body">
          • <strong>Constant shift:</strong> Each letter shifted by +k (e.g. CAT → ECV by +2).<br>
          • <strong>Increasing shift:</strong> +1, +2, +3, +4...<br>
          • <strong>Alternate shift:</strong> +1, −1, +1, −1...<br>
          • <strong>Reverse coding:</strong> Word spelled backward, then shifted.
        </div>
      </div>
      <div class="ref-tip-card">
        <div class="ref-tip-title">⚡ Cross / Matrix Coding</div>
        <div class="ref-tip-body">
          • In a 4 or 6-letter word, divide into halves and cross-swap pairs (e.g., 1↔2, 3↔4 or 1↔3, 2↔4).<br>
          • Check if vowels have special rules (+1 for vowels, −1 for consonants).
        </div>
      </div>
    </div>
  `;
}

/* ── Reasoning: Clocks & Calendar ─────────────────────────────── */
function buildClocksPanel() {
  return `
    <div class="ref-info-bar">💡 Master clock angles, reflections, and calendar odd-days for instant solutions!</div>

    <div class="formula-section">
      <div class="formula-section-title">⏰ Clock Hand Angle Formula</div>
      <div class="ref-tip-card" style="margin-bottom:14px; border-left:4px solid var(--accent-primary);">
        <div style="font-size:1.1rem; font-weight:800; color:var(--accent-gold); margin-bottom:6px;">
          Angle θ = | 30H − (11/2)M |
        </div>
        <div class="ref-tip-body">
          <strong>Where:</strong> H = Hours (1 to 12), M = Minutes (0 to 59).<br>
          <strong>Reflex Angle:</strong> If angle > 180°, Reflex = 360° − θ.<br>
          <em>Example:</em> At 3:40 → |30(3) − 5.5(40)| = |90 − 220| = <strong>130°</strong>. (Reflex = 230°)
        </div>
      </div>

      <div class="formula-table-wrap">
        <table class="formula-table">
          <tbody>
            <tr><td class="form-name">Minute Hand Speed</td><td class="form-val"><strong>6° / min</strong> (360° in 60 mins)</td></tr>
            <tr class="ref-row-even"><td class="form-name">Hour Hand Speed</td><td class="form-val"><strong>0.5° / min</strong> (30° in 60 mins)</td></tr>
            <tr><td class="form-name">Relative Speed</td><td class="form-val"><strong>5.5° / min</strong> (or 11/2° per minute)</td></tr>
            <tr class="ref-row-even"><td class="form-name">1 Minute Space</td><td class="form-val">Minute hand gains 55 minutes spaces in 60 minutes</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">⏱️ Clock Hand Positions Frequency</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead><tr><th>Hand State</th><th>Angle</th><th>In 12 Hours</th><th>In 24 Hours</th><th>Special Exception</th></tr></thead>
          <tbody>
            <tr><td class="ref-n">Coincide (Overlap)</td><td>0°</td><td class="ref-sq">11 times</td><td class="ref-sq">22 times</td><td>Between 11 and 1, hands coincide only once at 12:00</td></tr>
            <tr class="ref-row-even"><td class="ref-n">Opposite (Straight Line)</td><td>180°</td><td class="ref-cube">11 times</td><td class="ref-cube">22 times</td><td>Between 5 and 7, hands are opposite only once at 6:00</td></tr>
            <tr><td class="ref-n">Right Angle (Perpendicular)</td><td>90°</td><td class="ref-result">22 times</td><td class="ref-result">44 times</td><td>Occurs twice every hour except 3:00 and 9:00</td></tr>
            <tr class="ref-row-even"><td class="ref-n">In Same Straight Line</td><td>0° or 180°</td><td class="ref-sqrt">22 times</td><td class="ref-sqrt">44 times</td><td>11 (overlap) + 11 (opposite) = 22 times per 12h</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">🪞 Mirror & Water Images of Clock</div>
      <div class="ref-tip-grid">
        <div class="ref-tip-card">
          <div class="ref-tip-title">🪞 Mirror Image (Vertical)</div>
          <div class="ref-tip-body">
            Subtract given time from <strong>11:60</strong> (or <strong>23:60</strong> for 24h format).<br>
            • Time 8:20 → 11:60 − 8:20 = <strong>3:40</strong><br>
            • Time 2:45 → 11:60 − 2:45 = <strong>9:15</strong>
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">🌊 Water Image (Horizontal)</div>
          <div class="ref-tip-body">
            Subtract given time from <strong>18:30</strong> (or <strong>17:90</strong> if minutes > 30).<br>
            • Time 4:10 → 18:30 − 4:10 = <strong>14:20 (2:20)</strong><br>
            • Time 9:45 → 17:90 − 9:45 = <strong>8:45</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">📅 Calendar Odd Days Reference</div>
      <div class="formula-table-wrap">
        <table class="formula-table">
          <tbody>
            <tr><td class="form-name">Ordinary Year (365 days)</td><td class="form-val">52 weeks + <strong>1 odd day</strong> (365 ÷ 7 = 52, rem 1)</td></tr>
            <tr class="ref-row-even"><td class="form-name">Leap Year (366 days)</td><td class="form-val">52 weeks + <strong>2 odd days</strong> (366 ÷ 7 = 52, rem 2)</td></tr>
            <tr><td class="form-name">100 Years Odd Days</td><td class="form-val"><strong>5 odd days</strong> (76 ordinary + 24 leap = 124 ÷ 7, rem 5)</td></tr>
            <tr class="ref-row-even"><td class="form-name">200 Years Odd Days</td><td class="form-val"><strong>3 odd days</strong> (5 × 2 = 10 ÷ 7, rem 3)</td></tr>
            <tr><td class="form-name">300 Years Odd Days</td><td class="form-val"><strong>1 odd day</strong> (5 × 3 = 15 ÷ 7, rem 1)</td></tr>
            <tr class="ref-row-even"><td class="form-name">400 Years (Century Leap)</td><td class="form-val"><strong>0 odd days</strong> (5 × 4 + 1 = 21 ÷ 7, rem 0)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">🔄 Calendar Repetition Cheat Sheet</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead><tr><th>Year Category</th><th>Rule to Add</th><th>Example</th><th>Repeats In</th></tr></thead>
          <tbody>
            <tr><td class="ref-n">Leap Year</td><td class="ref-sq">+28 Years</td><td>2024 (Leap)</td><td class="ref-result">2024 + 28 = <strong>2052</strong></td></tr>
            <tr class="ref-row-even"><td class="ref-n">Leap Year + 1</td><td class="ref-cube">+6 Years</td><td>2025 (2024+1)</td><td class="ref-result">2025 + 6 = <strong>2031</strong></td></tr>
            <tr><td class="ref-n">Leap Year + 2</td><td class="ref-sqrt">+11 Years</td><td>2026 (2024+2)</td><td class="ref-result">2026 + 11 = <strong>2037</strong></td></tr>
            <tr class="ref-row-even"><td class="ref-n">Leap Year + 3</td><td class="ref-sqrt">+11 Years</td><td>2027 (2024+3)</td><td class="ref-result">2027 + 11 = <strong>2038</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ── Reasoning: Directions & Shadows ──────────────────────────── */
function buildDirectionsPanel() {
  return `
    <div class="ref-info-bar">💡 Always draw standard North (Up), South (Down), East (Right), West (Left) axes!</div>

    <div class="formula-section">
      <div class="formula-section-title">🧭 8 Cardinal & Intercardinal Directions</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead><tr><th>Direction</th><th>Degree</th><th>Opposite</th><th>Right Turn (+90°)</th><th>Left Turn (−90°)</th></tr></thead>
          <tbody>
            <tr><td class="ref-n">North (N)</td><td>0° / 360°</td><td>South</td><td class="ref-sq">East</td><td class="ref-cube">West</td></tr>
            <tr class="ref-row-even"><td class="ref-n">North-East (NE)</td><td>45°</td><td>South-West</td><td class="ref-sq">South-East</td><td class="ref-cube">North-West</td></tr>
            <tr><td class="ref-n">East (E)</td><td>90°</td><td>West</td><td class="ref-sq">South</td><td class="ref-cube">North</td></tr>
            <tr class="ref-row-even"><td class="ref-n">South-East (SE)</td><td>135°</td><td>North-West</td><td class="ref-sq">South-West</td><td class="ref-cube">North-East</td></tr>
            <tr><td class="ref-n">South (S)</td><td>180°</td><td>North</td><td class="ref-sq">West</td><td class="ref-cube">East</td></tr>
            <tr class="ref-row-even"><td class="ref-n">South-West (SW)</td><td>225°</td><td>North-East</td><td class="ref-sq">North-West</td><td class="ref-cube">South-East</td></tr>
            <tr><td class="ref-n">West (W)</td><td>270°</td><td>East</td><td class="ref-sq">North</td><td class="ref-cube">South</td></tr>
            <tr class="ref-row-even"><td class="ref-n">North-West (NW)</td><td>315°</td><td>South-East</td><td class="ref-sq">North-East</td><td class="ref-cube">South-West</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">☀️ The Exam Shadow Rules (High Yield)</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead>
            <tr>
              <th>Time / Sun Position</th>
              <th>Shadow Falls Towards</th>
              <th>Person Facing</th>
              <th>Shadow Position Relative to Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4" class="ref-sq"><strong>Morning / Sunrise</strong><br>(Sun in EAST)</td>
              <td rowspan="4" class="ref-cube"><strong>WEST</strong></td>
              <td class="ref-n">North</td>
              <td><span class="badge-left">LEFT side</span></td>
            </tr>
            <tr>
              <td class="ref-n">South</td>
              <td><span class="badge-right">RIGHT side</span></td>
            </tr>
            <tr class="ref-row-even">
              <td class="ref-n">East</td>
              <td><span class="badge-neutral">BEHIND (Back)</span></td>
            </tr>
            <tr>
              <td class="ref-n">West</td>
              <td><span class="badge-neutral">IN FRONT</span></td>
            </tr>
            <tr class="ref-row-even">
              <td rowspan="4" class="ref-cube"><strong>Evening / Sunset</strong><br>(Sun in WEST)</td>
              <td rowspan="4" class="ref-sq"><strong>EAST</strong></td>
              <td class="ref-n">North</td>
              <td><span class="badge-right">RIGHT side</span></td>
            </tr>
            <tr class="ref-row-even">
              <td class="ref-n">South</td>
              <td><span class="badge-left">LEFT side</span></td>
            </tr>
            <tr>
              <td class="ref-n">East</td>
              <td><span class="badge-neutral">IN FRONT</span></td>
            </tr>
            <tr class="ref-row-even">
              <td class="ref-n">West</td>
              <td><span class="badge-neutral">BEHIND (Back)</span></td>
            </tr>
            <tr>
              <td class="ref-result"><strong>12:00 Noon</strong></td>
              <td colspan="3" class="ref-result"><strong>NO SHADOW</strong> (Sun is directly overhead at zenith)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">📐 Shortest Distance (Pythagoras Triples)</div>
      <div class="ref-info-bar">Distance = √(Δx² + Δy²). Memorize these triples to solve in 3 seconds!</div>
      <div class="ref-tip-grid">
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Primary Triples</div>
          <div class="ref-tip-body">
            • <strong>(3, 4, 5)</strong><br>
            • <strong>(5, 12, 13)</strong><br>
            • <strong>(8, 15, 17)</strong><br>
            • <strong>(7, 24, 25)</strong><br>
            • <strong>(9, 40, 41)</strong>
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Multiplied Triples</div>
          <div class="ref-tip-body">
            • (3,4,5) × 2 → <strong>(6, 8, 10)</strong><br>
            • (3,4,5) × 3 → <strong>(9, 12, 15)</strong><br>
            • (3,4,5) × 4 → <strong>(12, 16, 20)</strong><br>
            • (5,12,13) × 2 → <strong>(10, 24, 26)</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Reasoning: Blood Relations ───────────────────────────────── */
function buildRelationsPanel() {
  return `
    <div class="ref-info-bar">💡 Draw family tree diagrams using standard symbols. Never guess gender without proof!</div>

    <div class="formula-section">
      <div class="formula-section-title">🏷️ Standard Diagram Notations</div>
      <div class="symbol-grid">
        <div class="symbol-card">
          <div class="symbol-icon" style="color:#00d2ff;">[ + ]</div>
          <div><div class="symbol-label">Male (पुरुष)</div><div class="symbol-sub">Square or [+] notation</div></div>
        </div>
        <div class="symbol-card">
          <div class="symbol-icon" style="color:#ff6584;">[ − ]</div>
          <div><div class="symbol-label">Female (स्त्री)</div><div class="symbol-sub">Circle or [−] notation</div></div>
        </div>
        <div class="symbol-card">
          <div class="symbol-icon" style="color:var(--accent-gold);">⇔</div>
          <div><div class="symbol-label">Married Couple (विवाहित जोडी)</div><div class="symbol-sub">Double horizontal arrow or =</div></div>
        </div>
        <div class="symbol-card">
          <div class="symbol-icon" style="color:var(--accent-teal);">↔</div>
          <div><div class="symbol-label">Siblings (भाऊ / बहीण)</div><div class="symbol-sub">Single horizontal dashed line</div></div>
        </div>
        <div class="symbol-card">
          <div class="symbol-icon" style="color:var(--accent-primary);">↓</div>
          <div><div class="symbol-label">Generation Gap (पिढी)</div><div class="symbol-sub">Vertical arrow pointing down</div></div>
        </div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">👥 Maternal vs Paternal Relatives</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead><tr><th>Relation</th><th>Paternal (Father's Side)</th><th>Maternal (Mother's Side)</th></tr></thead>
          <tbody>
            <tr><td class="ref-n">Brother</td><td>Paternal Uncle (काका / चाचा)</td><td>Maternal Uncle (मामा)</td></tr>
            <tr class="ref-row-even"><td class="ref-n">Sister</td><td>Paternal Aunt (आत्या / बुआ)</td><td>Maternal Aunt (मावशी / मौसी)</td></tr>
            <tr><td class="ref-n">Father</td><td>Paternal Grandfather (आजोबा / दादा)</td><td>Maternal Grandfather (आजोबा / नाना)</td></tr>
            <tr class="ref-row-even"><td class="ref-n">Mother</td><td>Paternal Grandmother (आजी / दादी)</td><td>Maternal Grandmother (आजी / नानी)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">🔍 Ambiguous English Relation Terms Decoded</div>
      <div class="formula-table-wrap">
        <table class="formula-table">
          <tbody>
            <tr><td class="form-name">Brother-in-law</td><td class="form-val">1. Husband's brother (दीर), 2. Wife's brother (मेव्हणा/साला), 3. Sister's husband (मेहुणा/जीजा)</td></tr>
            <tr class="ref-row-even"><td class="form-name">Sister-in-law</td><td class="form-val">1. Husband's sister (नणंद), 2. Wife's sister (मेव्हणी/साली), 3. Brother's wife (वहिनी/भाभी)</td></tr>
            <tr><td class="form-name">Nephew / Niece</td><td class="form-val">Nephew = Brother's or Sister's son (भाचा / पुतण्या). Niece = Brother's or Sister's daughter (भाची / पुतणी)</td></tr>
            <tr class="ref-row-even"><td class="form-name">Cousin</td><td class="form-val">Uncle's or Aunt's child (चुलत/मामे/मावस भाऊ/बहीण). Note: "Cousin brother/sister" is incorrect in English grammar.</td></tr>
            <tr><td class="form-name">"Only son of my father"</td><td class="form-val">If speaker is Male → <strong>Myself</strong>. If speaker is Female → <strong>Her brother</strong>.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="ref-tip-card">
      <div class="ref-tip-title">⚡ 3-Step Strategy for "Pointing to a Person" Problems</div>
      <div class="ref-tip-body">
        <strong>1. Identify the reference:</strong> Start from the word <em>"My"</em> or <em>"Myself"</em>.<br>
        <strong>2. Decode backwards:</strong> "He is the son of [the only daughter of [my mother]]".<br>
        • "My mother's only daughter" = Myself (if female) or My sister.<br>
        • "Her son" = My nephew or My son.<br>
        <strong>3. Verify gender:</strong> Names (like 'Kiran' or 'Suman') do not indicate gender in exams unless explicitly stated!
      </div>
    </div>
  `;
}

/* ── Reasoning: Syllogism & Logic ─────────────────────────────── */
function buildSyllogismPanel() {
  return `
    <div class="ref-info-bar">💡 Syllogism tests logical necessity. Never use real-world facts — stick strictly to the statements!</div>

    <div class="formula-section">
      <div class="formula-section-title">📜 4 Classical Categorical Propositions</div>
      <div class="prop-card">
        <div class="prop-header"><span class="prop-type">Type A: Universal Affirmative</span><span class="prop-cat">All A are B</span></div>
        <div class="prop-stmt">"All Dogs are Animals"</div>
        <div class="prop-deduction">✓ <strong>Definite:</strong> Some A are B, Some B are A.<br>✗ <strong>Not definite:</strong> All B are A (Possible, but not certain).</div>
      </div>
      <div class="prop-card" style="border-left-color:#ff6584;">
        <div class="prop-header"><span class="prop-type" style="color:#ff6584;">Type E: Universal Negative</span><span class="prop-cat" style="color:#ff6584; background:rgba(255,101,132,0.15);">No A is B</span></div>
        <div class="prop-stmt">"No Apple is Mango"</div>
        <div class="prop-deduction">✓ <strong>Definite:</strong> No B is A, Some A are not B, Some B are not A. 100% Disjoint circles!</div>
      </div>
      <div class="prop-card" style="border-left-color:var(--accent-teal);">
        <div class="prop-header"><span class="prop-type" style="color:var(--accent-teal);">Type I: Particular Affirmative</span><span class="prop-cat" style="color:var(--accent-teal); background:rgba(0,210,255,0.15);">Some A are B</span></div>
        <div class="prop-stmt">"Some Pens are Books"</div>
        <div class="prop-deduction">✓ <strong>Definite:</strong> Some B are A.<br>✗ <strong>Not definite:</strong> All A are B, or Some A are not B (Both are possibilities).</div>
      </div>
      <div class="prop-card" style="border-left-color:var(--accent-gold);">
        <div class="prop-header"><span class="prop-type" style="color:var(--accent-gold);">Type O: Particular Negative</span><span class="prop-cat" style="color:var(--accent-gold); background:rgba(255,217,61,0.15);">Some A are not B</span></div>
        <div class="prop-stmt">"Some Cars are not Buses"</div>
        <div class="prop-deduction">✓ <strong>Definite:</strong> At least one portion of A is outside B.<br>✗ <strong>Not definite:</strong> "Some B are not A" cannot be deduced!</div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">⚖️ The 3 Golden "Either-Or" Rules</div>
      <div class="ref-tip-card" style="border-left:4px solid var(--accent-gold); margin-bottom:14px;">
        <div class="ref-tip-body">
          An <strong>"Either I or II follows"</strong> case requires ALL THREE conditions to hold true:<br>
          1. <strong>Both conclusions must be doubtful</strong> (cannot be definitely proved from statements).<br>
          2. <strong>Subject and Predicate must be identical</strong> in both conclusions.<br>
          3. <strong>Must form a valid complementary pair:</strong><br>
          &nbsp;&nbsp;• Pair 1: <strong>Some + No</strong> (e.g. Some A are B + No A is B)<br>
          &nbsp;&nbsp;• Pair 2: <strong>All + Some not</strong> (e.g. All A are B + Some A are not B)<br>
          &nbsp;&nbsp;⚠️ <em>Note:</em> <strong>All + No</strong> is NOT a valid complementary pair!
        </div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">👑 Mathematical Inequalities Priority (King-Minister Rule)</div>
      <div class="priority-flow">
        <div class="priority-step">
          <div class="priority-symbol">&gt; or &lt;</div>
          <div class="priority-name">Priority 1</div>
          <div class="priority-role">👑 King</div>
        </div>
        <div class="priority-arrow">➔</div>
        <div class="priority-step">
          <div class="priority-symbol">≥ or ≤</div>
          <div class="priority-name">Priority 2</div>
          <div class="priority-role">🛡️ Minister</div>
        </div>
        <div class="priority-arrow">➔</div>
        <div class="priority-step">
          <div class="priority-symbol">=</div>
          <div class="priority-name">Priority 3</div>
          <div class="priority-role">⚔️ Soldier</div>
        </div>
      </div>
      <div class="ref-tip-body" style="background:var(--glass); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
        • <strong>Same direction:</strong> If path from A to B has &gt; and ≥, the King wins → <strong>A &gt; B</strong> is definite.<br>
        • <strong>Equal (=):</strong> Carries forward the stronger symbol untouched.<br>
        • <strong>Opposite Signs Encounter:</strong> (e.g. A &gt; B &lt; C or A ≤ B ≥ C) → <strong>Blocked!</strong> No definite conclusion between A and C.
      </div>
    </div>
  `;
}

/* ── Reasoning: Order & Ranking ───────────────────────────────── */
function buildRankingPanel() {
  return `
    <div class="ref-info-bar">💡 In ranking problems, remember that one person counted from both ends is counted twice!</div>

    <div class="formula-section">
      <div class="formula-section-title">📊 Single Person Formulas</div>
      <div class="formula-table-wrap">
        <table class="formula-table">
          <tbody>
            <tr><td class="form-name">Total People (T)</td><td class="form-val"><strong>T = Left + Right − 1</strong> (or Top + Bottom − 1)</td></tr>
            <tr class="ref-row-even"><td class="form-name">Rank from Left (L)</td><td class="form-val"><strong>L = Total − Right + 1</strong></td></tr>
            <tr><td class="form-name">Rank from Right (R)</td><td class="form-val"><strong>R = Total − Left + 1</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">👥 Number of Persons Between Two People</div>
      <div class="ref-tip-grid">
        <div class="ref-tip-card">
          <div class="ref-tip-title">🟢 Non-Overlapping Case (T &gt; L₁ + R₂)</div>
          <div class="ref-tip-body">
            When Total is greater than sum of both ranks:<br>
            <div style="font-size:1rem; font-weight:800; color:var(--accent-primary); margin:6px 0;">
              Between = Total − (Rank₁ + Rank₂)
            </div>
            <em>Example:</em> In row of 50, A is 15th from Left, B is 20th from Right.<br>
            Between = 50 − (15 + 20) = <strong>15 people</strong>.
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">🔴 Overlapping Case (T &lt; L₁ + R₂)</div>
          <div class="ref-tip-body">
            When sum of ranks exceeds Total:<br>
            <div style="font-size:1rem; font-weight:800; color:#ff6584; margin:6px 0;">
              Between = (Rank₁ + Rank₂) − Total − 2
            </div>
            <em>Example:</em> In row of 40, A is 25th from Left, B is 22nd from Right.<br>
            Between = (25 + 22) − 40 − 2 = <strong>5 people</strong>.
          </div>
        </div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">🔄 Position Interchange Shortcut</div>
      <div class="ref-tip-card" style="border-left:4px solid var(--accent-gold);">
        <div class="ref-tip-body">
          When Person A and Person B swap their seats:<br>
          <div style="font-size:1rem; font-weight:800; color:var(--accent-gold); margin:6px 0;">
            Total = (New Rank of A) + (Old Rank of B) − 1
          </div>
          • <strong>Distance shifted:</strong> |New Rank of A − Old Rank of A|<br>
          • <strong>New Rank of B:</strong> Old Rank of B + Same distance shifted<br>
          • <strong>Persons between them:</strong> |New Rank of A − Old Rank of A| − 1
        </div>
      </div>
    </div>
  `;
}

/* ── Reasoning: Dice & Cubes ──────────────────────────────────── */
function buildDicePanel() {
  return `
    <div class="ref-info-bar">💡 <strong>Standard Dice:</strong> Sum of opposite faces = 7 (1↔6, 2↔5, 3↔4). <strong>General Dice:</strong> Sum of adjacent faces can be 7!</div>

    <div class="formula-section">
      <div class="formula-section-title">🎲 3 Golden Rules for Dice Problems</div>
      <div class="ref-tip-grid">
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Rule 1: One Common Face</div>
          <div class="ref-tip-body">
            If 2 positions of a dice have <strong>only 1 number in common</strong>:<br>
            Rotate clockwise starting from the common number for both dice positions.<br>
            • Dice 1: 3 ➔ 1 ➔ 2<br>
            • Dice 2: 3 ➔ 5 ➔ 4<br>
            Opposite pairs: <strong>1 ↔ 5</strong>, <strong>2 ↔ 4</strong>, and <strong>3 ↔ 6</strong> (remaining number).
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Rule 2: Two Common Faces</div>
          <div class="ref-tip-body">
            If 2 positions have <strong>two numbers in common</strong>:<br>
            The remaining distinct numbers on both dice are <strong>strictly opposite</strong> to each other!<br>
            • Example: If faces (2, 4, 1) and (2, 4, 6) are shown → <strong>1 is opposite to 6</strong>.
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Rule 3: Open Dice (Unfolded)</div>
          <div class="ref-tip-body">
            • <strong>Alternate squares rule:</strong> In any straight row or column of an unfolded dice, alternate faces are opposite to each other.<br>
            • Two opposite faces can NEVER touch each other (not even by corners)!<br>
            • The two "wings" (flaps on opposite sides) are opposite to each other.
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Painted Cube Cuts</div>
          <div class="ref-tip-body">
            A large cube of side N painted and cut into n × n × n small cubes:<br>
            • <strong>3 sides painted (Corners):</strong> Always <strong>8</strong><br>
            • <strong>2 sides painted (Edges):</strong> <strong>12(n − 2)</strong><br>
            • <strong>1 side painted (Faces):</strong> <strong>6(n − 2)²</strong><br>
            • <strong>0 sides painted (Inner):</strong> <strong>(n − 2)³</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Reasoning: Counting Figures ──────────────────────────────── */
function buildCountingFiguresPanel() {
  return `
    <div class="ref-info-bar">💡 Count complex geometrical figures in seconds with these standard formulas!</div>

    <div class="formula-section">
      <div class="formula-section-title">📐 Counting Triangles Fast Tricks</div>
      <div class="ref-tip-grid">
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Triangle with Vertical Lines</div>
          <div class="ref-tip-body">
            Divide the base into n smaller parts (1, 2, 3... n):<br>
            <div style="font-size:1.1rem; font-weight:800; color:var(--accent-primary); margin:6px 0;">
              Total Triangles = n(n + 1) / 2
            </div>
            • 3 parts → 1+2+3 = <strong>6 triangles</strong><br>
            • 4 parts → 1+2+3+4 = <strong>10 triangles</strong><br>
            • If horizontal line divides into H tiers → Multiply by H!
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Triangles in a Square / Rectangle</div>
          <div class="ref-tip-body">
            When diagonals intersect inside a square dividing it into n parts:<br>
            <div style="font-size:1.1rem; font-weight:800; color:var(--accent-gold); margin:6px 0;">
              Total Triangles = 2 × n
            </div>
            • Square divided into 8 parts → 2 × 8 = <strong>16 triangles</strong>.<br>
            • When two such squares join → add <strong>2 extra large triangles</strong> formed at joint!
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Counting Squares in an m × n Grid</div>
          <div class="ref-tip-body">
            Sum of products of dimensions:<br>
            <div style="font-size:1rem; font-weight:800; color:var(--accent-teal); margin:6px 0;">
              Total = (m × n) + (m−1)(n−1) + (m−2)(n−2) + ...
            </div>
            • Example (3×3 square): 3×3 + 2×2 + 1×1 = 9+4+1 = <strong>14 squares</strong>.<br>
            • Example (4×3 grid): 4×3 + 3×2 + 2×1 = 12+6+2 = <strong>20 squares</strong>.
          </div>
        </div>
        <div class="ref-tip-card">
          <div class="ref-tip-title">⚡ Counting Rectangles in an m × n Grid</div>
          <div class="ref-tip-body">
            Multiply the sums of row and column numbers:<br>
            <div style="font-size:1rem; font-weight:800; color:#ff6584; margin:6px 0;">
              Total = [m(m+1)/2] × [n(n+1)/2]
            </div>
            • Example (3×3 grid): [3×4/2] × [3×4/2] = 6 × 6 = <strong>36 rectangles</strong>.<br>
            • <em>Only rectangles (excluding squares):</em> 36 − 14 = 22.
          </div>
        </div>
      </div>
    </div>

    <div class="formula-section">
      <div class="formula-section-title">🪞 Identical Mirror & Water Images Cheat Sheet</div>
      <div class="ref-table-wrap">
        <table class="ref-table">
          <thead><tr><th>Image Type</th><th>Letters Remaining Identical</th><th>Count</th></tr></thead>
          <tbody>
            <tr><td class="ref-sq">Identical in Mirror (Vertical)</td><td class="ref-n">A, H, I, M, O, T, U, V, W, X, Y</td><td class="ref-result"><strong>11 Letters</strong></td></tr>
            <tr class="ref-row-even"><td class="ref-cube">Identical in Water (Horizontal)</td><td class="ref-n">B, C, D, E, H, I, K, O, X</td><td class="ref-result"><strong>9 Letters</strong></td></tr>
            <tr><td class="ref-sqrt">Identical in BOTH Mirror & Water</td><td class="ref-n">H, I, O, X</td><td class="ref-result"><strong>4 Letters</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================
// MPSC / TALATHI GENERAL STUDIES BOOSTER
// ==========================================
let mpscActiveMode = 'oneliners';
let mpscActiveFilter = 'all';
let mpscSearchQuery = '';
let mpscCardIndex = 0;
let mpscCardFlipped = false;

function renderMpscGK() {
  const page = document.getElementById('page-mpsc-gk');
  if (!page) return;

  page.innerHTML = `
    <div class="mpsc-header">
      <div class="mpsc-header-badge">🎯 MPSC Prelims & Talathi Exam Booster</div>
      <div class="page-title">🏛️ General Studies Revision</div>
      <div class="page-desc">High-Yield One-Liners, Mnemonic Short Tricks & 3D Flashcards for Maharashtra Exams</div>
    </div>

    <!-- Mode Selector: One-Liners | Short Tricks | Flashcards -->
    <div class="mpsc-mode-tabs">
      <button class="mpsc-mode-btn ${mpscActiveMode === 'oneliners' ? 'active' : ''}" onclick="switchMpscMode('oneliners')">
        <span>⚡</span> <span>One-Liners</span>
      </button>
      <button class="mpsc-mode-btn ${mpscActiveMode === 'tricks' ? 'active' : ''}" onclick="switchMpscMode('tricks')">
        <span>💡</span> <span>Short Tricks</span>
      </button>
      <button class="mpsc-mode-btn ${mpscActiveMode === 'flashcards' ? 'active' : ''}" onclick="switchMpscMode('flashcards')">
        <span>🎴</span> <span>3D Flashcards</span>
      </button>
    </div>

    <!-- Subject Filters -->
    <div class="mpsc-subject-filters">
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'all' ? 'active' : ''}" onclick="filterMpscSubject('all')">🌟 All</button>
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'history' ? 'active' : ''}" onclick="filterMpscSubject('history')">📜 History</button>
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'geography' ? 'active' : ''}" onclick="filterMpscSubject('geography')">🗺️ Geography</button>
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'economy' ? 'active' : ''}" onclick="filterMpscSubject('economy')">💰 Economy</button>
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'polity' ? 'active' : ''}" onclick="filterMpscSubject('polity')">⚖️ Polity</button>
      <button class="mpsc-sub-pill ${mpscActiveFilter === 'science' ? 'active' : ''}" onclick="filterMpscSubject('science')">🔬 Science</button>
    </div>

    <!-- Live Search (visible in oneliners mode) -->
    <div class="mpsc-search-wrap" id="mpsc-search-wrap" style="${mpscActiveMode === 'oneliners' ? 'display:block;' : 'display:none;'}">
      <input type="text" class="mpsc-search-input" id="mpsc-search-input" placeholder="🔍 Search exam facts (e.g. Satyashodhak, Kalsubai, GST, Article 32)..." value="${mpscSearchQuery}" oninput="handleMpscSearch(this.value)">
    </div>

    <!-- Active View Container -->
    <div id="mpsc-content-area" class="mpsc-content-area"></div>
  `;

  renderMpscContent();
}

function switchMpscMode(mode) {
  mpscActiveMode = mode;
  mpscCardIndex = 0;
  mpscCardFlipped = false;
  document.querySelectorAll('.mpsc-mode-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.mpsc-mode-btn[onclick*="${mode}"]`);
  if (btn) btn.classList.add('active');

  const searchWrap = document.getElementById('mpsc-search-wrap');
  if (searchWrap) {
    searchWrap.style.display = mode === 'oneliners' ? 'block' : 'none';
  }
  renderMpscContent();
}
window.switchMpscMode = switchMpscMode;

function filterMpscSubject(subj) {
  mpscActiveFilter = subj;
  mpscCardIndex = 0;
  mpscCardFlipped = false;
  document.querySelectorAll('.mpsc-sub-pill').forEach(p => p.classList.remove('active'));
  const pill = document.querySelector(`.mpsc-sub-pill[onclick*="${subj}"]`);
  if (pill) pill.classList.add('active');
  renderMpscContent();
}
window.filterMpscSubject = filterMpscSubject;

function handleMpscSearch(val) {
  mpscSearchQuery = val.trim().toLowerCase();
  renderMpscContent();
}
window.handleMpscSearch = handleMpscSearch;

function renderMpscContent() {
  const container = document.getElementById('mpsc-content-area');
  if (!container || !window.MPSC_GS) return;

  if (mpscActiveMode === 'oneliners') {
    renderGSOneLiners(container);
  } else if (mpscActiveMode === 'tricks') {
    renderGSTricks(container);
  } else if (mpscActiveMode === 'flashcards') {
    renderGSFlashcards(container);
  }
}

function renderGSOneLiners(container) {
  let list = window.MPSC_GS.oneLiners || [];
  if (mpscActiveFilter !== 'all') {
    list = list.filter(item => item.subject === mpscActiveFilter);
  }
  if (mpscSearchQuery) {
    list = list.filter(item =>
      item.mr.toLowerCase().includes(mpscSearchQuery) ||
      item.en.toLowerCase().includes(mpscSearchQuery) ||
      item.tag.toLowerCase().includes(mpscSearchQuery) ||
      (item.highlight && item.highlight.toLowerCase().includes(mpscSearchQuery))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">🔍 No exam one-liners found matching "${mpscSearchQuery}". Try another keyword!</div>`;
    return;
  }

  const icons = { history: '📜', geography: '🗺️', economy: '💰', polity: '⚖️', science: '🔬' };

  container.innerHTML = `
    <div class="mpsc-count-badge">Showing ${list.length} Exam High-Yield Facts</div>
    <div class="oneliners-grid">
      ${list.map(item => `
        <div class="oneliner-card">
          <div class="oneliner-header">
            <span class="oneliner-sub-tag sub-${item.subject}">${icons[item.subject] || '📌'} ${item.tag}</span>
            <span class="oneliner-exam-tag">🎯 ${item.examYear || 'Exam Favorite'}</span>
          </div>
          <div class="oneliner-mr">${item.mr}</div>
          <div class="oneliner-en">${item.en}</div>
          ${item.highlight ? `<div class="oneliner-highlight">⚡ <strong>Key Recall:</strong> ${item.highlight}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderGSTricks(container) {
  let list = window.MPSC_GS.shortTricks || [];
  if (mpscActiveFilter !== 'all') {
    list = list.filter(item => item.subject === mpscActiveFilter);
  }

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">No short tricks in this category yet. Select 'All' to see all mnemonics!</div>`;
    return;
  }

  container.innerHTML = `
    <div class="mpsc-count-badge">Showing ${list.length} Memory Mnemonics & Tricks</div>
    <div class="tricks-grid">
      ${list.map(t => `
        <div class="gs-trick-card">
          <div class="gs-trick-header">
            <div class="gs-trick-title">${t.title}</div>
            <div class="gs-trick-title-en">${t.titleEn}</div>
          </div>
          <div class="gs-trick-banner">
            <span class="trick-key-label">⚡ Magic Trick:</span>
            <span class="trick-key-val">${t.trick}</span>
          </div>
          <div class="gs-trick-body">${t.explanation}</div>
          ${t.examNote ? `<div class="gs-trick-note">💡 <strong>परीक्षेसाठी टीप:</strong> ${t.examNote}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderGSFlashcards(container) {
  let list = window.MPSC_GS.flashcards || [];
  if (mpscActiveFilter !== 'all') {
    list = list.filter(item => item.subject === mpscActiveFilter);
  }

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">No flashcards found for this subject.</div>`;
    return;
  }

  if (mpscCardIndex >= list.length) mpscCardIndex = 0;
  const card = list[mpscCardIndex];
  const icons = { history: '📜', geography: '🗺️', economy: '💰', polity: '⚖️', science: '🔬' };

  container.innerHTML = `
    <div class="mpsc-fc-wrap">
      <div class="mpsc-fc-header">
        <span class="mpsc-fc-badge">${icons[card.subject] || '📌'} ${card.subject.toUpperCase()}</span>
        <span class="mpsc-fc-counter">Card ${mpscCardIndex + 1} of ${list.length}</span>
      </div>

      <div class="mpsc-fc-card ${mpscCardFlipped ? 'flipped' : ''}" onclick="flipMpscCard()">
        <div class="mpsc-fc-inner">
          <!-- Front -->
          <div class="mpsc-fc-front">
            <div class="mpsc-fc-side-label">❓ QUESTION (प्रश्न)</div>
            <div class="mpsc-fc-q-mr">${card.q}</div>
            <div class="mpsc-fc-q-en">${card.qEn}</div>
            <div class="mpsc-fc-hint">👆 Tap to Reveal Answer (उत्तर पाहण्यासाठी टॅप करा)</div>
          </div>
          <!-- Back -->
          <div class="mpsc-fc-back">
            <div class="mpsc-fc-side-label">✓ ANSWER (उत्तर)</div>
            <div class="mpsc-fc-a-mr">${card.a}</div>
            <div class="mpsc-fc-a-en">${card.aEn}</div>
            ${card.tip ? `<div class="mpsc-fc-tip">💡 <strong>Exam Note:</strong> ${card.tip}</div>` : ''}
            <div class="mpsc-fc-hint">👆 Tap to Flip back</div>
          </div>
        </div>
      </div>

      <div class="mpsc-fc-controls">
        <button class="fc-btn" onclick="prevMpscCard()"><span class="fc-btn-icon">◀</span> Previous</button>
        <button class="fc-btn fc-btn-flip" onclick="flipMpscCard()"><span class="fc-btn-icon">🔄</span> Flip</button>
        <button class="fc-btn fc-btn-shuffle" onclick="shuffleMpscCards()"><span class="fc-btn-icon">🔀</span> Shuffle</button>
        <button class="fc-btn" onclick="nextMpscCard()">Next <span class="fc-btn-icon">▶</span></button>
      </div>
    </div>
  `;
}

function flipMpscCard() {
  mpscCardFlipped = !mpscCardFlipped;
  const card = document.querySelector('.mpsc-fc-card');
  if (card) card.classList.toggle('flipped', mpscCardFlipped);
}
window.flipMpscCard = flipMpscCard;

function nextMpscCard() {
  let list = window.MPSC_GS.flashcards || [];
  if (mpscActiveFilter !== 'all') list = list.filter(item => item.subject === mpscActiveFilter);
  mpscCardFlipped = false;
  mpscCardIndex = (mpscCardIndex + 1) % list.length;
  renderMpscContent();
}
window.nextMpscCard = nextMpscCard;

function prevMpscCard() {
  let list = window.MPSC_GS.flashcards || [];
  if (mpscActiveFilter !== 'all') list = list.filter(item => item.subject === mpscActiveFilter);
  mpscCardFlipped = false;
  mpscCardIndex = (mpscCardIndex - 1 + list.length) % list.length;
  renderMpscContent();
}
window.prevMpscCard = prevMpscCard;

function shuffleMpscCards() {
  if (window.MPSC_GS && window.MPSC_GS.flashcards) {
    window.MPSC_GS.flashcards.sort(() => Math.random() - 0.5);
  }
  mpscCardIndex = 0;
  mpscCardFlipped = false;
  showToast('🔀 Flashcards shuffled!', 'info');
  renderMpscContent();
}
window.shuffleMpscCards = shuffleMpscCards;
window.renderMpscGK = renderMpscGK;
window.buildDicePanel = buildDicePanel;
window.buildCountingFiguresPanel = buildCountingFiguresPanel;

// ==========================================
// SERVICE WORKER REGISTRATION
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('SW registered'))
      .catch(err => console.warn('SW registration failed:', err));
  });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Set lang state on body
  document.body.classList.toggle('lang-mr', STATE.lang === 'mr');

  // Nav item clicks
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', () => {
      navigate(item.dataset.page);
    });
  });

  // Lang toggle
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = STATE.lang === 'mr' ? 'मराठी ✓' : 'Marathi';
    langBtn.addEventListener('click', toggleLang);
  }

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTopicCards(tab.dataset.filter, STATE.lang);
    });
  });

  // Initial render
  navigate('home');
});

// Make functions global for onclick
window.switchRefSubject = switchRefSubject;
window.switchRefTab = switchRefTab;
window.switchTab = switchTab;
window.revealAnswer = revealAnswer;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.prevCard = prevCard;
window.shuffleCards = shuffleCards;
window.navigate = navigate;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.initQuiz = initQuiz;
window.installApp = installApp;
window.dismissInstall = dismissInstall;
window.APP_DATA = APP_DATA;
window.handleSearch = handleSearch;
window.renderMpscGK = renderMpscGK;
