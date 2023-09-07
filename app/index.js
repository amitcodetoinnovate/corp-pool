import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import HomeScreen from "../components/HomeScreen/HomeScreen";

const Home = () => {
    const router = useRouter();
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 6000);
    }, []);

    if (showSplash) {
        return <WelcomeScreen />;
    }
    return <HomeScreen />;
};

export default Home;