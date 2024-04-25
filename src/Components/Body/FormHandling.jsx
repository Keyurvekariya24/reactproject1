import React, { useState } from 'react';

const FormHandling = () => {
    const [formData, setFormData] = useState({
        fname: '',
        mname: '',
        lname: ''
    });

    const [formDataList, setFormDataList] = useState([]);
    const [error, setError] = useState('')

    const saveData = (e) => {
        e.preventDefault();
        if (!formData.fname  || !formData.lname || !formData.mname) {
          setError( "All fields are required!" );
          return;
        }



        setFormDataList([...formDataList, formData]); 
        setFormData({
            fname: '',
            mname: '',
            lname: ''
        });
    }

    const getInputValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
      if (error) {
        setError('')
      }
    }

    return (
        <>
            <h2 className='text-center'>Registration</h2>
            <div className='w-50 mx-auto rounded p-3 ' style={{ backgroundColor: "lightgray" }}>
                <label>First Name</label>
                <input className='w-100 mb-3 rounded border-0' type="text" name='fname' value={formData.fname} onChange={getInputValue} />
                <label>Middle Name</label>
                <input className='w-100 mb-3 rounded border-0' type="text" name='mname' value={formData.mname} onChange={getInputValue} />
                <label>Last Name</label>
                <input className='w-100 mb-3 rounded border-0' type="text" name='lname' value={formData.lname} onChange={getInputValue} />
                <input style={{ backgroundColor: "orange" }} className='p-1 rounded border-0' type="submit" onClick={saveData} />
                {error &&  <p>{error}</p>}
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {formDataList.map((data, index) => (
                        <tr key={index}>
                            <td>{data.fname}</td>
                            <td>{data.mname}</td>
                            <td>{data.lname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FormHandling;
 