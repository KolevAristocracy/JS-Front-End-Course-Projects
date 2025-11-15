function extract(elementId) {
    const el = document.getElementById(elementId);
    const text = el.textContent
    const pattern = /\(.*?\)/g;

    const matches = text.match(pattern)
    return matches.map(match => match.slice(1, -1)).join('; ');
}

extract('content')