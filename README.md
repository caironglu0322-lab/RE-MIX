<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RE-MIX——編織數位時代的創造與想像</title>
    <style>
        :root {
            /* 深色科技與莫蘭迪主題色系 Palette */
            --bg-dark: #0E141D;
            --bg-card: rgba(22, 30, 42, 0.90);
            --bg-card-hover: rgba(30, 42, 58, 0.95);
            --bg-modal: #161E2B;
            --accent-cyan: #00E5FF;
            --accent-gold: #DCAE7A;
            --accent-blue: #7A93A0;
            --text-light: #F4F0EA;
            --text-muted: #98A3B0;
            --border-soft: rgba(138, 163, 176, 0.25);
            --border-glow: rgba(0, 229, 255, 0.4);

            /* 子題莫蘭迪配色 */
            --morandi-sub1: #98A89E;      /* 單元一: 鼠尾草綠 */
            --morandi-sub1-dark: #2F3E35;
            --morandi-sub2: #D3A29B;      /* 單元二: 乾燥玫瑰/粉棕 */
            --morandi-sub2-dark: #4A2E2A;
            --morandi-sub3: #D6C4A5;      /* 單元三: 暖燕麥/黃褐 */
            --morandi-sub3-dark: #443929;
            --morandi-lead: #8EA7B4;      /* 前導區: 霧藍 */
            --morandi-lead-dark: #2C3E47;

            --color-tablet: #4A6572;
            --color-book: #C06C84;
            --color-qrcode: #35495E;
            --color-handrail: #5C6B73;
            --color-glass: rgba(180, 195, 205, 0.35);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Microsoft JhengHei", sans-serif;
        }

        body, html {
            width: 100%;
            height: 100%;
            background-color: var(--bg-dark);
            color: var(--text-light);
            scroll-behavior: smooth;
        }

        /* 置頂導覽列 */
        .navbar {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 60px;
            background: rgba(14, 20, 29, 0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-soft);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
        }

        .nav-title {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--text-light);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-title span {
            background: linear-gradient(90deg, var(--accent-cyan), var(--accent-gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-links {
            display: flex;
            gap: 18px;
            list-style: none;
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 600;
            transition: color 0.2s ease;
        }

        .nav-links a:hover {
            color: var(--accent-cyan);
        }

        /* 內容區塊容器 */
        .main-container {
            margin-top: 60px;
            padding: 24px;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
        }

        .section-block {
            margin-bottom: 48px;
            background: var(--bg-card);
            border: 1px solid var(--border-soft);
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .section-header {
            margin-bottom: 20px;
            border-bottom: 2px solid var(--border-soft);
            padding-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .section-title {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--text-light);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .section-subtitle {
            font-size: 0.88rem;
            color: var(--text-muted);
        }

        /* 策展總論與子題圖卡 GRID */
        .overview-card {
            background: linear-gradient(135deg, rgba(30, 42, 58, 0.8), rgba(20, 28, 40, 0.9));
            border: 1px solid var(--accent-gold);
            border-radius: 12px;
            padding: 22px;
            margin-bottom: 24px;
        }

        .overview-title {
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--accent-gold);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .overview-text {
            font-size: 0.95rem;
            line-height: 1.7;
            color: var(--text-light);
        }

        .subtheme-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .subtheme-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1.5px solid var(--border-soft);
            border-radius: 12px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.25s ease;
            position: relative;
            overflow: hidden;
        }

        .subtheme-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-cyan);
            box-shadow: 0 10px 24px rgba(0, 229, 255, 0.15);
        }

        .subtheme-badge {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 12px;
            color: #121820;
            margin-bottom: 10px;
        }

        .subtheme-card-title {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--text-light);
            margin-bottom: 8px;
        }

        .subtheme-card-desc {
            font-size: 0.86rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 12px;
        }

        .subtheme-hint {
            font-size: 0.78rem;
            color: var(--accent-cyan);
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        /* ========================================================= */
        /* 展場佈置指南 100% 物理尺寸畫布與雙軸比例尺                */
        /* ========================================================= */
        .layout-controls-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(30, 42, 58, 0.6);
            padding: 10px 16px;
            border-radius: 10px;
            margin-bottom: 16px;
            border: 1px solid var(--border-soft);
            flex-wrap: wrap;
            gap: 10px;
        }

        .layout-flow-text {
            font-size: 0.88rem;
            font-weight: 700;
            color: var(--accent-gold);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .btn-group {
            display: flex;
            gap: 8px;
        }

        .btn-ctrl {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--border-soft);
            color: var(--text-light);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.82rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .btn-ctrl:hover {
            background: var(--accent-blue);
            color: #fff;
            border-color: var(--accent-cyan);
        }

        .btn-ctrl.active {
            background: var(--accent-cyan);
            color: #121820;
            border-color: var(--accent-cyan);
        }

        .stage-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 4px 0;
        }

        .exhibition-canvas-outer {
            position: relative;
            width: 100%;
            max-width: calc((85vh) * (940 / 300));
            aspect-ratio: 940 / 300;
            background: linear-gradient(180deg, #182230 0%, #101622 100%);
            border: 1px solid var(--border-soft);
            border-bottom: 4px solid #36414E; /* 地面 0cm */
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
            container-type: inline-size;
        }

        .ceiling-bar {
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 0.8%;
            background: #6C7D89;
            z-index: 2;
        }

        .glass-wall-structure {
            position: absolute;
            left: 0; right: 0;
            bottom: 3.3333%;
            height: 36.6667%;
            background: var(--color-glass);
            border-top: 4px solid var(--color-handrail);
            backdrop-filter: blur(2px);
            z-index: 12;
            pointer-events: none;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 0.8%;
        }

        .glass-wall-label {
            font-size: clamp(0.55rem, 1.2cqw, 0.78rem);
            color: #E2E8F0;
            font-weight: 700;
            letter-spacing: 1px;
            background: rgba(15, 23, 42, 0.85);
            padding: 2px 10px;
            border-radius: 12px;
            border: 1px solid var(--border-soft);
        }

        /* 展板樣式 */
        .panel {
            position: absolute;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease, filter 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.2cqw;
            color: #fff;
            z-index: 8;
            user-select: none;
        }

        .panel:hover {
            transform: translateY(-2%) scale(1.02);
            box-shadow: 0 8px 20px rgba(0,229,255,0.3);
            z-index: 25;
        }

        .panel-large {
            width: 9.04255%; /* 85cm */
            height: 50.0%;    /* 150cm */
            bottom: 26.6667%; /* 80cm */
        }

        .panel-small {
            width: 3.7234%;   /* 35cm */
            height: 23.3333%; /* 70cm */
            bottom: 40.0%;    /* 120cm */
        }

        .panel-code {
            font-size: clamp(0.5rem, 1.0cqw, 0.7rem);
            font-weight: 800;
            opacity: 0.9;
            text-transform: uppercase;
        }

        .panel-title {
            font-size: clamp(0.55rem, 1.1cqw, 0.8rem);
            font-weight: 700;
            line-height: 1.25;
            margin-top: 2px;
        }

        .panel-tag {
            align-self: flex-start;
            font-size: clamp(0.45rem, 0.8cqw, 0.62rem);
            background: rgba(0,0,0,0.35);
            padding: 1px 4px;
            border-radius: 3px;
        }

        .theme-lead { background: var(--morandi-lead); border: 1.5px solid var(--morandi-lead-dark); }
        .theme-sub1 { background: var(--morandi-sub1); border: 1.5px solid var(--morandi-sub1-dark); }
        .theme-sub2 { background: var(--morandi-sub2); border: 1.5px solid var(--morandi-sub2-dark); }
        .theme-sub3 { background: var(--morandi-sub3); border: 1.5px solid var(--morandi-sub3-dark); }

        /* 配件物件 */
        .accessory-item {
            position: absolute;
            cursor: pointer;
            z-index: 15;
            transition: transform 0.2s ease, filter 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }

        .accessory-item:hover {
            transform: scale(1.18);
            z-index: 30;
        }

        .accessory-tablet {
            width: 2.6cqw; height: 1.8cqw;
            bottom: 37.5%;
            background: #2C3E50;
            border: 1.5px solid #1A252F;
            border-radius: 4px;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            transform: translateX(-50%);
        }

        .tablet-screen {
            width: 80%; height: 70%;
            background: #0D1B2A;
            border-radius: 2px;
            display: flex; align-items: center; justify-content: center;
            color: #00E5FF;
            font-size: clamp(0.42rem, 0.7cqw, 0.58rem);
            font-weight: bold;
        }

        .accessory-book {
            width: 2.2cqw; height: 2.6cqw;
            bottom: 36.5%;
            background: var(--color-book);
            border: 1.5px solid #8E44AD;
            border-radius: 3px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.25);
            color: #FFF;
            font-size: clamp(0.42rem, 0.7cqw, 0.58rem);
            font-weight: bold;
            text-align: center;
            padding: 1px;
            line-height: 1.1;
            transform: translateX(-50%);
        }

        .accessory-qrcode {
            width: 1.8cqw; height: 1.8cqw;
            bottom: 29.0%;
            background: #FFFFFF;
            border: 1.5px solid var(--color-qrcode);
            border-radius: 3px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            transform: translateX(-50%);
        }

        .qr-icon-matrix {
            width: 70%; height: 70%;
            background: 
                radial-gradient(circle, #000 40%, transparent 40%),
                linear-gradient(45deg, #000 25%, transparent 25%),
                linear-gradient(-45deg, #000 25%, transparent 25%);
            background-size: 4px 4px;
            border: 1px solid #000;
        }

        /* 配件高亮模式 */
        body.mode-accessories-only .panel {
            opacity: 0.18;
            filter: grayscale(85%);
        }

        body.mode-accessories-only .accessory-item {
            transform: translateX(-50%) scale(1.22);
            filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.95));
            z-index: 35;
        }

        body.mode-accessories-only .accessory-item::after {
            content: attr(data-label);
            position: absolute;
            top: -22px;
            white-space: nowrap;
            background: #FACC15;
            color: #1E293B;
            font-size: clamp(0.55rem, 0.9cqw, 0.72rem);
            font-weight: 800;
            padding: 1px 6px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* Y 軸伸縮高度比例尺 Overlay */
        .y-ruler-overlay {
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 13.5cqw;
            background: rgba(14, 20, 29, 0.92);
            backdrop-filter: blur(6px);
            border-right: 2px solid var(--accent-cyan);
            z-index: 50;
            opacity: 0;
            pointer-events: none;
            transform: translateX(-100%);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 4px 0 16px rgba(0,0,0,0.5);
        }

        .y-ruler-overlay.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0);
        }

        .y-ruler-mark {
            position: absolute;
            right: 0;
            width: 100%;
            display: flex; align-items: center; justify-content: flex-end;
            padding-right: 6px;
            transform: translateY(50%);
        }

        .y-ruler-mark::after {
            content: '';
            position: absolute;
            right: -2px;
            width: 8px; height: 2px;
            background: var(--accent-cyan);
        }

        .y-ruler-label {
            font-size: clamp(0.52rem, 1.05cqw, 0.72rem);
            color: var(--accent-cyan);
            font-weight: 800;
            white-space: nowrap;
            background: rgba(30, 42, 58, 0.85);
            padding: 1px 5px;
            border-radius: 4px;
            border: 1px solid rgba(0, 229, 255, 0.3);
        }

        .y-guide-line {
            position: absolute;
            left: 0; right: 0;
            height: 1.5px;
            border-top: 1.5px dashed rgba(0, 229, 255, 0.6);
            pointer-events: none;
            z-index: 45;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .y-ruler-overlay.active ~ .y-guide-line {
            opacity: 1;
        }

        /* X 軸伸縮間距與尺寸比例尺 Overlay */
        .x-ruler-overlay {
            position: absolute;
            left: 0; right: 0; top: 0;
            height: 24.0%;
            background: rgba(14, 20, 29, 0.94);
            backdrop-filter: blur(6px);
            border-bottom: 2px solid var(--accent-gold);
            z-index: 52;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-100%);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 16px rgba(0,0,0,0.5);
            display: flex; align-items: center;
        }

        .x-ruler-overlay.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
        }

        .x-ruler-block {
            position: absolute;
            height: 100%;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            border-left: 1px dashed rgba(220, 174, 122, 0.5);
            border-right: 1px dashed rgba(220, 174, 122, 0.5);
            background: rgba(255, 255, 255, 0.04);
            box-sizing: border-box;
        }

        .x-ruler-block.gap-block {
            background: rgba(220, 174, 122, 0.15);
        }

        .x-ruler-val {
            font-size: clamp(0.48rem, 0.95cqw, 0.7rem);
            font-weight: 800;
            color: var(--accent-gold);
            white-space: nowrap;
        }

        .x-ruler-desc {
            font-size: clamp(0.4rem, 0.75cqw, 0.58rem);
            color: var(--text-muted);
            white-space: nowrap;
        }

        /* ========================================================= */
        /* 9 大作品說明 GRID                                        */
        /* ========================================================= */
        .artworks-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .art-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-soft);
            border-radius: 12px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.25s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .art-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-cyan);
            box-shadow: 0 10px 24px rgba(0, 229, 255, 0.15);
        }

        .art-tag-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .art-tag {
            font-size: 0.72rem;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 10px;
            color: #121820;
        }

        .art-panel-code {
            font-size: 0.75rem;
            font-weight: 800;
            color: var(--accent-gold);
        }

        .art-title {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--text-light);
            margin-bottom: 8px;
            line-height: 1.3;
        }

        .art-desc {
            font-size: 0.84rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 12px;
        }

        .art-click-hint {
            font-size: 0.78rem;
            color: var(--accent-cyan);
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        /* ========================================================= */
        /* MODAL 彈出視窗（單元論述/展場規格/作品放大說明）         */
        /* ========================================================= */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(10, 14, 20, 0.82);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-card {
            background: var(--bg-modal);
            border-radius: 16px;
            border: 1px solid var(--accent-cyan);
            box-shadow: 0 20px 50px rgba(0,0,0,0.6);
            width: 92%;
            max-width: 900px;
            max-height: 88vh;
            overflow-y: auto;
            padding: 28px;
            position: relative;
            color: var(--text-light);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid var(--border-soft);
            padding-bottom: 12px;
            margin-bottom: 18px;
        }

        .modal-badge {
            font-size: 0.78rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 12px;
            color: #121820;
            display: inline-block;
            margin-bottom: 6px;
        }

        .modal-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: var(--text-light);
        }

        .modal-close {
            background: rgba(255,255,255,0.08);
            border: 1px solid var(--border-soft);
            color: var(--text-muted);
            font-size: 1.5rem;
            width: 36px; height: 36px;
            border-radius: 50%;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s ease;
        }

        .modal-close:hover {
            background: var(--accent-cyan);
            color: #121820;
            border-color: var(--accent-cyan);
        }

        .modal-section-h4 {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--accent-gold);
            margin: 16px 0 8px 0;
            border-left: 3px solid var(--accent-gold);
            padding-left: 8px;
        }

        .modal-p {
            font-size: 0.92rem;
            line-height: 1.65;
            color: var(--text-light);
            margin-bottom: 10px;
        }

        .modal-ul {
            padding-left: 20px;
            font-size: 0.9rem;
            line-height: 1.6;
            color: var(--text-light);
            margin-bottom: 12px;
        }

        .modal-ul li {
            margin-bottom: 6px;
        }

        .demo-iframe-container {
            width: 100%;
            height: 520px;
            border: 1.5px solid var(--accent-cyan);
            border-radius: 12px;
            overflow: hidden;
            margin-top: 14px;
            box-shadow: 0 8px 24px rgba(0,229,255,0.2);
        }

        .demo-iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .spec-grid-modal {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            background: rgba(255,255,255,0.04);
            padding: 14px;
            border-radius: 10px;
            border: 1px solid var(--border-soft);
            margin-bottom: 14px;
        }

        .spec-item-m strong {
            display: block;
            font-size: 0.75rem;
            color: var(--accent-cyan);
            margin-bottom: 2px;
        }

        .spec-item-m span {
            font-size: 0.88rem;
            color: var(--text-light);
        }
    
        /* ========================================================= */
        /* RWD 響應式媒體查詢 (Mobile & Tablet Responsive Design)      */
        /* ========================================================= */

        body {
            overflow-x: hidden;
        }

        /* 平板端 (max-width: 1024px) */
        @media (max-width: 1024px) {
            .subtheme-grid, .artworks-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            }
            .main-container {
                padding: 20px 16px;
            }
        }

        /* 手機端 (max-width: 768px) */
        @media (max-width: 768px) {
            .navbar {
                padding: 0 12px;
                height: 56px;
            }
            .nav-title {
                font-size: 0.95rem;
                gap: 6px;
            }
            .nav-links {
                gap: 12px;
                overflow-x: auto;
                white-space: nowrap;
                padding: 4px 0;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }
            .nav-links::-webkit-scrollbar {
                display: none;
            }
            .nav-links a {
                font-size: 0.8rem;
            }

            .main-container {
                margin-top: 56px;
                padding: 12px 10px;
            }
            .section-block {
                padding: 18px 12px;
                margin-bottom: 24px;
                border-radius: 12px;
            }
            .section-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 6px;
                margin-bottom: 16px;
            }
            .section-title {
                font-size: 1.18rem;
            }
            .section-subtitle {
                font-size: 0.8rem;
            }

            .overview-card {
                padding: 16px 14px;
                margin-bottom: 16px;
            }
            .overview-title {
                font-size: 1.05rem;
            }
            .overview-text {
                font-size: 0.88rem;
                line-height: 1.6;
            }

            .subtheme-grid, .artworks-grid {
                grid-template-columns: 1fr;
                gap: 14px;
            }
            .subtheme-card, .art-card {
                padding: 16px;
            }

            /* 展場 940cm 畫布橫向滑動保護 */
            .stage-wrapper {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                padding: 8px 0;
                border-radius: 8px;
            }
            .exhibition-canvas-outer {
                min-width: 750px;
            }

            .layout-controls-bar {
                flex-direction: column;
                align-items: stretch;
                gap: 10px;
                padding: 12px;
            }
            .layout-flow-text {
                font-size: 0.82rem;
                justify-content: center;
                text-align: center;
            }
            .btn-group {
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
                gap: 6px;
            }
            .btn-ctrl {
                flex: 1 1 calc(50% - 6px);
                justify-content: center;
                padding: 8px 10px;
                font-size: 0.78rem;
            }

            /* Modal 手機端適應 */
            .modal-card {
                width: 95%;
                max-width: 100%;
                padding: 18px 12px;
                max-height: 92vh;
                border-radius: 12px;
            }
            .modal-title {
                font-size: 1.15rem;
            }
            .spec-grid-modal {
                grid-template-columns: 1fr;
                gap: 8px;
                padding: 10px;
            }
            .demo-iframe-container {
                height: 420px;
            }
        }

        /* 小型手機端 (max-width: 480px) */
        @media (max-width: 480px) {
            .nav-title span {
                font-size: 0.88rem;
            }
            .btn-ctrl {
                flex: 1 1 100%;
            }
            .demo-iframe-container {
                height: 360px;
            }
        }

