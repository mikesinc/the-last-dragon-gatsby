import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Story.css"

class Story extends React.Component {
  render() {
    return (
      <Container fluid className="storyPage">
        <h1>The world of Australis..</h1>
        <Container fluid className="para1">
          <div className="para1Text">
            <p>
              The legends tell us that the land of Australis was formed from the
              bones of dragons and melded together by dragon fire over thousands
              of years from Bahamut himself. In truth, the dragons that had once
              roamed the world in abundance, grew tiresome of their loneliness
              and raised the first elves and dwarves to serve them, as they
              ruled the skies above. Then came the great migration from the
              East, when Man on his ships sailed and landed at the Botanical
              Bay. This marked the beginning of one of the darkest times in
              history: The Dragon Wars.{" "}
            </p>
            <p>
              Elves, Dwarves and the newly-landed Men fought for their freedom.
              The count of dead was so high that they formed mountains and
              valleys, and nothing was left unblemished. In the end, the warring
              races agreed on peace. Men, the dominant faction after the war,
              established an empire that spanned Australis. Most Dragons left to
              the South. Those dragons were eventually hunted, died of strange
              pox, or fled into the corners of Thera where they were no longer
              heard of again. The dragons that remained in Australis however,
              were revered by all the races, especially Men. The dragons were
              treated as gods and as a result, the land would flourish in the
              years to come. Enemies dared not to attack, while traders and
              tourists flocked to Australis.
            </p>
            <p>Slowly, the Men formed nations… </p>
            <li>
              In the West of Australis, the Jarls ruled from their forts in
              Pertha (now known as O’Pertha, after capital was changed to New
              Pertha) and Windthorp Fort.{" "}
            </li>
            <li>In the North, the Kingdom of Allesia prospered on trade.</li>
            <li>
              Between these two great states, the Emirates of the Desert banded
              together to face the wilds of the plains
            </li>
            <li>
              In the East, the Duchies formed, with the Duchy of the Queen’s
              Lands in the North, the Duchy of South Australis in the South.
            </li>
            <li>
              The shining capital of Men, the Fortress-City of Acabern was the
              heart of the Archduchy.{" "}
            </li>
          </div>
          <img
            alt="mankind"
            className="mankind"
            src={require("../assets/images/mankind.jpg")}
          ></img>
        </Container>
        <Container fluid className="para2">
          <div className="doubleImg">
            <img
              alt="warrior"
              className="warrior"
              src={require("../assets/images/warrior.jpg")}
            ></img>
            <img
              alt="badlands"
              className="badlands"
              src={require("../assets/images/badlands2.jpg")}
            ></img>
          </div>
          <div className="para2Text">
            <p>
              Out of respect for the dragons, the ruler of all of Australis was
              titled the Dragon Emperor. This emperor was chosen amongst all the
              nations of Australis by the dragons themselves, and the land knew
              peace and prosperity as a result. Often, one of the dragons would
              personally come to the assistance of the dragon emperor. This bond
              would prove paramount to the power and influence of that emperor.
              As such, the Dragon Emperor would rule alongside his dragon
              companion, and this would be the case for many ages.{" "}
            </p>
            <p>
              The Empire of Men stood for a thousand years, but the Elves and
              Dwarves declined, remaining tolerated in lands ruled fairly by the
              Empire. However, the hearts of men were corrupted by greed, and
              slowly cut power for themselves. Elves were for the most part,
              were sectioned off into the forests of Australis, while others
              remained in the city as mostly slaves. The Banksia World Tree,
              which had been sown by the dragons during the time of the first
              Elves, was made their new home. Other Elves remained in their
              original city known as the Kingdom of Adadale, which was located
              in the southern parts of Australis, remaining largely independent.
              The Dwarves were instead driven underground, most of them residing
              in the Urulu mountains. Although the dwarves had once been similar
              in stature to the Elves and Men, years of remaining underground
              with little sunlight and sustenance, eventually led to their
              stunts in physical height and their transformation into the
              Dwarves we know today.{" "}
            </p>
            <p>
              This would not last forever. The dragons would become all but
              extinct, the very cause of this still unknown to this day. Some
              scholars cite a plague, others cite punishment from the gods for
              allowing themselves to become too attached to the mortal races.
              Regardless of the reason, the once powerful continent of Australis
              would quickly lose its influence and dominance over the rest of
              Thera. Eventually it was decided that in the absence of dragons,
              each Dragon Emperor would be elected between the rulers of each of
              the Nations of Men. They would, amongst themselves, vote on the
              new ruler in a landsmeet. The debates would rage for days, before
              a new ruler was chosen. Deceit and murder became common practices;
              cutthroat politics. The new Emperor would ascend Dragon Throne and
              lead the Empire into the challenges of the day.
            </p>
            <p>
              And so it came to pass that more and more power was sapped. When
              the last war with Gymnasia ended an age ago, Emperor Gough II,
              having depleted the Imperial Coffers in what was barely a victory,
              had no choice but to relinquish the last of his power over the
              Petty Kings of each Nation. In the two-hundred years that
              followed, the title Dragon Emperor was changed to Emperor and
              became purely a nod to tradition. The Archduke of Arcabern would
              be crowned Emperor on the death of his father. In return, he
              guaranteed the independence of the other Nations, who all paid a
              notional sum so that there could be an Imperial Army in case the
              Gymnasians or Yeuropans invaded. Whether this army could actually
              fight such a war is doubtful, but appearances do count.{" "}
            </p>
            <h2>Tragedy after tragedy devastated Australis. </h2>
            <p>
              A hundred years ago, an unknown cataclysmic event led to the
              disappearance of the Elven Kingdom of Adadale, becoming what is
              now known as the Badlands. The entire kingdom seemed to have
              vanished overnight, and the very limited amount of expeditions
              that were undertaken, found little remains of the once mighty
              nation. These days, only dwarves dare venture close to the
              Badlands, and even they are limited to travelling the underground
              recesses as other surface expedition attempts have met with an
              untimely end… no one has ever reported back.{" "}
            </p>
            <p>
              The Trader Outposts, once scattered around Australis’ coast,
              became fewer in number. The Dwarves and Elves grew more distant in
              their contact, cutting ties with what they viewed as the failing
              world of Man.{" "}
            </p>
            <p>
              Five years ago, on the brink of negotiating a new treaty with the
              Dukes of the East to re-establish the Empire of Old, Emperor Kevin
              XIV died without an heir. Rumours suggested that he was murdered
              in the night by one of the dominant factions in the Empire, the
              Labourers. Pre-empting a succession crisis, powerful political
              figures formed a Regency Council, assuming Imperial power until a
              new Emperor of Australis could be chosen. This would take some
              time, they declared.
            </p>
          </div>
        </Container>
        <Container className="para1">
          <div className="para1Text">
            <p>
              Five years later, the Regents still hold power in place of an
              Emperor. Frustrated, and in need of a leader in dark times,
              rumblings in the courts of the Nations have started calling for a
              Landsmeet, like the ones of old, at which the Nations would choose
              a new Emperor to ascend the Dragon Throne.{" "}
            </p>
            <p>
              Meanwhile, the Labourers and the Liberators continue to vie for
              power in Arcabern, a conflict which has spilled over across
              Australis. Molcam Teranbli, Leader of the Liberators has secured
              his position as head of the Council of Regents. Some say he plots
              to install himself as the new Archduke of Acabern, and be crowned
              the Emperor of Australis.{" "}
            </p>
            <p>
              However, all of this seems trivial in the face of some other…
              darker rumours. It seems that something is amiss in the land of
              Australis, and that is to put it lightly.
            </p>
            <h4>
              - extract from dossier prepared for the new Envoy of Europa to
              Acabern by the Europan Government
            </h4>
          </div>
          <img
            alt="ship"
            className="ship"
            src={require("../assets/images/landscape.jpg")}
          ></img>
        </Container>
      </Container>
    )
  }
}

export default Story
