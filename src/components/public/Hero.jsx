import React, { useRef, useEffect } from 'react';
import { Button, Tag, Card, Layout } from 'antd';
import {
    RocketOutlined,
    BookOutlined,
    CheckCircleFilled,
} from '@ant-design/icons';
import { useTheme } from '@/context';

// Continuous Swirling/Rotating "Rassi" (Glowing String) Canvas Background
const SwirlingRassiBackground = ({ isDarkMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const updateSize = () => {
            if (!canvas || !canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        const mouse = { x: -1000, y: -1000, active: false };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        const parent = canvas.parentElement;
        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;
        let currentCenterX = canvas.width / 2;
        let currentCenterY = canvas.height / 2;

        const render = () => {
            time += 0.015;

            const width = canvas.width;
            const height = canvas.height;

            const autoX = width / 2 + Math.cos(time * 0.7) * (width * 0.18);
            const autoY = height / 2 + Math.sin(time * 1.1) * (height * 0.15);

            const targetX = mouse.active && mouse.x > 0 ? mouse.x : autoX;
            const targetY = mouse.active && mouse.y > 0 ? mouse.y : autoY;

            currentCenterX += (targetX - currentCenterX) * 0.08;
            currentCenterY += (targetY - currentCenterY) * 0.08;

            ctx.clearRect(0, 0, width, height);

            const numStrands = 22;
            const baseRadius = Math.min(width, height) * 0.38;

            for (let i = 0; i < numStrands; i++) {
                const angleOffset = (i * Math.PI * 2) / numStrands;
                const rotation = time * 1.2 + angleOffset;

                const startX = currentCenterX + Math.cos(rotation) * 15;
                const startY = currentCenterY + Math.sin(rotation) * 15;

                const cp1X = currentCenterX + Math.cos(rotation + 0.8) * (baseRadius * 0.55);
                const cp1Y = currentCenterY + Math.sin(rotation + 0.8) * (baseRadius * 0.55);

                const cp2X = currentCenterX + Math.cos(rotation + 1.6) * (baseRadius * 0.95);
                const cp2Y = currentCenterY + Math.sin(rotation + 1.6) * (baseRadius * 0.95);

                const endX = currentCenterX + Math.cos(rotation + 2.4) * (baseRadius * 1.3);
                const endY = currentCenterY + Math.sin(rotation + 2.4) * (baseRadius * 1.3);

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);

                const alpha = 0.35 + Math.sin(time * 2 + i) * 0.25;
                ctx.lineWidth = 2.4 + Math.sin(i + time) * 0.8;
                ctx.strokeStyle = isDarkMode
                    ? `rgba(96, 165, 250, ${alpha * 0.88})`
                    : `rgba(37, 99, 235, ${alpha * 0.88})`;

                ctx.shadowColor = isDarkMode ? '#60a5fa' : '#2563eb';
                ctx.shadowBlur = 14;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }

            const orbGlow = ctx.createRadialGradient(
                currentCenterX, currentCenterY, 0,
                currentCenterX, currentCenterY, 100
            );
            orbGlow.addColorStop(0, isDarkMode ? 'rgba(96, 165, 250, 0.45)' : 'rgba(37, 99, 235, 0.35)');
            orbGlow.addColorStop(1, 'transparent');

            ctx.beginPath();
            ctx.arc(currentCenterX, currentCenterY, 100, 0, Math.PI * 2);
            ctx.fillStyle = orbGlow;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(currentCenterX, currentCenterY, 5.5, 0, Math.PI * 2);
            ctx.fillStyle = isDarkMode ? '#bfdbfe' : '#1d4ed8';
            ctx.shadowColor = isDarkMode ? '#60a5fa' : '#2563eb';
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', updateSize);
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
};

const Hero = ({ onStart }) => {
    const { isDarkMode } = useTheme();

    return (
        <Layout
            className={`relative py-8 sm:py-12 flex flex-col items-center transition-colors duration-300 overflow-hidden ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
                }`}
        >
            {/* 1. Base Subtle Square Grid Overlay */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isDarkMode ? "opacity-20" : "opacity-30"
                    }`}
                style={{
                    backgroundImage: isDarkMode
                        ? `linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)`
                        : `linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
                    backgroundSize: '45px 45px',
                }}
            />

            {/* 2. Swirling Rassi Canvas Animation Overlay */}
            <SwirlingRassiBackground isDarkMode={isDarkMode} />

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Text & CTAs */}
                    <div className="lg:col-span-7 flex flex-col items-start gap-4">
                        {/* Badge */}
                        <Tag
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center m-0 border transition-colors ${isDarkMode
                                ? "bg-blue-950/60 border-blue-800/60 text-blue-400"
                                : "bg-blue-50 border-blue-200 text-blue-700"
                                }`}
                        >
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                            SaralDB v0.1 — Flow-Based State Engine
                        </Tag>

                        <h1
                            className={`font-bold text-2xl sm:text-4xl leading-tight m-0 tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            No CRUD. No Complex APIs. <br />
                            <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-extrabold text-2xl sm:text-4xl">
                                Everything is a Flow.
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className={`text-base leading-relaxed m-0 ${isDarkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            SaralDB unifies document storage, in-memory performance, and real-time event streaming under a single <code className="bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded font-mono text-sm">.flow()</code> abstraction. Query, stream, and commit atomic transactions without managing separate DB, cache, or message brokers.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-1">
                            <Button
                                type="primary"
                                size="large"
                                icon={<RocketOutlined />}
                                onClick={onStart}
                                className="h-10 px-5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 border-none"
                            >
                                Launch Admin Studio
                            </Button>
                            <Button
                                size="large"
                                icon={<BookOutlined />}
                                className={`h-10 px-5 rounded-lg text-sm font-semibold transition-colors ${isDarkMode
                                    ? "border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500 bg-slate-900/50"
                                    : "border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-500 bg-white"
                                    }`}
                            >
                                View Specs & Docs
                            </Button>
                        </div>

                        {/* Tech Highlights */}
                        <div
                            className={`pt-4 border-t mt-1 w-full transition-colors ${isDarkMode ? "border-slate-800/80" : "border-slate-200"
                                }`}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    "Log-First Internal Engine",
                                    "Git-Style Flow Logic",
                                    "Atomic Transactions",
                                    "Zero External Cache"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <CheckCircleFilled className="text-blue-500 text-xs" />
                                        <span
                                            className={`text-xs font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Terminal Card (Height & Overflow Fixed) */}
                    <div className="lg:col-span-5 w-full">
                        <Card
                            variant="filled"
                            className={`rounded-xl shadow-xl overflow-hidden border transition-colors ${isDarkMode
                                ? "bg-slate-900/90 border-slate-800"
                                : "bg-slate-900 border-slate-800"
                                }`}
                            styles={{ body: { padding: 12 } }}
                        >
                            {/* Card Header */}
                            <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                                    <span className="text-slate-400 text-xs ml-2 font-mono">
                                        saraldb.tx().flow()
                                    </span>
                                </div>
                                <Tag color="cyan" variant="filled" className="m-0 text-[10px] rounded-full px-2">
                                    ● Transaction Active
                                </Tag>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <div className="bg-slate-800/60 p-1.5 px-2 rounded-lg border border-slate-700/50">
                                    <span className="text-[9px] text-slate-400 block uppercase font-sans">
                                        Execution Pipeline
                                    </span>
                                    <span className="text-xs font-bold text-[#60a5fa] font-mono">
                                        .flow() Engine
                                    </span>
                                </div>
                                <div className="bg-slate-800/60 p-1.5 px-2 rounded-lg border border-slate-700/50">
                                    <span className="text-[9px] text-slate-400 block uppercase font-sans">
                                        System State
                                    </span>
                                    <span className="text-xs font-bold text-emerald-400 font-mono">
                                        Log-First / Derived
                                    </span>
                                </div>
                            </div>

                            {/* Terminal Output Section - Height Constrained with Internal Scroll */}
                            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono max-h-75 sm:max-h-85 overflow-y-auto">
                                <span className="text-slate-500 text-[10px] block mb-1 font-sans">
                                    /* Atomic Lead Creation & Validation (Git-Style Flow) */
                                </span>
                                <pre className="text-blue-300 m-0 leading-relaxed text-[10px] sm:text-[11px] whitespace-pre-wrap">
                                    {`await saraldb.tx()
  .flow(async tx => {
    // Fetch state using .pull()
    const course = await tx.courses.pull(courseId);

    // Query using .when()
    const dup = await tx.leads.when(l => 
      l.email === email || l.phone === formattedPhone
    );

    if (dup?.course?.category === course.category) {
      throw new Error("Duplicate lead category");
    }

    const stage = await tx.stages.when("New Leads");

    // Create entry using .push()
    const lead = await tx.leads.push({
      ...req.body,
      phone: formattedPhone,
      stage: stage.id
    });

    // Append log event using .push()
    await tx.leadHistory.push({
      lead: lead.id,
      event: "lead_created"
    });
  })
  .commit();`}
                                </pre>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Hero;