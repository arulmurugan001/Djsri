import "./InstagramReels.css";
import { useEffect } from "react";
export default function InstagramReels() {
    useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  return (
    <section className="instagram-reels-section">

            <div className="reels-header">
                <div>
                    <span className="reels-subtitle">FOLLOW US</span>
                    <h2>Latest Instagram <span>Reels</span></h2>

                    <p>Discover our latest updates, projects and moments.</p>
                </div>

                <a href="https://www.instagram.com/dj_sriii/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="instagram-follow-btn">
                    <span>◎</span> Follow on Instagram
                </a>
            </div>


            <div className="reels-wrapper">

                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DRzBkzHjGQ3/"
                        data-instgrm-version="14">
                    </blockquote>
                </div>


                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/Db9tT_4RYuf/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="
                        data-instgrm-version="14">
                    </blockquote>
                </div>


                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DcJIUdVP7A0/"
                        data-instgrm-version="14">
                    </blockquote>
                </div>


                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DAlqJ-yhgKn/"
                        data-instgrm-version="14">
                    </blockquote>
                </div>


                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/DV_NjwYku_t/"
                        data-instgrm-version="14">
                    </blockquote>
                </div>


                
                <div className="reel-card">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/reel/C5D58qyhe4r/"
                        data-instgrm-version="14">
                    </blockquote>
                </div>

            </div>

        </section>
  );
}
