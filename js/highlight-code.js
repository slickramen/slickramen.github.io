export function highlightSyntax() {
    const codeBlocks = document.querySelectorAll("code");

    const patterns = [
        { type: "function", regex: /\bdef\s+([a-zA-Z_]\w*)/g },
        { type: "class", regex: /\bclass\s+([A-Z][a-zA-Z0-9_]*)/g },
        { type: "comment", regex: /#.*/g },
        { type: "string", regex: /(['"]{3}[\s\S]*?['"]{3}|(['"])(?:(?!\2)[^\\]|\\.)*\2)/g },
        { type: "number", regex: /\b\d+(\.\d+)?\b/g },
        { type: "keyword", regex: /\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield|self)\b/g },
        { type: "builtin", regex: /\b(abs|all|any|bin|bool|bytearray|bytes|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__)\b/g },
        { type: "called-function", regex: /(?<!\.)\b([a-zA-Z_]\w*)(?=\s*\()/g },
        { type: "decorator", regex: /@\w+/g },
        { type: "operator", regex: /[+\-*/%=<>!]=?|\/\/|::|\.{1,3}/g },
    ];

    const escapeHtml = (s) =>
        s.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");

    for (const codeBlock of codeBlocks) {
        const text = codeBlock.textContent;
        let tokens = [{ text, type: null }];

        for (const { type, regex } of patterns) {
            const newTokens = [];

            for (const token of tokens) {
                if (token.type) {
                    newTokens.push(token);
                    continue;
                }

                const str = token.text;
                let lastIndex = 0;
                let match;

                while ((match = regex.exec(str)) !== null) {
                    const before = str.slice(lastIndex, match.index);
                    if (before) newTokens.push({ text: before, type: null });

                    if (type === "function" || type === "class") {
                        // Split into keyword + name
                        const keyword = type === "function" ? "def" : "class";
                        const name = match[1];
                        const after = match[0].slice(keyword.length + 1 + name.length); // handle trailing chars if any
                        newTokens.push({ text: keyword, type: "keyword" });
                        newTokens.push({ text: " ", type: null });
                        newTokens.push({
                            text: name,
                            type: type === "function" ? "function-name" : "class-name"
                        });
                        if (after) newTokens.push({ text: after, type: null });
                    } else {
                        newTokens.push({ text: match[0], type });
                    }

                    lastIndex = match.index + match[0].length;
                    if (regex.lastIndex === match.index) regex.lastIndex++;
                }

                if (lastIndex < str.length) {
                    newTokens.push({ text: str.slice(lastIndex), type: null });
                }
            }

            tokens = newTokens;
        }

        const html = tokens
            .map(t =>
                t.type ? `<span class="${t.type}">${escapeHtml(t.text)}</span>` : escapeHtml(t.text)
            )
            .join("");

        codeBlock.innerHTML = html;
    }
}
