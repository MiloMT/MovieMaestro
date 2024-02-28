import '@testing-library/jest-dom/vitest'
import { React } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from "vitest"
import  Header  from '../components/HomeHeader'
import Home from '../views/Home'
import { Context, FastSearch } from '../components/FastSearch'

//UNIT TESTS FOR HOME HEADER
describe('Home Header component', () => {
    test('renders the header component', () => {
        const { container } = render(<Header />)
        
        // expect(container).toBeInTheDocument()
        expect(container.querySelector('h1')).toHaveTextContent('Stuck Doom Scrolling?')
    })
})

//INTEGRATION TEST FOR HOME HEADER
describe('Home integration with Header component', () => {
test('Header is being rendered within Home.jsx', () => {
    const { container } = render(<Context.><Home /></FastSearch>)

    // expect(container).toBeDefined(<Header />)
    const { header } = container.querySelector("test-header")
    expect(header).toBeInTheDocument()    
})
})