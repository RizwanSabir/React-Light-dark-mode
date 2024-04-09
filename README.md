# Light/Dark Mode Toggle

## Overview

This lightweight JavaScript plugin provides a smooth toggle functionality for switching between light and dark modes on your website. With a simple integration, users can easily switch between these two modes, providing a more comfortable browsing experience.

## Usage

```
 const [dark,setDark]=useState('Dark')

  function toggleMode(){
    document.documentElement.classList.toggle('dark')
    let mode= dark==='Dark'?'Light':'Dark'
    setDark(() =>  mode)
  }

  <button  onClick={toggleMode} className="mt-10 border-2 w-32 py-3 px-5 ">{dark} Mode</button>
```
![Capture](https://github.com/RizwanSabir/react-light-dark-mode/assets/125357675/d062224a-0fc8-4e28-b424-f440181a57e9)
![Capture](https://github.com/RizwanSabir/react-light-dark-mode/assets/125357675/e25da6e9-2f58-4aa8-95db-ef326aba6b21)








