import React from 'react';

const FormFields=(props)=>{

    const renderFields = ()=>{
        // console.log(props.formData);
        const formArray = [];
        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings: props.formData[elementName]
            })
        }
        return formArray.map((item,i)=>{
            return(
                <div key={i} className="from_element">
                    {template(item)}
                </div>
            )
        })

    }
    const showLabel = (show, label)=>{
        return show ?
            <label>{label}</label>
        :null
    }

    const changeHandler=(event)=>{
        console.log(event.target.value)
    }

     const  template = (data) =>{
        let formTemplate="";
        let values = data.settings;
        console.log(data)
        switch(values.element){
            case('input'):
                formTemplate= (
                    <div>
                       {showLabel(values.label, values.labelText)}
                       <input 
                           {...values.config}
                           value={values.placeholder}
                           type={values.type}
                           onChange={
                               (event)=>changeHandler(event)
                           }
                       />
                    </div>
                )

            break;

            default: formTemplate="";
        }

        return formTemplate;
    }

    return(
        <div>
            {renderFields()}
        </div>
    )
}
export default FormFields;