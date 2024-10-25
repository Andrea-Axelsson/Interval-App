import React from 'react'
import { ReactNode } from 'react'

interface ButtonProps {
    variant: 'light' | 'dark';
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {

    const baseStyle = "button"
    const variants = {
        light: "light-button",
        dark: "dark-button"
    }
    
    const variantClasses = variants[variant]

  return (
    <button className={`${baseStyle} ${variantClasses}`}>{children}</button>
  )
}

export default Button