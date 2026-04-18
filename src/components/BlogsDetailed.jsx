import React, { useState, useEffect } from 'react';
import './BlogsDetailed.css';

/* ═══════════════════════════════════════════════════════════════════════════
   DIAGRAM COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Blog 1: Multi-model visitor analytics pipeline ── */
const VisitorPipelineDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 760 210" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="a-vp" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L9 5L1 9" fill="none" stroke="#EF9F27"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* Node 1 — Camera */}
            <rect x="10" y="79" width="110" height="52" rx="8"
                fill="rgba(239,159,39,0.08)" stroke="rgba(239,159,39,0.45)" strokeWidth="1" />
            <text x="65" y="101" textAnchor="middle" className="diag-label">Camera</text>
            <text x="65" y="117" textAnchor="middle" className="diag-sublabel">Live stream</text>

            {/* Arrow 1 → 2 */}
            <line x1="120" y1="105" x2="147" y2="105"
                stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-vp)" strokeOpacity="0.8" />

            {/* Node 2 — YOLOv8 */}
            <rect x="147" y="79" width="122" height="52" rx="8"
                fill="rgba(239,159,39,0.08)" stroke="rgba(239,159,39,0.45)" strokeWidth="1" />
            <text x="208" y="101" textAnchor="middle" className="diag-label">YOLOv8</text>
            <text x="208" y="117" textAnchor="middle" className="diag-sublabel">Detect + Track</text>

            {/* Split lines from YOLO right edge */}
            <line x1="269" y1="105" x2="298" y2="59"
                stroke="#EF9F27" strokeWidth="1.4" markerEnd="url(#a-vp)" strokeOpacity="0.6" />
            <line x1="269" y1="105" x2="298" y2="154"
                stroke="#EF9F27" strokeWidth="1.4" markerEnd="url(#a-vp)" strokeOpacity="0.6" />

            {/* Node 3a — Caffe */}
            <rect x="298" y="33" width="130" height="52" rx="8"
                fill="rgba(239,159,39,0.06)" stroke="rgba(239,159,39,0.35)" strokeWidth="1" />
            <text x="363" y="55" textAnchor="middle" className="diag-label">Caffe</text>
            <text x="363" y="71" textAnchor="middle" className="diag-sublabel">Age / Gender</text>

            {/* Node 3b — Azure Vision */}
            <rect x="298" y="128" width="130" height="52" rx="8"
                fill="rgba(239,159,39,0.06)" stroke="rgba(239,159,39,0.35)" strokeWidth="1" />
            <text x="363" y="150" textAnchor="middle" className="diag-label">Azure Vision</text>
            <text x="363" y="166" textAnchor="middle" className="diag-sublabel">Emotion / Engage</text>

            {/* Merge lines → Aggregation */}
            <line x1="428" y1="59" x2="457" y2="100"
                stroke="#EF9F27" strokeWidth="1.4" markerEnd="url(#a-vp)" strokeOpacity="0.6" />
            <line x1="428" y1="154" x2="457" y2="110"
                stroke="#EF9F27" strokeWidth="1.4" markerEnd="url(#a-vp)" strokeOpacity="0.6" />

            {/* Node 4 — Aggregation */}
            <rect x="457" y="79" width="130" height="52" rx="8"
                fill="rgba(239,159,39,0.08)" stroke="rgba(239,159,39,0.45)" strokeWidth="1" />
            <text x="522" y="101" textAnchor="middle" className="diag-label">Aggregation</text>
            <text x="522" y="117" textAnchor="middle" className="diag-sublabel">Pandas + Logic</text>

            {/* Arrow 4 → 5 */}
            <line x1="587" y1="105" x2="614" y2="105"
                stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-vp)" strokeOpacity="0.8" />

            {/* Node 5 — Power BI (highlighted) */}
            <rect x="614" y="79" width="132" height="52" rx="8"
                fill="rgba(239,159,39,0.14)" stroke="rgba(239,159,39,0.65)" strokeWidth="1.5" />
            <text x="680" y="101" textAnchor="middle" className="diag-label">Power BI</text>
            <text x="680" y="117" textAnchor="middle" className="diag-sublabel">KPI Dashboard</text>
        </svg>
        <figcaption className="diagram-caption">
            Staged multi-model pipeline — each model handles what it does best, minimising latency and API cost
        </figcaption>
    </figure>
);

/* ── Blog 1: Accuracy metrics grid (HTML, not SVG) ── */
const VisitorMetrics = () => (
    <div className="metric-grid">
        <div className="metric-card">
            <div className="metric-value">92%</div>
            <div className="metric-label">Detection accuracy on 500 validated frames</div>
        </div>
        <div className="metric-card">
            <div className="metric-value">4</div>
            <div className="metric-label">KPIs surfaced to the dashboard</div>
        </div>
        <div className="metric-card">
            <div className="metric-value">3</div>
            <div className="metric-label">Models in the staged pipeline</div>
        </div>
        <div className="metric-card">
            <div className="metric-value">1/3s</div>
            <div className="metric-label">Max Azure API call rate per tracked ID</div>
        </div>
    </div>
);

/* ── Blog 2: RAG architecture vertical pipeline ── */
const RAGArchDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 420 490" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="a-rag" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L9 5L1 9" fill="none" stroke="#EF9F27"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* Each node: w=240, x=90, centered in 420 */}
            {[
                { y: 10, label: 'PDF Input', sub: 'Uploaded document' },
                { y: 80, label: 'Text Extraction', sub: 'PyPDF2 + Tesseract OCR fallback' },
                { y: 150, label: 'Chunking', sub: 'chunk_size=800, overlap=150' },
                { y: 220, label: 'Embeddings', sub: 'all-MiniLM-L6-v2' },
                { y: 290, label: 'FAISS Index', sub: 'L2 distance, exhaustive search' },
                { y: 360, label: 'Groq LLaMA 3.3 70B', sub: 'Grounded answer generation' },
                { y: 430, label: 'Streamlit UI', sub: 'Answer + page citations' },
            ].map((node, i) => (
                <g key={i}>
                    <rect x="90" y={node.y} width="240" height="52" rx="8"
                        fill={i === 6 ? 'rgba(239,159,39,0.14)' : 'rgba(239,159,39,0.07)'}
                        stroke={i === 6 ? 'rgba(239,159,39,0.65)' : 'rgba(239,159,39,0.38)'}
                        strokeWidth={i === 6 ? 1.5 : 1} />
                    <text x="210" y={node.y + 22} textAnchor="middle" className="diag-label">{node.label}</text>
                    <text x="210" y={node.y + 38} textAnchor="middle" className="diag-sublabel">{node.sub}</text>
                    {i < 6 && (
                        <line x1="210" y1={node.y + 52} x2="210" y2={node.y + 68}
                            stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-rag)" strokeOpacity="0.75" />
                    )}
                </g>
            ))}
        </svg>
        <figcaption className="diagram-caption">
            End-to-end RAG pipeline — from raw PDF to grounded, page-cited answers
        </figcaption>
    </figure>
);

