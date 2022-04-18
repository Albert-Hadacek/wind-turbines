import Link from "next/link"
import { Button, Card } from 'semantic-ui-react'

const data = [
  {
    title: "Farm1",
    location: "Scotland",
    created: "21/05/22",
    description: "Lorem ipsum blah blah",
    turbinesCount: 5
  },
  {
    title: "Farm2",
    location: "Scotland",
    created: "21/05/22",
    description: "Lorem ipsum blah blah",
    turbinesCount: 5,
    customId: "dsda"
  },
  {
    title: "Farm3",
    location: "Scotland",
    created: "21/05/22",
    description: "Lorem ipsum blah blah",
    turbinesCount: 5,
    customId: "sdasd"
  }
]

const Farms = () => {

  return (
    <div className={"farms-overview"}>
      <Link href="/dashboard/farms"><a className="header-link">Click here to see more farms</a></Link>
      <Card.Group className="card-group card-group-dashboard">
        {data.map((d) => (
          <Card>
            <Card.Content>
              <Card.Header>{d.title} - {d.customId}</Card.Header>
              <Card.Meta>{d.location}</Card.Meta>
              <Card.Description>
                {d.description}
              </Card.Description>
              <Card.Description>
                <strong>Farm count: </strong>{d.turbinesCount}
              </Card.Description>
              <Card.Description>
                <strong>Created: </strong>{d.created}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='green'>
                  Detail
                </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <div>
        <Link href={"/dashboard/farm/add"}>
          <button className="ui teal button">+ Create</button>
        </Link>

      </div>
    </div>
  )
}

export default Farms