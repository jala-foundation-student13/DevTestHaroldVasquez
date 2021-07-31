import Person from './person';
import Location from './location';
import Coordinates from './coordinates';
import Timezone from './timezone';


class results{
    constructor(){
        this.gender = '';
        this.name = new Person();
        this.location = new Location();
        this.email = '';
    }
}
export default results;