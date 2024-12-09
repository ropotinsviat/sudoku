import styles from "./privacyPolicyPage.module.scss";
import Footer from "../../components/footer/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <main>
        <div className={styles.privacy}>
          <h1>Privacy Policy</h1>

          <p>
            <em>Last Updated: 8.11.2024</em>
          </p>

          <p>
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, store, and protect your information when you use this
            website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect minimal information to enhance your gaming experience
            without requiring personal information or a formal login. The data
            we collect includes:
          </p>
          <ul>
            <li>
              <strong>Generated User Identifiers:</strong> For each user, we
              generate a unique name and picture to identify you on the Site. We
              do not request personal information or create a formal user
              account.
            </li>
            <li>
              <strong>Game Data:</strong>
              <ul>
                <li>
                  When you create or join a game, we store the game’s creator,
                  time of creation, visibility settings, difficulty level, and
                  gaming board.
                </li>
                <li>
                  For each player who joins a game, we record gameplay data,
                  including the count of mistakes, completion time (if
                  applicable), all submitted answers and notes added during
                  gameplay.
                </li>
              </ul>
            </li>
            <li>
              <strong>In-Game Chat:</strong>
              <ul>
                <li>
                  During gameplay, users may send messages via an in-game chat.
                  We do not store chat messages.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cookies and Token Identifier:</strong>
              <ul>
                <li>
                  We use a cookie to retain your generated name and picture for
                  a more personalized experience and to track your games and
                  progress.
                </li>
              </ul>
            </li>
          </ul>

          <h2>2. How We Use Information</h2>
          <p>The data we collect is used to:</p>
          <ul>
            <li>Create and manage games and gameplay experiences.</li>
            <li>
              Track gameplay progress and game history, including player
              performance and completion.
            </li>
            <li>
              Identify users through generated names and avatars to enable
              multi-player functionality and personalize the Site experience.
            </li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We do not disclose your information to external third parties.</p>
          <p>
            However, within the context of gameplay, other participants in the
            same game will have access to your generated name and picture, as
            well as relevant gameplay information, including the number of
            mistakes made, puzzles solved, and, if applicable, your completion
            time.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain gameplay data and generated identifiers as long as
            necessary to provide the services outlined in this policy or as
            required by law. You may request that we delete your data at any
            time by contacting us through our support channels.
          </p>

          <h2>5. Security of Your Information</h2>
          <p>
            We take reasonable steps to protect the information collected
            through our Site. However, no online service is completely secure,
            and we cannot guarantee the security of your data.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Since our Site does not store personal identifying information, we
            do not support specific account management features. However, you
            may manage cookies on your browser to control or remove your user
            token, which will reset your Site profile (generated name and
            picture).
          </p>

          <h2>7. Changes to Our Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes to our
            practices or for other operational, legal, or regulatory reasons.
            The latest version of this policy will be posted on this page with
            an updated "Last Updated" date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions regarding this website, please contact us
            at{" "}
            <a href="mailto:sviatoslavropotin@gmail.com">
              sviatoslavropotin@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
