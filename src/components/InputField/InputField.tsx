import { InputFieldProps } from "./InputField.interface"

function InputField(props: InputFieldProps) {
    return (<div>
        <input
            value={props.searchString}
            onChange={event => props.setSearchString(event.target.value)}
            placeholder="File search"
        />
    </div>)
}

export default InputField