import './App.css'
import shopdb from './shop.json'


function App() {
    function loadClient() {
        fetch('https://pokecal-server.neomeruk.workers.dev', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const nmap = new Map(Object.entries(shopdb))
    console.log(nmap)

    loadClient()

    return (
        <>
            <header className="bg-gray-800 text-white text-center py-4">
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
