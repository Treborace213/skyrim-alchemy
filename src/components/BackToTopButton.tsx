import ArrowUpIcon from "@heroicons/react/16/solid/ArrowUpIcon";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-100
                px-3 py-2 bg-menu rounded transition-opacity duration-300
                ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                flex items-center gap-1.5`}
        >
            <ArrowUpIcon className="w-4 h-4" /> Top
        </button>
    );
};

export default BackToTopButton;