/* ── Blog 2: Chunking overlap visual ── */
const ChunkingDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 660 155" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            {/* Full document bar */}
            <rect x="20" y="15" width="620" height="30" rx="6"
                fill="rgba(239,159,39,0.06)" stroke="rgba(239,159,39,0.3)" strokeWidth="1" />
            <text x="330" y="35" textAnchor="middle" className="diag-sublabel">Full document text</text>

            {/* Chunk 1 */}
            <rect x="20" y="65" width="260" height="30" rx="5"
                fill="rgba(239,159,39,0.18)" stroke="rgba(239,159,39,0.6)" strokeWidth="1.2" />
            <text x="150" y="85" textAnchor="middle" className="diag-label">Chunk 1</text>

            {/* Chunk 2 — overlaps chunk 1 by ~60px */}
            <rect x="215" y="100" width="260" height="30" rx="5"
                fill="rgba(239,159,39,0.12)" stroke="rgba(239,159,39,0.5)" strokeWidth="1" />
            <text x="345" y="120" textAnchor="middle" className="diag-label">Chunk 2</text>

            {/* Chunk 3 — overlaps chunk 2 by ~60px */}
            <rect x="415" y="65" width="245" height="30" rx="5"
                fill="rgba(239,159,39,0.10)" stroke="rgba(239,159,39,0.4)" strokeWidth="1" />
            <text x="537" y="85" textAnchor="middle" className="diag-label">Chunk 3</text>

            {/* Overlap bracket labels */}
            <line x1="215" y1="58" x2="280" y2="58" stroke="#EF9F27" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2" />
            <text x="247" y="52" textAnchor="middle" className="diag-sublabel" style={{ fontSize: '9px' }}>overlap</text>

            <line x1="415" y1="58" x2="475" y2="58" stroke="#EF9F27" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3,2" />
            <text x="445" y="52" textAnchor="middle" className="diag-sublabel" style={{ fontSize: '9px' }}>overlap</text>

            {/* Page metadata badge */}
            <rect x="544" y="138" width="100" height="14" rx="3"
                fill="rgba(239,159,39,0.1)" stroke="rgba(239,159,39,0.3)" strokeWidth="0.8" />
            <text x="594" y="148" textAnchor="middle" className="diag-sublabel" style={{ fontSize: '9px' }}>+ page metadata</text>
        </svg>
        <figcaption className="diagram-caption">
            Sliding window chunking with 150-character overlap — semantic boundaries are preserved, page metadata attached before splitting
        </figcaption>
    </figure>
);

/* ── Blog 3: Sensor → features → model flow ── */
const SensorFlowDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 700 200" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="a-sf" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L9 5L1 9" fill="none" stroke="#EF9F27"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* Left: 3 sensor inputs */}
            {[
                { y: 20, label: 'Vibration', sub: '3-axis · 1 kHz' },
                { y: 84, label: 'Temperature', sub: 'Winding · 1 Hz' },
                { y: 148, label: 'Load', sub: 'Torque · RPM' },
            ].map((s, i) => (
                <g key={i}>
                    <rect x="10" y={s.y} width="145" height="48" rx="7"
                        fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.38)" strokeWidth="1" />
                    <text x="82" y={s.y + 20} textAnchor="middle" className="diag-label">{s.label}</text>
                    <text x="82" y={s.y + 36} textAnchor="middle" className="diag-sublabel">{s.sub}</text>
                    <line x1="155" y1={s.y + 24} x2="200" y2="100"
                        stroke="#EF9F27" strokeWidth="1.3" markerEnd="url(#a-sf)" strokeOpacity="0.55" />
                </g>
            ))}

            {/* Centre: Feature extraction */}
            <rect x="200" y="74" width="160" height="52" rx="8"
                fill="rgba(239,159,39,0.10)" stroke="rgba(239,159,39,0.5)" strokeWidth="1.2" />
            <text x="280" y="96" textAnchor="middle" className="diag-label">Feature Extraction</text>
            <text x="280" y="112" textAnchor="middle" className="diag-sublabel">RMS, Kurtosis, PSD, Drift</text>

            {/* Arrow to model */}
            <line x1="360" y1="100" x2="393" y2="100"
                stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-sf)" strokeOpacity="0.8" />

            {/* Right: XGBoost model */}
            <rect x="393" y="74" width="145" height="52" rx="8"
                fill="rgba(239,159,39,0.10)" stroke="rgba(239,159,39,0.5)" strokeWidth="1.2" />
            <text x="465" y="96" textAnchor="middle" className="diag-label">XGBoost</text>
            <text x="465" y="112" textAnchor="middle" className="diag-sublabel">RUL Regression</text>

            {/* Arrow to output */}
            <line x1="538" y1="100" x2="570" y2="100"
                stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-sf)" strokeOpacity="0.8" />

            {/* Output: RUL */}
            <rect x="570" y="74" width="120" height="52" rx="8"
                fill="rgba(239,159,39,0.16)" stroke="rgba(239,159,39,0.65)" strokeWidth="1.5" />
            <text x="630" y="96" textAnchor="middle" className="diag-label">RUL (hours)</text>
            <text x="630" y="112" textAnchor="middle" className="diag-sublabel">+ confidence band</text>
        </svg>
        <figcaption className="diagram-caption">
            Three sensor streams feed a single feature extraction stage before the regression model
        </figcaption>
    </figure>
);

/* ── Blog 3: Model comparison bar chart (lower RMSE = better) ── */
const ModelCompareChart = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 540 190" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            {/* Title */}
            <text x="270" y="22" textAnchor="middle" className="diag-label">Validation RMSE — lower is better</text>

            {/* Bars */}
            {[
                { label: 'Linear Regression', rmse: 45, barW: 360, color: 'rgba(220,80,70,0.55)', border: 'rgba(220,80,70,0.8)', y: 42 },
                { label: 'Random Forest', rmse: 28, barW: 224, color: 'rgba(239,159,39,0.45)', border: 'rgba(239,159,39,0.75)', y: 92 },
                { label: 'XGBoost', rmse: 18, barW: 144, color: 'rgba(80,190,100,0.45)', border: 'rgba(80,190,100,0.75)', y: 142 },
            ].map((m, i) => (
                <g key={i}>
                    <text x="145" y={m.y + 22} textAnchor="end" className="diag-sublabel">{m.label}</text>
                    <rect x="150" y={m.y} width={m.barW} height="36" rx="5"
                        fill={m.color} stroke={m.border} strokeWidth="1" />
                    <text x={150 + m.barW + 8} y={m.y + 22} textAnchor="start"
                        className="diag-label" style={{ fontSize: '11px' }}>RMSE {m.rmse}</text>
                </g>
            ))}

            {/* Axis */}
            <line x1="150" y1="183" x2="520" y2="183" stroke="rgba(239,159,39,0.3)" strokeWidth="0.8" />
            <text x="335" y="183" textAnchor="middle" className="diag-sublabel" dominantBaseline="hanging" style={{ fontSize: '9px' }}>↑ worse</text>
        </svg>
        <figcaption className="diagram-caption">
            XGBoost outperformed both baselines with the lowest validation RMSE and fastest inference — critical for real-time dashboard updates
        </figcaption>
    </figure>
);

