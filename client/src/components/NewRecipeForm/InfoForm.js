import React from 'react'
import { Input, Button, Text } from '../index'
import { Form } from 'formik'
import * as yup from 'yup'

export const InfoSchema = yup.object().shape({
  title: yup.string().trim().required("Enter a title for your recipe!"),
  description: yup.string().trim().required("Don't forget a short description!"),
  time: yup.number().moreThan(0.0001, "There's no such thing as negative or zero time!").required("Remember to tell others the cooking time!")
})

const InfoForm = ({handleSubmit}) => {
  return (
    <div className="container-fluid" style={{ marginTop: "2.5em" }}>
      <div className="row">
        <div className="col-xs-12 col-md-6 offset-md-3">
          <Text big bold>Create a New Recipe</Text>
          <Form onSubmit={handleSubmit}>
            <Input
              label="Recipe Name"
              name="title"
              type="text"
            />
            <Input
              label="Description"
              name="description"
              type="text"
            />
            <Input
              label="Time (hours)"
              name="time"
              type="number"
              step={0.25}
            />
            <Button type="submit">
              To Ingredients and Steps
              <i className="fas fa-arrow-right" style={{ marginLeft: '5px', marginTop: '1.75px' }}></i>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default InfoForm