
import { useRef, useState } from "react";
import "./Videos.css";

export default function Videos() {
    // Store references to all video elements
    const videoRefs = useRef({});

    // Store which video is currently playing
    const [playingVideo, setPlayingVideo] = useState(null);

    // Play / Pause video
    const handleVideoPlay = async (videoId) => {
        const video = videoRefs.current[videoId];

        if (!video) {
            console.error("Video element not found:", videoId);
            return;
        }

        try {
            // Pause all other videos
            Object.keys(videoRefs.current).forEach((id) => {
                if (Number(id) !== videoId) {
                    const otherVideo = videoRefs.current[id];

                    if (otherVideo) {
                        otherVideo.pause();
                        otherVideo.currentTime = 0;
                    }
                }
            });

            // If this video is already playing, pause it
            if (playingVideo === videoId) {
                video.pause();
                setPlayingVideo(null);
            } else {
                // Play selected video
                await video.play();
                setPlayingVideo(videoId);
            }
        } catch (error) {
            console.error("Video playback error:", error);
        }
    };

    // When video is played using native controls
    const handleNativePlay = (videoId) => {
        setPlayingVideo(videoId);
    };

    // When video is paused
    const handleNativePause = (videoId) => {
        if (playingVideo === videoId) {
            setPlayingVideo(null);
        }
    };

    // When video finishes
    const handleVideoEnded = (videoId) => {
        if (playingVideo === videoId) {
            setPlayingVideo(null);
        }
    };

    return (
        <section
            id="videos"
            className="section video-section"
        >
            <div className="container">

                {/* Section Heading */}
                <div className="section-heading">

                    <div>
                        <p className="section-label">
                            FEEL THE EXPERIENCE
                        </p>

                        <h2>
                            Watch Me <span>Live</span>
                        </h2>
                    </div>

                </div>

                {/* Video Marquee */}
                <div
                    className="video-marquee"
                    aria-label="DJ performance videos"
                >
                    <div className="video-track">

                        <div className="video-group">

                            {/* VIDEO 1 */}
                            <article className="video-card">

                                <div className="video-thumbnail">

                                    <video
                                        ref={(element) => {
                                            videoRefs.current[1] = element;
                                        }}
                                        className="video-player"
                                        controls
                                        preload="metadata"
                                        poster="/images/video-1.jpg"
                                        playsInline
                                        onPlay={() =>
                                            handleNativePlay(1)
                                        }
                                        onPause={() =>
                                            handleNativePause(1)
                                        }
                                        onEnded={() =>
                                            handleVideoEnded(1)
                                        }
                                    >
                                        <source
                                            src="/videos/chennai-night-festival.mp4"
                                            type="video/mp4"
                                        />

                                        Your browser does not support
                                        this video.
                                    </video>

                                    <button
                                        type="button"
                                        className={`video-play ${
                                            playingVideo === 1
                                                ? "playing"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleVideoPlay(1)
                                        }
                                        aria-label={
                                            playingVideo === 1
                                                ? "Pause Chennai Night Festival video"
                                                : "Play Chennai Night Festival video"
                                        }
                                    >
                                        <i
                                            className={
                                                playingVideo === 1
                                                    ? "fa-solid fa-pause"
                                                    : "fa-solid fa-play"
                                            }
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="video-duration">
                                        03:42
                                    </span>

                                </div>

                                <div className="video-content">

                                    <span className="video-category">
                                        LIVE PERFORMANCE
                                    </span>

                                    <h3>
                                        Chennai Night Festival
                                    </h3>

                                </div>

                            </article>


                            {/* VIDEO 2 */}
                            <article className="video-card">

                                <div className="video-thumbnail">

                                    <video
                                        ref={(element) => {
                                            videoRefs.current[2] = element;
                                        }}
                                        className="video-player"
                                        controls
                                        preload="metadata"
                                        poster="/images/video-2.jpg"
                                        playsInline
                                        onPlay={() =>
                                            handleNativePlay(2)
                                        }
                                        onPause={() =>
                                            handleNativePause(2)
                                        }
                                        onEnded={() =>
                                            handleVideoEnded(2)
                                        }
                                    >
                                        <source
                                            src="/videos/Electronic-Music-Night.mp4"
                                            type="video/mp4"
                                        />

                                        Your browser does not support
                                        this video.
                                    </video>

                                    <button
                                        type="button"
                                        className={`video-play ${
                                            playingVideo === 2
                                                ? "playing"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleVideoPlay(2)
                                        }
                                        aria-label={
                                            playingVideo === 2
                                                ? "Pause Electronic Music Night video"
                                                : "Play Electronic Music Night video"
                                        }
                                    >
                                        <i
                                            className={
                                                playingVideo === 2
                                                    ? "fa-solid fa-pause"
                                                    : "fa-solid fa-play"
                                            }
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="video-duration">
                                        05:18
                                    </span>

                                </div>

                                <div className="video-content">

                                    <span className="video-category">
                                        FESTIVAL
                                    </span>

                                    <h3>
                                        Electronic Music Night
                                    </h3>

                                </div>

                            </article>


                            {/* VIDEO 3 */}
                            <article className="video-card">

                                <div className="video-thumbnail">

                                    <video
                                        ref={(element) => {
                                            videoRefs.current[3] = element;
                                        }}
                                        className="video-player"
                                        controls
                                        preload="metadata"
                                        poster="/images/video-3.jpg"
                                        playsInline
                                        onPlay={() =>
                                            handleNativePlay(3)
                                        }
                                        onPause={() =>
                                            handleNativePause(3)
                                        }
                                        onEnded={() =>
                                            handleVideoEnded(3)
                                        }
                                    >
                                        <source
                                            src="/videos/Neon-Nights.mp4"
                                            type="video/mp4"
                                        />

                                        Your browser does not support
                                        this video.
                                    </video>

                                    <button
                                        type="button"
                                        className={`video-play ${
                                            playingVideo === 3
                                                ? "playing"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleVideoPlay(3)
                                        }
                                        aria-label={
                                            playingVideo === 3
                                                ? "Pause Neon Nights video"
                                                : "Play Neon Nights video"
                                        }
                                    >
                                        <i
                                            className={
                                                playingVideo === 3
                                                    ? "fa-solid fa-pause"
                                                    : "fa-solid fa-play"
                                            }
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="video-duration">
                                        04:25
                                    </span>

                                </div>

                                <div className="video-content">

                                    <span className="video-category">
                                        DJ PERFORMANCE
                                    </span>

                                    <h3>
                                        Neon Nights
                                    </h3>

                                </div>

                            </article>


                            {/* VIDEO 4 */}
                            <article className="video-card">

                                <div className="video-thumbnail">

                                    <video
                                        ref={(element) => {
                                            videoRefs.current[4] = element;
                                        }}
                                        className="video-player"
                                        controls
                                        preload="metadata"
                                        poster="/images/video-4.jpg"
                                        playsInline
                                        onPlay={() =>
                                            handleNativePlay(4)
                                        }
                                        onPause={() =>
                                            handleNativePause(4)
                                        }
                                        onEnded={() =>
                                            handleVideoEnded(4)
                                        }
                                    >
                                        <source
                                            src="/videos/Festival-Fire.mp4"
                                            type="video/mp4"
                                        />

                                        Your browser does not support
                                        this video.
                                    </video>

                                    <button
                                        type="button"
                                        className={`video-play ${
                                            playingVideo === 4
                                                ? "playing"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleVideoPlay(4)
                                        }
                                        aria-label={
                                            playingVideo === 4
                                                ? "Pause Festival Fire video"
                                                : "Play Festival Fire video"
                                        }
                                    >
                                        <i
                                            className={
                                                playingVideo === 4
                                                    ? "fa-solid fa-pause"
                                                    : "fa-solid fa-play"
                                            }
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="video-duration">
                                        06:10
                                    </span>

                                </div>

                                <div className="video-content">

                                    <span className="video-category">
                                        LIVE EVENT
                                    </span>

                                    <h3>
                                        Festival Fire
                                    </h3>

                                </div>

                            </article>

                        </div>
                    </div>
                </div>

                {/* Explore More */}
                <div className="video-action">

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >
                        Explore More

                        <i
                            className="fa-solid fa-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

            </div>
        </section>
    );
}
