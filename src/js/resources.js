import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish4.jpg'),
    Fish2: new ImageSource('images/fish3.jpg'),
    Jeroen: new ImageSource('images/jeroen.jfif')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }