import { useState, useCallback } from 'react';
// 공통되어지는 useInput 훅을 만들어서 App2.js에 사용해보기

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    //change
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({ ...form, [name]: value }));
    }, []);
    const reset = useCallback(()=> setForm(initialForm),[initialForm]);
    return [form, onChange, reset];
}

export default useInputs
