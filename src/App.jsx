import React, { useEffect } from 'react'
import Particles from './Particles'

function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

const HERO_IMAGE = assetUrl('assets/hero-ai-office.jpg')

function useRevealOnScroll() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealItems.length) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotion.matches || typeof IntersectionObserver === 'undefined') {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}

function BackgroundParticles({ variant = 'default' }) {
  const isContact = variant === 'contact'

  return (
    <div className={`section-particles section-particles-${variant}`} aria-hidden="true">
      <Particles
        particleColors={isContact ? ['#ffffff', '#d9fff9', '#7aefe1'] : ['#ffffff', '#bde9e4', '#7aefe1']}
        particleCount={isContact ? 420 : 520}
        particleSpread={isContact ? 13 : 15.5}
        speed={isContact ? 0.09 : 0.12}
        particleBaseSize={isContact ? 108 : 124}
        sizeRandomness={0.92}
        cameraDistance={isContact ? 18 : 20}
        alphaParticles
        disableRotation={false}
        moveParticlesOnHover={false}
        pixelRatio={1}
      />
    </div>
  )
}

const projects = [
  {
    index: '01',
    label: 'AI WORKFLOW',
    title: 'AI工作流搭建',
    description: '把团队重复做的判断、整理、生成和跟进动作拆成稳定流程，再接入 AI 和自动化。',
    steps: [
      '梳理高频业务场景',
      '定义输入、判断和输出标准',
      '搭建提示词与自动化节点',
      '沉淀 SOP 与复用模板',
    ],
    tags: ['AI工作流图', '提示词库', '自动化节点', '交接文档'],
    image: assetUrl('assets/projects/ai-workflow-render.jpg'),
    preview: {
      variant: 'workflow',
      badge: 'FLOW',
      modules: ['输入', '推理', '生成', '复核'],
      notes: [
        { left: '16%', top: '20%', width: '34%', tone: 'wide' },
        { left: '58%', top: '38%', width: '17%', tone: 'stack' },
      ],
    },
  },
  {
    index: '02',
    label: 'WEB SYSTEM',
    title: '官网与落地页',
    description: '从定位、页面结构、视觉气质到上线，把创业团队的业务讲清楚、展示出来。',
    steps: [
      '明确目标客户和核心主张',
      '规划首页、业务和联系路径',
      '完成视觉与响应式页面',
      '上线并预留迭代空间',
    ],
    tags: ['首页结构', '视觉系统', '静态页面', '上线包'],
    image: assetUrl('assets/projects/website-landing-render.jpg'),
    preview: {
      variant: 'website',
      badge: 'WEB',
      modules: ['首页', '业务页', '联系页', '响应式'],
      notes: [
        { left: '14%', top: '18%', width: '38%', tone: 'wide' },
        { left: '55%', top: '29%', width: '25%', tone: 'wide' },
      ],
    },
  },
  {
    index: '03',
    label: 'INTERNAL TOOL',
    title: '内部工具与自动化',
    description: '把线索、项目、知识库、报表和提醒连接起来，减少团队在表格和消息之间搬运。',
    steps: [
      '盘点现有表格和协作路径',
      '设计数据字段与状态流转',
      '搭建看板、表单和提醒',
      '测试团队真实使用场景',
    ],
    tags: ['工具原型', '数据字段表', '自动提醒', '使用说明'],
    image: assetUrl('assets/projects/internal-automation-render.jpg'),
    preview: {
      variant: 'internal',
      badge: 'OPS',
      modules: ['线索', '状态', '看板', '提醒'],
      notes: [
        { left: '17%', top: '22%', width: '28%', tone: 'wide' },
        { left: '58%', top: '40%', width: '20%', tone: 'stack' },
      ],
    },
  },
  {
    index: '04',
    label: 'ECOMMERCE CONTENT',
    title: '电商内容资产',
    description: '围绕产品卖点制作主图、详情图和推广视频，让素材更适合上架、投放和复用。',
    steps: [
      '拆解产品卖点与使用场景',
      '规划主图、详情页和短视频脚本',
      '生成视觉素材与版式方向',
      '整理成可投放的素材包',
    ],
    tags: ['产品主图', '详情图', '推广视频脚本', '素材包'],
    image: assetUrl('assets/projects/ecommerce-content-render.jpg'),
    preview: {
      variant: 'commerce',
      badge: 'CONTENT',
      modules: ['主图', '详情', '脚本', '素材包'],
      notes: [
        { left: '15%', top: '18%', width: '22%', tone: 'card' },
        { left: '48%', top: '24%', width: '28%', tone: 'wide' },
      ],
    },
  },
]

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 56 56" aria-hidden="true">
      <rect x="6.5" y="6.5" width="43" height="43" rx="12" />
      <path d="M18 35.5h14.5V21" />
      <path d="M18.5 20.5l15 15" />
      <path d="M31 21h6v6" />
      <circle cx="39.5" cy="16.5" r="2.5" />
    </svg>
  )
}

