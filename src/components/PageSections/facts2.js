import React, { useEffect, useState, useRef } from "react";

const countersData = [
  { target: 99, text: "Success in client satisfaction" },
  { target: 15, text: "Years of successful operations" },
  { target: 120, text: "Total clients served globally" },
  { target: 5, text: "Star reviews given by clients" },
];

const CounterSection = () => {
  const [counters, setCounters] = useState(countersData.map(() => 0));
  const sectionRef = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (sectionRef.current) observer.observe(sectionRef.current);

    function animateCounters() {
      countersData.forEach((counter, index) => {
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime) => {
          const progress = currentTime - startTime;
          let value = Math.min(
            counter.target,
            Math.floor((progress / duration) * counter.target)
          );
          if (counter.target === 5) {
            value = Math.min(
              counter.target,
              Math.floor((progress / (duration / 2)) * counter.target)
            );
          }

          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = value;
            return newCounters;
          });

          if (progress < duration || (counter.target === 5 && progress < duration / 2)) {
            requestAnimationFrame(step);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = counter.target;
              return newCounters;
            });
          }
        };

        requestAnimationFrame(step);
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "400px",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('./images/page-title-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",marginTop:"30px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "5rem",
          paddingBottom: "5rem",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "3rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "3rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          <span>Our Track Record: </span>
          <span style={{ color: "#ffa144ff" }}>Achieving Great Results</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {countersData.map((counter, index) => (
            <div
              key={index}
              style={{
                flex: "0 1 220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  color: "#436eb7ff",
                  marginBottom: "10px",
                  textShadow: "0 4px 8px rgba(0,0,0,0.5)",
                }}
              >
                {counters[index]}
              </h1>
              <h5
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  maxWidth: "200px",
                }}
              >
                {counter.text}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
