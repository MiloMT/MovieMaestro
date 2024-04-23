import { Context } from '../../components/App'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

// creates a render component to use in tests to avoid errors
const customRender = (component, context) => {
  render(
    <MemoryRouter>
      <Context.Provider value={context}>{component}</Context.Provider>
    </MemoryRouter>
  )
}

export default customRender
