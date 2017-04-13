export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found....creating...');

            var markers = [
                {
                    name: 'Object 1',
                    lat: 50.4546600,
                    lng: 30.5238000,
                    draggable: true
                },
                {
                    name: 'Object 2',
                    lat: 48.4500000,
                    lng: 34.9833300,
                    draggable: true
                },
                {
                    name: 'Object 3',
                    lat: 49.9808100,
                    lng: 36.2527200,
                    draggable: true
                }
            ]

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading markers...');
        }
    }
}