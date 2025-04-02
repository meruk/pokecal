import './App.css'
import shopdb from './shop.json'
import logo from './assets/pokecal_240x190.png'


function App() {
    const API_KEY = '';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
    const CALENDAR_ID = 'f3ee2e0c6d16b5fb22c675428e22a22d50e7fe133a452c4b05daa31f2ccb29ca@group.calendar.google.com'

    function loadClient() {
        gapi.load('client', () => {
            gapi.client.init({
                apiKey: API_KEY,
            }).then(() => {
                return gapi.client.request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                    params: {
                        timeMin: new Date().toISOString(),
                        maxResults: 100,
                        singleEvents: true,
                        orderBy: 'startTime'
                    }
                });
            }).then(response => {
                const events = response.result.items;
                console.log(response.result)
                const list = document.getElementById('event-list');
                if (!list) {
                    console.error("Element with id 'event-list' not found");
                    return;
                }
                list.innerHTML = '';

                if (events.length === 0) {
                    list.innerHTML = '<li>일정이 없습니다.</li>';
                } else {
                    events.forEach(event => {
                        const li = document.createElement('li');
                        const start = event.start.dateTime || event.start.date;
                        li.textContent = `${start} - ${event.summary}`;
                        list.appendChild(li);
                    });
                }
            }).catch(error => {
                console.error('Error fetching events', error);
            });
        });
    }
    const nmap = new Map(Object.entries(shopdb))
    console.log(nmap)

    loadClient()

  return (
    <>
        <header className="bg-gray-800 text-white text-center py-4">
            <img src={logo} style={{position: 'absolute', top: '10px', left: '10px'}}/>
            <h1 className="text-xl font-semibold">이벤트 목록</h1>
        </header>

        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-md mx-auto mt-6">

            <nav className="flex border-b bg-white rounded-t-md overflow-hidden">
                {/*<button className="tab-button flex-1 py-2 text-center font-medium text-gray-600 border-b-2 border-blue-500" data-tab="today">*/}
                {/*    오늘*/}
                {/*</button>*/}
                {/*<button className="tab-button flex-1 py-2 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-500" data-tab="week">*/}
                {/*    이번 주*/}
                {/*</button>*/}
                {/*<button className="tab-button flex-1 py-2 text-center font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-500" data-tab="month">*/}
                {/*    이번 달*/}
                {/*</button>*/}
            </nav>

            <section className="tab-content mt-4" id="today">
                <div className="bg-white rounded-md p-4 shadow mb-4">
                    <h2 className="text-lg font-semibold">오늘 이벤트 1</h2>
                    <p className="text-gray-600">설명 내용</p>
                </div>
                <div className="bg-white rounded-md p-4 shadow mb-4">
                    <h2 className="text-lg font-semibold">오늘 이벤트 2</h2>
                    <p className="text-gray-600">설명 내용</p>
                </div>
            </section>
            <div id="event-list"></div>

            {/*<section className="tab-content hidden mt-4" id="week">*/}
            {/*    <div className="bg-white rounded-md p-4 shadow mb-4">*/}
            {/*        <h2 className="text-lg font-semibold">이번 주 이벤트 1</h2>*/}
            {/*        <p className="text-gray-600">설명 내용</p>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="tab-content hidden mt-4" id="month">*/}
            {/*    <div className="bg-white rounded-md p-4 shadow mb-4">*/}
            {/*        <h2 className="text-lg font-semibold">이번 달 이벤트 1</h2>*/}
            {/*        <p className="text-gray-600">설명 내용</p>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    </>
  )
}

export default App
