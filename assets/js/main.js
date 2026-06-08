/**
 * 游祥云个人网站 - 主交互脚本
 * 包含：AI对话、粒子网络、数字滚动、打字机、鼠标拖尾、视差等
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===================== 1. 3D粒子网络背景 ====================
  const hero = document.getElementById('hero');
  if (hero) {
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;';
    hero.querySelector('.hero-bg').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    let animFrame;

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // 鼠标交互 - 粒子避开鼠标
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.x += dx * 0.02;
          this.y += dy * 0.02;
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // 创建粒子
    const count = Math.min(80, Math.floor(canvas.width * canvas.height / 12000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    // 鼠标跟踪
    document.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 画连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => { p.update(); p.draw(); });
      animFrame = requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ===================== 2. 鼠标拖尾流光效果 ====================
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  cursorGlow.style.cssText = 'position:fixed;width:300px;height:300px;border-radius:50%;pointer-events:none;z-index:9999;background:radial-gradient(circle,rgba(0,212,255,0.06),transparent 70%);transform:translate(-50%,-50%);transition:all 0.1s ease;';
  document.body.appendChild(cursorGlow);

  document.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // ===================== 3. AI 对话助手悬浮球 ====================
  const aiChatHTML = `
    <div class="ai-assistant" id="aiAssistant">
      <div class="ai-fab" id="aiFab">
        <svg class="ai-fab-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <svg class="ai-fab-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </div>
      <div class="ai-chat-box" id="aiChatBox">
        <div class="ai-chat-header">
          <span class="ai-chat-title">🤖 AI 助手</span>
          <span class="ai-chat-status">在线</span>
        </div>
        <div class="ai-chat-messages" id="aiMessages">
          <div class="ai-msg ai-msg-bot">
            <span>你好！我是游祥云的 AI 助手，想了解他的哪些信息？我可以告诉你关于他的工作经历、核心能力、项目成绩等任何内容 🚀</span>
          </div>
        </div>
        <div class="ai-chat-input">
          <input type="text" id="aiInput" placeholder="输入问题..." autocomplete="off">
          <button id="aiSendBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', aiChatHTML);

  // AI 问答知识库
  const aiKnowledge = {
    '你好': '你好！我是游祥云的 AI 助手，很高兴为你服务！你可以问我关于他的工作经历、核心能力、项目成绩等任何问题。',
    '你是谁': '我是游祥云个人网站的 AI 智能助手，可以帮助招聘者快速了解他的专业背景和能力。',
    '工作经历': '游祥云拥有 9 年供应链采购经验，曾任职于居然设计家（BD-商务拓展）、爱空间科技（产品采购运营主管）、小熊快跑（采购经理）、曲美家居（采购开发）等知名企业。',
    '核心能力': '他的核心能力包括：供应链体系搭建（0→1）、数据分析与市场研判、采购策略与成本控制、供应商开发与管理等。',
    '项目成绩': '他曾在半年内引入 45 家品牌完成平台搭建，通过供应链优化降低采购成本 20-40%，管理过年采购额 2 亿元的品类。',
    '教育背景': '黑龙江建筑职业技术学院，工程造价（土木装饰方向）专业，持有 IPMP 国际项目管理证书。',
    '联系方式': '你可以通过邮箱 1010215355@qq.com 或电话 15710033789 联系他。也可以在本站留言板给他留言。',
    'AI': '游祥云虽然专注于供应链领域，但对 AI 技术在企业落地的应用有深刻理解和实践经验，曾主导 AI 设计工具、3D 智能导购等 AI 项目的业务落地。',
    '默认': '这个问题我需要想想... 建议你可以问：工作经历、核心能力、项目成绩、教育背景、联系方式等。'
  };

  const aiFab = document.getElementById('aiFab');
  const aiChatBox = document.getElementById('aiChatBox');
  const aiMessages = document.getElementById('aiMessages');
  const aiInput = document.getElementById('aiInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  let chatOpen = false;

  aiFab.addEventListener('click', () => {
    chatOpen = !chatOpen;
    aiChatBox.classList.toggle('active', chatOpen);
    aiFab.querySelector('.ai-fab-icon').style.display = chatOpen ? 'none' : 'block';
    aiFab.querySelector('.ai-fab-close').style.display = chatOpen ? 'block' : 'none';
    if (chatOpen) {
      setTimeout(() => aiInput.focus(), 300);
    }
  });

  function addMessage(text, isUser = false) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-bot'}`;
    msg.innerHTML = `<span>${text}</span>`;
    aiMessages.appendChild(msg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function getAIResponse(question) {
    const q = question.trim().toLowerCase();
    
    // 关键词匹配
    if (q.includes('hello') || q.includes('hi') || q.includes('你好') || q.includes('您好')) return aiKnowledge['你好'];
    if (q.includes('你是谁') || q.includes('你叫什么') || q.includes('what')) return aiKnowledge['你是谁'];
    if (q.includes('经历') || q.includes('经验') || q.includes('工作') || q.includes('exp') || q.includes('career')) return aiKnowledge['工作经历'];
    if (q.includes('能力') || q.includes('技能') || q.includes('skill') || q.includes('擅长')) return aiKnowledge['核心能力'];
    if (q.includes('成绩') || q.includes('项目') || q.includes('案例') || q.includes('achievement') || q.includes('case')) return aiKnowledge['项目成绩'];
    if (q.includes('教育') || q.includes('学历') || q.includes('学校') || q.includes('education') || q.includes('college')) return aiKnowledge['教育背景'];
    if (q.includes('联系') || q.includes('电话') || q.includes('邮箱') || q.includes('contact') || q.includes('email')) return aiKnowledge['联系方式'];
    if (q.includes('ai') || q.includes('人工智能') || q.includes('数据') || q.includes('data')) return aiKnowledge['AI'];
    
    return aiKnowledge['默认'];
  }

  function sendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;
    
    addMessage(text, true);
    aiInput.value = '';
    
    // 打字机回复
    const response = getAIResponse(text);
    setTimeout(() => {
      const msg = document.createElement('div');
      msg.className = 'ai-msg ai-msg-bot ai-msg-typing';
      msg.innerHTML = `<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>`;
      aiMessages.appendChild(msg);
      aiMessages.scrollTop = aiMessages.scrollHeight;
      
      setTimeout(() => {
        msg.remove();
        addMessage(response);
      }, 800 + Math.random() * 600);
    }, 300);
  }

  aiSendBtn.addEventListener('click', sendMessage);
  aiInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });



  // ===================== 5. 数字滚动计数 ====================
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString();
    }, 20);
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statObserver.observe(el));

  // ===================== 7. 卡片 3D 悬浮倾斜效果 ====================
  document.querySelectorAll('.case-card, .service-card, .about-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ===================== 8. 滚动进度指示器 ====================
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:var(--gradient-1);z-index:1001;transition:width 0.1s;';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (winScroll / height) * 100 + '%';
  });

  // ===================== 9. 时间线进入动画 ====================
  const timelineItems = document.querySelectorAll('.timeline-item');
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('timeline-visible');
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  timelineItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    tlObserver.observe(item);
  });

  // 添加可见类
  document.addEventListener('timeline-visible', () => {});

  // 用 MutationObserver 监听类变化
  const tlObserver2 = new MutationObserver((mutations) => {
    mutations.forEach(m => {
      if (m.target.classList.contains('timeline-visible')) {
        m.target.style.opacity = '1';
        m.target.style.transform = 'translateX(0)';
      }
    });
  });
  
  // 监听每个 timeline-item
  document.querySelectorAll('.timeline-item').forEach(item => {
    tlObserver2.observe(item, { attributes: true, attributeFilter: ['class'] });
  });

  // ===================== 10. 现有功能的整合 ====================
  // 主题切换
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    function updateThemeIcons(theme) {
      const moon = themeToggle.querySelector('.theme-icon-moon');
      const sun = themeToggle.querySelector('.theme-icon-sun');
      if (moon && sun) {
        moon.style.display = theme === 'dark' ? 'block' : 'none';
        sun.style.display = theme === 'dark' ? 'none' : 'block';
      }
      themeToggle.title = theme === 'dark' ? '切换亮色模式' : '切换暗色模式';
    }

    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcons(newTheme);
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcons(savedTheme);
    }
  }

  // 语言切换
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);

    langToggle.addEventListener('click', function() {
      const newLang = getLang() === 'zh' ? 'en' : 'zh';
      setLang(newLang);
      localStorage.setItem('lang', newLang);
    });
  }

  // 移动端菜单
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  // 联系表单
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('.btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = getLang() === 'zh' ? '发送中...' : 'Sending...';
      submitBtn.disabled = true;
      
      const oldFeedback = this.querySelector('.form-feedback');
      if (oldFeedback) oldFeedback.remove();

      try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const feedback = document.createElement('div');
          feedback.className = 'form-feedback success';
          feedback.textContent = i18n[getLang()]['form.success'];
          this.appendChild(feedback);
          this.reset();
        } else {
          throw new Error('Formspree error');
        }
      } catch (err) {
        const feedback = document.createElement('div');
        feedback.className = 'form-feedback error';
        feedback.textContent = i18n[getLang()]['form.error'];
        this.appendChild(feedback);
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }



  console.log('🚀 游祥云个人网站 - 交互已全部加载');
});
