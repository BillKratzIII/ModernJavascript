function addBand() {
    var myForm = document.getElementById('myForm');
    var formData = new FormData(myForm);

    var xhr = new XMLHttpRequest();
    var url = '/band'; //API path

    var band = {
        "name": formData.get('name'),
        "city": formData.get('city'),
        "country": formData.get('country'),
        "yearFormed": formData.get('yearFormed'),
        "genres": formData.get('genres').split(',')
    };

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(band));
}
