import styles from "../styles/Svg.module.css";

export const GitHubSvg: React.VFC = () => {
  return (
    <>
      <span className={styles.linkIconSpan}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 24" className={styles.linkIconSVG}>
          <path fill="currentColor" d="M13.4 1.2C7 1 1.8 6 1.7 12.4v.5c0 5.1 3.2 9.8 8.2 11.5.6.1.7-.2.7-.6v-2.9s-3.3.6-4-1.5c0 0-.6-1.3-1.3-1.8 0 0-1.1-.7.1-.7.7.1 1.5.6 1.8 1.2.6 1.2 2.2 1.7 3.4 1h.1c.1-.6.4-1.2.7-1.6-2.7-.4-5.4-.6-5.4-5.2 0-1.1.5-2.1 1.2-2.8 0-1.1 0-2.2.3-3.2 1-.4 3.3 1.3 3.3 1.3 2-.6 4-.6 6 0 0 0 2.2-1.6 3.2-1.2.5 1 .5 2.2.1 3.2.7.7 1.2 1.8 1.2 2.8 0 4.5-2.8 5-5.5 5.2.6.6.9 1.3.7 2.2v4c0 .5.2.6.7.6 4.9-1.7 8.2-6.2 8-11.5.1-6.4-5.1-11.6-11.6-11.6-.1-.1-.2-.1-.2-.1z"></path>
        </svg>
      </span>
    </>
  )
}