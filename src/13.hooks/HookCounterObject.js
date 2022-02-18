import React, {useState} from 'react'

function HookCounterObject() {
    const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <div className="container">
        <form>
            <label htmlFor="">Firstname</label>
            <input type="text" className="form-control w-50"
                    value={name.firstName}
                    onChange={(event) => setName({...name, firstName:event.target.value })}
            />
            <br />
            <label htmlFor="">Firstname</label>
            <input type="text" className="form-control w-50"
                   vale= {name.lastName}
                   onChange={(event) => setName({...name, lastName:event.target.value })}
            />
            <br />
            <h2>Your FirstName is : {name.firstName}</h2>
            <h2>Your LastName is : {name.lastName}</h2>
        </form>
    </div>
  )
}

export default HookCounterObject