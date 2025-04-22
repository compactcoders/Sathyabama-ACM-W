import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import MegaEventsPage from "./components/MegaEventsPage";
import EventDetails from "./components/EventDetailPage";
import MegaEventDetails from "./components/MegaEventDetails";
import MembershipACM from "./components/MembershipACM";
import Testimonials from "./components/Testimonials";
import ShareYourThoughts from "./components/ShareYourThoughts";
import CoreTeam from "./components/Coreteam";
import Blogs from "./components/Blogs";
import Pillars from "./components/Pillars"
import Initiatives from "./components/Initiatives";
const App = () => {
    const [backendData, setBackendData] = useState(null);

    // Set background on page load
    useEffect(() => {
        document.body.style.background = "rgb(27, 28, 30)";
        document.body.style.backgroundAttachment = "fixed"; 
    }, []);

    // Fetch data from backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/data")
            .then(response => {
                if (response.status === 204) {
                    setBackendData(null);
                } else {
                    setBackendData(response.data.message || "");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        // Set basename to '/ACM-W/' to reflect the app's public URL subdirectory
        <Router basename="/ACM-W/">
            <Navbar />
            <div>
                {backendData && <h2>Backend Response: {backendData}</h2>}
            </div>
            <Routes>
                {/* Home Page is the Default Page */}
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/pillars" element={<Pillars />} />
                <Route path="/mega-events" element={<MegaEventsPage />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/mega-event/:id" element={<MegaEventDetails />} />
                <Route path="/membership" element={<MembershipACM />} />
                <Route path="/initiatives" element={<Initiatives />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/share-your-thoughts" element={<ShareYourThoughts />} />
                <Route path="/core-team" element={<CoreTeam />} />
                <Route path="/blogs" element={<Blogs />} />

                {/* Redirect unknown routes to HomePage */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
