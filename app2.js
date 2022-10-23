import useFetch from 'react-fetch-hook';

function App() {

    var { isLoading, data } = useFetch(config.appScript)
    if (isLoading) {
        return <div className="text-light">Loading...</div>
    } else {
        return <Card inventoryNumber={data} />
    }

}

function Card(props) {

}

function Photo(props) {
    return <img onClick={handler}
        src="data:image/jpeg;base64,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" />

}

function handler() {
    alert("Hello, world.")
}