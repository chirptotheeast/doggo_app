App.js file 
    -fetch to the API (get the list of all breeds )

add component folder
    -pass the breed list as props
    -DogList.js ( contains filter dropdown field)
        -show list of all breeds
        -GET request to the dog api
        -POST request of the Image

    -Dog Gallery.js
        -images


Two states
    -all breeds existin in app as a list
    -selected breeds which has corresponding images 
    
app.js
state = {
    breeds: "fetch from api"
}
<DogDropDown>
<DogGallery>