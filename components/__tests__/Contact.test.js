import Contact from "../Contact";
import { render, screen } from '@testing-library/react';
import React from "react";
import "@testing-library/jest-dom"

describe('Contact Component',() =>{
    it("Should have header in this",()=>{
        render(<Contact/>)
    
        const header = screen.getByRole('heading');
        
        expect(header).toBeInTheDocument();

    })
    it("Should have header in this",()=>{
        render(<Contact/>)
    
        const name = screen.getByRole('paragraph');
        
        expect(name).toBeInTheDocument();

    })
    it("Should have header in this",()=>{
        render(<Contact/>)
    
        const name = screen.getByPlaceholderText('name');
        
        expect(name).toBeInTheDocument();

    })
})
