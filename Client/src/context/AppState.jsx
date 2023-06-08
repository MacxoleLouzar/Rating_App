import React, { useState } from 'react'
import AppContext from './AppContext'

const AppState = ({children}) => {
    const [Learners, setLearners] = useState([])

    const AddLearner = (x)=>{
        setLearners(x)
    }

    const UpdateLearner = (x)=>{
        setLearners(x)
    }


  return (
    <AppContext.Provider value={{Learners, AddLearner, UpdateLearner}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState