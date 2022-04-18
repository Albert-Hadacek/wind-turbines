import {useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {toast} from 'react-toastify'

const FarmForm = ({data}) => {

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    customId: "",
    description: "",
  })

  useEffect(() => {
    if(data) {
      setFormData(data)
    }
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    setLoading(true)
    const {title, location, customId} = formData

    if(!title.length || !location.length || !customId) {
      toast.error("Something went wrong - recheck your password and email")
      setLoading(false)
      return
    }



    setLoading(false)
  }


  console.log(formData)

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input name="title" placeholder='Title' required onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input name="location" placeholder='Location' required onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Identifier</label>
        <input name="customId" placeholder='X-123' required onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <Form.TextArea name="description" label='Description' placeholder='Tell us more about you...' onChange={handleChange}/>
      </Form.Field>
      <Button type='submit' color="teal" loading={loading}>Submit</Button>
    </Form>
  )
}

export default FarmForm