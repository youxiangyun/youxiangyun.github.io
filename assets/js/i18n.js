/**
 * 国际化翻译文件
 * 支持中文（zh）和英文（en）
 */
const i18n = {
  zh: {
    'nav.logo': '游祥云',
    'nav.about': '自我介绍',
    'nav.skills': '核心能力',
    'nav.experience': '工作经历',
    'nav.cases': '落地案例',
    'nav.services': '服务模式',
    'nav.contact': '联系方式',
    'hero.tagline': '游祥云',
    'hero.title': '供应链管理运营专家',
    'hero.desc': '九年供应链管理运营经验，帮助企业降本增效、构建高效运营体系',
    'hero.btnContact': '联系我',
    'hero.btnResume': '下载简历',
    'hero.scroll': '向下滚动',
    'about.title': '自我介绍',
    'about.who': '个人简介',
    'about.desc': '从事九年供应链采购工作，拥有丰富的供应商管理、采购策略与产品开发经验。善于供应商开发与维护，具备全面的采购控制能力，能够独立进行采购活动并推动供应链体系优化。',
    'about.mission': '职业使命',
    'about.missionDesc': '用专业的供应链管理能力，帮助企业构建高效、稳定、低成本的供应体系，让采购成为企业的核心竞争力。',
    'about.value': '核心价值',
    'about.valueDesc': '供应链采购中最懂产品的、最懂运营的、最懂AI落地的复合型人才，致力于用技术与专业驱动企业增长。',
    'about.stat1': '行业经验',
    'about.stat2': '采购规模',
    'about.stat3': '合作品牌',
    'skills.title': '核心能力',
    'skills.pm': '核心能力',
    'skills.pm1': '供应链体系搭建（0→1）',
    'skills.pm2': '数据分析与市场研判',
    'skills.pm3': '采购策略与成本控制',
    'skills.pm4': '供应商开发与管理',
    'skills.trainer': '综合能力',
    'skills.tr1': '商务拓展与谈判',
    'skills.tr2': '团队管理与KPI拆解',
    'skills.tr3': '产品全生命周期管理',
    'skills.tr4': '跨部门协调与项目落地',
    'exp.title': '工作经历',
    'exp.date1': '2025.02 - 2025.09',
    'exp.company1': '居然设计家（北京）科技有限公司',
    'exp.role1': 'BD-商务拓展（部门副职）',
    'exp.detail1': '<li>供应链团队管理：主导部门经营管理会议策划与撰写，统筹各品类招商规划与执行，拆解团队KPI并制定可落地业务方案</li><li>平台招商：半年内引入45家行业领先品牌，完成平台品牌体系从0到1的搭建</li><li>核心业务支持：支持AI设计工具、跨境电商、3D智能导购三大业务线，提供品牌资源覆盖与商品模型支持</li><li>3D智能导购落地：带领团队对标杆门店落地实施，培训赋能一线导购员，提升零售转化</li>',
    'exp.date2': '2023.06 - 2024.09',
    'exp.company2': '爱空间科技（北京）有限公司',
    'exp.role2': '产品采购运营主管',
    'exp.detail2': '<li>采购开发：负责华北四城配套产品的开发上线，落地断桥铝窗、防盗门、窗帘、净水、空调五类产品</li><li>产品落地：引入新品类合作，输出培训资料、产品手册、营销样品，对设计师和销售团队进行培训</li><li>区域采购：华北四城材料采销，协调产品售中、售后问题，保证业务正常开展</li>',
    'exp.date3': '2022.08 - 2023.06',
    'exp.company3': '北京小熊快跑传媒有限公司',
    'exp.role3': '采购经理',
    'exp.detail3': '<li>MCN机构选品：负责泛生活品类选品（家具、家居、家纺、家清），制定选品策略与投放ROI策略</li><li>全年选品规划：根据KOL IP特点，规划全年产品开发计划，完成销售及毛利目标</li><li>引入多个新品类，全年GMV上涨20%，产品毛利从15%提升至40%</li>',
    'exp.date4': '2022.04 - 2022.08',
    'exp.company4': '北京水木优品装饰有限公司',
    'exp.role4': '供应链经理',
    'exp.detail4': '<li>供应链体系搭建：搭建卖场软装产品与供应链产品体系，建立产品评审、质量标准与零售运营工具</li><li>通过开源供应商与产品溯源，降低采购成本20%，同时提升产品品质达到国内一线品牌水准</li>',
    'exp.date5': '2020.09 - 2022.04',
    'exp.company5': '曲美家居集团股份有限公司',
    'exp.role5': '采购开发',
    'exp.detail5': '<li>采购开发：制定采购策略，分析市场行情，主导工厂寻源、选品、管理、考核全流程</li><li>商品运营：负责产品全生命周期管理，年采购额达2亿元，单品月销售3万+</li><li>品质把控：建立产品品质监控体系，从生产到入库全流程把控</li>',
    'exp.date6': '2018.05 - 2020.08',
    'exp.company6': '艺格工装（北京）科技有限公司',
    'exp.role6': '采购经理',
    'exp.detail6': '<li>产品开发：基于市场趋势开发爆款产品，完成休闲家具软装库从0到1搭建，覆盖沙发、桌椅、地毯等品类</li><li>成本管理：核算产品BOM，阶段性争取产品利润最大化</li><li>创新提出询价字典概念并落地，显著提升中后台工作效率</li>',
    'exp.date7': '2016.07 - 2018.05',
    'exp.company7': '北京苹果装饰设计有限公司',
    'exp.role7': '采购专员',
    'exp.detail7': '<li>精算与成本：根据图纸精算量核算成本，控制项目增项成本</li><li>项目跟单：协调主材进场时间，保证工程按期完成，处理售后问题</li>',
    'cases.title': '工作成绩',
    'cases.c1Title': '平台品牌体系 0→1',
    'cases.c1Desc': '半年内引入45家行业领先品牌，完成平台品牌体系从0到1的搭建，核心目标品类100%覆盖。支持AI设计工具、3D智能导购等AI项目落地，品牌上传SKU 10万+，实现AI生图基本能力。',
    'cases.c1Metric': '引入45+品牌 · 10万+SKU',
    'cases.c2Title': '3D智能导购落地',
    'cases.c2Desc': '推动3D智能导购在终端门店落地，树立慕斯、芝华仕、顾家、方太等品牌标杆，帮助品牌提升销售转化。',
    'cases.c2Metric': '覆盖10+标杆品牌 · AI生效果图',
    'cases.c3Title': '供应链降本增效',
    'cases.c3Desc': '通过开源供应商与产品溯源调整供应链采购逻辑，降低采购成本20-40%，同时提升产品品质达到一线品牌标准。',
    'cases.c3Metric': '成本降低20-40%',
    'services.title': '服务模式',
    'services.s1Title': '供应链体系搭建',
    'services.s1Desc': '从0到1搭建企业供应链体系，包括供应商开发、品类规划、采购策略制定',
    'services.s2Title': '产品运营',
    'services.s2Desc': '通过产品全生命周期管理、品类规划与市场分析，持续优化产品结构与运营效率',
    'services.s3Title': '团队管理与培训',
    'services.s3Desc': '供应链团队搭建与管理，采购流程培训，帮助团队快速提升专业能力',
    'edu.title': '教育背景',
    'edu.major': '工程造价（土木装饰方向）',
    'edu.date': '2012.09 - 2015.06',
    'edu.cert': 'IPMP 国际项目管理证书',
    'contact.title': '联系方式',
    'contact.formName': '您的姓名',
    'contact.formEmail': '您的邮箱',
    'contact.formMsg': '请输入留言内容...',
    'contact.submit': '发送留言',
    'form.success': '留言发送成功！我会尽快回复您。',
    'form.error': '发送失败，请稍后重试或直接发送邮件。',
  },
  en: {
    'nav.logo': 'Xiangyun You',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.cases': 'Achievements',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.tagline': '游祥云',
    'hero.title': 'Supply Chain & Operations Expert',
    'hero.desc': '9 years in supply chain & operations, driving cost savings and building efficient operations systems',
    'hero.btnContact': 'Contact Me',
    'hero.btnResume': 'Download CV',
    'hero.scroll': 'Scroll',
    'about.title': 'About Me',
    'about.who': 'Profile',
    'about.desc': '9 years of experience in supply chain and procurement, with expertise in supplier management, procurement strategy, and product development. Skilled in building and optimizing supply chain systems. Good at communication, negotiation, and problem-solving.',
    'about.mission': 'Mission',
    'about.missionDesc': 'To help enterprises build efficient, stable, and cost-effective supply systems where procurement becomes a core competitive advantage.',
    'about.value': 'Value',
    'about.valueDesc': 'A复合型 talent who knows products, operations, and AI implementation best in supply chain procurement, driving enterprise growth with technology and expertise.',
    'about.stat1': 'Years Exp',
    'about.stat2': 'Procurement',
    'about.stat3': 'Brands',
    'skills.title': 'Core Skills',
    'skills.pm': 'Core Competencies',
    'skills.pm1': 'Supply Chain Setup (0→1)',
    'skills.pm2': 'Data Analysis & Market Research',
    'skills.pm3': 'Procurement Strategy & Cost Control',
    'skills.pm4': 'Supplier Development & Management',
    'skills.trainer': 'Comprehensive Skills',
    'skills.tr1': 'Business Development & Negotiation',
    'skills.tr2': 'Team Management & KPI Planning',
    'skills.tr3': 'Product Lifecycle Management',
    'skills.tr4': 'Cross-department Coordination',
    'exp.title': 'Experience',
    'exp.date1': '2025.02 - 2025.09',
    'exp.company1': 'EasyHome Design (Beijing) Tech',
    'exp.role1': 'BD Manager (Deputy Head)',
    'exp.detail1': '<li>Led supply chain team management, planned department meetings, coordinated category recruitment</li><li>Onboarded 45 leading brands in 6 months, built platform brand system from scratch</li><li>Supported AI design tools, cross-border e-commerce, and 3D smart shopping guide projects</li><li>Led 3D smart guide rollout at flagship stores, trained sales staff</li>',
    'exp.date2': '2023.06 - 2024.09',
    'exp.company2': 'iSpace Technology (Beijing)',
    'exp.role2': 'Product Procurement Ops Supervisor',
    'exp.detail2': '<li>Led product development for 5 categories across 4 northern China cities</li><li>Introduced new categories, created training materials & product manuals</li><li>Managed procurement operations across 4 cities</li>',
    'exp.date3': '2022.08 - 2023.06',
    'exp.company3': 'Beijing Bear Run Media',
    'exp.role3': 'Procurement Manager',
    'exp.detail3': '<li>MCN product selection for furniture, home, bedding categories</li><li>Annual product planning based on KOL IP characteristics</li><li>Increased gross margin from 15% to 40%, grew GMV by 20%</li>',
    'exp.date4': '2022.04 - 2022.08',
    'exp.company4': 'Beijing Shuimu Youpin Decoration',
    'exp.role4': 'Supply Chain Manager',
    'exp.detail4': '<li>Built soft furnishing supply chain system with quality standards & retail tools</li><li>Reduced procurement costs by 20% while improving product quality to top-tier brand levels</li>',
    'exp.date5': '2020.09 - 2022.04',
    'exp.company5': 'Qumei Home Furnishing Group',
    'exp.role5': 'Procurement Developer',
    'exp.detail5': '<li>Developed procurement strategies, analyzed market trends, managed factory sourcing</li><li>Managed 200M RMB annual procurement, SKU monthly sales 30,000+</li><li>Established quality control from production to delivery</li>',
    'exp.date6': '2018.05 - 2020.08',
    'exp.company6': 'Yige Gongzhuang (Beijing) Tech',
    'exp.role6': 'Procurement Manager',
    'exp.detail6': '<li>Built casual furniture library from scratch covering sofas, chairs, carpets etc.</li><li>Product cost management via BOM analysis</li><li>Created "Inquiry Dictionary" system that significantly improved back-office efficiency</li>',
    'exp.date7': '2016.07 - 2018.05',
    'exp.company7': 'Beijing Apple Decoration Design',
    'exp.role7': 'Procurement Specialist',
    'exp.detail7': '<li>Cost estimation and budget control based on design drawings</li><li>Construction material coordination and after-sales issue resolution</li>',
    'cases.title': 'Key Achievements',
    'cases.c1Title': 'Platform Brand System 0→1',
    'cases.c1Desc': 'Built brand system from scratch in 6 months, onboarding 45 leading brands with 100% category coverage. Supported AI design tools and 3D smart guide projects with 100K+ SKUs and AI image generation.',
    'cases.c1Metric': '45+ Brands · 100K+ SKUs',
    'cases.c2Title': '3D Smart Guide Launch',
    'cases.c2Desc': 'Implemented 3D smart shopping guide at store level with 10+ major brands. Integrated AI rendering capability for intelligent product display and shopping experience.',
    'cases.c2Metric': '10+ Brands · AI Rendering',
    'cases.c3Title': 'Supply Chain Cost Saving',
    'cases.c3Desc': 'Reduced procurement costs by 20-40% through supplier optimization and product tracing, while improving quality standards.',
    'cases.c3Metric': '20-40% Cost Cut',
    'services.title': 'Services',
    'services.s1Title': 'Supply Chain Setup',
    'services.s1Desc': 'Build enterprise supply chains from scratch including supplier development and procurement strategy',
    'services.s2Title': 'Product Operations',
    'services.s2Desc': 'Product lifecycle management, category planning and market analysis to optimize product structure and operations efficiency',
    'services.s3Title': 'Team Training',
    'services.s3Desc': 'Supply chain team building, management, and professional training',
    'edu.title': 'Education',
    'edu.major': 'Engineering Cost (Civil Decoration)',
    'edu.date': '2012.09 - 2015.06',
    'edu.cert': 'IPMP International Project Management Certificate',
    'contact.title': 'Contact',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMsg': 'Your message...',
    'contact.submit': 'Send Message',
    'form.success': 'Message sent! I will reply as soon as possible.',
    'form.error': 'Send failed. Please try again or email me directly.',
  }
};

let currentLang = 'zh';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  
  // 更新所有 data-i18n 元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text) {
      // 处理包含 HTML 的内容
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });
  
  // 更新所有 data-i18n-placeholder 元素
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = i18n[lang][key];
    if (text) {
      el.placeholder = text;
    }
  });

  // 更新语言切换按钮文字
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'zh' ? 'EN' : '中';
    langBtn.title = lang === 'zh' ? 'English' : '中文';
  }
}

// 获取当前语言
function getLang() {
  return currentLang;
}
