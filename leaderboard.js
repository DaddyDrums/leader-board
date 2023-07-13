window.addEventListener('DOMContentLoaded', (event) => {
    const leaderboard = document.getElementById('leaderboard');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const ROWS_PER_PAGE = 10;
    let currentPage = 0;

    // Simulate a leaderboard with 100 rows
    const data = Array.from({ length: 100 }, (_, i) => ({
        rank: i + 1,
        name: `Player ${i + 1}`,
        score: Math.floor(Math.random() * 1000),
    }));

    // Function to refresh the displayed leaderboard
    function refreshLeaderboard() {
        // Clear existing rows
        while (leaderboard.rows.length > 1) {
            leaderboard.deleteRow(1);
        }

        // Add new rows
        for (let i = currentPage * ROWS_PER_PAGE; i < (currentPage + 1) * ROWS_PER_PAGE; i++) {
            if (i >= data.length) break;
            const row = leaderboard.insertRow(-1);
            row.insertCell().textContent = data[i].rank;
            row.insertCell().textContent = data[i].name;
            row.insertCell().textContent = data[i].score;
        }
    }

    // Bind click event handlers to buttons
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            refreshLeaderboard();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < Math.floor(data.length / ROWS_PER_PAGE)) {
            currentPage++;
            refreshLeaderboard();
        }
    });

    // Initial load of leaderboard
    refreshLeaderboard();
});
