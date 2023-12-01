import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function Hi() {

    const [subject, setSubject] = useState('');
    const [tutor, setTutor] = useState('');
    const [subjects, setSubjects] = useState<string[]>(['Math', 'Science']);

    useEffect(() => {
        setSubject('Math');
    }, [])

    const handleTutorChange = (event: any, newTutor: string) => { // React.ChangeEvent<{}>
        // if(!newTutor)
        //     return;
        console.log("newTutor", newTutor);
        setTutor(newTutor);
    };

    const handleSubjectChange = (event: any, newSubject: string | null) => { // React.ChangeEvent<{}>
        alert(newSubject);
        console.log("newSubject", newSubject);
        setSubject(newSubject ?? '');
    };

    return (
        <Autocomplete
        id="subject"
        ListboxProps={{
            style:{
                maxHeight: '30vh',
                fontFamily: 'Poppins'
            }
        }}
        inputValue={subject}
        onChange={handleSubjectChange}
        // filterOptions={filterSubject}
        options={subjects}
        getOptionLabel={(option: string) => option}
        sx={{ width: 200, ml: 2 }}
        renderInput={(params) =>
            <TextField 
                {...params}
                variant='filled'
                size='small'
                label="Subject" />
        }
    />
    )
}