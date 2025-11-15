/**
 * 
 * @param {HTMLElement} reference 
 * @param {*} stringMatch 
 * @param {*} replacer 
 */

function edit(reference, stringMatch, replacer) {
    const content = reference.textContent;
    const matcher = new RegExp(stringMatch, 'g');
    const edited = content.replace(matcher, replacer);
    reference.textContent = edited
}