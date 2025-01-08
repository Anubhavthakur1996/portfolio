import { Card } from "antd";
const { Meta } = Card;
var work = [
  {
    id: 1,
    children: (
      <Card className="card" title="TAMM" bordered={false} hoverable>
        <Meta
          title="2023 - 2024"
          description={
            <a
              href="https://www.tamm.abudhabi/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit TAMM
            </a>
          }
        />
        <p>
          TAMM is a government platform that hosts over 700 services for
          citizens of Abu Dhabi. It provides a common place for citizens to
          avail all government offered services. Multiple teams work on these
          services, including the Operations team, which I am a part of. The
          Operations team is usually responsible for fixing bugs and upgrades.
          Currently, the team is moving 130 services from older Node 10 and
          React to the latest Node 20 and React 18. The team’s responsibilities
          include removing vulnerable packages and fixing any parts that break
          as a result of the upgrading process.
        </p>
        <Meta
          title="Tech Stack"
          description="Sonar | React JS | Type Script | Jira | Confluence | Bitbucket | Node JS"
        />
      </Card>
    ),
  },
  {
    id: 2,
    children: (
      <Card
        className="card"
        title="VST Project Management"
        bordered={false}
        hoverable
      >
        <Meta
          title="2022 - 2022"
          description={
            <a
              href="https://civilbox.co.za/signIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Civil Box
            </a>
          }
        />
        <p>
          It was an application being developed for a South African Civil
          engineering company. it's purpose was to facilitate inspections and
          some related work. I was hired short term to work on and direct the
          front end development of the project.
        </p>
        <Meta
          title="Tech Stack"
          description="React JS | Rails | My Sql | Action Cable"
        />
      </Card>
    ),
  },
  {
    id: 3,
    children: (
      <Card className="card" title="c2m llama" bordered={false} hoverable>
        <Meta
          title="2020 - 2021"
          description={
            <a
              href="https://llama.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Llama App
            </a>
          }
        />
        <p>
          This project was made mainly for the shopify merchants and the
          influencers. This project had five sub apps which were crucial to make
          the main project working as a whole unit. We were a team of 5 people
          and I was responsible for leading the team as well as working on the
          project.
        </p>
        <Meta
          title="Tech Stack"
          description="Node JS | Type Script | GraphQl | AWS tool set"
        />
      </Card>
    ),
  },
  {
    id: 4,
    children: (
      <Card className="card" title="House Master" bordered={false} hoverable>
        <Meta title="2020-2020" />
        <p>
          It's a management tool to manage house inspections. Which can be used
          by Franchises, Inspectors and users to schedule and manage house
          inspections and some other things. My role in this project is of a
          senior engineer who develops front end, back end and also overseas
          some dev ops related stuff like, managing code on code commit and
          deployment of cod for testing etc. As of Nov, the project has been
          released for testing as an alpha build.
        </p>
        <Meta
          title="Tech Stack"
          description="Vue JS | Type Script | Couch DB | Pouch DB | AWS Lambda"
        />
      </Card>
    ),
  },
  {
    id: 5,
    children: (
      <Card className="card" title="Saturn" bordered={false} hoverable>
        <Meta
          title="2019 - 2019"
          description={
            <a
              href="https://apps.apple.com/us/app/saturn-hs-social-calendar/id1454483188"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Saturn
            </a>
          }
        />
        <p>
          It was a mobile app for students. It was kind of like a calendar to
          manage various school related stuff like classes, assignments etc. But
          it did a lot more then just that. You could follow classes, students
          who are taking the same classes etc as well. It was a really exciting
          project. There were a lot of remote teams working on this projects
          which worked in different time zones, and I was one on them. We were
          tasked with making home and profile sections and creating their
          respective components.
        </p>
        <Meta title="Tech Stack" description="React Native | Type Script" />
      </Card>
    ),
  },
  {
    id: 6,
    children: (
      <Card className="card" title="Beeswax" bordered={false} hoverable>
        <Meta
          title="2019 - 2019"
          description={
            <a
              href="https://www.beeswaxapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Beeswax
            </a>
          }
        />
        <p>
          It was an app made to manage projects as well as the accounts. When
          this app came to us, it was already near completion. It was given to
          us to mainly refactor the react and ruby code and optimize it as well.
          There were some sections of the app which were a coding mess and were
          too slow to load. Me and a ruby developer from our company worked on
          optimizing the react and ruby code respectively. Besides the main
          issue of optimizing the code to reduce loading times, we had to fix
          some known issues and add some new features and functionalities to the
          app. We also discovered some other bugs while working on existing
          things and solved them as well.
        </p>
        <Meta title="Tech Stack" description="React JS | Ruby on Rails" />
      </Card>
    ),
  },
  {
    id: 7,
    children: (
      <Card
        className="card"
        title="Misago Project Forums"
        bordered={false}
        hoverable
      >
        <Meta
          title="2018 - 2018"
          description={
            <a
              href="https://misago-project.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Saturn
            </a>
          }
        />
        <p>
          A complete question answer forums solution. I had to deal with the
          front end part that was being developed in ReactJs and with me worked
          another colleague who worked on the Django backend. We made some
          components of the app and added some features like, ability to add and
          remove tags, reply to messages, etc. We also did some design fixes and
          since it was a responsive app, therefore, we too had to make our stuff
          responsive by using media tags and dimensions in percentile.
        </p>
        <Meta
          title="Tech Stack"
          description="Python Django | React JS | CSS 3 | MySql"
        />
      </Card>
    ),
  },
  {
    id: 8,
    children: (
      <Card className="card" title="Spingig" bordered={false} hoverable>
        <Meta
          title="2018 - 2018"
          description={
            <a
              href="https://spingig.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Spingig
            </a>
          }
        />
        <p>
          A hiring platform for restaurant owners to find employees and vice
          versa. I had to work with resolving some issues, adding some new
          features and improving the performance of some parts of the app.
        </p>
        <Meta
          title="Tech Stack"
          description="Python Flask | Redis Server | Celery | MySql"
        />
      </Card>
    ),
  },
  {
    id: 8,
    children: (
      <Card className="card" title="Want More ?" bordered={false} hoverable>
        <Meta
          title="From Ifinity - Beyond"
          description={
            <a
              href="https://www.linkedin.com/in/anubhavthakur1996/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here For More
            </a>
          }
        />
      </Card>
    ),
  },
];

export default work;
