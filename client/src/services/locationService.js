import axios from "axios";
import { GeoPoint } from "firebase/firestore";


export class ZipCodeService {
	static async getLocationInfo(latitude, longitude) {
		try {
			const apiKey = import.meta.env.VITE_GOOGLE_LOCATION_API_KEY;
			const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
			const response = await axios.get(url);

			if (response.data.results && response.data.results.length > 0) {
				const addressComponents = response.data.results[0].address_components;
				const zipCodeComponent = addressComponents.find((component) =>
					component.types.includes("postal_code")
				);
				const locality = addressComponents.find((component) =>
					component.types.includes("locality")
				);
				const areaLevel1 = addressComponents.find((component) =>
					component.types.includes("administrative_area_level_1")
				);

				if (zipCodeComponent) {
					const zipCode = zipCodeComponent.long_name;
					const city = locality.long_name;
					const state = areaLevel1.short_name;
					const geoPoint = new GeoPoint(latitude, longitude);

					return { zipCode, city, state, geoPoint };
				} else {
					return { zipCode: null, city: null, state: null, geoPoint: null };
				}
			} else {
				console.log("No results found in the response.");
			}
		} catch (error) {
			console.error("Error fetching location information:", error);
		}
	}

}