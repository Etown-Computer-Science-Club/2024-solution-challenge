import { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Post from "./components/Post";
import YourComponent from "./components/Authentication";
import { FirebaseProvider } from "./contexts/FirebaseContext";

function App() {
    useEffect(() => {
        // Define successCallback and errorCallback functions
        function successCallback(position) {
            const { latitude, longitude } = position.coords;
            getLocationInfo(latitude, longitude);
        }

        function errorCallback(error) {
            console.error("Error getting current location:", error.message);
        }

        // Trigger geolocation request when the component mounts
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []); // Empty dependency array ensures that the effect runs only once, on component mount

    async function getLocationInfo(latitude, longitude) {
        try {
			const apiKey = process.env.GOOGLE_MAPS_PLATFORM_API;
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
            if (response.data.results && response.data.results.length > 0) {
                const addressComponents = response.data.results[0].address_components;
                const zipCodeComponent = addressComponents.find(component => component.types.includes('postal_code'));

                if (zipCodeComponent) {
                    const zipCode = zipCodeComponent.long_name;
                    console.log("Zip code:", zipCode);
                } else {
                    console.warn("Zip code not found in the response.");
                }
            } else {
                console.warn("No results found in the response.");
            }
        } catch (error) {
            console.error('Error fetching location information:', error);
        }
    }

    return (
        <FirebaseProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/login" element={<YourComponent />} />
            </Routes>
        </FirebaseProvider>
    );
}

export default App;
