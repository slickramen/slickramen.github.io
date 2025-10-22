const leetcodes = fetch('/js/leetcodes.json')
      .then(response => response.json())
      .then(data => {
        populateLeetcodes(data);
      })
      .catch(error => console.error('Error fetching JSON:', error));

function populateLeetcodes(data) {
    const container = document.querySelector("#leetcodeContainer").querySelector("tbody");
    
    data.forEach((lc) => {
        const div = document.createElement("tr");

        div.className = `leetcode-attempt ${lc.difficulty.toLowerCase()}`;

        const leetcodeDate = lc.date.replaceAll("/", "-");

        div.innerHTML = `
            <td class="problem-number">${lc.num}.</td>
            <td><a href="/leetcodes/leetcode-${leetcodeDate}">${lc.name}</a></td>
            <td>${lc.date}</td>
            <td><span class="difficulty-chip">${lc.difficulty}</span></td>
        `

        container.appendChild(div);
    });
}