function PreviewOverlay({ variant }) {
  switch (variant) {
    case 'workflow':
      return (
        <>
          <div className="artifact-rail rail-top">
            <span className="rail-line" />
            <span className="rail-dot dot-a" />
            <span className="rail-dot dot-b" />
            <span className="rail-dot dot-c" />
          </div>
          <div className="artifact-panel panel-left">
            <span className="glyph glyph-list" />
            <span className="mini-bar wide" />
            <span className="mini-bar accent" />
          </div>
          <div className="artifact-panel panel-center">
            <span className="glyph glyph-network" />
          </div>
          <div className="artifact-panel panel-right">
            <span className="glyph glyph-cluster" />
          </div>
          <div className="preview-float-card card-workflow-main">
            <span className="mini-bar wide" />
            <span className="mini-bar accent" />
            <span className="mini-bar short" />
          </div>
          <div className="preview-orbit orbit-left" />
          <div className="preview-orbit orbit-right" />
          <span className="preview-node node-a" />
          <span className="preview-node node-b" />
          <span className="preview-node node-c" />
        </>
      )
    case 'website':
      return (
        <>
          <div className="artifact-rail rail-top">
            <span className="rail-line" />
            <span className="rail-dot dot-a" />
            <span className="rail-dot dot-b" />
          </div>
          <div className="artifact-panel panel-left">
            <span className="glyph glyph-layout" />
          </div>
          <div className="artifact-panel panel-center">
            <span className="glyph glyph-window" />
          </div>
          <div className="artifact-panel panel-right">
            <span className="glyph glyph-mobile" />
          </div>
          <div className="preview-browser browser-main">
            <span className="browser-top" />
            <span className="browser-line line-a" />
            <span className="browser-line line-b" />
            <span className="browser-line line-c" />
          </div>
          <div className="preview-device phone-frame">
            <span className="device-line line-a" />
            <span className="device-line line-b" />
            <span className="device-line line-c" />
          </div>
          <span className="preview-node node-b" />
          <span className="preview-node node-c" />
        </>
      )
    case 'internal':
      return (
        <>
          <div className="artifact-rail rail-top">
            <span className="rail-line" />
            <span className="rail-dot dot-a" />
            <span className="rail-dot dot-b" />
            <span className="rail-dot dot-c" />
          </div>
          <div className="artifact-panel panel-left">
            <span className="glyph glyph-table" />
          </div>
          <div className="artifact-panel panel-center">
            <span className="glyph glyph-board" />
          </div>
          <div className="artifact-panel panel-right">
            <span className="glyph glyph-bell" />
          </div>
          <div className="preview-board board-kanban">
            <span className="board-col col-a" />
            <span className="board-col col-b" />
            <span className="board-col col-c" />
          </div>
          <div className="preview-float-card card-alert">
            <span className="mini-bar accent" />
            <span className="mini-bar short" />
          </div>
          <div className="preview-status status-a" />
          <div className="preview-status status-b" />
        </>
      )
    case 'commerce':
      return (
        <>
          <div className="artifact-rail rail-top">
            <span className="rail-line" />
            <span className="rail-dot dot-a" />
            <span className="rail-dot dot-b" />
            <span className="rail-dot dot-c" />
          </div>
          <div className="artifact-panel panel-left">
            <span className="glyph glyph-image" />
          </div>
          <div className="artifact-panel panel-center">
            <span className="glyph glyph-play" />
          </div>
          <div className="artifact-panel panel-right">
            <span className="glyph glyph-box" />
          </div>
          <div className="preview-product product-box">
            <span className="product-face front" />
            <span className="product-face side" />
            <span className="product-glow" />
          </div>
          <div className="preview-gallery">
            <span className="gallery-card card-a" />
            <span className="gallery-card card-b" />
            <span className="gallery-card card-c" />
          </div>
          <div className="preview-float-card card-social">
            <span className="mini-bar wide" />
            <span className="mini-bar accent" />
          </div>
          <span className="preview-node node-a" />
          <span className="preview-node node-c" />
        </>
      )
    default:
      return null
  }
}