/* ── Blog 4: NL2SQL branching pipeline ── */
const NL2SQLDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 720 340" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="a-nl" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M1 1L9 5L1 9" fill="none" stroke="#EF9F27"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* Row 1: User Query */}
            <rect x="260" y="10" width="200" height="48" rx="8"
                fill="rgba(239,159,39,0.08)" stroke="rgba(239,159,39,0.45)" strokeWidth="1" />
            <text x="360" y="31" textAnchor="middle" className="diag-label">User Query</text>
            <text x="360" y="47" textAnchor="middle" className="diag-sublabel">Natural language input</text>

            {/* Arrow → Intent Classifier */}
            <line x1="360" y1="58" x2="360" y2="83" stroke="#EF9F27" strokeWidth="1.5" markerEnd="url(#a-nl)" strokeOpacity="0.8" />

            {/* Row 2: Intent Classifier */}
            <rect x="230" y="83" width="260" height="48" rx="8"
                fill="rgba(239,159,39,0.10)" stroke="rgba(239,159,39,0.5)" strokeWidth="1.2" />
            <text x="360" y="104" textAnchor="middle" className="diag-label">Intent Classifier</text>
            <text x="360" y="120" textAnchor="middle" className="diag-sublabel">LangChain routing chain</text>

            {/* Three fan-out arrows */}
            <line x1="280" y1="131" x2="110" y2="175" stroke="#EF9F27" strokeWidth="1.3" markerEnd="url(#a-nl)" strokeOpacity="0.6" />
            <line x1="360" y1="131" x2="360" y2="175" stroke="#EF9F27" strokeWidth="1.3" markerEnd="url(#a-nl)" strokeOpacity="0.6" />
            <line x1="440" y1="131" x2="610" y2="175" stroke="#EF9F27" strokeWidth="1.3" markerEnd="url(#a-nl)" strokeOpacity="0.6" />

            {/* Row 3: Three paths */}
            {[
                { x: 15, label: 'SQL Generator', sub: 'Schema + fiscal context', gold: false },
                { x: 250, label: 'RAG Pipeline', sub: 'FAISS doc retrieval', gold: false },
                { x: 505, label: 'Direct LLM', sub: 'Greeting / clarify', gold: false },
            ].map((n, i) => (
                <g key={i}>
                    <rect x={n.x} y="175" width="200" height="48" rx="8"
                        fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.35)" strokeWidth="1" />
                    <text x={n.x + 100} y="196" textAnchor="middle" className="diag-label">{n.label}</text>
                    <text x={n.x + 100} y="212" textAnchor="middle" className="diag-sublabel">{n.sub}</text>
                </g>
            ))}

            {/* Auto-retry badge under SQL Generator */}
            <rect x="50" y="232" width="130" height="28" rx="5"
                fill="rgba(239,159,39,0.05)" stroke="rgba(239,159,39,0.25)" strokeWidth="0.8" />
            <text x="115" y="250" textAnchor="middle" className="diag-sublabel">↻ SQL auto-retry</text>

            {/* Three merge arrows */}
            <line x1="115" y1="223" x2="300" y2="272" stroke="#EF9F27" strokeWidth="1.2" markerEnd="url(#a-nl)" strokeOpacity="0.55" />
            <line x1="360" y1="223" x2="360" y2="272" stroke="#EF9F27" strokeWidth="1.2" markerEnd="url(#a-nl)" strokeOpacity="0.55" />
            <line x1="605" y1="223" x2="420" y2="272" stroke="#EF9F27" strokeWidth="1.2" markerEnd="url(#a-nl)" strokeOpacity="0.55" />

            {/* Row 4: Response Formatter */}
            <rect x="220" y="272" width="280" height="48" rx="8"
                fill="rgba(239,159,39,0.13)" stroke="rgba(239,159,39,0.6)" strokeWidth="1.4" />
            <text x="360" y="293" textAnchor="middle" className="diag-label">Response Formatter</text>
            <text x="360" y="309" textAnchor="middle" className="diag-sublabel">LLM → plain language → React Chat UI</text>
        </svg>
        <figcaption className="diagram-caption">
            Three-branch intent routing — queries land in the right pipeline without the user knowing any SQL exists
        </figcaption>
    </figure>
);

/* ── Blog 5: OEE = Availability × Performance × Quality ── */
const OEEFormulaDiagram = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 680 140" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            {/* Box 1: Availability */}
            <rect x="15" y="20" width="138" height="100" rx="9"
                fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.38)" strokeWidth="1" />
            <text x="84" y="48" textAnchor="middle" className="diag-label">Availability</text>
            <text x="84" y="68" textAnchor="middle" className="diag-sublabel">(Planned − Down)</text>
            <text x="84" y="82" textAnchor="middle" className="diag-sublabel">÷ Planned</text>
            <text x="84" y="104" textAnchor="middle" className="diag-label" style={{ fill: '#EF9F27', fontSize: '13px' }}>85–95%</text>

            {/* × */}
            <text x="163" y="77" textAnchor="middle" className="diag-label" style={{ fontSize: '20px', fill: '#EF9F27' }}>×</text>

            {/* Box 2: Performance */}
            <rect x="178" y="20" width="138" height="100" rx="9"
                fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.38)" strokeWidth="1" />
            <text x="247" y="48" textAnchor="middle" className="diag-label">Performance</text>
            <text x="247" y="68" textAnchor="middle" className="diag-sublabel">(Output × Ideal CT)</text>
            <text x="247" y="82" textAnchor="middle" className="diag-sublabel">÷ Run time</text>
            <text x="247" y="104" textAnchor="middle" className="diag-label" style={{ fill: '#EF9F27', fontSize: '13px' }}>80–90%</text>

            {/* × */}
            <text x="326" y="77" textAnchor="middle" className="diag-label" style={{ fontSize: '20px', fill: '#EF9F27' }}>×</text>

            {/* Box 3: Quality */}
            <rect x="341" y="20" width="138" height="100" rx="9"
                fill="rgba(239,159,39,0.07)" stroke="rgba(239,159,39,0.38)" strokeWidth="1" />
            <text x="410" y="48" textAnchor="middle" className="diag-label">Quality</text>
            <text x="410" y="68" textAnchor="middle" className="diag-sublabel">Good units</text>
            <text x="410" y="82" textAnchor="middle" className="diag-sublabel">÷ Total produced</text>
            <text x="410" y="104" textAnchor="middle" className="diag-label" style={{ fill: '#EF9F27', fontSize: '13px' }}>95–99%</text>

            {/* = */}
            <text x="490" y="77" textAnchor="middle" className="diag-label" style={{ fontSize: '20px', fill: '#EF9F27' }}>=</text>

            {/* Box 4: OEE (highlighted) */}
            <rect x="505" y="20" width="160" height="100" rx="9"
                fill="rgba(239,159,39,0.16)" stroke="rgba(239,159,39,0.65)" strokeWidth="1.8" />
            <text x="585" y="55" textAnchor="middle" className="diag-label" style={{ fontSize: '15px' }}>OEE</text>
            <text x="585" y="77" textAnchor="middle" className="diag-sublabel">World class: 85%+</text>
            <text x="585" y="104" textAnchor="middle" className="diag-label" style={{ fill: '#EF9F27', fontSize: '14px' }}>60–85% typical</text>
        </svg>
        <figcaption className="diagram-caption">
            OEE as a product of three independent loss factors — each component can be targeted separately for improvement
        </figcaption>
    </figure>
);

