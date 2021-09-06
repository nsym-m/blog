import styles from "./AboutMe.module.css";
import { config } from "../config";

const social = config.social;

export const AboutMe: React.VFC = () => {
  return (
    <div>
      <div className={styles.avatarDiv}>
        <img className={styles.avatar} src="/images/profile.jpg" alt="avatar" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.aboutme}>
          <div className={styles.biography}>
            <p>にしやま</p>
            <p>
              犬と猫を飼ってるソフトウェアエンジニア<br></br>
              PHPとJSとSwiftとC#(趣味)
            </p>
            <p>勉強したことや実装してみたものなど書いていく予定です。</p>
            <div className={styles.social}>
              <a href={`https://twitter.com/${social.twitter}`} target="_blank" className={styles.linkIcon} rel="noreferrer">
                <span className={styles.linkIconSpan}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.linkIconSVG}>
                    <path fill="currentColor" d="M23.1 8.7v.7c0 8-6.4 14.5-14.4 14.6h-.2C5.7 24 3 23.2.6 21.7c.4 0 .8.1 1.2.1 2.3 0 4.6-.8 6.3-2.1C6 19.6 4 18.2 3.3 16c.3.1.7.1 1 .1.5 0 .9-.1 1.4-.2-2.4-.5-4.1-2.6-4.1-5.1v-.1c.7.4 1.5.6 2.3.7-1.5-1-2.2-2.5-2.2-4.3 0-.9.2-1.8.7-2.6C5 7.8 8.8 9.7 13 9.9c-.1-.4-.1-.8-.1-1.2 0-2.8 2.2-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.7C23 5 24 4.6 25 4.1c-.4 1.2-1.2 2.1-2.2 2.8 1-.1 2-.4 2.9-.8-.8 1-1.7 1.8-2.6 2.6z"></path>
                  </svg>
                </span>
              </a>
              <a href={`https://github.com/${social.github}`} target="_blank" className={styles.linkIcon} rel="noreferrer">
                <span className={styles.linkIconSpan}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.linkIconSVG}>
                    <path fill="currentColor" d="M13.4 1.2C7 1 1.8 6 1.7 12.4v.5c0 5.1 3.2 9.8 8.2 11.5.6.1.7-.2.7-.6v-2.9s-3.3.6-4-1.5c0 0-.6-1.3-1.3-1.8 0 0-1.1-.7.1-.7.7.1 1.5.6 1.8 1.2.6 1.2 2.2 1.7 3.4 1h.1c.1-.6.4-1.2.7-1.6-2.7-.4-5.4-.6-5.4-5.2 0-1.1.5-2.1 1.2-2.8 0-1.1 0-2.2.3-3.2 1-.4 3.3 1.3 3.3 1.3 2-.6 4-.6 6 0 0 0 2.2-1.6 3.2-1.2.5 1 .5 2.2.1 3.2.7.7 1.2 1.8 1.2 2.8 0 4.5-2.8 5-5.5 5.2.6.6.9 1.3.7 2.2v4c0 .5.2.6.7.6 4.9-1.7 8.2-6.2 8-11.5.1-6.4-5.1-11.6-11.6-11.6-.1-.1-.2-.1-.2-.1z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
