const timetableContainer = document.getElementById('timetable-container');

const sou_mah_timetable = [
    // Define your timetable for Sousse to Mahdia here
    {
        voyage: 1,
        stops: [
            { time: '05:10 AM', stop: 'Sousse Bab Jdid',  class: 'highlight'  },
            { time: '05:12 AM', stop: 'Sousse Med.V' },
            { time: '05:16 AM', stop: 'Sousse Sud' },
            { time: '05:20 AM', stop: 'Sahline Ville' },
            { time: '05:25 AM', stop: 'Sahline Sabkha' },
            { time: '05:30 AM', stop: 'Les Hotels' },
            { time: '05:35 AM', stop: 'Aeroport' },
            { time: '05:40 AM', stop: 'La Facuté'},
            { time: '05:45 AM', stop: 'Monastir',  class: 'highlight'  },
            { time: '05:50 AM', stop: 'Sousse Cathedral' },
            { time: '05:55 AM', stop: 'Moujaheddin' },
            { time: '06:00 AM', stop: 'Sousse West' },
            { time: '06:05 AM', stop: 'Sousse Zawiya' },
            { time: '06:10 AM', stop: 'Sousse Centre' },
            { time: '06:15 AM', stop: 'Sousse School' },
            { time: '06:20 AM', stop: 'Sousse Market' },
            { time: '06:25 AM', stop: 'Sahline East' },
            { time: '06:30 AM', stop: 'Sahline El Menzah' },
            { time: '06:35 AM', stop: 'Sahline Garden' },
            { time: '06:40 AM', stop: 'Sahline Square' },
            { time: '06:45 AM', stop: 'Sahline Chawki' },
            { time: '06:50 AM', stop: 'Sahline University' },
            { time: '06:55 AM', stop: 'Sahline Village' },
            { time: '07:00 AM', stop: 'Sahline Bridge' },
            { time: '07:05 AM', stop: 'Sahline Hôpital' },
            { time: '07:10 AM', stop: 'Sahline Central' },
            { time: '07:15 AM', stop: 'Sahline Park' },
            { time: '07:20 AM', stop: 'Mahdia', class: 'highlight' }
        ]
    },
    {
        voyage: 2,
        stops: [
            { time: '05:10 AM', stop: 'Sousse Bab Jdid',  class: 'highlight'  },
            { time: '05:12 AM', stop: 'Sousse Med.V' },
            { time: '05:16 AM', stop: 'Sousse Sud' },
            { time: '05:20 AM', stop: 'Sahline Ville' },
            { time: '05:25 AM', stop: 'Sahline Sabkha' },
            { time: '05:30 AM', stop: 'Les Hotels' },
            { time: '05:35 AM', stop: 'Aeroport' },
            { time: '05:40 AM', stop: 'La Facuté'},
            { time: '05:45 AM', stop: 'Monastir',  class: 'highlight'  },
            { time: '05:50 AM', stop: 'Sousse Cathedral' },
            { time: '05:55 AM', stop: 'Moujaheddin' },
            { time: '06:00 AM', stop: 'Sousse West' },
            { time: '06:05 AM', stop: 'Sousse Zawiya' },
            { time: '06:10 AM', stop: 'Sousse Centre' },
            { time: '06:15 AM', stop: 'Sousse School' },
            { time: '06:20 AM', stop: 'Sousse Market' },
            { time: '06:25 AM', stop: 'Sahline East' },
            { time: '06:30 AM', stop: 'Sahline El Menzah' },
            { time: '06:35 AM', stop: 'Sahline Garden' },
            { time: '06:40 AM', stop: 'Sahline Square' },
            { time: '06:45 AM', stop: 'Sahline Chawki' },
            { time: '06:50 AM', stop: 'Sahline University' },
            { time: '06:55 AM', stop: 'Sahline Village' },
            { time: '07:00 AM', stop: 'Sahline Bridge' },
            { time: '07:05 AM', stop: 'Sahline Hôpital' },
            { time: '07:10 AM', stop: 'Sahline Central' },
            { time: '07:15 AM', stop: 'Sahline Park' },
            { time: '07:20 AM', stop: 'Mahdia', class: 'highlight' }
        ]
    }
];

const mah_sou_timetable = [
    // Define your timetable for Mahdia to Sousse here
    {
        voyage: 1,
        stops: [
            { time: '05:10 AM', stop: 'Mahdia' },
            { time: '05:15 AM', stop: 'Sahline Park' },
            { time: '05:20 AM', stop: 'Sahline Central' },
            { time: '05:25 AM', stop: 'Sahline Hôpital' },
            { time: '05:30 AM', stop: 'Sahline Bridge' },
            { time: '05:35 AM', stop: 'Sahline Village' },
            { time: '05:40 AM', stop: 'Sahline University' },
            { time: '05:45 AM', stop: 'Sahline Chawki' },
            { time: '05:50 AM', stop: 'Sahline Square' },
            { time: '05:55 AM', stop: 'Sahline Garden' },
            { time: '06:00 AM', stop: 'Sahline El Menzah' },
            { time: '06:05 AM', stop: 'Sahline East' },
            { time: '06:10 AM', stop: 'Sousse Market' },
            { time: '06:15 AM', stop: 'Sousse School' },
            { time: '06:20 AM', stop: 'Sousse Centre' },
            { time: '06:25 AM', stop: 'Sousse Zawiya' },
            { time: '06:30 AM', stop: 'Sousse West' },
            { time: '06:35 AM', stop: 'Moujaheddin' },
            { time: '06:40 AM', stop: 'Sousse Cathedral' },
            { time: '06:45 AM', stop: 'Monastir' },
            { time: '06:50 AM', stop: 'Aeroport' },
            { time: '06:55 AM', stop: 'Les Hotels' },
            { time: '07:00 AM', stop: 'Sahline Sabkha' },
            { time: '07:05 AM', stop: 'Sahline Ville' },
            { time: '07:10 AM', stop: 'Sousse Sud' },
            { time: '07:15 AM', stop: 'Sousse Med.V' },
            { time: '07:20 AM', stop: 'Sousse Bab Jdid' },
        ]
    }
];

function loadTimetable() {
    const currentPage = window.location.pathname.split("/").pop();

    let timetable;
    if (currentPage === 'sousse-to-mahdia.html') {
        timetable = sou_mah_timetable;
    } else if (currentPage === 'mahdia-to-sousse.html') {
        timetable = mah_sou_timetable;
    }

    if (timetable) {
        timetable.forEach(voyage => {
            const voyageDiv = document.createElement('div');
            voyageDiv.classList.add('voyage');

            const voyageHeader = document.createElement('div');
            voyageHeader.classList.add('voyage-header');
            voyageHeader.textContent = `Voyage ${voyage.voyage}:`;
            voyageDiv.appendChild(voyageHeader);

            const stopsDiv = document.createElement('div');
            stopsDiv.classList.add('stops');

            voyage.stops.forEach(stop => {
                const stopSpan = document.createElement('span');
                stopSpan.classList.add('stop');

                // Add highlight class if present
                if (stop.class) {
                    stopSpan.classList.add(stop.class);
                }

                stopSpan.textContent = `- ${stop.stop} (${stop.time})`;
                stopsDiv.appendChild(stopSpan);
            });

            voyageDiv.appendChild(stopsDiv);
            timetableContainer.appendChild(voyageDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadTimetable);
