
/* Authentic Notebook UI - Enhanced Responsive & Aesthetic */

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');

:root {
    --notebook-paper: #fefefe;
    --notebook-cream: #fdf9f4;
    --notebook-lines: #e8e2dc;
    --notebook-margin: #ff6b6b;
    --notebook-holes: #c7beb5;
    --ink-blue: #2c3e50;
    --ink-purple: #6c5ce7;
    --ink-green: #00b894;
    --pencil-gray: #636e72;
    --highlight-yellow: #fdcb6e;
    --shadow-notebook: rgba(0, 0, 0, 0.12);
    --shadow-deep: rgba(0, 0, 0, 0.25);
    --accent-coral: #ff7675;
    --accent-mint: #00cec9;
    --text-dark: #2d3436;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #fd79a8 100%);
    background-attachment: fixed;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    padding: clamp(15px, 4vw, 40px);
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Main Notebook Container */
.notebook-container {
    max-width: min(900px, 95vw);
    margin: 0 auto;
    background: var(--notebook-paper);
    border-radius: 12px 12px 6px 6px;
    box-shadow: 
        0 0 0 1px rgba(221, 221, 221, 0.8),
        0 8px 25px var(--shadow-notebook),
        0 20px 40px var(--shadow-deep);
    position: relative;
    min-height: clamp(600px, 85vh, 900px);
    transform: rotate(-0.3deg);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.notebook-container:hover {
    transform: rotate(-0.3deg) translateY(-5px);
    box-shadow: 
        0 0 0 1px rgba(221, 221, 221, 0.9),
        0 12px 35px var(--shadow-notebook),
        0 25px 50px var(--shadow-deep);
}

/* Enhanced Spiral Binding */
.notebook-container::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: clamp(50px, 8vw, 70px);
    background: 
        radial-gradient(circle at center, var(--notebook-holes) 3px, transparent 3px),
        linear-gradient(to right, 
            transparent 0px,
            rgba(199, 190, 181, 0.1) 20px,
            var(--notebook-holes) 25px,
            var(--notebook-holes) 35px,
            rgba(199, 190, 181, 0.1) 40px,
            transparent 50px
        );
    background-size: 100% 35px, 100% 100%;
    background-repeat: repeat-y, no-repeat;
    z-index: 1;
}

/* Enhanced Paper Lines */
.notebook-container::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: 
        repeating-linear-gradient(
            transparent 0px,
            transparent 30px,
            var(--notebook-lines) 30px,
            var(--notebook-lines) 31px
        ),
        linear-gradient(
            90deg,
            transparent 0px,
            transparent clamp(70px, 10vw, 85px),
            var(--notebook-margin) clamp(70px, 10vw, 85px),
            var(--notebook-margin) clamp(72px, 10vw, 87px),
            transparent clamp(72px, 10vw, 87px)
        );
    background-size: 100% 32px, 100% 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
}

/* Responsive Container */
.container {
    position: relative;
    z-index: 2;
    padding: clamp(30px, 6vw, 60px) clamp(20px, 4vw, 50px) clamp(30px, 6vw, 60px) clamp(70px, 12vw, 120px);
    transform: rotate(0.3deg);
    width: 100%;
}

/* Enhanced Handwritten Title */
.notebook-header {
    margin-bottom: clamp(40px, 8vw, 70px);
    text-align: left;
    position: relative;
}

