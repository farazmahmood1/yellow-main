import React, { useEffect, useState, useRef } from 'react';
import './WorkCounter.scss';

const WorkCounter = () => {
    const [counters, setCounters] = useState({
        weddingsFilmed: 0,
        happyCouples: 0,
        destinationsCovered: 0,
    });

    const counterContainerRef = useRef(null);

    useEffect(() => {
        const countersToReach = {
            weddingsFilmed: 300,
            happyCouples: 500,
            destinationsCovered: 50,
            awardWinning: 10,
        };

        const animationDuration = 2000;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const startTime = Date.now();

                    const updateCounters = () => {
                        const currentTime = Date.now();
                        const elapsedTime = currentTime - startTime;

                        if (elapsedTime < animationDuration) {
                            setCounters({
                                weddingsFilmed: Math.ceil(
                                    (countersToReach.weddingsFilmed / animationDuration) * elapsedTime
                                ),
                                happyCouples: Math.ceil(
                                    (countersToReach.happyCouples / animationDuration) * elapsedTime
                                ),
                                destinationsCovered: Math.ceil(
                                    (countersToReach.destinationsCovered / animationDuration) * elapsedTime
                                ),
                                awardWinning: Math.ceil(
                                    (countersToReach.awardWinning / animationDuration) * elapsedTime
                                ),
                            });

                            requestAnimationFrame(updateCounters);
                        } else {
                            setCounters(countersToReach);
                        }
                    };

                    updateCounters();
                    observer.disconnect();
                }
            });
        });

        if (counterContainerRef.current) {
            observer.observe(counterContainerRef.current);
        }

        return () => {
            if (counterContainerRef.current) {
                observer.unobserve(counterContainerRef.current);
            }
        };
    }, []);

    return (
        <div className="counter-container" ref={counterContainerRef}>
            <div className="counter">
                <div className="count">{counters.weddingsFilmed}+</div>
                <div className="label">Weddings Filmed</div>
            </div>

            <div className="counter">
                <div className="count">{counters.happyCouples}+</div>
                <div className="label">Happy Couples</div>
            </div>

            <div className="counter">
                <div className="count">{counters.destinationsCovered}+</div>
                <div className="label">Destinations Covered</div>
            </div>

            <div className="counter">
                <div className="count">{counters.awardWinning}+</div>
                <div className="label">Award Winning Cinematography</div>
            </div>
        </div>
    );
};

export default WorkCounter;
