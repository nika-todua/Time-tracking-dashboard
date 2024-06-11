import data from '../../data.json' assert { type: 'json' };

const buttons = document.querySelectorAll('.time-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(!button.classList.contains('active')) {
            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            const btnTitle = button.innerText.toLowerCase();
            const cards = document.querySelectorAll('.card');

            cards.forEach((card) => {
                const currentHoursElement = card.querySelector('.current-hours');
                const previousHoursElement = card.querySelector('.previous-hours');

                const cardTitle = card.querySelector('.title').innerText;
                const obj = data.findIndex(obj => obj.title === cardTitle);

                const currentHours = data[obj].timeframes[btnTitle].current;
                const previousHours = data[obj].timeframes[btnTitle].previous;

                currentHoursElement.innerHTML = currentHours;
                previousHoursElement.innerHTML = previousHours;
            })
        }
    });
});