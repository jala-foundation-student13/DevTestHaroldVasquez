
import street from './street'
import coordinates from './coordinates'
import timezone from './timezone'
class location{
    constructor(){
        this.street = new street();
        this.city = "";
        this.state = "";
        this.country = "";
        this.postcode = "";
        this.coordinates = new coordinates();
        this.timezone = new timezone();
    }
}
export default location;