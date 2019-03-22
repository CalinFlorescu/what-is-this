/**
 * Save to state the new input value
 * - skip all non alphabeticaly characters
 * - convert to upper case
 * @param {*} event 
 */
export function handleChange (event) {
    this.setState({
        value: event.target.value.replace(/[^a-zA-Z]/gi, '').toUpperCase()
    });
}