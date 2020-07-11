import Constants from '../constants';
import { 
    Platform
} from 'react-native';
function extractAddressComponent(addresses, data){
    var location_type_option = 'political';
    var types_option = ['formatted_address'];
    var location_result = '';
    addresses.forEach((address_component,i)=>{
        // and new formatted_address from google
        if(data['formatted_address'] == null && address_component['formatted_address']) data['formatted_address'] = address_component['formatted_address'];
        if(typeof data != 'undefined' ) data[address_component.types[0]] = address_component.address_components[0].long_name;
        if (address_component.types[0] == location_type_option) { // political or locality
            location_result = address_component.address_components[0].long_name;
        }
    })
    if(Array.isArray(types_option) && types_option.length){
        var result_parts = types_option.filter((part)=>{return typeof data[part] != 'undefined' && data[part] !=  '' }).map( (part)=>{return data[part]} );
        location_result = result_parts.join(', ');
    }else if(location_result == ''){
        location_result = addresses[0].address_components[0].long_name;
    }
    if( data !== null && typeof data === 'object' ){
        data.result = location_result;
        return data;
    }
    return location_result;

}

function addCurrentCity(geolocation) {
    // //console.log(geolocation)
    return new Promise(function (resolve, reject) {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + geolocation.lat + ',' + geolocation.lng + '&key=' + Constants.GoogleKeys.api)
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson['status'] === 'OK') {
                if (responseJson['results'][0]) {
                    // //console.log(responseJson['results'])
                    geolocation = extractAddressComponent(responseJson['results'], geolocation);
                    resolve(geolocation);
                }
            } else {
                //console.log('Geocoder failed due to: ' + responseJson['status']);
            }

            // //console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
        })
    });
}

function getPreciseLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition( pos => {
            var crd = pos.coords;
            // //console.log('Your current position is:');
            // //console.log(`Latitude : ${crd.latitude}`);
            // //console.log(`Longitude: ${crd.longitude}`);
            // //console.log(`More or less ${crd.accuracy} meters.`);
            resolve({
                lat: crd.latitude,
                lng: crd.longitude
            });
        },err => {
            console.warn(`ERROR (${err.code}): ${err.message}`);
        }
        );
    });
}
export default function getCurrentGeoLocation(callback, pos){
    if( pos != null && pos ){
        var resolve = addCurrentCity(pos)
    }else{
        var resolve = getPreciseLocation().then(addCurrentCity)
    }
    resolve.then((data)=>{
        // Cookies.set('ctb-geolocation', data);
        callback(data)
    })
}


