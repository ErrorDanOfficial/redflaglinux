document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and its target content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// Language Switcher Logic
function setLang(lang) {
    // Hide all language elements
    document.querySelectorAll('.lang-en, .lang-ru, .lang-zh').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show selected language elements
    document.querySelectorAll('.lang-' + lang).forEach(el => {
        // Use inline-block for buttons and spans, block for others
        if (el.tagName === 'A' || el.tagName === 'SPAN' || el.tagName === 'B') {
            el.style.display = 'inline-block';
        } else {
            el.style.display = 'block';
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find the button that called this
    const btns = document.querySelectorAll('.lang-btn');
    if (lang === 'en') btns[0].classList.add('active');
    if (lang === 'ru') btns[1].classList.add('active');
    if (lang === 'zh') btns[2].classList.add('active');
}