.notebook-header h1 {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 700;
    color: var(--ink-purple);
    margin-bottom: 15px;
    transform: rotate(-1.2deg);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    line-height: 1.1;
    background: linear-gradient(45deg, var(--ink-purple), var(--accent-coral));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.notebook-header .lead {
    font-family: 'Caveat', cursive;
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    color: var(--pencil-gray);
    font-weight: 500;
    transform: rotate(0.5deg);
    margin-left: clamp(10px, 3vw, 25px);
    opacity: 0.9;
    position: relative;
}

/* Enhanced Notebook Sections */
.notebook-section {
    margin-bottom: clamp(35px, 6vw, 55px);
    position: relative;
    animation: fadeInUp 0.8s ease-out;
}

.section-title {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(1.8rem, 5vw, 2.4rem);
    font-weight: 600;
    color: var(--ink-blue);
    margin-bottom: clamp(15px, 3vw, 25px);
    transform: rotate(-0.7deg);
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 105%;
    height: 4px;
    background: linear-gradient(90deg, var(--highlight-yellow), var(--accent-coral));
    transform: skew(-8deg);
    opacity: 0.8;
    border-radius: 2px;
}

/* Enhanced Text Styling */
.notebook-section p {
    font-family: 'Caveat', cursive;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    color: var(--pencil-gray);
    margin-bottom: 18px;
    transform: rotate(0.3deg);
    line-height: 1.6;
    transition: color 0.3s ease;
}

.notebook-section p:hover {
    color: var(--ink-blue);
}

.notebook-section p strong {
    color: var(--ink-blue);
    font-weight: 700;
    background: linear-gradient(120deg, transparent 0%, var(--highlight-yellow) 0%, var(--highlight-yellow) 100%, transparent 100%);
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0 85%;
}

/* Enhanced Form Styling */
form {
    background: rgba(255, 255, 255, 0.4);
    padding: clamp(20px, 4vw, 35px);
    border-radius: 12px;
    border: 2px dashed var(--notebook-lines);
    margin: clamp(15px, 3vw, 25px) 0;
    position: relative;
    transform: rotate(0.5deg);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

form:hover {
    background: rgba(255, 255, 255, 0.5);
    border-color: var(--ink-purple);
    transform: rotate(0.5deg) scale(1.01);
}

/* Enhanced Form Elements */
label {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 600;
    color: var(--ink-blue);
    margin-bottom: 12px;
    display: block;
    transform: rotate(-0.3deg);
}

.form-control {
    font-family: 'Caveat', cursive;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    border: none;
    border-bottom: 3px solid var(--notebook-lines);
    background: rgba(255, 255, 255, 0.3);
    padding: 12px 8px;
    width: 100%;
    margin-bottom: 25px;
    color: var(--ink-blue);
    outline: none;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 8px 8px 0 0;
}

.form-control:focus {
    border-bottom-color: var(--ink-purple);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 15px rgba(108, 92, 231, 0.15);
    transform: translateY(-2px);
}

.form-control::placeholder {
    color: var(--pencil-gray);
    opacity: 0.8;
    font-style: italic;
}

/* Enhanced Button Design */
.btn {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    border: 3px solid;
    border-radius: 25px;
    padding: clamp(10px, 2vw, 15px) clamp(20px, 4vw, 35px);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: rotate(-1deg);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    backdrop-filter: blur(10px);
    min-width: clamp(120px, 25vw, 160px);
    text-align: center;
    margin: clamp(8px, 2vw, 12px);
    display: inline-block;
}

.btn:hover {
    transform: rotate(-1deg) scale(1.08) translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.btn:active {
    transform: rotate(-1deg) scale(1.05) translateY(-1px);
}

.btn-primary {
    background: linear-gradient(135deg, var(--ink-purple), var(--accent-coral));
    border-color: var(--ink-purple);
    color: white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #5a52d5, #fd79a8);
    color: white;
}

.btn-success {
    background: linear-gradient(135deg, var(--ink-green), var(--accent-mint));
    border-color: var(--ink-green);
    color: white;
}

.btn-success:hover {
    background: linear-gradient(135deg, #00a085, #00b894);
    color: white;
}

/* Enhanced Alert Styling */
.alert {
    border: none;
    border-radius: 12px;
    padding: clamp(12px, 3vw, 20px);
    margin: clamp(15px, 3vw, 25px) 0;
    font-family: 'Caveat', cursive;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    font-weight: 600;
    position: relative;
    transform: rotate(0.8deg);
    box-shadow: 0 5px 20px rgba(0,0,0,0.12);
    backdrop-filter: blur(10px);
    border-left: 5px solid;
}

.alert-success {
    background: rgba(212, 237, 218, 0.9);
    color: var(--ink-green);
    border-left-color: var(--ink-green);
}

.alert-danger {
    background: rgba(248, 215, 218, 0.9);
    color: #d63384;
    border-left-color: #d63384;
}

.copyable-alert {
    cursor: pointer;
    transition: all 0.3s ease;
}

.copyable-alert:hover {
    transform: rotate(0.8deg) scale(1.02) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.18);
}

/* Enhanced Instructions */
.notebook-section div {
    margin-left: clamp(20px, 4vw, 40px);
}

.notebook-section div p {
    font-family: 'Caveat', cursive;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: var(--pencil-gray);
    margin-bottom: 12px;
    position: relative;
    padding-left: 25px;
}

.notebook-section div p::before {
    content: '•';
    color: var(--accent-coral);
    font-weight: bold;
    position: absolute;
    left: 0;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    animation: pulse 2s infinite;
}

/* Enhanced Footer */
footer {
    text-align: center;
    margin-top: clamp(40px, 8vw, 70px);
    padding: clamp(20px, 4vw, 40px) 0;
    border-top: 3px dashed var(--notebook-lines);
    position: relative;
}

footer p {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: var(--pencil-gray);
    margin-bottom: 10px;
    transform: rotate(-0.5deg);
}

footer a {
    color: var(--ink-purple);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    position: relative;
}

footer a:hover {
    color: var(--accent-coral);
    transform: scale(1.05);
}

footer a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, var(--ink-purple), var(--accent-coral));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

footer a:hover::after {
    transform: scaleX(1);
}

/* Enhanced Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px) rotate(0.5deg);
    }
    to {
        opacity: 1;
        transform: translateY(0) rotate(0.3deg);
    }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* Enhanced Responsive Design */
@media (max-width: 768px) {
    .notebook-container {
        transform: rotate(0deg);
        border-radius: 8px;
        margin: 10px;
        overflow-x: hidden;
    }
    
    .notebook-container:hover {
        transform: rotate(0deg) translateY(-3px);
    }
    
    .container {
        transform: rotate(0deg);
        padding: 25px 15px 30px 55px;
        max-width: 100%;
        overflow-x: hidden;
    }
    
    .notebook-header h1 {
        font-size: clamp(2rem, 6vw, 3rem);
        word-wrap: break-word;
        hyphens: auto;
    }
    
    .section-title {
        font-size: clamp(1.5rem, 4vw, 2rem);
        word-wrap: break-word;
    }
    
    .notebook-section p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        max-width: 100%;
    }
    
    .form-control {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
    
    .btn {
        width: 100%;
        margin: 8px 0;
        transform: rotate(0deg);
        font-size: clamp(1rem, 2vw, 1.2rem);
        word-wrap: break-word;
    }
    
    .btn:hover {
        transform: scale(1.03) translateY(-2px);
    }
    
    form {
        transform: rotate(0deg);
        margin: 15px 0;
        padding: 20px 15px;
        overflow-x: hidden;
    }
    
    .alert {
        transform: rotate(0deg);
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        word-wrap: break-word;
        overflow-wrap: break-word;
        padding: 15px;
    }
    
    .copyable-alert:hover {
        transform: scale(1.01) translateY(-1px);
    }
    
    /* Fix margin line positioning on mobile */
    .notebook-container::after {
        background-image: 
            repeating-linear-gradient(
                transparent 0px,
                transparent 30px,
                var(--notebook-lines) 30px,
                var(--notebook-lines) 31px
            ),
            linear-gradient(
                90deg,
                transparent 0px,
                transparent 55px,
                var(--notebook-margin) 55px,
                var(--notebook-margin) 57px,
                transparent 57px
            );
    }
}

@media (max-width: 480px) {
    body {
        padding: 8px;
    }
    
    .notebook-container {
        margin: 3px;
        min-height: 70vh;
        overflow-x: hidden;
    }
    
    .container {
        padding: 20px 12px 25px 45px;
        max-width: 100%;
    }
    
    .notebook-container::before {
        width: 40px;
    }
    
    .notebook-container::after {
        background-image: 
            repeating-linear-gradient(
                transparent 0px,
                transparent 28px,
                var(--notebook-lines) 28px,
                var(--notebook-lines) 29px
            ),
            linear-gradient(
                90deg,
                transparent 0px,
                transparent 45px,
                var(--notebook-margin) 45px,
                var(--notebook-margin) 47px,
                transparent 47px
            );
        background-size: 100% 30px, 100% 100%;
    }
    
    .notebook-header h1 {
        font-size: clamp(1.8rem, 5vw, 2.5rem);
        line-height: 1.2;
        word-break: break-word;
    }
    
    .notebook-header .lead {
        font-size: clamp(1rem, 2.5vw, 1.3rem);
        margin-left: 10px;
        word-break: break-word;
    }
    
    .section-title {
        font-size: clamp(1.4rem, 3.5vw, 1.8rem);
        word-break: break-word;
    }
    
    .notebook-section {
        margin-bottom: 25px;
    }
    
    .notebook-section div {
        margin-left: 10px;
    }
    
    .notebook-section p {
        font-size: clamp(0.95rem, 2vw, 1.15rem);
        word-break: break-word;
        line-height: 1.5;
    }
    
    .notebook-section div p {
        padding-left: 20px;
        font-size: clamp(0.9rem, 2vw, 1.1rem);
    }
    
    label {
        font-size: clamp(1.1rem, 2.5vw, 1.4rem);
        word-break: break-word;
    }
    
    form {
        padding: 15px 12px;
        margin: 12px 0;
    }
    
    .form-control {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        padding: 10px 6px;
    }
    
    .btn {
        font-size: clamp(0.95rem, 2vw, 1.15rem);
        padding: 12px 20px;
        min-width: 100px;
    }
    
    .alert {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        padding: 12px;
        margin: 12px 0;
    }
    
    footer p {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        word-break: break-word;
    }
}

/* Enhanced Paper Texture */
.notebook-container {
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(120, 119, 108, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(120, 119, 108, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(120, 119, 108, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 60% 20%, rgba(255, 182, 193, 0.01) 0%, transparent 50%);
}

/* Enhanced Focus States */
.form-control:focus {
    box-shadow: 0 4px 15px rgba(108, 92, 231, 0.2);
}

.btn:focus {
    outline: 3px solid var(--accent-coral);
    outline-offset: 3px;
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .notebook-container {
        transform: none !important;
    }
    
    .container {
        transform: none !important;
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    :root {
        --notebook-lines: #666;
        --ink-blue: #000;
        --pencil-gray: #333;
    }
}
