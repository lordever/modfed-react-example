import React from "react";
import "./Input.css";

const Input = ({ value, onChange }) => (
    <div class="form__group">
        <input
            type="input"
            class="form__input"
            placeholder="placeholder"
            value={value}
            onChange={onChange} />
    </div>
)

export default Input;