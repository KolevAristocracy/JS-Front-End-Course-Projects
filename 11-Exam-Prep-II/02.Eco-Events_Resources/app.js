window.addEventListener("load", solve);

function solve() {
  const registerForm = document.querySelector('div#newApply > form.registerEvent');
  const nextBtnEl = registerForm.querySelector('button#next-btn');
  nextBtnEl.addEventListener('click', handleRegForm);

  const previewListUlEl = document.querySelector('div.container > div.bar > ul#preview-list');

  const emailInput = registerForm.querySelector('input#email');
  const eventInput = registerForm.querySelector('input#event');
  const locationInput = registerForm.querySelector('input#location');

  function handleRegForm(e) {
    e.preventDefault()

    const email = emailInput.value.trim();
    const event = eventInput.value.trim();
    const location = locationInput.value.trim();

    if (!(email && event && location)) return;

    previewListUlEl.innerHTML = '';



    emailInput.value = '';
    eventInput.value = '';
    locationInput.value = '';

    nextBtnEl.disabled = true;

    previewListUlEl.innerHTML = `
      <li class="application">
        <article>
          <h4>${email}</h4>
          <p><strong>Event:</strong><br>${event}</p>
          <p><strong>Location:</strong><br>${location}</p>
        </article>
        <button class="action-btn edit">edit</button>
        <button class="action-btn apply">apply</button>
      </li>
    `

    const editBtn = previewListUlEl.querySelector('button.action-btn.edit')
    const applyBtn = previewListUlEl.querySelector('button.action-btn.apply')

    editBtn.addEventListener('click', () => {
      emailInput.value = email;
      eventInput.value = event;
      locationInput.value = location;

      previewListUlEl.innerHTML = '';

      nextBtnEl.disabled = false;

    })

    applyBtn.addEventListener('click', () => {
      const approvedListUlEl = document.querySelector('ul#event-list')
      approvedListUlEl.innerHTML = `
        <li class="application">
          <article>
            <h4>${email}</h4>
            <p><strong>Event:</strong><br>${event}</p>
            <p><strong>Location:</strong><br>${location}</p>
          </article>
        </li>
      `

      previewListUlEl.innerHTML = ''
      nextBtnEl.disabled = false;
    })
  }
}
