document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the cursor HTML into the body
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="cursor-dot"></div>
        <div class="cursor-outline"></div>
    `);

    // 2. Cursor logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', function(e) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorOutline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 3. Hover effects
    const clickables = document.querySelectorAll('a, button, input');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursorOutline.style.backgroundColor = 'rgba(209, 179, 139, 0.15)'; 
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
});
