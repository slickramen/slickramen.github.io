/* syntax highlighting */

export function highlightSyntax() {
    const codeBlocks = document.querySelectorAll("code");

    const patterns = [
        { type: "comment", regex: /#.*/g },
        { type: "string", regex: /(['"]{3}[\s\S]*?['"]{3}|(['"])(?:(?!\2)[^\\]|\\.)*\2)/g },
        { type: "number", regex: /\b\d+(\.\d+)?\b/g },
        { type: "keyword", regex: /\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g },
        { type: "builtin", regex: /\b(abs|all|any|bin|bool|bytearray|bytes|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__)\b/g },
        { type: "decorator", regex: /@\w+/g },
        { type: "function", regex: /\bdef\s+([a-zA-Z_]\w*)/g },
        { type: "class", regex: /\bclass\s+([A-Z][a-zA-Z0-9_]*)/g },
        { type: "operator", regex: /[+\-*/%=<>!]=?|\/\/|::|\.{1,3}/g },
    ];

    for (const codeBlock of codeBlocks) {
        const text = codeBlock.textContent;

        // Tokenise text so that patterns can't overlap
        const tokens = [{ text, type: null }];

        // Loop through patterns and apply them in order
        for (const { type, regex } of patterns) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i].type) continue;

                const parts = [];
                let lastIndex = 0;
                const str = tokens[i].text;
                let match;
                

                while ((match = regex.exec(str)) !== null) {
                    const before = str.slice(lastIndex, match.index);
                    const matched = match[0];
                    if (before) {
                        parts.push({ text: before, type: null });
                    }

                    parts.push({ text: matched, type });
                    lastIndex = match.index + matched.length;
                }

                if (lastIndex < str.length) {
                    parts.push({ text: str.slice(lastIndex), type: null });
                }

                // Replace that token with the newly split tokens
                tokens.splice(i, 1, ...parts);
                i += parts.length - 1;
            }
        }

        // Push html into to codeblock to replace original text
        codeBlock.innerHTML = tokens
            .map(t => t.type ? `<span class="${t.type}">${t.text}</span>` : t.text)
            .join("");
    }
}
