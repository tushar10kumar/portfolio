/* ==========================================================================
   Tushar Kumar Kannojia — Interactive Portfolio Engine
   Fully customized with resume data, profile photo, and downloadable resume.
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. DATA GRAPH (STRICTLY TUSHAR KANNOJIA RESUME DATA) ---
  const GRAPH_NODES = [
    {
      id: 'tushar',
      label: 'Tushar Kumar Kannojia',
      category: 'CORE PROFILE',
      tab: 'overview',
      x: 0,
      y: 0,
      r: 36,
      color: '#e62429',
      glow: 'rgba(230, 36, 41, 0.45)',
      icon: '🕷️',
      heroImg: 'profile.jpg',
      tagline: 'B.Tech CSE @ IIITDM Jabalpur (2023 - 2027) | Full-Stack & AI Systems Architect',
      desc: 'Computer Science student engineering full-stack platforms, AI systems, custom vector RAG pipelines, and high-concurrency real-time infrastructure.',
      stack: ['C++', 'Python', 'TypeScript', 'React.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
      details: {
        problem: 'Building robust, production-grade applications requires seamless synthesis of backend concurrency, AI model inference, and intuitive user interfaces.',
        solution: 'Combining deep DSA expertise (600+ solved) with practical system design in real-time WebSockets, custom vector search stores, and computer vision pipelines.',
        metrics: [
          { label: 'Education', val: 'IIITDM Jabalpur (2023-27)' },
          { label: 'Uber SHE++', val: 'Top 100 (Top 2.5%)' },
          { label: 'DSA Solved', val: '600+ Problems' },
          { label: 'QA Lead', val: 'Fusion (IIITDMJ Portal)' }
        ]
      },
      subItems: [
        { name: 'GenRAG System', desc: 'Custom vector RAG indexing 1,400+ text chunks with Sentence-BERT & Gemini 1.5', linkId: 'genrag' },
        { name: 'CampusOps Platform', desc: 'Real-time incident platform with Socket.IO <200ms panic broadcasts & BullMQ SLA queues', linkId: 'campusops' },
        { name: 'NutriLens CV App', desc: 'EfficientNetB0 food classification model achieving 90.87% accuracy with FastAPI', linkId: 'nutrilens' },
        { name: 'Domain Lead – Testing', desc: 'Leading cross-functional QA team for Fusion (official IIITDMJ college portal)', linkId: 'fusion' }
      ]
    },

    // AI & RAG Cluster
    {
      id: 'genrag',
      label: 'GenRAG Architecture',
      category: 'AI / RAG SYSTEM',
      tab: 'ai',
      x: -330,
      y: -190,
      r: 27,
      color: '#e84fd0',
      glow: 'rgba(232, 79, 208, 0.45)',
      icon: '🤖',
      tagline: 'AI-Powered Multi-Document Retrieval-Augmented Generation System',
      desc: 'Built a Retrieval-Augmented Generation pipeline entirely from scratch in Python without relying on heavy frameworks like LangChain or external vector database servers.',
      heroImg: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      stack: ['Python', 'Streamlit', 'Sentence-BERT', 'Gemini 1.5 API', 'Docker'],
      details: {
        problem: 'Commercial RAG wrappers introduce heavy dependencies and latency overhead when indexing multi-document knowledge bases.',
        solution: 'Implemented Sentence-BERT (all-mpnet-base-v2) semantic embeddings with recursive text splitting, indexing 1,400+ vector chunks in a lightweight CSV store for sub-millisecond similarity search, paired with multi-PDF ingestion and Google Gemini 1.5 API fallback.',
        metrics: [
          { label: 'Vectors Indexed', val: '1,400+ Chunks' },
          { label: 'Retrieval Speed', val: '< 1.2 ms' },
          { label: 'Embedding Model', val: 'all-mpnet-base-v2' },
          { label: 'Deployment', val: 'Docker Containerized' }
        ]
      },
      subItems: [
        { name: 'Zero-Framework RAG Core', desc: 'Built completely from scratch without LangChain abstractions' },
        { name: 'Sentence-BERT Embeddings', desc: 'Semantic 768-dim vector embeddings with recursive paragraph chunking' },
        { name: 'Multi-PDF Document Ingestion', desc: 'Automatic upload indexing with instant semantic document search' },
        { name: 'Gemini 1.5 Fallback Engine', desc: 'Dynamic API key rotation & fallback model handling in a Streamlit UI' }
      ]
    },

    // Systems & Real-Time Cluster
    {
      id: 'campusops',
      label: 'CampusOps Platform',
      category: 'REAL-TIME SYSTEMS',
      tab: 'systems',
      x: 330,
      y: -190,
      r: 27,
      color: '#1f75fe',
      glow: 'rgba(31, 117, 254, 0.45)',
      icon: '⚡',
      tagline: 'Smart Campus Operations & Incident Management System',
      desc: 'Engineered a real-time campus incident platform with AI classification, priority/department assignment, duplicate detection, evidence management, and complete incident lifecycle tracking.',
      heroImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Redis', 'BullMQ', 'Groq'],
      details: {
        problem: 'Campus safety and maintenance operations require rapid emergency dispatch and accountable incident escalation workflows.',
        solution: 'Implemented Socket.IO WebSocket rooms with JWT auth for live updates & emergency panic broadcasts (<200ms target), SLA enforcement using BullMQ + Redis delayed escalation jobs, and a React/Vite admin dashboard with PostgreSQL/Prisma RBAC.',
        metrics: [
          { label: 'Panic Broadcast', val: '< 200 ms' },
          { label: 'Queue Engine', val: 'BullMQ + Redis' },
          { label: 'ORM Persistence', val: 'PostgreSQL / Prisma' },
          { label: 'Testing Suite', val: 'Jest / Supertest' }
        ]
      },
      subItems: [
        { name: 'Socket.IO Live Broadcasts', desc: 'JWT authenticated rooms for live incident chat & sub-200ms panic alerts' },
        { name: 'BullMQ & Redis SLA Queue', desc: 'Delayed escalation jobs, priority deadlines, and crash-safe processing' },
        { name: 'Prisma RBAC Admin Portal', desc: 'React/Vite dashboard with Redis caching, AI summaries, & Cloudinary storage' }
      ]
    },

    // Vision Cluster
    {
      id: 'nutrilens',
      label: 'NutriLens AI Vision',
      category: 'COMPUTER VISION',
      tab: 'vision',
      x: -310,
      y: 210,
      r: 26,
      color: '#00e5ff',
      glow: 'rgba(0, 229, 255, 0.45)',
      icon: '🥗',
      tagline: 'AI-Powered Nutritional Analysis Application',
      desc: 'Trained an EfficientNetB0 food recognition model achieving 90.87% classification accuracy across diverse food categories.',
      heroImg: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      stack: ['React', 'Vite', 'FastAPI', 'TensorFlow', 'SQLite', 'Gemini API'],
      details: {
        problem: 'Accurate calorie and macro logging requires reliable food image recognition and dynamic portion estimation.',
        solution: 'Built an end-to-end meal analysis pipeline supporting image upload, portion adjustment, and real-time calorie/macronutrient computation, pairing EfficientNetB0 inference with FastAPI and Gemini recommendations.',
        metrics: [
          { label: 'Classification Acc', val: '90.87 %' },
          { label: 'CNN Model', val: 'EfficientNetB0' },
          { label: 'Backend API', val: 'FastAPI (Python)' },
          { label: 'Database', val: 'SQLite' }
        ]
      },
      subItems: [
        { name: 'EfficientNetB0 CNN Model', desc: 'Trained deep neural net for high-accuracy food classification' },
        { name: 'FastAPI Meal Pipeline', desc: 'Low-latency backend serving instant macronutrient & calorie calculations' },
        { name: 'Gemini Nutritional Insights', desc: 'Personalized dietary recommendations generated via Gemini API' }
      ]
    },

    // Work Experience Node
    {
      id: 'fusion',
      label: 'Fusion (IIITDMJ Portal)',
      category: 'WORK EXPERIENCE',
      tab: 'experience',
      x: 0,
      y: -280,
      r: 26,
      color: '#b388ff',
      glow: 'rgba(179, 136, 255, 0.45)',
      icon: '🏛️',
      tagline: 'Domain Lead – Testing | Fusion (Official IIITDMJ College Website)',
      desc: 'Served as Domain Lead – Testing for Fusion, IIITDM Jabalpur\'s official college website, leading a cross-functional QA team responsible for quality assurance during development.',
      heroImg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      stack: ['QA Testing', 'Workflow Optimization', 'Automated Testing', 'Cross-Functional Leadership'],
      details: {
        problem: 'Maintaining high stability and fault tolerance across a multi-module university portal serving thousands of students and faculty.',
        solution: 'Drove structural improvements in platform stability, workflow efficiency, automated test coverage, and release management across Fusion development cycles.',
        metrics: [
          { label: 'Role', val: 'Domain Lead (Testing)' },
          { label: 'Organization', val: 'IIITDM Jabalpur' },
          { label: 'Scope', val: 'College-Wide Portal' },
          { label: 'Focus', val: 'QA & Platform Stability' }
        ]
      },
      subItems: [
        { name: 'Cross-Functional QA Team', desc: 'Led testing operations and code validation across core campus modules' },
        { name: 'Workflow Optimization', desc: 'Streamlined development pipelines and release verification processes' }
      ]
    },

    // Skills Summary Cluster
    {
      id: 'stack',
      label: 'Skills Summary & Loadout',
      category: 'TECHNICAL SKILLS',
      tab: 'stack',
      x: 320,
      y: 210,
      r: 27,
      color: '#00e676',
      glow: 'rgba(0, 230, 118, 0.45)',
      icon: '🛠️',
      tagline: 'Languages, Frameworks, Databases, AI/ML & Engineering Tools',
      desc: 'Proven technical proficiency across modern web frameworks, backend event architectures, ML model training, and database engines.',
      heroImg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      stack: ['C++', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Java', 'React.js', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      subItems: [
        { name: 'Languages', desc: 'C++, Python, JavaScript, TypeScript, PHP, SQL, Java' },
        { name: 'Frontend', desc: 'React.js, Tailwind CSS, Vite, HTML5, CSS3' },
        { name: 'Backend & Event Runtimes', desc: 'Node.js, Express.js, FastAPI, Socket.IO, BullMQ' },
        { name: 'Databases & Storage', desc: 'PostgreSQL, MongoDB, MySQL, SQLite, Redis, Prisma ORM' },
        { name: 'AI / ML Frameworks', desc: 'TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib, Sentence-BERT' },
        { name: 'Tools & Infra', desc: 'Git, GitHub, Docker, Redis, Prisma, Socket.IO' }
      ]
    },

    // Achievements & Leadership
    {
      id: 'achievements',
      label: 'Achievements & Leadership',
      category: 'HONORS & ACTIVITIES',
      tab: 'experience',
      x: -120,
      y: 300,
      r: 27,
      color: '#ffa116',
      glow: 'rgba(255, 161, 22, 0.45)',
      icon: '🏆',
      tagline: 'Uber SHE++ Top 100 | 600+ DSA Solved | HackByte 2.0 Lead',
      desc: 'Selected in top 100 nationwide out of 4,000+ applicants (top 2.5%) for Uber SHE++. Solved 600+ DSA problems across LeetCode, Codeforces, and CodeChef.',
      heroImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      stack: ['Uber SHE++', 'LeetCode 600+', 'NPTEL Certified', 'HackByte 2.0', 'Enthuse Fest'],
      details: {
        problem: 'Excelling in both competitive algorithmic problem solving and campus leadership roles.',
        solution: 'Maintained top 2.5% standing in national tech challenges while managing Central India\'s largest student hackathon operations.',
        metrics: [
          { label: 'Uber SHE++', val: 'Top 100 (Top 2.5%)' },
          { label: 'DSA Solved', val: '600+ Problems' },
          { label: 'NPTEL Certs', val: 'BI/Analytics & VR/AR' },
          { label: 'Hackathon Ops', val: 'HackByte 2.0 Lead' }
        ]
      },
      subItems: [
        { name: 'Uber SHE++ Top 100', desc: 'Selected in top 100 candidates nationwide out of 4,000+ applicants (Top 2.5%)' },
        { name: '600+ DSA Problems Solved', desc: 'Solved across LeetCode, Codeforces, & CodeChef strengthening core algorithms' },
        { name: 'NPTEL Certifications', desc: 'Certified in Business Intelligence & Analytics and Foundations of VR/AR' },
        { name: 'HackByte 2.0 Organizing Committee', desc: 'Managed logistics, scheduling, & coordination for Central India largest hackathon' },
        { name: 'Enthuse & Basketball Club', desc: 'Sports fest event coordinator & represent IIITDMJ in basketball tournaments' }
      ]
    },

    // Contact Node
    {
      id: 'contact',
      label: 'Direct Contact Signal',
      category: 'CONNECT & HIRE',
      tab: 'contact',
      x: 120,
      y: 300,
      r: 28,
      color: '#e62429',
      glow: 'rgba(230, 36, 41, 0.5)',
      icon: '📞',
      heroImg: 'profile.jpg',
      tagline: 'Get in Touch with Tushar Kumar Kannojia',
      desc: 'Available for Software Engineering (SDE) / AI Internships, collaborative research, and engineering opportunities.',
      stack: ['Email: tktushar7@gmail.com', 'Phone: +91-8171601925', 'Location: Jabalpur, India'],
      details: {
        problem: 'Direct line of communication for technical inquiries, software engineering roles, and system development.',
        solution: 'Reach out via direct email, phone (+91-8171601925), LinkedIn, or download my official PDF resume.',
        metrics: [
          { label: 'Email', val: 'tktushar7@gmail.com' },
          { label: 'Phone', val: '+91-8171601925' },
          { label: 'LinkedIn', val: 'tushar-kannojia' },
          { label: 'GitHub', val: '@tushar10kumar' }
        ]
      },
      subItems: [
        { name: 'Email Tushar', desc: 'tktushar7@gmail.com' },
        { name: 'Call / WhatsApp', desc: '+91-8171601925' },
        { name: 'LinkedIn Profile', desc: 'linkedin.com/in/tushar-kannojia' },
        { name: 'GitHub Profile', desc: 'github.com/tushar10kumar' }
      ]
    }
  ];

  // Graph Connections (Edges)
  const GRAPH_EDGES = [
    ['tushar', 'genrag'],
    ['tushar', 'campusops'],
    ['tushar', 'nutrilens'],
    ['tushar', 'fusion'],
    ['tushar', 'stack'],
    ['tushar', 'achievements'],
    ['tushar', 'contact'],
    ['genrag', 'nutrilens'],
    ['campusops', 'stack'],
    ['fusion', 'achievements'],
    ['achievements', 'contact']
  ];

  // --- 2. CANVAS & PHYSICS ENGINE ---
  const canvas = document.getElementById('mapCanvas');
  const ctx = canvas.getContext('2d');
  const miniCanvas = document.getElementById('miniCanvas');
  const miniCtx = miniCanvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let camera = { x: 0, y: 0, zoom: 1, targetX: 0, targetY: 0, targetZoom: 1 };
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let hoveredNode = null;
  let activeNode = null;
  let activeTab = 'overview';
  let isLightTheme = false;

  // Starfield background
  const stars = Array.from({ length: 260 }, () => ({
    x: (Math.random() - 0.5) * 2400,
    y: (Math.random() - 0.5) * 2400,
    size: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.7 + 0.2,
    twinkleSpeed: Math.random() * 0.02 + 0.005
  }));

  const nodeMap = new Map();
  GRAPH_NODES.forEach((node) => {
    node.currX = node.x;
    node.currY = node.y;
    nodeMap.set(node.id, node);
  });

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    miniCanvas.width = 195;
    miniCanvas.height = 130;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function worldToScreen(wx, wy) {
    return {
      x: (wx - camera.x) * camera.zoom + width / 2,
      y: (wy - camera.y) * camera.zoom + height / 2
    };
  }

  function screenToWorld(sx, sy) {
    return {
      x: (sx - width / 2) / camera.zoom + camera.x,
      y: (sy - height / 2) / camera.zoom + camera.y
    };
  }

  let animTime = 0;

  function render() {
    animTime += 0.015;

    camera.x += (camera.targetX - camera.x) * 0.08;
    camera.y += (camera.targetY - camera.y) * 0.08;
    camera.zoom += (camera.targetZoom - camera.zoom) * 0.08;

    ctx.clearRect(0, 0, width, height);

    drawStarfield();
    drawEdges();
    drawNodes();
    drawMinimap();

    requestAnimationFrame(render);
  }

  function drawStarfield() {
    ctx.save();
    stars.forEach((star) => {
      star.alpha += Math.sin(animTime * 2 + star.x) * star.twinkleSpeed;
      const alpha = Math.max(0.1, Math.min(0.8, star.alpha));
      const pos = worldToScreen(star.x, star.y);
      if (pos.x >= -10 && pos.x <= width + 10 && pos.y >= -10 && pos.y <= height + 10) {
        ctx.fillStyle = isLightTheme ? `rgba(15, 23, 42, ${alpha * 0.25})` : `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, star.size * camera.zoom, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.restore();
  }

  function drawEdges() {
    GRAPH_EDGES.forEach(([sourceId, targetId]) => {
      const source = nodeMap.get(sourceId);
      const target = nodeMap.get(targetId);
      if (!source || !target) return;

      const p1 = worldToScreen(source.currX, source.currY);
      const p2 = worldToScreen(target.currX, target.currY);
      const isHovered = hoveredNode && (hoveredNode.id === sourceId || hoveredNode.id === targetId);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);

      if (isHovered) {
        ctx.strokeStyle = isLightTheme ? '#d32f2f' : '#e62429';
        ctx.lineWidth = 2.5 * camera.zoom;
        ctx.shadowColor = isLightTheme ? '#d32f2f' : '#e62429';
        ctx.shadowBlur = 10;
      } else {
        ctx.strokeStyle = isLightTheme ? 'rgba(15, 23, 42, 0.14)' : 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = 1 * camera.zoom;
      }
      ctx.stroke();

      // Energy pulse dot
      const pulseT = (animTime * 0.8 + (source.x * 0.01)) % 1;
      const pulseX = p1.x + (p2.x - p1.x) * pulseT;
      const pulseY = p1.y + (p2.y - p1.y) * pulseT;

      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 2.5 * camera.zoom, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? (isLightTheme ? '#1565c0' : '#00e5ff') : (isLightTheme ? 'rgba(15, 23, 42, 0.35)' : 'rgba(255, 255, 255, 0.55)');
      ctx.fill();

      ctx.restore();
    });
  }

  function drawNodes() {
    GRAPH_NODES.forEach((node) => {
      node.currX = node.x + Math.sin(animTime + node.x) * 3.5;
      node.currY = node.y + Math.cos(animTime + node.y) * 3.5;

      const pos = worldToScreen(node.currX, node.currY);
      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const isActive = activeNode && activeNode.id === node.id;
      const scaledR = node.r * camera.zoom;

      ctx.save();

      if (node.id === 'tushar' || isHovered || isActive) {
        const pulseR = scaledR + Math.sin(animTime * 3) * 6 + 6;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = node.glow;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, scaledR, 0, Math.PI * 2);

      if (isHovered || isActive) {
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 18;
        ctx.fillStyle = node.color;
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = isLightTheme ? '#ffffff' : '#0e121c';
      }

      ctx.fill();

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, scaledR, 0, Math.PI * 2);
      ctx.strokeStyle = node.color;
      ctx.lineWidth = (isHovered || isActive ? 3 : 2) * camera.zoom;
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${Math.max(12, 14 * camera.zoom)}px sans-serif`;
      ctx.fillText(node.icon, pos.x, pos.y - 2);

      ctx.font = `600 ${Math.max(9.5, 10.5 * camera.zoom)}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = isHovered || isActive ? (isLightTheme ? '#0b0f19' : '#ffffff') : (isLightTheme ? 'rgba(11, 15, 25, 0.85)' : 'rgba(240, 244, 252, 0.85)');
      ctx.fillText(node.label, pos.x, pos.y + scaledR + 13);

      ctx.restore();
    });
  }

  function drawMinimap() {
    const mw = miniCanvas.width;
    const mh = miniCanvas.height;

    miniCtx.clearRect(0, 0, mw, mh);

    const bounds = { minX: -550, maxX: 550, minY: -400, maxY: 400 };
    const scaleX = mw / (bounds.maxX - bounds.minX);
    const scaleY = mh / (bounds.maxY - bounds.minY);
    const scale = Math.min(scaleX, scaleY) * 0.8;

    const mapToMini = (wx, wy) => ({
      x: mw / 2 + (wx - (bounds.minX + bounds.maxX) / 2) * scale,
      y: mh / 2 + (wy - (bounds.minY + bounds.maxY) / 2) * scale
    });

    miniCtx.strokeStyle = isLightTheme ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)';
    miniCtx.lineWidth = 1;
    GRAPH_EDGES.forEach(([sId, tId]) => {
      const s = nodeMap.get(sId);
      const t = nodeMap.get(tId);
      if (!s || !t) return;
      const p1 = mapToMini(s.x, s.y);
      const p2 = mapToMini(t.x, t.y);
      miniCtx.beginPath();
      miniCtx.moveTo(p1.x, p1.y);
      miniCtx.lineTo(p2.x, p2.y);
      miniCtx.stroke();
    });

    GRAPH_NODES.forEach((node) => {
      const p = mapToMini(node.x, node.y);
      miniCtx.fillStyle = node.color;
      miniCtx.beginPath();
      miniCtx.arc(p.x, p.y, node.id === 'tushar' ? 4 : 2.5, 0, Math.PI * 2);
      miniCtx.fill();
    });

    const topLeft = screenToWorld(0, 0);
    const bottomRight = screenToWorld(width, height);
    const p1 = mapToMini(topLeft.x, topLeft.y);
    const p2 = mapToMini(bottomRight.x, bottomRight.y);

    miniCtx.strokeStyle = isLightTheme ? '#d32f2f' : '#00e5ff';
    miniCtx.lineWidth = 1.5;
    miniCtx.strokeRect(p1.x, p1.y, Math.max(10, p2.x - p1.x), Math.max(10, p2.y - p1.y));
  }

  // --- 3. MOUSE INTERACTION & HOVER ---
  const tooltip = document.getElementById('canvasTooltip');
  const tipTitle = document.getElementById('tipTitle');
  const tipCategory = document.getElementById('tipCategory');

  function checkNodeHover(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let found = null;

    for (const node of GRAPH_NODES) {
      const pos = worldToScreen(node.currX, node.currY);
      const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
      if (dist <= node.r * camera.zoom + 8) {
        found = node;
        break;
      }
    }

    if (found !== hoveredNode) {
      hoveredNode = found;
      if (hoveredNode) {
        tooltip.style.opacity = '1';
        tooltip.style.transform = `translate(${mouseX}px, ${mouseY - 10}px)`;
        tipTitle.innerHTML = `<span>${hoveredNode.icon}</span> ${hoveredNode.label}`;
        tipCategory.textContent = hoveredNode.category;
        canvas.style.cursor = 'pointer';
      } else {
        tooltip.style.opacity = '0';
        canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
      }
    } else if (hoveredNode) {
      tooltip.style.transform = `translate(${mouseX}px, ${mouseY - 10}px)`;
    }
  }

  canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
      camera.targetX -= (e.clientX - dragStart.x) / camera.zoom;
      camera.targetY -= (e.clientY - dragStart.y) / camera.zoom;
      dragStart = { x: e.clientX, y: e.clientY };
    } else {
      checkNodeHover(e);
    }
  });

  canvas.addEventListener('mousedown', (e) => {
    if (hoveredNode) {
      openDossier(hoveredNode);
    } else {
      isDragging = true;
      dragStart = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    camera.targetZoom = Math.max(0.4, Math.min(2.5, camera.targetZoom * zoomFactor));
  }, { passive: false });

  miniCanvas.addEventListener('click', (e) => {
    const rect = miniCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const bounds = { minX: -550, maxX: 550, minY: -400, maxY: 400 };
    const scaleX = miniCanvas.width / (bounds.maxX - bounds.minX);
    const scaleY = miniCanvas.height / (bounds.maxY - bounds.minY);
    const scale = Math.min(scaleX, scaleY) * 0.8;

    camera.targetX = (mx - miniCanvas.width / 2) / scale + (bounds.minX + bounds.maxX) / 2;
    camera.targetY = (my - miniCanvas.height / 2) / scale + (bounds.minY + bounds.maxY) / 2;
  });

  // --- 4. DOSSIER DRAWER & NAVIGATION ---
  const drawer = document.getElementById('dossierDrawer');
  const drawerBadge = document.getElementById('drawerBadge');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerTagline = document.getElementById('drawerTagline');
  const drawerTechStack = document.getElementById('drawerTechStack');
  const drawerCardsStack = document.getElementById('drawerCardsStack');
  const drawerHero = document.getElementById('drawerHero');

  function openDossier(node) {
    activeNode = node;
    drawerBadge.textContent = node.category;
    drawerTitle.textContent = node.label;
    drawerTagline.textContent = node.tagline;

    if (node.heroImg) {
      drawerHero.innerHTML = `<img src="${node.heroImg}" alt="${node.label}" />`;
    } else {
      drawerHero.innerHTML = `<div class="drawer-hero-placeholder"><span style="font-size:32px">${node.icon}</span><span>SCHEMATIC LOGGED</span></div>`;
    }

    if (node.stack && node.stack.length > 0) {
      drawerTechStack.innerHTML = node.stack.map(s => `<span class="tech-pill">${s}</span>`).join('');
    } else {
      drawerTechStack.innerHTML = `<span class="tech-pill">System Architecture</span>`;
    }

    if (node.subItems && node.subItems.length > 0) {
      drawerCardsStack.innerHTML = node.subItems.map(item => `
        <div class="project-card" data-link="${item.linkId || ''}">
          <div class="project-card-header">
            <span class="project-card-name">${item.name}</span>
            <span class="project-card-type">EXAMINE ↗</span>
          </div>
          <p class="project-card-desc">${item.desc}</p>
        </div>
      `).join('');
    } else {
      drawerCardsStack.innerHTML = `<p style="font-size:13px; color:var(--text-muted)">Technical overview logged for ${node.label}.</p>`;
    }

    camera.targetX = node.x;
    camera.targetY = node.y;
    camera.targetZoom = 1.25;

    updateActiveTab(node.tab || 'overview');
    drawer.classList.add('open');

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const linkId = card.getAttribute('data-link');
        if (linkId && nodeMap.has(linkId)) {
          openDossier(nodeMap.get(linkId));
        } else {
          openEditorialModal(activeNode);
        }
      });
    });
  }

  function closeDossier() {
    drawer.classList.remove('open');
    activeNode = null;
  }

  document.getElementById('btnCloseDrawer').addEventListener('click', closeDossier);

  const navTabs = document.querySelectorAll('.nav-tab');

  function updateActiveTab(tabId) {
    activeTab = tabId;
    navTabs.forEach(t => {
      if (t.getAttribute('data-tab') === tabId) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  }

  navTabs.forEach(t => {
    t.addEventListener('click', () => {
      const tabId = t.getAttribute('data-tab');
      updateActiveTab(tabId);
      const targetNode = GRAPH_NODES.find(n => n.tab === tabId) || GRAPH_NODES[0];
      openDossier(targetNode);
    });
  });

  document.getElementById('brandHome').addEventListener('click', () => {
    camera.targetX = 0;
    camera.targetY = 0;
    camera.targetZoom = 1.0;
    openDossier(GRAPH_NODES[0]);
  });

  // --- 5. EDITORIAL MODAL & CONTACT SECTION ---
  const editorialOverlay = document.getElementById('editorialOverlay');
  const editorialContainer = document.getElementById('editorialContainer');

  function openEditorialModal(node) {
    const n = node || GRAPH_NODES[0];

    let metricsHTML = '';
    if (n.details && n.details.metrics) {
      metricsHTML = `
        <div class="editorial-meta-grid">
          ${n.details.metrics.map(m => `
            <div>
              <div class="meta-item-label">${m.label}</div>
              <div class="meta-item-value">${m.val}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let subcardsHTML = '';
    if (n.subItems) {
      subcardsHTML = `
        <div class="feature-cards-grid">
          ${n.subItems.map(item => `
            <div class="feature-card">
              <div class="feature-card-icon">⚡</div>
              <div class="feature-card-title">${item.name}</div>
              <div class="feature-card-desc">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    editorialContainer.innerHTML = `
      <span class="editorial-kicker">${n.category} · DOSSIER OVERVIEW</span>
      <h1 class="editorial-headline">${n.label}</h1>
      <p class="editorial-lead">${n.desc}</p>
      
      ${metricsHTML}

      <div class="editorial-content-block">
        <h3>System Engineering & Technical Strategy</h3>
        <p>${n.details ? n.details.solution : n.tagline}</p>
        
        <h3>Key Subsystems & Highlights</h3>
        ${subcardsHTML}

        <!-- Contact Section & Direct Signal -->
        <div class="contact-section-wrapper" id="contactFormSection">
          <div class="contact-info-col">
            <div class="contact-profile-card">
              <img src="profile.jpg" alt="Tushar Kumar Kannojia" class="contact-profile-img" />
              <div>
                <h4 style="font-family:var(--font-display); font-size:18px; color:var(--text-main); margin-bottom:2px">Tushar Kumar Kannojia</h4>
                <p style="font-family:var(--font-mono); font-size:11px; color:var(--cyan-accent)">B.Tech CSE @ IIITDM Jabalpur (2023 - 2027)</p>
              </div>
            </div>

            <h2 style="font-family:var(--font-display); font-size:24px; color:var(--text-main)">Let's Connect & Build Scalable Systems</h2>
            <p style="font-size:13.5px; color:var(--text-muted); line-height:1.5">Actively looking for Software Engineering (SDE) / AI Internships & Opportunities.</p>
            
            <div style="font-family:var(--font-mono); font-size:11.5px; display:flex; flex-direction:column; gap:9px; margin-top:6px;">
              <div>📧 <strong>EMAIL:</strong> <a href="mailto:tktushar7@gmail.com" style="color:var(--cyan-accent); text-decoration:none">tktushar7@gmail.com</a></div>
              <div>📞 <strong>PHONE:</strong> <a href="tel:+918171601925" style="color:var(--cyan-accent); text-decoration:none">+91-8171601925</a></div>
              <div>💼 <strong>LINKEDIN:</strong> <a href="https://linkedin.com/in/tushar-kannojia-b044ba28b/" target="_blank" style="color:var(--cyan-accent); text-decoration:none">linkedin.com/in/tushar-kannojia</a></div>
              <div>🐙 <strong>GITHUB:</strong> <a href="https://github.com/tushar10kumar" target="_blank" style="color:var(--cyan-accent); text-decoration:none">github.com/tushar10kumar</a></div>
              <div>💡 <strong>LEETCODE:</strong> <a href="https://leetcode.com/tushar10kumar" target="_blank" style="color:var(--cyan-accent); text-decoration:none">leetcode.com/tushar10kumar</a></div>
            </div>

            <div style="margin-top: 10px;">
              <a href="Tushar_Kumar_Kannojia_Resume.pdf?v=2" download="Tushar_Kumar_Kannojia_Resume.pdf" class="btn-download-resume-drawer" style="text-decoration:none">
                📥 DOWNLOAD RESUME (PDF)
              </a>
            </div>
          </div>

          <form class="contact-form" id="signalForm">
            <div class="form-group">
              <label>Your Name / Organization</label>
              <input type="text" placeholder="e.g. Engineering Recruiter / Team Lead" required />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="recruiter@company.com" required />
            </div>
            <div class="form-group">
              <label>Message / Opportunity Details</label>
              <textarea placeholder="Describe internship role, project collaboration, or inquiry..." required></textarea>
            </div>
            <button type="submit" class="btn-submit-form" id="btnSubmitForm">SEND SIGNAL ⚡</button>
            <div id="formStatus" style="font-family:var(--font-mono); font-size:11px; color:var(--green-accent); display:none; margin-top:6px;">
              ✔ Signal Received! Tushar will respond shortly.
            </div>
          </form>
        </div>
      </div>
    `;

    editorialOverlay.classList.add('active');

    const signalForm = document.getElementById('signalForm');
    if (signalForm) {
      signalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('formStatus');
        status.style.display = 'block';
        signalForm.reset();
      });
    }
  }

  function closeEditorialModal() {
    editorialOverlay.classList.remove('active');
  }

  document.getElementById('btnOpenEditorial').addEventListener('click', () => {
    openEditorialModal(activeNode);
  });

  document.getElementById('btnBackMap').addEventListener('click', closeEditorialModal);

  document.getElementById('btnSignal').addEventListener('click', () => {
    openEditorialModal(GRAPH_NODES.find(n => n.id === 'contact') || GRAPH_NODES[0]);
    setTimeout(() => {
      const contactElem = document.getElementById('contactFormSection');
      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  });

  document.getElementById('btnEditorialSignal').addEventListener('click', () => {
    const contactElem = document.getElementById('contactFormSection');
    if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
  });

  // --- 6. THEME ENGINE ---
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  themeToggleBtn.addEventListener('click', () => {
    isLightTheme = !isLightTheme;
    if (isLightTheme) {
      document.body.classList.add('light-theme');
      themeIcon.textContent = '🌙';
      themeText.textContent = 'DARK';
    } else {
      document.body.classList.remove('light-theme');
      themeIcon.textContent = '☀';
      themeText.textContent = 'LIGHT';
    }
  });

  // INITIALIZATION
  render();
  setTimeout(() => {
    openDossier(GRAPH_NODES[0]);
  }, 350);

})();
