import React from 'react'

const MoneyForm = (props) => {
    return <form onSubmit={(event) => props.addMoney(event)}>
                <label>
                    Add Amount:
                <input type="integer" name="funds" />
                </label>
                <input type="submit" value="Submit" />
            </form>
}
export default MoneyForm