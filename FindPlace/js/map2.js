mapboxgl.accessToken = 'pk.eyJ1IjoibWF4YmF4IiwiYSI6ImNrN2Vpd3kxNDBqeW4za253a24wM3kxNXoifQ.-f1UhlKEKGLduZBPM6rhlQ';
let map = new mapboxgl.Map({
    container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [27.55, 53.9], // starting position
            zoom: 12// starting zoom
});
let language = new MapboxLanguage();
map.addControl(language);

map.addControl(new mapboxgl.NavigationControl());
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

//listings and markers

function loadData() {
    $.ajax("/json/data.json",
        { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler }
    );
}
loadData()

function dataLoaded(data) {
    console.log(data);
    let stores = data;

    //Assign a unique id to each bar
    stores.features.forEach(function(store, i){
        store.properties.id = i;
    });

    map.on('load', function (e) {
        
    map.addSource("places", {
        "type": "geojson",
        "data": stores
        });

        buildLocationList(stores);
        addMarkers();
    });

    //Add a marker to the map for every store listing.

    function addMarkers() {
       
        stores.features.forEach(function(marker) {

        let type = marker.properties.type;

        let el = document.createElement('div');
        el.id = "marker-" + marker.properties.id;
        el.className = 'marker' + " " + type;
        
        // Create a marker using the div element and add it to the map.
        
        new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

        // Listen to the element and when it is clicked, do three things
        el.addEventListener('click', function(e){
            // Fly to the point
            flyToStore(marker);
            // Close all other popups and display popup for clicked store
            createPopUp(marker);
            //Highlight listing in sidebar
            let activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
            activeItem[0].classList.remove('active');
            }
            let listing = document.getElementById('listing-' + marker.properties.id);
            listing.classList.add('active');
        });
        });
    }

    //Add a listing for each store to the sidebar.
    
    function buildLocationList(data) {
        data.features.forEach(function(store, i){
        
        let prop = store.properties;
        // Add a new listing section to the sidebar.
        let listings = document.getElementById('listings');
        let listing = listings.appendChild(document.createElement('div'));
        listing.id = 'listing-' + prop.id;
        listing.className = 'item' + ' ' + prop.type;
        
        // Photo container
        let img = listing.appendChild(document.createElement('div'));
        img.id = 'photoContainer-'+ prop.id;
        img.className = 'photoContainer';

        // Information container
        let info = listing.appendChild(document.createElement('div'));
        info.className = 'infoContainer';

        //Add the link to the individual listing created above.
        let link = info.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.title;

        //Add details to the individual listing.
        let details = info.appendChild(document.createElement('div'));
        details.innerHTML = prop.description;
        details.innerHTML += ' · ' + prop.address;
        if (prop.phone) {
            details.innerHTML += ' · ' + prop.phoneFormatted;
        }

        // Add listener on link
        link.addEventListener('click', function(e){
            for (let i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
                let clickedListing = data.features[i];
                flyToStore(clickedListing);
                createPopUp(clickedListing);
            }
            }
            let activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
            activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
        });
    }
    function flyToStore(currentFeature) {
        map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
        });
        }

   // createPopUp
    function createPopUp(currentFeature) {
        let popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        let title = currentFeature.properties.title;
        let type = currentFeature.properties.type;
        let id = currentFeature.properties.id;
        let address = currentFeature.properties.address;
        let popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h5>'+ title +'</h5>' + '<div id="'+type+id+'"></div>' + '<h7>' + address + '</h7>')
        .addTo(map);
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+'УПС!'+errorStr);
}