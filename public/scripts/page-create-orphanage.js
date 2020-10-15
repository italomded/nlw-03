//create map
const map = L.map('mapid').setView([-10.9171615,-37.6791725], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

let marker;


//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lat]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})


//add photo field
function addPhotoField() {
    //get image container
    const container = document.querySelector('#images');

    //get container to clone
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    //clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verify if the field is empty
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return;
    }

    //clear the fieldsContainer
    input.value = "";

    //add clone to image container
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

//changing state of the button yes/not
function toggleSelect(event) {
    //remove active class of the buttons
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active');
    })

    //put active class in the clicked button
    const button = event.currentTarget;
    button.classList.add('active');

    //update hidden input
    const input = document.querySelector('[name="open_on_weekends"]');

    //verify if is yes or not
    input.value = button.dataset.value;
}
