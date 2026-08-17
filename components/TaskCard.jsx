import Card from "../components/layout/Card"
import Button from "../components/layout/Buttons"

function TaskCard() {
  return (
    <Card>

    <h3>{TaskCard.title}</h3>
    <p>{TaskCard.description}</p>

    <Button variant="primary">
      Send
    </Button>



    </Card>
  )
}

export default TaskCard