</style>
</head>
<body>

    <!-- 置頂導覽列 -->
    <nav class="navbar">
        <div class="nav-title">
            <span>RE-MIX</span> ｜ 編織數位時代的創造與想像
        </div>
        <ul class="nav-links">
            <li><a href="#overview">📜 策展論述</a></li>
            <li><a href="#layout">🏛️ 展場配置</a></li>
            <li><a href="#artworks">🎨 9大作品說明</a></li>
            
        </ul>
    </nav>

    <div class="main-container">

        <!-- ========================================================= -->
        <!-- SECTION 1: 策展總論與三大子題                             -->
        <!-- ========================================================= -->
        <section id="overview" class="section-block">
            <div class="section-header">
                <h2 class="section-title">
                    <span>📜 展覽策展總論與三大子題論述</span>
                </h2>
                <div class="section-subtitle">點擊子題卡片可放大查看完整策展論述文章</div>
            </div>

            <!-- 策展總論 -->
            <div class="overview-card">
                <div class="overview-title">
                    <span>🌐 策展總論：RE-MIX——編織數位時代的創造與想像</span>
                </div>
                <div class="overview-text">
                    我們運用「<b>RE</b>」（再次、再度、重來）的概念，去強調在 AI 蓬勃發展的當代，我們如何透過 AI 重塑我們對社會與生活的認知。這包括改變我們的創作方式、影響人們的判斷能力、以及想像未來的可能性等。本展覽集結青陽團隊跨學科學生作品，透過三個相互勾連的子題——<b>創造與再造（RE-MAKING）</b>、<b>偏誤與再校正（RE-CODING）</b> 與 <b>應用與再想像（RE-THINKING）</b>，帶領觀眾深入探討當代科技與人文交會的多元景觀。
                </div>
            </div>

            <!-- 三大子題 GRID -->
            <div class="subtheme-grid">
                <!-- 單元一 -->
                <div class="subtheme-card" onclick="openSubthemeModal('sub1')">
                    <span class="subtheme-badge" style="background: var(--morandi-sub1);">單元一</span>
                    <h3 class="subtheme-card-title">創造與再造 (RE-MAKING)</h3>
                    <p class="subtheme-card-desc">人工智慧與創意的碰撞。探討生成式 AI 如何作為協作夥伴，賦能藝術創作與敘事，跨越技術門檻。</p>
                    <div class="subtheme-hint">🔍 點選查看完整子題論述 ➔</div>
                </div>

                <!-- 單元二 -->
                <div class="subtheme-card" onclick="openSubthemeModal('sub2')">
                    <span class="subtheme-badge" style="background: var(--morandi-sub2);">單元二</span>
                    <h3 class="subtheme-card-title">偏誤與再校正 (RE-CODING)</h3>
                    <p class="subtheme-card-desc">面對數據與 AI 的盲點。直面演算法偏差、性別不平等與 Deepfake 危機，直擊科技盲點並推動數據校正。</p>
                    <div class="subtheme-hint">🔍 點選查看完整子題論述 ➔</div>
                </div>

                <!-- 單元三 -->
                <div class="subtheme-card" onclick="openSubthemeModal('sub3')">
                    <span class="subtheme-badge" style="background: var(--morandi-sub3);">單元三</span>
                    <h3 class="subtheme-card-title">應用與再想像 (RE-THINKING)</h3>
                    <p class="subtheme-card-desc">人工智慧的社會實踐。落地想像近未來智慧交通、數位倫理與心理健康守護，建構具備尊嚴的智慧社會。</p>
                    <div class="subtheme-hint">🔍 點選查看完整子題論述 ➔</div>
                </div>
            </div>
        </section>


        <!-- ========================================================= -->
        <!-- SECTION 2: 展場空間佈置與 100% 物理比例畫布              -->
        <!-- ========================================================= -->
        <section id="layout" class="section-block">
            <div class="section-header">
                <h2 class="section-title">
                    <span>🏛️ 屏東王船館 2F 走廊展場佈置互動圖</span>
                </h2>
                <div class="section-subtitle">牆面 940cm × 300cm ｜ 從右至左 (Right to Left) 觀展動線 ｜ 零卷軸 100% 物理向量畫布</div>
            </div>

            <!-- 控制工具列 -->
            <div class="layout-controls-bar">
                <div class="layout-flow-text">
                    <span>觀展動線：</span>
                    <span style="background: var(--accent-cyan); color:#121820; padding:2px 8px; border-radius:10px;">從右至左 ⬅️ （左出口⬅️右入口)</span>
                </div>
                <div class="btn-group">
                    <button class="btn-ctrl active" id="btn-show-all" onclick="setMode('all')">👁️ 全貌模式</button>
                    <button class="btn-ctrl" id="btn-show-accessories" onclick="setMode('accessories')">📱 配件視角</button>
                    <button class="btn-ctrl" id="btn-toggle-y-ruler" onclick="toggleYRuler()">📏 Y軸高度尺 (展開)</button>
                    <button class="btn-ctrl" id="btn-toggle-x-ruler" onclick="toggleXRuler()">📐 X軸間距尺 (展開)</button>
                </div>
            </div>

            <!-- 主展場立面 100% 物理比例畫布 -->
            <div class="mobile-scroll-hint" style="display: none; text-align: center; font-size: 0.78rem; color: var(--accent-cyan); margin-bottom: 8px; font-weight: 700; background: rgba(0,229,255,0.08); padding: 6px; border-radius: 6px; border: 1px solid rgba(0,229,255,0.2);">
                📱 手機瀏覽提示：下方展場畫布可左右滑動查看 940cm 完整動線與展板 👈👉
            </div>
            <div class="stage-wrapper">
                <div class="exhibition-canvas-outer">
                    <div class="ceiling-bar"></div>

                    <!-- Y 軸高度比例尺 Overlay -->
                    <div class="y-ruler-overlay" id="y-ruler-overlay">
                        <div class="y-ruler-mark" style="bottom: 100%;"><span class="y-ruler-label">天花板 300cm</span></div>
                        <div class="y-ruler-mark" style="bottom: 76.6667%;"><span class="y-ruler-label">大展板頂 230cm</span></div>
                        <div class="y-ruler-mark" style="bottom: 63.3333%;"><span class="y-ruler-label">小展板頂 190cm</span></div>
                        <div class="y-ruler-mark" style="bottom: 40.0%;"><span class="y-ruler-label">扶手/小底 120cm</span></div>
                        <div class="y-ruler-mark" style="bottom: 26.6667%;"><span class="y-ruler-label">大展板底 80cm</span></div>
                        <div class="y-ruler-mark" style="bottom: 0%;"><span class="y-ruler-label">地面 0cm</span></div>
                    </div>

                    <!-- Y 軸對齊參考虛線 -->
                    <div class="y-guide-line" style="bottom: 76.6667%;"></div>
                    <div class="y-guide-line" style="bottom: 63.3333%;"></div>
                    <div class="y-guide-line" style="bottom: 40.0%;"></div>
                    <div class="y-guide-line" style="bottom: 26.6667%;"></div>

                    <!-- X 軸間距比例尺 Overlay -->
                    <div class="x-ruler-overlay" id="x-ruler-overlay">
                        <div class="x-ruler-block gap-block" style="left: 0.0%; width: 0.79787%;"><span class="x-ruler-val">7.5</span></div>
                        <div class="x-ruler-block" style="left: 0.79787%; width: 9.04255%;"><span class="x-ruler-val">L8 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 9.84042%; width: 2.12766%;"><span class="x-ruler-val">20</span></div>
                        <div class="x-ruler-block" style="left: 11.96808%; width: 9.04255%;"><span class="x-ruler-val">L7 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 21.01063%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 22.07446%; width: 3.7234%;"><span class="x-ruler-val">S3 35</span></div>
                        <div class="x-ruler-block gap-block" style="left: 25.79787%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 26.86170%; width: 9.04255%;"><span class="x-ruler-val">L6 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 35.90425%; width: 2.12766%;"><span class="x-ruler-val">20</span></div>
                        <div class="x-ruler-block" style="left: 38.03191%; width: 9.04255%;"><span class="x-ruler-val">L5 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 47.07446%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 48.13829%; width: 3.7234%;"><span class="x-ruler-val">S2 35</span></div>
                        <div class="x-ruler-block gap-block" style="left: 51.86170%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 52.92553%; width: 9.04255%;"><span class="x-ruler-val">L4 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 61.96808%; width: 2.12766%;"><span class="x-ruler-val">20</span></div>
                        <div class="x-ruler-block" style="left: 64.09574%; width: 9.04255%;"><span class="x-ruler-val">L3 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 73.13829%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 74.20212%; width: 3.7234%;"><span class="x-ruler-val">S1 35</span></div>
                        <div class="x-ruler-block gap-block" style="left: 77.92553%; width: 1.06383%;"><span class="x-ruler-val">10</span></div>
                        <div class="x-ruler-block" style="left: 78.98936%; width: 9.04255%;"><span class="x-ruler-val">L2 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 88.03191%; width: 2.12766%;"><span class="x-ruler-val">20</span></div>
                        <div class="x-ruler-block" style="left: 90.15957%; width: 9.04255%;"><span class="x-ruler-val">L1 85</span></div>
                        <div class="x-ruler-block gap-block" style="left: 99.20212%; width: 0.79787%;"><span class="x-ruler-val">7.5</span></div>
                    </div>

                    <!-- 玻璃圍牆與扶手 (120cm) -->
                    <div class="glass-wall-structure">
                        <span class="glass-wall-label">玻璃圍牆 (高 110cm ｜ 頂端扶手 120cm ｜ 遮擋大展板底部 40cm)</span>
                    </div>

                    <!-- 展板結構 (RTL 從右至左) -->
                    <div class="panel panel-large theme-lead" style="left: 90.15957%;" onclick="openLayoutModal('L1')">
                        <div class="panel-code">L1 大展板</div>
                        <div class="panel-title">RE-MIX<br>展覽主視覺</div>
                        <div class="panel-tag">前導區</div>
                    </div>

                    <div class="panel panel-large theme-lead" style="left: 78.98936%;" onclick="openLayoutModal('L2')">
                        <div class="panel-code">L2 大展板</div>
                        <div class="panel-title">策展脈絡與<br>展覽總論</div>
                        <div class="panel-tag">前導區</div>
                    </div>

                    <div class="panel panel-small theme-sub1" style="left: 74.20212%;" onclick="openLayoutModal('S1')">
                        <div class="panel-code">S1 小展板</div>
                        <div class="panel-title">創造與再造</div>
                        <div class="panel-tag">子題一論述</div>
                    </div>
                    <div class="accessory-item accessory-tablet" style="left: 76.06383%;" onclick="openLayoutModal('T1')" data-label="📱 平板電腦 1">
                        <div class="tablet-screen">Sub1</div>
                    </div>

                    <div class="panel panel-large theme-sub1" style="left: 64.09574%;" onclick="openLayoutModal('L3')">
                        <div class="panel-code">L3 大展板</div>
                        <div class="panel-title">1. 奇幻劇場繪本<br>2. LLM地震模型</div>
                        <div class="panel-tag">子題一作品</div>
                    </div>
                    <div class="accessory-item accessory-book" style="left: 65.5%;" onclick="openLayoutModal('BK1')" data-label="📖 劇場繪本實體書">
                        <span>奇幻<br>劇場</span>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 71.0%;" onclick="openLayoutModal('QR1')" data-label="🔳 QR Code (L3)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                    <div class="panel panel-large theme-sub1" style="left: 52.92553%;" onclick="openLayoutModal('L4')">
                        <div class="panel-code">L4 大展板</div>
                        <div class="panel-title">3. 聽！海哭的聲音</div>
                        <div class="panel-tag">子題一作品</div>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 57.4468%;" onclick="openLayoutModal('QR2')" data-label="🔳 QR Code (L4)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                    <div class="panel panel-small theme-sub2" style="left: 48.13829%;" onclick="openLayoutModal('S2')">
                        <div class="panel-code">S2 小展板</div>
                        <div class="panel-title">偏誤與再校正</div>
                        <div class="panel-tag">子題二論述</div>
                    </div>
                    <div class="accessory-item accessory-tablet" style="left: 50.0%;" onclick="openLayoutModal('T2')" data-label="📱 平板電腦 2">
                        <div class="tablet-screen">Sub2</div>
                    </div>

                    <div class="panel panel-large theme-sub2" style="left: 38.03191%;" onclick="openLayoutModal('L5')">
                        <div class="panel-code">L5 大展板</div>
                        <div class="panel-title">1. 人臉辨識偏誤<br>2. 風雨中即性</div>
                        <div class="panel-tag">子題二作品</div>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 42.5532%;" onclick="openLayoutModal('QR3')" data-label="🔳 QR Code (L5)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                    <div class="panel panel-large theme-sub2" style="left: 26.86170%;" onclick="openLayoutModal('L6')">
                        <div class="panel-code">L6 大展板</div>
                        <div class="panel-title">3. 本地AI知識庫</div>
                        <div class="panel-tag">子題二作品</div>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 31.3830%;" onclick="openLayoutModal('QR4')" data-label="🔳 QR Code (L6)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                    <div class="panel panel-small theme-sub3" style="left: 22.07446%;" onclick="openLayoutModal('S3')">
                        <div class="panel-code">S3 小展板</div>
                        <div class="panel-title">應用與再想像</div>
                        <div class="panel-tag">子題三論述</div>
                    </div>
                    <div class="accessory-item accessory-tablet" style="left: 23.93617%;" onclick="openLayoutModal('T3')" data-label="📱 平板電腦 3">
                        <div class="tablet-screen">Sub3</div>
                    </div>

                    <div class="panel panel-large theme-sub3" style="left: 11.96808%;" onclick="openLayoutModal('L7')">
                        <div class="panel-code">L7 大展板</div>
                        <div class="panel-title">1. 用AI對抗AI<br>2. AI交通執法</div>
                        <div class="panel-tag">子題三作品</div>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 16.48936%;" onclick="openLayoutModal('QR5')" data-label="🔳 QR Code (L7)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                    <div class="panel panel-large theme-sub3" style="left: 0.79787%;" onclick="openLayoutModal('L8')">
                        <div class="panel-code">L8 大展板</div>
                        <div class="panel-title">3. EmoGuard<br>情緒守護者</div>
                        <div class="panel-tag">子題三作品</div>
                    </div>
                    <div class="accessory-item accessory-qrcode" style="left: 5.31915%;" onclick="openLayoutModal('QR6')" data-label="🔳 QR Code (L8)">
                        <div class="qr-icon-matrix"></div>
                    </div>

                </div>
            </div>
        </section>


        <!-- ========================================================= -->
        <!-- SECTION 3: 9 大專案作品說明與放大 Modal                  -->
        <!-- ========================================================= -->
        <section id="artworks" class="section-block">
            <div class="section-header">
                <h2 class="section-title">
                    <span>🎨 全展區 9 大作品深度說明</span>
                </h2>
                <div class="section-subtitle">點選作品圖卡可放大查看專案目標、專案簡述與線上成果介面</div>
            </div>

            <div class="artworks-grid">
                <!-- 1-1 -->
                <div class="art-card" onclick="openArtworkModal('1-1')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub1);">單元一：創造與再造</span>
                            <span class="art-panel-code">L3 展板</span>
                        </div>
                        <h3 class="art-title">1-1 《奇幻劇場之旅》電子繪本</h3>
                        <p class="art-desc">運用 ChatGPT 與 Canva 輔助兒童表演藝術繪本創作，將舞台與幕後技術轉化為淺顯故事。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 1-2 -->
                <div class="art-card" onclick="openArtworkModal('1-2')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub1);">單元一：創造與再造</span>
                            <span class="art-panel-code">L3 展板</span>
                        </div>
                        <h3 class="art-title">1-2 《LLM 地震資訊模型 (QuakeGPT)》</h3>
                        <p class="art-desc">整合分散之地震與防災數據，透過 RAG 檢索增強生成實現自然語言避難路線規劃。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 1-3 -->
                <div class="art-card" onclick="openArtworkModal('1-3')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub1);">單元一：創造與再造</span>
                            <span class="art-panel-code">L4 展板</span>
                        </div>
                        <h3 class="art-title">1-3 《聽！海哭的聲音》海洋永續專案</h3>
                        <p class="art-desc">結合原創繪本、FlexClip 前導影片與 3D 線上海洋博物館，響應 SDGs 14 海洋保育。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 2-1 -->
                <div class="art-card" onclick="openArtworkModal('2-1')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub2);">單元二：偏誤與再校正</span>
                            <span class="art-panel-code">L5 展板</span>
                        </div>
                        <h3 class="art-title">2-1 人臉辨識性別偏差與修正</h3>
                        <p class="art-desc">運用 ResNet18 驗證資料集性別不平等導致的演算法偏見，建置公眾參與多元人臉庫。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 2-2 -->
                <div class="art-card" onclick="openArtworkModal('2-2')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub2);">單元二：偏誤與再校正</span>
                            <span class="art-panel-code">L5 展板</span>
                        </div>
                        <h3 class="art-title">2-2 風雨中的韌性——台灣農業經濟</h3>
                        <p class="art-desc">Power BI 星狀模型視覺化 2015-2024 台灣農業數據，探討高齡化與經濟成長不平等。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 2-3 -->
                <div class="art-card" onclick="openArtworkModal('2-3')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub2);">單元二：偏誤與再校正</span>
                            <span class="art-panel-code">L6 展板</span>
                        </div>
                        <h3 class="art-title">2-3 本地 AI 知識庫系統 (傳統產業)</h3>
                        <p class="art-desc">整合 ASR、OCR 與 RAG，將製造業老師傅隱性 SOP 經驗轉化為內部資安 AI 知識庫。</p>
                    </div>
                    <div class="art-click-hint">🔍 點擊放大查看詳細內容 ➔</div>
                </div>

                <!-- 3-1 -->
                <div class="art-card" style="border-color: var(--accent-cyan);" onclick="openArtworkModal('3-1')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub3);">單元三：應用與再想像</span>
                            <span class="art-panel-code">L7 展板</span>
                        </div>
                        <h3 class="art-title">3-1 用 AI 對抗 AI：性暴力快速反應平台</h3>
                        <p class="art-desc">🌐 <b>包含可互動 HTML 網頁</b>：縮減 Deepfake 申報時間差，整合 NGO 代理與政府 RRT 快速下架。</p>
                    </div>
                    <div class="art-click-hint">💻 點擊放大並體驗線上網頁 ➔</div>
                </div>

                <!-- 3-2 -->
                <div class="art-card" style="border-color: var(--accent-cyan);" onclick="openArtworkModal('3-2')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub3);">單元三：應用與再想像</span>
                            <span class="art-panel-code">L8 展板</span>
                        </div>
                        <h3 class="art-title">3-2 EmoGuard 情緒守護者</h3>
                        <p class="art-desc">🌐 <b>包含可互動 3D 手錶網頁</b>：穿戴裝置 × HRV 生理數據 × AI 動態保費預防型心理保險生態系。</p>
                    </div>
                    <div class="art-click-hint">⌚ 點擊放大並體驗 3D 模型 ➔</div>
                </div>

                <!-- 3-3 -->
                <div class="art-card" style="border-color: var(--accent-cyan);" onclick="openArtworkModal('3-3')">
                    <div>
                        <div class="art-tag-row">
                            <span class="art-tag" style="background: var(--morandi-sub3);">單元三：應用與再想像</span>
                            <span class="art-panel-code">L7 展板</span>
                        </div>
                        <h3 class="art-title">3-3 TITAN 全台 AI 路燈交通執法網絡</h3>
                        <p class="art-desc">🌐 <b>包含可互動 3D 路燈網頁</b>：Edge AI 智慧路燈、多感測器融合與「AI輔助、人類監督」科技法制。</p>
                    </div>
                    <div class="art-click-hint">🚦 點擊放大並體驗 3D 模型 ➔</div>
                </div>
            </div>
        </section>


        <!-- ========================================================= -->
        <!-- SECTION 4: 3D 雙旗艦互動展廳區                            -->
        <!-- ========================================================= -->
        

    </div>


    <!-- ========================================================= -->
    <!-- MODALS 彈出視窗定義                                        -->
    <!-- ========================================================= -->

    <!-- 1. 子題論述 MODAL -->
    <div class="modal-overlay" id="subtheme-modal">
        <div class="modal-card">
            <div class="modal-header">
                <div>
                    <span class="modal-badge" id="sub-modal-badge">單元論述</span>
                    <h3 class="modal-title" id="sub-modal-title">子題名稱</h3>
                </div>
                <button class="modal-close" onclick="closeSubthemeModal()">&times;</button>
            </div>
            <div id="sub-modal-body"></div>
        </div>
    </div>

    <!-- 2. 展場佈置規格 MODAL -->
    <div class="modal-overlay" id="layout-spec-modal">
        <div class="modal-card">
            <div class="modal-header">
                <div>
                    <span class="modal-badge" id="layout-modal-badge">展場元件</span>
                    <h3 class="modal-title" id="layout-modal-title">展板名稱</h3>
                </div>
                <button class="modal-close" onclick="closeLayoutModal()">&times;</button>
            </div>
            <div class="spec-grid-modal" id="layout-modal-specs"></div>
            <div id="layout-modal-desc" class="modal-p"></div>
        </div>
    </div>

    <!-- 3. 作品說明放大 MODAL -->
    <div class="modal-overlay" id="artwork-detail-modal">
        <div class="modal-card" style="max-width: 1000px;">
            <div class="modal-header">
                <div>
                    <span class="modal-badge" id="art-modal-badge">作品詳細說明</span>
                    <h3 class="modal-title" id="art-modal-title">作品標題</h3>
                </div>
                <button class="modal-close" onclick="closeArtworkModal()">&times;</button>
            </div>
            <div id="art-modal-body"></div>
        </div>
    </div>


    <!-- ========================================================= -->
    <!-- JAVASCRIPT LOGIC                                          -->
    <!-- ========================================================= -->
    <script>
        // --- 1. 子題論述資料庫 ---
        const subthemeData = {
            'sub1': {
                badge: '單元一：創造與再造 (RE-MAKING)',
                color: 'var(--morandi-sub1)',
                title: '單元一：創造與再造（Re-making）—— 人工智慧與創意的碰撞',
                content: `
                    <p class="modal-p">人工智慧為創作帶來新的可能，使創意不再受限於既有的技術能力與表達形式。從探討 AI 如何作為協作夥伴、生成式 AI 到數位敘事的應用，科技工具讓人們得以跨越門檻，將個人經驗與社會觀察轉化為多元的作品。這樣的改變不僅拓展了人類想像的極限與創作自由，也開啟了更多人參與文化生產與公共表達的機會。</p>
                    <p class="modal-p">當數位工具逐漸融入創作過程，我們得以重新思考人與技術之間的關係，以及創意如何成為理解社會、開展對話的媒介。</p>
                    <h4 class="modal-section-h4">本單元展出作品：</h4>
                    <ul class="modal-ul">
                        <li><b>1-1 《奇幻劇場之旅》繪本</b>：運用 ChatGPT 與 Canva 輔助兒童表演藝術繪本創作與教材開發。</li>
                        <li><b>1-2 《LLM 地震資訊模型 (QuakeGPT)》</b>：結合 RAG 技術與地圖導航，整合台灣地震歷史數據與避難路線。</li>
                        <li><b>1-3 《聽！海哭的聲音》</b>：以原創繪本、前導影片與 3D 線上海洋博物館響應 SDGs 14 海洋保育。</li>
                    </ul>
                `
            },
            'sub2': {
                badge: '單元二：偏誤與再校正 (RE-CODING)',
                color: 'var(--morandi-sub2)',
                title: '單元二：偏誤與再校正（Re-coding）—— 面對數據與 AI 的盲點',
                content: `
                    <p class="modal-p">儘管人工智慧具有龐大的運算與生成潛力，我們必須開誠布公地直面隱藏在其中的各種偏誤。科技並非絕對中立、客觀的產物，<b>無論是數據採集時的失衡、演算法設計的限制、或是應用層面產生的社會盲點，任何形式的數據或人工智慧偏誤都必須被正視與「再校正」。</b></p>
                    <p class="modal-p">從數據中潛藏的性別不平等、財富資源分配的視覺化差異，到運用深偽（Deepfake）技術衍生的犯罪倫理危機，甚至是人類過於相信 AI 所導致的判斷失準，這些偏誤都會影響我們對真實世界的理解，甚至延續既有的不平等。因此，我們不僅要學習運用工具，更需批判性地檢視數據如何形成。透過對各種 AI 與數據偏誤的「再校正」，我們嘗試辨識科技的盲點，重新檢視既有的社會觀念，運用更具包容性與反思性的數位實踐，回應不同群體的處境。</p>
                    <h4 class="modal-section-h4">本單元展出作品：</h4>
                    <ul class="modal-ul">
                        <li><b>2-1 《人臉辨識性別偏差與修正》</b>：運用 ResNet18 驗證性別不均對演算法的偏見，並建置公眾參與多元人臉資料庫。</li>
                        <li><b>2-2 《風雨中的韌性——台灣農業經濟》</b>：整合 10 年農業數據與 Power BI 星狀模型，揭示經濟成長與農民平權落差。</li>
                        <li><b>2-3 《本地 AI 知識庫系統》</b>：結合 ASR、OCR 與 RAG 保存傳統製造業老師傅隱性 SOP 技術資產。</li>
                    </ul>
                `
            },
            'sub3': {
                badge: '單元三：應用與再想像 (RE-THINKING)',
                color: 'var(--morandi-sub3)',
                title: '單元三：應用與再想像（Re-thinking）—— 人工智慧的社會實踐',
                content: `
                    <p class="modal-p">當數位科技逐步走入日常，AI 已不再只是協助創作的工具，更持續影響我們的生活、治理與社會運作。從交通管理、農業生產到醫療資源的配置，數位分析與生成式 AI 為尋找解決方案提供了新的途徑。然而，科技能否真正改善生活，不僅取決於技術發展，更取決於我們如何理解問題、判讀數據，並將其轉化為具體的行動。</p>
                    <p class="modal-p">展覽的尾聲，我們將目光收攏於對「近未來」數據社會的落地想像。展示如何透過扎實的數據量測、感測技術與分析模型，重新定義科技產品的陪伴價值與社會治理。在創造與反思之間，我們希望觀眾不只看見科技所能實現的極限，更能意識到每一次數位實踐背後的選擇與責任。透過嚴謹的數據分析與人性化視角，我們期望與觀眾共同思考：當科技持續改變生活，我們該如何重新編織（RE-MIX）並建構一個兼具公平、尊嚴與人性的智慧社會？</p>
                    <h4 class="modal-section-h4">本單元展出作品：</h4>
                    <ul class="modal-ul">
                        <li><b>3-1 《用 AI 對抗 AI：數位性暴力快速反應平台》</b>：結合數位申報、NGO 代理與政府 RRT 快速下架。</li>
                        <li><b>3-2 《EmoGuard Insurance 情緒守護者》</b>：穿戴裝置 × HRV 生理指標 × AI 動態保費預防型心理健康保險。</li>
                        <li><b>3-3 《TITAN 全台 AI 路燈交通執法網絡》</b>：Edge AI 智慧路燈、多感測器融合與「AI 輔助、人類監督」科技法制。</li>
                    </ul>
                `
            }
        };

        function openSubthemeModal(key) {
            const data = subthemeData[key];
            if (!data) return;
            document.getElementById('sub-modal-badge').textContent = data.badge;
            document.getElementById('sub-modal-badge').style.background = data.color;
            document.getElementById('sub-modal-title').textContent = data.title;
            document.getElementById('sub-modal-body').innerHTML = data.content;
            document.getElementById('subtheme-modal').classList.add('active');
        }

        function closeSubthemeModal() {
            document.getElementById('subtheme-modal').classList.remove('active');
        }


        // --- 2. 展場規格資料庫 (Layout Guide v8) ---
        const layoutSpecsData = {
            'L1': { type: '大展板', color: '#8EA7B4', title: 'L1 RE-MIX 展覽主視覺', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)', '固定工法': '鐵夾夾固，扣掛於後方鐵網', '玻璃遮擋': '底部 40 cm 位於 120cm 玻璃牆後' }, desc: '展覽入口首張大展板，呈現「RE-MIX 當代藝術與AI空間群像」主題視覺意象。' },
            'L2': { type: '大展板', color: '#8EA7B4', title: 'L2 策展脈絡與核心理念 (展覽總論)', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)', '固定工法': '鐵夾夾固，扣掛於後方鐵網', '玻璃遮擋': '底部 40 cm 位於 120cm 玻璃牆後' }, desc: '闡述生成式 AI 對當代藝術創作、社會議題與日常應用的影響，為全場三個子題提供總論脈絡。' },
            'S1': { type: '小展板', color: '#98A89E', title: 'S1 RE-MAKING 創造與再造 (子題論述)', specs: { '尺寸': '35 cm (寬) × 70 cm (高)', '懸掛高度': '離地 120 cm (頂邊 190 cm)', '底邊切齊': '底邊精確切齊離地 120 cm 玻璃牆扶手' }, desc: '論述生成式 AI 工具如何賦能藝術創作與敘事，展現人類想像力與演算法結合的可能性。' },
            'L3': { type: '大展板', color: '#98A89E', title: 'L3 作品 1-1 奇幻劇場 ｜ 作品 1-2 QuakeGPT', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)', '前方配件': '前方扶手懸掛《繪本實體書》；玻璃牆貼 QR Code' }, desc: '展示《奇幻劇場之旅》與《QuakeGPT 地震資訊模型》成果。' },
            'L4': { type: '大展板', color: '#98A89E', title: 'L4 作品 1-3 聽！海哭的聲音', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)', '前方配件': '貼作品 QR Code (QR2)' }, desc: '結合故事敘事、線上數位博物館與實體繪本，關注海洋生態危機。' },
            'S2': { type: '小展板', color: '#D3A29B', title: 'S2 RE-CODING 偏誤與再校正 (子題論述)', specs: { '尺寸': '35 cm (寬) × 70 cm (高)', '懸掛高度': '離地 120 cm (頂邊 190 cm)' }, desc: '反思 AI 模型與數據集中的偏差問題，探討演算法公平性。' },
            'L5': { type: '大展板', color: '#D3A29B', title: 'L5 作品 2-1 人臉辨識 ｜ 作品 2-2 農業韌性', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)' }, desc: '展出 ResNet18 模型偏誤研究與多元人臉庫，以及農業 Power BI 報告。' },
            'L6': { type: '大展板', color: '#D3A29B', title: 'L6 作品 2-3 本地 AI 知識庫系統', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)' }, desc: '說明傳統製造業建置內部資安 AI 知識庫之 SOP 經驗保存。' },
            'S3': { type: '小展板', color: '#D6C4A5', title: 'S3 RE-THINKING 應用與再想像 (子題論述)', specs: { '尺寸': '35 cm (寬) × 70 cm (高)', '懸掛高度': '離地 120 cm (頂邊 190 cm)' }, desc: '展望智慧交通、數位倫理與心理健康守護等領域。' },
            'L7': { type: '大展板', color: '#D6C4A5', title: 'L7 作品 3-1 用 AI 對抗 AI ｜ 作品 3-3 TITAN 交通執法', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)' }, desc: '呈現數位性暴力通報原型平台，以及 TITAN 智慧路燈系統。' },
            'L8': { type: '大展板', color: '#D6C4A5', title: 'L8 作品 3-2 EmoGuard 情緒守護者', specs: { '尺寸': '85 cm (寬) × 150 cm (高)', '懸掛高度': '離地 80 cm (頂邊 230 cm)' }, desc: '結合穿戴式裝置、HRV 心率變異度與 AI 壓力量測之心理保險生態系。' },
            'T1': { type: '互動平板', color: '#4A6572', title: 'T1 子題一互動展示平板', specs: { '固定位置': '離地 120 cm 扶手上', '相對位置': '對齊 S1 小展板正下方' }, desc: '提供觀眾點閱體驗《奇幻劇場》與《QuakeGPT》測試。' },
            'T2': { type: '互動平板', color: '#4A6572', title: 'T2 子題二互動展示平板', specs: { '固定位置': '離地 120 cm 扶手上', '相對位置': '對齊 S2 小展板正下方' }, desc: '提供民眾體驗多元人臉上傳校正示範與農業儀表板。' },
            'T3': { type: '互動平板', color: '#4A6572', title: 'T3 子題三互動展示平板', specs: { '固定位置': '離地 120 cm 扶手上', '相對位置': '對齊 S3 小展板正下方' }, desc: '提供民眾測試 EmoGuard 檢測問卷與性暴力通報流程。' },
            'BK1': { type: '實體展品', color: '#C06C84', title: 'BK1 《奇幻劇場繪本》精裝實體書', specs: { '固定位置': '懸掛於離地 120 cm 扶手上 (L3 前方)' }, desc: '展示學生利用 Midjourney 與 ChatGPT 繪製之精裝實體繪本。' },
            'QR1': { type: 'QR Code', color: '#35495E', title: 'QR1 連結 (L3)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至 QuakeGPT 平台與繪本網站。' },
            'QR2': { type: 'QR Code', color: '#35495E', title: 'QR2 連結 (L4)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至線上海洋博物館。' },
            'QR3': { type: 'QR Code', color: '#35495E', title: 'QR3 連結 (L5)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至多元人臉庫與農業 Power BI。' },
            'QR4': { type: 'QR Code', color: '#35495E', title: 'QR4 連結 (L6)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至本地 AI 知識庫系統影片。' },
            'QR5': { type: 'QR Code', color: '#35495E', title: 'QR5 連結 (L7)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至數位性暴力平台與 TITAN 白皮書。' },
            'QR6': { type: 'QR Code', color: '#35495E', title: 'QR6 連結 (L8)', specs: { '位置': '離地 90 cm 玻璃牆面' }, desc: '連至 EmoGuard 情緒守護者介紹。' }
        };

        function openLayoutModal(key) {
            const data = layoutSpecsData[key];
            if (!data) return;

            document.getElementById('layout-modal-badge').textContent = data.type;
            document.getElementById('layout-modal-badge').style.background = data.color;
            document.getElementById('layout-modal-title').textContent = data.title;

            let specsHtml = '';
            for (const [k, v] of Object.entries(data.specs)) {
                specsHtml += `<div class="spec-item-m"><strong>${k}</strong><span>${v}</span></div>`;
            }
            document.getElementById('layout-modal-specs').innerHTML = specsHtml;
            document.getElementById('layout-modal-desc').innerHTML = `<p>${data.desc}</p>`;

            document.getElementById('layout-spec-modal').classList.add('active');
        }

        function closeLayoutModal() {
            document.getElementById('layout-spec-modal').classList.remove('active');
        }

        // Layout control buttons
        function setMode(mode) {
            if (mode === 'accessories') {
                document.body.classList.add('mode-accessories-only');
                document.getElementById('btn-show-accessories').classList.add('active');
                document.getElementById('btn-show-all').classList.remove('active');
            } else {
                document.body.classList.remove('mode-accessories-only');
                document.getElementById('btn-show-all').classList.add('active');
                document.getElementById('btn-show-accessories').classList.remove('active');
            }
        }

        function toggleYRuler() {
            const ruler = document.getElementById('y-ruler-overlay');
            ruler.classList.toggle('active');
            const btn = document.getElementById('btn-toggle-y-ruler');
            if (ruler.classList.contains('active')) {
                btn.classList.add('active');
                btn.textContent = '📏 Y軸高度尺 (收合)';
            } else {
                btn.classList.remove('active');
                btn.textContent = '📏 Y軸高度尺 (展開)';
            }
        }

        function toggleXRuler() {
            const ruler = document.getElementById('x-ruler-overlay');
            ruler.classList.toggle('active');
            const btn = document.getElementById('btn-toggle-x-ruler');
            if (ruler.classList.contains('active')) {
                btn.classList.add('active');
                btn.textContent = '📐 X軸間距尺 (收合)';
            } else {
                btn.classList.remove('active');
                btn.textContent = '📐 X軸間距尺 (展開)';
            }
        }


        // --- 3. 全展區 9 大作品放大說明資料庫 ---
        const artworkData = {
            '1-1': {
                badge: '單元一：創造與再造 ｜ L3 展板',
                color: 'var(--morandi-sub1)',
                title: '1-1 《奇幻劇場之旅》電子繪本',
                goals: [
                    '推廣表演藝術教育：透過電子繪本的形式，向 6 至 12 歲兒童介紹表演藝術，培養兒童對劇場與表演藝術的初步認識及興趣。',
                    '建立親近的藝術閱讀體驗：運用故事敘事與色鉛筆手繪風格，將劇場知識融入奇幻情境，降低兒童接觸表演藝術的門檻。',
                    '探索生成式 AI 輔助創作：結合生成式 AI 工具進行文字修整、插圖生成與素材管理，探索 AI 在繪本創作及藝術教育上的應用可能。'
                ],
                overview: '《奇幻劇場之旅》是一項以兒童藝術教育為核心的電子繪本創作計畫。故事以主角「小高」前往臺中國家歌劇院的旅程為起點，小高在搭乘遊覽車時進入夢鄉，展開奇幻的劇場探索。在劇場小精靈引導下，逐步介紹不同的表演藝術形式、劇場類型，以及舞臺、燈光、音響、服裝等幕後技術。創作過程結合 ChatGPT、Canva 與 Notion，協助文字調整、繪本插圖生成及素材管理。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">📖 專案成果展示</h4>
                        <p class="modal-p">完成原創電子繪本《奇幻劇場之旅》與學習延伸《奇幻劇場小百科》。現場展示電子簡報與精裝實體繪本展品（懸掛於扶手上）。</p>
                        <p class="modal-p"><b>展示連結：</b> <a href="https://www.canva.com/design/DAGbk_Hwl_A/-B7tMDyNZH2e5Bzv02ziKQ/view" target="_blank" style="color:var(--accent-cyan);">觀看 Canva 電子繪本 ↗</a></p>
                    </div>
                `
            },
            '1-2': {
                badge: '單元一：創造與再造 ｜ L3 展板',
                color: 'var(--morandi-sub1)',
                title: '1-2 《LLM 地震資訊模型 (QuakeGPT)》',
                goals: [
                    '整合地震防災資訊：蒐集並整理分散於不同平台的地震資訊，透過大型語言模型整合多元資料，提供使用者更快速且便利的地震知識查詢服務。',
                    '提升地震避難資訊的可及性：結合地圖資料與避難所位置，提供避難所搜尋及路線規劃，協助使用者掌握避難地點與前往路徑。',
                    '建立智慧化地震資訊查詢系統：運用大型語言模型與檢索增強生成（RAG）技術，讓使用者能以自然語言查詢即時及歷史地震資訊，降低防災資訊的搜尋與使用門檻。'
                ],
                overview: '臺灣地震頻繁，然而地震相關資訊分散於政府及民間平台。本專案以大型語言模型為核心，開發 QuakeGPT，結合資料蒐集、檢索增強生成（RAG）及地圖路徑規劃技術。提供「地震知識問答」、「避難所路線規劃與導航」及「歷史地震資料篩選」三大服務。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">🤖 專案成果展示</h4>
                        <p class="modal-p">建置一套以 LLM + RAG 為核心的 QuakeGPT 系統，整合台灣官方地震影片與避難收容處所地圖資料，實現自然語言路線規劃與防災知識問答。</p>
                        <p class="modal-p"><b>示範影片：</b> <a href="https://www.youtube.com/watch?v=zPNGncZwDhE" target="_blank" style="color:var(--accent-cyan);">觀看 QuakeGPT 展示影片 ↗</a></p>
                    </div>
                `
            },
            '1-3': {
                badge: '單元一：創造與再造 ｜ L4 展板',
                color: 'var(--morandi-sub1)',
                title: '1-3 《聽！海哭的聲音》海洋永續 AI 專案',
                goals: [
                    '推廣海洋永續教育：以海洋污染與生態危機為切入點，引導大眾認識海洋環境面臨的問題，提升海洋保育意識。',
                    '打造沉浸式互動學習體驗：結合繪本、前導影片與線上博物館，透過多元媒介與互動設計，讓觀眾以探索的方式認識海洋生態。',
                    '連結全球永續發展議題：呼應聯合國永續發展目標 SDGs 第14項「保護和可持續利用海洋資源」，鼓勵觀眾從認識海洋問題進一步思考實際行動。'
                ],
                overview: '專案以繪本《你聽，那是海的哭聲》為起點，描繪潛水員阿翔與人魚相遇的故事。觀眾透過 FlexClip 與 Suno 製作的前導影片進入線上沉浸式海洋博物館，從臺灣出發依循洋流方向探索南北半球各潛水點的生態危機，最後前往聯合國擔任海洋保護大使。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">🌊 專案成果展示</h4>
                        <p class="modal-p">完成原創繪本《Tears Under the Blue》、前導影片與 3D 線上海洋博物館。觀眾可在虛擬展館中透過對話機器人提問互動。</p>
                        <p class="modal-p"><b>線上展館：</b> <a href="https://www.muse.place/test84" target="_blank" style="color:var(--accent-cyan);">進入 3D 線上海洋博物館 ↗</a></p>
                    </div>
                `
            },
            '2-1': {
                badge: '單元二：偏誤與再校正 ｜ L5 展板',
                color: 'var(--morandi-sub2)',
                title: '2-1 人臉辨識的性別偏差與修正',
                goals: [
                    '探討 AI 人臉辨識的性別偏差：了解訓練資料中性別與族群分布不均，如何影響人臉偵測模型的辨識表現。',
                    '透過模型實驗驗證資料偏差：建立偏誤與公正兩種模型，比較不同訓練資料組成對辨識準確率及信心分數的影響。',
                    '建立公眾參與的多元人臉資料庫：透過網站邀請大眾提供不同性別與族群的臉部資料，從訓練資料源頭改善 AI 的公平性與泛用性。'
                ],
                overview: '運用 ResNet18 建立偏差（Biased）與公正（Fair）兩種人臉辨識模型，透過控制訓練資料中的性別與族群比例，統計驗證資料不均會放大演算法偏見。團隊進一步架設「Break the AI Gender Bias」網站，邀請大眾上傳照片共同建立多元人臉庫。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">📊 專案成果展示</h4>
                        <p class="modal-p">完成研究網站建置，包含信賴區間檢定圖表、模型切換觀察器與公眾照片上傳表單（具備去識別化隱私保護），將 AI 公平性轉化為公民參與實踐。</p>
                        <p class="modal-p"><b>研究網站：</b> <a href="https://xiaolian291.github.io/face-research-site/" target="_blank" style="color:var(--accent-cyan);">造訪 Break the AI Gender Bias 網站 ↗</a></p>
                    </div>
                `
            },
            '2-2': {
                badge: '單元二：偏誤與再校正 ｜ L5 展板',
                color: 'var(--morandi-sub2)',
                title: '2-2 風雨中的韌性——台灣農業經濟近況及轉型',
                goals: [
                    '分析台灣農業的經濟發展：比較台灣整體經濟與農業產值的變化，了解農業是否同步受惠於經濟成長。',
                    '探討農業人口與產值落差：分析農業就業人口、人口結構及人均產值的變化，了解農業面臨的結構性問題。',
                    '評估農產品價格與外部事件的影響：分析農產品價格波動，以及政策、氣候與人口等重大事件對農業經濟的影響。'
                ],
                overview: '聚焦 2015 至 2024 年台灣農業數據，分析高齡化、農村勞動力短缺與氣候極端價格波動。整理 12 份原始 Excel 報表為 5 張事實表與 3 張維度表，運用 Power BI 建立星狀資料模型，證明總體 GDP 成長並未平行反映於農民收益。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">📈 專案成果展示</h4>
                        <p class="modal-p">完成 Power BI 互動式農業經濟分析儀表板，涵蓋人口變化、人均產值落差與氣候事件對作物價格之衝擊分析。</p>
                    </div>
                `
            },
            '2-3': {
                badge: '單元二：偏誤與再校正 ｜ L6 展板',
                color: 'var(--morandi-sub2)',
                title: '2-3 本地 AI 知識庫系統 (傳統製造業轉型)',
                goals: [
                    '提升員工培訓效率：整合文字、語音與影像檢索，讓新進員工能快速取得操作指引，降低學習門檻與語言隔閡。',
                    '促進技術知識傳承：將老師傅分散的實務經驗系統化保存，建立知識共享平台，促進技術交流與持續更新。',
                    '實現安全且低成本的本地化部署：運用開源輕量化模型於企業內部運行，降低外部 AI API 的資安風險及長期使用成本。'
                ],
                overview: '製造業新進員工培訓繁瑣，且老師傅經驗缺乏系統化保存。本系統整合語音辨識 (ASR)、影像 OCR 與 RAG 技術，員工可透過自然語言或拍照上傳快速檢索機台 SOP，並自動翻譯協助外籍員工。',
                deliverableHtml: `
                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 10px; border: 1px solid var(--border-soft);">
                        <h4 style="color: var(--accent-gold); margin-bottom: 8px;">🏭 專案成果展示</h4>
                        <p class="modal-p">建置企業本地端 RAG AI 知識管理系統，實現無資安洩漏風險的私有化部署，將職人經驗轉化為共享企業資產。</p>
                    </div>
                `
            },
            '3-1': {
                badge: '單元三：應用與再想像 ｜ L7 展板',
                color: 'var(--morandi-sub3)',
                title: '3-1 用 AI 對抗 AI：數位性暴力快速反應平台',
                goals: [
                    '縮減遭受性暴力後的通報時間差：建立具隱私性的數位申報流程，快速鎖定高風險 Deepfake 或非同意影像。',
                    'NGO 協助受害者通報性暴力事件：拒絕讓受害者獨自承擔舉證壓力，引進 NGO 與代理人授權機制。',
                    '建立一個具整合性的通報系統：避免受害者深陷繁雜的求助程序，結合政府 RRT 快速反應小組優先下架。'
                ],
                overview: '近三年數位性暴力案件未通報率上升。本專案架設「數位性別保護申報平台」，包含身分選擇、匿名上報、事件描述、關鍵證據上傳、緊急威脅勾選，以及 NGO 授權代理與 RRT 優先處理機制。',
                deliverableHtml: `
                    <h4 style="color: var(--accent-cyan); margin-top: 12px; margin-bottom: 8px;">🌐 線上互動成果介面 (請於下方直接親自測試操作)</h4>
                    <div class="demo-iframe-container">
                        <iframe class="demo-iframe" src="data:text/html;charset=utf-8,%3C%21doctype%20html%3E%0A%3Chtml%20lang%3D%22zh-Hant%22%3E%0A%3Chead%3E%0A%3Cmeta%20charset%3D%22utf-8%22%20/%3E%0A%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2Cinitial-scale%3D1%22%20/%3E%0A%3Ctitle%3E%E6%95%B8%E4%BD%8D%E6%80%A7%E5%88%A5%E4%BF%9D%E8%AD%B7%E7%94%B3%E5%A0%B1%E5%B9%B3%E5%8F%B0%20%E2%80%94%20%E7%A4%BA%E6%84%8F%E7%89%88%EF%BC%88NGO%20%2B%20%E6%8C%87%E5%BC%95%EF%BC%89%3C/title%3E%0A%3Cstyle%3E%0A%20%20%3Aroot%7B%0A%20%20%20%20--bg%3A%230f1724%3B%20--card%3A%230b1220%3B%20--accent%3A%23ff3366%3B%20--muted%3A%239aa4b2%3B%20--glass%3A%20rgba%28255%2C255%2C255%2C0.04%29%3B%0A%20%20%20%20--success%3A%2321c07a%3B%20--warning%3A%23ffcc33%3B%20--danger%3A%23ff4d4f%3B%0A%20%20%20%20font-family%3A%20%22Noto%20Sans%20TC%22%2C%20system-ui%2C%20-apple-system%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20%22Helvetica%20Neue%22%2C%20Arial%3B%0A%20%20%7D%0A%20%20body%7Bbackground%3Alinear-gradient%28180deg%2C%23071026%200%25%2C%20%23071a2b%20100%25%29%3B%20color%3A%23e6eef6%3B%20margin%3A0%3B%20padding%3A28px%3B%7D%0A%20%20.container%7Bmax-width%3A1100px%3Bmargin%3A0%20auto%3B%7D%0A%20%20header%7Bdisplay%3Aflex%3Balign-items%3Acenter%3Bgap%3A16px%3Bmargin-bottom%3A20px%3B%7D%0A%20%20.logo%7Bwidth%3A64px%3Bheight%3A64px%3Bborder-radius%3A8px%3Bbackground%3Alinear-gradient%28135deg%2Cvar%28--accent%29%2C%20%23ff8ab3%29%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bfont-weight%3A700%3Bcolor%3A%23071026%7D%0A%20%20h1%7Bmargin%3A0%3Bfont-size%3A1.6rem%7D%0A%20%20p.lead%7Bmargin%3A4px%200%200%3Bcolor%3Avar%28--muted%29%7D%0A%0A%20%20.grid%7Bdisplay%3Agrid%3Bgrid-template-columns%3A1fr%20380px%3Bgap%3A20px%3Bmargin-top%3A20px%3B%7D%0A%20%20.card%7Bbackground%3Alinear-gradient%28180deg%2Cvar%28--card%29%2C%20%23071228%29%3Bpadding%3A18px%3Bborder-radius%3A12px%3Bbox-shadow%3A0%206px%2020px%20rgba%280%2C0%2C0%2C0.5%29%3Bborder%3A1px%20solid%20rgba%28255%2C255%2C255%2C0.03%29%7D%0A%20%20form%20.row%7Bdisplay%3Aflex%3Bgap%3A10px%3Bmargin-bottom%3A12px%7D%0A%20%20label%7Bdisplay%3Ablock%3Bfont-size%3A0.92rem%3Bcolor%3Avar%28--muted%29%3Bmargin-bottom%3A6px%7D%0A%20%20input%5Btype%3D%22text%22%5D%2C%20input%5Btype%3D%22email%22%5D%2C%20textarea%2C%20select%7B%0A%20%20%20%20width%3A100%25%3Bpadding%3A10px%3Bborder-radius%3A8px%3Bbackground%3Avar%28--glass%29%3Bborder%3A1px%20solid%20rgba%28255%2C255%2C255%2C0.04%29%3Bcolor%3Ainherit%3B%0A%20%20%7D%0A%20%20textarea%7Bmin-height%3A120px%3Bresize%3Avertical%7D%0A%20%20.muted%7Bfont-size%3A0.85rem%3Bcolor%3Avar%28--muted%29%3Bmargin-top%3A6px%7D%0A%20%20.btn%7Bdisplay%3Ainline-block%3Bpadding%3A10px%2014px%3Bborder-radius%3A10px%3Bbackground%3Avar%28--accent%29%3Bcolor%3A%23071026%3Bfont-weight%3A700%3Bborder%3Anone%3Bcursor%3Apointer%7D%0A%20%20.btn.secondary%7Bbackground%3Atransparent%3Bborder%3A1px%20solid%20rgba%28255%2C255%2C255%2C0.06%29%3Bcolor%3Avar%28--muted%29%7D%0A%20%20.small%7Bfont-size%3A0.9rem%3Bpadding%3A8px%2010px%3Bborder-radius%3A8px%7D%0A%0A%20%20.meta%7Bfont-size%3A0.85rem%3Bcolor%3Avar%28--muted%29%3Bmargin-top%3A8px%7D%0A%20%20.right-card%20.stat%7Bdisplay%3Aflex%3Balign-items%3Acenter%3Bgap%3A12px%3Bmargin-bottom%3A12px%7D%0A%20%20.badge%7Bpadding%3A6px%208px%3Bborder-radius%3A8px%3Bbackground%3Argba%28255%2C255%2C255%2C0.03%29%3Bfont-weight%3A700%7D%0A%20%20.danger%7Bcolor%3Avar%28--danger%29%3Bfont-weight%3A700%7D%0A%20%20.warning%7Bcolor%3Avar%28--warning%29%3Bfont-weight%3A700%7D%0A%20%20.success%7Bcolor%3Avar%28--success%29%3Bfont-weight%3A700%7D%0A%0A%20%20footer%7Bmargin-top%3A18px%3Bcolor%3Avar%28--muted%29%3Bfont-size%3A0.85rem%7D%0A%0A%20%20details.summary%7Bmargin-top%3A10px%7D%0A%20%20.checklist%7Bbackground%3Argba%28255%2C255%2C255%2C0.02%29%3Bpadding%3A10px%3Bborder-radius%3A8px%3Bcolor%3Avar%28--muted%29%3Bmargin-top%3A8px%7D%0A%0A%20%20/%2A%20modal%20%2A/%0A%20%20.modal-backdrop%7Bposition%3Afixed%3Binset%3A0%3Bdisplay%3Anone%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bbackground%3Argba%283%2C6%2C12%2C0.6%29%3Bz-index%3A9999%7D%0A%20%20.modal%7Bwidth%3A92%25%3Bmax-width%3A720px%3Bbackground%3A%2307132a%3Bborder-radius%3A12px%3Bpadding%3A18px%3Bborder%3A1px%20solid%20rgba%28255%2C255%2C255%2C0.06%29%7D%0A%20%20.modal%20h3%7Bmargin%3A0%200%208px%7D%0A%20%20.risk-meter%7Bheight%3A10px%3Bborder-radius%3A10px%3Bbackground%3Argba%28255%2C255%2C255%2C0.05%29%3Boverflow%3Ahidden%3Bmargin%3A8px%200%7D%0A%20%20.risk-meter%20%3E%20i%7Bdisplay%3Ablock%3Bheight%3A100%25%3Bbackground%3Alinear-gradient%2890deg%2Cvar%28--danger%29%2Cvar%28--warning%29%29%3Bwidth%3A10%25%7D%0A%20%20.modal%20.suggestions%7Bmargin-top%3A10px%7D%0A%20%20.modal%20.actions%7Bdisplay%3Aflex%3Bgap%3A10px%3Bjustify-content%3Aflex-end%3Bmargin-top%3A14px%7D%0A%0A%20%20.log%7Bbackground%3Argba%28255%2C255%2C255%2C0.02%29%3Bpadding%3A8px%3Bborder-radius%3A8px%3Bmargin-top%3A10px%3Bcolor%3Avar%28--muted%29%3Bfont-size%3A0.9rem%7D%0A%20%20code.small%7Bbackground%3Argba%28255%2C255%2C255%2C0.03%29%3Bpadding%3A6px%3Bborder-radius%3A6px%3Bcolor%3Avar%28--muted%29%7D%0A%20%20.hint%7Bfont-size%3A0.86rem%3Bcolor%3A%23cfe8ff%3Bmargin-top%3A6px%7D%0A%20%20.role-row%7Bdisplay%3Aflex%3Bgap%3A8px%3Bflex-wrap%3Awrap%3Bmargin-bottom%3A8px%7D%0A%0A%20%20%40media%20%28max-width%3A1000px%29%7B%20.grid%7Bgrid-template-columns%3A1fr%3B%7D%20.right-card%7Border%3A-1%7D%7D%0A%3C/style%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cheader%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22logo%22%3ETB%3C/div%3E%0A%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%3Ch1%3E%E6%95%B8%E4%BD%8D%E6%80%A7%E5%88%A5%E4%BF%9D%E8%AD%B7%E7%94%B3%E5%A0%B1%E5%B9%B3%E5%8F%B0%20%E2%80%94%20%E7%A4%BA%E6%84%8F%E7%89%88%EF%BC%88NGO%20%E6%8C%87%E5%BC%95%E7%89%88%EF%BC%89%3C/h1%3E%0A%20%20%20%20%20%20%20%20%3Cp%20class%3D%22lead%22%3E%E7%99%BC%E7%8F%BE%E6%8F%9B%E8%87%89%20/%20%E9%9D%9E%E5%90%8C%E6%84%8F%E5%BD%B1%E5%83%8F%E6%88%96%E6%95%B8%E4%BD%8D%E6%80%A7%E6%9A%B4%E5%8A%9B%EF%BC%9F%E7%AB%8B%E5%8D%B3%E7%94%B3%E5%A0%B1%20%E2%80%94%20%E6%88%91%E5%80%91%E6%94%AF%E6%8F%B4%E5%80%8B%E4%BA%BA%E8%88%87%20NGO%20%E4%BB%A3%E7%90%86%E9%80%9A%E5%A0%B1%EF%BC%8C%E7%B3%BB%E7%B5%B1%E6%9C%83%E4%BB%A5%20AI%20%2B%20RRT%20%E9%80%B2%E8%A1%8C%E5%84%AA%E5%85%88%E8%99%95%E7%90%86%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/header%3E%0A%0A%20%20%20%20%3Cdiv%20class%3D%22grid%22%3E%0A%20%20%20%20%20%20%3C%21--%20LEFT%3A%20Form%20--%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22card%22%3E%0A%20%20%20%20%20%20%20%20%3Ch2%20style%3D%22margin-top%3A0%22%3E%E7%AB%8B%E5%8D%B3%E7%94%B3%E5%A0%B1%EF%BC%88%E8%AB%8B%E6%8C%89%E6%8C%87%E5%BC%95%E5%A1%AB%E5%AF%AB%EF%BC%89%3C/h2%3E%0A%20%20%20%20%20%20%20%20%3Cp%20class%3D%22muted%22%3E%E6%8F%90%E7%A4%BA%EF%BC%9A%E8%8B%A5%E6%82%A8%E4%BB%A3%E8%A1%A8%20NGO%20%E6%88%96%E6%AC%B2%E4%BB%A3%E7%90%86%E8%A2%AB%E5%AE%B3%E4%BA%BA%E4%B8%8A%E5%A0%B1%EF%BC%8C%E8%AB%8B%E5%9C%A8%E4%B8%8B%E6%96%B9%E9%81%B8%E6%93%87%E3%80%8C%E6%88%91%E4%BB%A3%E8%A1%A8%20NGO%E3%80%8D%E4%B8%A6%E4%B8%8A%E5%82%B3%E6%8E%88%E6%AC%8A%E6%96%87%E4%BB%B6%EF%BC%9B%E8%8B%A5%E7%82%BA%E7%95%B6%E4%BA%8B%E4%BA%BA%EF%BC%8C%E5%BB%BA%E8%AD%B0%E6%8F%90%E4%BE%9B%E8%81%AF%E7%B5%A1%E6%96%B9%E5%BC%8F%E4%BB%A5%E4%BE%BF%E5%8F%96%E5%BE%97%E5%BE%8C%E7%BA%8C%E5%8D%94%E5%8A%A9%EF%BC%88%E5%8F%AF%E9%81%B8%E6%93%87%E5%8C%BF%E5%90%8D%EF%BC%89%E3%80%82%3C/p%3E%0A%0A%20%20%20%20%20%20%20%20%3Cform%20id%3D%22reportForm%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E6%82%A8%E6%98%AF%EF%BC%9F%EF%BC%88%E8%AB%8B%E9%81%B8%E6%93%87%E9%81%A9%E7%94%A8%E8%BA%AB%E5%88%86%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22role-row%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22reporter_role%22%20value%3D%22victim%22%20checked%3E%20%E6%88%91%E6%98%AF%E7%95%B6%E4%BA%8B%E4%BA%BA%EF%BC%88%E5%8F%97%E5%AE%B3%E8%80%85%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22reporter_role%22%20value%3D%22friend%22%3E%20%E6%88%91%E6%98%AF%E8%A6%AA%E5%8F%8B%EF%BC%8F%E4%BB%A3%E7%90%86%E4%BA%BA%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22reporter_role%22%20value%3D%22thirdparty%22%3E%20%E5%96%84%E6%84%8F%E7%AC%AC%E4%B8%89%E6%96%B9%EF%BC%88%E7%99%BC%E7%8F%BE/%E7%9B%AE%E6%93%8A%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22reporter_role%22%20value%3D%22ngo%22%3E%20%E6%88%91%E4%BB%A3%E8%A1%A8%20NGO%20/%20%E6%A9%9F%E6%A7%8B%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22ngoFields%22%20style%3D%22display%3Anone%3Bmargin-bottom%3A12px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E6%A9%9F%E6%A7%8B%E5%90%8D%E7%A8%B1%EF%BC%88%E8%8B%A5%E7%82%BA%20NGO%EF%BC%8C%E8%AB%8B%E5%A1%AB%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22text%22%20name%3D%22organization%22%20placeholder%3D%22%E6%A9%9F%E6%A7%8B%E6%88%96%E5%9C%98%E9%AB%94%E5%90%8D%E7%A8%B1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20style%3D%22margin-top%3A8px%22%3ENGO%20%E6%8E%88%E6%AC%8A%E6%96%87%E4%BB%B6%EF%BC%88%E6%8E%83%E6%8F%8F%E6%AA%94%20/%20PDF%EF%BC%8C%E4%BE%9B%E5%B9%B3%E5%8F%B0%E9%A9%97%E8%AD%89%E4%BB%A3%E7%90%86%E6%AC%8A%E9%99%90%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22file%22%20name%3D%22ngo_auth%22%20id%3D%22ngoAuthInput%22%20accept%3D%22application/pdf%2Cimage/%2A%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22hint%22%3E%E8%AA%AA%E6%98%8E%EF%BC%9A%E4%B8%8A%E5%82%B3%E6%8E%88%E6%AC%8A%E6%96%87%E4%BB%B6%E5%8F%AF%E8%AE%93%E6%94%BF%E5%BA%9C%E5%B9%B3%E5%8F%B0%E5%9C%A8%E9%9C%80%E8%A6%81%E6%99%82%E7%9B%B4%E6%8E%A5%E8%88%87%E6%82%A8%E8%81%AF%E7%B5%A1%E4%B8%A6%E6%8E%88%E4%BA%88%E4%BB%A3%E7%90%86%E8%99%95%E7%90%86%E5%84%AA%E5%85%88%E6%AC%8A%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22flex%3A1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E6%98%AF%E5%90%A6%E9%A1%98%E6%84%8F%E6%8F%90%E4%BE%9B%E8%81%AF%E7%B5%A1%E6%96%B9%E5%BC%8F%EF%BC%9F%EF%BC%88%E9%81%B8%E5%A1%AB%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22email%22%20name%3D%22contact%22%20placeholder%3D%22Email%20%E6%88%96%E6%89%8B%E6%A9%9F%20%28%E9%81%B8%E5%A1%AB%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A140px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E5%8C%BF%E5%90%8D%E4%B8%8A%E5%A0%B1%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cselect%20name%3D%22anonymous%22%20class%3D%22small%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22true%22%3E%E6%98%AF%EF%BC%88%E5%8C%BF%E5%90%8D%EF%BC%89%3C/option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22false%22%3E%E5%90%A6%EF%BC%88%E6%8F%90%E4%BE%9B%E8%81%AF%E7%B5%A1%EF%BC%89%3C/option%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/select%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E4%BA%8B%E4%BB%B6%E9%A1%9E%E5%9E%8B%EF%BC%88%E5%8F%AF%E5%A4%9A%E9%81%B8%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3Aflex%3Bgap%3A8px%3Bmargin-bottom%3A12px%3Bflex-wrap%3Awrap%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22type%22%20value%3D%22deepfake%22%3E%20%E6%8F%9B%E8%87%89%20/%20Deepfake%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22type%22%20value%3D%22nonconsensual%22%3E%20%E9%9D%9E%E5%90%8C%E6%84%8F%E5%BD%B1%E5%83%8F%E6%95%A3%E6%92%AD%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22type%22%20value%3D%22voicefake%22%3E%20%E5%81%BD%E9%80%A0%E8%AA%9E%E9%9F%B3%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22type%22%20value%3D%22harassment%22%3E%20%E7%B6%B2%E8%B7%AF%E9%A8%B7%E6%93%BE%20/%20%E6%80%A7%E5%88%A5%E8%A8%80%E8%AB%96%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22type%22%20value%3D%22other%22%3E%20%E5%85%B6%E4%BB%96%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E4%BA%8B%E4%BB%B6%E7%B0%A1%E8%BF%B0%EF%BC%88%E6%9C%80%E5%A4%9A%201000%20%E5%AD%97%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctextarea%20name%3D%22description%22%20placeholder%3D%22%E8%AB%8B%E7%B0%A1%E8%A6%81%E6%8F%8F%E8%BF%B0%E7%99%BC%E7%94%9F%E7%9A%84%E7%8B%80%E6%B3%81%E3%80%81%E7%99%BC%E7%8F%BE%E5%9C%B0%E9%BB%9E%E6%88%96%E5%B9%B3%E5%8F%B0%E9%80%A3%E7%B5%90...%22%3E%3C/textarea%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%E5%B9%B3%E5%8F%B0%E9%80%A3%E7%B5%90%EF%BC%88%E5%8F%AF%E9%87%8D%E8%A4%87%E8%B2%BC%E5%A4%9A%E5%80%8B%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22text%22%20name%3D%22platform_link%22%20placeholder%3D%22%E4%BE%8B%E5%A6%82%EF%BC%9A%20https%3A//platform.example/post/abc123%22%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cdetails%20style%3D%22margin-top%3A10px%22%20id%3D%22screenshotGuide%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Csummary%20style%3D%22cursor%3Apointer%3Bcolor%3Avar%28--muted%29%22%3E%E5%A6%82%E4%BD%95%E6%88%AA%E5%9C%96%E8%88%87%E8%AD%89%E6%93%9A%E4%B8%8A%E5%82%B3%EF%BC%88%E9%BB%9E%E6%93%8A%E5%B1%95%E9%96%8B%EF%BC%89%3C/summary%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22checklist%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Col%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3E%E5%8E%9F%E5%A7%8B%E9%80%A3%E7%B5%90%EF%BC%9A%3C/strong%3E%E8%AB%8B%E8%B2%BC%E4%B8%8A%E5%B9%B3%E5%8F%B0%E5%8E%9F%E5%A7%8B%E9%80%A3%E7%B5%90%EF%BC%8C%E4%BE%BF%E6%96%BC%E5%B9%B3%E5%8F%B0%E5%AE%9A%E4%BD%8D%E5%8E%9F%E5%A7%8B%E8%B2%BC%E6%96%87/%E5%BD%B1%E7%89%87%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3E%E5%A4%9A%E5%BC%B5%E6%88%AA%E5%9C%96%EF%BC%9A%3C/strong%3E%E5%BB%BA%E8%AD%B0%E8%87%B3%E5%B0%91%202%20%E5%BC%B5%E6%88%AA%E5%9C%96%EF%BC%9A%E4%B8%80%E5%BC%B5%E5%8C%85%E5%90%AB%E5%B8%B3%E8%99%9F/%E6%99%82%E9%96%93%EF%BC%8C%E5%8F%A6%E4%B8%80%E5%BC%B5%E7%82%BA%E7%95%AB%E9%9D%A2%E6%95%B4%E9%AB%94%EF%BC%9B%E8%8B%A5%E6%98%AF%E7%A7%81%E4%BA%BA%E5%B0%8D%E8%A9%B1%EF%BC%8C%E8%AB%8B%E5%8C%85%E5%90%AB%E6%99%82%E9%96%93%E6%88%B3%E8%88%87%E5%B0%8D%E6%96%B9%E5%B8%B3%E8%99%9F%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3E%E5%8E%9F%E5%A7%8B%E5%AA%92%E9%AB%94%E6%AA%94%EF%BC%9A%3C/strong%3E%E8%8B%A5%E6%82%A8%E6%93%81%E6%9C%89%E5%8E%9F%E5%A7%8B%E5%BD%B1%E7%89%87/%E9%9F%B3%E8%A8%8A%EF%BC%8C%E8%AB%8B%E4%B8%8A%E5%82%B3%E5%8E%9F%E6%AA%94%EF%BC%88%E4%B8%8D%E8%A6%81%E5%A3%93%E7%B8%AE%EF%BC%89%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3E%E8%AA%AA%E6%98%8E%E6%96%87%E4%BB%B6%EF%BC%9A%3C/strong%3E%E7%B0%A1%E7%9F%AD%E5%88%97%E5%87%BA%E6%99%82%E9%96%93%E7%B7%9A%EF%BC%88%E8%AA%B0%E5%9C%A8%E4%BD%95%E6%99%82%E5%81%9A%E4%BA%86%E4%BB%80%E9%BA%BC%EF%BC%89%EF%BC%8C%E6%9C%89%E5%8A%A9%E4%BA%BA%E5%B7%A5%E5%AF%A9%E6%A0%B8%E5%BF%AB%E9%80%9F%E5%88%A4%E6%96%B7%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Cstrong%3E%E8%8B%A5%E7%94%B1%20NGO%20%E4%BB%A3%E7%82%BA%E4%B8%8A%E5%A0%B1%EF%BC%9A%3C/strong%3E%E8%AB%8B%E4%B8%8A%E5%82%B3%E8%A2%AB%E5%AE%B3%E8%80%85%E5%90%8C%E6%84%8F%E6%9B%B8%E6%88%96%20NGO%20%E6%8E%88%E6%AC%8A%E5%87%BD%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/ol%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22muted%22%3E%E5%B0%8F%E8%B2%BC%E5%A3%AB%EF%BC%9A%E4%B8%8D%E7%9F%A5%E9%81%93%E6%80%8E%E9%BA%BC%E6%88%AA%E5%9C%96%EF%BC%9F%E9%BB%9E%E6%AD%A4%E4%B8%8B%E8%BC%89%E6%95%99%E5%AD%B8%20PDF%20%E6%88%96%E8%A7%80%E7%9C%8B%201%20%E5%88%86%E9%90%98%E7%A4%BA%E7%AF%84%E5%BD%B1%E7%89%87%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/details%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Clabel%20style%3D%22margin-top%3A10px%22%3E%E4%B8%8A%E5%82%B3%E8%AD%89%E6%93%9A%EF%BC%88%E5%BD%B1%E5%83%8F%20/%20%E9%9F%B3%E8%A8%8A%20/%20%E6%88%AA%E5%9C%96%EF%BC%8C%E7%A4%BA%E6%84%8F%EF%BC%89%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22file%22%20name%3D%22evidence%22%20id%3D%22evidenceInput%22%20accept%3D%22image/%2A%2Cvideo/%2A%2Caudio/%2A%22%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3Aflex%3Bgap%3A10px%3Balign-items%3Acenter%3Bmargin-top%3A10px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%20style%3D%22margin%3A0%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22checkbox%22%20name%3D%22emergency%22%20id%3D%22emergency%22%3E%20%E7%B7%8A%E6%80%A5%EF%BC%9A%E6%88%91%E6%84%9F%E5%88%B0%E5%A8%81%E8%84%85%E6%88%96%E9%9C%80%E8%A6%81%E7%AB%8B%E5%88%BB%E4%BB%8B%E5%85%A5%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22muted%22%3E%E8%8B%A5%E5%8B%BE%E9%81%B8%EF%BC%8C%E7%B3%BB%E7%B5%B1%E6%9C%83%E5%95%9F%E5%8B%95%E3%80%8C%E7%AB%8B%E5%8D%B3%E7%B7%A9%E8%A7%A3%E3%80%8D%E6%B5%81%E7%A8%8B%EF%BC%88%E6%9A%AB%E6%99%82%E9%9A%B1%E8%94%BD%EF%BC%8F%E9%80%9A%E5%A0%B1%E5%B9%B3%E5%8F%B0%EF%BC%8F%E5%95%9F%E5%8B%95%20RRT%EF%BC%89%E3%80%82%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3Aflex%3Bgap%3A10px%3Bmargin-top%3A14px%3Balign-items%3Acenter%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%22%20id%3D%22submitBtn%22%3E%E6%8F%90%E4%BA%A4%E7%94%B3%E5%A0%B1%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20type%3D%22button%22%20class%3D%22btn%20secondary%22%20id%3D%22demoBtn%22%3E%E7%A4%BA%E7%AF%84%E8%B3%87%E6%96%99%E5%A1%AB%E5%AF%AB%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20type%3D%22button%22%20class%3D%22btn%20secondary%22%20id%3D%22clearBtn%22%3E%E6%B8%85%E9%99%A4%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A12px%22%20class%3D%22muted%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20id%3D%22evidenceConfirm%22%20name%3D%22evidence_confirm%22%3E%20%E6%88%91%E5%B7%B2%E7%A2%BA%E8%AA%8D%E4%B8%A6%E5%8B%BE%E9%81%B8%EF%BC%9A%E4%B8%8A%E5%82%B3%E7%9A%84%E9%80%A3%E7%B5%90/%E6%88%AA%E5%9C%96%E7%82%BA%E5%AE%8C%E6%95%B4%E4%B8%94%E6%9C%AA%E7%B6%93%E4%BF%AE%E6%94%B9%EF%BC%88%E8%8B%A5%E7%82%BA%E4%BB%A3%E7%90%86%E4%B8%8A%E5%A0%B1%EF%BC%8C%E5%B7%B2%E7%8D%B2%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%90%8C%E6%84%8F%EF%BC%89%E3%80%82%3C/label%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22meta%22%3E%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88%E6%9C%83%E8%A2%AB%E7%9F%AD%E6%9A%AB%E5%8A%A0%E5%AF%86%E5%AD%98%E6%94%BE%E4%BD%9C%E7%82%BA%E5%AF%A9%E6%9F%A5%E4%B9%8B%E7%94%A8%EF%BC%9B%E8%8B%A5%E5%88%A4%E5%AE%9A%E7%82%BA%E9%AB%98%E9%A2%A8%E9%9A%AA%EF%BC%8C%E7%B3%BB%E7%B5%B1%E6%9C%83%E8%87%AA%E5%8B%95%E5%95%9F%E5%8B%95%E9%80%9A%E5%A0%B1%E6%B5%81%E7%A8%8B%E4%B8%A6%E9%80%9A%E7%9F%A5%20RRT%EF%BC%9B%E8%8B%A5%E6%82%A8%E7%82%BA%20NGO%20%E4%BB%A3%E7%90%86%E4%B8%94%E6%8F%90%E4%BE%9B%E6%8E%88%E6%AC%8A%EF%BC%8C%E5%B9%B3%E5%8F%B0%E5%B0%87%E5%84%AA%E5%85%88%E8%99%95%E7%90%86%E4%B8%A6%E8%88%87%E6%82%A8%E8%81%AF%E7%B5%A1%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%3C/form%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A18px%3Bcolor%3Avar%28--muted%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstrong%3E%E5%BF%AB%E9%80%9F%E6%8F%90%E7%A4%BA%EF%BC%9A%3C/strong%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%E8%8B%A5%E9%81%87%E4%BA%BA%E8%BA%AB%E5%A8%81%E8%84%85%EF%BC%8C%E8%AB%8B%E5%85%88%E6%92%A5%E6%89%93%E5%9C%A8%E5%9C%B0%E7%B7%8A%E6%80%A5%E9%9B%BB%E8%A9%B1%E4%B8%A6%E5%8B%BE%E9%81%B8%E3%80%8C%E7%B7%8A%E6%80%A5%E3%80%8D%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3ENGO%20%E5%8F%AF%E4%BD%9C%E7%82%BA%E4%BB%A3%E7%90%86%E4%B8%8A%E5%A0%B1%E4%B8%A6%E5%8D%94%E5%8A%A9%E8%A2%AB%E5%AE%B3%E8%80%85%E5%8F%96%E5%BE%97%E6%B3%95%E5%BE%8B%E8%88%87%E5%BF%83%E7%90%86%E6%94%AF%E6%8F%B4%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%E8%8B%A5%E6%82%A8%E4%B8%8D%E7%A2%BA%E5%AE%9A%E6%98%AF%E5%90%A6%E7%82%BA%E9%9D%9E%E5%90%8C%E6%84%8F%E5%BD%B1%E5%83%8F%EF%BC%8C%E4%BB%8D%E5%8F%AF%E4%B8%8A%E5%A0%B1%EF%BC%8C%E6%88%91%E5%80%91%E5%B0%87%E9%80%B2%E8%A1%8C%E5%88%9D%E6%AD%A5%E5%88%A4%E6%96%B7%E3%80%82%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/ul%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%3C%21--%20RIGHT%3A%20info%20--%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22card%20right-card%22%3E%0A%20%20%20%20%20%20%20%20%3Ch3%20style%3D%22margin-top%3A0%22%3E%E5%B9%B3%E5%8F%B0%E5%8D%B3%E6%99%82%E7%8B%80%E6%85%8B%EF%BC%88%E6%A8%A1%E6%93%AC%EF%BC%89%3C/h3%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22stat%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22flex%3A1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22badge%22%3E%E5%BE%85%E8%99%95%E7%90%86%E6%A1%88%E4%BB%B6%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22font-size%3A1.2rem%3Bfont-weight%3A700%22%3E12%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22muted%22%3E%E9%81%8E%E5%8E%BB%2024%20%E5%B0%8F%E6%99%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A140px%3Btext-align%3Aright%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22badge%22%3E%E5%B9%B3%E5%9D%87%20AI%20%E5%88%A4%E5%AE%9A%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22font-size%3A1.1rem%22%20class%3D%22warning%22%3E50%25%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22muted%22%3E%E5%88%86%E6%95%B8%E9%96%BE%E5%80%BC%E5%8F%AF%E8%AA%BF%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A8px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22badge%22%3E%E5%BF%AB%E9%80%9F%E8%99%95%E7%BD%AE%EF%BC%88%E9%AB%98%E9%A2%A8%E9%9A%AA%EF%BC%89%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22muted%22%3E%E7%B3%BB%E7%B5%B1%E6%9C%83%E5%98%97%E8%A9%A6%E8%87%AA%E5%8B%95%EF%BC%9A%E4%B8%8B%E6%9E%B6%20/%20%E7%96%91%E4%BC%BC%E6%A8%99%E8%A8%BB%20/%20%E9%80%9A%E7%9F%A5%20RRT%E3%80%82%E8%8B%A5%E7%94%B1%20NGO%20%E4%BB%A3%E7%90%86%E4%B8%8A%E5%A0%B1%E4%B8%94%E9%99%84%E6%8E%88%E6%AC%8A%EF%BC%8C%E6%A1%88%E4%BB%B6%E6%9C%83%E5%88%97%E5%85%A5%E5%84%AA%E5%85%88%E8%99%95%E7%90%86%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Chr%20style%3D%22border%3Anone%3Bborder-top%3A1px%20solid%20rgba%28255%2C255%2C255%2C0.03%29%3Bmargin%3A12px%200%22%3E%0A%0A%20%20%20%20%20%20%20%20%3Ch4%20style%3D%22margin%3A8px%200%206px%22%3E%E5%A6%82%E4%BD%95%E9%81%8B%E4%BD%9C%EF%BC%88%E7%B0%A1%E8%A6%81%EF%BC%89%3C/h4%3E%0A%20%20%20%20%20%20%20%20%3Col%20style%3D%22color%3Avar%28--muted%29%3Bpadding-left%3A18px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cli%3E%E5%80%8B%E4%BA%BA%20/%20NGO%20%E6%8F%90%E4%BA%A4%20%E2%86%92%20%E7%B3%BB%E7%B5%B1%E8%87%AA%E5%8B%95%E5%81%B5%E6%B8%AC%EF%BC%88%E5%BD%B1%E5%83%8F%20/%20%E8%81%B2%E9%9F%B3%20/%20%E6%96%87%E5%AD%97%EF%BC%89%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cli%3E%E9%A2%A8%E9%9A%AA%E8%A9%95%E5%88%86%20%E2%86%92%20%E8%8B%A5%E9%AB%98%EF%BC%8C%E7%AB%8B%E5%8D%B3%E6%9A%AB%E6%99%82%E9%9A%B1%E8%94%BD%E4%B8%A6%E9%80%9A%E7%9F%A5%20RRT%20%2B%20%E8%A2%AB%E5%AE%B3%E4%BA%BA/NGO%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cli%3E%E4%BA%BA%E5%B7%A5%E5%BF%AB%E9%80%9F%E5%AF%A9%E6%A0%B8%EF%BC%88%E7%9B%AE%E6%A8%99%202%20%E5%B0%8F%E6%99%82%E5%85%A7%EF%BC%89%E2%86%92%20%E6%B1%BA%E5%AE%9A%E6%B0%B8%E4%B9%85%E4%B8%8B%E6%9E%B6%EF%BC%8F%E6%B3%95%E5%BE%8B%E9%80%9A%E5%A0%B1%3C/li%3E%0A%20%20%20%20%20%20%20%20%3C/ol%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A12px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%22%20id%3D%22viewCases%22%3E%E6%9F%A5%E7%9C%8B%E5%8C%BF%E5%90%8D%E6%A1%88%E4%BB%B6%E5%84%80%E8%A1%A8%E6%9D%BF%EF%BC%88%E7%A4%BA%E6%84%8F%EF%BC%89%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A14px%22%20class%3D%22muted%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstrong%3E%E5%90%88%E4%BD%9C%EF%BC%9A%3C/strong%3E%E8%AD%A6%E6%94%BF%E3%80%81%E5%8F%B8%E6%B3%95%E3%80%81%E6%A0%A1%E5%9C%92%E6%80%A7%E5%B9%B3%E4%B8%AD%E5%BF%83%E3%80%81NGO%E3%80%82%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3Cfooter%20class%3D%22card%22%20style%3D%22margin-top%3A18px%22%3E%0A%20%20%20%20%20%20%3Cstrong%3E%E5%82%99%E8%A8%BB%EF%BC%9A%3C/strong%3E%E6%AD%A4%E7%A4%BA%E6%84%8F%E9%A0%81%E7%82%BA%E5%89%8D%E7%AB%AF%20mockup%EF%BC%8C%E5%AF%A6%E5%8B%99%E9%83%A8%E7%BD%B2%E6%87%89%E5%8A%A0%E5%85%A5%E7%9C%9F%E5%AF%A6%E5%BE%8C%E7%AB%AF%20ML%20%E5%81%B5%E6%B8%AC%E3%80%81%E6%AA%94%E6%A1%88%E8%99%95%E7%90%86%E3%80%81%E6%B3%95%E5%BE%8B%20SOP%20%E8%88%87%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E6%A9%9F%E5%88%B6%E3%80%82NGO%20%E4%BB%A3%E7%90%86%E9%9C%80%E4%BE%9D%E5%90%84%E5%9C%8B%E6%B3%95%E5%BE%8B%E7%B0%BD%E7%BD%B2%E6%8E%88%E6%AC%8A%E6%96%87%E4%BB%B6%E4%BB%A5%E7%B6%AD%E8%AD%B7%E7%A8%8B%E5%BA%8F%E6%AD%A3%E7%BE%A9%E3%80%82%0A%20%20%20%20%3C/footer%3E%0A%20%20%3C/div%3E%0A%0A%20%20%3C%21--%20modal%20--%3E%0A%20%20%3Cdiv%20id%3D%22modal%22%20class%3D%22modal-backdrop%22%20role%3D%22dialog%22%20aria-modal%3D%22true%22%20aria-hidden%3D%22true%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22modal%22%20role%3D%22document%22%20aria-labelledby%3D%22modalTitle%22%3E%0A%20%20%20%20%20%20%3Ch3%20id%3D%22modalTitle%22%3E%E7%B3%BB%E7%B5%B1%E5%81%B5%E6%B8%AC%E7%B5%90%E6%9E%9C%3C/h3%3E%0A%20%20%20%20%20%20%3Cp%20id%3D%22modalSummary%22%20class%3D%22muted%22%3E%E6%AD%A3%E5%9C%A8%E5%88%86%E6%9E%90%E4%B8%8A%E5%82%B3%E7%9A%84%E8%B3%87%E6%96%99%E2%80%A6%3C/p%3E%0A%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22risk-meter%22%20aria-hidden%3D%22true%22%3E%3Ci%20id%3D%22riskBar%22%3E%3C/i%3E%3C/div%3E%0A%20%20%20%20%20%20%3Cdiv%20id%3D%22riskLabel%22%20style%3D%22font-weight%3A700%3Bmargin-top%3A6px%22%3E%3C/div%3E%0A%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22suggestions%22%20id%3D%22suggestions%22%3E%3C/div%3E%0A%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22actions%22%20id%3D%22modalActions%22%3E%3C/div%3E%0A%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22log%22%20id%3D%22modalLog%22%20style%3D%22display%3Anone%22%3E%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%3C/div%3E%0A%0A%3Cscript%3E%0A/%2A%20Enhanced%20demo%20logic%20with%20NGO%20%2B%20checklist%20behaviour.%20%0A%20%20%20-%20Shows%20NGO%20fields%20if%20reporter_role%20%3D%3D%3D%20%27ngo%27%0A%20%20%20-%20Verifies%20evidence%20confirm%20checkbox%0A%20%20%20-%20High-risk%20automatic%20action%20triggers%20still%20present%0A%2A/%0A%0Afunction%20sleep%28ms%29%7Breturn%20new%20Promise%28r%3D%3EsetTimeout%28r%2Cms%29%29%3B%7D%0A%0Adocument.querySelectorAll%28%27input%5Bname%3D%22reporter_role%22%5D%27%29.forEach%28r%3D%3E%7B%0A%20%20r.addEventListener%28%27change%27%2C%20%28%29%3D%3E%7B%0A%20%20%20%20const%20val%20%3D%20document.querySelector%28%27input%5Bname%3D%22reporter_role%22%5D%3Achecked%27%29.value%3B%0A%20%20%20%20document.getElementById%28%27ngoFields%27%29.style.display%20%3D%20val%20%3D%3D%3D%20%27ngo%27%20%3F%20%27block%27%20%3A%20%27none%27%3B%0A%20%20%7D%29%3B%0A%7D%29%3B%0A%0A/%2A%20detection%20remains%20simulated%20%2A/%0Aasync%20function%20performDetection%28formData%29%20%7B%0A%20%20const%20keywords%20%3D%20%5B%27%E6%8F%9B%E8%87%89%27%2C%27deepfake%27%2C%27%E8%A3%B8%E7%85%A7%27%2C%27non-consensual%27%2C%27%E5%81%BD%E9%80%A0%E5%BD%B1%E5%83%8F%27%2C%27%E5%81%BD%E9%9F%B3%27%2C%27deep%20fake%27%2C%27deepfake%27%2C%27%E5%BC%B7%E6%9A%B4%27%2C%27%E5%A8%81%E8%84%85%27%2C%27%E5%81%B7%E6%8B%8D%27%2C%27%E8%A3%B8%E9%9C%B2%27%5D%3B%0A%20%20let%20text%20%3D%20%28formData.get%28%27description%27%29%20%7C%7C%20%27%27%29.toLowerCase%28%29%3B%0A%20%20let%20score%20%3D%200%3B%0A%20%20let%20hits%20%3D%20%5B%5D%3B%0A%0A%20%20keywords.forEach%28k%3D%3E%7B%0A%20%20%20%20if%20%28text.includes%28k%29%29%20%7B%20score%20%2B%3D%2025%3B%20hits.push%28k%29%3B%20%7D%0A%20%20%7D%29%3B%0A%0A%20%20const%20file%20%3D%20document.getElementById%28%27evidenceInput%27%29.files%5B0%5D%3B%0A%20%20if%20%28file%29%20%7B%0A%20%20%20%20const%20name%20%3D%20file.name.toLowerCase%28%29%3B%0A%20%20%20%20if%20%28name.includes%28%27deep%27%29%20%7C%7C%20name.includes%28%27fake%27%29%20%7C%7C%20name.includes%28%27%E6%8F%9B%E8%87%89%27%29%29%20%7B%20score%20%2B%3D%2040%3B%20hits.push%28%27file_deepfake%27%29%3B%20%7D%0A%20%20%20%20if%20%28file.type.startsWith%28%27video%27%29%29%20score%20%2B%3D%2010%3B%0A%20%20%20%20if%20%28file%20%26%26%20file.size%20%3E%201024%2A1024%2A5%29%20score%20%2B%3D%205%3B%0A%20%20%7D%0A%0A%20%20if%20%28formData.get%28%27emergency%27%29%20%3D%3D%3D%20%27on%27%29%20score%20%2B%3D%2030%3B%0A%0A%20%20score%20%3D%20Math.min%28100%2C%20score%29%3B%0A%20%20let%20level%20%3D%20score%20%3E%3D%2075%20%3F%20%27high%27%20%3A%20%28score%20%3E%3D%2035%20%3F%20%27medium%27%20%3A%20%27low%27%29%3B%0A%0A%20%20let%20suggestions%20%3D%20%5B%5D%3B%0A%20%20if%20%28level%20%3D%3D%3D%20%27high%27%29%20%7B%0A%20%20%20%20suggestions.push%28%27%E7%B3%BB%E7%B5%B1%E5%88%A4%E5%AE%9A%E7%82%BA%E9%AB%98%E9%A2%A8%E9%9A%AA%EF%BC%9A%E5%BB%BA%E8%AD%B0%E8%AB%8B%E6%B1%82%E7%AB%8B%E5%8D%B3%E9%80%9A%E5%A0%B1%E8%88%87%E6%9A%AB%E6%99%82%E4%B8%8B%E6%9E%B6%E3%80%82%27%29%3B%0A%20%20%20%20suggestions.push%28%27%E8%8B%A5%E6%82%A8%E7%82%BA%20NGO%20%E4%BB%A3%E7%90%86%E4%B8%94%E5%B7%B2%E4%B8%8A%E5%82%B3%E6%8E%88%E6%AC%8A%E6%96%87%E4%BB%B6%EF%BC%8C%E8%AB%8B%E7%A2%BA%E8%AA%8D%E6%AA%94%E6%A1%88%E5%B7%B2%E9%99%84%E4%B8%8A%E3%80%82%27%29%3B%0A%20%20%7D%20else%20if%20%28level%20%3D%3D%3D%20%27medium%27%29%20%7B%0A%20%20%20%20suggestions.push%28%27%E7%B3%BB%E7%B5%B1%E5%81%B5%E6%B8%AC%E5%88%B0%E7%96%91%E4%BC%BC%E9%9D%9E%E5%90%8C%E6%84%8F%E6%88%96%E5%8F%AF%E8%83%BD%E6%80%A7%E5%88%A5%E6%80%A7%E6%9A%B4%E5%8A%9B%E7%9A%84%E8%A8%8A%E6%81%AF%E3%80%82%E6%82%A8%E5%8F%AF%E9%81%B8%E6%93%87%E7%94%B3%E8%AB%8B%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E6%88%96%E7%B4%A2%E5%8F%96%E9%9D%9E%E5%BC%B7%E5%88%B6%E6%94%B9%E5%AF%AB%E5%BB%BA%E8%AD%B0%E3%80%82%27%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20suggestions.push%28%27%E5%81%B5%E6%B8%AC%E7%B5%90%E6%9E%9C%E7%82%BA%E4%BD%8E%E9%A2%A8%E9%9A%AA%E3%80%82%E8%8B%A5%E6%82%A8%E4%BB%8D%E6%9C%89%E7%96%91%E6%85%AE%EF%BC%8C%E8%AB%8B%E7%94%B3%E8%AB%8B%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E3%80%82%27%29%3B%0A%20%20%7D%0A%0A%20%20await%20sleep%28500%29%3B%0A%20%20return%20%7B%20score%2C%20level%2C%20hits%2C%20suggestions%20%7D%3B%0A%7D%0A%0A/%2A%20Simulate%20auto%20action%20%28returns%20case%20id%20%2B%20log%29%20%2A/%0Aasync%20function%20performAutoAction%28caseData%2C%20actionType%3D%27notify%27%29%20%7B%0A%20%20await%20sleep%28700%29%3B%0A%20%20const%20caseId%20%3D%20%27TB-%27%2BMath.random%28%29.toString%2836%29.slice%282%2C8%29.toUpperCase%28%29%3B%0A%20%20const%20now%20%3D%20new%20Date%28%29.toLocaleString%28%29%3B%0A%20%20const%20log%20%3D%20%5B%0A%20%20%20%20%60%5B%24%7Bnow%7D%5D%20Case%20created%3A%20%24%7BcaseId%7D%60%2C%0A%20%20%20%20%60%5B%24%7Bnow%7D%5D%20Auto-action%3A%20%24%7BactionType%7D%20triggered%60%2C%0A%20%20%20%20%60%5B%24%7Bnow%7D%5D%20Notification%20sent%20to%20RRT%20and%20partner%20platforms%20%28webhook%20simulated%29%60%2C%0A%20%20%20%20%60%5B%24%7Bnow%7D%5D%20Evidence%20preserved%20and%20encrypted%20%28demo%29%60%2C%0A%20%20%5D%3B%0A%20%20return%20%7B%20caseId%2C%20log%20%7D%3B%0A%7D%0A%0A/%2A%20UI%20handling%20%2A/%0Aconst%20modal%20%3D%20document.getElementById%28%27modal%27%29%3B%0Aconst%20riskBar%20%3D%20document.getElementById%28%27riskBar%27%29%3B%0Aconst%20riskLabel%20%3D%20document.getElementById%28%27riskLabel%27%29%3B%0Aconst%20suggestionsEl%20%3D%20document.getElementById%28%27suggestions%27%29%3B%0Aconst%20modalSummary%20%3D%20document.getElementById%28%27modalSummary%27%29%3B%0Aconst%20modalActions%20%3D%20document.getElementById%28%27modalActions%27%29%3B%0Aconst%20modalLog%20%3D%20document.getElementById%28%27modalLog%27%29%3B%0A%0Adocument.getElementById%28%27submitBtn%27%29.addEventListener%28%27click%27%2C%20async%20%28e%29%3D%3E%7B%0A%20%20e.preventDefault%28%29%3B%0A%20%20const%20form%20%3D%20document.getElementById%28%27reportForm%27%29%3B%0A%20%20const%20fd%20%3D%20new%20FormData%28form%29%3B%0A%0A%20%20//%20ensure%20evidence%20confirm%20if%20evidence%20exists%0A%20%20const%20evidenceExists%20%3D%20document.getElementById%28%27evidenceInput%27%29.files.length%20%3E%200%3B%0A%20%20if%20%28%21fd.get%28%27description%27%29%20%7C%7C%20fd.get%28%27description%27%29.trim%28%29.length%20%3C%2010%29%20%7B%0A%20%20%20%20alert%28%27%E8%AB%8B%E7%B0%A1%E8%A6%81%E6%8F%8F%E8%BF%B0%E4%BA%8B%E4%BB%B6%EF%BC%88%E8%87%B3%E5%B0%91%2010%20%E5%AD%97%EF%BC%89%E4%BB%A5%E5%88%A9%E5%88%A4%E5%AE%9A%E3%80%82%27%29%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20if%20%28evidenceExists%20%26%26%20%21document.getElementById%28%27evidenceConfirm%27%29.checked%29%20%7B%0A%20%20%20%20alert%28%27%E8%8B%A5%E4%B8%8A%E5%82%B3%E8%AD%89%E6%93%9A%EF%BC%8C%E8%AB%8B%E5%8B%BE%E9%81%B8%E3%80%8C%E6%88%91%E5%B7%B2%E7%A2%BA%E8%AA%8D%E4%B8%8A%E5%82%B3%E7%9A%84%E9%80%A3%E7%B5%90/%E6%88%AA%E5%9C%96%E7%82%BA%E5%AE%8C%E6%95%B4%E4%B8%94%E6%9C%AA%E7%B6%93%E4%BF%AE%E6%94%B9%E3%80%8D%E3%80%82%27%29%3B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20//%20if%20NGO%20role%20ensure%20org%20and%20auth%20uploaded%0A%20%20if%20%28fd.get%28%27reporter_role%27%29%20%3D%3D%3D%20%27ngo%27%29%20%7B%0A%20%20%20%20if%20%28%21fd.get%28%27organization%27%29%20%7C%7C%20fd.get%28%27organization%27%29.trim%28%29.length%20%3C%202%29%20%7B%0A%20%20%20%20%20%20alert%28%27%E8%8B%A5%E7%94%B1%20NGO%20%E4%BB%A3%E7%90%86%E4%B8%8A%E5%A0%B1%EF%BC%8C%E8%AB%8B%E5%A1%AB%E5%AF%AB%E6%A9%9F%E6%A7%8B%E5%90%8D%E7%A8%B1%E3%80%82%27%29%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20//%20Note%3A%20in%20production%2C%20verify%20uploaded%20auth%20file%0A%20%20%7D%0A%0A%20%20modal.style.display%20%3D%20%27flex%27%3B%0A%20%20modal.setAttribute%28%27aria-hidden%27%2C%27false%27%29%3B%0A%20%20modalSummary.textContent%20%3D%20%27%E7%B3%BB%E7%B5%B1%E6%AD%A3%E5%9C%A8%E9%80%B2%E8%A1%8C%E8%87%AA%E5%8B%95%E5%81%B5%E6%B8%AC%EF%BC%88%E5%BD%B1%E5%83%8F%20/%20%E9%9F%B3%E8%A8%8A%20/%20%E6%96%87%E5%AD%97%EF%BC%89%E2%80%A6%27%3B%0A%20%20riskLabel.textContent%20%3D%20%27%27%3B%0A%20%20suggestionsEl.innerHTML%20%3D%20%27%27%3B%0A%20%20modalActions.innerHTML%20%3D%20%27%27%3B%0A%20%20modalLog.style.display%20%3D%20%27none%27%3B%0A%20%20modalLog.innerHTML%20%3D%20%27%27%3B%0A%0A%20%20const%20res%20%3D%20await%20performDetection%28fd%29%3B%0A%0A%20%20//%20update%20UI%0A%20%20riskBar.style.width%20%3D%20Math.max%286%2C%20res.score%29%20%2B%20%27%25%27%3B%0A%20%20riskBar.style.background%20%3D%20res.level%20%3D%3D%3D%20%27high%27%20%3F%20%27linear-gradient%2890deg%2Cvar%28--danger%29%2C%20%23ff9aa2%29%27%20%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28res.level%20%3D%3D%3D%20%27medium%27%20%3F%20%27linear-gradient%2890deg%2Cvar%28--warning%29%2C%20%23ffd38a%29%27%20%3A%20%27linear-gradient%2890deg%2Cvar%28--success%29%2C%20%237bd7a6%29%27%29%3B%0A%20%20riskLabel.textContent%20%3D%20%60%E9%A2%A8%E9%9A%AA%E7%AD%89%E7%B4%9A%EF%BC%9A%20%24%7Bres.level.toUpperCase%28%29%7D%20%EF%BC%88%E5%88%86%E6%95%B8%EF%BC%9A%24%7Bres.score%7D%EF%BC%89%60%3B%0A%20%20modalSummary.textContent%20%3D%20%27%E7%B3%BB%E7%B5%B1%E8%AD%89%E6%93%9A%E7%89%87%E6%AE%B5%EF%BC%9A%27%20%2B%20%28res.hits.length%20%3F%20res.hits.join%28%27%2C%20%27%29%20%3A%20%27%E7%84%A1%E6%98%8E%E9%A1%AF%E9%97%9C%E9%8D%B5%E8%A9%9E%27%29%3B%0A%20%20suggestionsEl.innerHTML%20%3D%20%27%3Cul%20style%3D%22color%3Avar%28--muted%29%22%3E%27%20%2B%20res.suggestions.map%28s%3D%3E%27%3Cli%3E%27%2Bs%2B%27%3C/li%3E%27%29.join%28%27%27%29%20%2B%20%27%3C/ul%3E%27%3B%0A%0A%20%20//%20Build%20actions%20depending%20on%20level%0A%20%20if%20%28res.level%20%3D%3D%3D%20%27high%27%29%20%7B%0A%20%20%20%20const%20btnNotify%20%3D%20document.createElement%28%27button%27%29%3B%0A%20%20%20%20btnNotify.className%20%3D%20%27small%20btn%27%3B%0A%20%20%20%20btnNotify.textContent%20%3D%20%27%E8%AB%8B%E6%B1%82%E7%AB%8B%E5%8D%B3%E4%B8%8B%E6%9E%B6%20/%20%E9%80%9A%E5%A0%B1%EF%BC%88%E8%87%AA%E5%8B%95%EF%BC%89%27%3B%0A%20%20%20%20btnNotify.onclick%20%3D%20async%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20modalActions.innerHTML%20%3D%20%27%27%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%27%E6%AD%A3%E5%9C%A8%E7%99%BC%E8%B5%B7%E7%AB%8B%E5%8D%B3%E9%80%9A%E5%A0%B1%EF%BC%8C%E8%AB%8B%E7%A8%8D%E5%80%99%E2%80%A6%27%3B%0A%20%20%20%20%20%20const%20action%20%3D%20await%20performAutoAction%28fd%2C%20%27immediate_takedown%27%29%3B%0A%20%20%20%20%20%20modalLog.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20modalLog.innerHTML%20%3D%20action.log.join%28%27%3Cbr%3E%27%29%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%60%E5%B7%B2%E7%99%BC%E5%87%BA%E9%80%9A%E5%A0%B1%E3%80%82%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%EF%BC%9A%24%7Baction.caseId%7D%E3%80%82RRT%20%E5%B0%87%E6%96%BC%E7%9F%AD%E6%99%82%E9%96%93%E5%85%A7%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E3%80%82%E8%8B%A5%E6%82%A8%E7%82%BA%20NGO%20%E4%BB%A3%E7%90%86%EF%BC%8C%E7%B3%BB%E7%B5%B1%E5%B7%B2%E5%B0%87%E6%82%A8%E5%88%97%E7%82%BA%E8%81%AF%E7%B5%A1%E7%AA%97%E5%8F%A3%E3%80%82%60%3B%0A%20%20%20%20%20%20const%20follow%20%3D%20document.createElement%28%27div%27%29%3B%0A%20%20%20%20%20%20follow.style.display%3D%27flex%27%3B%20follow.style.gap%3D%278px%27%3B%20follow.style.marginTop%3D%2710px%27%3B%0A%20%20%20%20%20%20const%20btnTrack%20%3D%20document.createElement%28%27button%27%29%3B%20btnTrack.className%3D%27small%20btn%20secondary%27%3B%20btnTrack.textContent%3D%27%E8%A4%87%E8%A3%BD%E8%BF%BD%E8%B9%A4%E7%B7%A8%E8%99%9F%27%3B%0A%20%20%20%20%20%20btnTrack.onclick%20%3D%20%28%29%3D%3E%7B%20navigator.clipboard.writeText%28action.caseId%29%3B%20alert%28%27%E5%B7%B2%E8%A4%87%E8%A3%BD%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%EF%BC%9A%27%2Baction.caseId%29%3B%20%7D%3B%0A%20%20%20%20%20%20const%20btnClose%20%3D%20document.createElement%28%27button%27%29%3B%20btnClose.className%3D%27small%20btn%27%3B%20btnClose.textContent%3D%27%E9%97%9C%E9%96%89%27%3B%20btnClose.onclick%20%3D%20closeModal%3B%0A%20%20%20%20%20%20follow.appendChild%28btnTrack%29%3B%20follow.appendChild%28btnClose%29%3B%0A%20%20%20%20%20%20modalActions.appendChild%28follow%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20btnSupport%20%3D%20document.createElement%28%27button%27%29%3B%20btnSupport.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnSupport.textContent%20%3D%20%27%E8%81%AF%E7%B5%A1%2024/7%20%E6%94%AF%E6%8F%B4%27%3B%0A%20%20%20%20btnSupport.onclick%20%3D%20%28%29%3D%3E%7B%20alert%28%27%E5%B7%B2%E9%80%A3%E7%B5%90%E8%87%B3%2024/7%20%E6%94%AF%E6%8F%B4%EF%BC%88%E7%A4%BA%E6%84%8F%EF%BC%89%27%29%3B%20%7D%3B%0A%0A%20%20%20%20const%20btnCancel%20%3D%20document.createElement%28%27button%27%29%3B%20btnCancel.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnCancel.textContent%20%3D%20%27%E6%9A%AB%E4%B8%8D%E8%99%95%E7%90%86%27%3B%0A%20%20%20%20btnCancel.onclick%20%3D%20closeModal%3B%0A%0A%20%20%20%20modalActions.appendChild%28btnNotify%29%3B%0A%20%20%20%20modalActions.appendChild%28btnSupport%29%3B%0A%20%20%20%20modalActions.appendChild%28btnCancel%29%3B%0A%20%20%7D%20else%20if%20%28res.level%20%3D%3D%3D%20%27medium%27%29%20%7B%0A%20%20%20%20const%20btnReview%20%3D%20document.createElement%28%27button%27%29%3B%20btnReview.className%20%3D%20%27small%20btn%27%3B%20btnReview.textContent%20%3D%20%27%E7%94%B3%E8%AB%8B%E4%BA%BA%E5%B7%A5%E5%BF%AB%E9%80%9F%E8%A6%86%E6%A0%B8%27%3B%0A%20%20%20%20btnReview.onclick%20%3D%20async%20%28%29%3D%3E%7B%0A%20%20%20%20%20%20modalActions.innerHTML%20%3D%20%27%27%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%27%E5%B7%B2%E6%8F%90%E4%BA%A4%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E7%94%B3%E8%AB%8B%EF%BC%8C%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%E5%B0%87%E6%96%BC%E7%A8%8D%E5%BE%8C%E6%8F%90%E4%BE%9B%E3%80%82%27%3B%0A%20%20%20%20%20%20const%20action%20%3D%20await%20performAutoAction%28fd%2C%20%27human_review_request%27%29%3B%0A%20%20%20%20%20%20modalLog.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20modalLog.innerHTML%20%3D%20action.log.join%28%27%3Cbr%3E%27%29%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%60%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E5%B7%B2%E6%8E%92%E5%85%A5%E9%9A%8A%E5%88%97%EF%BC%8C%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%EF%BC%9A%24%7Baction.caseId%7D%E3%80%82%60%3B%0A%20%20%20%20%20%20const%20btnClose%20%3D%20document.createElement%28%27button%27%29%3B%20btnClose.className%3D%27small%20btn%27%3B%20btnClose.textContent%3D%27%E9%97%9C%E9%96%89%27%3B%20btnClose.onclick%3DcloseModal%3B%0A%20%20%20%20%20%20modalActions.appendChild%28btnClose%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20btnRewrite%20%3D%20document.createElement%28%27button%27%29%3B%20btnRewrite.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnRewrite.textContent%20%3D%20%27%E7%B4%A2%E5%8F%96%E6%94%B9%E5%AF%AB%E5%BB%BA%E8%AD%B0%EF%BC%88%E9%9D%9E%E5%BC%B7%E5%88%B6%EF%BC%89%27%3B%0A%20%20%20%20btnRewrite.onclick%20%3D%20%28%29%3D%3E%7B%20alert%28%27%E6%94%B9%E5%AF%AB%E5%BB%BA%E8%AD%B0%E7%A4%BA%E6%84%8F%EF%BC%9A%E8%AB%8B%E9%81%BF%E5%85%8D%E5%85%B7%E9%AB%94%E6%9A%B4%E9%9C%B2%E5%A7%93%E5%90%8D/%E7%B4%B0%E7%AF%80%EF%BC%8C%E6%8F%90%E4%BE%9B%E5%8C%BF%E5%90%8D%E6%8F%8F%E8%BF%B0%E6%88%96%E5%8A%A0%E5%AF%86%E4%BF%9D%E7%95%99%E3%80%82%27%29%3B%20%7D%3B%0A%0A%20%20%20%20const%20btnCancel%20%3D%20document.createElement%28%27button%27%29%3B%20btnCancel.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnCancel.textContent%20%3D%20%27%E6%9A%AB%E4%B8%8D%E8%99%95%E7%90%86%27%3B%20btnCancel.onclick%20%3D%20closeModal%3B%0A%0A%20%20%20%20modalActions.appendChild%28btnReview%29%3B%0A%20%20%20%20modalActions.appendChild%28btnRewrite%29%3B%0A%20%20%20%20modalActions.appendChild%28btnCancel%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20const%20btnEdu%20%3D%20document.createElement%28%27button%27%29%3B%20btnEdu.className%20%3D%20%27small%20btn%27%3B%20btnEdu.textContent%20%3D%20%27%E5%8F%96%E5%BE%97%E6%95%99%E8%82%B2%E8%B3%87%E6%BA%90%20/%20%E6%A1%88%E4%BE%8B%E8%A7%A3%E8%AA%AA%27%3B%0A%20%20%20%20btnEdu.onclick%20%3D%20%28%29%3D%3E%7B%20alert%28%27%E6%95%99%E8%82%B2%E8%B3%87%E6%BA%90%E7%A4%BA%E6%84%8F%EF%BC%9A%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AD%B7%E9%9A%B1%E7%A7%81%E3%80%81%E5%A6%82%E4%BD%95%E8%88%89%E8%AD%89%E3%80%81%E6%B3%95%E5%BE%8B%E8%B3%87%E6%BA%90%E9%80%A3%E7%B5%90%27%29%3B%20%7D%3B%0A%0A%20%20%20%20const%20btnAsk%20%3D%20document.createElement%28%27button%27%29%3B%20btnAsk.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnAsk.textContent%20%3D%20%27%E7%94%B3%E8%AB%8B%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%EF%BC%88%E8%8B%A5%E4%BB%8D%E6%93%94%E5%BF%83%EF%BC%89%27%3B%0A%20%20%20%20btnAsk.onclick%20%3D%20async%20%28%29%3D%3E%7B%0A%20%20%20%20%20%20modalActions.innerHTML%20%3D%20%27%27%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%27%E5%B7%B2%E6%8F%90%E4%BA%A4%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E7%94%B3%E8%AB%8B%EF%BC%8C%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%E5%B0%87%E6%96%BC%E7%A8%8D%E5%BE%8C%E6%8F%90%E4%BE%9B%E3%80%82%27%3B%0A%20%20%20%20%20%20const%20action%20%3D%20await%20performAutoAction%28fd%2C%20%27human_review_request_low%27%29%3B%0A%20%20%20%20%20%20modalLog.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20modalLog.innerHTML%20%3D%20action.log.join%28%27%3Cbr%3E%27%29%3B%0A%20%20%20%20%20%20modalSummary.textContent%20%3D%20%60%E4%BA%BA%E5%B7%A5%E8%A6%86%E6%A0%B8%E5%B7%B2%E6%8E%92%E5%85%A5%E9%9A%8A%E5%88%97%EF%BC%8C%E6%A1%88%E4%BB%B6%E7%B7%A8%E8%99%9F%EF%BC%9A%24%7Baction.caseId%7D%E3%80%82%60%3B%0A%20%20%20%20%20%20const%20btnClose%20%3D%20document.createElement%28%27button%27%29%3B%20btnClose.className%3D%27small%20btn%27%3B%20btnClose.textContent%3D%27%E9%97%9C%E9%96%89%27%3B%20btnClose.onclick%3DcloseModal%3B%0A%20%20%20%20%20%20modalActions.appendChild%28btnClose%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20btnClose%20%3D%20document.createElement%28%27button%27%29%3B%20btnClose.className%20%3D%20%27small%20btn%20secondary%27%3B%20btnClose.textContent%20%3D%20%27%E9%97%9C%E9%96%89%27%3B%20btnClose.onclick%20%3D%20closeModal%3B%0A%0A%20%20%20%20modalActions.appendChild%28btnEdu%29%3B%0A%20%20%20%20modalActions.appendChild%28btnAsk%29%3B%0A%20%20%20%20modalActions.appendChild%28btnClose%29%3B%0A%20%20%7D%0A%7D%29%3B%0A%0Afunction%20closeModal%28%29%7B%20modal.style.display%3D%27none%27%3B%20modal.setAttribute%28%27aria-hidden%27%2C%27true%27%29%3B%20modalLog.style.display%3D%27none%27%3B%20%7D%0A%0Adocument.getElementById%28%27demoBtn%27%29.addEventListener%28%27click%27%2C%20%28%29%3D%3E%7B%0A%20%20document.querySelector%28%27input%5Bname%3D%22contact%22%5D%27%29.value%20%3D%20%27%27%3B%0A%20%20document.querySelector%28%27textarea%5Bname%3D%22description%22%5D%27%29.value%20%3D%20%27%EF%BC%88%E7%A4%BA%E7%AF%84%EF%BC%89%E7%99%BC%E7%8F%BE%20PlatformX%20%E4%B8%8A%E6%9C%89%E4%BA%BA%E6%95%A3%E6%92%AD%E7%96%91%E4%BC%BC%E6%8F%9B%E8%87%89%E5%BD%B1%E7%89%87%EF%BC%8C%E7%95%AB%E9%9D%A2%E5%90%AB%E8%A3%B8%E9%9C%B2%EF%BC%8C%E6%87%B7%E7%96%91%E7%82%BA%20deepfake%EF%BC%8C%E8%AB%8B%E6%B1%82%E5%84%AA%E5%85%88%E8%99%95%E7%BD%AE%E3%80%82%27%3B%0A%20%20document.querySelector%28%27input%5Bname%3D%22type%22%5D%5Bvalue%3D%22deepfake%22%5D%27%29.checked%20%3D%20true%3B%0A%20%20document.getElementById%28%27emergency%27%29.checked%20%3D%20true%3B%0A%20%20document.querySelector%28%27input%5Bname%3D%22reporter_role%22%5D%5Bvalue%3D%22ngo%22%5D%27%29.checked%20%3D%20true%3B%0A%20%20document.querySelector%28%27input%5Bname%3D%22reporter_role%22%5D%5Bvalue%3D%22ngo%22%5D%27%29.dispatchEvent%28new%20Event%28%27change%27%29%29%3B%0A%20%20document.querySelector%28%27input%5Bname%3D%22organization%22%5D%27%29.value%20%3D%20%27%E6%AD%A3%E7%BE%A9%E5%AE%88%E8%AD%B7%E5%8D%94%E6%9C%83%27%3B%0A%7D%29%3B%0A%0Adocument.getElementById%28%27clearBtn%27%29.addEventListener%28%27click%27%2C%20%28%29%3D%3E%7B%20document.getElementById%28%27reportForm%27%29.reset%28%29%3B%20document.getElementById%28%27ngoFields%27%29.style.display%3D%27none%27%3B%20%7D%29%3B%0A%0A%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E"></iframe>
                    </div>
                `
            },
            '3-2': {
                badge: '單元三：應用與再想像 ｜ L8 展板',
                color: 'var(--morandi-sub3)',
                title: '3-2 EmoGuard Insurance 情緒守護者',
                goals: [
                    '補足傳統保險忽視心理健康的缺口：針對焦慮、壓力、失眠等無診斷書生理指標的心理疾病，提供即時、預防性的保障機制。',
                    '建立「穿戴裝置 × 生理數據 × AI 壓力模型」的動態監測系統：每日追蹤用戶的心率變異指標（HRV，如 SDNN、RMSSD），量化心理壓力趨勢。',
                    '打造「預防、診斷、即時援助到動態調整保費」的個人化健康生態系：透過早期預警與諮詢券發放，降低重症發生率，減輕個人與公共醫療負擔。'
                ],
                overview: '傳統保險排斥無診斷書的心理患者。EmoGuard 結合穿戴裝置偵測 HRV/PPG 生理數據，當預測壓力異常時自動提供諮詢資源，並依健康管理狀況給予動態保費 85 折優惠。網頁採用 TITAN 科技感深色系。',
                deliverableHtml: `
                    <h4 style="color: var(--accent-cyan); margin-top: 12px; margin-bottom: 8px;">⌚ 3D 穿戴裝置與保費試算線上網頁 (請於下方直接操作 3D 手錶與面板)</h4>
                    <div class="demo-iframe-container">
                        <iframe class="demo-iframe" src="data:text/html;charset=utf-8,%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22zh-TW%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3EEmoGuard%20Insurance%20%E6%83%85%E7%B7%92%E5%AE%88%E8%AD%B7%E8%80%85%20%EF%BD%9C%203D%20%E7%A9%BF%E6%88%B4%E8%A3%9D%E7%BD%AE%E8%88%87%E6%93%AC%E7%9C%9F%E4%BF%9D%E5%96%AE%E4%BA%92%E5%8B%95%E5%B1%95%E8%A6%BD%E7%B6%B2%E9%A0%81%20%28v7%20TITAN%20Tech%20Edition%29%3C/title%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20%3Aroot%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20TITAN%20%E7%A7%91%E6%8A%80%E6%84%9F%E6%A0%B8%E5%BF%83%E8%89%B2%E7%B3%BB%20Palette%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--bg-dark%3A%20%23121820%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E7%B6%B2%E9%A0%81%E8%88%87%203D%20%E6%B7%B1%E8%89%B2%E7%A7%91%E6%8A%80%E8%83%8C%E6%99%AF%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--card-bg-dark%3A%20rgba%2826%2C%2034%2C%2046%2C%200.88%29%3B%20/%2A%20%E5%8D%8A%E9%80%8F%E6%98%8E%E7%A7%91%E6%8A%80%E6%B7%B1%E8%97%8D%20UI%20%E5%8D%A1%E7%89%87%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--card-bg-light%3A%20rgba%2832%2C%2042%2C%2056%2C%200.85%29%3B/%2A%20%E6%9F%94%E5%92%8C%E7%A7%91%E6%8A%80%E8%97%8D%E7%81%B0%E5%8D%A1%E7%89%87%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-blue%3A%20%237A93A0%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E9%88%A6%E9%87%91%E5%B1%AC%E8%97%8D%E7%81%B0%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-gold%3A%20%23DCAE7A%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E7%A7%91%E6%8A%80%E9%A6%99%E6%AA%B3%E9%87%91%20/%20%E7%90%A5%E7%8F%80%E9%87%91%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-cyan%3A%20%2300E5FF%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E9%9C%93%E8%99%B9%E9%9D%92%E8%97%8D%20/%20Cyber%20Cyan%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-teal%3A%20%2356B6C2%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E7%A7%91%E6%8A%80%E9%9D%92%E7%B6%A0%E8%89%B2%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--text-light%3A%20%23F4F0EA%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E4%BA%AE%E8%89%B2%E4%B8%BB%E8%A6%81%E6%96%87%E5%AD%97%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--text-muted%3A%20%2398A3B0%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%2A%20%E7%A7%91%E6%8A%80%E6%AC%A1%E8%A6%81%E7%81%B0%E8%97%8D%E6%96%87%E5%AD%97%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--border-tech%3A%20rgba%28138%2C%20163%2C%20176%2C%200.3%29%3B/%2A%20%E7%A7%91%E6%8A%80%E6%84%9F%E9%87%91%E5%B1%AC%E9%82%8A%E6%A1%86%20%2A/%0A%20%20%20%20%20%20%20%20%20%20%20%20--border-glow%3A%20rgba%280%2C%20229%2C%20255%2C%200.4%29%3B%20/%2A%20%E9%9C%93%E8%99%B9%E9%9D%92%E8%97%8D%E7%99%BC%E5%85%89%E9%82%8A%E6%A1%86%20%2A/%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%2A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20%22PingFang%20TC%22%2C%20%22Microsoft%20JhengHei%22%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20body%2C%20html%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20var%28--bg-dark%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%23canvas-container%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E6%A8%99%E9%A1%8C%E8%88%87%E8%AA%AA%E6%98%8E%20UI%20%E8%93%8B%E6%9D%BF%20%28%E5%B7%A6%E5%81%B4%29%20%2A/%0A%20%20%20%20%20%20%20%20.ui-header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg-dark%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2814px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2020px%2024px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2016px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%2010px%2030px%20rgba%280%2C%200%2C%200%2C%200.4%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20390px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.project-tag%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20inline-block%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--accent-gold%29%3B%20color%3A%20%23121820%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%203px%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20letter-spacing%3A%200.5px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%208px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.35rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20letter-spacing%3A%200.5px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%206px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.subtitle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.85rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.85%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.5%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.controls-hint%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28122%2C%20147%2C%20160%2C%200.15%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%208px%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.78rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20rgba%28122%2C%20147%2C%20160%2C%200.3%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E5%8F%B3%E5%81%B4%E4%BF%9D%E5%96%AE%E8%88%87%E9%81%B8%E5%96%AE%20UI%20%E9%9D%A2%E6%9D%BF%20%2A/%0A%20%20%20%20%20%20%20%20.ui-policy-panel%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20right%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg-dark%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2816px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2016px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%2010px%2030px%20rgba%280%2C%200%2C%200%2C%200.4%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20350px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%20calc%28100vh%20-%20120px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow-y%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.panel-section-title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.95rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-bottom%3A%202px%20solid%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding-bottom%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-option-card%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28255%2C%20255%2C%20255%2C%200.05%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20all%200.25s%20ease%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-option-card%3Ahover%2C%20.policy-option-card.active%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%280%2C%20229%2C%20255%2C%200.15%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-color%3A%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translateX%28-3px%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-name%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.88rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%204px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-price%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.85rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-desc%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.78rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-muted%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.45%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E8%B2%BB%E7%8E%87%E8%A9%A6%E7%AE%97%E7%B5%90%E6%9E%9C%E5%8D%A1%E7%89%87%20%2A/%0A%20%20%20%20%20%20%20%20.calculator-box%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%2818%2C%2024%2C%2032%2C%200.7%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20dashed%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.calc-row%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.82rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%206px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.calc-row.total%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.95rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-top%3A%201px%20solid%20var%28--border-soft%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding-top%3A%206px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.badge-discount%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--accent-gold%29%3B%20color%3A%20%23121820%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.7rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%202px%206px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E5%BA%95%E9%83%A8%E6%8E%A7%E5%88%B6%E5%B7%A5%E5%85%B7%E5%88%97%20%2A/%0A%20%20%20%20%20%20%20%20.ui-bottom-bar%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bottom%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translateX%28-50%25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg-dark%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2814px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%208px%2016px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2030px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%206px%2024px%20rgba%280%2C%200%2C%200%2C%200.4%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.btn-action%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%207px%2015px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.82rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20all%200.2s%20ease%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.btn-action%3Ahover%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--accent-blue%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-color%3A%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20Modal%20%E6%93%AC%E7%9C%9F%E6%AD%A3%E5%BC%8F%E4%BF%9D%E5%96%AE%E6%A2%9D%E6%AC%BE%E5%BD%88%E7%AA%97%20%2A/%0A%20%20%20%20%20%20%20%20.modal-overlay%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%20left%3A%200%3B%20right%3A%200%3B%20bottom%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%2810%2C%2014%2C%2020%2C%200.8%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%286px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%201000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20opacity%200.25s%20ease%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.modal-overlay.active%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.modal-card%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%231A222E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2016px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2090%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20620px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%2085vh%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow-y%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2024px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%2020px%2040px%20rgba%280%2C0%2C0%2C0.2%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-tech%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.modal-header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-bottom%3A%202px%20solid%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding-bottom%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2014px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.modal-title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.15rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.modal-close%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.5rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-muted%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-table%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-collapse%3A%20collapse%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.82rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-table%20th%2C%20.policy-table%20td%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20rgba%28138%2C%20163%2C%20176%2C%200.25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%208px%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.policy-table%20th%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--accent-blue%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20Loading%20Screen%20%2A/%0A%20%20%20%20%20%20%20%20%23loading%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2050%25%3B%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2020%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.1rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.spinner%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%204px%20solid%20rgba%280%2C%20229%2C%20255%2C%200.2%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-top%3A%204px%20solid%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20animation%3A%20spin%201s%20linear%20infinite%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%40keyframes%20spin%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%200%25%20%7B%20transform%3A%20rotate%280deg%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20100%25%20%7B%20transform%3A%20rotate%28360deg%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%40media%20%28max-width%3A%20768px%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20.ui-header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2010px%3B%20left%3A%2010px%3B%20right%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2012px%2014px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.title%20%7B%20font-size%3A%201.1rem%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.subtitle%20%7B%20font-size%3A%200.78rem%3B%20margin-bottom%3A%208px%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.controls-hint%20%7B%20font-size%3A%200.72rem%3B%20padding%3A%206px%2010px%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.ui-policy-panel%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%20auto%3B%20bottom%3A%2010px%3B%20right%3A%2010px%3B%20left%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%2040vh%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%3C/style%3E%0A%0A%20%20%20%20%3C%21--%20Three.js%20%E5%8F%8A%E5%85%B6%20OrbitControls%20--%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js%22%3E%0A%20%20%20%20%20%20%20%20function%20toggleHeader32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20togglePolicyPanel32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27policy-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27policy-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdn.jsdelivr.net/npm/three%400.128.0/examples/js/controls/OrbitControls.js%22%3E%0A%20%20%20%20%20%20%20%20function%20toggleHeader32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20togglePolicyPanel32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27policy-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27policy-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%0A%20%20%20%20%3C%21--%20Loading%20Screen%20--%3E%0A%20%20%20%20%3Cdiv%20id%3D%22loading%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22spinner%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3E%E8%BC%89%E5%85%A5%20EmoGuard%20TITAN%20%E7%A7%91%E6%8A%80%E6%84%9F%203D%20%E6%A8%A1%E5%9E%8B%E4%B8%AD...%3C/span%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20WebGL%20Canvas%20%E5%AE%B9%E5%99%A8%20--%3E%0A%20%20%20%20%3Cdiv%20id%3D%22canvas-container%22%3E%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%B7%A6%E4%B8%8A%E5%B0%88%E6%A1%88%E8%88%87%E8%AA%AA%E6%98%8E%E5%8D%A1%E7%89%87%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-header%22%20id%3D%22header-32%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-header-top%22%20style%3D%22display%3A%20flex%3B%20justify-content%3A%20space-between%3B%20align-items%3A%20center%3B%20gap%3A%208px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22project-tag%22%20style%3D%22margin-bottom%3A0%3B%22%3E%E5%96%AE%E5%85%83%E4%B8%89%EF%BC%9A%E6%87%89%E7%94%A8%E8%88%87%E5%86%8D%E6%83%B3%E5%83%8F%20%EF%BD%9C%20%E4%BD%9C%E5%93%81%203-2%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22toggle-ui-btn%22%20onclick%3D%22toggleHeader32%28%29%22%20style%3D%22background%3A%20rgba%28255%2C255%2C255%2C0.15%29%3B%20border%3A%201px%20solid%20var%28--border-tech%29%3B%20color%3A%20var%28--text-light%29%3B%20padding%3A%202px%208px%3B%20border-radius%3A%2012px%3B%20font-size%3A%200.75rem%3B%20cursor%3A%20pointer%3B%20font-weight%3A700%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22header-toggle-icon%22%3E%E2%96%B2%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-header-body%22%20id%3D%22header-body-32%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%20class%3D%22title%22%20style%3D%22margin-top%3A%206px%3B%22%3EEmoGuard%20Insurance%3Cbr%3E%E6%83%85%E7%B7%92%E5%AE%88%E8%AD%B7%E8%80%85%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22subtitle%22%3E%E7%A9%BF%E6%88%B4%E5%BC%8F%E8%A3%9D%E7%BD%AE%20%C3%97%20HRV%20%E7%94%9F%E7%90%86%E6%95%B8%E6%93%9A%20%C3%97%20AI%20%E5%8B%95%E6%85%8B%E4%BF%9D%E8%B2%BB%E9%A0%90%E9%98%B2%E5%9E%8B%E5%BF%83%E7%90%86%E5%81%A5%E5%BA%B7%E4%BF%9D%E9%9A%AA%E7%94%9F%E6%85%8B%E7%B3%BB%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22controls-hint%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%F0%9F%96%B1%EF%B8%8F%20360%C2%B0%20%E6%BB%91%E9%BC%A0%E6%8E%A7%E5%88%B6%EF%BC%9A%3Cb%3E%E5%B7%A6%E9%8D%B5%E6%8B%96%E6%9B%B3%3C/b%3E%20%E6%97%8B%E8%BD%89%20%EF%BD%9C%20%3Cb%3E%E6%BB%BE%E8%BC%AA%3C/b%3E%20%E7%B8%AE%E6%94%BE%20%EF%BD%9C%20%3Cb%3E%E5%8F%B3%E9%8D%B5%3C/b%3E%20%E5%B9%B3%E7%A7%BB%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%8F%B3%E5%81%B4%E4%BF%9D%E5%96%AE%E8%88%87%20AI%20%E8%B2%BB%E7%8E%87%E8%A9%A6%E7%AE%97%E5%99%A8%E9%9D%A2%E6%9D%BF%20--%3E%0A%20%20%20%20%20%20%20%20%3C%21--%20%E5%8F%B3%E5%81%B4%E4%BF%9D%E5%96%AE%E8%88%87%20AI%20%E8%B2%BB%E7%8E%87%E8%A9%A6%E7%AE%97%E5%99%A8%E9%9D%A2%E6%9D%BF%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-policy-panel%22%20id%3D%22policy-panel-32%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22panel-section-title%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%F0%9F%9B%A1%EF%B8%8F%20%E4%BF%9D%E5%96%AE%E7%AD%89%E7%B4%9A%E9%81%B8%E6%93%87%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%20gap%3A%206px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20style%3D%22font-size%3A%200.72rem%3B%20color%3A%20var%28--text-muted%29%3B%22%3E%E5%8B%95%E6%85%8B%20AI%20%E8%A8%88%E7%AE%97%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22toggle-ui-btn%22%20onclick%3D%22togglePolicyPanel32%28%29%22%20style%3D%22background%3A%20rgba%28255%2C255%2C255%2C0.15%29%3B%20border%3A%201px%20solid%20var%28--border-tech%29%3B%20color%3A%20var%28--text-light%29%3B%20padding%3A%202px%208px%3B%20border-radius%3A%2012px%3B%20font-size%3A%200.75rem%3B%20cursor%3A%20pointer%3B%20font-weight%3A700%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22policy-toggle-icon%22%3E%E2%96%B2%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-policy-body%22%20id%3D%22policy-body-32%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-option-card%20active%22%20onclick%3D%22selectPolicy%28%27basic%27%2C%20this%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E8%88%92%E6%B4%BB%E5%9F%BA%E7%A4%8E%E5%9E%8B%20%28Basic%20Calm%29%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22policy-price%22%3ENT%24%20450%20/%E6%9C%88%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-desc%22%3E%E6%AF%8F%E6%97%A5%20HRV%20%E5%A3%93%E5%8A%9B%E7%9B%A3%E6%B8%AC%E3%80%81%E6%AF%8F%E5%AD%A3%201%20%E6%AC%A1%E5%85%8D%E8%B2%BB%E7%B7%9A%E4%B8%8A%E5%BF%83%E7%90%86%E8%AB%AE%E8%A9%A2%E5%88%B8%E3%80%81%E5%9F%BA%E7%A4%8E%E4%BF%9D%E8%B2%BB%209%20%E6%8A%98%E5%84%AA%E6%83%A0%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-option-card%22%20onclick%3D%22selectPolicy%28%27standard%27%2C%20this%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E5%AE%88%E8%AD%B7%E9%80%B2%E9%9A%8E%E5%9E%8B%20%28Standard%20Guardian%29%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22policy-price%22%3ENT%24%20880%20/%E6%9C%88%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-desc%22%3E%E5%8D%B3%E6%99%82%E4%BD%8E%20HRV%20%E7%95%B0%E5%B8%B8%E9%A0%90%E8%AD%A6%E3%80%81%E6%AF%8F%E6%9C%88%201%20%E6%AC%A1%E5%B0%88%E6%A5%AD%E8%AB%AE%E8%A9%A2%E5%88%B8%E3%80%81AI%20%E5%8B%95%E6%85%8B%E4%BF%9D%E8%B2%BB%E6%9C%80%E9%AB%98%E4%BA%AB%2085%20%E6%8A%98%E5%84%AA%E6%83%A0%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-option-card%22%20onclick%3D%22selectPolicy%28%27premium%27%2C%20this%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E5%B0%8A%E6%A6%AE%E5%85%A8%E8%AD%B7%E5%9E%8B%20%28Premium%20Shield%29%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22policy-price%22%3ENT%24%201%2C500%20/%E6%9C%88%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22policy-desc%22%3E%E5%85%A8%E5%A4%A9%E5%80%99%E9%9B%99%E6%B3%A2%E9%95%B7%20PPG%20%E5%BF%83%E7%8E%87%E8%88%87%20SDNN%20%E8%BF%BD%E8%B9%A4%E3%80%81%E7%84%A1%E9%99%90%E6%AC%A1%E7%B7%8A%E6%80%A5%E5%BF%83%E7%90%86%E6%95%91%E6%8F%B4%E8%88%87%E5%BF%AB%E9%80%9F%E7%90%86%E8%B3%A0%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22panel-section-title%22%20style%3D%22margin-top%3A%2014px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E2%8F%B1%EF%B8%8F%20%E4%BF%9D%E5%96%AE%E6%9C%9F%E9%99%90%E8%88%87%20AI%20%E6%B8%9B%E5%85%8D%E6%8A%98%E6%89%A3%3C/span%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20flex%3B%20gap%3A%206px%3B%20margin-bottom%3A%2010px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20style%3D%22flex%3A1%3B%20justify-content%3Acenter%3B%22%20id%3D%22term-6m%22%20onclick%3D%22selectTerm%286%2C%20this%29%22%3E6%20%E5%80%8B%E6%9C%88%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20style%3D%22flex%3A1%3B%20justify-content%3Acenter%3B%20background%3A%20var%28--accent-blue%29%3B%20color%3A%23fff%3B%22%20id%3D%22term-1y%22%20onclick%3D%22selectTerm%2812%2C%20this%29%22%3E1%20%E5%B9%B4%20%2895%E6%8A%98%29%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20style%3D%22flex%3A1%3B%20justify-content%3Acenter%3B%22%20id%3D%22term-2y%22%20onclick%3D%22selectTerm%2824%2C%20this%29%22%3E2%20%E5%B9%B4%20%2888%E6%8A%98%29%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3C%21--%20%E5%8D%B3%E6%99%82%E8%B2%BB%E7%8E%87%E8%A9%A6%E7%AE%97%E7%9B%92%20--%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22calculator-box%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22calc-row%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E5%8E%9F%E4%BF%9D%E8%B2%BB%E6%9C%88%E7%B9%B3%E4%BC%B0%E7%AE%97%EF%BC%9A%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22calc-base-price%22%3ENT%24%20450%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22calc-row%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E6%9C%9F%E9%99%90%E6%8A%98%E6%89%A3%EF%BC%9A%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22calc-term-discount%22%3E95%20%E6%8A%98%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22calc-row%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3EHRV%20AI%20%E9%81%94%E6%A8%99%E7%8D%8E%E5%8B%B5%EF%BC%9A%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22badge-discount%22%20id%3D%22calc-hrv-badge%22%3E%E4%BA%AB%2085%20%E6%8A%98%E5%84%AA%E6%83%A0%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22calc-row%20total%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%E9%A0%90%E4%BC%B0%E6%9C%88%E7%B9%B3%E4%BF%9D%E8%B2%BB%EF%BC%9A%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22calc-final-price%22%3ENT%24%20363%20/%E6%9C%88%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20style%3D%22width%3A100%25%3B%20justify-content%3Acenter%3B%20margin-top%3A12px%3B%20background%3Avar%28--dark-green%29%3B%20color%3A%23fff%3B%22%20onclick%3D%22openPolicyModal%28%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%F0%9F%93%8B%20%E6%AA%A2%E8%A6%96%E6%93%AC%E7%9C%9F%E6%AD%A3%E5%BC%8F%E4%BF%9D%E5%96%AE%E6%A2%9D%E6%AC%BE%E8%88%87%E8%B2%BB%E7%8E%87%E8%A1%A8%0A%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%BA%95%E9%83%A8%E5%8A%9F%E8%83%BD%E6%8C%89%E9%88%95%E5%88%97%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-bottom-bar%22%20id%3D%22bottom-bar-32%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22toggleBottomBar32%28%29%22%20style%3D%22background%3A%20var%28--accent-gold%29%3B%20color%3A%20%23121820%3B%20font-weight%3A%20800%3B%20border-color%3A%20var%28--accent-gold%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%E2%9A%99%EF%B8%8F%20%E8%AA%BF%E6%95%B4%E5%88%97%20%3Cspan%20id%3D%22bar-toggle-icon%22%3E%E2%96%BC%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-bottom-buttons%22%20id%3D%22bottom-buttons-32%22%20style%3D%22display%3A%20flex%3B%20gap%3A%2010px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22resetCameraView%28%29%22%3E%F0%9F%94%84%20%E9%87%8D%E7%BD%AE%E5%85%A8%E6%99%AF%E8%A6%96%E8%A7%92%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22focusRearSensors%28%29%22%3E%F0%9F%94%84%20%E7%BF%BB%E8%BD%89%E8%87%B3%E6%89%8B%E9%8C%B6%E8%83%8C%E9%9D%A2%20%28%E5%85%89%E5%AD%B8%E6%84%9F%E6%B8%AC%E5%99%A8%29%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22cycleWatchApp%28%29%22%3E%F0%9F%93%B1%20%E5%88%87%E6%8F%9B%E6%89%8B%E9%8C%B6%E8%9E%A2%E5%B9%95%20App%20%28Raycaster%20%E8%A7%B8%E6%8E%A7%29%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22toggleAutoRotate%28%29%22%3E%F0%9F%94%84%20360%C2%B0%20%E8%87%AA%E5%8B%95%E6%97%8B%E8%BD%89%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20Modal%20%E6%93%AC%E7%9C%9F%E6%AD%A3%E5%BC%8F%E4%BF%9D%E5%96%AE%E6%A2%9D%E6%AC%BE%E8%A6%96%E7%AA%97%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22modal-overlay%22%20id%3D%22policy-modal%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22modal-card%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22modal-header%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch3%20class%3D%22modal-title%22%3E%F0%9F%93%8B%20EmoGuard%20Insurance%20%E6%83%85%E7%B7%92%E5%AE%88%E8%AD%B7%E8%80%85%20%E6%93%AC%E7%9C%9F%E6%AD%A3%E5%BC%8F%E4%BF%9D%E5%96%AE%E6%A2%9D%E6%AC%BE%E8%88%87%E8%B2%BB%E7%8E%87%E5%B0%8D%E7%85%A7%E8%A1%A8%3C/h3%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22modal-close%22%20onclick%3D%22closePolicyModal%28%29%22%3E%26times%3B%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20style%3D%22font-size%3A0.84rem%3B%20color%3Avar%28--text-muted%29%3B%20margin-bottom%3A10px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E6%9C%AC%E5%B1%95%E8%A6%BD%E4%BD%9C%E5%93%81%E9%87%9D%E5%B0%8D%E5%82%B3%E7%B5%B1%E4%BF%9D%E9%9A%AA%E5%BF%BD%E8%A6%96%E5%BF%83%E7%90%86%E5%81%A5%E5%BA%B7%E7%84%A1%E8%A8%BA%E6%96%B7%E6%9B%B8%E7%BC%BA%E5%8F%A3%EF%BC%8C%E8%A8%AD%E8%A8%88%E4%B9%8B%E5%89%B5%E6%96%B0%E9%A0%90%E9%98%B2%E5%9E%8B%E4%BF%9D%E9%9A%AA%E7%94%A2%E5%93%81%E6%A2%9D%E6%AC%BE%E3%80%82%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20class%3D%22policy-table%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cthead%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E4%BF%9D%E5%96%AE%E9%A0%85%E7%9B%AE%3C/th%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E8%88%92%E6%B4%BB%E5%9F%BA%E7%A4%8E%E5%9E%8B%3C/th%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E5%AE%88%E8%AD%B7%E9%80%B2%E9%9A%8E%E5%9E%8B%3C/th%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E5%B0%8A%E6%A6%AE%E5%85%A8%E8%AD%B7%E5%9E%8B%3C/th%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/thead%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctbody%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3Cb%3EHRV%20%E7%94%9F%E7%90%86%E6%8C%87%E6%A8%99%E8%BF%BD%E8%B9%A4%3C/b%3E%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%AF%8F%E6%97%A5%E5%AE%9A%E6%99%82%203%20%E6%AC%A1%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E24%E5%B0%8F%E6%99%82%E9%80%A3%E7%BA%8C%E5%8B%95%E6%85%8B%E7%9B%A3%E6%B8%AC%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E9%9B%99%E6%B3%A2%E9%95%B7%20PPG%20%2B%20%E9%AB%98%E9%A0%BB%20SDNN%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3Cb%3E%E5%BF%83%E7%90%86%E8%AB%AE%E8%A9%A2%E8%B3%87%E6%BA%90%E5%88%B8%3C/b%3E%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%AF%8F%E5%AD%A3%201%20%E5%BC%B5%20%28%E7%89%B9%E7%B4%84%E6%A9%9F%E6%A7%8B%29%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%AF%8F%E6%9C%88%201%20%E5%BC%B5%20%28%E8%87%AA%E9%81%B8%E8%AB%AE%E5%95%86%E5%B8%AB%29%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E7%84%A1%E9%99%90%E6%AC%A1%E7%B7%9A%E4%B8%8A%E6%80%A5%E8%A8%BA%E8%88%87%E8%AB%AE%E5%95%86%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3Cb%3EHRV%20%E7%95%B0%E5%B8%B8%E9%A0%90%E8%AD%A6%E6%A9%9F%E5%88%B6%3C/b%3E%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3EApp%20%E6%96%87%E5%AD%97%E6%8F%90%E9%86%92%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E4%B8%BB%E5%8B%95%E8%A7%B8%E7%99%BC%E8%88%87%E8%87%AA%E5%8B%95%E9%97%9C%E6%87%B7%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E5%B0%88%E4%BA%BA%E9%97%9C%E6%87%B7%E8%88%87%E5%BF%AB%E9%80%9F%E7%B6%A0%E8%89%B2%E9%80%9A%E9%81%93%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%3Cb%3EAI%20%E5%8B%95%E6%85%8B%E4%BF%9D%E8%B2%BB%E6%8A%98%E6%89%A3%3C/b%3E%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%9C%80%E9%AB%98%209%20%E6%8A%98%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%9C%80%E9%AB%98%2085%20%E6%8A%98%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%9C%80%E9%AB%98%2075%20%E6%8A%98%3C/td%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tbody%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20//%20---%201.%20Scene%2C%20Camera%2C%20Renderer%20Setup%20---%0A%20%20%20%20%20%20%20%20const%20container%20%3D%20document.getElementById%28%27canvas-container%27%29%3B%0A%20%20%20%20%20%20%20%20const%20scene%20%3D%20new%20THREE.Scene%28%29%3B%0A%20%20%20%20%20%20%20%20//%20%E8%83%8C%E6%99%AF%E6%8E%A1%E7%94%A8%20TITAN%20%E5%B0%88%E5%B1%AC%E6%B7%B1%E9%82%83%E7%A7%91%E6%8A%80%E9%BB%91%E8%97%8D%E8%89%B2%E8%AA%BF%0A%20%20%20%20%20%20%20%20scene.background%20%3D%20new%20THREE.Color%280x121820%29%3B%0A%20%20%20%20%20%20%20%20scene.fog%20%3D%20new%20THREE.FogExp2%280x121820%2C%200.025%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20camera%20%3D%20new%20THREE.PerspectiveCamera%2840%2C%20window.innerWidth%20/%20window.innerHeight%2C%200.1%2C%201000%29%3B%0A%20%20%20%20%20%20%20%20camera.position.set%280%2C%203%2C%2011%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20renderer%20%3D%20new%20THREE.WebGLRenderer%28%7B%20antialias%3A%20true%2C%20alpha%3A%20true%20%7D%29%3B%0A%20%20%20%20%20%20%20%20renderer.setSize%28window.innerWidth%2C%20window.innerHeight%29%3B%0A%20%20%20%20%20%20%20%20renderer.setPixelRatio%28Math.min%28window.devicePixelRatio%2C%202%29%29%3B%0A%20%20%20%20%20%20%20%20renderer.shadowMap.enabled%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20renderer.shadowMap.type%20%3D%20THREE.PCFSoftShadowMap%3B%0A%20%20%20%20%20%20%20%20container.appendChild%28renderer.domElement%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%202.%20Orbit%20Controls%20---%0A%20%20%20%20%20%20%20%20const%20controls%20%3D%20new%20THREE.OrbitControls%28camera%2C%20renderer.domElement%29%3B%0A%20%20%20%20%20%20%20%20controls.enableDamping%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20controls.dampingFactor%20%3D%200.05%3B%0A%20%20%20%20%20%20%20%20controls.minDistance%20%3D%203%3B%0A%20%20%20%20%20%20%20%20controls.maxDistance%20%3D%2025%3B%0A%20%20%20%20%20%20%20%20controls.target.set%280%2C%200%2C%200%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%203.%20Lighting%20Setup%20%28Soft%20Morandi%20Lighting%29%20---%0A%20%20%20%20%20%20%20%20const%20ambientLight%20%3D%20new%20THREE.AmbientLight%280xdce5ef%2C%200.8%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28ambientLight%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20dirLight%20%3D%20new%20THREE.DirectionalLight%280xFFFFFF%2C%201.1%29%3B%0A%20%20%20%20%20%20%20%20dirLight.position.set%288%2C%2012%2C%2010%29%3B%0A%20%20%20%20%20%20%20%20dirLight.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.mapSize.width%20%3D%202048%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.mapSize.height%20%3D%202048%3B%0A%20%20%20%20%20%20%20%20scene.add%28dirLight%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20TITAN%20%E9%9C%93%E8%99%B9%E9%9D%92%E8%97%8D%E8%88%87%E9%A6%99%E6%AA%B3%E9%87%91%E7%A7%91%E6%8A%80%E9%BB%9E%E5%85%89%E6%BA%90%E8%A3%9C%E5%85%89%0A%20%20%20%20%20%20%20%20const%20cyanLight%20%3D%20new%20THREE.PointLight%280x00e5ff%2C%201.2%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20cyanLight.position.set%28-6%2C%20-2%2C%205%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28cyanLight%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20goldLight%20%3D%20new%20THREE.PointLight%280xdcae7a%2C%201.0%2C%2010%29%3B%0A%20%20%20%20%20%20%20%20goldLight.position.set%286%2C%204%2C%20-5%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28goldLight%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%204.%20Dynamic%20Watch%20Screen%20Canvas%20%26%20App%20UI%20Generation%20---%0A%20%20%20%20%20%20%20%20const%20screenCanvas%20%3D%20document.createElement%28%27canvas%27%29%3B%0A%20%20%20%20%20%20%20%20screenCanvas.width%20%3D%20512%3B%0A%20%20%20%20%20%20%20%20screenCanvas.height%20%3D%20512%3B%0A%20%20%20%20%20%20%20%20const%20ctx%20%3D%20screenCanvas.getContext%28%272d%27%29%3B%0A%20%20%20%20%20%20%20%20const%20screenTexture%20%3D%20new%20THREE.CanvasTexture%28screenCanvas%29%3B%0A%0A%20%20%20%20%20%20%20%20let%20currentAppIndex%20%3D%200%3B%0A%0A%20%20%20%20%20%20%20%20function%20drawWatchScreen%28appIndex%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.clearRect%280%2C%200%2C%20512%2C%20512%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20%E5%9C%93%E5%BD%A2%E9%8C%B6%E9%9D%A2%E8%A3%81%E5%88%87%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.save%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.arc%28256%2C%20256%2C%20240%2C%200%2C%20Math.PI%20%2A%202%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.clip%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28appIndex%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%F0%9F%8F%A0%20App%201%3A%20%E4%B8%BB%E5%84%80%E8%A1%A8%E6%9D%BF%20%28HRV%2068ms%20/%20%E5%BF%83%E7%8E%87%2072bpm%20/%20%E5%A3%93%E5%8A%9B%2028%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23161E27%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillRect%280%2C%200%2C%20512%2C%20512%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E6%A8%99%E9%A1%8C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23F4F0EA%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2026px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.textAlign%20%3D%20%27center%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27EmoGuard%20Insurance%27%2C%20256%2C%2090%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2720px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2398A3B0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E6%83%85%E7%B7%92%E5%AE%88%E8%AD%B7%E8%80%85%20%EF%BD%9C%20%E4%BB%8A%E6%97%A5%E5%BF%83%E5%BE%8B%27%2C%20256%2C%20125%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20HRV%20%E6%95%B8%E6%93%9A%E5%A4%A7%E5%AD%97%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2300E5FF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2072px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%2768%27%2C%20256%2C%20230%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2022px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2356B6C2%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27ms%20%28SDNN%29%27%2C%20256%2C%20265%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E5%BF%83%E7%8E%87%E8%88%87%E5%A3%93%E5%8A%9B%E5%B0%8F%E6%8C%87%E6%A8%99%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%231F2732%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.roundRect%2890%2C%20310%2C%20150%2C%2075%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.strokeStyle%20%3D%20%27%23DCAE7A%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.lineWidth%20%3D%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.stroke%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23DCAE7A%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2018px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E2%9D%A4%EF%B8%8F%20%E5%BF%83%E7%8E%87%27%2C%20165%2C%20340%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23FFFFFF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2026px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%2772%20bpm%27%2C%20165%2C%20372%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%231F2732%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.roundRect%28272%2C%20310%2C%20150%2C%2075%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.strokeStyle%20%3D%20%27%2300E5FF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.lineWidth%20%3D%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.stroke%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2300E5FF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2018px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%A7%A0%20%E5%A3%93%E5%8A%9B%E6%8C%87%E6%95%B8%27%2C%20347%2C%20340%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23FFFFFF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2026px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%2728%20/%20100%27%2C%20347%2C%20372%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%237A93A0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2716px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%92%A1%20%E9%BB%9E%E6%93%8A%E8%9E%A2%E5%B9%95%E5%88%87%E6%8F%9B%20App%20%E4%BB%8B%E9%9D%A2%27%2C%20256%2C%20440%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20%28appIndex%20%3D%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%F0%9F%A7%98%20App%202%3A%20Daily%20Calm%20%E6%AD%A3%E5%BF%B5%E5%86%A5%E6%83%B3%E8%88%87%E5%91%BC%E5%90%B8%E5%BC%95%E5%B0%8E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%231A222E%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillRect%280%2C%200%2C%20512%2C%20512%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E6%B0%B4%E6%B3%A2%E8%83%8C%E6%99%AF%E8%A3%9D%E9%A3%BE%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27rgba%280%2C%20229%2C%20255%2C%200.15%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.arc%28256%2C%20240%2C%20160%2C%200%2C%20Math.PI%20%2A%202%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23F4F0EA%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2034px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.textAlign%20%3D%20%27center%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27Daily%20Calm%27%2C%20256%2C%20110%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2760px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%A7%98%27%2C%20256%2C%20220%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2356B6C2%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2022px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E6%AD%A3%E5%BF%B5%E5%86%A5%E6%83%B3%E9%80%B2%E8%A1%8C%E4%B8%AD%3A%2015/30%20%E5%88%86%E9%90%98%27%2C%20256%2C%20290%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E6%8C%89%E9%88%95%E7%A4%BA%E6%84%8F%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%237A93A0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.roundRect%28136%2C%20330%2C%20240%2C%2055%2C%2028%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23FFFFFF%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2022px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%AB%81%20%E5%91%BC%E5%90%B8%E8%AA%BF%E7%AF%80%E5%BC%95%E5%B0%8E%27%2C%20256%2C%20366%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2398A3B0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2716px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%92%A1%20%E9%BB%9E%E6%93%8A%E8%9E%A2%E5%B9%95%E5%88%87%E6%8F%9B%20App%20%E4%BB%8B%E9%9D%A2%27%2C%20256%2C%20440%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20%28appIndex%20%3D%3D%3D%202%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20%E2%9A%A0%EF%B8%8F%20App%203%3A%20%E4%BD%8E%20HRV%20%E9%A0%90%E8%AD%A6%E8%88%87%E4%BF%9D%E8%B2%BB%E6%8A%98%E6%89%A3%E8%A7%A3%E9%8E%96%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23121820%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillRect%280%2C%200%2C%20512%2C%20512%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23FF5252%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2754px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.textAlign%20%3D%20%27center%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E2%9A%A0%EF%B8%8F%27%2C%20256%2C%20120%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23F4F0EA%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2028px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27HRV%20%E5%81%8F%E4%BD%8E%E9%A0%90%E8%AD%A6%E6%8F%90%E9%86%92%27%2C%20256%2C%20180%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%2398A3B0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2718px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E7%B3%BB%E7%B5%B1%E5%81%B5%E6%B8%AC%E5%88%B0%E9%80%A3%E7%BA%8C%E5%A3%93%E5%8A%9B%E9%81%8E%E9%AB%98%27%2C%20256%2C%20220%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E5%B7%B2%E7%99%BC%E9%80%81%E5%BF%83%E7%90%86%E8%AB%AE%E8%A9%A2%E8%B3%87%E6%BA%90%E5%88%B8%E8%87%B3%E6%82%A8%E7%9A%84%E5%B8%B3%E6%88%B6%27%2C%20256%2C%20250%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23DCAE7A%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.beginPath%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.roundRect%28116%2C%20290%2C%20280%2C%2075%2C%2018%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%23121820%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2020px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%8E%89%20%E5%AE%8C%E6%88%90%E5%81%A5%E5%BA%B7%E7%AE%A1%E7%90%86%E4%BB%BB%E5%8B%99%27%2C%20256%2C%20323%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%27bold%2024px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%E8%A7%A3%E9%8E%96%E6%9C%AC%E6%9C%88%E4%BF%9D%E8%B2%BB%2085%20%E6%8A%98%E5%84%AA%E6%83%A0%EF%BC%81%27%2C%20256%2C%20353%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillStyle%20%3D%20%27%237A93A0%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.font%20%3D%20%2716px%20sans-serif%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fillText%28%27%F0%9F%92%A1%20%E9%BB%9E%E6%93%8A%E8%9E%A2%E5%B9%95%E5%88%87%E6%8F%9B%20App%20%E4%BB%8B%E9%9D%A2%27%2C%20256%2C%20440%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20ctx.restore%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20screenTexture.needsUpdate%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20drawWatchScreen%280%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%205.%203D%20EmoGuard%20Wearable%20Watch%20Model%20%28Morandi%20Colors%29%20---%0A%20%20%20%20%20%20%20%20const%20watchGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20TITAN%20%E7%A7%91%E6%8A%80%E6%84%9F%E6%9D%90%E8%B3%AA%E5%AE%9A%E7%BE%A9%20%28TITAN%20Tech%20Palette%29%0A%20%20%20%20%20%20%20%20const%20bodyMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x36414e%2C%20roughness%3A%200.3%2C%20metalness%3A%200.7%20%7D%29%3B%20//%20TITAN%20%E9%AB%98%E7%A7%91%E6%8A%80%E8%97%8D%E7%81%B0%E9%87%91%E5%B1%AC%E9%8C%B6%E6%AE%BC%20%28%2336414E%29%0A%20%20%20%20%20%20%20%20const%20bezelMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xa0b0c0%2C%20roughness%3A%200.1%2C%20metalness%3A%200.9%20%7D%29%3B%20//%20TITAN%20%E9%89%BB%E9%8A%80/%E9%88%A6%E9%87%91%E5%B1%AC%E9%82%8A%E6%A1%86%20%28%23A0B0C0%29%0A%20%20%20%20%20%20%20%20const%20screenMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20map%3A%20screenTexture%2C%20roughness%3A%200.1%2C%20metalness%3A%200.1%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20strapMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x1f2732%2C%20roughness%3A%200.6%2C%20metalness%3A%200.3%20%7D%29%3B%20//%20TITAN%20%E6%B7%B1%E6%A5%B5%E5%A4%9C%E8%97%8D%E7%81%B0%E9%8C%B6%E5%B8%B6%20%28%231F2732%29%0A%20%20%20%20%20%20%20%20const%20loopPinkMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x00e5ff%2C%20roughness%3A%200.3%2C%20metalness%3A%200.6%20%7D%29%3B%20//%20%E9%9C%93%E8%99%B9%E9%9D%92%E8%97%8D%E6%89%A3%E7%92%B0%20%28%2300E5FF%29%0A%20%20%20%20%20%20%20%20const%20loopBeigeMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xdcae7a%2C%20roughness%3A%200.3%2C%20metalness%3A%200.7%20%7D%29%3B%20//%20%E7%A7%91%E6%8A%80%E9%A6%99%E6%AA%B3%E9%87%91%E6%89%A3%E7%92%B0%20%28%23DCAE7A%29%0A%20%20%20%20%20%20%20%20const%20btnPinkMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x00e5ff%2C%20roughness%3A%200.2%2C%20metalness%3A%200.6%20%7D%29%3B%20//%20%E9%9C%93%E8%99%B9%E9%9D%92%E8%97%8D%E6%8C%89%E9%88%95%20%28%2300E5FF%29%0A%20%20%20%20%20%20%20%20const%20btnBlueMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xdcae7a%2C%20roughness%3A%200.3%2C%20metalness%3A%200.7%20%7D%29%3B%20%20//%20%E7%A7%91%E6%8A%80%E9%A6%99%E6%AA%B3%E9%87%91%E6%8C%89%E9%88%95%20%28%23DCAE7A%29%0A%20%20%20%20%20%20%20%20const%20btnYellowMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x7a93a0%2C%20roughness%3A%200.2%2C%20metalness%3A%200.8%20%7D%29%3B%20//%20%E9%88%A6%E9%87%91%E5%B1%AC%E8%97%8D%E7%81%B0%E6%8C%89%E9%88%95%20%28%237A93A0%29%0A%20%20%20%20%20%20%20%20const%20sensorGlassMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x121820%2C%20roughness%3A%200.1%2C%20metalness%3A%200.9%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20ppgGreenLedMat%20%3D%20new%20THREE.MeshBasicMaterial%28%7B%20color%3A%200x00e5ff%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28A%29%20%E5%9C%93%E5%BD%A2%E6%89%8B%E9%8C%B6%E4%B8%BB%E9%AB%94%E8%88%87%E9%8C%B6%E6%AE%BC%20%28Main%20Watch%20Housing%29%0A%20%20%20%20%20%20%20%20const%20caseGeo%20%3D%20new%20THREE.CylinderGeometry%282.3%2C%202.3%2C%200.7%2C%2064%29%3B%0A%20%20%20%20%20%20%20%20const%20watchCase%20%3D%20new%20THREE.Mesh%28caseGeo%2C%20bodyMat%29%3B%0A%20%20%20%20%20%20%20%20watchCase.rotation.x%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20watchCase.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20watchCase.receiveShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28watchCase%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E9%8C%B6%E9%9D%A2%E5%A4%96%E5%9C%88%E9%A3%BE%E7%92%B0%20%28Bezel%29%0A%20%20%20%20%20%20%20%20const%20bezelGeo%20%3D%20new%20THREE.TorusGeometry%282.32%2C%200.12%2C%2016%2C%2064%29%3B%0A%20%20%20%20%20%20%20%20const%20bezel%20%3D%20new%20THREE.Mesh%28bezelGeo%2C%20bezelMat%29%3B%0A%20%20%20%20%20%20%20%20bezel.position.z%20%3D%200.35%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28bezel%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28B%29%20%E4%BA%92%E5%8B%95%E8%A7%B8%E6%8E%A7%E8%9E%A2%E5%B9%95%20%28Interactive%20Screen%20Mesh%29%0A%20%20%20%20%20%20%20%20const%20screenGeo%20%3D%20new%20THREE.CircleGeometry%282.2%2C%2064%29%3B%0A%20%20%20%20%20%20%20%20const%20watchScreenMesh%20%3D%20new%20THREE.Mesh%28screenGeo%2C%20screenMat%29%3B%0A%20%20%20%20%20%20%20%20watchScreenMesh.position.z%20%3D%200.36%3B%0A%20%20%20%20%20%20%20%20watchScreenMesh.name%20%3D%20%22watchScreen%22%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28watchScreenMesh%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28C%29%20%E5%81%B4%E9%82%8A%E8%8E%AB%E8%98%AD%E8%BF%AA%E5%A4%9A%E8%89%B2%E6%8C%89%E9%88%95%20%28Side%20Buttons%29%0A%20%20%20%20%20%20%20%20const%20btn1Geo%20%3D%20new%20THREE.CylinderGeometry%280.2%2C%200.2%2C%200.3%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20const%20btn1%20%3D%20new%20THREE.Mesh%28btn1Geo%2C%20btnPinkMat%29%3B%0A%20%20%20%20%20%20%20%20btn1.rotation.z%20%3D%20-Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20btn1.position.set%282.4%2C%200.8%2C%200%29%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28btn1%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20btn2%20%3D%20new%20THREE.Mesh%28btn1Geo%2C%20btnBlueMat%29%3B%0A%20%20%20%20%20%20%20%20btn2.rotation.z%20%3D%20-Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20btn2.position.set%282.4%2C%20-0.8%2C%200%29%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28btn2%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20btn3%20%3D%20new%20THREE.Mesh%28btn1Geo%2C%20btnYellowMat%29%3B%0A%20%20%20%20%20%20%20%20btn3.rotation.z%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20btn3.position.set%28-2.4%2C%200%2C%200%29%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28btn3%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28D%29%20%E6%89%8B%E9%8C%B6%E8%83%8C%E9%9D%A2%E5%85%89%E5%AD%B8%E6%84%9F%E6%B8%AC%E5%99%A8%E8%88%87%E5%88%BB%E5%AD%97%20%28Rear%20Biometric%20Sensors%29%0A%20%20%20%20%20%20%20%20const%20rearSensorGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20rearSensorGroup.position.z%20%3D%20-0.36%3B%0A%0A%20%20%20%20%20%20%20%20const%20sensorPlateGeo%20%3D%20new%20THREE.CircleGeometry%281.4%2C%2032%29%3B%0A%20%20%20%20%20%20%20%20const%20sensorPlate%20%3D%20new%20THREE.Mesh%28sensorPlateGeo%2C%20sensorGlassMat%29%3B%0A%20%20%20%20%20%20%20%20sensorPlate.rotation.y%20%3D%20Math.PI%3B%0A%20%20%20%20%20%20%20%20rearSensorGroup.add%28sensorPlate%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E9%9B%99%E6%B3%A2%E9%95%B7%20PPG%20%E5%BF%83%E7%8E%87%E8%88%87%20HRV%20%E6%84%9F%E6%87%89%E7%87%88%0A%20%20%20%20%20%20%20%20for%20%28let%20angle%20%3D%200%3B%20angle%20%3C%20Math.PI%20%2A%202%3B%20angle%20%2B%3D%20Math.PI%20/%203%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20ledGeo%20%3D%20new%20THREE.CircleGeometry%280.12%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20led%20%3D%20new%20THREE.Mesh%28ledGeo%2C%20ppgGreenLedMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20led.position.set%28Math.cos%28angle%29%20%2A%200.8%2C%20Math.sin%28angle%29%20%2A%200.8%2C%20-0.01%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20led.rotation.y%20%3D%20Math.PI%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20rearSensorGroup.add%28led%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20%E5%85%85%E9%9B%BB%E9%87%91%E5%B1%AC%E8%A7%B8%E9%BB%9E%0A%20%20%20%20%20%20%20%20const%20pinMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xdcae7a%2C%20metalness%3A%200.9%2C%20roughness%3A%200.2%20%7D%29%3B%20//%20%E7%A7%91%E6%8A%80%E9%A6%99%E6%AA%B3%E9%87%91%E9%87%91%E5%B1%AC%E8%A7%B8%E9%BB%9E%20%28%23DCAE7A%29%0A%20%20%20%20%20%20%20%20for%20%28let%20i%20%3D%20-0.3%3B%20i%20%3C%3D%200.3%3B%20i%20%2B%3D%200.2%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20pinGeo%20%3D%20new%20THREE.CylinderGeometry%280.06%2C%200.06%2C%200.05%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20pin%20%3D%20new%20THREE.Mesh%28pinGeo%2C%20pinMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pin.rotation.x%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pin.position.set%28i%2C%201.0%2C%20-0.02%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20rearSensorGroup.add%28pin%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20watchGroup.add%28rearSensorGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28E%29%20%E7%A9%BF%E6%88%B4%E7%8B%80%E6%85%8B%E7%AB%8B%E9%AB%94%E5%9C%93%E5%BC%A7%E5%9E%8B%E8%8E%AB%E8%98%AD%E8%BF%AA%E9%BC%A0%E5%B0%BE%E8%8D%89%E7%B6%A0%E9%8C%B6%E5%B8%B6%20%28Curved%20Wrist%20Loop%20Straps%29%0A%20%20%20%20%20%20%20%20const%20strapCurveUpper%20%3D%20new%20THREE.QuadraticBezierCurve3%28%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%202.3%2C%200%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%204.2%2C%20-2.5%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%200%2C%20-4.5%29%0A%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20const%20strapUpperGeo%20%3D%20new%20THREE.TubeGeometry%28strapCurveUpper%2C%2032%2C%200.85%2C%2016%2C%20false%29%3B%0A%20%20%20%20%20%20%20%20const%20strapUpper%20%3D%20new%20THREE.Mesh%28strapUpperGeo%2C%20strapMat%29%3B%0A%20%20%20%20%20%20%20%20strapUpper.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28strapUpper%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20strapCurveLower%20%3D%20new%20THREE.QuadraticBezierCurve3%28%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%20-2.3%2C%200%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%20-4.2%2C%20-2.5%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%200%2C%20-4.5%29%0A%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20const%20strapLowerGeo%20%3D%20new%20THREE.TubeGeometry%28strapCurveLower%2C%2032%2C%200.85%2C%2016%2C%20false%29%3B%0A%20%20%20%20%20%20%20%20const%20strapLower%20%3D%20new%20THREE.Mesh%28strapLowerGeo%2C%20strapMat%29%3B%0A%20%20%20%20%20%20%20%20strapLower.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28strapLower%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E9%9B%99%E8%89%B2%E9%8C%B6%E5%B8%B6%E5%9B%BA%E5%AE%9A%E6%89%A3%E7%92%B0%20%28Pink%20%26%20Beige%20Strap%20Loops%29%0A%20%20%20%20%20%20%20%20const%20loop1Geo%20%3D%20new%20THREE.TorusGeometry%281.0%2C%200.16%2C%2012%2C%2032%29%3B%0A%20%20%20%20%20%20%20%20const%20loop1%20%3D%20new%20THREE.Mesh%28loop1Geo%2C%20loopPinkMat%29%3B%0A%20%20%20%20%20%20%20%20loop1.position.set%280%2C%203.2%2C%20-1.2%29%3B%0A%20%20%20%20%20%20%20%20loop1.rotation.x%20%3D%20Math.PI%20/%204%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28loop1%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20loop2%20%3D%20new%20THREE.Mesh%28loop1Geo%2C%20loopBeigeMat%29%3B%0A%20%20%20%20%20%20%20%20loop2.position.set%280%2C%202.6%2C%20-0.8%29%3B%0A%20%20%20%20%20%20%20%20loop2.rotation.x%20%3D%20Math.PI%20/%205%3B%0A%20%20%20%20%20%20%20%20watchGroup.add%28loop2%29%3B%0A%0A%20%20%20%20%20%20%20%20scene.add%28watchGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E9%9A%B1%E8%97%8F%20Loading%20Screen%0A%20%20%20%20%20%20%20%20document.getElementById%28%27loading%27%29.style.display%20%3D%20%27none%27%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%206.%20Raycaster%20%E4%B8%89%E7%B6%AD%E9%BB%9E%E6%93%8A%E6%89%8B%E9%8C%B6%E8%9E%A2%E5%B9%95%E8%A7%B8%E6%8E%A7%20---%0A%20%20%20%20%20%20%20%20const%20raycaster%20%3D%20new%20THREE.Raycaster%28%29%3B%0A%20%20%20%20%20%20%20%20const%20mouse%20%3D%20new%20THREE.Vector2%28%29%3B%0A%0A%20%20%20%20%20%20%20%20window.addEventListener%28%27click%27%2C%20%28event%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20%E9%81%BF%E5%85%8D%E9%BB%9E%E6%93%8A%20UI%20%E5%8D%A1%E7%89%87%E6%99%82%E8%A7%B8%E7%99%BC%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28event.target.closest%28%27.ui-header%27%29%20%7C%7C%20event.target.closest%28%27.ui-policy-panel%27%29%20%7C%7C%20event.target.closest%28%27.ui-bottom-bar%27%29%20%7C%7C%20event.target.closest%28%27.modal-overlay%27%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20mouse.x%20%3D%20%28event.clientX%20/%20window.innerWidth%29%20%2A%202%20-%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20mouse.y%20%3D%20-%28event.clientY%20/%20window.innerHeight%29%20%2A%202%20%2B%201%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20raycaster.setFromCamera%28mouse%2C%20camera%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20intersects%20%3D%20raycaster.intersectObjects%28watchGroup.children%2C%20true%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20%28let%20hit%20of%20intersects%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28hit.object.name%20%3D%3D%3D%20%22watchScreen%22%20%7C%7C%20hit.object%20%3D%3D%3D%20watchCase%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cycleWatchApp%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20function%20cycleWatchApp%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20currentAppIndex%20%3D%20%28currentAppIndex%20%2B%201%29%20%25%203%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20drawWatchScreen%28currentAppIndex%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20---%207.%20Camera%20Smooth%20Transition%20Functions%20---%0A%20%20%20%20%20%20%20%20function%20resetCameraView%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20animateCameraTo%28new%20THREE.Vector3%280%2C%203%2C%2011%29%2C%20new%20THREE.Vector3%280%2C%200%2C%200%29%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20focusRearSensors%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20%E6%97%8B%E8%BD%89%E7%BF%BB%E8%BD%89%E8%87%B3%E6%89%8B%E9%8C%B6%E8%83%8C%E9%9D%A2%EF%BC%8C%E5%B0%8D%E7%84%A6%E5%85%89%E5%AD%B8%E6%84%9F%E6%B8%AC%E5%99%A8%0A%20%20%20%20%20%20%20%20%20%20%20%20animateCameraTo%28new%20THREE.Vector3%280%2C%200%2C%20-8%29%2C%20new%20THREE.Vector3%280%2C%200%2C%200%29%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20animateCameraTo%28targetPos%2C%20targetLookAt%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startPos%20%3D%20camera.position.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTarget%20%3D%20controls.target.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20duration%20%3D%20750%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTime%20%3D%20performance.now%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20updateCam%28now%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20elapsed%20%3D%20now%20-%20startTime%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20progress%20%3D%20Math.min%28elapsed%20/%20duration%2C%201%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20ease%20%3D%201%20-%20Math.pow%281%20-%20progress%2C%203%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20camera.position.lerpVectors%28startPos%2C%20targetPos%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.target.lerpVectors%28startTarget%2C%20targetLookAt%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.update%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28progress%20%3C%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28updateCam%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28updateCam%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20let%20isAutoRotating%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20function%20toggleAutoRotate%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20isAutoRotating%20%3D%20%21isAutoRotating%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.autoRotate%20%3D%20isAutoRotating%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.autoRotateSpeed%20%3D%202.5%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20---%208.%20%E4%BF%9D%E5%96%AE%E8%A8%88%E7%AE%97%E9%82%8F%E8%BC%AF%E8%88%87%20UI%20%E4%BA%92%E5%8B%95%20---%0A%20%20%20%20%20%20%20%20let%20currentBasePrice%20%3D%20450%3B%0A%20%20%20%20%20%20%20%20let%20currentTermDiscount%20%3D%200.95%3B%0A%20%20%20%20%20%20%20%20let%20hrvDiscount%20%3D%200.85%3B%0A%0A%20%20%20%20%20%20%20%20function%20selectPolicy%28tier%2C%20element%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.querySelectorAll%28%27.policy-option-card%27%29.forEach%28card%20%3D%3E%20card.classList.remove%28%27active%27%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20element.classList.add%28%27active%27%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28tier%20%3D%3D%3D%20%27basic%27%29%20currentBasePrice%20%3D%20450%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20if%20%28tier%20%3D%3D%3D%20%27standard%27%29%20currentBasePrice%20%3D%20880%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20if%20%28tier%20%3D%3D%3D%20%27premium%27%29%20currentBasePrice%20%3D%201500%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20updateCalculator%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20selectTerm%28months%2C%20element%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-6m%27%29.style.background%20%3D%20%27rgba%28255%2C%20255%2C%20255%2C%200.08%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-6m%27%29.style.color%20%3D%20%27var%28--text-light%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-1y%27%29.style.background%20%3D%20%27rgba%28255%2C%20255%2C%20255%2C%200.08%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-1y%27%29.style.color%20%3D%20%27var%28--text-light%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-2y%27%29.style.background%20%3D%20%27rgba%28255%2C%20255%2C%20255%2C%200.08%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27term-2y%27%29.style.color%20%3D%20%27var%28--text-light%29%27%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20element.style.background%20%3D%20%27var%28--accent-cyan%29%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20element.style.color%20%3D%20%27%23121820%27%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28months%20%3D%3D%3D%206%29%20currentTermDiscount%20%3D%201.0%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20if%20%28months%20%3D%3D%3D%2012%29%20currentTermDiscount%20%3D%200.95%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20if%20%28months%20%3D%3D%3D%2024%29%20currentTermDiscount%20%3D%200.88%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20updateCalculator%28%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20updateCalculator%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20baseText%20%3D%20%60NT%24%20%24%7BcurrentBasePrice%7D%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20termText%20%3D%20currentTermDiscount%20%3D%3D%3D%201.0%20%3F%20%27%E7%84%A1%E6%8A%98%E6%89%A3%27%20%3A%20%60%24%7BMath.round%28currentTermDiscount%20%2A%20100%29%7D%20%E6%8A%98%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20finalPrice%20%3D%20Math.round%28currentBasePrice%20%2A%20currentTermDiscount%20%2A%20hrvDiscount%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27calc-base-price%27%29.textContent%20%3D%20baseText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27calc-term-discount%27%29.textContent%20%3D%20termText%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27calc-final-price%27%29.textContent%20%3D%20%60NT%24%20%24%7BfinalPrice%7D%20/%E6%9C%88%60%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20openPolicyModal%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27policy-modal%27%29.classList.add%28%27active%27%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20closePolicyModal%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27policy-modal%27%29.classList.remove%28%27active%27%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20---%209.%20Animation%20Loop%20---%0A%20%20%20%20%20%20%20%20function%20animate%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animate%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20%E5%BE%AE%E5%B9%85%E6%B5%AE%E5%8B%95%E6%95%88%E6%9E%9C%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20time%20%3D%20Date.now%28%29%20%2A%200.0015%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20watchGroup.position.y%20%3D%20Math.sin%28time%29%20%2A%200.12%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.update%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20renderer.render%28scene%2C%20camera%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20animate%28%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20Window%20Resize%20Handling%0A%20%20%20%20%20%20%20%20window.addEventListener%28%27resize%27%2C%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20camera.aspect%20%3D%20window.innerWidth%20/%20window.innerHeight%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20camera.updateProjectionMatrix%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20renderer.setSize%28window.innerWidth%2C%20window.innerHeight%29%3B%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20function%20toggleHeader32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20togglePolicyPanel32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27policy-body-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27policy-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar32%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-32%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E"></iframe>
                    </div>
                `
            },
            '3-3': {
                badge: '單元三：應用與再想像 ｜ L7 展板',
                color: 'var(--morandi-sub3)',
                title: '3-3 TITAN 全台 AI 路燈交通執法網絡',
                goals: [
                    '突破現行靜態科技執法盲點：解決傳統系統僅能偵測區間測速等瞬間靜態違規，建立能即時感知「未禮讓行人」、「未保持路口淨空」連續軌跡的智慧網。',
                    '緩解基層警力過勞與人力虛耗：透過自動化 AI 判讀與初篩，減少員警人工覆核檢舉影片的負擔。',
                    '建構 TITAN 智慧交通治理架構：整合 AI 路燈、多感測器與 Edge AI 邊緣運算，並深入探討隱私權、資安與科技法律配套。'
                ],
                overview: '因應行人地獄與警力負擔，提出 TITAN 智慧路燈網絡。機體整合 AI 攝影機、77GHz 毫米波雷達、熱感鏡頭與 Edge AI 本地電腦（48小時自動去識別化刪除），倡議「AI 輔助、人類監督」治理模式。',
                deliverableHtml: `
                    <h4 style="color: var(--accent-cyan); margin-top: 12px; margin-bottom: 8px;">🚦 3D TITAN 智慧路燈機體互動網頁 (請於下方進行 360° 旋轉與組件對焦)</h4>
                    <div class="demo-iframe-container">
                        <iframe class="demo-iframe" src="data:text/html;charset=utf-8,%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22zh-TW%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3ETITAN%20%E5%85%A8%E5%8F%B0%20AI%20%E8%B7%AF%E7%87%88%E4%BA%A4%E9%80%9A%E7%9B%A3%E6%8E%A7%E7%B6%B2%E7%B5%A1%20%EF%BD%9C%203D%20%E4%BA%92%E5%8B%95%E6%A8%A1%E5%9E%8B%E5%B1%95%E8%A6%BD%3C/title%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20%3Aroot%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20--bg-dark%3A%20%23121820%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--card-bg%3A%20rgba%2826%2C%2034%2C%2046%2C%200.85%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-blue%3A%20%237A93A0%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-gold%3A%20%23DCAE7A%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--accent-cyan%3A%20%2356B6C2%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--text-light%3A%20%23F4F0EA%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--text-muted%3A%20%2398A3B0%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20--border-color%3A%20rgba%28138%2C%20163%2C%20176%2C%200.25%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%2A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20%22Helvetica%20Neue%22%2C%20Arial%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20body%2C%20html%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20var%28--bg-dark%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%23canvas-container%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%201%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E6%A8%99%E9%A1%8C%E8%88%87%E8%AA%AA%E6%98%8E%20UI%20%E8%93%8B%E6%9D%BF%20%2A/%0A%20%20%20%20%20%20%20%20.ui-header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2812px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2018px%2024px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-color%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%208px%2032px%20rgba%280%2C%200%2C%200%2C%200.4%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20420px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.project-tag%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.78rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20letter-spacing%3A%201px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20text-transform%3A%20uppercase%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%204px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.35rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%206px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.subtitle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.88rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-muted%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.5%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.controls-hint%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28122%2C%20147%2C%20160%2C%200.15%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%208px%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.8rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-blue%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20rgba%28122%2C%20147%2C%20160%2C%200.3%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E5%8F%B3%E5%81%B4%E7%B5%84%E4%BB%B6%E8%A7%A3%E6%9E%90%E9%81%B8%E5%96%AE%20%2A/%0A%20%20%20%20%20%20%20%20.ui-components%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20right%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2812px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2018px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-color%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%208px%2032px%20rgba%280%2C%200%2C%200%2C%200.4%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20320px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%20calc%28100vh%20-%20120px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow-y%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.section-title%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.92rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-gold%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.comp-card%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28255%2C%20255%2C%20255%2C%200.04%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20rgba%28255%2C%20255%2C%20255%2C%200.08%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20all%200.25s%20ease%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.comp-card%3Ahover%2C%20.comp-card.active%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28122%2C%20147%2C%20160%2C%200.25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-color%3A%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translateX%28-4px%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.comp-name%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.86rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%204px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.comp-dot%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%208px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20inline-block%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.comp-desc%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.78rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-muted%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.4%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20%E5%BA%95%E9%83%A8%E6%93%8D%E4%BD%9C%E5%B7%A5%E5%85%B7%E5%88%97%20%2A/%0A%20%20%20%20%20%20%20%20.ui-bottom-bar%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bottom%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translateX%28-50%25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2010%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--card-bg%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20backdrop-filter%3A%20blur%2812px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%208px%2014px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2030px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20var%28--border-color%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%204px%2020px%20rgba%280%2C%200%2C%200%2C%200.3%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.btn-action%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28255%2C%20255%2C%20255%2C%200.08%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20rgba%28255%2C%20255%2C%20255%2C%200.15%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--text-light%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%206px%2014px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.82rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20600%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transition%3A%20all%200.2s%20ease%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%206px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.btn-action%3Ahover%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20var%28--accent-blue%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-color%3A%20var%28--accent-blue%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20/%2A%20Loading%20%E6%8C%87%E7%A4%BA%E5%99%A8%20%2A/%0A%20%20%20%20%20%20%20%20%23loading%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2020%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201.1rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20700%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20letter-spacing%3A%202px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20gap%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.spinner%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%204px%20solid%20rgba%2886%2C%20182%2C%20194%2C%200.2%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-top%3A%204px%20solid%20var%28--accent-cyan%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20animation%3A%20spin%201s%20linear%20infinite%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%40keyframes%20spin%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%200%25%20%7B%20transform%3A%20rotate%280deg%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20100%25%20%7B%20transform%3A%20rotate%28360deg%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%40media%20%28max-width%3A%20768px%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20.ui-header%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%2010px%3B%20left%3A%2010px%3B%20right%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2012px%2014px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.title%20%7B%20font-size%3A%201.1rem%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.subtitle%20%7B%20font-size%3A%200.78rem%3B%20margin-bottom%3A%208px%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.ui-components%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%20auto%3B%20bottom%3A%2060px%3B%20right%3A%2010px%3B%20left%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%2035vh%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2012px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.ui-bottom-bar%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bottom%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2095%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex-wrap%3A%20wrap%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%206px%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20.btn-action%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%204px%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%3C/style%3E%0A%0A%20%20%20%20%3C%21--%20Three.js%20%E5%8F%8A%E5%85%B6%20OrbitControls%20--%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js%22%3E%0A%20%20%20%20%20%20%20%20function%20toggleHeader33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleComponents33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27components-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27comp-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdn.jsdelivr.net/npm/three%400.128.0/examples/js/controls/OrbitControls.js%22%3E%0A%20%20%20%20%20%20%20%20function%20toggleHeader33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleComponents33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27components-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27comp-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%0A%20%20%20%20%3C%21--%20Loading%20Screen%20--%3E%0A%20%20%20%20%3Cdiv%20id%3D%22loading%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22spinner%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cspan%3E%E8%BC%89%E5%85%A5%20TITAN%203D%20%E7%AB%8B%E9%AB%94%E6%A8%A1%E5%9E%8B%E4%B8%AD...%3C/span%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20WebGL%20Canvas%20%E5%AE%B9%E5%99%A8%20--%3E%0A%20%20%20%20%3Cdiv%20id%3D%22canvas-container%22%3E%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%B7%A6%E4%B8%8A%E9%A0%81%E9%9D%A2%E8%B3%87%E8%A8%8A%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-header%22%20id%3D%22header-33%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-header-top%22%20style%3D%22display%3A%20flex%3B%20justify-content%3A%20space-between%3B%20align-items%3A%20center%3B%20gap%3A%208px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22project-tag%22%20style%3D%22margin-bottom%3A0%3B%22%3E%E5%96%AE%E5%85%83%E4%B8%89%EF%BC%9A%E6%87%89%E7%94%A8%E8%88%87%E5%86%8D%E6%83%B3%E5%83%8F%20%EF%BD%9C%20%E4%BD%9C%E5%93%81%203-3%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22toggle-ui-btn%22%20onclick%3D%22toggleHeader33%28%29%22%20style%3D%22background%3A%20rgba%28255%2C255%2C255%2C0.15%29%3B%20border%3A%201px%20solid%20var%28--border-color%29%3B%20color%3A%20var%28--text-light%29%3B%20padding%3A%202px%208px%3B%20border-radius%3A%2012px%3B%20font-size%3A%200.75rem%3B%20cursor%3A%20pointer%3B%20font-weight%3A700%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22header-toggle-icon-33%22%3E%E2%96%B2%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-header-body%22%20id%3D%22header-body-33%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%20class%3D%22title%22%20style%3D%22margin-top%3A%206px%3B%22%3ETITAN%20%E6%99%BA%E6%85%A7%E8%B7%AF%E7%87%88%E7%9B%A3%E6%8E%A7%E7%B6%B2%E7%B5%A1%3C/h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20class%3D%22subtitle%22%3E%E5%85%A8%E5%8F%B0%20AI%20%E8%B7%AF%E7%87%88%E4%BA%A4%E9%80%9A%E7%9B%A3%E6%8E%A7%E7%B6%B2%E7%B5%A1%20%28Taiwan%20Intelligent%20Transportation%20AI%20Network%29%203D%20%E6%A9%9F%E9%AB%94%E7%AB%8B%E9%AB%94%E8%A6%96%E8%A6%BA%E5%8E%9F%E5%9E%8B%E3%80%82%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22controls-hint%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%F0%9F%96%B1%EF%B8%8F%20360%C2%B0%20%E6%BB%91%E9%BC%A0%E6%8E%A7%E5%88%B6%EF%BC%9A%3Cb%3E%E5%B7%A6%E9%8D%B5%E6%8B%96%E6%9B%B3%3C/b%3E%20%E6%97%8B%E8%BD%89%20%EF%BD%9C%20%3Cb%3E%E6%BB%BE%E8%BC%AA%3C/b%3E%20%E7%B8%AE%E6%94%BE%20%EF%BD%9C%20%3Cb%3E%E5%8F%B3%E9%8D%B5%3C/b%3E%20%E5%B9%B3%E7%A7%BB%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%8F%B3%E5%81%B4%E7%B5%84%E4%BB%B6%E7%B4%B0%E7%AF%80%E9%81%B8%E5%96%AE%20--%3E%0A%20%20%20%20%20%20%20%20%3C%21--%20%E5%8F%B3%E5%81%B4%E7%B5%84%E4%BB%B6%E7%B4%B0%E7%AF%80%E9%81%B8%E5%96%AE%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-components%22%20id%3D%22components-panel-33%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22section-title%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3ETITAN%20%E6%A9%9F%E9%AB%94%E6%9E%B6%E6%A7%8B%E6%8B%86%E8%A7%A3%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%20gap%3A%206px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20style%3D%22font-size%3A%200.75rem%3B%20color%3A%20var%28--text-muted%29%3B%22%3E%E9%BB%9E%E6%93%8A%E6%94%BE%E5%A4%A7%E8%A6%96%E8%A7%92%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22toggle-ui-btn%22%20onclick%3D%22toggleComponents33%28%29%22%20style%3D%22background%3A%20rgba%28255%2C255%2C255%2C0.15%29%3B%20border%3A%201px%20solid%20var%28--border-color%29%3B%20color%3A%20var%28--text-light%29%3B%20padding%3A%202px%208px%3B%20border-radius%3A%2012px%3B%20font-size%3A%200.75rem%3B%20cursor%3A%20pointer%3B%20font-weight%3A700%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22comp-toggle-icon-33%22%3E%E2%96%B2%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-components-body%22%20id%3D%22components-body-33%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-card%22%20onclick%3D%22focusComponent%28%27camera%27%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22comp-dot%22%20style%3D%22background%3A%20%2300E5FF%3B%22%3E%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%201.%20%E9%AB%98%E8%A7%A3%E6%9E%90%20AI%20%E8%A6%96%E8%A6%BA%E6%94%9D%E5%BD%B1%E6%A9%9F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-desc%22%3E%E6%8E%A1%E7%94%A8%E5%A4%9A%E8%A7%92%E5%BA%A6%E9%9B%99%E9%8F%A1%E9%A0%AD%EF%BC%8C%E6%90%AD%E8%BC%89%20YOLO/COCO%20%E5%8D%B3%E6%99%82%E8%BB%8A%E7%89%8C%E8%BE%A8%E8%AD%98%E3%80%81%E8%BB%8A%E5%9E%8B%E8%AD%98%E5%88%A5%E8%88%87%E5%8B%95%E6%85%8B%E8%A1%8C%E4%BA%BA%E8%BB%8C%E8%B7%A1%E8%BF%BD%E8%B9%A4%E6%BC%94%E7%AE%97%E6%B3%95%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-card%22%20onclick%3D%22focusComponent%28%27radar%27%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22comp-dot%22%20style%3D%22background%3A%20%23FFD700%3B%22%3E%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%202.%2077GHz%20%E6%AF%AB%E7%B1%B3%E6%B3%A2%E9%9B%B7%E9%81%94%E9%99%A3%E5%88%97%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-desc%22%3E%E6%8F%90%E4%BE%9B%E5%85%A8%E5%A4%A9%E5%80%99%E5%A4%A9%E5%80%99%E7%B2%BE%E6%BA%96%E8%BB%8A%E9%80%9F%E9%87%8F%E6%B8%AC%E8%88%87%E9%80%A3%E7%BA%8C%E8%A1%8C%E9%80%B2%E8%BB%8C%E8%B7%A1%EF%BC%8C%E6%84%9F%E7%9F%A5%E3%80%8C%E6%9C%AA%E4%BF%9D%E6%8C%81%E8%B7%AF%E5%8F%A3%E6%B7%A8%E7%A9%BA%E3%80%8D%E8%88%87%E5%8B%95%E6%85%8B%E9%81%95%E8%A6%8F%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-card%22%20onclick%3D%22focusComponent%28%27thermal%27%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22comp-dot%22%20style%3D%22background%3A%20%23FF5252%3B%22%3E%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%203.%20%E7%B4%85%E5%A4%96%E7%B7%9A%E7%86%B1%E6%84%9F%E6%B8%AC%E9%8F%A1%E9%A0%AD%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-desc%22%3E%E5%BC%B7%E5%8C%96%E5%A4%9C%E9%96%93%E8%88%87%E6%83%A1%E5%8A%A3%E5%A4%A9%E5%80%99%EF%BC%88%E6%BF%83%E9%9C%A7%E3%80%81%E8%B1%AA%E9%9B%A8%EF%BC%89%E4%B8%8B%E4%B9%8B%E8%A1%8C%E4%BA%BA%E7%86%B1%E6%BA%90%E6%84%9F%E7%9F%A5%EF%BC%8C%E7%A2%BA%E4%BF%9D%E8%B7%AF%E5%8F%A3%E5%AE%89%E5%85%A8%E9%9B%B6%E7%9B%B2%E9%BB%9E%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-card%22%20onclick%3D%22focusComponent%28%27edgebox%27%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22comp-dot%22%20style%3D%22background%3A%20%2376FF03%3B%22%3E%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%204.%20Edge%20AI%20%E9%82%8A%E7%B7%A3%E9%81%8B%E7%AE%97%E4%B8%BB%E6%A9%9F%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-desc%22%3E%E6%9C%AC%E5%9C%B0%E5%8D%B3%E6%99%82%E7%89%B9%E5%BE%B5%E6%8F%90%E5%8F%96%E8%88%87%E5%88%9D%E6%AD%A5%E7%AF%A9%E6%AA%A2%EF%BC%8C%E6%AD%A3%E5%B8%B8%E5%BD%B1%E5%83%8F%E6%95%B8%E6%93%9A%2048%20%E5%B0%8F%E6%99%82%E8%87%AA%E5%8B%95%E5%8E%BB%E8%AD%98%E5%88%A5%E5%8C%96%E5%88%AA%E9%99%A4%EF%BC%8C%E4%BF%9D%E8%AD%B7%E5%80%8B%E4%BA%BA%E9%9A%B1%E7%A7%81%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-card%22%20onclick%3D%22focusComponent%28%27antenna%27%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22comp-dot%22%20style%3D%22background%3A%20%23E040FB%3B%22%3E%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%205.%205G%20/%20V2X%20%E5%B0%88%E7%94%A8%E9%80%9A%E8%A8%8A%E5%A4%A9%E7%B7%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22comp-desc%22%3E%E6%94%AF%E6%8F%B4%E5%8A%A0%E5%AF%86%E6%95%B8%E4%BD%8D%E8%BB%8A%E8%BC%9B%20ID%20%E6%99%B6%E7%89%87%E6%84%9F%E6%87%89%E8%88%87%E8%B7%AF%E5%81%B4%E5%96%AE%E5%85%83%EF%BC%88RSU%EF%BC%89%E8%BB%8A%E8%B7%AF%E5%8D%94%E5%90%8C%E8%B3%87%E8%A8%8A%E5%82%B3%E8%BC%B8%E3%80%82%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3C%21--%20%E5%BA%95%E9%83%A8%E6%8E%A7%E5%88%B6%E6%8C%89%E9%88%95%20%28%E5%8F%AF%E6%94%B6%E6%9D%9F%E8%88%87%E5%B1%95%E9%96%8B%29%20--%3E%0A%20%20%20%20%3Cdiv%20class%3D%22ui-bottom-bar%22%20id%3D%22bottom-bar-33%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22toggleBottomBar33%28%29%22%20style%3D%22background%3A%20var%28--accent-gold%29%3B%20color%3A%20%23121820%3B%20font-weight%3A%20800%3B%20border-color%3A%20var%28--accent-gold%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%E2%9A%99%EF%B8%8F%20%E8%AA%BF%E6%95%B4%E5%88%97%20%3Cspan%20id%3D%22bar-toggle-icon-33%22%3E%E2%96%BC%20%E6%94%B6%E6%9D%9F%3C/span%3E%0A%20%20%20%20%20%20%20%20%3C/button%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22ui-bottom-buttons%22%20id%3D%22bottom-buttons-33%22%20style%3D%22display%3A%20flex%3B%20gap%3A%2010px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22resetCamera%28%29%22%3E%F0%9F%94%84%20%E9%87%8D%E7%BD%AE%E5%85%A8%E6%99%AF%E8%A6%96%E8%A7%92%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22toggleScanEffect%28%29%22%3E%F0%9F%93%A1%20%E9%96%8B%E5%95%9F/%E9%97%9C%E9%96%89%20AI%20%E6%8E%83%E6%8F%8F%E5%85%89%E7%B6%B2%3C/button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn-action%22%20onclick%3D%22toggleAutoRotate%28%29%22%3E%F0%9F%94%84%20%E8%87%AA%E5%8B%95%E6%85%A2%E9%80%9F%E6%97%8B%E8%BD%89%3C/button%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20//%20---%201.%20Scene%2C%20Camera%2C%20Renderer%20Setup%20---%0A%20%20%20%20%20%20%20%20const%20container%20%3D%20document.getElementById%28%27canvas-container%27%29%3B%0A%20%20%20%20%20%20%20%20const%20scene%20%3D%20new%20THREE.Scene%28%29%3B%0A%20%20%20%20%20%20%20%20scene.background%20%3D%20new%20THREE.Color%280x121820%29%3B%0A%20%20%20%20%20%20%20%20scene.fog%20%3D%20new%20THREE.FogExp2%280x121820%2C%200.025%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20camera%20%3D%20new%20THREE.PerspectiveCamera%2845%2C%20window.innerWidth%20/%20window.innerHeight%2C%200.1%2C%201000%29%3B%0A%20%20%20%20%20%20%20%20camera.position.set%2812%2C%2010%2C%2018%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20renderer%20%3D%20new%20THREE.WebGLRenderer%28%7B%20antialias%3A%20true%20%7D%29%3B%0A%20%20%20%20%20%20%20%20renderer.setSize%28window.innerWidth%2C%20window.innerHeight%29%3B%0A%20%20%20%20%20%20%20%20renderer.setPixelRatio%28Math.min%28window.devicePixelRatio%2C%202%29%29%3B%0A%20%20%20%20%20%20%20%20renderer.shadowMap.enabled%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20renderer.shadowMap.type%20%3D%20THREE.PCFSoftShadowMap%3B%0A%20%20%20%20%20%20%20%20container.appendChild%28renderer.domElement%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%202.%20Orbit%20Controls%20---%0A%20%20%20%20%20%20%20%20const%20controls%20%3D%20new%20THREE.OrbitControls%28camera%2C%20renderer.domElement%29%3B%0A%20%20%20%20%20%20%20%20controls.enableDamping%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20controls.dampingFactor%20%3D%200.05%3B%0A%20%20%20%20%20%20%20%20controls.maxPolarAngle%20%3D%20Math.PI%20/%202%20%2B%200.05%3B%20//%20%E9%99%90%E5%88%B6%E4%B8%8D%E8%83%BD%E4%BD%8E%E6%96%BC%E5%9C%B0%E9%9D%A2%E5%A4%AA%E5%A4%9A%0A%20%20%20%20%20%20%20%20controls.minDistance%20%3D%203%3B%0A%20%20%20%20%20%20%20%20controls.maxDistance%20%3D%2045%3B%0A%20%20%20%20%20%20%20%20controls.target.set%280%2C%205%2C%200%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%203.%20Lighting%20---%0A%20%20%20%20%20%20%20%20const%20ambientLight%20%3D%20new%20THREE.AmbientLight%280xdce5ef%2C%200.7%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28ambientLight%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20dirLight%20%3D%20new%20THREE.DirectionalLight%280xffffff%2C%201.2%29%3B%0A%20%20%20%20%20%20%20%20dirLight.position.set%2815%2C%2025%2C%2015%29%3B%0A%20%20%20%20%20%20%20%20dirLight.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.mapSize.width%20%3D%202048%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.mapSize.height%20%3D%202048%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.near%20%3D%200.5%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.far%20%3D%2050%3B%0A%20%20%20%20%20%20%20%20const%20d%20%3D%2015%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.left%20%3D%20-d%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.right%20%3D%20d%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.top%20%3D%20d%3B%0A%20%20%20%20%20%20%20%20dirLight.shadow.camera.bottom%20%3D%20-d%3B%0A%20%20%20%20%20%20%20%20scene.add%28dirLight%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E8%97%8D%E7%B6%A0%E8%89%B2%E7%A7%91%E6%8A%80%E6%B0%A3%E6%B0%9B%E9%BB%9E%E5%85%89%E6%BA%90%0A%20%20%20%20%20%20%20%20const%20cyanPointLight%20%3D%20new%20THREE.PointLight%280x00e5ff%2C%202%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20cyanPointLight.position.set%280%2C%208.5%2C%201.5%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28cyanPointLight%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20streetLampLight%20%3D%20new%20THREE.SpotLight%280xfffaed%2C%203%2C%2020%2C%20Math.PI%20/%204%2C%200.4%2C%201%29%3B%0A%20%20%20%20%20%20%20%20streetLampLight.position.set%280%2C%209.2%2C%202.5%29%3B%0A%20%20%20%20%20%20%20%20streetLampLight.target.position.set%280%2C%200%2C%205%29%3B%0A%20%20%20%20%20%20%20%20streetLampLight.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20scene.add%28streetLampLight%29%3B%0A%20%20%20%20%20%20%20%20scene.add%28streetLampLight.target%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%204.%20Environment%3A%20Road%20%26%20Grid%20Floor%20---%0A%20%20%20%20%20%20%20%20//%20%E5%9C%B0%E9%9D%A2%E9%A6%AC%E8%B7%AF%0A%20%20%20%20%20%20%20%20const%20roadGeo%20%3D%20new%20THREE.PlaneGeometry%2830%2C%2030%29%3B%0A%20%20%20%20%20%20%20%20const%20roadMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x1a212b%2C%20roughness%3A%200.8%2C%20metalness%3A%200.2%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20road%20%3D%20new%20THREE.Mesh%28roadGeo%2C%20roadMat%29%3B%0A%20%20%20%20%20%20%20%20road.rotation.x%20%3D%20-Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20road.receiveShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20scene.add%28road%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E8%A1%8C%E4%BA%BA%E7%A9%BF%E8%B6%8A%E9%81%93%20%E6%9E%95%E6%9C%A8%E7%B4%8B%E6%96%91%E9%A6%AC%E7%B7%9A%0A%20%20%20%20%20%20%20%20for%20%28let%20i%20%3D%20-6%3B%20i%20%3C%3D%206%3B%20i%20%2B%3D%201.8%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20zebraGeo%20%3D%20new%20THREE.PlaneGeometry%281.0%2C%206%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20zebraMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xdfdfdf%2C%20roughness%3A%200.5%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20zebra%20%3D%20new%20THREE.Mesh%28zebraGeo%2C%20zebraMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20zebra.rotation.x%20%3D%20-Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20zebra.position.set%28i%2C%200.01%2C%205%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20zebra.receiveShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20scene.add%28zebra%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20%E7%A7%91%E6%8A%80%E6%A0%BC%E7%B7%9A%E7%B6%B2%E6%A0%BC%0A%20%20%20%20%20%20%20%20const%20gridHelper%20%3D%20new%20THREE.GridHelper%2830%2C%2030%2C%200x56b6c2%2C%200x2c3e50%29%3B%0A%20%20%20%20%20%20%20%20gridHelper.position.y%20%3D%200.02%3B%0A%20%20%20%20%20%20%20%20scene.add%28gridHelper%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%205.%20TITAN%20Smart%20Streetlight%20Procedural%20Mesh%20Model%20---%0A%20%20%20%20%20%20%20%20const%20titanGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E6%9D%90%E6%96%99%E5%AE%9A%E7%BE%A9%20%28Morandi%20%26%20Tech%20Dark%29%0A%20%20%20%20%20%20%20%20const%20poleMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x36414e%2C%20metalness%3A%200.7%2C%20roughness%3A%200.3%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20darkMetalMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x1f2732%2C%20metalness%3A%200.8%2C%20roughness%3A%200.2%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20chromeMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xa0b0c0%2C%20metalness%3A%200.9%2C%20roughness%3A%200.1%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20lensMat%20%3D%20new%20THREE.MeshPhysicalMaterial%28%7B%20color%3A%200x00e5ff%2C%20transmission%3A%200.9%2C%20opacity%3A%201%2C%20transparent%3A%20true%2C%20roughness%3A%200.1%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20goldMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xdcae7a%2C%20metalness%3A%200.6%2C%20roughness%3A%200.4%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20ledEmissiveMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xfffaed%2C%20emissive%3A%200xfff4d6%2C%20emissiveIntensity%3A%201.5%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20scanConeMat%20%3D%20new%20THREE.MeshBasicMaterial%28%7B%20color%3A%200x00e5ff%2C%20transparent%3A%20true%2C%20opacity%3A%200.15%2C%20side%3A%20THREE.DoubleSide%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28A%29%20%E5%9F%BA%E5%BA%A7%20%28Base%20Pedestal%29%0A%20%20%20%20%20%20%20%20const%20baseGeo%20%3D%20new%20THREE.CylinderGeometry%280.8%2C%201.0%2C%200.6%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20const%20base%20%3D%20new%20THREE.Mesh%28baseGeo%2C%20poleMat%29%3B%0A%20%20%20%20%20%20%20%20base.position.y%20%3D%200.3%3B%0A%20%20%20%20%20%20%20%20base.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20base.receiveShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28base%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28B%29%20%E7%87%88%E6%A1%BF%E4%B8%BB%E9%AB%94%20%28Main%20Vertical%20Pole%29%0A%20%20%20%20%20%20%20%20const%20poleGeo%20%3D%20new%20THREE.CylinderGeometry%280.25%2C%200.4%2C%209.0%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20const%20pole%20%3D%20new%20THREE.Mesh%28poleGeo%2C%20poleMat%29%3B%0A%20%20%20%20%20%20%20%20pole.position.y%20%3D%205.1%3B%0A%20%20%20%20%20%20%20%20pole.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20pole.receiveShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28pole%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28C%29%20%E5%BC%A7%E5%BD%A2%E9%A0%82%E7%AB%AF%E5%BB%B6%E4%BC%B8%E7%87%88%E8%87%82%20%28Curved%20Arm%20%26%20LED%20Fixture%29%0A%20%20%20%20%20%20%20%20const%20armCurve%20%3D%20new%20THREE.QuadraticBezierCurve3%28%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%209.2%2C%200%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%2010.2%2C%201.5%29%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20THREE.Vector3%280%2C%209.5%2C%203.0%29%0A%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20const%20armGeo%20%3D%20new%20THREE.TubeGeometry%28armCurve%2C%2020%2C%200.18%2C%2012%2C%20false%29%3B%0A%20%20%20%20%20%20%20%20const%20arm%20%3D%20new%20THREE.Mesh%28armGeo%2C%20poleMat%29%3B%0A%20%20%20%20%20%20%20%20arm.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28arm%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E7%87%88%E9%A0%AD%E6%9C%AC%E9%AB%94%20%28Streetlamp%20Housing%29%0A%20%20%20%20%20%20%20%20const%20lampHousingGeo%20%3D%20new%20THREE.BoxGeometry%280.7%2C%200.3%2C%201.4%29%3B%0A%20%20%20%20%20%20%20%20const%20lampHousing%20%3D%20new%20THREE.Mesh%28lampHousingGeo%2C%20darkMetalMat%29%3B%0A%20%20%20%20%20%20%20%20lampHousing.position.set%280%2C%209.5%2C%203.0%29%3B%0A%20%20%20%20%20%20%20%20lampHousing.rotation.x%20%3D%20Math.PI%20/%2012%3B%0A%20%20%20%20%20%20%20%20lampHousing.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28lampHousing%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20LED%20%E7%99%BC%E5%85%89%E9%9D%A2%E6%9D%BF%0A%20%20%20%20%20%20%20%20const%20ledPanelGeo%20%3D%20new%20THREE.PlaneGeometry%280.5%2C%201.1%29%3B%0A%20%20%20%20%20%20%20%20const%20ledPanel%20%3D%20new%20THREE.Mesh%28ledPanelGeo%2C%20ledEmissiveMat%29%3B%0A%20%20%20%20%20%20%20%20ledPanel.position.set%280%2C%209.34%2C%203.0%29%3B%0A%20%20%20%20%20%20%20%20ledPanel.rotation.x%20%3D%20Math.PI%20/%202%20%2B%20Math.PI%20/%2012%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28ledPanel%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28D%29%201.%20%E9%AB%98%E8%A7%A3%E6%9E%90%20AI%20%E8%A6%96%E8%A6%BA%E6%94%9D%E5%BD%B1%E6%A9%9F%E7%B5%84%20%28Camera%20Pod%20-%20Mounted%20at%20Y%20%3D%208.2%29%0A%20%20%20%20%20%20%20%20const%20cameraGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20cameraGroup.position.set%280%2C%208.2%2C%200.4%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20camMountGeo%20%3D%20new%20THREE.CylinderGeometry%280.12%2C%200.12%2C%200.6%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20const%20camMount%20%3D%20new%20THREE.Mesh%28camMountGeo%2C%20chromeMat%29%3B%0A%20%20%20%20%20%20%20%20camMount.rotation.x%20%3D%20Math.PI%20/%203%3B%0A%20%20%20%20%20%20%20%20cameraGroup.add%28camMount%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20camBodyGeo%20%3D%20new%20THREE.BoxGeometry%280.9%2C%200.4%2C%200.5%29%3B%0A%20%20%20%20%20%20%20%20const%20camBody%20%3D%20new%20THREE.Mesh%28camBodyGeo%2C%20darkMetalMat%29%3B%0A%20%20%20%20%20%20%20%20camBody.position.set%280%2C%20-0.15%2C%200.3%29%3B%0A%20%20%20%20%20%20%20%20camBody.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20cameraGroup.add%28camBody%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E9%9B%99%E9%AD%9A%E7%9C%BC/%E9%AB%98%E8%A7%A3%E6%9E%90%E9%8F%A1%E9%A0%AD%0A%20%20%20%20%20%20%20%20for%20%28let%20xOffset%20of%20%5B-0.25%2C%200.25%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20lensRingGeo%20%3D%20new%20THREE.CylinderGeometry%280.14%2C%200.14%2C%200.1%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20lensRing%20%3D%20new%20THREE.Mesh%28lensRingGeo%2C%20chromeMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20lensRing.rotation.x%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20lensRing.position.set%28xOffset%2C%20-0.15%2C%200.56%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cameraGroup.add%28lensRing%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20glassLensGeo%20%3D%20new%20THREE.SphereGeometry%280.11%2C%2016%2C%2016%2C%200%2C%20Math.PI%20%2A%202%2C%200%2C%20Math.PI%20/%202%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20glassLens%20%3D%20new%20THREE.Mesh%28glassLensGeo%2C%20lensMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20glassLens.rotation.x%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20glassLens.position.set%28xOffset%2C%20-0.15%2C%200.58%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cameraGroup.add%28glassLens%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20AI%20%E7%8B%80%E6%85%8B%E9%96%83%E7%88%8D%E6%8C%87%E7%A4%BA%E7%87%88%0A%20%20%20%20%20%20%20%20const%20camLedGeo%20%3D%20new%20THREE.SphereGeometry%280.04%2C%208%2C%208%29%3B%0A%20%20%20%20%20%20%20%20const%20camLedMat%20%3D%20new%20THREE.MeshBasicMaterial%28%7B%20color%3A%200x00e5ff%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20camLed%20%3D%20new%20THREE.Mesh%28camLedGeo%2C%20camLedMat%29%3B%0A%20%20%20%20%20%20%20%20camLed.position.set%280%2C%20-0.02%2C%200.56%29%3B%0A%20%20%20%20%20%20%20%20cameraGroup.add%28camLed%29%3B%0A%0A%20%20%20%20%20%20%20%20titanGroup.add%28cameraGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28E%29%202.%2077GHz%20%E6%AF%AB%E7%B1%B3%E6%B3%A2%E9%9B%B7%E9%81%94%E9%99%A3%E5%88%97%20%28Radar%20Unit%20-%20Mounted%20at%20Y%20%3D%207.0%29%0A%20%20%20%20%20%20%20%20const%20radarGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20radarGroup.position.set%280%2C%207.0%2C%20-0.3%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20radarHousingGeo%20%3D%20new%20THREE.BoxGeometry%280.7%2C%200.7%2C%200.2%29%3B%0A%20%20%20%20%20%20%20%20const%20radarHousing%20%3D%20new%20THREE.Mesh%28radarHousingGeo%2C%20goldMat%29%3B%0A%20%20%20%20%20%20%20%20radarHousing.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20radarGroup.add%28radarHousing%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20radarDishGeo%20%3D%20new%20THREE.CylinderGeometry%280.25%2C%200.25%2C%200.05%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20const%20radarDishMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200x222222%2C%20roughness%3A%200.1%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20radarDish%20%3D%20new%20THREE.Mesh%28radarDishGeo%2C%20radarDishMat%29%3B%0A%20%20%20%20%20%20%20%20radarDish.rotation.x%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20radarDish.position.z%20%3D%200.11%3B%0A%20%20%20%20%20%20%20%20radarGroup.add%28radarDish%29%3B%0A%0A%20%20%20%20%20%20%20%20titanGroup.add%28radarGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28F%29%203.%20%E7%B4%85%E5%A4%96%E7%B7%9A%E7%86%B1%E6%84%9F%E6%87%89%E9%8F%A1%E9%A0%AD%20%28Thermal%20Camera%20-%20Mounted%20at%20Y%20%3D%206.2%29%0A%20%20%20%20%20%20%20%20const%20thermalGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20thermalGroup.position.set%280.4%2C%206.2%2C%200.2%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20thermalBodyGeo%20%3D%20new%20THREE.CylinderGeometry%280.16%2C%200.16%2C%200.5%2C%2016%29%3B%0A%20%20%20%20%20%20%20%20const%20thermalBody%20%3D%20new%20THREE.Mesh%28thermalBodyGeo%2C%20darkMetalMat%29%3B%0A%20%20%20%20%20%20%20%20thermalBody.rotation.z%20%3D%20Math.PI%20/%202%3B%0A%20%20%20%20%20%20%20%20thermalBody.rotation.y%20%3D%20Math.PI%20/%204%3B%0A%20%20%20%20%20%20%20%20thermalBody.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20thermalGroup.add%28thermalBody%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20thermalLensGeo%20%3D%20new%20THREE.SphereGeometry%280.14%2C%2016%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20const%20thermalLensMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xff5252%2C%20roughness%3A%200.2%2C%20metalness%3A%200.8%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20thermalLens%20%3D%20new%20THREE.Mesh%28thermalLensGeo%2C%20thermalLensMat%29%3B%0A%20%20%20%20%20%20%20%20thermalLens.position.set%280.22%2C%200%2C%200.22%29%3B%0A%20%20%20%20%20%20%20%20thermalGroup.add%28thermalLens%29%3B%0A%0A%20%20%20%20%20%20%20%20titanGroup.add%28thermalGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28G%29%204.%20Edge%20AI%20%E9%82%8A%E7%B7%A3%E9%81%8B%E7%AE%97%E4%B8%BB%E6%A9%9F%E7%AE%B1%20%28Edge%20AI%20Box%20-%20Mounted%20at%20Y%20%3D%203.5%29%0A%20%20%20%20%20%20%20%20const%20edgeGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20edgeGroup.position.set%280%2C%203.5%2C%20-0.4%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20edgeBoxGeo%20%3D%20new%20THREE.BoxGeometry%281.0%2C%201.4%2C%200.6%29%3B%0A%20%20%20%20%20%20%20%20const%20edgeBox%20%3D%20new%20THREE.Mesh%28edgeBoxGeo%2C%20darkMetalMat%29%3B%0A%20%20%20%20%20%20%20%20edgeBox.castShadow%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20edgeGroup.add%28edgeBox%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%E6%95%A3%E7%86%B1%E7%89%87%E7%B7%9A%E6%A2%9D%20%28Cooling%20Fins%29%0A%20%20%20%20%20%20%20%20for%20%28let%20y%20%3D%20-0.5%3B%20y%20%3C%3D%200.5%3B%20y%20%2B%3D%200.2%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20finGeo%20%3D%20new%20THREE.BoxGeometry%281.04%2C%200.05%2C%200.64%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20fin%20%3D%20new%20THREE.Mesh%28finGeo%2C%20poleMat%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20fin.position.y%20%3D%20y%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20edgeGroup.add%28fin%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20%E9%81%8B%E7%AE%97%E7%8B%80%E6%85%8B%E6%8C%87%E7%A4%BA%E7%87%88%20%28Green%20LED%29%0A%20%20%20%20%20%20%20%20const%20edgeLedGeo%20%3D%20new%20THREE.SphereGeometry%280.06%2C%208%2C%208%29%3B%0A%20%20%20%20%20%20%20%20const%20edgeLedMat%20%3D%20new%20THREE.MeshBasicMaterial%28%7B%20color%3A%200x76ff03%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20edgeLed%20%3D%20new%20THREE.Mesh%28edgeLedGeo%2C%20edgeLedMat%29%3B%0A%20%20%20%20%20%20%20%20edgeLed.position.set%280.35%2C%200.5%2C%200.31%29%3B%0A%20%20%20%20%20%20%20%20edgeGroup.add%28edgeLed%29%3B%0A%0A%20%20%20%20%20%20%20%20titanGroup.add%28edgeGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28H%29%205.%205G%20/%20V2X%20%E9%80%9A%E8%A8%8A%E5%A4%A9%E7%B7%9A%20%28Antenna%20-%20Top%20Y%20%3D%209.8%29%0A%20%20%20%20%20%20%20%20const%20antennaGroup%20%3D%20new%20THREE.Group%28%29%3B%0A%20%20%20%20%20%20%20%20antennaGroup.position.set%280%2C%209.6%2C%200%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20antPoleGeo%20%3D%20new%20THREE.CylinderGeometry%280.04%2C%200.04%2C%201.0%2C%208%29%3B%0A%20%20%20%20%20%20%20%20const%20antPole%20%3D%20new%20THREE.Mesh%28antPoleGeo%2C%20chromeMat%29%3B%0A%20%20%20%20%20%20%20%20antennaGroup.add%28antPole%29%3B%0A%0A%20%20%20%20%20%20%20%20const%20antCapGeo%20%3D%20new%20THREE.SphereGeometry%280.1%2C%2012%2C%2012%29%3B%0A%20%20%20%20%20%20%20%20const%20antCapMat%20%3D%20new%20THREE.MeshStandardMaterial%28%7B%20color%3A%200xe040fb%2C%20roughness%3A%200.2%20%7D%29%3B%0A%20%20%20%20%20%20%20%20const%20antCap%20%3D%20new%20THREE.Mesh%28antCapGeo%2C%20antCapMat%29%3B%0A%20%20%20%20%20%20%20%20antCap.position.y%20%3D%200.5%3B%0A%20%20%20%20%20%20%20%20antennaGroup.add%28antCap%29%3B%0A%0A%20%20%20%20%20%20%20%20titanGroup.add%28antennaGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20%28I%29%20AI%20%E5%80%92%E5%9C%93%E9%8C%90%E5%BD%A2%E6%8E%83%E6%8F%8F%E5%85%89%E6%9D%9F%E6%84%8F%E8%B1%A1%20%28Scan%20Cone%20Beam%29%0A%20%20%20%20%20%20%20%20const%20scanConeGeo%20%3D%20new%20THREE.ConeGeometry%284.5%2C%208.5%2C%2032%2C%201%2C%20true%29%3B%0A%20%20%20%20%20%20%20%20const%20scanCone%20%3D%20new%20THREE.Mesh%28scanConeGeo%2C%20scanConeMat%29%3B%0A%20%20%20%20%20%20%20%20scanCone.position.set%280%2C%204.25%2C%202.5%29%3B%0A%20%20%20%20%20%20%20%20scanCone.rotation.x%20%3D%20Math.PI%3B%0A%20%20%20%20%20%20%20%20titanGroup.add%28scanCone%29%3B%0A%0A%20%20%20%20%20%20%20%20scene.add%28titanGroup%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20Hide%20Loading%20Indicator%0A%20%20%20%20%20%20%20%20document.getElementById%28%27loading%27%29.style.display%20%3D%20%27none%27%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%206.%20Interactivity%20%26%20Camera%20Focus%20Functions%20---%0A%20%20%20%20%20%20%20%20const%20componentTargets%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%27camera%27%3A%20%7B%20target%3A%20new%20THREE.Vector3%280%2C%208.0%2C%200.5%29%2C%20pos%3A%20new%20THREE.Vector3%280%2C%208.5%2C%203.5%29%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27radar%27%3A%20%7B%20target%3A%20new%20THREE.Vector3%280%2C%207.0%2C%20-0.3%29%2C%20pos%3A%20new%20THREE.Vector3%282.5%2C%207.5%2C%20-2.5%29%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27thermal%27%3A%20%7B%20target%3A%20new%20THREE.Vector3%280.4%2C%206.2%2C%200.2%29%2C%20pos%3A%20new%20THREE.Vector3%283.0%2C%206.5%2C%202.5%29%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27edgebox%27%3A%20%7B%20target%3A%20new%20THREE.Vector3%280%2C%203.5%2C%20-0.4%29%2C%20pos%3A%20new%20THREE.Vector3%28-3.0%2C%204.0%2C%20-3.0%29%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%27antenna%27%3A%20%7B%20target%3A%20new%20THREE.Vector3%280%2C%209.6%2C%200%29%2C%20pos%3A%20new%20THREE.Vector3%282.0%2C%2010.5%2C%203.0%29%20%7D%0A%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20function%20focusComponent%28key%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20info%20%3D%20componentTargets%5Bkey%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%21info%29%20return%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20Simple%20camera%20transition%20animation%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startPos%20%3D%20camera.position.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTarget%20%3D%20controls.target.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20duration%20%3D%20800%3B%20//%20ms%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTime%20%3D%20performance.now%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20animateTransition%28now%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20elapsed%20%3D%20now%20-%20startTime%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20progress%20%3D%20Math.min%28elapsed%20/%20duration%2C%201%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//%20EaseOutCubic%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20ease%20%3D%201%20-%20Math.pow%281%20-%20progress%2C%203%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20camera.position.lerpVectors%28startPos%2C%20info.pos%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.target.lerpVectors%28startTarget%2C%20info.target%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.update%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28progress%20%3C%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animateTransition%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animateTransition%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20resetCamera%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startPos%20%3D%20camera.position.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTarget%20%3D%20controls.target.clone%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20defaultPos%20%3D%20new%20THREE.Vector3%2812%2C%2010%2C%2018%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20defaultTarget%20%3D%20new%20THREE.Vector3%280%2C%205%2C%200%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20duration%20%3D%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20startTime%20%3D%20performance.now%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20animateTransition%28now%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20elapsed%20%3D%20now%20-%20startTime%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20progress%20%3D%20Math.min%28elapsed%20/%20duration%2C%201%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20ease%20%3D%201%20-%20Math.pow%281%20-%20progress%2C%203%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20camera.position.lerpVectors%28startPos%2C%20defaultPos%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.target.lerpVectors%28startTarget%2C%20defaultTarget%2C%20ease%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controls.update%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28progress%20%3C%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animateTransition%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animateTransition%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20let%20scanVisible%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20function%20toggleScanEffect%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scanVisible%20%3D%20%21scanVisible%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20scanCone.visible%20%3D%20scanVisible%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20let%20isAutoRotating%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20function%20toggleAutoRotate%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20isAutoRotating%20%3D%20%21isAutoRotating%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.autoRotate%20%3D%20isAutoRotating%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.autoRotateSpeed%20%3D%202.0%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20//%20---%207.%20Animation%20Loop%20---%0A%20%20%20%20%20%20%20%20let%20clock%20%3D%20new%20THREE.Clock%28%29%3B%0A%0A%20%20%20%20%20%20%20%20function%20animate%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20requestAnimationFrame%28animate%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20elapsedTime%20%3D%20clock.getElapsedTime%28%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20%E6%8E%83%E6%8F%8F%E5%85%89%E9%8C%90%E5%91%BC%E5%90%B8%E8%88%87%E8%84%88%E8%A1%9D%E6%97%8B%E8%BD%89%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28scanCone%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scanCone.rotation.y%20%3D%20elapsedTime%20%2A%200.5%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scanConeMat.opacity%20%3D%200.12%20%2B%20Math.sin%28elapsedTime%20%2A%203%29%20%2A%200.05%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20LED%20%E6%8C%87%E7%A4%BA%E7%87%88%E5%BE%AE%E5%BC%B1%E9%96%83%E7%88%8D%0A%20%20%20%20%20%20%20%20%20%20%20%20camLedMat.opacity%20%3D%200.6%20%2B%20Math.sin%28elapsedTime%20%2A%206%29%20%2A%200.4%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20edgeLedMat.opacity%20%3D%200.7%20%2B%20Math.cos%28elapsedTime%20%2A%204%29%20%2A%200.3%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20controls.update%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20renderer.render%28scene%2C%20camera%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20animate%28%29%3B%0A%0A%20%20%20%20%20%20%20%20//%20---%208.%20Window%20Resize%20Handling%20---%0A%20%20%20%20%20%20%20%20window.addEventListener%28%27resize%27%2C%20%28%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20camera.aspect%20%3D%20window.innerWidth%20/%20window.innerHeight%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20camera.updateProjectionMatrix%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20renderer.setSize%28window.innerWidth%2C%20window.innerHeight%29%3B%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20function%20toggleHeader33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27header-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27header-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleComponents33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20body%20%3D%20document.getElementById%28%27components-body-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27comp-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28body.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27block%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20toggleBottomBar33%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20btns%20%3D%20document.getElementById%28%27bottom-buttons-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20icon%20%3D%20document.getElementById%28%27bar-toggle-icon-33%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28btns.style.display%20%3D%3D%3D%20%27none%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27flex%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%BC%20%E6%94%B6%E6%9D%9F%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20btns.style.display%20%3D%20%27none%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon.textContent%20%3D%20%27%E2%96%B2%20%E5%B1%95%E9%96%8B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E"></iframe>
                    </div>
                `
            }
        };

        function openArtworkModal(key) {
            const data = artworkData[key];
            if (!data) return;

            document.getElementById('art-modal-badge').textContent = data.badge;
            document.getElementById('art-modal-badge').style.background = data.color;
            document.getElementById('art-modal-title').textContent = data.title;

            let goalsHtml = '<ul class="modal-ul">';
            data.goals.forEach(g => {
                goalsHtml += `<li>${g}</li>`;
            });
            goalsHtml += '</ul>';

            let bodyHtml = `
                <h4 class="modal-section-h4">🎯 專案目標</h4>
                ${goalsHtml}

                <h4 class="modal-section-h4">📝 專案簡述</h4>
                <p class="modal-p">${data.overview}</p>

                <h4 class="modal-section-h4">🚀 專案成果與成果展現</h4>
                ${data.deliverableHtml}
            `;

            document.getElementById('art-modal-body').innerHTML = bodyHtml;
            document.getElementById('artwork-detail-modal').classList.add('active');
        }

        function closeArtworkModal() {
            document.getElementById('artwork-detail-modal').classList.remove('active');
        }

        // 背景點擊自動關閉 Modal
        window.onclick = function(event) {
            const subM = document.getElementById('subtheme-modal');
            const layM = document.getElementById('layout-spec-modal');
            const artM = document.getElementById('artwork-detail-modal');
            if (event.target === subM) closeSubthemeModal();
            if (event.target === layM) closeLayoutModal();
            if (event.target === artM) closeArtworkModal();
        };
    </script>
</body>
</html>
