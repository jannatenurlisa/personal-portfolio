// Select all tab buttons and panels
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Loop through each button and add a click listener
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        // Remove active from all buttons and panels
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        // Add active to clicked button
        btn.classList.add('active');

        // Find the matching panel using data-target
        const target = btn.getAttribute('data-target');
        document.getElementById(target).classList.add('active');

    });
});