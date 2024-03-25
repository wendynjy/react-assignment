import { useState } from "react"

export default function ProductForm(props) {
    const [formState, setFormState] = useState({
        'name': props.initialValue?.name ?? '',
        'description': props.initialValue?.description ?? '',
        'cost': props.initialValue?.cost ?? 1
    });

    const [errors, setErrors] = useState ({
        'name':'',
        'description':'',
        'cost':''
    })
    
    const handleFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (event) => {
        const newErrors = {
            'name':'',
            'description':'',
            'cost':''
        }

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.description && !newErrors.cost) {
            props.onSubmit(formState);
        }
    }

    return <>
        <div>
            <label>Product Name</label>
            <input type="text" 
                   name="name"
                   value={formState.name}
                   className="form-control"
                   onChange={handleFormField}
            /> 
        </div>

        <div>
            <label>Description</label>
            <textarea
                   name="description"
                   value={formState.description}     
                   className="form-control"
                   onChange={handleFormField}
            ></textarea>
        </div>

        <div>
            <label>Cost</label>
            <input type="number"
                   name="cost"
                   value={formState.cost}     
                   className="form-control"
                   onChange={handleFormField}
            />
            {
                errors.cost && <div className="invalid-feedback d-block">
                        {errors.cost}
                    </div>
            }
        </div>

        <button className="btn btn-primary mt-3"
                onClick={submitForm}
        >{props.label ?? "Submit"}</button>
    </>

}