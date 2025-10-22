function generateLeetcode(date) {
    const leetcodes = fetch('/js/leetcodes.json')
      .then(response => response.json())
      .then(data => {
            const leetcodeData = data;

            lc = leetcodeData.find(attempt => attempt.date === date);
            const holder = document.getElementById("content-holder");
            const container = document.createElement("div");
            container.classList = "col";

            const content = "test";

            container.innerHTML = `
            <a class="page-title" href=${lc.link}>${lc.num}. ${lc.name}</a>
            <span class="page-subtitle">${lc.date}</span>

            ${content}`;

            holder.appendChild(container);
      })
      .catch(error => console.error('Error fetching JSON:', error));
}

