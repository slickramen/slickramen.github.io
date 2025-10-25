/* Generating a leetcode page */

import { highlightSyntax } from "./highlight-code.js";

function generateLeetcode(date, solution, preamble) {
    const leetcodes = fetch('/js/leetcodes.json')
      .then(response => response.json())
      .then(data => {
            const leetcodeData = data;

            const lc = leetcodeData.find(attempt => attempt.date === date);
            const holder = document.getElementById("content-holder");
            const container = document.createElement("div");
            container.classList = "col";

            const difficulty = lc.difficulty.toLowerCase();

            container.innerHTML = `
<a class="page-title" href=${lc.link}>${lc.num}. ${lc.name}</a>
<div class="page-subtitle-row"><span class="${difficulty} difficulty-chip">${lc.difficulty}</span><span class="page-subtitle">${lc.date}</span></div>

<span class="page-header" id="preamble">Preamble</span>
${preamble.textContent}


<span class="page-header" id="code">Solution</span>
<div class="code-container">
<div class="language-container">
<span class="code-solution-language" style="width: fit-content">Python 3</span>
</div>
<pre class="code"><code class="code python">${solution.textContent}</code></pre>
</div>
            `;

            holder.appendChild(container);
            highlightSyntax();
      })
      .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener("DOMContentLoaded", () => {
      const leetcodeIndex = document.querySelector("#leetcodeIndex");
      const leetcodeSolution = document.querySelector("#leetcodeSolution");
      const leetcodePreamble = document.querySelector("#leetcodePreamble");

      if (leetcodeIndex && leetcodeSolution && leetcodePreamble) {
            generateLeetcode(leetcodeIndex.textContent, leetcodeSolution, leetcodePreamble);
      }
});