function ProjectPreview({ preview }) {
  return (
    <div className={`project-preview variant-${preview.variant}`} aria-hidden="true">
      <div className="preview-backlight" />
      <div className="preview-base" />
      <div className="preview-glass">
        <div className="preview-reflection reflection-a" />
        <div className="preview-reflection reflection-b" />
        <div className="preview-reflection reflection-c" />
        <div className="preview-ceiling">
          <span>{preview.badge}</span>
        </div>
        <div className="preview-inner-rim" />
        <div className="preview-stage">
          <div className="preview-floor">
            {Array.from({ length: 16 }).map((_, cellIndex) => (
              <span key={`${preview.variant}-floor-${cellIndex}`} />
            ))}
          </div>
          <div className="preview-shelf shelf-left">
            <span className="shelf-screen screen-a" />
            <span className="shelf-screen screen-b" />
            <span className="shelf-screen screen-c" />
            <span className="shelf-leg leg-left" />
            <span className="shelf-leg leg-right" />
          </div>
          <div className="server-stack">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="module-crate">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-figure">
            <span className="figure-head" />
            <span className="figure-body" />
            <span className="figure-arm arm-left" />
            <span className="figure-arm arm-right" />
          </div>
          <div className="preview-chair">
            <span className="chair-back" />
            <span className="chair-seat" />
            <span className="chair-leg leg-a" />
            <span className="chair-leg leg-b" />
            <span className="chair-leg leg-c" />
            <span className="chair-leg leg-d" />
          </div>
          <div className="preview-desk">
            <span className="desk-top" />
            <span className="desk-leg leg-left" />
            <span className="desk-leg leg-right" />
          </div>
          <div className="preview-monitor monitor-main">
            <span className="monitor-line line-a" />
            <span className="monitor-line line-b" />
            <span className="monitor-line line-c" />
          </div>
          <div className="preview-monitor monitor-side">
            <span className="monitor-line line-a" />
            <span className="monitor-line line-b" />
          </div>
          <div className="preview-lamp">
            <span className="lamp-head" />
            <span className="lamp-stem" />
            <span className="lamp-glow" />
          </div>
          <div className="preview-terminal" />
          <div className="preview-keyboard" />
          <div className="preview-mouse" />
          <div className="preview-pod pod-left" />
          <div className="preview-pod pod-right" />
          <div className="preview-cable cable-a" />
          <div className="preview-cable cable-b" />
          <div className="preview-cable cable-c" />
          <div className="preview-cable cable-d" />
          <div className="preview-cable cable-e" />
          <PreviewOverlay variant={preview.variant} />
          <div className="floor-module floor-module-a">
            <span className="module-mark mark-lines" />
          </div>
          <div className="floor-module floor-module-b">
            <span className="module-mark mark-network" />
          </div>
          <div className="floor-module floor-module-c">
            <span className="module-beacon" />
          </div>
          <div className="floor-module floor-module-d">
            <span className="module-mark mark-check" />
          </div>
          <div className="preview-token token-a" />
          <div className="preview-token token-b" />
          <div className="preview-token token-c" />
          {preview.notes.map((note) => (
            <div
              key={`${preview.variant}-${note.left}-${note.top}`}
              className={`preview-note tone-${note.tone}`}
              style={{ left: note.left, top: note.top, width: note.width }}
            />
          ))}
          <div className="preview-modules">
            {preview.modules.map((module) => (
              <span key={`${preview.variant}-${module}`}>{module}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, revealOrder }) {
  return (
    <article
      className="project-card"
      data-reveal="project-card"
      style={{ '--reveal-delay': `${revealOrder * 90}ms` }}
    >
      <div className="project-copy">
        <div className="project-heading">
          <span className="project-index">{project.index}</span>
          <div>
            <p className="project-label">{project.label}</p>
            <h3>{project.title}</h3>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <ol className="project-steps">
          {project.steps.map((step, stepIndex) => (
            <li key={step}>
              <span>{String(stepIndex + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
        <div className="project-tags" aria-label={`${project.title}关键词`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-frame">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} 项目视觉图`}
          decoding="async"
          loading="lazy"
        />
      </div>
    </article>
  )
}

function App() {
  useRevealOnScroll()

  return (
    <main>
      <section className="hero" aria-label="因势工作室首页">
        <img
          className="hero-image"
          src={HERO_IMAGE}
          alt=""
          decoding="async"
          aria-hidden="true"
        />
        <div className="hero-fallback" aria-hidden="true">
          <span className="light-ribbon ribbon-a" />
          <span className="light-ribbon ribbon-b" />
          <span className="surface-lines" />
        </div>
        <header className="site-header" data-reveal="hero-header">
          <a className="brand" href="#top" aria-label="因势工作室首页">
            <LogoMark />
            <span className="brand-copy">
              <strong>因势工作室</strong>
              <em>AI STUDIO</em>
            </span>
          </a>
          <a className="header-link" href="#contact">
            联系
          </a>
        </header>
        <div className="hero-content" data-reveal="hero-copy">
          <h1>
            <span>顺势而为</span>
            <span>把 AI 落到</span>
            <span>业务现场</span>
          </h1>
          <p>为个人、工作室与公司搭建可持续运转的 AI 工作流、网站与自动化工具。</p>
        </div>
        <a className="scroll-cue" href="#projects" aria-label="查看精选项目">
          <span />
        </a>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <BackgroundParticles />
        <div className="section-head" data-reveal="section-head">
          <p>Project Systems</p>
          <h2 id="projects-title">精选项目</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} revealOrder={index} />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <BackgroundParticles variant="contact" />
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy" data-reveal="contact-copy">
          <LogoMark />
          <h2 id="contact-title">
            <span>把一个可运行的 AI 系统，</span>
            <span>放进你的业务里。</span>
          </h2>
          <p>联系因势工作室</p>
          <span>江西 · 赣州</span>
        </div>
        <div className="qr-panel" data-reveal="contact-qr">
          <div className="qr-frame">
            <img src={assetUrl('assets/contact-qr.jpg')} alt="因势工作室微信二维码" />
          </div>
          <p>微信扫码添加</p>
        </div>
        <footer className="footer-row" data-reveal="contact-footer">
          <span>因势工作室</span>
          <span>AI workflow · websites · automation</span>
        </footer>
      </section>
    </main>
  )
}

export default App