/* ── Blog 5: Monte Carlo distribution curve ── */
const MonteCarloChart = () => (
    <figure className="diagram-figure">
        <svg viewBox="0 0 640 220" className="blog-diagram" xmlns="http://www.w3.org/2000/svg">
            {/* Title */}
            <text x="320" y="20" textAnchor="middle" className="diag-label">Simulated OEE Distribution (10,000 scenarios)</text>

            {/* Shaded region between P10 and P90 */}
            <path d="M 180 172 C 220 100 280 42 320 36 C 360 42 420 100 460 172 Z"
                fill="rgba(239,159,39,0.12)" />

            {/* Bell curve */}
            <path d="M 70 172 C 130 172 180 42 320 36 C 460 42 510 172 570 172"
                fill="none" stroke="#EF9F27" strokeWidth="2" strokeOpacity="0.75" />

            {/* P10 line */}
            <line x1="180" y1="172" x2="180" y2="98" stroke="#EF9F27" strokeWidth="1.2"
                strokeDasharray="4,3" strokeOpacity="0.7" />
            <text x="180" y="90" textAnchor="middle" className="diag-sublabel">P10</text>
            <text x="180" y="185" textAnchor="middle" className="diag-sublabel">62%</text>

            {/* P50 line (peak) */}
            <line x1="320" y1="172" x2="320" y2="38" stroke="#EF9F27" strokeWidth="1.5"
                strokeDasharray="4,3" strokeOpacity="0.9" />
            <text x="320" y="30" textAnchor="middle" className="diag-label">P50</text>
            <text x="320" y="185" textAnchor="middle" className="diag-label" style={{ fill: '#EF9F27' }}>74%</text>

            {/* P90 line */}
            <line x1="460" y1="172" x2="460" y2="98" stroke="#EF9F27" strokeWidth="1.2"
                strokeDasharray="4,3" strokeOpacity="0.7" />
            <text x="460" y="90" textAnchor="middle" className="diag-sublabel">P90</text>
            <text x="460" y="185" textAnchor="middle" className="diag-sublabel">84%</text>

            {/* X axis */}
            <line x1="60" y1="172" x2="580" y2="172" stroke="rgba(239,159,39,0.35)" strokeWidth="1" />

            {/* 70% world-class threshold line */}
            <line x1="60" y1="145" x2="580" y2="145" stroke="rgba(239,159,39,0.2)" strokeWidth="0.8" strokeDasharray="6,4" />
            <text x="572" y="141" textAnchor="end" className="diag-sublabel" style={{ fontSize: '9px' }}>70% threshold</text>

            {/* Axis labels */}
            <text x="70" y="195" textAnchor="middle" className="diag-sublabel">50%</text>
            <text x="570" y="195" textAnchor="middle" className="diag-sublabel">95%</text>
            <text x="320" y="210" textAnchor="middle" className="diag-sublabel">OEE Value →</text>

            {/* Shaded band annotation */}
            <text x="320" y="130" textAnchor="middle" className="diag-sublabel" style={{ fontSize: '9px' }}>Confidence band (P10–P90)</text>
        </svg>
        <figcaption className="diagram-caption">
            A single simulation run produces a full probability distribution — P10 is the pessimistic case, P90 the optimistic case
        </figcaption>
    </figure>
);


/* ═══════════════════════════════════════════════════════════════════════════
   BLOGS DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const blogsData = [
    {
        id: 1,
        title: 'How I Built a Real-Time Visitor Behavior Analytics System Using YOLO, Caffe, and Azure Vision Service',
        tags: 'computer vision, YOLO, Azure Vision, OpenCV, Python, AI, retail analytics',
        readTime: '~8 min',
        description: 'When I joined MercuryMinds as a Machine Learning Trainee, the problem on the table was straightforward to state but hard to solve: how do you measure what visitors actually do at a booth — not just how many showed up, but how long they stayed and how engaged they were?',
        content: (
            <>
                <h1>How I Built a Real-Time Visitor Behavior Analytics System Using YOLO, Caffe, and Azure Vision Service</h1>
                <p><strong>Tags:</strong> computer vision, YOLO, Azure Vision, OpenCV, Python, AI, retail analytics &nbsp;·&nbsp; <strong>Reading time:</strong> ~8 min</p>
                <hr />

                <p>When I joined MercuryMinds as a Machine Learning Trainee, the problem on the table was straightforward to state but hard to solve: <em>how do you measure what visitors actually do at a booth — not just how many showed up, but how long they stayed, where they looked, and how staff interactions influenced engagement?</em></p>
                <p>Traditional counters give you headcount. We needed behavior. This is the story of how we built a system that achieved 92% accuracy on visitor behavior detection using a multi-model vision pipeline.</p>

                <h2>The Problem With Single-Model Approaches</h2>
                <p>The first instinct in any computer vision project is to reach for one model and make it do everything. For retail analytics, this doesn't work:</p>
                <ul>
                    <li><strong>YOLO</strong> excels at fast object detection and person localization, but it doesn't understand demographics or emotional cues.</li>
                    <li><strong>Caffe-based age/gender classifiers</strong> are purpose-built for demographic inference, but they require a clean, cropped face region as input — not a full scene frame.</li>
                    <li><strong>Cloud vision APIs</strong> (Azure Vision, Amazon Rekognition) have pre-trained models for emotion and engagement inference, but sending every frame to the cloud is both expensive and slow.</li>
                </ul>
                <p>The solution was a staged pipeline where each model handles exactly what it was designed for.</p>

                <h2>Architecture Overview</h2>
                <VisitorPipelineDiagram />

                <p>The camera stream feeds into YOLOv8, which runs at 20–30 FPS on a mid-range GPU and produces person bounding boxes with tracking IDs. These IDs allow us to compute dwell time per individual across frames — something simple headcount systems cannot do.</p>
                <p>From YOLO's output, the pipeline splits: bounding boxes go to Caffe for demographic inference, while sampled face crops (at a maximum rate of one per three seconds per tracked ID) go to Azure Vision for emotion scoring. This sampling strategy kept API costs controlled without losing meaningful engagement data.</p>

                <h2>Key Metrics We Tracked</h2>
                <VisitorMetrics />

                <p><strong>Foot Traffic</strong> — unique person IDs detected per time window, with a re-identification buffer to avoid double-counting visitors who briefly left and re-entered the frame.</p>
                <p><strong>Dwell Time</strong> — duration a person's tracking ID remained within a defined zone polygon. OpenCV's polygon masking let us distinguish "active booth zones" from simple pass-through areas.</p>
                <p><strong>Staff Interaction Events</strong> — logged whenever a detected staff badge region came within a proximity threshold of a visitor bounding box. The badge classifier used color and shape features, not face recognition.</p>
                <p><strong>Engagement Score</strong> — a composite metric weighted across dwell time (40%), face attention score from Azure (40%), and the interaction flag (20%). This produced a single numeric output that operations teams could act on immediately.</p>

                <h2>The Data Pipeline</h2>
                <p>Real-time processing used a producer-consumer queue pattern. OpenCV's <code>VideoCapture</code> ran on a dedicated capture thread, feeding frames into a bounded queue with a maximum size of ten frames — preventing memory buildup if the inference thread fell behind. The YOLO inference thread consumed from this queue and pushed results into a second queue consumed by the Caffe and Azure modules.</p>
                <p>Azure Vision was called selectively: only on frames where a face region of sufficient resolution was detected, and never more than once per three seconds per tracked person ID. This kept API costs predictable without losing meaningful demographic signal.</p>

                <h2>Results and Stakeholder Impact</h2>
                <p>The Power BI dashboard surfaced four operational insights: peak traffic windows by hour and day, average dwell time by zone, demographic breakdown by age group and gender, and staff interaction rate — the percentage of visitors who received staff engagement versus those who passed through unattended. Operations teams used this data to adjust staffing schedules and booth layout decisions.</p>
                <p>The 92% accuracy figure came from a manual validation session comparing ground-truth annotations for 500 frames against pipeline detections. The main error source was occlusion — when multiple visitors overlapped in frame, tracking IDs occasionally merged.</p>

                <h2>What I'd Do Differently</h2>
                <ol>
                    <li><strong>ByteTrack instead of basic YOLO tracking</strong> — ByteTrack handles occlusion significantly better for multi-person dense scenes and would reduce the merge errors we saw.</li>
                    <li><strong>Local face analysis model</strong> — with enough labeled data, a locally deployed FaceNet or InsightFace model would eliminate Azure API dependency and reduce latency to milliseconds.</li>
                    <li><strong>Edge deployment</strong> — for permanent installations, running the entire pipeline on an NVIDIA Jetson device at the booth removes network dependency entirely and cuts operating costs.</li>
                </ol>

                <h2>Takeaway</h2>
                <p>Multi-model pipelines aren't just an engineering pattern — they're a practical necessity when no single model covers your full inference surface. The key is designing clean boundaries between stages: each model gets exactly the input it was designed for, and the aggregation layer owns the business logic. Start with YOLO for detection and tracking, bring in specialized models only where needed, and be deliberate about what you send to the cloud versus what you process locally.</p>
            </>
        )
    },
    {
        id: 2,
        title: 'Building a Production-Ready RAG PDF Chatbot with Groq LLaMA 3.3 70B and FAISS',
        tags: 'RAG, LangChain, FAISS, Groq, LLaMA, Python, generative AI, PDF chatbot',
        readTime: '~9 min',
        description: 'Retrieval-Augmented Generation sounds elegant in theory but has a surprising number of failure modes in practice. The most interesting engineering decisions weren\'t about the LLM at all — they were about chunking, OCR fallback, and making sure answers were actually grounded in the document.',
        content: (
            <>
                <h1>Building a Production-Ready RAG PDF Chatbot with Groq LLaMA 3.3 70B and FAISS</h1>
                <p><strong>Tags:</strong> RAG, LangChain, FAISS, Groq, LLaMA, Python, generative AI, PDF chatbot &nbsp;·&nbsp; <strong>Reading time:</strong> ~9 min</p>
                <hr />

                <p>Retrieval-Augmented Generation (RAG) is one of those concepts that sounds elegant in theory but has a surprising number of failure modes in practice. I built a RAG-based PDF Q&amp;A system using Groq's LLaMA 3.3 70B, FAISS for vector search, and Streamlit for the interface — and the most interesting engineering decisions weren't about the LLM at all. They were about chunking, OCR fallback, and making sure answers were actually grounded in the document.</p>

                <h2>Why RAG for PDFs?</h2>
                <p>The naive approach to "chat with your PDF" is to dump the entire document into the LLM's context window. This fails for three reasons:</p>
                <ol>
                    <li><strong>Context limits</strong> — even large-context models have limits, and long documents exceed them.</li>
                    <li><strong>Attention degradation</strong> — LLMs pay less reliable attention to content buried in very long contexts. This is the well-documented "lost in the middle" problem.</li>
                    <li><strong>Cost</strong> — sending a 200-page PDF on every query is both expensive and slow.</li>
                </ol>
                <p>RAG solves this by indexing document chunks into a vector store and retrieving only the top-k most relevant chunks at query time. The LLM answers from those chunks, not from the full document.</p>

                <h2>System Architecture</h2>
                <RAGArchDiagram />

                <h2>The Chunking Problem — and How I Solved It</h2>
                <p>The most common mistake in RAG implementations is treating chunking as a configuration detail. It isn't. Bad chunking is the single biggest cause of irrelevant retrievals.</p>

                <ChunkingDiagram />

                <p><strong>Problem 1: Chunks that split mid-sentence.</strong> A simple character-count splitter cuts sentences in half. The resulting chunk embeddings are semantically incomplete and retrieve poorly. The <code>RecursiveCharacterTextSplitter</code> solves this by trying to split on paragraph breaks first, then sentences, then words, and finally characters as a last resort — preserving semantic units at every level.</p>
                <p><strong>Problem 2: Losing page context.</strong> When a chunk is retrieved and used to construct an answer, the user needs to know which page it came from. This requires attaching page metadata to each chunk <em>before</em> splitting — not reconstructing it afterward. My implementation extracts text page-by-page and tags each chunk with its source page number before it enters the vector store.</p>
                <p><strong>Problem 3: Overlap-aware deduplication.</strong> With a chunk overlap of 150 characters, adjacent chunks share content. If two overlapping chunks are retrieved for the same query, the LLM sees near-duplicate context. A deduplication step drops any retrieved chunk whose token overlap with an already-selected chunk exceeds 60%, keeping the context window clean.</p>

                <h2>OCR Fallback for Scanned Pages</h2>
                <p>Not all PDFs have extractable text. Scanned documents, image-based reports, and older research papers often have pages where standard text extraction returns an empty string or garbage characters. My extraction layer uses PyPDF2 as the primary method and falls back to Tesseract OCR whenever a page returns fewer than 50 characters — a threshold that catches pages where the library extracts only stray characters but no real content.</p>

                <h2>Groq for Fast Inference</h2>
                <p>Groq's inference speed on LLaMA 3.3 70B runs at 300–800 tokens per second for generation — significantly faster than the same model on a standard GPU. For a chat interface where response latency directly affects the user experience, this matters.</p>
                <p>The system prompt is where grounding happens. The instruction tells the model to answer only from the retrieved excerpts, to state "I could not find this information in the document" when the answer isn't present, and to end every response by citing the page numbers of the excerpts used. A single well-written system prompt eliminates the majority of hallucination risk without any code-level guardrails.</p>

                <h2>FAISS Index Setup</h2>
                <p>Chunks are embedded using the <code>all-MiniLM-L6-v2</code> sentence transformer and stored in a FAISS <code>IndexFlatL2</code> index — an exhaustive L2 distance search. At typical PDF scales (a few hundred chunks), exhaustive search runs in milliseconds and avoids the quantization errors that come with approximate indexes like <code>IndexIVFFlat</code>. At query time, the top four chunks by cosine similarity are retrieved and passed directly to the LLM prompt.</p>

                <h2>Lessons Learned</h2>
                <ul>
                    <li><strong>Chunking strategy matters more than model choice</strong> for retrieval quality — a better chunker with a smaller model outperforms a weak chunker with GPT-4.</li>
                    <li><strong>OCR fallback is not optional</strong> for real-world PDFs — assume some percentage of every document will be image-based.</li>
                    <li><strong>Page-level metadata must be preserved through the entire pipeline</strong>, not reconstructed at retrieval time.</li>
                    <li><strong>Groq's speed makes LLaMA 70B practical</strong> for real-time chat without the cost of OpenAI's frontier models.</li>
                </ul>
            </>
        )
    },
    {
        id: 3,
        title: 'Predicting EV Motor Remaining Useful Life from Vibration and Temperature Signals',
        tags: 'predictive maintenance, RUL prediction, time-series, machine learning, EV, Python, regression, manufacturing',
        readTime: '~8 min',
        description: 'RUL prediction is one of the most practically valuable applications of machine learning in manufacturing — and one of the most under-documented. Most tutorials work with the NASA C-MAPSS dataset and stop there. Real industrial data is messier, degradation patterns are less clean, and the business stakes are higher.',
        content: (
            <>
                <h1>Predicting EV Motor Remaining Useful Life from Vibration and Temperature Signals</h1>
                <p><strong>Tags:</strong> predictive maintenance, RUL prediction, time-series, machine learning, EV, Python, regression, manufacturing &nbsp;·&nbsp; <strong>Reading time:</strong> ~8 min</p>
                <hr />

                <p>Remaining Useful Life (RUL) prediction is one of the most practically valuable applications of machine learning in manufacturing and engineering — and one of the most under-documented ones. Most tutorials work with the NASA C-MAPSS turbofan dataset and stop there. Real industrial data is messier, the degradation patterns are less clean, and the business stakes are higher.</p>
                <p>At BinaryWaves Solutions, I built an RUL prediction pipeline for EV motors using vibration and temperature time-series data. This post walks through the signal processing, feature engineering, and regression approach we used, along with the effects of degradation on torque output and motor lifetime.</p>

                <h2>Why RUL Matters for EV Motors</h2>
                <p>An EV motor failure in the field is expensive — not just the replacement cost, but the service logistics, downtime, and warranty liability. The ideal outcome is predicting degradation early enough to schedule maintenance before failure, while avoiding over-servicing motors that still have significant life remaining.</p>
                <p>The challenge: motor degradation doesn't announce itself cleanly. It shows up as subtle shifts in vibration amplitude, frequency content changes at bearing resonance frequencies, and gradual thermal drift under load — all of which require careful preprocessing to extract meaningful signal from noise.</p>

                <h2>Data: What We Worked With</h2>
                <ul>
                    <li><strong>Vibration</strong> — 3-axis accelerometer readings at 1 kHz sampling rate</li>
                    <li><strong>Temperature</strong> — motor winding temperature and ambient temperature at 1 Hz</li>
                    <li><strong>Operational load</strong> — torque command and RPM</li>
                    <li><strong>Labels</strong> — time-to-failure from end of test (for supervised regression)</li>
                </ul>
                <p>The dataset had significant noise from mounting vibration (not motor vibration), thermal sensor drift, and variable load profiles between test runs — none of which the benchmark datasets prepare you for.</p>

                <h2>Signal Preprocessing and Feature Engineering</h2>
                <SensorFlowDiagram />

                <p>Raw 1 kHz vibration data is too high-frequency for direct ML input. Features are extracted over sliding windows. Time-domain features — RMS, peak amplitude, and crest factor — capture signal energy and impulsiveness. Frequency-domain features — dominant frequency and spectral energy ratios across low (10–100 Hz) and high (100–500 Hz) bands — capture how energy is distributed across the spectrum as the motor degrades.</p>
                <p>Of these, <strong>kurtosis</strong> is the most diagnostically useful for early bearing fault detection. Healthy bearings produce vibration with kurtosis close to 3 (a Gaussian distribution of impact events). As surface defects develop, impacts become more impulsive and kurtosis rises sharply — often crossing a detectable threshold 100–200 cycles before other indicators show degradation.</p>
                <p>Temperature alone is a weak predictor, but the <em>rate of change</em> of winding temperature per unit torque is informative. A motor whose winding temperature rises faster than its baseline thermal profile — holding load constant — is showing signs of increased resistance, which is often the first detectable indicator of insulation degradation.</p>

                <table className="feature-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Domain</th>
                            <th>Why It Matters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>RMS vibration</td><td>Time</td><td>Overall signal energy — bearing wear proxy</td></tr>
                        <tr><td>Kurtosis</td><td>Time</td><td>Impulsiveness — early fault detection</td></tr>
                        <tr><td>Crest factor</td><td>Time</td><td>Peak-to-RMS ratio — structural looseness</td></tr>
                        <tr><td>Dominant frequency</td><td>Frequency</td><td>Main resonance peak — mechanical condition</td></tr>
                        <tr><td>Spectral energy HF/LF</td><td>Frequency</td><td>High-vs-low frequency energy balance</td></tr>
                        <tr><td>Thermal rise rate</td><td>Thermal</td><td>Temperature increase per torque unit</td></tr>
                        <tr><td>Kurtosis slope (rolling)</td><td>Trend</td><td>Rate of degradation change — most predictive</td></tr>
                    </tbody>
                </table>

                <h2>Model Comparison</h2>
                <ModelCompareChart />

                <p>The rolling trend features — specifically the slope of kurtosis over the past 100 windows — turned out to be the most predictive inputs. A motor whose kurtosis is at 4.5 but rising rapidly is more degraded than a motor at 5.0 that has been stable for 500 cycles. Gradient boosting captures this interaction naturally; linear models cannot.</p>

                <h2>Effect of Degradation on Torque and Lifetime</h2>
                <p>One of the more interesting findings was the relationship between vibration-based degradation indicators and measured torque output efficiency. As motors aged, torque efficiency — actual torque versus commanded torque at a fixed RPM — showed a consistent declining trend approximately 150–200 cycles before sensor-based indicators crossed alert thresholds. This suggests torque monitoring could serve as an earlier warning signal in systems where it's measured continuously.</p>
                <p>Motor lifetime also showed a strong thermal history dependency. Motors that ran frequently at above 85% of their rated temperature showed 30–40% shorter operational lifespans than motors operated within nominal thermal bands — even when vibration signatures appeared comparable. Temperature management is a stronger lever for life extension than vibration suppression alone.</p>

                <h2>Dashboard Integration</h2>
                <p>Predicted RUL values were pushed from a Flask inference endpoint to the OEE dashboard via a REST call at each shift change. The dashboard displayed the current RUL estimate per motor in hours, a 30-day trend chart, a P10–P90 confidence interval derived from bootstrapping predictions across 50 subsampled models, and an alert threshold with a recommended maintenance window.</p>

                <h2>What's Next</h2>
                <ul>
                    <li><strong>LSTM-based sequence modeling</strong> — XGBoost treats each feature window independently. An LSTM would capture the temporal dependencies across windows that gradient boosting misses, particularly for motors with non-monotonic degradation patterns.</li>
                    <li><strong>Anomaly detection pre-filter</strong> — flag windows with sensor dropout or calibration drift before they enter the RUL model and distort predictions.</li>
                    <li><strong>Transfer learning across motor types</strong> — a model trained on one motor SKU should be fine-tunable on a new SKU with minimal labeled data, reducing the cold-start problem for new motor variants.</li>
                </ul>
            </>
        )
    },
    {
        id: 4,
        title: 'Building a Natural Language BI Chatbot on Top of Tally ERP Using LangChain and Flask',
        tags: 'generative AI, LangChain, Tally ERP, business intelligence, NL2SQL, Flask, Python, RAG, FAISS',
        readTime: '~9 min',
        description: 'Business intelligence tools have a UX problem. Even well-designed dashboards require users to know which report to look at, how to filter it, and how to interpret what they see. What if a shop owner could just ask "what were my top 5 selling products last month?" and get an answer from their actual Tally data?',
        content: (
            <>
                <h1>Building a Natural Language BI Chatbot on Top of Tally ERP Using LangChain and Flask</h1>
                <p><strong>Tags:</strong> generative AI, LangChain, Tally ERP, business intelligence, NL2SQL, Flask, Python, RAG, FAISS &nbsp;·&nbsp; <strong>Reading time:</strong> ~9 min</p>
                <hr />

                <p>Business intelligence tools have a UX problem. Even well-designed dashboards require users to know which report to look at, how to filter it, and how to interpret what they see. Most small and mid-size businesses in India run their accounting and inventory on Tally ERP — a powerful but non-intuitive system where getting any non-standard report out requires navigating menus or writing TDL scripts.</p>
                <p>The question I set out to answer: <em>what if a shop owner or accountant could just ask "what were my top 5 selling products last month?" and get an answer in plain language, backed by their actual Tally data?</em></p>
                <p>That became Gen BI — a Python Flask + React platform with an AI chatbot layer over Tally ERP data.</p>

                <h2>Why Tally ERP Makes This Hard</h2>
                <ol>
                    <li><strong>Tally stores data in a proprietary binary format.</strong> Direct database access isn't available. Data must be extracted via TDL XML reports or the Tally ODBC connector, then synced to MySQL for query execution.</li>
                    <li><strong>Schema is implicit.</strong> There's no standard SQL schema you can hand to an LLM. Ledger names, group structures, and voucher types are customized per company — what one client calls "Sales Account" another calls "Revenue - Domestic".</li>
                    <li><strong>Fiscal year logic is non-standard.</strong> Tally uses April–March fiscal years. "Last year" in November 2025 means April 2024 – March 2025, not January–December 2024. The LLM doesn't know this without being told explicitly.</li>
                    <li><strong>Multi-company setups.</strong> Many mid-size businesses run multiple companies in Tally, requiring tenant-aware data isolation at every layer of the stack.</li>
                </ol>

                <h2>Architecture</h2>
                <NL2SQLDiagram />

                <p>Every query goes through an intent classifier first. Sales and inventory queries route to the NL2SQL pipeline. Document and policy questions route to a RAG pipeline backed by FAISS. Greetings and clarification requests go directly to the LLM for a conversational response. This routing prevents expensive SQL generation for queries that don't need it.</p>

                <h2>The NL2SQL Pipeline</h2>
                <p>The hardest part of NL2SQL for business data isn't generating the SQL — it's giving the LLM enough schema context to generate <em>correct</em> SQL.</p>
                <p><strong>Schema retrieval.</strong> Rather than dumping the entire schema into every prompt — expensive and often over the context limit — each table and column description is embedded and stored in FAISS. When a query arrives, the most relevant schema chunks are retrieved and injected into the SQL generation prompt. A query about "top selling products" retrieves descriptions of <code>sales_vouchers</code> and <code>stock_items</code> but not <code>ledger_masters</code>.</p>
                <p><strong>Fiscal year injection.</strong> Every SQL generation prompt includes a date context block computed at request time — the current fiscal year start and end dates, and today's date. This ensures that "last month" and "this quarter" resolve to the correct Tally fiscal periods without the model guessing.</p>
                <p><strong>SQL auto-retry.</strong> LLM-generated SQL fails approximately 20% of the time on first attempt — wrong column names, incorrect JOIN logic, missing aliases. Rather than surfacing these errors to the user, the pipeline catches SQL exceptions and re-prompts the model with the error message included. This auto-retry loop handles roughly 80% of first-attempt failures transparently.</p>

                <h2>Conversation Memory</h2>
                <p>A single-turn chatbot is frustrating for business users. "Show me sales for last month" → "break it down by product" → "now show only the top 10" requires the model to remember context across turns. LangChain's <code>ConversationBufferWindowMemory</code> handles this with a sliding window of the last six turns to prevent prompt bloat.</p>
                <p>The tricky part is SQL context inheritance. A query generated in turn 2 ("break it down by product") needs to inherit the date filters from turn 1 ("last month"). Raw conversation history doesn't make this reliable — the model may not re-parse the previous filter correctly. My solution extracts the resolved date range from the previous SQL and injects it as an explicit context block for follow-up turns, making the handoff deterministic.</p>

                <h2>React Frontend Notes</h2>
                <p>The chat interface had a stale closure bug that caused new messages to append to the state at the time the WebSocket handler was registered, not to the current state. The fix was to use a <code>useRef</code> accumulator that syncs back to state on each new message — a pattern that avoids the closure trap entirely.</p>
                <p>Report generation triggers automatically when a chatbot response includes a table above a configurable row threshold (default 15 rows). A "Download as Excel" button appears inline, generating an <code>xlsxwriter</code>-formatted file with company branding, conditional formatting on variance columns, and auto-fit column widths.</p>

                <h2>Key Lessons</h2>
                <ul>
                    <li><strong>Schema retrieval is as important as SQL generation</strong> — the LLM is only as good as the context it receives. Garbage schema context produces garbage SQL regardless of model quality.</li>
                    <li><strong>Domain-specific date and fiscal logic must be injected explicitly</strong> — LLMs don't know your company's fiscal year, and they will guess wrong.</li>
                    <li><strong>Auto-retry with error feedback handles most SQL failures</strong> without user intervention — expose the retry logic in logs, not in the UI.</li>
                    <li><strong>Multi-turn memory needs structured handoff</strong>, not just raw history, when filter context must carry over across turns.</li>
                </ul>
            </>
        )
    },
    {
        id: 5,
        title: 'Monte Carlo OEE Simulation for Manufacturing: Forecasting Equipment Effectiveness Under Uncertainty',
        tags: 'Monte Carlo simulation, OEE, manufacturing analytics, Flask, Python, predictive analytics, Industry 4.0',
        readTime: '~8 min',
        description: 'Most plants track OEE as a lagging indicator — you calculate it at the end of a shift from what actually happened. But what if you could simulate it forward? What is the probability that OEE drops below 70% next week given current downtime patterns?',
        content: (
            <>
                <h1>Monte Carlo OEE Simulation for Manufacturing: Forecasting Equipment Effectiveness Under Uncertainty</h1>
                <p><strong>Tags:</strong> Monte Carlo simulation, OEE, manufacturing analytics, Flask, Python, predictive analytics, Industry 4.0 &nbsp;·&nbsp; <strong>Reading time:</strong> ~8 min</p>
                <hr />

                <p>Overall Equipment Effectiveness (OEE) is the standard KPI for manufacturing productivity. Most plants track it as a lagging indicator — you calculate it at the end of a shift from what actually happened. But what if you could simulate it forward? What if you could answer <em>"what is the probability that OEE drops below 70% next week given current downtime patterns?"</em></p>
                <p>That's the question behind the Monte Carlo OEE Simulator I built at BinaryWaves Solutions — a Flask application that models OEE uncertainty using probability distributions fitted to historical downtime, performance, and quality data.</p>

                <h2>What OEE Actually Measures</h2>
                <OEEFormulaDiagram />

                <p>World-class OEE is considered 85%. Most plants in practice run 60–75%. The challenge is that all three components — availability, performance, and quality — have variance. Downtime events are unpredictable. Cycle time varies with operator, machine state, and material batch. Defect rates shift with environmental conditions and wear.</p>
                <p>Treating OEE as a point estimate ignores this variance entirely. A Monte Carlo approach models the distribution of possible OEE outcomes instead of a single expected value.</p>

                <h2>Why Monte Carlo?</h2>
                <p>Monte Carlo simulation works by running thousands of scenarios. In each scenario, input variables are sampled from their probability distributions — rather than using fixed historical averages — and the OEE output is computed. After 10,000 runs, you have a full probability distribution of possible outcomes for the shift.</p>
                <p>This answers a fundamentally different question than a point estimate. Instead of "OEE will be 73%", you get "there is a 28% probability that OEE falls below 70%". The latter is a decision-relevant statement. The former is a number that production managers have learned to distrust.</p>

                <h2>Fitting Distributions to Each Input</h2>

                <table className="feature-table">
                    <thead>
                        <tr>
                            <th>Input</th>
                            <th>Distribution</th>
                            <th>Why This Shape</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Downtime duration</td><td>Log-normal</td><td>Long right tail — most events are short, some are very long</td></tr>
                        <tr><td>Downtime frequency</td><td>Poisson</td><td>Count of events per shift follows Poisson distribution</td></tr>
                        <tr><td>Cycle time</td><td>Normal</td><td>Centred around ideal cycle time with operator variance</td></tr>
                        <tr><td>Defect rate</td><td>Beta</td><td>Bounded between 0 and 1, typically right-skewed for quality rates</td></tr>
                    </tbody>
                </table>

                <p>Fitting these distributions uses <code>scipy.stats</code> methods on historical shift data. Log-normal is fitted to log-transformed downtime durations. Beta distribution parameters are estimated using maximum likelihood with boundary constraints. The Poisson rate is simply the historical mean event count per shift.</p>

                <h2>Simulation Output</h2>
                <MonteCarloChart />

                <p>Ten thousand simulations run in under a second on a standard CPU — NumPy's vectorized sampling makes this practical. Each simulation samples independently from the downtime, cycle time, and defect distributions, computes availability × performance × quality, and records the result. The output is a full distribution that the dashboard renders as a histogram with P10, P50, and P90 markers.</p>

                <h2>Prescriptive Insights from Simulation Output</h2>
                <p>Running the simulation is only half the value. The other half is translating results into actionable recommendations. A rule-based insight engine fires based on simulation output:</p>
                <ul>
                    <li>If the probability of OEE falling below 70% exceeds 30%, a high-severity alert fires directing operations to review downtime patterns immediately.</li>
                    <li>If mean simulated availability falls below 80%, the alert identifies downtime frequency as the primary lever — not duration.</li>
                    <li>If mean performance falls below 90%, the alert flags cycle time deviation and suggests checking for micro-stoppages or operator-driven speed reduction.</li>
                    <li>If mean quality falls below 97%, the alert quantifies the OEE impact in percentage points — making it easier to prioritize against other improvement options.</li>
                </ul>

                <h2>What-If Scenario Analysis</h2>
                <p>The simulator's most useful feature is side-by-side scenario comparison. Users define a baseline scenario and one or more improvement scenarios — for example, "what if we reduce average downtime duration by 20% through faster tooling changeovers?" — and compare the resulting OEE distributions.</p>
                <p>This turns a simulation tool into a decision support tool. Instead of arguing about whether a maintenance investment is worth it, you can show the shift in OEE distribution that a 20% reduction in MTTR would produce — including the probability that world-class 85% OEE becomes achievable under the improved scenario.</p>

                <h2>Key Takeaway</h2>
                <p>OEE as a point estimate is a scorecard. OEE as a distribution is a management tool. Monte Carlo simulation is not a complex technique — it's a practical way to turn "what happened" into "what will happen and with what probability." That question is exactly what production managers need to make better maintenance and staffing decisions before a shift begins, not after it ends.</p>
            </>
        )
    }
];


/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const BlogsDetailed = ({ onNavigate }) => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedBlog]);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };
        if (selectedBlog) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [selectedBlog]);

    useEffect(() => {
        if (selectedBlog) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        const cards = document.querySelectorAll('.blog-card');
        cards.forEach((card) => observer.observe(card));
        return () => cards.forEach((card) => observer.unobserve(card));
    }, [selectedBlog]);

    if (selectedBlog) {
        return (
            <section className="blogs-detailed-section">
                <div className="scroll-progress-container">
                    <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
                </div>
                <div className="blogs-detailed-container blog-reader-view">
                    <button className="back-to-blogs-btn" onClick={() => setSelectedBlog(null)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Blogs
                    </button>
                    <div className="blog-content-wrapper">
                        {selectedBlog.content}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blogs-detailed-section">
            <div className="blogs-detailed-container">
                <div className="blogs-header">
                    <h1 className="blogs-title">Insights &amp; Writings</h1>
                    <p className="blogs-subtitle">
                        Thoughts, tutorials, and deep-dives into AI, Machine Learning, and Software Engineering.
                    </p>
                    <div className="blogs-divider">
                        <span className="divider-line"></span>
                        <span className="divider-icon">✦</span>
                        <span className="divider-line"></span>
                    </div>
                </div>

                <div className="blogs-list">
                    {blogsData.map((blog) => (
                        <div key={blog.id} className="blog-card" onClick={() => setSelectedBlog(blog)}>
                            <div className="blog-card-header">
                                <h3 className="blog-card-title">{blog.title}</h3>
                                {blog.readTime && <span className="blog-read-time">{blog.readTime}</span>}
                            </div>
                            <div className="blog-card-body">
                                {blog.tags && <p className="blog-tags"><strong>Tags:</strong> {blog.tags}</p>}
                                <p className="blog-card-description">{blog.description}</p>
                            </div>
                            <div className="blog-card-footer">
                                <span className="blog-read-btn">Read Article →</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blogs-footer">
                    <button onClick={() => onNavigate('home')} className="back-home-btn">
                        Back to Home
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogsDetailed;